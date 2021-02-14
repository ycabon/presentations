import { createProjector, VNode, createMapping } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import config from "@arcgis/core/config";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import { SimpleRenderer, UniqueValueRenderer } from "@arcgis/core/renderers";
import { SimpleFillSymbol } from "@arcgis/core/symbols";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import Swipe from "@arcgis/core/widgets/Swipe";

export function imageryBloomApplication() {
  config.assetsPath = "https://unpkg.com/@arcgis/core/assets/"; // new URL("../assets/", window.location.href).toString();

  //Renders the application content
  function render() {
    return (
      <calcite-shell>
        <header slot="shell-header">
          <h2 style="margin-left: 30px">Bloom on Imagery</h2>
        </header>
        <div style="padding: 0; margin: 0; height: 100%; width: 100%;">
          <div
            style="padding: 0; margin: 0; height: 100%; width: 100%;"
            afterCreate={(el: HTMLDivElement) => createMapView(el)}
          ></div>
        </div>
      </calcite-shell>
    );
  }

  let map: WebMap;
  let view: MapView;

  function createMapView(container: HTMLDivElement) {
    const noEffectImageryLayer = new ImageryLayer({
      url:
        "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
    });

    const effectImageryLayer = new ImageryLayer({
        url:
          "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
        effect: [
          {
            scale: 5_000_000,
            value: "drop-shadow(1px 1px 2px black) bloom(2 0 0.5)",
          },
          {
            scale: 2_000_000,
            value:
              "drop-shadow(0px 0px 0px #ff5722) bloom(0.1 0 0.5) grayscale(0.4)",
          },
        ],
        renderer: new UniqueValueRenderer({
          field: "Value",
          uniqueValueInfos: [
            {
              value: 24,
              label: "Developed, High Intensity",
              symbol: new SimpleFillSymbol({
                color: "#ffeb3b",
              }),
            },
            {
              value: 23,
              label: "Developed, Medium Intensity",
              symbol: new SimpleFillSymbol({
                color: "#ffc107",
              }),
            },
            {
              value: 22,
              label: "Developed, Low Intensity",
              symbol: new SimpleFillSymbol({
                color: "#ff9800",
              }),
            },
          ],
        }),
      }),
      map = new WebMap({
        basemap: {
          baseLayers: [
            new VectorTileLayer({
              portalItem: {
                id: "bc83b1329cac47ffbd7f70e734be9083",
              },
            }),
            new FeatureLayer({
              portalItem: {
                id: "28da9fa638b74fb295cc07008ef2f14a",
              },
              renderer: new SimpleRenderer({
                symbol: new SimpleFillSymbol({
                  style: "none",
                  outline: {
                    type: "simple-line",
                    color: "#282828",
                  },
                }),
              }),
            }),
          ],
        },
        layers: [noEffectImageryLayer, effectImageryLayer],
      });

    view = new MapView({
      container,
      map,
      extent: {
        spatialReference: {
          wkid: 102003,
        },
        xmax: 1874643.2331984383,
        xmin: -2268085.08383833,
        ymax: 1306570.485845424,
        ymin: -962852.3969934431,
      },
      constraints: {
        snapToZoom: false,
        minScale: 45_000_000,
      },
    });

    var swipe = new Swipe({
      view: view,
      leadingLayers: [noEffectImageryLayer],
      trailingLayers: [effectImageryLayer],
      direction: "horizontal",
      position: 50,
    });
    view.ui.add(swipe);
  }

  const projector = createProjector();
  projector.append(document.body, render);
}
