define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/layers/FeatureLayer", "esri/layers/Layer", "esri/layers/support/TileInfo", "../common/featureLayerUtils", "./CustomFeatureLayerView"], function (require, exports, tslib_1, decorators_1, FeatureLayer_1, Layer_1, TileInfo_1, featureLayerUtils_1, CustomFeatureLayerView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    FeatureLayer_1 = tslib_1.__importDefault(FeatureLayer_1);
    Layer_1 = tslib_1.__importDefault(Layer_1);
    TileInfo_1 = tslib_1.__importDefault(TileInfo_1);
    CustomFeatureLayerView_1 = tslib_1.__importDefault(CustomFeatureLayerView_1);
    var CustomFeatureLayer = (function (_super) {
        tslib_1.__extends(CustomFeatureLayer, _super);
        function CustomFeatureLayer(params) {
            if (params === void 0) { params = {}; }
            var _this = _super.call(this, params) || this;
            _this.tileInfo = TileInfo_1.default.create({ size: 512 });
            var _a = params.url, url = _a === void 0 ? "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer" : _a;
            _this.featureLayer = new FeatureLayer_1.default({
                url: url
            });
            _this.featureLayer.load();
            return _this;
        }
        CustomFeatureLayer.prototype.queryFeatures = function (abortOptions) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var features;
                return tslib_1.__generator(this, function (_a) {
                    features = [];
                    return [2, featureLayerUtils_1.getFeatures(features, this.featureLayer, null, null, abortOptions)];
                });
            });
        };
        CustomFeatureLayer.prototype.createLayerView = function (view) {
            if (view.type === "2d") {
                return new CustomFeatureLayerView_1.default({
                    view: view,
                    layer: this
                });
            }
        };
        CustomFeatureLayer = tslib_1.__decorate([
            decorators_1.subclass("CustomFeatureLayer")
        ], CustomFeatureLayer);
        return CustomFeatureLayer;
    }(decorators_1.declared(Layer_1.default)));
    exports.default = CustomFeatureLayer;
});
//# sourceMappingURL=CustomFeatureLayer.js.map