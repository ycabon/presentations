define(["require", "exports", "gl-matrix"], function (require, exports, gl_matrix_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TileBase = (function () {
        function TileBase(tileInfo) {
            this.tileInfo = tileInfo;
            this.transforms = {
                dvs: gl_matrix_1.mat3.create(),
                tileMat3: gl_matrix_1.mat3.create()
            };
        }
        TileBase.prototype.dispose = function (gl, vaoExt) {
            if (this.vao) {
                vaoExt.deleteVertexArray(this.vao);
                gl.deleteBuffer(this.vertexBuffer);
                gl.deleteBuffer(this.indexBuffer);
            }
            this.tileData = null;
        };
        TileBase.prototype.setTransform = function (state, displayViewMat3) {
            var resolution = state.resolution;
            var lodResolution = this.tileInfo.resolution;
            var tileScale = window.devicePixelRatio * lodResolution / resolution;
            var tileToScreen = this.transforms.tileMat3;
            var _a = state.toScreenNoRotation([0, 0], this.tileInfo.coords[0], this.tileInfo.coords[1]), x = _a[0], y = _a[1];
            var sx = tileScale;
            var sy = tileScale;
            gl_matrix_1.mat3.set(tileToScreen, sx, 0, 0, 0, sy, 0, x, y, 1);
            gl_matrix_1.mat3.multiply(this.transforms.dvs, displayViewMat3, tileToScreen);
        };
        TileBase.prototype.hasData = function () {
            return !!this.tileData;
        };
        return TileBase;
    }());
    exports.default = TileBase;
});
//# sourceMappingURL=TileBase.js.map