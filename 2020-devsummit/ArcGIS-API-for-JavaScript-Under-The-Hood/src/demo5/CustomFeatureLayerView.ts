import { declared, subclass } from "esri/core/accessorSupport/decorators";
import * as watchUtils from "esri/core/watchUtils";
import * as workers from "esri/core/workers";
import Connection from "esri/core/workers/Connection";
import BaseLayerViewGL2D from "esri/views/2d/layers/BaseLayerViewGL2D";
import { mat3, vec2 } from "gl-matrix";
import StencilRenderer from "../common/StencilRenderer";
import TileManager from "../common/TileManager";
import { createProgram } from "../common/webglUtils";
import { TileData, TileInfo } from "../interfaces";
import CustomFeatureLayer from "./CustomFeatureLayer";
import Tile from "./Tile";

const sortTilesByLevel = (a: Tile, b: Tile) =>
  a.tileInfo.level - b.tileInfo.level !== 0
  ? a.tileInfo.level - b.tileInfo.level
  : a.tileInfo.row - b.tileInfo.row !== 0
  ? a.tileInfo.row - b.tileInfo.row
  : a.tileInfo.col - b.tileInfo.col;

const DEG_TO_RAD = Math.PI / 180.0;

@subclass("CustomFeatureLayerView")
export default class CustomFeatureLayerView extends declared(BaseLayerViewGL2D) {
  // --------------------------------------------------------------------------
  //
  //  Private properties
  //
  // --------------------------------------------------------------------------

  private _tileManager: TileManager;
  private _vaoExt: any;
  private _wglProgram: WebGLProgram;
  private _dvsMatrixLocation: WebGLUniformLocation;
  private _displayViewMatrixLocation: WebGLUniformLocation;
  private _pixelRatioLocation: WebGLUniformLocation;
  private _vvSizeMinMaxValue: WebGLUniformLocation;
  private _uniqueValueColors: WebGLUniformLocation;
  private _aPosition = 0;
  private _aOffset = 1;
  private _aVV = 2;
  private _stencilRenderer: StencilRenderer;
  private _tilesToDispose: Tile[] = [];
  private _tileRequestsToAbortController = new Map<string, AbortController>();
  private _updateTimer = 0;
  private _updateRequested = true;
  private _minMinMaxVV = [20, 100, 5, 50]; // min/max value, min/max size
  private _colors = [0.0, 0.2, 0.8, 0.75,
                     0.0, 1.0, 0.0, 0.75,
                     0.0, 0.0, 1.0, 0.75,
                     1.0, 1.0, 0.0, 0.75,
                     0.0, 1.0, 1.0, 0.75,
                     1.0, 1.0, 1.0, 0.75,
                     0.0, 0.0, 0.0, 0.75];
  private _connection: Connection;
  private _processingPipelinePromise: Promise<{}>;

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
    watchUtils.init(this, "layer.colorRamp", (colorRamp) => {
      this._setColors(colorRamp);
    });

    this._tileManager = new TileManager<Tile>({
      acquireTile: (tileInfo: TileInfo) => this._acquireTile(tileInfo),
      releaseTile: (tile) => this._releaseTile(tile),
    });

    // start the update cycle
    this._updateTimer = window.setInterval(() => this._doUpdate(), 16);

    const layer = this.layer as CustomFeatureLayer;
    this._processingPipelinePromise = workers.open("app/FeaturePipeline", { strategy: "dedicated" })
      .then((connection) => {
        this._connection = connection;
        return connection.invoke("tileProcessor.initialize", { url:  layer.url, pixelRatio: window.devicePixelRatio, maxRecordCount: 2000 });
      });

