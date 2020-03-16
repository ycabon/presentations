define(["require", "exports", "tslib", "esri/core/promiseUtils", "esri/geometry/Extent", "esri/geometry/SpatialReference", "esri/tasks/QueryTask", "esri/tasks/support/Query"], function (require, exports, tslib_1, promiseUtils, Extent_1, SpatialReference_1, QueryTask_1, Query_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    promiseUtils = tslib_1.__importStar(promiseUtils);
    Extent_1 = tslib_1.__importDefault(Extent_1);
    SpatialReference_1 = tslib_1.__importDefault(SpatialReference_1);
    QueryTask_1 = tslib_1.__importDefault(QueryTask_1);
    Query_1 = tslib_1.__importDefault(Query_1);
    var DPI = 96;
    var SYMBOL_SIZE = 20;
    var TileProcessor = (function () {
        function TileProcessor() {
        }
        TileProcessor.prototype.initialize = function (params) {
            if (this._queryTask) {
                return promiseUtils.reject("initialize called twice!");
            }
            this._queryTask = new QueryTask_1.default({ url: params.url });
            this._pixelRatio = params.pixelRatio;
            this._maxRecordCount = params.maxRecordCount;
            return promiseUtils.resolve({});
        };
        TileProcessor.prototype.getTileData = function (tileInfo, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var features, mesh;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, getFeatures([], this._queryTask, createQueryExtent(tileInfo, this._pixelRatio), createQuantizationParameters(tileInfo), this._maxRecordCount, options || { signal: null })];
                        case 1:
                            features = _a.sent();
                            mesh = createMesh(features);
                            if (mesh) {
                                return [2, { result: mesh, transferList: [mesh.vertexData.buffer, mesh.indexData.buffer] }];
                            }
                            else {
                                return [2, { result: {
                                            vertexData: null,
                                            indexData: null,
                                            elementCount: 0
                                        }
                                    }];
                            }
                            return [2];
                    }
                });
            });
        };
        return TileProcessor;
    }());
    exports.default = TileProcessor;
    function getFeatures(outFeatures, queryTask, queryExtent, quantizationParams, maxRecordCount, options, page) {
        if (page === void 0) { page = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, abortOptions, featureSet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = new Query_1.default();
                        query.where = "1=1";
                        query.returnGeometry = true;
                        query.geometry = queryExtent;
                        query.quantizationParameters = quantizationParams;
                        query.outSpatialReference = SpatialReference_1.default.WebMercator;
                        query.returnExceededLimitFeatures = true;
                        query.num = maxRecordCount;
                        query.start = page * maxRecordCount;
                        abortOptions = { signal: options.signal };
                        return [4, queryTask.execute(query, abortOptions)];
                    case 1:
                        featureSet = _a.sent();
                        outFeatures.push.apply(outFeatures, featureSet.features);
                        if (featureSet.exceededTransferLimit) {
                            return [2, getFeatures(outFeatures, queryTask, queryExtent, quantizationParams, maxRecordCount, abortOptions, page + 1)];
                        }
                        return [2, outFeatures];
                }
            });
        });
    }
    function createQueryExtent(tileInfo, pixelRatio) {
        var symbolSizePx = pixelRatio * pt2px(SYMBOL_SIZE);
        var symbolExpantion = tileInfo.resolution * (symbolSizePx + 2) / 2;
        var bounds = tileInfo.bounds;
        return new Extent_1.default({
            xmin: bounds[0] - symbolExpantion,
            ymin: bounds[1] - symbolExpantion,
            xmax: bounds[2] + symbolExpantion,
            ymax: bounds[3] + symbolExpantion,
            spatialReference: SpatialReference_1.default.WebMercator
        });
    }
    function createQuantizationParameters(tileInfo) {
        var bounds = tileInfo.bounds;
        return {
            mode: "view",
            originPosition: "upper-left",
            tolerance: tileInfo.resolution,
            extent: {
                xmin: bounds[0],
                ymin: bounds[1],
                xmax: bounds[2],
                ymax: bounds[3],
                spatialReference: SpatialReference_1.default.WebMercator
            }
        };
    }
    function createMesh(features) {
        if (!features || features.length === 0) {
            return null;
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
        var elementCount = indicesPerQuad * features.length;
        return {
            vertexData: vertexData,
            indexData: indexData,
            elementCount: elementCount
        };
    }
    function pt2px(pt) {
        if (!pt) {
            return 0;
        }
        return (pt / 72) * DPI;
    }
});
//# sourceMappingURL=TileProcessor.js.map