import React from 'react';
import ReactDOM from 'react/react-dom';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from 'esri/layers/VectorTileLayer';
import Zoom from 'app/components/zoom';
import 'dojo/domReady!';

const map = new Map({
  basemap: "streets-navigation-vector"
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
