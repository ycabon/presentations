import { createProjector, VNode, createMapping } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import config from "@arcgis/core/config";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import { SimpleRenderer } from "@arcgis/core/renderers";
import { SimpleFillSymbol } from "@arcgis/core/symbols";
import Swipe from "@arcgis/core/widgets/Swipe";

export function filterOrderMattersApplication() {
  config.assetsPath = "https://unpkg.com/@arcgis/core@4.18.1/assets/"; // new URL("../assets/", window.location.href).toString();

  //Renders the application content
  function render() {
    return (
      <calcite-shell theme="light">
        <header slot="shell-header">
          <h2 style="margin-left: 30px">Order of filter functions matters</h2>
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
    const opacityDropShadowLayer = new FeatureLayer({
      id: "countries",
      definitionExpression: "FID = 156",
      effect: "opacity(50%) drop-shadow(10px 10px 20px black)",
      portalItem: {
        id: "53a1e68de7e4499cad77c80daba46a94",
      },
      renderer: new SimpleRenderer({
        symbol: new SimpleFillSymbol({
          style: "solid",
          color: "#EEE",
        }),
      }),
    });

    const dropShadowOpacityLayer = new FeatureLayer({
      id: "countries",
      definitionExpression: "FID = 156",
      effect: "drop-shadow(10px 10px 20px black) opacity(50%)",
      portalItem: {
        id: "53a1e68de7e4499cad77c80daba46a94",
      },
      renderer: new SimpleRenderer({
        symbol: new SimpleFillSymbol({
          style: "solid",
          color: "#EEE",
        }),
      }),
    });

    map = new WebMap({
      basemap: {
        baseLayers: [
          new TileLayer({
            id: "hillshade",
            portalItem: {
              id: "1b243539f4514b6ba35e7d995890db1d",
            },
          }),
        ],
      },
      layers: [opacityDropShadowLayer, dropShadowOpacityLayer],
    });

    view = new MapView({
      container,
      map,
      center: [2.67, 45.57],
      zoom: 6,
      constraints: {
        snapToZoom: false,
      },
    });

    var swipe = new Swipe({
      view: view,
      leadingLayers: [opacityDropShadowLayer],
      trailingLayers: [dropShadowOpacityLayer],
      direction: "horizontal",
      position: 10,
    });
    view.ui.add(swipe);
  }

  const projector = createProjector();
  projector.append(document.body, render);
}
