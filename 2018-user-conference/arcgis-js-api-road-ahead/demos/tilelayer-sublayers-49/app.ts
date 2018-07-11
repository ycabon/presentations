import WebMap = require("esri/WebMap");
import Layer = require("esri/layers/Layer");
import PortalItem = require("esri/portal/PortalItem");
import MapView = require("esri/views/MapView");
import Legend = require("esri/widgets/Legend");
import LayerList = require("esri/widgets/LayerList");

const map = new WebMap();

// Original layer: http://jsapi.maps.arcgis.com/home/item.html?id=a9ea1e7f690e48c9ae1eaab89f5e9c01
// Published Layer: http://jsapi.maps.arcgis.com/home/item.html?id=744010c91dae4f7f9d8cf8a3a76599c7

Layer.fromPortalItem({
  portalItem: new PortalItem({
    id: "0fd7dc7c53c34b03ab4475d895b5d32f"
    // id: "7837e613092d4fefa93f5f47427f9338"
    // id: "744010c91dae4f7f9d8cf8a3a76599c7"
  })
}).then(function(layer) {
  map.add(layer);
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-100, 40],
  zoom: 3
});

const layerlist = new LayerList({
  view: view
});
view.ui.add(layerlist, "top-right");

const legend = new Legend({
  view: view
});
view.ui.add(legend, "bottom-left");
