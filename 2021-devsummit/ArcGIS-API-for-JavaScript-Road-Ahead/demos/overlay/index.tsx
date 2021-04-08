import { createProjector, VNode } from "maquette";
import { jsx } from "maquette-jsx";

import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";

import Graphic from "@arcgis/core/Graphic";
import { Extent } from "@arcgis/core/geometry";
import { SimpleFillSymbol } from "@arcgis/core/symbols";

import OverlayLayer from "@arcgis/core/layers/OverlayLayer";

import WebMap from "@arcgis/core/WebMap";

// esri.layers.ogc
import {
  WFSGetCapabilities,
  getCapabilities,
} from "@arcgis/core/layers/ogc/wfsUtils";

interface WFSApplicationState {
  serviceUrl?: string;
  getCapabilitiesPromise?: Promise<WFSGetCapabilities>;
  getCapabilities?: WFSGetCapabilities;
  graphics: Graphic[];
}

export function overlayApplication() {
  config.assetsPath = new URL(
    "../dist/assets/",
    window.location.href
  ).toString();

  let view: MapView = new MapView({
    map: new WebMap({
      basemap: {
        portalItem: {
          id: "75a3ce8990674a5ebd5b9ab66bdab893",
          // id: "7da16f48c81f448fa972d4a52fdc1e4e"
        },
      },
    }),
    popup: {
      defaultPopupTemplateEnabled: true,
    },
    zoom: 5,
    center: [4, 48],
    constraints: {
      snapToZoom: false,
    },
  });

  let state: WFSApplicationState = {
    graphics: [],
  };

  const elements: {
    serviceUrl?: HTMLInputElement;
  } = {};

  const symbol = new SimpleFillSymbol({
    color: "rgba(222, 41, 0, 0.01)",
    outline: {
      color: "rgba(222, 41, 0, 1)",
    },
  });

  //Renders the application content
  function render() {
    const { serviceUrl, graphics } = state;
    return (
      <calcite-shell>
        <header slot="shell-header">
          <h2 style="margin-left: 30px">Road Ahead - 3.x MapImageLayer</h2>
        </header>
        <div style="padding: 0; margin: 0; height: 100%; width: 100%;">
          <div
            style="padding: 0; margin: 0; height: 100%; width: 100%;"
            afterCreate={createMapView}
          ></div>
        </div>
      </calcite-shell>
    );
  }

  function renderLayerList(state: WFSApplicationState): VNode {
    if (state.getCapabilitiesPromise) {
      return <calcite-loader type="indeterminate"></calcite-loader>;
    }

    return (
      <calcite-pick-list dir="ltr" theme="light" filter-enabled="true">
        {state.graphics.map((layer) => (
          <calcite-pick-list-item
            key={layer.attributes.typeName}
            label={layer.attributes.title}
            description={layer.attributes.typeName}
            value={layer.attributes.typeName}
            onmouseover={() => onLayerOver(layer)}
            onmouseout={() => onLayerOut(layer)}
            onclick={() =>
              loadLayer(state.getCapabilities, layer.attributes.typeName)
            }
          ></calcite-pick-list-item>
        ))}
      </calcite-pick-list>
    );
  }

  function onLayerOver(layer: Graphic): void {
    view.graphics.removeAll();
    view.graphics.add(layer);
  }

  function onLayerOut(layer: Graphic): void {
    view.graphics.remove(layer);
  }

  function loadLayer(
    getCapabilities: WFSGetCapabilities | undefined,
    typeName: string
  ): void {
    const layers = view.map.layers.toArray();
    view.map.layers.removeAll();
    layers.forEach((l) => l.destroy());
    view.popup.close();
    view.map.add(
      new WFSLayer({
        url: state.serviceUrl,
        getCapabilities,
        typeName,
      })
    );
  }

  function createMapView(container: HTMLDivElement) {
    view.container = container;
  }

  // const url = "https://geobretagne.fr/geoserver/ows";
  // let url = "http://www.cbnbrest.fr/geoserver/diffusion_cbnb/wfs";
  // let url = "https://geobretagne.fr/geoserver/otb/wfs";
  // const url = "https://geobretagne.fr/geoserver/brgm/wfs";
  // const url = "https://geobretagne.fr/geoserver/alti/wfs";
  // const url =
  // "http://services.azgs.az.gov/ArcGIS/services/aasggeothermal/AZWellHeaders/MapServer/WFSServer";

  // No object id
  const url = "https://geobretagne.fr/geoserver/ows";

  setServiceURL(url);

  const projector = createProjector();
  projector.append(document.body, render);
}
