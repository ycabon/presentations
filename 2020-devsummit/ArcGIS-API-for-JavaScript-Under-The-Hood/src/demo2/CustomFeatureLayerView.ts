import { declared, subclass } from "esri/core/accessorSupport/decorators";
import Graphic from "esri/Graphic";
import BaseLayerViewGL2D from "esri/views/2d/layers/BaseLayerViewGL2D";
import { mat3, vec2 } from "gl-matrix";
import StencilRenderer from "../common/StencilRenderer";
import { createProgram } from "../common/webglUtils";
import { TileInfo } from "../interfaces";
import { BBox, RBush } from "../libs/interfaces";
import rbush from "../libs/rbush";
import CustomFeatureLayer from "./CustomFeatureLayer";
import Tile from "./Tile";

const sortTilesByLevel = (a: Tile, b: Tile) =>
  a.tileInfo.level - b.tileInfo.level !== 0
  ? a.tileInfo.level - b.tileInfo.level
  : a.tileInfo.row - b.tileInfo.row !== 0
  ? a.tileInfo.row - b.tileInfo.row
: a.tileInfo.col - b.tileInfo.col;

const DEG_TO_RAD = Math.PI / 180.0;
const DPI = 96;
const SYMBOL_SIZE = 20; // points

@subclass("CustomFeatureLayerView")
export default class CustomFeatureLayerView extends declared(BaseLayerViewGL2D) {
  // --------------------------------------------------------------------------
  //
  //  Private properties
  //
  // --------------------------------------------------------------------------

  private _featureTree: RBush<Graphic> = rbush<Graphic>(9, [".geometry.x", ".geometry.y", ".geometry.x", ".geometry.y"]);
  private _vaoExt: any;
  private _wglProgram: WebGLProgram;
  private _dvsMatrixLocation: WebGLUniformLocation;
  private _displayViewMatrixLocation: WebGLUniformLocation;
  private _pixelRatioLocation: WebGLUniformLocation;
  private _aPosition = 0;
  private _aOffset = 1;
  private _stencilRenderer: StencilRenderer;
  private _tilesToDispose: Tile[] = [];

  private _tilesToRender = new Map<string, Tile>();
  private _initialized = false;

  private _displayMat3 = mat3.create();
  private _displayViewMat3 = mat3.create();
  private _viewMat3 = mat3.create();

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------

  addTileToDisposequeue(tile: Tile): void {
    this._tilesToDispose.push(tile);
  }

  attach() {
    const layer = this.layer as CustomFeatureLayer;
    layer.queryFeatures(null).then((features) => {
      this._featureTree.load(features);
      for (const tileInfo of this.tiles) {
        this._acquireTile(tileInfo)
      }
      this._initialized = true;
      this.requestRender();
    });

    this._initializeWebGL(this.context);
  }

  detach() {
    const gl = this.context;
    this._disposeTiles(gl);

    if (this._wglProgram) {
      gl.deleteProgram(this._wglProgram);
      this._wglProgram = null;
    }

    if (this._stencilRenderer) {
      this._stencilRenderer.dispose(gl);
      this._stencilRenderer = null;
    }
  }

  tilesChanged(added: TileInfo[], removed: TileInfo[]): void {
    if (!this._initialized) {
      return;
    }

    for (const tile of added) {
      this._acquireTile(tile);
    }

    for (const remove of removed) {
      this._releaseTile(remove);
    }

    this.requestRender();
  }

