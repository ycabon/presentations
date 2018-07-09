import esriConfig = require("esri/config");
import CSVLayer = require("esri/layers/CSVLayer");
import { UniqueValueRenderer } from "esri/renderers";
import { PictureMarkerSymbol } from "esri/symbols";
import WebMap = require("esri/WebMap");
import Legend = require("esri/widgets/Legend");
import Expand = require("esri/widgets/Expand");
import MapView = require("esri/views/MapView");
import CSVLayerView = require("esri/views/layers/CSVLayerView");
import watchUtils = require("esri/core/watchUtils");

esriConfig.request.corsEnabledServers.push("https://arcgis.github.io");

const url =
  "https://arcgis.github.io/arcgis-samples-javascript/sample-data/hurricanes.csv";

(async () => {
  const layer = new CSVLayer({
    title: "Hurricanes",
    url: url,
    copyright: "NOAA",
    popupTemplate: {
      title: "{Name}",
      content: [
        {
          type: "text",
          text: "Category {Category} storm with that occurred at {ISO_time}."
        },
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "wmo_pres",
              label: "Pressure"
            },
            {
              fieldName: "wmo_wind",
              label: "Wind Speed (mph)"
            }
          ]
        }
      ],
      fieldInfos: [
        {
          fieldName: "ISO_time",
          format: {
            dateFormat: "short-date-short-time"
          }
        }
      ]
    },
    renderer: new UniqueValueRenderer({
      field: "Category",
      uniqueValueInfos: (() => {
        const fireflyImages = [
          "cat1.png",
          "cat2.png",
          "cat3.png",
          "cat4.png",
          "cat5.png"
        ];

        const baseUrl =
          "https://arcgis.github.io/arcgis-samples-javascript/sample-data/";

        return fireflyImages.map((url, i) => {
          return {
            value: i + 1, // Category number
            symbol: new PictureMarkerSymbol({
              url: baseUrl + url
            })
          };
        });
      })()
    })
  });

  const map = new WebMap({
    // contains a basemap with a South Pole Stereographic projection
    // the CSVLayer coordinates will re-project client-side
    // with the Projection Engine to match the view's Spatial Reference
    basemap: {
      portalItem: {
        id: "3113eacc129942b4abde490a51aeb33f"
      }
    },
    layers: [layer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    highlightOptions: {
      color: "#ff642e",
      haloOpacity: 1,
      fillOpacity: 0.25
    },
    popup: {
      dockEnabled: true,
      dockOptions: {
        breakpoint: false
      }
    }
  });

  const legendExpand = new Expand({
    view: view,
    content: new Legend({
      view: view,
      style: "card"
    })
  });

  view.ui.add(legendExpand, "top-left");

  const layerView = (await view.whenLayerView(layer)) as CSVLayerView;

  await watchUtils.whenDefinedOnce(layerView, "featuresView.tileRenderer");

  const featuresView: {
    setVisibility(showFeatures: number[], hideFeatures: number[]): void;
  } = (layerView as any).featuresView.tileRenderer.featuresView;
  let hiddenIds: number[] = [];

  const slider = document.getElementById("slider") as HTMLInputElement;
  const sliderValue = document.getElementById("sliderValue");
  // const playButton = document.getElementById("playButton");
  // const titleDiv = document.getElementById("titleDiv");

  slider.addEventListener("input", inputHandler);
  slider.addEventListener("change", inputHandler);

  // When user drags the slider:
  //  - stops the animation
  //  - set the visualized year to the slider one.
  function inputHandler() {
    setYear(parseInt(slider.value, 10));
  }

  /**
   * Sets the current visualized construction year.
   */
  function setYear(value: number): void {
    sliderValue.innerHTML = "" + Math.floor(value);
    slider.value = "" + Math.floor(value);

    layerView;

    layer
      .queryObjectIds({
        where: `year <> ${value}`
      })
      .then(objectIds => {
        featuresView.setVisibility(hiddenIds, objectIds);
        hiddenIds = objectIds;
      })
      .catch(error => {
        console.error(error);
      });
  }
})();
