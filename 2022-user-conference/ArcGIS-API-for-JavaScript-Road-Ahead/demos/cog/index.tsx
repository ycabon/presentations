import Color from "@arcgis/core/Color";
import config from "@arcgis/core/config";
import {
  property,
  subclass
} from "@arcgis/core/core/accessorSupport/decorators";
import { SpatialReference } from "@arcgis/core/geometry";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import ImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer";
import FlowRenderer from "@arcgis/core/renderers/FlowRenderer";
import RasterShadedReliefRenderer from "@arcgis/core/renderers/RasterShadedReliefRenderer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Compass from "@arcgis/core/widgets/Compass";
import LayerList from "@arcgis/core/widgets/LayerList";
import { tsx } from "@arcgis/core/widgets/support/widget";
import Widget from "@arcgis/core/widgets/Widget";

export function cogApplication() {
  config.assetsPath = new URL(
    "../dist/assets/",
    window.location.href
  ).toString();

  @subclass("COGApplication")
  class Application extends Widget {
    constructor(
      properties: __esri.WidgetProperties & Pick<Application, "view">
    ) {
      super(properties);
    }

    @property()
    view!: MapView;

    @property()
    state: "ready" | "select-data" = "ready";

    createMapView(container: HTMLDivElement) {
      const view = this.view;
      view.container = container;

      view.map.layers.forEach((layer) => {
        layer.watch("visible", (value) => {
          if (value) {
            view.map.layers.forEach;
          }
        });
      });
    }

    render() {
      return (
        <div bind={this}>
          <calcite-shell>
            <header slot="header">
              <h2 style="margin-left: 30px">
                Road Ahead - ImageryTileLayer - Cloud Optimized GeoTIFF
              </h2>
            </header>
            <div
              key="mapview"
              style="padding: 0; margin: 0; height: 100%; width: 100%;"
              afterCreate={(container: any) => this.createMapView(container)}
            ></div>
            <calcite-shell-panel
              slot="contextual-panel"
              position="end"
              height-scale="s"
              width-scale="m"
            >
              <calcite-panel>
                <div style="display: flex; flex-direction: column; padding: 10px; gap: 10px;">
                  <h3>Spatial Reference</h3>
                  <calcite-pick-list onCalciteListChange={(event: any) => this.view.spatialReference = new SpatialReference({ wkid: +event.detail.keys().next().value })}>
                      <calcite-pick-list-item label="Web Mercator" value="102100" selected></calcite-pick-list-item>
                      <calcite-pick-list-item label="Equal Earth" value="8857"></calcite-pick-list-item>
                      <calcite-pick-list-item label="North America Albers Equal Area" value="102008"></calcite-pick-list-item>
                  </calcite-pick-list>
                  <h3>Layers</h3>
                  <div
                    afterCreate={(container: any) =>
                      this.createLayerList(container)
                    }
                  ></div>
                </div>
              </calcite-panel>
            </calcite-shell-panel>
          </calcite-shell>
        </div>
      );
    }

    createLayerList(container: HTMLDivElement) {
      new LayerList({
        view: this.view,
        container,
        listItemCreatedFunction: (event) => {
          event.item.open = true;
        }
      });
    }
  }

  const view = new MapView({
    spatialReference: { wkid: 102100 },
    popup: {
      defaultPopupTemplateEnabled: true
    },
    map: new WebMap({
      basemap: {
        baseLayers: [
          new ImageryTileLayer({
            url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
            popupEnabled: false,
            renderer: new RasterShadedReliefRenderer({
              altitude: 45, // angle of elevation above the horizon
              azimuth: 315, // position along the horizon
              hillshadeType: "multi-directional",
              zFactor: 1,
              scalingType: "adjusted",
            }),
          }),
          new FeatureLayer({
            portalItem: { id: "6e3c15cee4dc4850a7751a69137e04e9" },
            title: "Countries",
            blendMode: "multiply",
            effect: "drop-shadow(0, 2px, 4px, #555555)",
            popupEnabled: false,
            renderer: new SimpleRenderer({
              symbol: new SimpleFillSymbol({
                color: "white",
              }),
            }),
          })
        ],
      },
      layers: [
        new GroupLayer({
          title: "GeoTIFFs",
          visibilityMode: "exclusive",
          blendMode: "multiply",
          layers: [
            new ImageryTileLayer({
              visible: true,
              title: "California DEM",
              url: new URL(
                "./geotiffs/SRTMCalifornia.tiff",
                window.location.href
              ).toString(), 
            }),
            new ImageryTileLayer({
              visible: false,
              title: "NLCD 2001 Land Cover",
              blendMode: "multiply",
              url: new URL(
                "./geotiffs/NLCD2001.tiff",
                window.location.href
              ).toString(),
            }),
            new ImageryTileLayer({
              visible: false,
              title: "Wind speed",
              url: new URL(
                "./geotiffs/NDFD_wind.tiff",
                window.location.href
              ).toString(),
            }),
            new ImageryTileLayer({
              visible: false,
              title: "Wind speed - Flow",
              url: new URL(
                "./geotiffs/NDFD_wind.tiff",
                window.location.href
              ).toString(),
              effect: "bloom(1 0 0)",
              renderer: new FlowRenderer({
                density: 1,
                color: new Color([50, 120, 240]),
                flowSpeed: 10,
                trailWidth: "2px",
              })
            }),
          ],
        }),
      ],
    }),
    zoom: 2,
    constraints: {
      snapToZoom: false,
    },
  });

  let compass = new Compass({
    view: view,
  });

  // adds the compass to the top left corner of the MapView
  view.ui.add(compass, "top-left");

  const application = new Application({
    container: "application",
    view,
  });
}
