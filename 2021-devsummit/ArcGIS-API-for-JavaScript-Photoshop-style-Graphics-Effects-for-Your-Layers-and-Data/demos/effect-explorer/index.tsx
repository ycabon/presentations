import { createProjector, VNode } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";
import { highlight } from "../utils/highlight";

import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";

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
  description: string;
  map: WebMap;
  view: {
    zoom: number;
    center: [number, number];
  };
  layer: TileLayer | FeatureLayer;
  effects: Effect[];
}

interface State {
  filterConfigs: FilterConfig[];
  selectedFilterConfig: number;
}

let view: MapView | undefined;

let state: State = {
  filterConfigs: [
    {
      title: "Image correction",
      description: "Adjust brightness, contrast, and saturation",
      map: new WebMap(),
      view: {
        zoom: 3,
        center: [0, 40],
      },
      layer: new TileLayer({
        url:
          "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      }),
      // layer: new FeatureLayer({
      //   url:
      //     "https://services5.arcgis.com/W1uyphp8h2tna3qJ/ArcGIS/rest/services/Volcanoes/FeatureServer/0",
      // }),
      effects: [
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
        {
          type: "contrast",
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
        {
          type: "saturate",
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

  const { map, layer, effects: effect, view: viewConfig } = state.filterConfigs[
    state.selectedFilterConfig
  ];

  if (view.map !== map) {
    view.map = map;
    Object.assign(view, viewConfig);
  }

  if (!view.map.layers.includes(layer)) {
    view.map.layers.add(layer);
  }

  layer.effect = effectsToString(effect);

  projector.scheduleRender();
}

function updateFilterParameter(
  parameter: ColorEffectParameter,
  newValue: string
): void;
function updateFilterParameter(
  parameter: RangeEffectParameter,
  newValue: number
): void;
function updateFilterParameter(parameter: any, newValue: any) {
  parameter.value = newValue;
  setState(state);
  projector.scheduleRender();
}

setState(state);

function effectsToString(effects: Effect[]): string {
  return effects
    .map((effect) => {
      return `${effect.type}(${effect.parameters
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
        <h2 style="margin-left: 30px">Effects Explorer</h2>
      </header>
      <calcite-shell-panel
        slot="primary-panel"
        position="start"
        afterCreate={onPanelCreate}
      >
        {renderFiltersList(state)}
      </calcite-shell-panel>
      <div style="padding: 0; margin: 0; height: 100%; width: 100%;">
        <div
          style="padding: 0; margin: 0; height: 100%; width: 100%;"
          afterCreate={createMapView}
        ></div>
        <div style="position: absolute; bottom: 24px; right: 12px; width: 300px">
          {renderCurrentFilters(state)}
        </div>
      </div>
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
            description={filterConfig.description}
            value={"" + index}
            selected={state.selectedFilterConfig === index}
          ></calcite-pick-list-item>
        );
      })}
    </calcite-pick-list>
  );
}

function renderCurrentFilters(state: State) {
  const { effects } = state.filterConfigs[state.selectedFilterConfig];

  return effects.map(({ type, parameters }) => {
    return (
      <calcite-block heading={type} open scale="s">
        {parameters.length === 1
          ? renderEffectParameter(parameters[0])
          : parameters.map((parameter) => (
              <calcite-label>
                {parameter.name}
                {renderEffectParameter(parameter)}
              </calcite-label>
            ))}
      </calcite-block>
    );
  });
}

function renderEffectParameter(
  parameter: RangeEffectParameter | ColorEffectParameter
) {
  switch (parameter.type) {
    case "range":
      return (
        <calcite-slider
          min={parameter.min}
          max={parameter.max}
          value={"" + parameter.value}
          step="1"
          snap
          label={parameter.name}
          label-handles
          afterCreate={afterCreateEventHandler("calciteSliderUpdate", (e) => {
            updateFilterParameter(
              parameter,
              +(e.target as HTMLInputElement).value
            );
          })}
        ></calcite-slider>
      );
    case "color":
      return (
        <calcite-color
          hide-hex
          hide-saved
          scale="m"
          value={parameter.value}
          appearance="default"
        ></calcite-color>
      );
  }
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
