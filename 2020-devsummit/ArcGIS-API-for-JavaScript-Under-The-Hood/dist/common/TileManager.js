define(["require", "exports", "tslib", "./LruCache"], function (require, exports, tslib_1, LruCache_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    LruCache_1 = tslib_1.__importDefault(LruCache_1);
    var EPSILON = 1e-6;
    var tilePercentArea = function (total, currentValue) { return total + 1 / (1 << (2 * currentValue)); };
    var TileManager = (function () {
        function TileManager(params) {
            var _this = this;
            this._tilesToRender = [];
            this._tiles = new Map();
            this._tileCache = new LruCache_1.default(40, function (tile) { return _this.releaseTile(tile); });
            this.acquireTile = params.acquireTile;
            this.releaseTile = params.releaseTile;
        }
        Object.defineProperty(TileManager.prototype, "tilesToRender", {
            get: function () {
                return this._tilesToRender;
            },
            enumerable: true,
            configurable: true
        });
        TileManager.prototype.destroy = function () {
            this._tiles.clear();
            this._tiles = null;
            this._tileCache.clear();
            this._tileCache = null;
        };
        TileManager.prototype.update = function (tiles) {
            var _this = this;
            this._tilesToRender = [];
            if (!tiles.length) {
                return;
            }
            var tilesToRetain = new Set();
            var missingTiles = new Set();
            for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
                var tileInfo = tiles_1[_i];
                var tileId = getTileId(tileInfo);
                var tile = this._getOrAcquireTile(tileId, tileInfo);
                tilesToRetain.add(tileId);
                if (tile.hasData()) {
                    this._tilesToRender.push(tile);
                    continue;
                }
                missingTiles.add({
                    level: tileInfo.level,
                    row: tileInfo.row,
                    col: tileInfo.col,
                    world: tileInfo.world
                });
            }
            missingTiles.forEach(function (missingTileKey) { return _this._findPlaceholdersForMissingTiles(missingTileKey, tilesToRetain); });
            var tilesToRemove = [];
            this._tiles.forEach(function (_tile, key) {
                if (!tilesToRetain.has(key)) {
                    tilesToRemove.push(key);
                }
            });
            for (var _a = 0, tilesToRemove_1 = tilesToRemove; _a < tilesToRemove_1.length; _a++) {
                var tileId = tilesToRemove_1[_a];
                this._releaseTile(tileId);
            }
        };
        TileManager.prototype._findPlaceholdersForMissingTiles = function (missingTileKey, tilesToRetain) {
            var _this = this;
            var placeholderTilesDeltaZ = [];
            this._tiles.forEach(function (tile) {
                _this._findChildTile(placeholderTilesDeltaZ, tile, missingTileKey, tilesToRetain);
            });
            var coverage = placeholderTilesDeltaZ.reduce(tilePercentArea, 0);
            if (Math.abs(1 - coverage) < EPSILON) {
                return;
            }
            this._findParentTile(missingTileKey, tilesToRetain);
        };
        TileManager.prototype._findChildTile = function (placeholderTilesDeltaZ, candidateTile, missingTileKey, tilesToRetain) {
            var candidateInfo = candidateTile.tileInfo;
            if (candidateInfo.level <= missingTileKey.level || !candidateTile.hasData()) {
                return;
            }
            if (isTileContained(missingTileKey, candidateInfo)) {
                this._tilesToRender.push(candidateTile);
                tilesToRetain.add(candidateInfo.id);
                placeholderTilesDeltaZ.push(candidateInfo.level - missingTileKey.level);
            }
        };
        TileManager.prototype._findParentTile = function (key, tilesToRetain) {
            var parentId = getTileId(key);
            while (true) {
                parentId = getTileParentId(parentId);
                if (!parentId || tilesToRetain.has(parentId)) {
                    return;
                }
                var parentTile = this._getTile(parentId);
                if (parentTile && parentTile.hasData()) {
                    this._tilesToRender.push(parentTile);
                    tilesToRetain.add(parentTile.tileInfo.id);
                    return;
                }
            }
        };
        TileManager.prototype._getOrAcquireTile = function (tileId, tileInfo) {
            var tile = this._tiles.get(tileId);
            if (tile) {
                return tile;
            }
            tile = this._tileCache.get(tileId);
            if (!tile) {
                tile = this.acquireTile(tileInfo);
            }
            this._tiles.set(tileId, tile);
            return tile;
        };
        TileManager.prototype._getTile = function (tileId) {
            var tile = this._tiles.get(tileId);
            if (tile) {
                return tile;
            }
            tile = this._tileCache.pop(tileId);
            if (tile) {
                this._tiles.set(tileId, tile);
            }
            return tile;
        };
        TileManager.prototype._releaseTile = function (tileId) {
            var tile = this._tiles.get(tileId);
            this._tiles.delete(tileId);
            if (tile.hasData()) {
                this._tileCache.put(tileId, tile);
            }
            else {
                this.releaseTile(tile);
            }
        };
        return TileManager;
    }());
    exports.default = TileManager;
    function getTileId(tileInfo) {
        return tileInfo.level + "/" + tileInfo.row + "/" + tileInfo.col + "/" + tileInfo.world;
    }
    function getTileParentId(tileId) {
        var _a = tileId.split("/"), _level = _a[0], _row = _a[1], _col = _a[2], _world = _a[3];
        var level = parseInt(_level, 10);
        if (level === 0) {
            return null;
        }
        return level - 1 + "/" + (parseInt(_row, 10) >> 1) + "/" + (parseInt(_col, 10) >> 1) + "/" + parseInt(_world, 10);
    }
    function isTileContained(referenceKey, key) {
        var deltaZ = key.level - referenceKey.level;
        return referenceKey.row === key.row >> deltaZ && referenceKey.col === key.col >> deltaZ;
    }
});
//# sourceMappingURL=TileManager.js.map