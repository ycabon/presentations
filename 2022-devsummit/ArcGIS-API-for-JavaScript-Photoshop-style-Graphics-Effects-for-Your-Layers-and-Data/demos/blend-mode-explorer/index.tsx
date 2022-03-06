import { createProjector, VNode } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import { highlight } from "../utils/highlight";

interface State {
  blendMode: __esri.BlendLayer["blendMode"];
}

export function blendExplorerApplication() {
  let view: MapView | undefined;
  let layer: __esri.FeatureLayer;

  const state: State = {
    blendMode: "normal",
  };

  function setState(props: Partial<State>) {
    Object.assign(state, props);
    if (layer) {
      layer.blendMode = state.blendMode;
    }
    projector.scheduleRender();
  }

  //Renders the application content
  function render() {
    return (
      <calcite-shell>
        <header slot="header">
          <h2 style="margin-left: 30px">Blend Modes Explorer</h2>
        </header>
        <calcite-shell-panel slot="primary-panel" position="start">
          <calcite-panel>
            <calcite-pick-list
              filter-enabled
              filter-placeholder="Filter results"
              afterCreate={afterCreateEventHandler(
                "calciteListChange",
                (event: any) => {
                  setState({
                    blendMode: event.detail.keys().next().value,
                  });
                }
              )}
              onCalciteListChange={handleBlendChange}
            >
              <calcite-pick-list-item
                label="Normal"
                value="normal"
                selected
              ></calcite-pick-list-item>
              <calcite-pick-list-group group-title="Lighten"></calcite-pick-list-group>
              <calcite-pick-list-item
                label="Lighter"
                value="lighter"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Lighten"
                value="lighten"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Screen"
                value="screen"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Color Dodge"
                value="color-dodge"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Plus"
                value="plus"
              ></calcite-pick-list-item>
              <calcite-pick-list-group group-title="Darken"></calcite-pick-list-group>
              <calcite-pick-list-item
                label="Darken"
                value="darken"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Color Burn"
                value="color-burn"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Multiply"
                value="multiply"
              ></calcite-pick-list-item>
              <calcite-pick-list-group group-title="Contrast"></calcite-pick-list-group>
              <calcite-pick-list-item
                label="Overlay"
                value="overlay"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Hard Light"
                value="hard-light"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Soft Light"
                value="soft-light"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Vivid Light"
                value="vivid-light"
              ></calcite-pick-list-item>
              <calcite-pick-list-group group-title="Component"></calcite-pick-list-group>
              <calcite-pick-list-item
                label="Color"
                value="color"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Hue"
                value="hue"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Saturation"
                value="saturation"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Luminosity"
                value="luminosity"
              ></calcite-pick-list-item>
              <calcite-pick-list-group group-title="Compositing"></calcite-pick-list-group>
              <calcite-pick-list-item
                label="Destination Over"
                value="destination-over"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Destination Atop"
                value="destination-atop"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Destination In"
                value="destination-in"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Destination Out"
                value="destination-out"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Source Atop"
                value="source-atop"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Source In"
                value="source-in"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Source Out"
                value="source-out"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="XOR"
                value="xor"
              ></calcite-pick-list-item>
              <calcite-pick-list-group group-title="Invert"></calcite-pick-list-group>
              <calcite-pick-list-item
                label="Invert"
                value="invert"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Reflect"
                value="reflect"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Average"
                value="average"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Difference"
                value="difference"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Exclusion"
                value="exclusion"
              ></calcite-pick-list-item>
              <calcite-pick-list-item
                label="Minus"
                value="minus"
              ></calcite-pick-list-item>
            </calcite-pick-list>
          </calcite-panel>
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

  function handleBlendChange(event: any): void {
    console.log(event);
    projector.scheduleRender();
  }

  function effectCodeBlock(state: State) {
    const snippet = `layer.blendMode = '${state.blendMode}';`;
    return (
      <div style="display: flex; flex-direction: column">
        {highlight("javascript", snippet)}
        <calcite-button
          appearance="outline"
          icon-start="copyToClipboard"
          color="light"
          scale="s"
          onclick={() => { navigator.clipboard.writeText(snippet) }}
        >
          Copy to clipboard
        </calcite-button>
      </div>
    );
  }

  async function createMapView(container: HTMLDivElement) {
    const map = new WebMap({
      basemap: "topo-vector",
      portalItem: {
        id: "183a8679b8d34e7cb316dd6c7e5dea84"
      }
    });
    (window as any).view = view = new MapView({
      map, 
      container,
      zoom: 3,
      center: [0, 40],
      constraints: {
        snapToZoom: false,
      },
    });

    map.loadAll().then(() => {
      if (view) {
        layer = view.map.layers.getItemAt(0) as __esri.FeatureLayer;
        layer.blendMode = state.blendMode;
      }
    });

    view.ui.add(new BasemapGallery({ view }), "top-right");
  }

  const projector = createProjector();
  projector.append(document.body, render);
}
