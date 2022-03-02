import {
  createProjector,
  VNode,
  createMapping,
  MaquetteComponent,
} from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import MapView from "@arcgis/core/views/MapView";
import {
  ColorEffectParameter,
  createState,
  effectsToString,
  RangeEffectParameter,
  State,
  isScaleDependent,
  Effect,
  FilterConfig,
  ScaleDependentEffect,
} from "./state";
import { highlight } from "../utils/highlight";

export function scaleDependentEffectApplication() {
  let view: MapView | undefined;

  let state = createState();

  function currentFilterConfig(state: State) {
    return state.filterConfigs.find(
      (config) => config.selected
    ) as FilterConfig;
  }

  function setState(props: Partial<State>) {
    Object.assign(state, props);

    if (!view) {
      return;
    }

    const config = currentFilterConfig(state);
    const { map, layerId, effects, view: viewConfig } = config;

    if (view.map !== map) {
      view.map = map;

      if (!map.loaded) {
        map.loadAll().then(async () => {
          if (currentFilterConfig(state) !== config) {
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

  function selectFilterConfig(index: number): void {
    const config = currentFilterConfig(state);
    config.selected = false;
    state.filterConfigs[index].selected = true;
    setState({});
  }

  function selectScale(index: number): void {
    const config = currentFilterConfig(state);
    if (isScaleDependent(config.effects)) {
      config.effects.forEach((effect) => (effect.selected = false));
      config.effects[index].selected = true;
    }
    setState({});
  }

  function updateFilterParameter(
    parameter: RangeEffectParameter | ColorEffectParameter,
    newValue: string
  ): void {
    const { effects } = currentFilterConfig(state);
    parameter.value =
      typeof parameter.value === "string" ? newValue : +newValue;
    setState(state);
    projector.scheduleRender();
  }

  setState(state);

  const filterListMapping = createMapping<
    FilterConfig,
    { config: FilterConfig; render(index: number): VNode }
  >(
    function getSourceKey({ title, description, layerId }) {
      return JSON.stringify({ title, description, layerId });
    },
    function createTarget(config) {
      return {
        config,
        render(index: number) {
          return (
            <calcite-pick-list-item
              label={this.config.title}
              description={this.config.description}
              selected={this.config.selected}
              value={"" + index}
            ></calcite-pick-list-item>
          );
        },
      };
    },
    function updateTarget(updatedSource, target) {
      target.config = updatedSource;
    }
  );

  const scaleListMapping = createMapping<
    ScaleDependentEffect,
    { config: ScaleDependentEffect; render(index: number): VNode }
  >(
    function getSourceKey(source) {
      return JSON.stringify(source);
    },
    function createTarget(config) {
      return {
        config,
        render(index: number) {
          const config: ScaleDependentEffect = this.config;
          return (
            <calcite-pick-list-item
              label={config.scale}
              value={"" + index}
              key={config.uid}
              selected={config.selected}
            ></calcite-pick-list-item>
          );
        },
      };
    },
    function updateTarget(updatedSource, target) {
      target.config = updatedSource;
    }
  );

  const effectMapping = createMapping<
    Effect,
    { config: Effect; render(index: number): VNode }
  >(
    function getSourceKey(source) {
      return JSON.stringify(source);
    },
    function createTarget(config) {
      const parametersMapping = createMapping<
        RangeEffectParameter | ColorEffectParameter,
        {
          config: RangeEffectParameter | ColorEffectParameter;
          render(renderLabel: boolean): VNode;
        }
      >(
        function getSourceKey(source) {
          return JSON.stringify(source);
        },
        function createTarget(config) {
          return {
            config,
            render(renderLabel: boolean) {
              const parameter:
                | RangeEffectParameter
                | ColorEffectParameter = this.config;
              return renderLabel ? (
                <calcite-label scale="s">
                  {parameter.name}
                  {renderEffectParameter(parameter)}
                </calcite-label>
              ) : (
                renderEffectParameter(parameter)
              );
            },
          };
        },
        function updateTarget(updatedSource, target) {
          target.config = updatedSource;
        }
      );

      return {
        config,
        render(effectIndex: number) {
          const config: Effect = this.config;
          const parameters = config.parameters.filter(
            (filter) => !(filter.visible === false)
          );

          parametersMapping.map(parameters);

          return (
            <calcite-label scale="m" key={config.uid}>
              <b>{config.type}</b>
              {parametersMapping.results.map((component) =>
                component.render(parametersMapping.results.length > 1)
              )}
            </calcite-label>
          );
        },
      };
    },
    function updateTarget(updatedSource, target) {
      target.config = updatedSource;
    }
  );

  //Renders the application content
  function render() {
    return (
      <calcite-shell theme="dark">
        <header slot="header">
          <h2 style="margin-left: 30px">Scale Dependent Effects</h2>
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
              style="width: 300px;
                   background-color: var(--calcite-ui-foreground-1);
                   box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
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
    let snippet = "layer.effect = ";

    const effects = currentFilterConfig(state).effects;

    if (isScaleDependent(effects)) {
      snippet += `[
${effects
  .map(({ scale, value }) => {
    return `  { scale: ${scale}, value: '${effectsToString(value)}' }`;
  })
  .join(",\n")}    
];`;
    } else {
      snippet += `'${effectsToString(effects)}'`;
    }

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
    filterListMapping.map(state.filterConfigs);

    return (
      <calcite-pick-list
        afterCreate={afterCreateEventHandler(
          "calciteListChange",
          (event: any) => {
            selectFilterConfig(+event.detail.keys().next().value);
          }
        )}
      >
        {filterListMapping.results.map((component, index) =>
          component.render(index)
        )}
      </calcite-pick-list>
    );
  }

  function renderCurrentFilters(state: State) {
    const { effects } = currentFilterConfig(state);

    if (isScaleDependent(effects)) {
      scaleListMapping.map(effects);
      const selectedEffect = effects.find(
        (effect) => effect.selected
      ) as ScaleDependentEffect;
      effectMapping.map(selectedEffect.value);

      return (
        <div style="display: flex; flex-direction: row;">
          <calcite-label>
            <span style="padding-left: 12px; padding-top: 12px">
              <b>Scales</b>
            </span>
            <calcite-pick-list
              style="flex: 0 0 100px"
              afterCreate={afterCreateEventHandler(
                "calciteListChange",
                (event: any) => {
                  selectScale(+event.detail.keys().next().value);
                }
              )}
            >
              {scaleListMapping.results.map((component, index) =>
                component.render(index)
              )}
            </calcite-pick-list>
          </calcite-label>
          <div style="display: flex; flex-direction: column; flex: 1; padding: 12px; background-color: var(--calcite-ui-foreground-2)">
            {effectMapping.results.map((component, index) =>
              component.render(index)
            )}
          </div>
        </div>
      );
    }

    effectMapping.map(effects);

    return (
      <div style="padding: 12px;">
        {effectMapping.results.map((component, index) =>
          component.render(index)
        )}
      </div>
    );
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
            ticks="0"
            step={parameter.step}
            snap={parameter.snap}
            key={parameter.uid}
            parameter={parameter}
            label-handles=""
            afterCreate={afterCreateEventHandler(
              "calciteSliderUpdate",
              (e, props) => {
                if (props) {
                  updateFilterParameter(
                    props.parameter,
                    (e.target as any).value
                  );
                }
              }
            )}
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
            key={parameter.uid}
            afterCreate={afterCreateEventHandler(
              "calciteColorChange",
              (e, props) => {
                if (props) {
                  updateFilterParameter(
                    props.parameter,
                    (e.target as any).value
                  );
                }
              }
            )}
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