  render(renderParameters: any) {
    if (!this._initialized) {
      return;
    }

    const gl = renderParameters.context;
    // make sure to dispose unused tiles
    this._disposeTiles(gl);

    if (this._tilesToRender.size === 0) {
      return;
    }

    const tilesToRender = Array.from(this._tilesToRender.values());

    const { state } = renderParameters;
    const pixelRatio = state.pixelRatio;
    const size: [number, number] = [pixelRatio * state.size[0], pixelRatio * state.size[1]];
    // this is the transformation matrix for the view (screen to WebGL)
    this._updateDisplayMatrix(size, state.rotation);

    tilesToRender.sort(sortTilesByLevel);
    // assign the reference values which we need in order to burn thestencil buffer
    for (let index = 0; index < tilesToRender.length; index++) {
      tilesToRender[index].stencilRef = index + 1;
    }

    tilesToRender.forEach((tile) => {
      // make sure to commit the tile's data first
      this._commitWebGLData(tile, renderParameters);
      // update the per-tile transformation
      tile.setTransform(state, this._displayViewMat3)
    });

    // issue the stencil pass
    const stencilRenderer = this._stencilRenderer;
    stencilRenderer.beginStencilPass(gl);
    tilesToRender.forEach((tile) => stencilRenderer.render(gl, tile));
    stencilRenderer.endStencilPass(gl);

    // // we need the stencil test in order to clip tiles
    gl.enable(gl.STENCIL_TEST);
    // but we don't want to enable stencil write at this point
    gl.stencilMask(0);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);

    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);


    // bind the shader
    gl.useProgram(this._wglProgram);

    gl.uniformMatrix3fv(this._displayViewMatrixLocation, false, this._displayViewMat3);
    gl.uniform1f(this._pixelRatioLocation, window.devicePixelRatio);

    // iterate and render each of the tiles to render
    tilesToRender.forEach((tile) => {
      this._renderTile(gl, tile);
    });

    this._vaoExt.bindVertexArray(null);
  }

  // --------------------------------------------------------------------------
  //
  //  Private methods
  //
  // --------------------------------------------------------------------------

  private _renderTile(gl: WebGLRenderingContext, tile: Tile): void {
    const elementCount = tile.tileData && tile.tileData.elementCount;
    if (!elementCount) {
      return;
    }

    // bind the tile's data (buffers)
    this._vaoExt.bindVertexArray(tile.vao);

    // set the tile's transformation
    gl.uniformMatrix3fv(this._dvsMatrixLocation, false, tile.transforms.dvs);

    // set the stencil ref
    gl.stencilFuncSeparate(gl.FRONT_AND_BACK, gl.EQUAL, tile.stencilRef, 0xff);

    // draw the tile
    gl.drawElements(
      gl.TRIANGLES,
      elementCount,
      gl.UNSIGNED_INT,
      0
    );
  }

  private _acquireTile(tileInfo: TileInfo): Tile {
    const tile = new Tile(tileInfo);

    const tileQueryExtent = this._createQueryExtent(tileInfo);
    const features = this._featureTree.search(tileQueryExtent);
    tile.setData(features);

    this._tilesToRender.set(tileInfo.id, tile);

    return tile;
  }

  private _releaseTile(tileInfo: TileInfo): void {
    const tile = this._tilesToRender.get(tileInfo.id);
    if (tile) {
      this._tilesToRender.delete(tileInfo.id);
      this._tilesToDispose.push(tile);
    }
  }

  private _createQueryExtent(tileInfo: TileInfo): BBox {
    // we need to consider the symbol size when we compute the extent to query
    const symbolSizePx = window.devicePixelRatio * pt2px(SYMBOL_SIZE);
    const symbolExpantion = tileInfo.resolution * (symbolSizePx + 2) / 2;
    const bounds = tileInfo.bounds;
    return {
      minX: bounds[0] - symbolExpantion,
      minY: bounds[1] - symbolExpantion,
      maxX: bounds[2] + symbolExpantion,
      maxY: bounds[3] + symbolExpantion
    };
  }

  private _commitWebGLData(tile: Tile, renderParams: any): void {
    // tslint:disable-next-line: no-string-literal
    if (tile.vao || !tile.hasData() || !tile.tileData["vertexData"]) {
      return;
    }

    const gl = renderParams.context;
    const vaoExt = this._vaoExt;
    const tileData = tile.tileData as { vertexData: Float32Array; indexData: Uint32Array };

    // create the vertex buffer
    tile.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tile.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, tileData.vertexData, gl.STATIC_DRAW);

    // create the index buffer
    tile.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tile.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, tileData.indexData, gl.STATIC_DRAW);


    // create the index buffer
    tile.vao = vaoExt.createVertexArray();
    // Start setting up the VAO state
    vaoExt.bindVertexArray(tile.vao);

    // vertex buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, tile.vertexBuffer);
    gl.vertexAttribPointer(this._aPosition, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(this._aPosition);
    gl.vertexAttribPointer(this._aOffset, 2, gl.FLOAT, false, 16, 8);
    gl.enableVertexAttribArray(this._aOffset);

    // index buffer
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tile.indexBuffer);

    // finished setting up VAO
    vaoExt.bindVertexArray(null);
  }

  private _disposeTiles(gl: WebGLRenderingContext): void {
    const vaoExt = this._vaoExt;

    const tilesToDispose = this._tilesToDispose;
    this._tilesToDispose = [];
    for (const tile of tilesToDispose) {
      tile.dispose(gl, vaoExt);
    }
  }

  private _updateDisplayMatrix(size: [number, number], rotation: number): void{
    // displayMat3
    const w = size[0] !== 0 ? 2 / size[0] : 0;
    const h = size[1] !== 0 ? -2 / size[1] : 0;
    // We store the displayMat3 as we will directly send it to the shader
    // (needed for screen aligned markers/labels as they are not affects by tile/view transforms)
    mat3.set(this._displayMat3, w, 0, 0, 0, h, 0, -1, 1, 1);

    // displayViewMat3
    // We want to rotate around the center of the map, however, our origin is in the upper left.
    // So we need to apply T * (rot) -T.
    const viewMat3 = mat3.identity(this._viewMat3);
    const viewT = vec2.fromValues(size[0] / 2, size[1] / 2);
    const viewTInverse = vec2.fromValues(-size[0] / 2, -size[1] / 2);
    const rads = DEG_TO_RAD * rotation;

    mat3.translate(viewMat3, viewMat3, viewT);
    mat3.rotate(viewMat3, viewMat3, rads);
    mat3.translate(viewMat3, viewMat3, viewTInverse);
    mat3.multiply(this._displayViewMat3, this._displayMat3, viewMat3);
  }

  private _initializeWebGL(context: WebGLRenderingContext): void {
    // we must initialize the extension first
    const gl = context;
    const ext =
    gl.getExtension("OES_vertex_array_object") ||
    gl.getExtension("MOZ_OES_vertex_array_object") ||
    gl.getExtension("WEBKIT_OES_vertex_array_object");
    if (!ext) {
      console.error("this implementaion of WebGL does not support extension OES_vertex_array_object!");
      return;
    }

    this._vaoExt = {
      createVertexArray: ext.createVertexArrayOES.bind(ext),
      deleteVertexArray: ext.deleteVertexArrayOES.bind(ext),
      bindVertexArray: ext.bindVertexArrayOES.bind(ext)
    };

    const vertexSource =
      `precision highp float;
        uniform mat3 u_dvsMat3;
        uniform mat3 u_displayViewMat3;
        uniform float u_pixelRatio;

        attribute vec2 a_position;
        attribute vec2 a_offset;

        varying vec2 v_offset;

        const float SIZE = 30.0;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0) + u_displayViewMat3 * vec3(SIZE * a_offset, 0.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
          v_offset = a_offset;
        }`;

  const fragmentSource =
    `precision highp float;

      varying vec2 v_offset;

      const vec4 fillColor = vec4(0.03, 0.43, 0.90, 0.65);
      const vec4 outlineColor = vec4(1.0, 0.0, 0.0, 0.65);
      const float outlineSize = 1.0 / 15.0; // 1.5 pixels over 30 / 2 (since we are dealing with half a marker at a time);

      void main() {
        mediump float dist = length(v_offset);
        mediump float fillalpha1 = 1.0 - smoothstep(0.45, 0.45 + outlineSize, dist);
        mediump float fillalpha2 = 1.0 - smoothstep(0.40, 0.45, dist);
        vec4 color1 = fillalpha1 * outlineColor;
        vec4 color2 = fillalpha2 * fillColor;
        gl_FragColor = (1.0 - color2.a) * color1 + color2;
      }`;

    const attributeLocationMap = new Map([[this._aPosition, "a_position"], [this._aOffset, "a_offset"]]);
    const program = createProgram(gl, vertexSource, fragmentSource, attributeLocationMap);

    this._dvsMatrixLocation = gl.getUniformLocation(
      program,
      "u_dvsMat3"
    );

    this._displayViewMatrixLocation = gl.getUniformLocation(
      program,
      "u_displayViewMat3"
    );

    this._pixelRatioLocation = gl.getUniformLocation(
      program,
      "u_pixelRatio"
    );

    this._stencilRenderer = new StencilRenderer<Tile>();
    this._wglProgram = program;
  }
}

function pt2px(pt: number): number {
  if (!pt) {
    return 0;
  }

  return (pt / 72) * DPI;
}