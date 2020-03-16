import CustomFeatureLayer from './CustomFeatureLayer';

import ArcGISMap from "esri/Map";
import MapView from 'esri/views/MapView';

const map = new ArcGISMap({
  basemap: "gray-vector"
});

const view = new MapView({
  container: 'viewDiv',
  map,
  center: [-118.2437, 34.0522],
  zoom: 10
});

const layer = new CustomFeatureLayer();
map.add(layer);

view.when();

