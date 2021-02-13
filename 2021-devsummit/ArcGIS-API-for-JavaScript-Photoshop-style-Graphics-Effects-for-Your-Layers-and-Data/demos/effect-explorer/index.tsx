import { createProjector, VNode } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";
import {
  ColorEffectParameter,
  createState,
  effectsToString,
  RangeEffectParameter,
  State,
} from "./state";

config.assetsPath = "https://unpkg.com/@arcgis/core/assets/"; // new URL("../assets/", window.location.href).toString();

let view: MapView | undefined;

let state = createState();

function setState(props: Partial<State>) {
  Object.assign(state, props);

  if (!view) {
    return;
  }

  const selectedFilterConfig = state.selectedFilterConfig;

  const { map, layerId, effects, view: viewConfig } = state.filterConfigs[
    selectedFilterConfig
  ];

  if (view.map !== map) {
    view.map = map;

    if (!map.loaded) {
      map.loadAll().then(async () => {
        if (state.selectedFilterConfig !== selectedFilterConfig) {
          return;
        }

        if (view && viewConfig) {
          view.goTo(viewConfig, {
            duration: 2000,
          });
        }

        setState({});
      });

      return;
    }
  }

  const layer = view.map.allLayers.find((layer) => layer.id === layerId);
  (layer as any).effect = effectsToString(effects);

  projector.scheduleRender();
}

function updateFilterParameter(
  parameter: RangeEffectParameter | ColorEffectParameter,
  newValue: string
): void {
  const { effects } = state.filterConfigs[state.selectedFilterConfig];
  parameter.value = typeof parameter.value === "string" ? newValue : +newValue;
  setState(state);
  projector.scheduleRender();
}

setState(state);

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
        <div
          style="
            position: absolute;
            bottom: 24px;
            right: 12px;
            width: 272px;
            background-color: var(--calcite-ui-foreground-1);
            display: flex;
            flex-direction: column;
            box-shadow: 1px 0 0 var(--calcite-ui-border-1) inset;
            padding: 12px;
          "
        >
          {renderCurrentFilters(state)}
        </div>
      </div>
    </calcite-shell>
  );
}

function renderFiltersList(state: State) {
  return (
    <calcite-pick-list
      afterCreate={afterCreateEventHandler(
        "calciteListChange",
        (event: any) => {
          setState({
            selectedFilterConfig: +event.detail.keys().next().value,
          });
        }
      )}
    >
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

  return effects.map(({ type, parameters }, effectIndex) => {
    return (
      <calcite-label key={`${type}:${effectIndex}`} scale="m">
        <b>{type}</b>
        {parameters.length > 1
          ? parameters.map((parameter, parameterIndex) => (
              <calcite-label scale="s">
                {parameter.name}
                {renderEffectParameter(parameter, effectIndex, parameterIndex)}
              </calcite-label>
            ))
          : renderEffectParameter(parameters[0], effectIndex, 0)}
      </calcite-label>
    );
  });
}

function renderEffectParameter(
  parameter: RangeEffectParameter | ColorEffectParameter,
  effectIndex: number,
  parameterIndex: number
) {
  switch (parameter.type) {
    case "range":
      return (
        <calcite-slider
          min={parameter.min}
          max={parameter.max}
          value={"" + parameter.value}
          ticks="0"
          step={parameter.step}
          snap={parameter.snap}
          key={`${parameter.type}:${effectIndex}:${parameterIndex}`}
          label-handles=""
          afterCreate={afterCreateEventHandler("calciteSliderUpdate", (e) => {
            updateFilterParameter(parameter, (e.target as any).value);
          })}
        ></calcite-slider>
      );
    case "color":
      return (
        <calcite-color
          hide-hex=""
          hide-saved=""
          scale="m"
          value={parameter.value}
          appearance="default"
          afterCreate={afterCreateEventHandler("calciteColorChange", (e) => {
            updateFilterParameter(parameter, (e.target as any).value);
          })}
        ></calcite-color>
      );
  }
}

function createMapView(container: HTMLDivElement) {
  (window as any).view = view = new MapView({
    container,
    zoom: 3,
    center: [0, 40],
    constraints: {
      snapToZoom: false,
    },
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
