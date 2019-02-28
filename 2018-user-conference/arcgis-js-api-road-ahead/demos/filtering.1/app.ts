import CSVLayer = require("esri/layers/CSVLayer");
import { UniqueValueRenderer } from "esri/renderers";
import { PictureMarkerSymbol, SimpleFillSymbol } from "esri/symbols";
import WebMap = require("esri/WebMap");
import Legend = require("esri/widgets/Legend");
import Expand = require("esri/widgets/Expand");
import MapView = require("esri/views/MapView");
import CSVLayerView = require("esri/views/layers/CSVLayerView");
import watchUtils = require("esri/core/watchUtils");
import GraphicsLayer = require("esri/layers/GraphicsLayer");
import SketchViewModel = require("esri/widgets/Sketch/SketchViewModel");
import Query = require("esri/tasks/support/Query");

import FeatureFilter = require("esri/layers/support/FeatureFilter");

let map: WebMap;
let view: MapView;

const url =
  "https://arcgis.github.io/arcgis-samples-javascript/sample-data/hurricanes.csv";

(async () => {
  const layer = new CSVLayer({
    title: "Hurricanes",
    spatialReference: {
      wkt: `PROJCS["South Pole Stereographic_1",GEOGCS["GCS WGS 1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Stereographic"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",-145.0],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",-90.0],UNIT["Meter",1.0]]`
    },
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

  map = new WebMap({
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

  view = new MapView({
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

  view.ui.add(
    new Expand({
      view: view,
      content: new Legend({
        view: view,
        style: "card"
      })
    }),
    "top-left"
  );

  const layerView = (await view.whenLayerView(layer)) as CSVLayerView;

  await watchUtils.whenDefinedOnce(layerView, "tileRenderer");

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

  await watchUtils.whenFalseOnce(layerView, "updating");

  const query = new Query();
  const invalidateQuery = () => {
    (layerView as any).featureFilter = new FeatureFilter({
      definitionExpression: query.where,
      geometry: query.geometry,
      spatialRelationship: "intersects"
    });
  };

  setupDrawing();

  /**
   * Sets the current visualized construction year.
   */
  function setYear(value: number): void {
    sliderValue.innerHTML = "" + Math.floor(value);
    slider.value = "" + Math.floor(value);
    query.where = `year = ${value}`;
    invalidateQuery();
  }

  function setupDrawing() {
    view.ui.add(document.getElementById("topbar"), "top-right");

    // GraphicsLayer to hold graphics created via sketch view model
    const drawLayer = new GraphicsLayer();

    map.add(drawLayer);

    // create a new sketch view model
    const sketchViewModel = new SketchViewModel({
      view: view,
      layer: drawLayer,
      polygonSymbol: new SimpleFillSymbol({
        color: "rgba(0,0,0,0)",
        style: "solid",
        outline: {
          color: "white",
          width: "1px"
        }
      })
    });

    setUpClickHandler();

    sketchViewModel.on("create", event => {
      updateQuery(event.graphic.geometry);
    });

    sketchViewModel.on("update", event => {
      updateQuery(event.graphics[0].geometry);
    });

    function updateQuery(geometry: any) {
      if (geometry.type !== "polygon") {
        return;
      }
      query.geometry = geometry;
      invalidateQuery();
    }

    //***************************************
    // activate the sketch to create a polygon
    //***************************************
    const drawPolygonButton = document.getElementById(
      "polygonButton"
    ) as HTMLButtonElement;
    drawPolygonButton.addEventListener("click", function(
      this: HTMLButtonElement
    ) {
      // set the sketch to create a polygon geometry
      sketchViewModel.create({
        tool: "polygon"
      });
      setActiveButton(this);
    });

    //***************************************
    // activate the sketch to create a polygon
    //***************************************
    const drawCircleButton = document.getElementById(
      "circleButton"
    ) as HTMLButtonElement;
    drawCircleButton.addEventListener("click", function(
      this: HTMLButtonElement
    ) {
      // set the sketch to create a polygon geometry
      sketchViewModel.create({
        tool: "circle"
      });
      setActiveButton(this);
    });

    //**************
    // reset button
    //**************
    document.getElementById("resetBtn").onclick = function() {
      sketchViewModel.reset();
      drawLayer.removeAll();
      setActiveButton();
      query.geometry = null;
      invalidateQuery();
    };

    function setActiveButton(selectedButton?: HTMLButtonElement) {
      // focus the view to activate keyboard shortcuts for sketching
      view.focus();
      drawLayer.removeAll();
      const elements = document.getElementsByClassName("active");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
      }
      if (selectedButton) {
        selectedButton.classList.add("active");
      }
    }

    // ************************************************************************************
    // set up logic to handle geometry update and reflect the update on "tempGraphicsLayer"
    // ************************************************************************************
    function setUpClickHandler() {
      view.on("click", function(event) {
        event.stopPropagation();

        view.hitTest(event).then(response => {
          const results = response.results;

          for (const { graphic } of results) {
            if (graphic.layer === drawLayer) {
              sketchViewModel.update({
                tool: "move",
                graphics: [graphic]
              });
              return;
            }
          }
        });
      });
    }
  }
})();
