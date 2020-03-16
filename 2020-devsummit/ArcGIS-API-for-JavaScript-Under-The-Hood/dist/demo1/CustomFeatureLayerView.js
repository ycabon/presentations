define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/core/watchUtils", "esri/views/2d/layers/BaseLayerViewGL2D", "gl-matrix", "../common/webglUtils"], function (require, exports, tslib_1, decorators_1, watchUtils, BaseLayerViewGL2D_1, gl_matrix_1, webglUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    watchUtils = tslib_1.__importStar(watchUtils);
    BaseLayerViewGL2D_1 = tslib_1.__importDefault(BaseLayerViewGL2D_1);
    var CustomFeatureLayerView = (function (_super) {
        tslib_1.__extends(CustomFeatureLayerView, _super);
        function CustomFeatureLayerView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._dvsMat3 = gl_matrix_1.mat3.create();
            _this._displayViewMat3 = gl_matrix_1.mat3.create();
            _this._aPosition = 0;
            _this._aOffset = 1;
            return _this;
        }
        CustomFeatureLayerView.prototype.attach = function () {
            var _this = this;
            watchUtils.init(this, "layer.graphics", function (features) {
                _this._createMesh(features);
            });
            this._wglProgram = this._createShaderProgram(this.context);
        };
        CustomFeatureLayerView.prototype.detach = function () {
            var gl = this.context;
            if (this._vao) {
                this._vaoExt.deleteVertexArray(this._vao);
                this._vao = null;
                this._vaoExt = null;
                gl.deleteBuffer(this._vertexBuffer);
                this._vertexBuffer = null;
                gl.deleteBuffer(this._indexBuffer);
                this._indexBuffer = null;
            }
            if (this._wglProgram) {
                gl.deleteProgram(this._wglProgram);
                this._wglProgram = null;
            }
        };
        CustomFeatureLayerView.prototype.render = function (renderParameters) {
            if (!this._vertexData || !this._indexData) {
                return;
            }
            this._updateWebGL(renderParameters);
            this._updateMatrices(renderParameters);
            var gl = renderParameters.context;
            gl.disable(gl.CULL_FACE);
            gl.enable(gl.BLEND);
            gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.useProgram(this._wglProgram);
            this._vaoExt.bindVertexArray(this._vao);
            gl.uniformMatrix3fv(this._dvsMatrixLocation, false, this._dvsMat3);
            gl.uniformMatrix3fv(this._displayViewMatrixLocation, false, this._displayViewMat3);
            gl.uniform1f(this._pixelRatioLocation, window.devicePixelRatio);
            gl.drawElements(gl.TRIANGLES, this._indexBufferLength, gl.UNSIGNED_INT, 0);
            this._vaoExt.bindVertexArray(null);
        };
        CustomFeatureLayerView.prototype._createMesh = function (features) {
            if (!features) {
                return;
            }
            var stride = 4 * 4;
            var indicesPerQuad = 6;
            var vertexData = new Float32Array(features.length * stride);
            var indexData = new Uint32Array(indicesPerQuad * features.length);
            var arrayIndex = 0;
            for (var index = 0; index < features.length; index++) {
                var point = features[index].geometry;
                arrayIndex = stride * index;
                vertexData[arrayIndex + 0] = point.x;
                vertexData[arrayIndex + 1] = point.y;
                vertexData[arrayIndex + 2] = -0.5;
                vertexData[arrayIndex + 3] = -0.5;
                vertexData[arrayIndex + 4] = point.x;
                vertexData[arrayIndex + 5] = point.y;
                vertexData[arrayIndex + 6] = 0.5;
                vertexData[arrayIndex + 7] = -0.5;
                vertexData[arrayIndex + 8] = point.x;
                vertexData[arrayIndex + 9] = point.y;
                vertexData[arrayIndex + 10] = -0.5;
                vertexData[arrayIndex + 11] = 0.5;
                vertexData[arrayIndex + 12] = point.x;
                vertexData[arrayIndex + 13] = point.y;
                vertexData[arrayIndex + 14] = 0.5;
                vertexData[arrayIndex + 15] = 0.5;
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
        };
        CustomFeatureLayerView.prototype._createShaderProgram = function (gl) {
            var vertexSource = "precision highp float;\n        uniform mat3 u_dvsMat3;\n        uniform mat3 u_displayViewMat3;\n        uniform float u_pixelRatio;\n\n        attribute vec2 a_position;\n        attribute vec2 a_offset;\n\n        varying vec2 v_offset;\n\n        const float SIZE = 30.0;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0) + u_displayViewMat3 * vec3(SIZE * a_offset, 0.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n          v_offset = a_offset;\n        }";
            var fragmentSource = "precision highp float;\n\n      varying vec2 v_offset;\n\n      const vec4 fillColor = vec4(0.23, 0.83, 0.0, 0.65);\n      const vec4 outlineColor = vec4(1.0, 0.0, 0.0, 0.65);\n      const float outlineSize = 1.0 / 15.0; // 1.5 pixels over 30 / 2 (since we are dealing with half a marker at a time);\n\n      void main() {\n        mediump float dist = length(v_offset);\n        mediump float fillalpha1 = 1.0 - smoothstep(0.45, 0.45 + outlineSize, dist);\n        mediump float fillalpha2 = 1.0 - smoothstep(0.40, 0.45, dist);\n        vec4 color1 = fillalpha1 * outlineColor;\n        vec4 color2 = fillalpha2 * fillColor;\n        gl_FragColor = (1.0 - color2.a) * color1 + color2;\n      }";
            var attributeLocationMap = new Map([[this._aPosition, "a_position"], [this._aOffset, "a_offset"]]);
            var program = webglUtils_1.createProgram(gl, vertexSource, fragmentSource, attributeLocationMap);
            this._dvsMatrixLocation = gl.getUniformLocation(program, "u_dvsMat3");
            this._displayViewMatrixLocation = gl.getUniformLocation(program, "u_displayViewMat3");
            this._pixelRatioLocation = gl.getUniformLocation(program, "u_pixelRatio");
            return program;
        };
        CustomFeatureLayerView.prototype._updateWebGL = function (renderParameters) {
            if (this._vao) {
                return;
            }
            var gl = renderParameters.context;
            var ext = gl.getExtension("OES_vertex_array_object") ||
                gl.getExtension("MOZ_OES_vertex_array_object") ||
                gl.getExtension("WEBKIT_OES_vertex_array_object");
            if (!ext) {
                console.error("this implementaion of WebGL does not support extension OES_vertex_array_object!");
                return;
            }
            var vaoExt = {
                createVertexArray: ext.createVertexArrayOES.bind(ext),
                deleteVertexArray: ext.deleteVertexArrayOES.bind(ext),
                bindVertexArray: ext.bindVertexArrayOES.bind(ext)
            };
            var vb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vb);
            gl.bufferData(gl.ARRAY_BUFFER, this._vertexData, gl.STATIC_DRAW);
            var ib = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this._indexData, gl.STATIC_DRAW);
            var vao = vaoExt.createVertexArray();
            vaoExt.bindVertexArray(vao);
            gl.bindBuffer(gl.ARRAY_BUFFER, vb);
            gl.vertexAttribPointer(this._aPosition, 2, gl.FLOAT, false, 16, 0);
            gl.enableVertexAttribArray(this._aPosition);
            gl.vertexAttribPointer(this._aOffset, 2, gl.FLOAT, false, 16, 8);
            gl.enableVertexAttribArray(this._aOffset);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);
            vaoExt.bindVertexArray(null);
            this._vertexBuffer = vb;
            this._indexBuffer = ib;
            this._vao = vao;
            this._vaoExt = vaoExt;
        };
        CustomFeatureLayerView.prototype._updateMatrices = function (renderParameters) {
            var state = renderParameters.state;
            var size = state.size, resolution = state.resolution, rotation = state.rotation, viewpoint = state.viewpoint;
            gl_matrix_1.mat3.identity(this._displayViewMat3);
            var w = size[0] !== 0 ? 2 / size[0] : 0;
            var h = size[1] !== 0 ? -2 / size[1] : 0;
            gl_matrix_1.mat3.set(this._displayViewMat3, w, 0, 0, 0, h, 0, -1, 1, 1);
            var viewPointGeometry = viewpoint.targetGeometry;
            var centerX = viewPointGeometry.x;
            var centerY = viewPointGeometry.y;
            var widthInMapUnits = resolution * size[0];
            var heightInMapUnits = resolution * size[1];
            var viewMat3 = gl_matrix_1.mat3.identity(this._dvsMat3);
            var rads = (Math.PI / 180) * rotation;
            gl_matrix_1.mat3.multiply(viewMat3, this._displayViewMat3, viewMat3);
            gl_matrix_1.mat3.translate(viewMat3, viewMat3, gl_matrix_1.vec2.fromValues(size[0] / 2, size[1] / 2));
            gl_matrix_1.mat3.scale(viewMat3, viewMat3, gl_matrix_1.vec2.fromValues(size[0] / widthInMapUnits, -size[1] / heightInMapUnits));
            gl_matrix_1.mat3.rotate(viewMat3, viewMat3, -rads);
            gl_matrix_1.mat3.translate(viewMat3, viewMat3, gl_matrix_1.vec2.fromValues(-centerX, -centerY));
        };
        CustomFeatureLayerView = tslib_1.__decorate([
            decorators_1.subclass("CustomFeatureLayerView")
        ], CustomFeatureLayerView);
        return CustomFeatureLayerView;
    }(decorators_1.declared(BaseLayerViewGL2D_1.default)));
    exports.default = CustomFeatureLayerView;
});
//# sourceMappingURL=CustomFeatureLayerView.js.map