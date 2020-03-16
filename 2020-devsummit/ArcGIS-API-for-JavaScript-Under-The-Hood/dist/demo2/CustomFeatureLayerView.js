define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/views/2d/layers/BaseLayerViewGL2D", "gl-matrix", "../common/StencilRenderer", "../common/webglUtils", "../libs/rbush", "./Tile"], function (require, exports, tslib_1, decorators_1, BaseLayerViewGL2D_1, gl_matrix_1, StencilRenderer_1, webglUtils_1, rbush_1, Tile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    BaseLayerViewGL2D_1 = tslib_1.__importDefault(BaseLayerViewGL2D_1);
    StencilRenderer_1 = tslib_1.__importDefault(StencilRenderer_1);
    rbush_1 = tslib_1.__importDefault(rbush_1);
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
            _this._featureTree = rbush_1.default(9, [".geometry.x", ".geometry.y", ".geometry.x", ".geometry.y"]);
            _this._aPosition = 0;
            _this._aOffset = 1;
            _this._tilesToDispose = [];
            _this._tilesToRender = new Map();
            _this._initialized = false;
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
            var layer = this.layer;
            layer.queryFeatures(null).then(function (features) {
                _this._featureTree.load(features);
                for (var _i = 0, _a = _this.tiles; _i < _a.length; _i++) {
                    var tileInfo = _a[_i];
                    _this._acquireTile(tileInfo);
                }
                _this._initialized = true;
                _this.requestRender();
            });
            this._initializeWebGL(this.context);
        };
        CustomFeatureLayerView.prototype.detach = function () {
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
            if (!this._initialized) {
                return;
            }
            for (var _i = 0, added_1 = added; _i < added_1.length; _i++) {
                var tile = added_1[_i];
                this._acquireTile(tile);
            }
            for (var _a = 0, removed_1 = removed; _a < removed_1.length; _a++) {
                var remove = removed_1[_a];
                this._releaseTile(remove);
            }
            this.requestRender();
        };
        CustomFeatureLayerView.prototype.render = function (renderParameters) {
            var _this = this;
            if (!this._initialized) {
                return;
            }
            var gl = renderParameters.context;
            this._disposeTiles(gl);
            if (this._tilesToRender.size === 0) {
                return;
            }
            var tilesToRender = Array.from(this._tilesToRender.values());
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
            var elementCount = tile.tileData && tile.tileData.elementCount;
            if (!elementCount) {
                return;
            }
            this._vaoExt.bindVertexArray(tile.vao);
            gl.uniformMatrix3fv(this._dvsMatrixLocation, false, tile.transforms.dvs);
            gl.uniformMatrix3fv(this._displayViewMatrixLocation, false, this._displayViewMat3);
            gl.uniform1f(this._pixelRatioLocation, window.devicePixelRatio);
            gl.stencilFuncSeparate(gl.FRONT_AND_BACK, gl.EQUAL, tile.stencilRef, 0xff);
            gl.drawElements(gl.TRIANGLES, elementCount, gl.UNSIGNED_INT, 0);
        };
        CustomFeatureLayerView.prototype._acquireTile = function (tileInfo) {
            var tile = new Tile_1.default(tileInfo);
            var tileQueryExtent = this._createQueryExtent(tileInfo);
            var features = this._featureTree.search(tileQueryExtent);
            tile.setData(features);
            this._tilesToRender.set(tileInfo.id, tile);
            return tile;
        };
        CustomFeatureLayerView.prototype._releaseTile = function (tileInfo) {
            var tile = this._tilesToRender.get(tileInfo.id);
            if (tile) {
                this._tilesToRender.delete(tileInfo.id);
                this._tilesToDispose.push(tile);
            }
        };
        CustomFeatureLayerView.prototype._createQueryExtent = function (tileInfo) {
            var symbolSizePx = window.devicePixelRatio * pt2px(SYMBOL_SIZE);
            var symbolExpantion = tileInfo.resolution * (symbolSizePx + 2) / 2;
            var bounds = tileInfo.bounds;
            return {
                minX: bounds[0] - symbolExpantion,
                minY: bounds[1] - symbolExpantion,
                maxX: bounds[2] + symbolExpantion,
                maxY: bounds[3] + symbolExpantion
            };
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
            var fragmentSource = "precision highp float;\n\n      varying vec2 v_offset;\n\n      const vec4 fillColor = vec4(0.03, 0.43, 0.90, 0.65);\n      const vec4 outlineColor = vec4(1.0, 0.0, 0.0, 0.65);\n      const float outlineSize = 1.0 / 15.0; // 1.5 pixels over 30 / 2 (since we are dealing with half a marker at a time);\n\n      void main() {\n        mediump float dist = length(v_offset);\n        mediump float fillalpha1 = 1.0 - smoothstep(0.45, 0.45 + outlineSize, dist);\n        mediump float fillalpha2 = 1.0 - smoothstep(0.40, 0.45, dist);\n        vec4 color1 = fillalpha1 * outlineColor;\n        vec4 color2 = fillalpha2 * fillColor;\n        gl_FragColor = (1.0 - color2.a) * color1 + color2;\n      }";
            var attributeLocationMap = new Map([[this._aPosition, "a_position"], [this._aOffset, "a_offset"]]);
            var program = webglUtils_1.createProgram(gl, vertexSource, fragmentSource, attributeLocationMap);
            this._dvsMatrixLocation = gl.getUniformLocation(program, "u_dvsMat3");
            this._displayViewMatrixLocation = gl.getUniformLocation(program, "u_displayViewMat3");
            this._pixelRatioLocation = gl.getUniformLocation(program, "u_pixelRatio");
            this._stencilRenderer = new StencilRenderer_1.default();
            this._wglProgram = program;
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