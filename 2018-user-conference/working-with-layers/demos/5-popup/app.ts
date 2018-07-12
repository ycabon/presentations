import WebMap = require("esri/WebMap");
import FeatureLayer = require("esri/layers/FeatureLayer");
import MapView = require("esri/views/MapView");
import Legend = require("esri/widgets/Legend");
import LayerList = require("esri/widgets/LayerList");
import { SimpleRenderer } from "esri/renderers";
import { SimpleMarkerSymbol } from "esri/symbols";
import PopupTemplate = require("esri/PopupTemplate");

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
    "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
  renderer: new SimpleRenderer({
    symbol: new SimpleMarkerSymbol({
      style: "circle",
      size: 6,
      color: "forestgreen",
      outline: {
        color: "white",
        width: 1
      }
    }),
    visualVariables: [
      {
        // Size the tree symbol based on the Crown_Base attribute
        // It represents the diameter of the crown of the tree
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#RealWorldSize
        type: "size",
        field: "Crown_Base",
        valueUnit: "feet",
        valueRepresentation: "radius"
      },
      {
        // Color the tree symbol continously based on its carbon storage
        type: "color",
        field: "C_Storage",
        // values from statistics https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0/query?outStatistics=%5B%7B+onStatisticField%3A+%22C_Storage%22%2C+statisticType%3A+%22min%22+%7D%2C+%7B+onStatisticField%3A+%22C_Storage%22%2C+statisticType%3A+%22max%22+%7D%2C+%7B+onStatisticField%3A+%22C_Storage%22%2C+statisticType%3A+%22stddev%22+%7D%5D
        stops: [
          {
            value: 0,
            color: "lightgreen"
          },
          {
            value: 13228,
            color: "darkgreen"
          }
        ],
        legendOptions: {
          title: "Carbon Storage"
        }
      }
    ]
  }),
  popupTemplate: new PopupTemplate({
    title: `{Sci_Name}`,
    content: `<b>Carbon Storage:</b> {C_Storage}`
  })
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
