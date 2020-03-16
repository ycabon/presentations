import CustomFeatureLayer from './CustomFeatureLayer';

import { workers } from "esri/config";
import ArcGISMap from "esri/Map";
import { byName as colorRampByName } from "esri/renderers/smartMapping/symbology/support/colorRamps";
import { renderColorRampPreviewHTML } from "esri/symbols/support/symbolUtils";
import MapView from 'esri/views/MapView';

workers.loaderConfig.packages = (window as any).dojoConfig.packages;

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


const rampContainer = document.getElementById("rampContainer");
view.ui.add(rampContainer, "bottom-left");

const selectColorRampCombo = document.getElementById("colorRampSelect") as HTMLSelectElement;
setColorRamp(colorRampByName(selectColorRampCombo.value));

selectColorRampCombo.onchange = () => {
  setColorRamp(colorRampByName(selectColorRampCombo.value));
}

function setColorRamp(colorRamp: __esri.colorRampsColorRamp) {
  layer.colorRamp = colorRamp;
  const colorRampElement = renderColorRampPreviewHTML(colorRamp.colorsForClassBreaks[6].colors, {
    align: "vertical",
    gradient: false,
    height: 200,
    width: 100
  });
  colorRampElement.id = "ramp";

  const rampNode = document.getElementById("ramp");
  if(rampNode) {
    rampNode.remove();
  }
  rampContainer.appendChild(colorRampElement);
  rampContainer.classList.add("ramps");
  rampContainer.title = colorRamp.name;
}