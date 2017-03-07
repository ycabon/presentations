import React from 'react';
import ReactDOM from 'react/react-dom';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from 'esri/layers/VectorTileLayer';
import Zoom from 'app/components/zoom';
import 'dojo/domReady!';

const map = new Map({
  layers: [
    new VectorTileLayer({
      url: "https://www.arcgis.com/sharing/rest/content/items/00cd8e843bae49b3a040423e5d65416b/resources/styles/root.json"
    })
  ]
});

const view = new MapView({
  container: document.getElementById('viewDiv'),
  map,
    center: [-118.37,34.06],
  zoom: 12,
  ui: {
    components: [] // empty the UI
  },
  padding: {
    top: 80
  }
});

let node = document.createElement('div');

view.then(() => {
  view.ui.add(node, 'top-left');

  ReactDOM.render(
      <Zoom view={view}/>, node
  );
});
