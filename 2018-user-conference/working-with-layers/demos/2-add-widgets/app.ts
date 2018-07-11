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

const legend = new Legend({
  view
});

const layerList = new LayerList({
  view
});

view.ui.add(legend, "bottom-left");
view.ui.add(layerList, "top-right");
