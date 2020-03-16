define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/layers/FeatureLayer", "esri/layers/Layer", "./CustomFeatureLayerView", "./featureLayerUtils"], function (require, exports, tslib_1, decorators_1, FeatureLayer_1, Layer_1, CustomFeatureLayerView_1, featureLayerUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    FeatureLayer_1 = tslib_1.__importDefault(FeatureLayer_1);
    Layer_1 = tslib_1.__importDefault(Layer_1);
    CustomFeatureLayerView_1 = tslib_1.__importDefault(CustomFeatureLayerView_1);
    var CustomFeatureLayer = (function (_super) {
        tslib_1.__extends(CustomFeatureLayer, _super);
        function CustomFeatureLayer(params) {
            var _this = _super.call(this, params) || this;
            params = params || {
                url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer"
            };
            var featureLayer = new FeatureLayer_1.default({
                url: params.url
            });
            featureLayer.load();
            featureLayer.when(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, featureLayerUtils_1.getFeatures(featureLayer, null, null, null)];
                        case 1:
                            _a.graphics = _b.sent();
                            return [2];
                    }
                });
            }); });
            return _this;
        }
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
        ], CustomFeatureLayer.prototype, "graphics", void 0);
        CustomFeatureLayer = tslib_1.__decorate([
            decorators_1.subclass("CustomFeatureLayer")
        ], CustomFeatureLayer);
        return CustomFeatureLayer;
    }(decorators_1.declared(Layer_1.default)));
    exports.default = CustomFeatureLayer;
});
//# sourceMappingURL=CustomFeatureLayer.js.map