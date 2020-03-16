define(["require", "exports", "tslib", "./CustomFeatureLayer", "esri/config", "esri/Map", "esri/renderers/smartMapping/symbology/support/colorRamps", "esri/symbols/support/symbolUtils", "esri/views/MapView", "esri/widgets/Slider"], function (require, exports, tslib_1, CustomFeatureLayer_1, config_1, Map_1, colorRamps_1, symbolUtils_1, MapView_1, Slider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    CustomFeatureLayer_1 = tslib_1.__importDefault(CustomFeatureLayer_1);
    Map_1 = tslib_1.__importDefault(Map_1);
    MapView_1 = tslib_1.__importDefault(MapView_1);
    Slider_1 = tslib_1.__importDefault(Slider_1);
    config_1.workers.loaderConfig.packages = window.dojoConfig.packages;
    var map = new Map_1.default({
        basemap: "gray-vector"
    });
    var view = new MapView_1.default({
        container: 'viewDiv',
        map: map,
        center: [-118.2437, 34.0522],
        zoom: 10
    });
    var layer = new CustomFeatureLayer_1.default();
    map.add(layer);
    view.ui.add("rampContainer", "bottom-left");
    var selectColorRampCombo = document.getElementById("colorRampSelect");
    setColorRamp(colorRamps_1.byName(selectColorRampCombo.value));
    selectColorRampCombo.onchange = function () {
        setColorRamp(colorRamps_1.byName(selectColorRampCombo.value));
    };
    function setColorRamp(colorRamp) {
        layer.colorRamp = colorRamp;
        var colorRampElement = symbolUtils_1.renderColorRampPreviewHTML(colorRamp.colorsForClassBreaks[6].colors, {
            align: "vertical",
            gradient: false,
            height: 200,
            width: 100
        });
        colorRampElement.id = "ramp";
        var rampContainer = document.getElementById("rampContainer");
        var rampNode = document.getElementById("ramp");
        if (rampNode) {
            rampNode.remove();
        }
        rampContainer.appendChild(colorRampElement);
        rampContainer.classList.add("ramps");
        rampContainer.title = colorRamp.name;
    }
    var widthSlider = new Slider_1.default({
        container: "widthSlider",
        min: 0,
        max: 150,
        steps: 1,
        values: [20, 100],
        rangeLabelsVisible: true
    });
    view.ui.add("widthSlider", "bottom");
    widthSlider.watch("values", function (values) {
        layer.minMaxDaysSinceUpate = values;
    });
});
//# sourceMappingURL=index.js.map