define(["require", "exports", "tslib", "esri/geometry/SpatialReference"], function (require, exports, tslib_1, SpatialReference_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SpatialReference_1 = tslib_1.__importDefault(SpatialReference_1);
    function getFeatures(outFeatures, featureLayer, geometry, quantizationParams, abortOptions, page) {
        if (page === void 0) { page = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var supportPagination, maxRecordCount, pageSize, query, featureSet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, featureLayer.when()];
                    case 1:
                        _a.sent();
                        supportPagination = featureLayer.capabilities.queryRelated.supportsPagination;
                        if (!supportPagination) {
                            console.error("This Feature service does not support pagination!");
                            return [2, null];
                        }
                        maxRecordCount = featureLayer.capabilities.query.maxRecordCount;
                        pageSize = maxRecordCount;
                        query = featureLayer.createQuery();
                        query.where = "1=1";
                        query.geometry = geometry;
                        query.returnExceededLimitFeatures = true;
                        query.num = pageSize;
                        query.start = page * pageSize;
                        query.outSpatialReference = SpatialReference_1.default.WebMercator;
                        query.quantizationParameters = quantizationParams;
                        return [4, featureLayer.queryFeatures(query)];
                    case 2:
                        featureSet = _a.sent();
                        outFeatures.push.apply(outFeatures, featureSet.features);
                        if (featureSet.exceededTransferLimit) {
                            return [2, getFeatures(outFeatures, featureLayer, geometry, quantizationParams, abortOptions, page + 1)];
                        }
                        return [2, outFeatures];
                }
            });
        });
    }
    exports.getFeatures = getFeatures;
});
//# sourceMappingURL=featureLayerUtils.js.map