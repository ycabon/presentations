import { ITile } from "../interfaces";
import { createProgram } from "./webglUtils";

export default class StencilRenderer<T extends ITile = ITile> {

  // --------------------------------------------------------------------------
  //
  //  Private properties
  //
  // --------------------------------------------------------------------------

  private _wglProgram: WebGLProgram;
  private _vBuffer: WebGLBuffer;
  private _dvsMatrixLocation: WebGLUniformLocation;
  private _aPosition = 0;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  constructor(public tileSize = 512) {
  }

  dispose(gl: WebGLRenderingContext): void {
    if (this._wglProgram) {
      gl.deleteProgram(this._wglProgram);
      this._wglProgram = null;
    }

    if (this._vBuffer) {
      gl.deleteBuffer(this._vBuffer);
      this._vBuffer = null;
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------

  beginStencilPass(gl: WebGLRenderingContext) {
    this._initializeWebGL(gl);

    gl.enable(gl.STENCIL_TEST);
    gl.disable(gl.BLEND);
    gl.colorMask(false, false, false, false);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
    gl.stencilMask(0xff);

    // clear the stencil buffer!
    gl.clearStencil(0);
    gl.clear(gl.STENCIL_BUFFER_BIT);

    gl.useProgram(this._wglProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._vBuffer);
    gl.vertexAttribPointer(this._aPosition, 2, gl.UNSIGNED_SHORT, false, 4, 0);
    gl.enableVertexAttribArray(this._aPosition);
  }

  endStencilPass(gl: WebGL2RenderingContext) {
    gl.disable(gl.STENCIL_TEST);
    gl.enable(gl.BLEND);
    gl.colorMask(true, true, true, true);
  }

  render(gl: WebGLRenderingContext, tile: T): void {
    gl.stencilFuncSeparate(gl.FRONT_AND_BACK, gl.ALWAYS, tile.stencilRef, 0xff);
    
    gl.uniformMatrix3fv(this._dvsMatrixLocation, false, tile.transforms.dvs);

    // draw the quad
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  // --------------------------------------------------------------------------
  //
  //  Private methods
  //
  // --------------------------------------------------------------------------

  private _initializeWebGL(gl: WebGLRenderingContext): void {
    if (this._wglProgram) {
      return;
    }

    const vertexSource =
      `precision mediump float;
       attribute vec2 a_pos;

       uniform highp mat3 u_dvsMat3;
            
       void main() {
         vec3 v_pos = u_dvsMat3 * vec3(a_pos, 1.0);
         gl_Position = vec4(v_pos.xy, 0.0, 1.0);
       }`;

    const fragmentSource =
      `void main() {
         gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
       }`;

    const attributeLocationMap = new Map([[this._aPosition, "a_position"]]);
    const program = createProgram(gl, vertexSource, fragmentSource, attributeLocationMap);

    // Bind attributes.
    gl.bindAttribLocation(program, this._aPosition, "a_position");

    this._dvsMatrixLocation = gl.getUniformLocation(
      program,
      "u_dvsMat3"
    );

    const tileSize = this.tileSize;
    const quadVertices = new Uint16Array([0, 0, tileSize, 0, 0, tileSize, tileSize, tileSize]);
    const vb = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vb);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    this._wglProgram = program;
    this._vBuffer = vb;
  }
}