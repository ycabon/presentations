import CustomFeatureLayer from "./CustomFeatureLayer";

import { workers } from "esri/config";
import ArcGISMap from "esri/Map";
import { byName as colorRampByName } from "esri/renderers/smartMapping/symbology/support/colorRamps";
import { renderColorRampPreviewHTML } from "esri/symbols/support/symbolUtils";
import MapView from 'esri/views/MapView';

import Slider from "esri/widgets/Slider";

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

view.ui.add("rampContainer", "bottom-left");

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

  const rampContainer = document.getElementById("rampContainer");
  const rampNode = document.getElementById("ramp");
  if(rampNode) {
    rampNode.remove();
  }
  rampContainer.appendChild(colorRampElement);
  rampContainer.classList.add("ramps");
  rampContainer.title = colorRamp.name;
}

const widthSlider = new Slider({
  container: "widthSlider",
  min: 0,
  max: 150,
  steps: 1,
  values: [ 20, 100 ],
  rangeLabelsVisible: true
});
view.ui.add("widthSlider", "bottom");
widthSlider.watch("values", (values: [number, number]) => {
  layer.minMaxDaysSinceUpate = values;
});