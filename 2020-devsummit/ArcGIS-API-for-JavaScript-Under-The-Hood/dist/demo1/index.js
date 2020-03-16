define(["require", "exports", "tslib", "./CustomFeatureLayer", "esri/Map", "esri/views/MapView"], function (require, exports, tslib_1, CustomFeatureLayer_1, Map_1, MapView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    CustomFeatureLayer_1 = tslib_1.__importDefault(CustomFeatureLayer_1);
    Map_1 = tslib_1.__importDefault(Map_1);
    MapView_1 = tslib_1.__importDefault(MapView_1);
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
    view.when();
});
//# sourceMappingURL=index.js.map