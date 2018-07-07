import FeatureLayer = require("esri/layers/FeatureLayer");
import { HeatmapRenderer, SimpleRenderer } from "esri/renderers";
import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import LayerList = require("esri/widgets/LayerList");
import CoordinateConversion = require("esri/widgets/CoordinateConversion");
import HeatmapSlider = require("esri/widgets/HeatmapSlider");
import { SimpleMarkerSymbol } from "esri/symbols";

let renderer = new HeatmapRenderer({
  colorStops: [
    {
      color: "rgba(63, 40, 102, 0)",
      ratio: 0.01
    },
    {
      color: "rgba(63, 40, 102, 0)",
      ratio: 0.01
    },
    {
      color: "#472b77",
      ratio: 0.083
    },
    {
      color: "#4e2d87",
      ratio: 0.166
    },
    {
      color: "#563098",
      ratio: 0.249
    },
    {
      color: "#5d32a8",
      ratio: 0.332
    },
    {
      color: "#6735be",
      ratio: 0.415
    },
    {
      color: "#7139d4",
      ratio: 0.498
    },
    {
      color: "#7b3ce9",
      ratio: 0.581
    },
    {
      color: "#853fff",
      ratio: 0.664
    },
    {
      color: "#a46fbf",
      ratio: 0.747
    },
    {
      color: "#c29f80",
      ratio: 0.83
    },
    {
      color: "#e0cf40",
      ratio: 0.913
    },
    {
      color: "#ffff00",
      ratio: 1
    },
    {
      color: "#ffff00",
      ratio: 1
    },
    {
      color: "#ffff00",
      ratio: 1
    }
  ],
  blurRadius: 2,
  maxPixelIntensity: 25,
  minPixelIntensity: 0
});

const layer = new FeatureLayer({
  url:
    "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Restaurants/FeatureServer/0",
  renderer: new SimpleRenderer({
    symbol: new SimpleMarkerSymbol({
      size: 2,
      outline: null,
      color: "black"
    })
  }),
  popupTemplate: {
    content: "{*}"
  }
});

const map = new WebMap({
  basemap: {
    portalItem: {
      id: "3582b744bba84668b52a16b0b6942544"
      // id: "75a3ce8990674a5ebd5b9ab66bdab893"
    }
  },
  layers: [layer]
});

const view = new MapView({
  container: "viewDiv",
  center: [-74, 40.72],
  zoom: 6,
  map: map,
  constraints: {
    snapToZoom: false,
    minZoom: 3
  }
});

view.ui.add(
  new LayerList({
    view: view
  }),
  "top-right"
);

view.ui.add(
  new CoordinateConversion({
    view: view
  }),
  "bottom-right"
);

const heatmapConfigurationDiv = document.getElementById(
  "heatmapConfiguration"
) as HTMLDivElement;
const blurRadiusSlider = document.getElementById(
  "blurRadiusSlider"
) as HTMLInputElement;
const heatmapEnabledCheckbox = document.getElementById(
  "heatmapEnabledCheckbox"
) as HTMLInputElement;
const heatmapSliderDiv = document.getElementById(
  "heatmapSlider"
) as HTMLDivElement;

blurRadiusSlider.min = String(1);
blurRadiusSlider.max = String(5);
blurRadiusSlider.step = String(0.1);
blurRadiusSlider.value = String(renderer.blurRadius);
blurRadiusSlider.addEventListener("change", () => {
  renderer = renderer.clone();
  renderer.blurRadius = +blurRadiusSlider.value;
  if (layer.renderer.type === "heatmap") {
    layer.renderer = renderer;
  }
});
blurRadiusSlider.addEventListener("input", () => {
  renderer = renderer.clone();
  renderer.blurRadius = +blurRadiusSlider.value;
  if (layer.renderer.type === "heatmap") {
    layer.renderer = renderer;
  }
});

const slider = new HeatmapSlider(
  {
    colorStops: renderer.colorStops
  },
  heatmapSliderDiv
);

slider.on("change", event => {
  const renderer = (layer.renderer as HeatmapRenderer).clone();

  renderer.colorStops = event.colorStops;
  layer.renderer = renderer;
});

heatmapEnabledCheckbox.addEventListener("change", () => {
  layer.renderer = heatmapEnabledCheckbox.checked
    ? renderer
    : new SimpleRenderer({
        symbol: new SimpleMarkerSymbol({
          size: 2,
          outline: null,
          color: "black"
        })
      });
});

view.ui.add(heatmapConfigurationDiv, "bottom-left");
