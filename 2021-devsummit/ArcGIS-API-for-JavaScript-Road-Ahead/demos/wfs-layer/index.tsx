import { createProjector, VNode } from "maquette";
import { jsx } from "maquette-jsx";

import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";

import Graphic from "@arcgis/core/Graphic";
import { Extent } from "@arcgis/core/geometry";
import { SimpleFillSymbol } from "@arcgis/core/symbols";

import WFSLayer from "@arcgis/core/layers/WFSLayer";

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

export function wfsApplication() {
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

  function setServiceURL(url: string | undefined): void {
    if (url === state.serviceUrl) {
      return;
    }

    if (!url) {
      state = {
        ...state,
        serviceUrl: "undefined",
        getCapabilitiesPromise: undefined,
      };

      projector.scheduleRender();
      return;
    }

    const getCapabilitiesPromise = getCapabilities(url);

    state = {
      ...state,
      serviceUrl: url,
      getCapabilitiesPromise,
    };

    getCapabilitiesPromise.then((getCapabilities) => {
      if (getCapabilitiesPromise === state.getCapabilitiesPromise) {
        state = {
          ...state,
          getCapabilitiesPromise: undefined,
          getCapabilities,
          graphics: Array.from(
            getCapabilities.featureTypes(),
            (featureType) => {
              const { typeName, title, description, extent } = featureType;
              return new Graphic({
                geometry: new Extent({
                  ...extent,
                }),
                attributes: {
                  title,
                  typeName,
                  description,
                },
                symbol,
              });
            }
          ),
        };
      }
    });
  }

  function onServiceURLChange() {
    const url = elements.serviceUrl?.value;
    setServiceURL(url);
  }

  //Renders the application content
  function render() {
    const { serviceUrl, graphics } = state;
    return (
      <calcite-shell>
        <header slot="shell-header">
          <h2 style="margin-left: 30px">Road Ahead - WFSLayer</h2>
        </header>
        <calcite-shell-panel slot="primary-panel" position="start">
          <div style="padding: 12px">
            <calcite-label status="idle" scale="s">
              OGC WFS endpoint
              <calcite-input
                afterCreate={(el: HTMLInputElement) =>
                  (elements.serviceUrl = el)
                }
                type="text"
                status="idle"
                value={serviceUrl}
              ></calcite-input>
            </calcite-label>
            <calcite-label scale="s" layout="inline">
              <calcite-button scale="s" onclick={onServiceURLChange}>
                GetCapabilities
              </calcite-button>
              Layers: {graphics.length}
            </calcite-label>
          </div>
          <div style="overflow: scroll">{renderLayerList(state)}</div>
        </calcite-shell-panel>
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
