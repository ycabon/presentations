import { declared, subclass } from "esri/core/accessorSupport/decorators";
import * as watchUtils from "esri/core/watchUtils";
import Point from "esri/geometry/Point"
import Graphic from "esri/Graphic";
import BaseLayerViewGL2D from "esri/views/2d/layers/BaseLayerViewGL2D";
import { mat3, vec2 } from "gl-matrix";
import { createProgram } from "../common/webglUtils";

@subclass("CustomFeatureLayerView")
export default class CustomFeatureLayerView extends declared(BaseLayerViewGL2D) {
  // --------------------------------------------------------------------------
  //
  //  Private properties
  //
  // --------------------------------------------------------------------------
  private readonly _dvsMat3 = mat3.create();
  private readonly _displayViewMat3 = mat3.create();

  private _wglProgram: WebGLProgram;
  private _vao: WebGLObject;
  private _vertexBuffer: WebGLBuffer;
  private _indexBuffer: WebGLBuffer;
  private _aPosition = 0;
  private _aOffset = 1;
  private _dvsMatrixLocation: WebGLUniformLocation;
  private _displayViewMatrixLocation: WebGLUniformLocation;
  private _pixelRatioLocation: WebGLUniformLocation;
  private _indexBufferLength: number;
  private _vertexData: Float32Array;
  private _indexData: Uint32Array
  private _vaoExt: any;

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------
  attach() {
    watchUtils.init(this, "layer.graphics", (features) => {
      this._createMesh(features);
    });

    // create the shader program
    this._wglProgram = this._createShaderProgram(this.context);
  }

  detach() {
    const gl = this.context;

    if (this._vao) {
      this._vaoExt.deleteVertexArray(this._vao);
      this._vao = null;
      this._vaoExt = null;

      gl.deleteBuffer(this._vertexBuffer);
      this._vertexBuffer = null
      gl.deleteBuffer(this._indexBuffer);
      this._indexBuffer = null;
    }

    if (this._wglProgram) {
      gl.deleteProgram(this._wglProgram);
      this._wglProgram = null;
    }
  }

  render(renderParameters: any) {
    if (!this._vertexData || !this._indexData) {
      return;
    }

    this._updateWebGL(renderParameters);
    this._updateMatrices(renderParameters);

    const gl = renderParameters.context;
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    // bind the shader program
    gl.useProgram(this._wglProgram);

    // bind the buffer data
     this._vaoExt.bindVertexArray(this._vao);

    // set the uniforms
    gl.uniformMatrix3fv(this._dvsMatrixLocation, false, this._dvsMat3);
    gl.uniformMatrix3fv(this._displayViewMatrixLocation, false, this._displayViewMat3);
    gl.uniform1f(this._pixelRatioLocation, window.devicePixelRatio);

    // dispatch the drawing
    gl.drawElements(
      gl.TRIANGLES,
      this._indexBufferLength,
      gl.UNSIGNED_INT,
      0
    );

    this._vaoExt.bindVertexArray(null);
  }

  // --------------------------------------------------------------------------
  //
  //  Private methods
  //
  // --------------------------------------------------------------------------
  private _createMesh(features: Graphic[]): void {
    if (!features) {
      return;
    }
    // create TypedArrays from the features (for now use position and offset only)
    // we use four floats per vertex, and we have 4 vertices per marker
    const stride = 4 * 4;
    const indicesPerQuad = 6;
    const vertexData = new Float32Array(features.length * stride);
    const indexData = new Uint32Array(indicesPerQuad * features.length)
    let arrayIndex = 0;
    // iterate of the features and create the mesh (vertexData)
    for (let index = 0; index < features.length; index++) {
      const point = features[index].geometry as Point;
      arrayIndex = stride * index;

      // encode the per vertex data
      // each vertes is encoded with a position and an offset
      // the offset is given in terms of portion of the overall size (0.5 of the marker size)

      // upper-left
      vertexData[arrayIndex + 0] = point.x;
      vertexData[arrayIndex + 1] = point.y;
      vertexData[arrayIndex + 2] = -0.5;
      vertexData[arrayIndex + 3] = -0.5;

      // upper-right
      vertexData[arrayIndex + 4] = point.x;
      vertexData[arrayIndex + 5] = point.y;
      vertexData[arrayIndex + 6] = 0.5;
      vertexData[arrayIndex + 7] = -0.5;

      // lower-left
      vertexData[arrayIndex + 8] = point.x;
      vertexData[arrayIndex + 9] = point.y;
      vertexData[arrayIndex + 10] = -0.5;
      vertexData[arrayIndex + 11] = 0.5;

      // lower right
      vertexData[arrayIndex + 12] = point.x;
      vertexData[arrayIndex + 13] = point.y;
      vertexData[arrayIndex + 14] = 0.5;
      vertexData[arrayIndex + 15] = 0.5;

      // encode the index buffer
      indexData[indicesPerQuad * index + 0] = 4 * index + 0;
      indexData[indicesPerQuad * index + 1] = 4 * index + 1;
      indexData[indicesPerQuad * index + 2] = 4 * index + 2;
      indexData[indicesPerQuad * index + 3] = 4 * index + 1;
      indexData[indicesPerQuad * index + 4] = 4 * index + 3;
      indexData[indicesPerQuad * index + 5] = 4 * index + 2;
    }

    this._vertexData = vertexData;
    this._indexData = indexData;
    this._indexBufferLength = indicesPerQuad * features.length;

    this.requestRender();
  }

