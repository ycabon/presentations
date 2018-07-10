import WebMap = require("esri/WebMap");
import FeatureLayer = require("esri/layers/FeatureLayer");
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

const layer = new FeatureLayer({
  url:
    "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
});

map.add(layer);

layer.load().then(() => {
  view.extent = layer.fullExtent;
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
