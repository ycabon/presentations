import React from 'react';
import ReactDOM from 'react/react-dom';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import VectorTileLayer from 'esri/layers/VectorTileLayer';
import Zoom from 'app/components/zoom';
import Compass from 'app/components/compass';
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
    center: [-118.174, 34.024],
  zoom: 12,
  ui: {
    components: [] // empty the UI
  }
});

let leftNode = document.createElement('div');
let rightNode = document.createElement('div');



let btn = document.getElementById("switchView");
let container = document.getElementById("viewContainer");
btn.addEventListener("click", () => {
  container.classList.toggle("view-portrait");
  container.classList.toggle("view-landscape");
  view._measure();
});
view.ui.add(leftNode, 'bottom-left');
view.ui.add(rightNode, 'bottom-right');

ReactDOM.render(
  <Zoom view={view}/>,
  leftNode
);

ReactDOM.render(
  <Compass view={view}/>,
  rightNode
);
