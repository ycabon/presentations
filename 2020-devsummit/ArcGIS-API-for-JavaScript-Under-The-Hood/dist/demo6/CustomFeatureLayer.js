define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/layers/Layer", "esri/layers/support/TileInfo", "./CustomFeatureLayerView"], function (require, exports, tslib_1, decorators_1, Layer_1, TileInfo_1, CustomFeatureLayerView_1) {
    "use strict";
    Layer_1 = tslib_1.__importDefault(Layer_1);
    TileInfo_1 = tslib_1.__importDefault(TileInfo_1);
    CustomFeatureLayerView_1 = tslib_1.__importDefault(CustomFeatureLayerView_1);
    var CustomFeatureLayer6 = (function (_super) {
        tslib_1.__extends(CustomFeatureLayer6, _super);
        function CustomFeatureLayer6(params) {
            var _this = _super.call(this, params) || this;
            _this.tileInfo = TileInfo_1.default.create({ size: 512 });
            _this._minMaxDaysSinceUpdate = [20, 100];
            _this.url = "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer/0";
            return _this;
        }
        Object.defineProperty(CustomFeatureLayer6.prototype, "colorRamp", {
            get: function () {
                return this._colorRamp;
            },
            set: function (ramp) {
                this._colorRamp = ramp;
                this.notifyChange("colorRamp");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomFeatureLayer6.prototype, "minMaxDaysSinceUpate", {
            get: function () {
                return this._minMaxDaysSinceUpdate;
            },
            set: function (minMax) {
                this._minMaxDaysSinceUpdate = minMax;
                this.notifyChange("minMaxDaysSinceUpate");
            },
            enumerable: true,
            configurable: true
        });
        CustomFeatureLayer6.prototype.createLayerView = function (view) {
            if (view.type === "2d") {
                return new CustomFeatureLayerView_1.default({
                    view: view,
                    layer: this
                });
            }
        };
        tslib_1.__decorate([
            decorators_1.property()
        ], CustomFeatureLayer6.prototype, "colorRamp", null);
        tslib_1.__decorate([
            decorators_1.property()
        ], CustomFeatureLayer6.prototype, "url", void 0);
        CustomFeatureLayer6 = tslib_1.__decorate([
            decorators_1.subclass("CustomFeatureLayer6")
        ], CustomFeatureLayer6);
        return CustomFeatureLayer6;
    }(decorators_1.declared(Layer_1.default)));
    return CustomFeatureLayer6;
});
//# sourceMappingURL=CustomFeatureLayer.js.map