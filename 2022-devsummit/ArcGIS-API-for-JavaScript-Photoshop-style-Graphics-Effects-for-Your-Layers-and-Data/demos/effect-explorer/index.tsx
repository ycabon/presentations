import { createProjector, VNode } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import MapView from "@arcgis/core/views/MapView";
import {
  ColorEffectParameter,
  createState,
  effectsToString,
  RangeEffectParameter,
  State,
} from "./state";
import { highlight } from "../utils/highlight";

export function effectExplorerApplication() {
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
      } else {
        if (view && viewConfig) {
          view.goTo(viewConfig, {
            duration: 2000,
          });
        }
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
    parameter.value =
      typeof parameter.value === "string" ? newValue : +newValue;
    setState(state);
    projector.scheduleRender();
  }

  setState(state);

  //Renders the application content
  function render() {
    return (
      <calcite-shell>
        <header slot="header">
          <h2 style="margin-left: 30px">Effects Explorer</h2>
        </header>
        <calcite-shell-panel
          slot="primary-panel"
          position="start"
        >
          {renderFiltersList(state)}
        </calcite-shell-panel>
        <div style="padding: 0; margin: 0; height: 100%; width: 100%;">
          <div
            style="padding: 0; margin: 0; height: 100%; width: 100%;"
            afterCreate={createMapView}
          ></div>
          <div
            style="position: absolute;
                  bottom: 24px;
                  right: 12px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end"
          >
            <div
              style="width: 272px;
                    background-color: var(--calcite-ui-foreground-1);
                    box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
                    padding: 12px;
                    margin: 6px;"
            >
              {renderCurrentFilters(state)}
            </div>
            <div
              style="background-color: var(--calcite-ui-foreground-1);
                    box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
                    padding: 12px;
                    margin: 6px;"
            >
              {effectCodeBlock(state)}
            </div>
          </div>
        </div>
      </calcite-shell>
    );
  }

  function effectCodeBlock(state: State) {
    const snippet = `layer.effect = '${effectsToString(
      state.filterConfigs[state.selectedFilterConfig].effects
    )}';`;
    return (
      <div style="display: flex; flex-direction: column">
        {highlight("javascript", snippet)}
        <calcite-button
          appearance="outline"
          icon-start="copyToClipboard"
          color="light"
          scale="s"
          onclick={() => copyToClipboard(snippet)}
        >
          Copy to clipboard
        </calcite-button>
      </div>
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
                  {renderEffectParameter(
                    parameter,
                    effectIndex,
                    parameterIndex
                  )}
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

  function copyToClipboard(newClip: string) {
    const input = document.createElement("textarea");
    input.innerText = newClip;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }

  const projector = createProjector();
  projector.append(document.body, render);
}