  private _createShaderProgram(gl: WebGLRenderingContext): WebGLProgram {
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

      const vec4 fillColor = vec4(0.23, 0.83, 0.0, 0.65);
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

    return program;
  }

  private _updateWebGL(renderParameters: any): void {
    if (this._vao) {
      return;
    }

    // we must initialize the extension first
    const gl = renderParameters.context;
    const ext =
    gl.getExtension("OES_vertex_array_object") ||
    gl.getExtension("MOZ_OES_vertex_array_object") ||
    gl.getExtension("WEBKIT_OES_vertex_array_object");
    if (!ext) {
      console.error("this implementaion of WebGL does not support extension OES_vertex_array_object!");
      return;
    }

    const vaoExt = {
      createVertexArray: ext.createVertexArrayOES.bind(ext),
      deleteVertexArray: ext.deleteVertexArrayOES.bind(ext),
      bindVertexArray: ext.bindVertexArrayOES.bind(ext)
    };

    // create the vertex buffer
    const vb = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vb);
    gl.bufferData(gl.ARRAY_BUFFER, this._vertexData, gl.STATIC_DRAW);

    // create the index buffer
    const ib = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this._indexData, gl.STATIC_DRAW);


    // create the index buffer
    const vao = vaoExt.createVertexArray();
    // Start setting up the VAO state
    vaoExt.bindVertexArray(vao);

    // vertex buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, vb);
    gl.vertexAttribPointer(this._aPosition, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(this._aPosition);
    gl.vertexAttribPointer(this._aOffset, 2, gl.FLOAT, false, 16, 8);
    gl.enableVertexAttribArray(this._aOffset);

    // index buffer
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);

    // finished setting up VAO
    vaoExt.bindVertexArray(null);

    this._vertexBuffer = vb;
    this._indexBuffer = ib;
    this._vao = vao;
    this._vaoExt = vaoExt;
  }

  private _updateMatrices(renderParameters: any): void {
    const state = renderParameters.state;
    const { size, resolution, rotation, viewpoint } = state;
    mat3.identity(this._displayViewMat3);
    const w = size[0] !== 0 ? 2 / size[0] : 0;
    const h = size[1] !== 0 ? -2 / size[1] : 0;
    mat3.set(this._displayViewMat3, w, 0, 0, 0, h, 0, -1, 1, 1);

    const viewPointGeometry = viewpoint.targetGeometry as Point;
    const centerX = viewPointGeometry.x;
    const centerY = viewPointGeometry.y;
    const widthInMapUnits = resolution * size[0];
    const heightInMapUnits = resolution * size[1];

    const viewMat3 = mat3.identity(this._dvsMat3);
    const rads = (Math.PI / 180) * rotation;

    mat3.multiply(viewMat3, this._displayViewMat3, viewMat3);
    mat3.translate(viewMat3, viewMat3, vec2.fromValues(size[0] / 2, size[1] / 2));
    mat3.scale(viewMat3, viewMat3, vec2.fromValues(size[0] / widthInMapUnits, -size[1] / heightInMapUnits));
    mat3.rotate(viewMat3, viewMat3, -rads);
    mat3.translate(viewMat3, viewMat3, vec2.fromValues(-centerX, -centerY));
  }
}