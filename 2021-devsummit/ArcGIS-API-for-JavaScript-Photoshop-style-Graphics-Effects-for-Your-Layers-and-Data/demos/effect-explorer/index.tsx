import { createProjector } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";
import { highlight } from "../utils/highlight";

import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

config.assetsPath = "https://unpkg.com/@arcgis/core/assets/"; // new URL("../assets/", window.location.href).toString();

interface RangeEffectParameter {
  type: "range";
  name: string;
  value: number;
  min: number;
  max: number;
  snap: number;
  unit: "none" | "px" | "%";
}

interface ColorEffectParameter {
  type: "color";
  name: string;
  value: string;
}

interface Effect {
  type: string;
  parameters: (RangeEffectParameter | ColorEffectParameter)[];
}

interface FilterConfig {
  title: string;
  map: WebMap;
  view: {
    zoom: number;
    center: [number, number];
  };
  layer: FeatureLayer;
  effect: Effect[];
}

interface State {
  filterConfigs: FilterConfig[];
  selectedFilterConfig: number;
}

let view: MapView | undefined;

let state: State = {
  filterConfigs: [
    {
      title: "brightness",
      map: new WebMap({
        basemap: "topo-vector",
      }),
      view: {
        zoom: 4,
        center: [-180, 40],
      },
      layer: new FeatureLayer({
        url:
          "https://services5.arcgis.com/W1uyphp8h2tna3qJ/ArcGIS/rest/services/Volcanoes/FeatureServer/0",
      }),
      effect: [
        {
          type: "brightness",
          parameters: [
            {
              type: "range",
              name: "amount",
              value: 100,
              min: 0,
              max: 200,
              snap: 1,
              unit: "%",
            },
          ],
        },
      ],
    },
  ],
  selectedFilterConfig: 0,
};

function setState(props: Partial<State>) {
  Object.assign(state, props);

  if (!view) {
    return;
  }

  const { map, layer, effect, view: viewConfig } = state.filterConfigs[
    state.selectedFilterConfig
  ];

  if (view.map !== map) {
    view.map = map;
    Object.assign(view, viewConfig);
  }

  if (!view.map.layers.includes(layer)) {
    view.map.layers.add(layer);
  }

  layer.effect = effectToString(effect);

  projector.scheduleRender();
}

setState(state);

function effectToString(effect: Effect[]): string {
  return effect
    .map((component) => {
      return `${component.type}(${component.parameters
        .map((parameter) => parameterToString(parameter))
        .join(" ")})`;
    })
    .join(" ");
}

function parameterToString(
  parameter: RangeEffectParameter | ColorEffectParameter
): string {
  switch (parameter.type) {
    case "range":
      return parameter.value + parameter.unit;
  }

  return "";
}

//Renders the application content
function render() {
  return (
    <calcite-shell>
      <header slot="shell-header">
        <h2 style="margin-left: 30px">Effect Explorer</h2>
      </header>
      <calcite-shell-panel
        slot="primary-panel"
        position="start"
        afterCreate={onPanelCreate}
      >
        {renderFiltersList(state)}
      </calcite-shell-panel>
      <div
        style="padding: 0; margin: 0; height: 100%; width: 100%;"
        afterCreate={createMapView}
      ></div>
    </calcite-shell>
  );
}

function renderFiltersList(state: State) {
  return (
    <calcite-pick-list>
      {state.filterConfigs.map((filterConfig, index) => {
        return (
          <calcite-pick-list-item
            label={filterConfig.title}
            description=""
            value={"" + index}
            selected={state.selectedFilterConfig === index}
          ></calcite-pick-list-item>
        );
      })}
    </calcite-pick-list>
  );
}

function createMapView(container: HTMLDivElement) {
  view = new MapView({
    container,
    zoom: 4,
  });
  setState(state);
}

// observes the shell panels to adjust the view padding
const observer = new ResizeObserver(
  (entries: ResizeObserverEntry[], observer: ResizeObserver) => {
    if (view) {
      view.padding = {
        left: entries[0]?.contentRect.right,
      };
    }
  }
);

function onPanelCreate(el: Element) {
  observer.observe(el);
}

const projector = createProjector();
projector.append(document.body, render);
