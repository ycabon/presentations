import { createProjector, VNode, createMapping } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import config from "@arcgis/core/config";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import { getBackgroundColorTheme } from "@arcgis/core/views/support/colorUtils";
import { debounce } from "@arcgis/core/core/promiseUtils";

export function invertBasemapApplication() {
  config.assetsPath = "https://unpkg.com/@arcgis/core/assets/"; // new URL("../assets/", window.location.href).toString();

  let map: WebMap;
  let view: MapView;
  let inverted = false;
  let computedTheme = "light";

  //Renders the application content
  function render() {
    return (
      <calcite-shell theme={computedTheme}>
        <header slot="shell-header">
          <h2 style="margin-left: 30px">Invert Basemap</h2>
        </header>

        <calcite-shell-panel
          slot="primary-panel"
          position="start"
          afterCreate={onPanelCreate}
        >
          <calcite-label>
            <calcite-switch
              afterCreate={afterCreateEventHandler(
                "calciteSwitchChange",
                onInvertSwitchChange
              )}
            ></calcite-switch>
          </calcite-label>

          <div
            afterCreate={(el: HTMLDivElement) => createBasemapGallery(el)}
          ></div>
        </calcite-shell-panel>

        <div style="padding: 0; margin: 0; height: 100%; width: 100%;">
          <div
            style="padding: 0; margin: 0; height: 100%; width: 100%;"
            afterCreate={(el: HTMLDivElement) => createMapView(el)}
          ></div>
        </div>
      </calcite-shell>
    );
  }

  function createMapView(container: HTMLDivElement) {
    map = new WebMap({
      basemap: "dark-gray",
    });

    view = new MapView({
      container,
      map: map,
      zoom: 6,
      center: [2, 46],
      constraints: {
        snapToZoom: false,
        minScale: 147914381,
      },
    });

    updateBasemapEffect();
  }

  function createBasemapGallery(container: HTMLDivElement) {
    const gallery = new BasemapGallery({
      view,
      container,
    });

    gallery.watch("activeBasemap", () => updateBasemapEffect());
  }

  const updateBasemapEffect = debounce(async () => {
    const effect = inverted ? "invert() hue-rotate(180deg)" : "";

    await map.basemap.loadAll();

    map.basemap.baseLayers.forEach((layer) => {
      (layer as any).effect = effect;
    });

    map.basemap.referenceLayers.forEach((layer) => {
      (layer as any).effect = effect;
    });

    computedTheme = await getBackgroundColorTheme(view);
    projector.scheduleRender();
  });

  function onInvertSwitchChange() {
    inverted = !inverted;
    updateBasemapEffect();
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
}
