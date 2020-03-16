define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/geometry/Extent", "esri/geometry/SpatialReference", "esri/views/2d/layers/BaseLayerViewGL2D", "gl-matrix", "../common/StencilRenderer", "../common/TileManager", "../common/webglUtils", "./Tile"], function (require, exports, tslib_1, decorators_1, Extent_1, SpatialReference_1, BaseLayerViewGL2D_1, gl_matrix_1, StencilRenderer_1, TileManager_1, webglUtils_1, Tile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Extent_1 = tslib_1.__importDefault(Extent_1);
    SpatialReference_1 = tslib_1.__importDefault(SpatialReference_1);
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
    var DPI = 96;
    var SYMBOL_SIZE = 20;
    var CustomFeatureLayerView = (function (_super) {
        tslib_1.__extends(CustomFeatureLayerView, _super);
        function CustomFeatureLayerView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._aPosition = 0;
            _this._aOffset = 1;
            _this._tilesToDispose = [];
            _this._tileRequestsToAbortController = new Map();
            _this._updateTimer = 0;
            _this._updateRequested = true;
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
            this._tileManager = new TileManager_1.default({
                acquireTile: function (tileInfo) { return _this._acquireTile(tileInfo); },
                releaseTile: function (tile) { return _this._releaseTile(tile); },
            });
            this._updateTimer = window.setInterval(function () { return _this._doUpdate(); }, 16);
            this._initializeWebGL(this.context);
        };
        CustomFeatureLayerView.prototype.detach = function () {
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
            gl.uniformMatrix3fv(this._displayViewMatrixLocation, false, this._displayViewMat3);
            gl.uniform1f(this._pixelRatioLocation, window.devicePixelRatio);
            gl.stencilFuncSeparate(gl.FRONT_AND_BACK, gl.EQUAL, tile.stencilRef, 0xff);
            gl.drawElements(gl.TRIANGLES, tileData.elementCount, gl.UNSIGNED_INT, 0);
        };
        CustomFeatureLayerView.prototype._acquireTile = function (tileInfo) {
            var _this = this;
            var tile = new Tile_1.default(tileInfo);
            var abortController = new AbortController();
            var tileQueryExtent = this._createQueryExtent(tileInfo);
            var layer = this.layer;
            var quantizationParams = tile.getQuantizationParameters();
            layer.queryFeatures(tileQueryExtent, quantizationParams, abortController).then(function (features) {
                _this._tileRequestsToAbortController.delete(tileInfo.id);
                tile.setData(features);
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
        CustomFeatureLayerView.prototype._createQueryExtent = function (tileInfo) {
            var symbolSizePx = window.devicePixelRatio * pt2px(SYMBOL_SIZE);
            var symbolExpantion = tileInfo.resolution * (symbolSizePx + 2) / 2;
            var bounds = tileInfo.bounds;
            return new Extent_1.default({
                xmin: bounds[0] - symbolExpantion,
                ymin: bounds[1] - symbolExpantion,
                xmax: bounds[2] + symbolExpantion,
                ymax: bounds[3] + symbolExpantion,
                spatialReference: SpatialReference_1.default.WebMercator
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
            gl.vertexAttribPointer(this._aPosition, 2, gl.FLOAT, false, 16, 0);
            gl.enableVertexAttribArray(this._aPosition);
            gl.vertexAttribPointer(this._aOffset, 2, gl.FLOAT, false, 16, 8);
            gl.enableVertexAttribArray(this._aOffset);
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
            var vertexSource = "precision highp float;\n        uniform mat3 u_dvsMat3;\n        uniform mat3 u_displayViewMat3;\n        uniform float u_pixelRatio;\n\n        attribute vec2 a_position;\n        attribute vec2 a_offset;\n\n        varying vec2 v_offset;\n\n        const float SIZE = 30.0;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0) + u_displayViewMat3 * vec3(SIZE * a_offset, 0.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n          v_offset = a_offset;\n        }";
            var fragmentSource = "precision highp float;\n\n      varying vec2 v_offset;\n\n      const vec4 fillColor = vec4(0.93, 0.43, 0.00, 0.65);\n      const vec4 outlineColor = vec4(1.0, 0.0, 0.0, 0.65);\n      const float outlineSize = 1.0 / 15.0; // 1.5 pixels over 30 / 2 (since we are dealing with half a marker at a time);\n\n      void main() {\n        mediump float dist = length(v_offset);\n        mediump float fillalpha1 = 1.0 - smoothstep(0.45, 0.45 + outlineSize, dist);\n        mediump float fillalpha2 = 1.0 - smoothstep(0.40, 0.45, dist);\n        vec4 color1 = fillalpha1 * outlineColor;\n        vec4 color2 = fillalpha2 * fillColor;\n        gl_FragColor = (1.0 - color2.a) * color1 + color2;\n      }";
            var attributeLocationMap = new Map([[this._aPosition, "a_position"], [this._aOffset, "a_offset"]]);
            var program = webglUtils_1.createProgram(gl, vertexSource, fragmentSource, attributeLocationMap);
            this._dvsMatrixLocation = gl.getUniformLocation(program, "u_dvsMat3");
            this._displayViewMatrixLocation = gl.getUniformLocation(program, "u_displayViewMat3");
            this._pixelRatioLocation = gl.getUniformLocation(program, "u_pixelRatio");
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
        CustomFeatureLayerView = tslib_1.__decorate([
            decorators_1.subclass("CustomFeatureLayerView")
        ], CustomFeatureLayerView);
        return CustomFeatureLayerView;
    }(decorators_1.declared(BaseLayerViewGL2D_1.default)));
    exports.default = CustomFeatureLayerView;
    function pt2px(pt) {
        if (!pt) {
            return 0;
        }
        return (pt / 72) * DPI;
    }
});
//# sourceMappingURL=CustomFeatureLayerView.js.map