    this._initializeWebGL(this.context);
  }

  detach() {
    if (this._connection) {
      this._connection.close();
    }

    if (this._updateTimer !== 0) {
      clearInterval(this._updateTimer);
    }

    if (this._tileManager) {
      this._tileManager.destroy();
      this._tileManager = null;
    }

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
    this._requestUpdate();
  }

  render(renderParameters: any) {
    const gl = renderParameters.context;
    // make sure to dispose unused tiles
    this._disposeTiles(gl);

    const tilesToRender = this._tileManager.tilesToRender as Tile[];
    if (tilesToRender.length === 0) {
      return;
    }

    const { state } = renderParameters;
    const pixelRatio = state.pixelRatio;
    const size: [number, number] = [pixelRatio * state.size[0], pixelRatio * state.size[1]];
    this._updateDisplayMatrix(size, state.rotation);

    tilesToRender.sort(sortTilesByLevel);
    // assign the reference values which we need in order to burn the stencil buffer
    for (let index = 0; index < tilesToRender.length; index++) {
      tilesToRender[index].stencilRef = index + 1;
    }

    tilesToRender.forEach((tile) => {
      // make sure to commit the tile's data first (upload the data to the GPU)
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

    // set uniforms for all tiles:
    gl.uniformMatrix3fv(this._displayViewMatrixLocation, false, this._displayViewMat3);
    gl.uniform1f(this._pixelRatioLocation, window.devicePixelRatio);
    gl.uniform4fv(this._vvSizeMinMaxValue, this._minMinMaxVV);
    gl.uniform4fv(this._uniqueValueColors, this._colors);

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
    const tileData = tile.tileData;
    if (!tileData || !tileData.elementCount) {
      return;
    }

    // bind the vao
    this._vaoExt.bindVertexArray(tile.vao);

    gl.uniformMatrix3fv(this._dvsMatrixLocation, false, tile.transforms.dvs);
    // set the stencil ref value in order to only pass the fragments within this tile extent
    gl.stencilFuncSeparate(gl.FRONT_AND_BACK, gl.EQUAL, tile.stencilRef, 0xff);

    // draw
    gl.drawElements(
      gl.TRIANGLES,
      tileData.elementCount, // since for now we only render a square for each tile
      gl.UNSIGNED_INT,
      0
    );
  }

  private _acquireTile(tileInfo: TileInfo): Tile {
    const tile = new Tile(tileInfo);

    const abortController = new  AbortController();

    this._getTileData(tileInfo, { signal: abortController.signal }).then((tileData) => {
      this._tileRequestsToAbortController.delete(tileInfo.id);
      tile.setData(tileData);
      this._requestUpdate();
    })
    .catch((error) => {
      this._tileRequestsToAbortController.delete(tileInfo.id);
      tile.setData(null);
      this._requestUpdate();
      if (!(error && error.name === "AbortError")) {
        throw error;
      }
    });

    this._tileRequestsToAbortController.set(tileInfo.id, abortController);

    return tile;
  }

  private _releaseTile(tile: Tile): void {
    const tileInfo = tile.tileInfo;
    // if the tile is in flight we need to cancel the request
    const abortController = this._tileRequestsToAbortController.get(tileInfo.id);
    if (abortController) {
      abortController.abort();
      this._tileRequestsToAbortController.delete(tileInfo.id);
    }

    this._tilesToDispose.push(tile);
  }

  private async _getTileData(tileInfo: TileInfo, abortOptions: { signal: AbortSignal }): Promise<TileData> {
    await this._processingPipelinePromise;
    return this._connection.invoke("tileProcessor.getTileData", tileInfo, abortOptions);
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
    gl.vertexAttribPointer(this._aPosition, 2, gl.FLOAT, false, 24, 0);
    gl.enableVertexAttribArray(this._aPosition);
    gl.vertexAttribPointer(this._aOffset, 2, gl.FLOAT, false, 24, 8);
    gl.enableVertexAttribArray(this._aOffset);
    gl.vertexAttribPointer(this._aVV, 2, gl.FLOAT, false, 24, 16);
    gl.enableVertexAttribArray(this._aVV);

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
        uniform vec4 u_vvSizeMinMaxValue;
        uniform vec4 u_uniqueValueColors[7];

        attribute vec2 a_position;
        attribute vec2 a_offset;
        attribute vec2 a_vv;

        varying vec2 v_offset;
        varying vec4 v_fillColor;
        varying float v_size;

        float getVVMinMaxSize(float sizeValue) {
          // we need to multiply by 8 in order to translate to tile coordinates
          float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);
          interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
          return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);
        }

        void main() {
          float size = getVVMinMaxSize(a_vv.y);
          v_size = size;

          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0) + u_displayViewMat3 * vec3(size * a_offset, 0.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
          v_offset = a_offset;
          v_fillColor = u_uniqueValueColors[int(a_vv.x)];
        }`;

  const fragmentSource =
    `precision highp float;

      varying vec2 v_offset;
      varying vec4 v_fillColor;
      varying float v_size;

      const vec4 outlineColor = vec4(1.0, 0.0, 0.0, 0.65);

      void main() {
        float outlineSizeFactor = min(1.0 / v_size, 0.1);
        mediump float dist = length(v_offset);
        mediump float fillalpha1 = 1.0 - smoothstep(0.45 - outlineSizeFactor, 0.45 + outlineSizeFactor, dist);
        mediump float fillalpha2 = 1.0 - smoothstep(0.40 - outlineSizeFactor, 0.45, dist);
        vec4 color1 = fillalpha1 * outlineColor;
        vec4 color2 = fillalpha2 * v_fillColor;
        gl_FragColor = (1.0 - color2.a) * color1 + color2;
      }`;

    const attributeLocationMap = new Map([[this._aPosition, "a_position"], [this._aOffset, "a_offset"], [this._aVV, "a_vv"]]);
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

    this._vvSizeMinMaxValue = gl.getUniformLocation(
      program,
      "u_vvSizeMinMaxValue"
    );

    this._uniqueValueColors = gl.getUniformLocation(
      program,
      "u_uniqueValueColors"
    );

    this._stencilRenderer = new StencilRenderer<Tile>();
    this._wglProgram = program;
  }

  private _doUpdate(): void {
    if (this._updateRequested) {
      this._tileManager.update(this.tiles);
      this.requestRender();
      this._updateRequested = false;
    }
  }

  private _requestUpdate(): void {
    this._updateRequested = true;
  }

  private _setColors(colorRamp: __esri.colorRampsColorRamp): void {
    const colors = colorRamp.colorsForClassBreaks[6].colors;

    if (colors.length < 7) {
      console.error(`expected at least 7 colors in ramp!`);
    }

    for (let index = 0; index < colors.length; index++) {
      const color = colors[index];
      this._colors[4 * index + 0] = color.r / 255;
      this._colors[4 * index + 1] = color.g / 255;
      this._colors[4 * index + 2] = color.b / 255;
      this._colors[4 * index + 3] = color.a;
    }

    this.requestRender();
  }
}