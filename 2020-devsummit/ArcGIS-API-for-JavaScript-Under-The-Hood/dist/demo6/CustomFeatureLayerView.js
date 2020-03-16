define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/core/watchUtils", "esri/core/workers", "esri/views/2d/layers/BaseLayerViewGL2D", "gl-matrix", "../common/StencilRenderer", "../common/TileManager", "../common/webglUtils", "./Tile"], function (require, exports, tslib_1, decorators_1, watchUtils, workers, BaseLayerViewGL2D_1, gl_matrix_1, StencilRenderer_1, TileManager_1, webglUtils_1, Tile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    watchUtils = tslib_1.__importStar(watchUtils);
    workers = tslib_1.__importStar(workers);
    BaseLayerViewGL2D_1 = tslib_1.__importDefault(BaseLayerViewGL2D_1);
    StencilRenderer_1 = tslib_1.__importDefault(StencilRenderer_1);
    TileManager_1 = tslib_1.__importDefault(TileManager_1);
    Tile_1 = tslib_1.__importDefault(Tile_1);
    var sortTilesByLevel = function (a, b) {
        return a.tileInfo.level - b.tileInfo.level !== 0
            ? a.tileInfo.level - b.tileInfo.level
            : a.tileInfo.row - b.tileInfo.row !== 0
                ? a.tileInfo.row - b.tileInfo.row
                : a.tileInfo.col - b.tileInfo.col;
    };
    var DEG_TO_RAD = Math.PI / 180.0;
    var CustomFeatureLayerView = (function (_super) {
        tslib_1.__extends(CustomFeatureLayerView, _super);
        function CustomFeatureLayerView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._aPosition = 0;
            _this._aOffset = 1;
            _this._aVV = 2;
            _this._tilesToDispose = [];
            _this._tileRequestsToAbortController = new Map();
            _this._updateTimer = 0;
            _this._updateRequested = true;
            _this._minMinMaxVV = [20, 100, 5, 50];
            _this._colors = [0.0, 0.2, 0.8, 0.75,
                0.0, 1.0, 0.0, 0.75,
                0.0, 0.0, 1.0, 0.75,
                1.0, 1.0, 0.0, 0.75,
                0.0, 1.0, 1.0, 0.75,
                1.0, 1.0, 1.0, 0.75,
                0.0, 0.0, 0.0, 0.75];
            _this._displayMat3 = gl_matrix_1.mat3.create();
            _this._displayViewMat3 = gl_matrix_1.mat3.create();
            _this._viewMat3 = gl_matrix_1.mat3.create();
            return _this;
        }
        CustomFeatureLayerView.prototype.addTileToDisposequeue = function (tile) {
            this._tilesToDispose.push(tile);
        };
        CustomFeatureLayerView.prototype.attach = function () {
            var _this = this;
            watchUtils.init(this, "layer.colorRamp", function (colorRamp) {
                _this._setColors(colorRamp);
            });
            watchUtils.init(this, "layer.minMaxDaysSinceUpate", function (minMax) {
                _this._minMinMaxVV[0] = minMax[0];
                _this._minMinMaxVV[1] = minMax[1];
                _this.requestRender();
            });
            this._tileManager = new TileManager_1.default({
                acquireTile: function (tileInfo) { return _this._acquireTile(tileInfo); },
                releaseTile: function (tile) { return _this._releaseTile(tile); },
            });
            this._updateTimer = window.setInterval(function () { return _this._doUpdate(); }, 16);
            var layer = this.layer;
            this._processingPipelinePromise = workers.open("app/FeaturePipeline", { strategy: "dedicated" })
                .then(function (connection) {
                _this._connection = connection;
                return connection.invoke("tileProcessor.initialize", { url: layer.url, pixelRatio: window.devicePixelRatio, maxRecordCount: 2000 });
            });
            this._initializeWebGL(this.context);
        };
        CustomFeatureLayerView.prototype.detach = function () {
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
            var gl = this.context;
            this._disposeTiles(gl);
            if (this._wglProgram) {
                gl.deleteProgram(this._wglProgram);
                this._wglProgram = null;
            }
            if (this._stencilRenderer) {
                this._stencilRenderer.dispose(gl);
                this._stencilRenderer = null;
            }
        };
        CustomFeatureLayerView.prototype.tilesChanged = function (added, removed) {
            this._requestUpdate();
        };
        CustomFeatureLayerView.prototype.render = function (renderParameters) {
            var _this = this;
            var gl = renderParameters.context;
            this._disposeTiles(gl);
            var tilesToRender = this._tileManager.tilesToRender;
            if (tilesToRender.length === 0) {
                return;
            }
            var state = renderParameters.state;
            var pixelRatio = state.pixelRatio;
            var size = [pixelRatio * state.size[0], pixelRatio * state.size[1]];
            this._updateDisplayMatrix(size, state.rotation);
            tilesToRender.sort(sortTilesByLevel);
            for (var index = 0; index < tilesToRender.length; index++) {
                tilesToRender[index].stencilRef = index + 1;
            }
            tilesToRender.forEach(function (tile) {
                _this._commitWebGLData(tile, renderParameters);
                tile.setTransform(state, _this._displayViewMat3);
            });
            var stencilRenderer = this._stencilRenderer;
            stencilRenderer.beginStencilPass(gl);
            tilesToRender.forEach(function (tile) { return stencilRenderer.render(gl, tile); });
            stencilRenderer.endStencilPass(gl);
            gl.enable(gl.STENCIL_TEST);
            gl.stencilMask(0);
            gl.disable(gl.CULL_FACE);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.useProgram(this._wglProgram);
            gl.uniformMatrix3fv(this._displayViewMatrixLocation, false, this._displayViewMat3);
            gl.uniform1f(this._pixelRatioLocation, window.devicePixelRatio);
            gl.uniform4fv(this._vvSizeMinMaxValue, this._minMinMaxVV);
            gl.uniform4fv(this._uniqueValueColors, this._colors);
            tilesToRender.forEach(function (tile) {
                _this._renderTile(gl, tile);
            });
            this._vaoExt.bindVertexArray(null);
        };
        CustomFeatureLayerView.prototype._renderTile = function (gl, tile) {
            var tileData = tile.tileData;
            if (!tileData || !tileData.elementCount) {
                return;
            }
            this._vaoExt.bindVertexArray(tile.vao);
            gl.uniformMatrix3fv(this._dvsMatrixLocation, false, tile.transforms.dvs);
            gl.stencilFuncSeparate(gl.FRONT_AND_BACK, gl.EQUAL, tile.stencilRef, 0xff);
            gl.drawElements(gl.TRIANGLES, tileData.elementCount, gl.UNSIGNED_INT, 0);
        };
        CustomFeatureLayerView.prototype._acquireTile = function (tileInfo) {
            var _this = this;
            var tile = new Tile_1.default(tileInfo);
            var abortController = new AbortController();
            this._getTileData(tileInfo, { signal: abortController.signal }).then(function (tileData) {
                _this._tileRequestsToAbortController.delete(tileInfo.id);
                tile.setData(tileData);
                _this._requestUpdate();
            })
                .catch(function (error) {
                _this._tileRequestsToAbortController.delete(tileInfo.id);
                tile.setData(null);
                _this._requestUpdate();
                if (!(error && error.name === "AbortError")) {
                    throw error;
                }
            });
            this._tileRequestsToAbortController.set(tileInfo.id, abortController);
            return tile;
        };
        CustomFeatureLayerView.prototype._releaseTile = function (tile) {
            var tileInfo = tile.tileInfo;
            var abortController = this._tileRequestsToAbortController.get(tileInfo.id);
            if (abortController) {
                abortController.abort();
                this._tileRequestsToAbortController.delete(tileInfo.id);
            }
            this._tilesToDispose.push(tile);
        };
        CustomFeatureLayerView.prototype._getTileData = function (tileInfo, abortOptions) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._processingPipelinePromise];
                        case 1:
                            _a.sent();
                            return [2, this._connection.invoke("tileProcessor.getTileData", tileInfo, abortOptions)];
                    }
                });
            });
        };
        CustomFeatureLayerView.prototype._commitWebGLData = function (tile, renderParams) {
            if (tile.vao || !tile.hasData() || !tile.tileData["vertexData"]) {
                return;
            }
            var gl = renderParams.context;
            var vaoExt = this._vaoExt;
            var tileData = tile.tileData;
            tile.vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, tile.vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, tileData.vertexData, gl.STATIC_DRAW);
            tile.indexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tile.indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, tileData.indexData, gl.STATIC_DRAW);
            tile.vao = vaoExt.createVertexArray();
            vaoExt.bindVertexArray(tile.vao);
            gl.bindBuffer(gl.ARRAY_BUFFER, tile.vertexBuffer);
            gl.vertexAttribPointer(this._aPosition, 2, gl.FLOAT, false, 24, 0);
            gl.enableVertexAttribArray(this._aPosition);
            gl.vertexAttribPointer(this._aOffset, 2, gl.FLOAT, false, 24, 8);
            gl.enableVertexAttribArray(this._aOffset);
            gl.vertexAttribPointer(this._aVV, 2, gl.FLOAT, false, 24, 16);
            gl.enableVertexAttribArray(this._aVV);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tile.indexBuffer);
            vaoExt.bindVertexArray(null);
        };
        CustomFeatureLayerView.prototype._disposeTiles = function (gl) {
            var vaoExt = this._vaoExt;
            var tilesToDispose = this._tilesToDispose;
            this._tilesToDispose = [];
            for (var _i = 0, tilesToDispose_1 = tilesToDispose; _i < tilesToDispose_1.length; _i++) {
                var tile = tilesToDispose_1[_i];
                tile.dispose(gl, vaoExt);
            }
        };
        CustomFeatureLayerView.prototype._updateDisplayMatrix = function (size, rotation) {
            var w = size[0] !== 0 ? 2 / size[0] : 0;
            var h = size[1] !== 0 ? -2 / size[1] : 0;
            gl_matrix_1.mat3.set(this._displayMat3, w, 0, 0, 0, h, 0, -1, 1, 1);
            var viewMat3 = gl_matrix_1.mat3.identity(this._viewMat3);
            var viewT = gl_matrix_1.vec2.fromValues(size[0] / 2, size[1] / 2);
            var viewTInverse = gl_matrix_1.vec2.fromValues(-size[0] / 2, -size[1] / 2);
            var rads = DEG_TO_RAD * rotation;
            gl_matrix_1.mat3.translate(viewMat3, viewMat3, viewT);
            gl_matrix_1.mat3.rotate(viewMat3, viewMat3, rads);
            gl_matrix_1.mat3.translate(viewMat3, viewMat3, viewTInverse);
            gl_matrix_1.mat3.multiply(this._displayViewMat3, this._displayMat3, viewMat3);
        };
        CustomFeatureLayerView.prototype._initializeWebGL = function (context) {
            var gl = context;
            var ext = gl.getExtension("OES_vertex_array_object") ||
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
            var vertexSource = "precision highp float;\n        uniform mat3 u_dvsMat3;\n        uniform mat3 u_displayViewMat3;\n        uniform float u_pixelRatio;\n        uniform vec4 u_vvSizeMinMaxValue;\n        uniform vec4 u_uniqueValueColors[7];\n\n        attribute vec2 a_position;\n        attribute vec2 a_offset;\n        attribute vec2 a_vv;\n\n        varying vec2 v_offset;\n        varying vec4 v_fillColor;\n        varying float v_size;\n\n        float getVVMinMaxSize(float sizeValue) {\n          // we need to multiply by 8 in order to translate to tile coordinates\n          float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\n          interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\n          return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);\n        }\n\n        void main() {\n          float size = getVVMinMaxSize(a_vv.y);\n          v_size = size;\n\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0) + u_displayViewMat3 * vec3(size * a_offset, 0.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n          v_offset = a_offset;\n          v_fillColor = u_uniqueValueColors[int(a_vv.x)];\n        }";
            var fragmentSource = "precision highp float;\n\n      varying vec2 v_offset;\n      varying vec4 v_fillColor;\n      varying float v_size;\n\n      const vec4 outlineColor = vec4(1.0, 0.0, 0.0, 0.65);\n\n      void main() {\n        float outlineSizeFactor = min(1.0 / v_size, 0.1);\n        mediump float dist = length(v_offset);\n        mediump float fillalpha1 = 1.0 - smoothstep(0.45 - outlineSizeFactor, 0.45 + outlineSizeFactor, dist);\n        mediump float fillalpha2 = 1.0 - smoothstep(0.40 - outlineSizeFactor, 0.45, dist);\n        vec4 color1 = fillalpha1 * outlineColor;\n        vec4 color2 = fillalpha2 * v_fillColor;\n        gl_FragColor = (1.0 - color2.a) * color1 + color2;\n      }";
            var attributeLocationMap = new Map([[this._aPosition, "a_position"], [this._aOffset, "a_offset"], [this._aVV, "a_vv"]]);
            var program = webglUtils_1.createProgram(gl, vertexSource, fragmentSource, attributeLocationMap);
            this._dvsMatrixLocation = gl.getUniformLocation(program, "u_dvsMat3");
            this._displayViewMatrixLocation = gl.getUniformLocation(program, "u_displayViewMat3");
            this._pixelRatioLocation = gl.getUniformLocation(program, "u_pixelRatio");
            this._vvSizeMinMaxValue = gl.getUniformLocation(program, "u_vvSizeMinMaxValue");
            this._uniqueValueColors = gl.getUniformLocation(program, "u_uniqueValueColors");
            this._stencilRenderer = new StencilRenderer_1.default();
            this._wglProgram = program;
        };
        CustomFeatureLayerView.prototype._doUpdate = function () {
            if (this._updateRequested) {
                this._tileManager.update(this.tiles);
                this.requestRender();
                this._updateRequested = false;
            }
        };
        CustomFeatureLayerView.prototype._requestUpdate = function () {
            this._updateRequested = true;
        };
        CustomFeatureLayerView.prototype._setColors = function (colorRamp) {
            var colors = colorRamp.colorsForClassBreaks[6].colors;
            if (colors.length < 7) {
                console.error("expected at least 7 colors in ramp!");
            }
            for (var index = 0; index < colors.length; index++) {
                var color = colors[index];
                this._colors[4 * index + 0] = color.r / 255;
                this._colors[4 * index + 1] = color.g / 255;
                this._colors[4 * index + 2] = color.b / 255;
                this._colors[4 * index + 3] = color.a;
            }
            this.requestRender();
        };
        CustomFeatureLayerView = tslib_1.__decorate([
            decorators_1.subclass("CustomFeatureLayerView")
        ], CustomFeatureLayerView);
        return CustomFeatureLayerView;
    }(decorators_1.declared(BaseLayerViewGL2D_1.default)));
    exports.default = CustomFeatureLayerView;
});
//# sourceMappingURL=CustomFeatureLayerView.js.map