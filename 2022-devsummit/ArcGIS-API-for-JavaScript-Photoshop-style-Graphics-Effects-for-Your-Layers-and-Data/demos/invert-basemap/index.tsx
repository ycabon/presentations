import { createProjector, VNode, createMapping } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import { debounce } from "@arcgis/core/core/promiseUtils";

export function invertBasemapApplication() {
  let map: WebMap;
  let view: MapView;
  let gallery: BasemapGallery;
  let inverted = false;
  let computedTheme = "light";

  //Renders the application content
  function render() {
    return (
      <calcite-shell theme={computedTheme}>
        <header slot="header">
          <h2 style="margin-left: 30px">Invert Basemap</h2>
        </header>

        <calcite-shell-panel
          slot="primary-panel"
          position="start"
        >
          <div style="display: flex; flex-direction: column; height: 100%">
            <div style="margin-left: 12px; margin-top: 12px">
              <calcite-label layout="inline">
                Invert
                <calcite-switch
                  afterCreate={afterCreateEventHandler(
                    "calciteSwitchChange",
                    onInvertSwitchChange
                  )}
                ></calcite-switch>
              </calcite-label>
            </div>
            <div
              afterCreate={(el: HTMLDivElement) => createBasemapGallery(el)}
            ></div>
          </div>
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
      zoom: 3,
      center: [0, 40],
      constraints: {
        snapToZoom: false,
      },
    });

    if (gallery) {
      gallery.view = view;
    }

    updateBasemapEffect();
  }

  function createBasemapGallery(container: HTMLDivElement) {
    gallery = new BasemapGallery({
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

    projector.scheduleRender();
  });

  function onInvertSwitchChange() {
    inverted = !inverted;
    updateBasemapEffect();
  }

  const projector = createProjector();
  projector.append(document.body, render);
}
