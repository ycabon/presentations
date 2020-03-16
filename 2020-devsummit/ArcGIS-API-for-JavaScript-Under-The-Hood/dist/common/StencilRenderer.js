define(["require", "exports", "./webglUtils"], function (require, exports, webglUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StencilRenderer = (function () {
        function StencilRenderer(tileSize) {
            if (tileSize === void 0) { tileSize = 512; }
            this.tileSize = tileSize;
            this._aPosition = 0;
        }
        StencilRenderer.prototype.dispose = function (gl) {
            if (this._wglProgram) {
                gl.deleteProgram(this._wglProgram);
                this._wglProgram = null;
            }
            if (this._vBuffer) {
                gl.deleteBuffer(this._vBuffer);
                this._vBuffer = null;
            }
        };
        StencilRenderer.prototype.beginStencilPass = function (gl) {
            this._initializeWebGL(gl);
            gl.enable(gl.STENCIL_TEST);
            gl.disable(gl.BLEND);
            gl.colorMask(false, false, false, false);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
            gl.stencilMask(0xff);
            gl.clearStencil(0);
            gl.clear(gl.STENCIL_BUFFER_BIT);
            gl.useProgram(this._wglProgram);
            gl.bindBuffer(gl.ARRAY_BUFFER, this._vBuffer);
            gl.vertexAttribPointer(this._aPosition, 2, gl.UNSIGNED_SHORT, false, 4, 0);
            gl.enableVertexAttribArray(this._aPosition);
        };
        StencilRenderer.prototype.endStencilPass = function (gl) {
            gl.disable(gl.STENCIL_TEST);
            gl.enable(gl.BLEND);
            gl.colorMask(true, true, true, true);
        };
        StencilRenderer.prototype.render = function (gl, tile) {
            gl.stencilFuncSeparate(gl.FRONT_AND_BACK, gl.ALWAYS, tile.stencilRef, 0xff);
            gl.uniformMatrix3fv(this._dvsMatrixLocation, false, tile.transforms.dvs);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        };
        StencilRenderer.prototype._initializeWebGL = function (gl) {
            if (this._wglProgram) {
                return;
            }
            var vertexSource = "precision mediump float;\n       attribute vec2 a_pos;\n\n       uniform highp mat3 u_dvsMat3;\n            \n       void main() {\n         vec3 v_pos = u_dvsMat3 * vec3(a_pos, 1.0);\n         gl_Position = vec4(v_pos.xy, 0.0, 1.0);\n       }";
            var fragmentSource = "void main() {\n         gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n       }";
            var attributeLocationMap = new Map([[this._aPosition, "a_position"]]);
            var program = webglUtils_1.createProgram(gl, vertexSource, fragmentSource, attributeLocationMap);
            gl.bindAttribLocation(program, this._aPosition, "a_position");
            this._dvsMatrixLocation = gl.getUniformLocation(program, "u_dvsMat3");
            var tileSize = this.tileSize;
            var quadVertices = new Uint16Array([0, 0, tileSize, 0, 0, tileSize, tileSize, tileSize]);
            var vb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vb);
            gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
            this._wglProgram = program;
            this._vBuffer = vb;
        };
        return StencilRenderer;
    }());
    exports.default = StencilRenderer;
});
//# sourceMappingURL=StencilRenderer.js.map