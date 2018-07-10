import WebMap = require("esri/WebMap");
import FeatureLayer = require("esri/layers/FeatureLayer");
import MapView = require("esri/views/MapView");

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

// Load the layer then zoom the mapview to the layer's extent
layer.load().then(() => {
  view.extent = layer.fullExtent;
});
