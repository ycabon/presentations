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
            }),
            visualVariables: [
                {
                    // Size the tree symbol based on the Crown_Base attribute
                    // It represents the diameter of the crown of the tree
                    // https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#RealWorldSize
                    type: "size",
                    field: "Crown_Base",
                    valueUnit: "feet",
                    valueRepresentation: "radius"
                },
                {
                    // Color the tree symbol continously based on its carbon storage
                    type: "color",
                    field: "C_Storage",
                    // values from statistics https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0/query?outStatistics=%5B%7B+onStatisticField%3A+%22C_Storage%22%2C+statisticType%3A+%22min%22+%7D%2C+%7B+onStatisticField%3A+%22C_Storage%22%2C+statisticType%3A+%22max%22+%7D%2C+%7B+onStatisticField%3A+%22C_Storage%22%2C+statisticType%3A+%22stddev%22+%7D%5D
                    stops: [
                        {
                            value: 0,
                            color: "lightgreen"
                        },
                        {
                            value: 13228,
                            color: "darkgreen"
                        }
                    ],
                    legendOptions: {
                        title: "Carbon Storage"
                    }
                }
            ]
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
