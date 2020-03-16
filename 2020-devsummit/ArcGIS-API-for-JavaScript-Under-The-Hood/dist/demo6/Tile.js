define(["require", "exports", "tslib", "../common/TileBase"], function (require, exports, tslib_1, TileBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    TileBase_1 = tslib_1.__importDefault(TileBase_1);
    var Tile = (function (_super) {
        tslib_1.__extends(Tile, _super);
        function Tile(tileInfo) {
            var _this = _super.call(this, tileInfo) || this;
            _this.tileInfo = tileInfo;
            return _this;
        }
        Tile.prototype.dispose = function (gl, vaoExt) {
            if (this.vao) {
                vaoExt.deleteVertexArray(this.vao);
                gl.deleteBuffer(this.vertexBuffer);
                gl.deleteBuffer(this.indexBuffer);
            }
            this.tileData = null;
        };
        Tile.prototype.setData = function (tileData) {
            if (!tileData) {
                this.tileData = { vertexData: null, indexData: null, elementCount: 0 };
                return;
            }
            this.tileData = tileData;
        };
        return Tile;
    }(TileBase_1.default));
    exports.default = Tile;
});
//# sourceMappingURL=Tile.js.map