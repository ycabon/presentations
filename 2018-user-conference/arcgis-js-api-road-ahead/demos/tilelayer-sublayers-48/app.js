define(["require", "exports", "esri/WebMap", "esri/layers/Layer", "esri/portal/PortalItem", "esri/views/MapView", "esri/widgets/Legend", "esri/widgets/LayerList"], function (require, exports, WebMap, Layer, PortalItem, MapView, Legend, LayerList) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var map = new WebMap();
    // Original layer: http://jsapi.maps.arcgis.com/home/item.html?id=a9ea1e7f690e48c9ae1eaab89f5e9c01
    // Published Layer: http://jsapi.maps.arcgis.com/home/item.html?id=744010c91dae4f7f9d8cf8a3a76599c7
    Layer.fromPortalItem({
        portalItem: new PortalItem({
            // id: "0fd7dc7c53c34b03ab4475d895b5d32f"
            id: "7837e613092d4fefa93f5f47427f9338"
            // id: "744010c91dae4f7f9d8cf8a3a76599c7"
        })
    }).then(function (layer) {
        map.add(layer);
    });
    var view = new MapView({
        container: "viewDiv",
        map: map
    });
    var layerlist = new LayerList({
        view: view
    });
    view.ui.add(layerlist, "top-right");
    var legend = new Legend({
        view: view
    });
    view.ui.add(legend, "bottom-left");
});
