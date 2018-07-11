define(["require", "exports", "esri/WebMap", "esri/layers/FeatureLayer", "esri/views/MapView", "esri/widgets/Legend", "esri/widgets/LayerList"], function (require, exports, WebMap, FeatureLayer, MapView, Legend, LayerList) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var map = new WebMap({
        basemap: "topo-vector"
    });
    var view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 3,
        center: [-100, 40]
    });
    var layer = new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
    });
    map.add(layer);
    layer.load().then(function () {
        view.extent = layer.fullExtent;
    });
    var legend = new Legend({
        view: view
    });
    var layerList = new LayerList({
        view: view
    });
    view.ui.add(legend, "bottom-left");
    view.ui.add(layerList, "top-right");
});
