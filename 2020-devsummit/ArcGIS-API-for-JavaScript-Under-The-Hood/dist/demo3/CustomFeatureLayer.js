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
            var _this = _super.call(this, params) || this;
            _this.tileInfo = TileInfo_1.default.create({ size: 512 });
            params = params || {
                url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer"
            };
            var featureLayer = new FeatureLayer_1.default({
                url: params.url
            });
            featureLayer.load();
            _this._featureLayer = featureLayer;
            return _this;
        }
        Object.defineProperty(CustomFeatureLayer.prototype, "internalFeatureLayer", {
            get: function () {
                return this._featureLayer;
            },
            enumerable: true,
            configurable: true
        });
        CustomFeatureLayer.prototype.queryFeatures = function (extent, quantizationParams, abortOptions) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var featureLayer, features;
                return tslib_1.__generator(this, function (_a) {
                    featureLayer = this._featureLayer;
                    features = [];
                    return [2, featureLayerUtils_1.getFeatures(features, featureLayer, extent, quantizationParams, abortOptions)];
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
        tslib_1.__decorate([
            decorators_1.property()
        ], CustomFeatureLayer.prototype, "internalFeatureLayer", null);
        CustomFeatureLayer = tslib_1.__decorate([
            decorators_1.subclass("CustomFeatureLayer")
        ], CustomFeatureLayer);
        return CustomFeatureLayer;
    }(decorators_1.declared(Layer_1.default)));
    exports.default = CustomFeatureLayer;
});
//# sourceMappingURL=CustomFeatureLayer.js.map