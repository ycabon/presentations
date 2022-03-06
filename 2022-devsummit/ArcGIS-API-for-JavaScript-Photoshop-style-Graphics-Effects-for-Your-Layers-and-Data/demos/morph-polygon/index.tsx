import { jsx } from "maquette-jsx";
import { debounce } from "@arcgis/core/core/promiseUtils";
import Polygon from "@arcgis/core/geometry/Polygon";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import { solve } from "@arcgis/core/rest/serviceArea";
import ServiceAreaParameters from "@arcgis/core/rest/support/ServiceAreaParameters";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import { interpolate } from "flubber";
import { createProjector } from "maquette";

export function morphApplication() {
  let map: WebMap;

  //Renders the application content
  function render() {
    return (
      <calcite-shell>
        <header slot="header">
          <h2 style="margin-left: 30px">Morph Polygon</h2>
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

  const driveTimePolygon = new Graphic({
    symbol: new SimpleFillSymbol({
      style: "solid",
      color: "black",
      outline: {
        color: "black",
        style: "solid",
        width: "1px",
      },
    }),
  });

  async function createMapView(container: HTMLDivElement) {
    let layer: __esri.GraphicsLayer;
    let group: __esri.GroupLayer;

    map = new WebMap({
      basemap: {
        portalItem: {
          id: "459cc334740944d38580455a0a777a24",
        },
      },
      layers: [
        group = new GroupLayer({
          effect: "drop-shadow(0, 4px, 4px, black)",
          opacity: 0,
          layers: [
            new VectorTileLayer({
              portalItem: {
                id: "63c47b7177f946b49902c24129b87252",
              },
            }),
            (layer = new GraphicsLayer({
              graphics: [driveTimePolygon],
              blendMode: "destination-in",
            })),
          ],
        }),
      ],
    });

    const view = new MapView({
      container,
      map,
      zoom: 12,
      center: [-117.1825, 34.054722],
      constraints: {
        snapToZoom: false,
      },
    });

    const interpolator = new Interpolator(view, driveTimePolygon);

    const updateDriveTimePolygons = debounce(async (point: __esri.Point) => {
      // Create one or more locations (facilities) to solve for
      const facilities = new FeatureSet({
        features: [
          {
            geometry: point,
          },
        ],
      });

      // Set all of the input parameters for the service
      const parameters = new ServiceAreaParameters({
        facilities,
        defaultBreaks: [5], // 5 minutes
        outSpatialReference: point.spatialReference,
      });

      const { serviceAreaPolygons } = await solve(
        "https://utility.arcgis.com/usrsvcs/servers/f9e04ae426214cde93fa84b35708fca0/rest/services/World/ServiceAreas/NAServer/ServiceArea_World/solveServiceArea",
        parameters
      );

      if (serviceAreaPolygons.length) {
        const polygon = serviceAreaPolygons[0].geometry as __esri.Polygon;
        interpolator.interpolate(polygon);
        group.opacity = 1;
      }
    });

    view.when(() => {
      view.on("click", (event) => {
        event.stopPropagation();
        updateDriveTimePolygons(view.toMap(event));
      });
    });
  }

  const projector = createProjector();
  projector.append(document.body, render);
}

class Interpolator {
  view: MapView;
  graphic: Graphic;
  polygon: null | Polygon = null;
  interpolator: null | ((ratio: number) => number[][]) = null;
  duration = 500;
  _animationId: null | number = null;
  t0: number = 0;

  constructor(view: MapView, graphic: Graphic) {
    this.view = view;
    this.graphic = graphic;
  }

  interpolate(target: __esri.Polygon) {
    if (!this.polygon) {
      this.polygon = this.graphic.geometry = target;
      return;
    }

    if (this._animationId) {
      cancelAnimationFrame(this._animationId);
    }

    this.interpolator = interpolate(this.polygon.rings[0], target.rings[0], {
      string: false,
      maxSegmentLength: Number.POSITIVE_INFINITY,
    });
    this.t0 = window.performance.now();

    this._frame();
  }

  _ease(x: number) {
    // https://easings.net/#easeInOutCubic
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  _frame = () => {
    if (!this.interpolator) {
      return;
    }
    
    var now = window.performance.now();
    var ratio = Math.min((now - this.t0) / this.duration, 1);
    var eased = this._ease(ratio);

    this.polygon = this.graphic.geometry = new Polygon({
      rings: [this.interpolator(eased)],
      spatialReference: this.view.spatialReference,
    });

    if (ratio < 1) {
      this._animationId = requestAnimationFrame(this._frame);
    }
  };
}
