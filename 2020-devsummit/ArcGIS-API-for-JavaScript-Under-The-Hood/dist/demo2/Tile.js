define(["require", "exports", "tslib", "../common/quantizationUtils", "../common/TileBase"], function (require, exports, tslib_1, quantizationUtils_1, TileBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    TileBase_1 = tslib_1.__importDefault(TileBase_1);
    var Tile = (function (_super) {
        tslib_1.__extends(Tile, _super);
        function Tile(tileInfo, isDebug) {
            if (isDebug === void 0) { isDebug = false; }
            var _this = _super.call(this, tileInfo) || this;
            _this.tileInfo = tileInfo;
            _this.isDebug = isDebug;
            return _this;
        }
        Tile.prototype.setData = function (features) {
            if (this.isDebug) {
                this.tileData = {
                    vertexData: new Float32Array([10, 10, 10, 502, 502, 10, 502, 502]),
                    indexData: new Uint32Array([0, 1, 2, 1, 3, 2]),
                    elementCount: 6
                };
                return;
            }
            if (!features || features.length === 0) {
                this.tileData = { vertexData: null, indexData: null, elementCount: 0 };
                return;
            }
            var tileInfo = this.tileInfo;
            var quantizedPoints = this._quantizeGraphics(features, {
                originPosition: "upper-left",
                scale: [tileInfo.resolution, tileInfo.resolution],
                translate: [tileInfo.bounds[0], tileInfo.bounds[3]]
            });
            this.tileData = this._createMesh(features, quantizedPoints);
        };
        Tile.prototype._quantizeGraphics = function (graphics, transform) {
            var quantizedPoints = new Array(graphics.length);
            for (var index = 0; index < graphics.length; index++) {
                var graphic = graphics[index];
                var geometry = graphic.geometry;
                if (geometry) {
                    quantizedPoints[index] = quantizationUtils_1.quantizePoint(transform, geometry);
                }
            }
            return quantizedPoints;
        };
        Tile.prototype._createMesh = function (features, quantizedPoints) {
            if (!features) {
                return null;
            }
            var stride = 4 * 4;
            var indicesPerQuad = 6;
            var vertexData = new Float32Array(features.length * stride);
            var indexData = new Uint32Array(indicesPerQuad * features.length);
            var arrayIndex = 0;
            for (var index = 0; index < features.length; index++) {
                var point = quantizedPoints[index];
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
            var elementCount = indicesPerQuad * features.length;
            return {
                vertexData: vertexData,
                indexData: indexData,
                elementCount: elementCount
            };
        };
        return Tile;
    }(TileBase_1.default));
    exports.default = Tile;
});
//# sourceMappingURL=Tile.js.map