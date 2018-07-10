define(["require", "exports", "esri/WebMap", "esri/layers/FeatureLayer", "esri/views/MapView", "esri/widgets/Legend", "esri/widgets/LayerList", "esri/renderers", "esri/symbols"], function (require, exports, WebMap, FeatureLayer, MapView, Legend, LayerList, renderers_1, symbols_1) {
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
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
        renderer: new renderers_1.SimpleRenderer({
            symbol: new symbols_1.SimpleMarkerSymbol({
                style: "circle",
                size: 6,
                color: "forestgreen",
                outline: {
                    color: "white",
                    width: 1
                }
            })
        })
    });
    map.add(layer);
    layer.load().then(function () {
        view.extent = layer.fullExtent;
    });
    view.ui.add(new Legend({
        view: view
    }), "bottom-left");
    view.ui.add(new LayerList({
        view: view
    }), "top-right");
});
