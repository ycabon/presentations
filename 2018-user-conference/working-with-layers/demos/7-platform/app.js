define(["require", "exports", "esri/WebMap", "esri/layers/Layer", "esri/portal/PortalItem", "esri/views/MapView", "esri/widgets/Legend", "esri/widgets/LayerList"], function (require, exports, WebMap, Layer, PortalItem, MapView, Legend, LayerList) {
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
    Layer.fromPortalItem({
        portalItem: new PortalItem({
            id: "ae449d81e9da47dbb1969afc3021bdf7"
        })
    }).then(function (layer) {
        map.add(layer);
        layer.load().then(function () {
            view.extent = layer.fullExtent;
        });
    });
    view.ui.add(new Legend({
        view: view
    }), "bottom-left");
    view.ui.add(new LayerList({
        view: view
    }), "top-right");
});
