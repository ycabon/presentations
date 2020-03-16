define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/layers/Layer", "esri/layers/support/TileInfo", "./CustomFeatureLayerView"], function (require, exports, tslib_1, decorators_1, Layer_1, TileInfo_1, CustomFeatureLayerView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Layer_1 = tslib_1.__importDefault(Layer_1);
    TileInfo_1 = tslib_1.__importDefault(TileInfo_1);
    CustomFeatureLayerView_1 = tslib_1.__importDefault(CustomFeatureLayerView_1);
    var CustomFeatureLayer = (function (_super) {
        tslib_1.__extends(CustomFeatureLayer, _super);
        function CustomFeatureLayer(params) {
            var _this = _super.call(this, params) || this;
            _this.tileInfo = TileInfo_1.default.create({ size: 512 });
            _this.url = "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer/0";
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
        CustomFeatureLayer = tslib_1.__decorate([
            decorators_1.subclass("CustomFeatureLayer")
        ], CustomFeatureLayer);
        return CustomFeatureLayer;
    }(decorators_1.declared(Layer_1.default)));
    exports.default = CustomFeatureLayer;
});
//# sourceMappingURL=CustomFeatureLayer.js.map