import WebMap = require("esri/WebMap");
import Layer = require("esri/layers/Layer");
import PortalItem = require("esri/portal/PortalItem");
import MapView = require("esri/views/MapView");
import Legend = require("esri/widgets/Legend");
import LayerList = require("esri/widgets/LayerList");

const map = new WebMap({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 3,
  center: [-100, 40]
});

Layer.fromPortalItem({
  portalItem: new PortalItem({
    id: "ae449d81e9da47dbb1969afc3021bdf7"
  })
}).then(layer => {
  map.add(layer);

  layer.load().then(() => {
    view.extent = layer.fullExtent;
  });
});

view.ui.add(
  new Legend({
    view
  }),
  "bottom-left"
);

view.ui.add(
  new LayerList({
    view
  }),
  "top-right"
);
