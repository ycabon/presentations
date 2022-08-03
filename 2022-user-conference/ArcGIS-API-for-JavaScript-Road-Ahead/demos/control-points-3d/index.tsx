import config from "@arcgis/core/config";
import {
  property,
  subclass,
} from "@arcgis/core/core/accessorSupport/decorators";
import { on, watch, whenOnce } from "@arcgis/core/core/reactiveUtils";
import { Point, SpatialReference } from "@arcgis/core/geometry";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import MediaLayer from "@arcgis/core/layers/MediaLayer";
import ControlPointsGeoreference from "@arcgis/core/layers/support/ControlPointsGeoreference";
import ExtentAndRotationGeoreference from "@arcgis/core/layers/support/ExtentAndRotationGeoreference";
import ImageElement from "@arcgis/core/layers/support/ImageElement";
import VideoElement from "@arcgis/core/layers/support/VideoElement";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import WebMap from "@arcgis/core/WebMap";
import Compass from "@arcgis/core/widgets/Compass";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import { tsx } from "@arcgis/core/widgets/support/widget";
import Widget from "@arcgis/core/widgets/Widget";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import DropTarget from "../widgets/DropTarget";

export function controlPoints3DApplication() {
  config.assetsPath = new URL(
    "../dist/assets/",
    window.location.href
  ).toString();

  const imageSpatialReference = new SpatialReference({ wkid: 0 });

  @subclass("ControlPointsApplication")
  class Application extends Widget {
    constructor(
      properties: __esri.WidgetProperties &
        Pick<Application, "view" | "layer" | "elementView">
    ) {
      super(properties);
      this.own([
        watch(
          () => {
            if (!this.georeference) {
              return null;
            }

            const idToPoint: Record<number, Point> = {};
            const height = this.georeference.height;
            this.mapPoints?.graphics.forEach(
              (graphic) =>
                (idToPoint[graphic.attributes.index] =
                  graphic.geometry as Point)
            );
            return this.sourcePoints?.graphics
              .map<__esri.ControlPoint>((graphic) => {
                const { x, y } = graphic.geometry as __esri.Point;
                return {
                  sourcePoint: { x, y: height - y },
                  mapPoint: idToPoint[graphic.attributes.index],
                };
              })
              .toArray();
          },
          async (controlPoints) => {
            if (this.georeference) {
              this.georeference.controlPoints =
                controlPoints as __esri.ControlPoint[];
            }
          }
        ),
        on(
          () => this.imageViewSketchViewModel.updateGraphics,
          "change",
          () => {
            const updateGraphics = this.imageViewSketchViewModel.updateGraphics;

            if (!updateGraphics.length) {
              this.viewSketchViewModel.complete();
              return;
            }

            const mapGraphicToUpdate = this.mapPoints?.graphics.find(
              (graphic) =>
                graphic.attributes.index ===
                updateGraphics.at(0).attributes.index
            );
            if (
              mapGraphicToUpdate &&
              !this.viewSketchViewModel.updateGraphics.includes(
                mapGraphicToUpdate
              )
            ) {
              this.viewSketchViewModel.update(mapGraphicToUpdate);
            }
          }
        ),
        on(
          () => this.viewSketchViewModel.updateGraphics,
          "change",
          () => {
            const updateGraphics = this.imageViewSketchViewModel.updateGraphics;

            if (!updateGraphics.length) {
              this.viewSketchViewModel.complete();
              return;
            }

            const sourceGraphicToUpdate = this.sourcePoints?.graphics.find(
              (graphic) =>
                graphic.attributes.index ===
                updateGraphics.at(0).attributes.index
            );
            if (
              sourceGraphicToUpdate &&
              !this.imageViewSketchViewModel.updateGraphics.includes(
                sourceGraphicToUpdate
              )
            ) {
              this.imageViewSketchViewModel.update(sourceGraphicToUpdate);
            }
          }
        ),
        on(
          () => this.imageViewSketchViewModel,
          "update",
          (event) => {
            // Clamp the points to image boundaries
            if (this.georeference) {
              const { width, height } = this.georeference;
              event.graphics.forEach((graphic: any) => {
                const pt = graphic.geometry.clone() as Point;
                pt.x = Math.min(Math.max(pt.x, 0), width);
                pt.y = Math.min(Math.max(pt.y, 0), height);
                graphic.geometry = pt;
              });
            }
          }
        ),
        on(
          () => this.viewSketchViewModel,
          "update",
          (event) => {
            const element = this.selectedElement;
            if (element) {
              if (event.toolEventInfo?.type === "move-start") {
                element.opacity = 0.3;
              }
              if (event.toolEventInfo?.type === "move-stop") {
                element.opacity = 1.0;
              }
            }
          }
        ),
      ]);
    }

    @property()
    layer!: MediaLayer;

    @property()
    view!: SceneView;

    @property()
    elementView!: MapView;

    @property()
    elementViewElement: ImageElement | VideoElement | null = null;

    @property()
    sourcePoints?: GraphicsLayer;

    @property()
    mapPoints?: GraphicsLayer;

    @property()
    selectedElement: ImageElement | VideoElement | null = null;

    @property()
    state: "add-element" | "ready" = "add-element";

    @property()
    imageViewSketchViewModel: SketchViewModel = new SketchViewModel({
      updateOnGraphicClick: true,
    });

    @property()
    viewSketchViewModel: SketchViewModel = new SketchViewModel({
      updateOnGraphicClick: true,
    });

    @property()
    controlPoint3?: __esri.ControlPoint;

    @property()
    controlPoint4?: __esri.ControlPoint;

    @property()
    dropTarget = new DropTarget({
      drop: async (dataTransfer) => {
        const files = dataTransfer.files;
        const file = files[0];
        const type = file.type.split("/")[0];
        let width: number;
        let height: number;

        let element: ImageElement | VideoElement;

        if (type === "image") {
          const url = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.addEventListener("load", (event: any) => {
              resolve(event.target.result);
            });
            reader.readAsDataURL(file);
          });
          const image: HTMLImageElement = await new Promise((resolve) => {
            const image = document.createElement("img");
            image.addEventListener("load", (event: any) => {
              resolve(image);
            });
            image.src = url;
          });
          width = image.naturalWidth;
          height = image.naturalHeight;
          element = new ImageElement({
            image,
          });
        } else if (type === "video") {
          const url = URL.createObjectURL(file);
          const video = document.createElement("video");
          video.src = url;
          video.muted = true;
          await video.play();
          width = video.videoWidth;
          height = video.videoHeight;
          element = new VideoElement({
            video: url,
          });
        } else {
          return;
        }

        await whenOnce(() => this.view.ready);

        const hW = width / 2;
        const hH = height / 2;

        let screenOffset = hW / 2;

        if (width > this.view.width || height > this.view.height) {
          screenOffset *= Math.min(
            this.view.width / width,
            this.view.height / height
          );
        }

        // add some padding
        screenOffset -= 10;

        const georeference = new ControlPointsGeoreference({
          width,
          height,
          controlPoints: [
            {
              sourcePoint: { x: hW - hW / 2, y: hH },
              mapPoint: new Point({
                x: this.view.center.x - screenOffset * this.view.resolution,
                y: this.view.center.y,
                spatialReference: this.view.spatialReference,
              }),
            },
            {
              sourcePoint: { x: hW + hW / 2, y: hH },
              mapPoint: new Point({
                x: this.view.center.x + screenOffset * this.view.resolution,
                y: this.view.center.y,
                spatialReference: this.view.spatialReference,
              }),
            },
          ],
        });

        element.georeference = georeference;

        await (element as any).load();

        this.layer.source.elements.add(element);
        this.selectElement(element);

        await whenOnce(() => !this.view.updating && !this.elementView.updating);

        this.state = "ready";
      },
    });

    @property()
    get georeference() {
      return this.selectedElement?.georeference as
        | undefined
        | ControlPointsGeoreference;
    }

    createMapView(container: HTMLDivElement) {
      const view = this.view;
      view.container = container;
      this.viewSketchViewModel.view = view;

      view.on("click", (evt) => {
        view.hitTest(evt).then((results) => {
          const firstResult = results.results[0];
          if (firstResult.type === "media") {
            this.selectElement(firstResult?.element);
          } else if (
            firstResult.layer !== this.mapPoints! &&
            firstResult.layer !== this.sourcePoints!
          ) {
            this.selectElement(null);
          }
        });
      });
    }

    createElementView(container: HTMLDivElement) {
      this.elementView.container = container;
      this.imageViewSketchViewModel.view = this.elementView;
    }

    selectElement(element: ImageElement | VideoElement | null): void {
      if (this.selectedElement === element) {
        return;
      }

      this.selectedElement = element;

      if (this.sourcePoints) {
        this.elementView.map.layers.remove(this.sourcePoints);
        this.imageViewSketchViewModel.layer = null as any;
      }

      if (this.mapPoints) {
        this.view.map.layers.remove(this.mapPoints);
      }

      this.elementViewElement = this.createElementViewElement(element);
      this.elementView.map.layers.removeAll();

      if (!this.elementViewElement || !element?.georeference) {
        return;
      }

      const extent = (
        this.elementViewElement.georeference as ExtentAndRotationGeoreference
      ).extent;

      this.elementView.constraints = {
        geometry: extent,
      };
      this.elementView.extent = extent;

      const sourcePoints = new GraphicsLayer();
      this.sourcePoints = sourcePoints;
      this.imageViewSketchViewModel.layer = sourcePoints;

      this.elementView.map.layers.push(
        new MediaLayer({
          source: [this.elementViewElement],
        })
      );
      this.elementView.map.layers.push(sourcePoints);

      const mapPoints = new GraphicsLayer();
      this.mapPoints = mapPoints;
      this.view.map.layers.push(mapPoints);
      this.viewSketchViewModel.layer = mapPoints;

      this.updateGraphics();
    }

    updateGraphics(): void {
      if (!this.georeference || !this.sourcePoints || !this.mapPoints) {
        return;
      }

      const height = this.georeference.height;

      this.sourcePoints.graphics = this.georeference.controlPoints.map(
        (controlPoint, index) => {
          return new Graphic({
            geometry: new Point({
              x: controlPoint.sourcePoint?.x,
              y: height - (controlPoint.sourcePoint?.y ?? 0),
              spatialReference: this.elementView.spatialReference,
            }),
            attributes: { index },
          });
        }
      ) as any;

      this.mapPoints.graphics = this.georeference.controlPoints.map(
        (controlPoint, index) => {
          return new Graphic({
            geometry: controlPoint.mapPoint?.clone(),
            attributes: { index },
          });
        }
      ) as any;
    }

    createElementViewElement(
      element: ImageElement | VideoElement | null
    ): ImageElement | VideoElement | null {
      if (!element?.content) {
        return null;
      }

      const content = element.content;

      if (element.type === "image") {
        const width =
          content instanceof HTMLImageElement
            ? content.naturalWidth
            : content.width;
        const height =
          content instanceof HTMLImageElement
            ? content.naturalHeight
            : content.height;

        return new ImageElement({
          image: element.image,
          georeference: {
            type: "extent-and-rotation",
            extent: {
              xmin: 0,
              xmax: width,
              ymin: 0,
              ymax: height,
              spatialReference: imageSpatialReference,
            },
          },
        });
      } else if (element.type === "video") {
        const width =
          content instanceof HTMLVideoElement
            ? content.videoWidth
            : content.width;
        const height =
          content instanceof HTMLVideoElement
            ? content.videoHeight
            : content.height;

        return new VideoElement({
          video: element.video,
          georeference: {
            type: "extent-and-rotation",
            extent: {
              xmin: 0,
              xmax: width,
              ymin: 0,
              ymax: height,
              spatialReference: imageSpatialReference,
            },
          },
        });
      }

      return null;
    }

    render() {
      return (
        <div bind={this} ondragenter={() => (this.state = "add-element")}>
          <calcite-shell>
            <header slot="header">
              <h2 style="margin-left: 30px">
                Road Ahead - MediaLayer - Control Points
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
              width-scale="l"
            >
              <calcite-panel heading="Media settings">
                <div style="display: flex; flex-direction: column;">
                  <div
                    key="imageview"
                    style="background-color: #383838; width: 100%; height: 400px; flex-grow: 0"
                    afterCreate={(container: any) =>
                      this.createElementView(container)
                    }
                  ></div>
                  {this.renderGeoreference()}
                </div>
              </calcite-panel>
            </calcite-shell-panel>
          </calcite-shell>
          {this.renderDropTarget()}
        </div>
      );
    }

    renderGeoreference() {
      if (!this.georeference) {
        return null;
      }

      const controlPoints = this.georeference.controlPoints;

      return (
        <div
          key="geoference"
          style="display: flex; flex-direction: column; gap: 10px; padding: 10px; flex-grow: 1;"
        >
          <calcite-radio-group
            appearance="solid"
            layout="horizontal"
            scale="m"
            width="full"
            onCalciteRadioGroupChange={(event: any) =>
              this.updateControlPoints(event)
            }
          >
            <calcite-radio-group-item
              value="fixed"
              checked={controlPoints.length === 2}
            >
              Fixed
            </calcite-radio-group-item>
            <calcite-radio-group-item
              value="skew"
              checked={controlPoints.length === 3}
            >
              Skew
            </calcite-radio-group-item>
            <calcite-radio-group-item
              value="free"
              checked={controlPoints.length === 4}
            >
              Free
            </calcite-radio-group-item>
          </calcite-radio-group>
          {this.renderControlPointsInputs(controlPoints)}
          {/* {addButton} */}
        </div>
      );
    }

    renderControlPointsInputs(controlPoints: __esri.ControlPoint[]) {
      return (
        <div>
          {controlPoints.map((controlPoint, index) => (
            <calcite-block
              key={`cp-${index + 1}`}
              heading={`Control Point ${index + 1}`}
              open
            >
              <div style="display: flex; flex-direction: row; gap: 10px; align-items: baseline">
                <calcite-label style="width: 50px">Source</calcite-label>
                <calcite-label layout="inline">
                  x
                  <calcite-input
                    type="number"
                    value={controlPoint.sourcePoint!.x}
                  ></calcite-input>
                </calcite-label>
                <calcite-label layout="inline">
                  y
                  <calcite-input
                    type="number"
                    value={controlPoint.sourcePoint!.y}
                  ></calcite-input>
                </calcite-label>
              </div>
              <div style="display: flex; flex-direction: row; gap: 10px; align-items: baseline">
                <calcite-label style="width: 50px">Map</calcite-label>
                <calcite-label layout="inline">
                  x
                  <calcite-input
                    type="number"
                    value={controlPoint.mapPoint!.x}
                  ></calcite-input>
                </calcite-label>
                <calcite-label layout="inline">
                  y
                  <calcite-input
                    type="number"
                    value={controlPoint.mapPoint!.y}
                  ></calcite-input>
                </calcite-label>
              </div>
            </calcite-block>
          ))}
        </div>
      );
    }

    renderDropTarget() {
      return (
        <calcite-modal
          active={this.state === "add-element"}
          background-color="white"
          disable-close-button="false"
          disable-escape="true"
          disable-outside-close="true"
          onCalciteModalClose={() => (this.state = "ready")}
        >
          <div slot="header">Add a media</div>
          <div slot="content">
            <div
              afterCreate={(el: HTMLDivElement) =>
                (this.dropTarget.container = el)
              }
            ></div>
          </div>
        </calcite-modal>
      );
    }

    updateControlPoints(event: any) {
      if (!this.georeference) {
        return;
      }

      switch (event.detail) {
        case "fixed":
          this.georeference.controlPoints =
            this.georeference.controlPoints.slice(0, 2);
          break;
        case "skew":
          this.controlPoint3 ||= {
            sourcePoint: { x: this.georeference.width, y: 0 },
          };
          this.controlPoint3.mapPoint = this.georeference.toMap(
            this.controlPoint3.sourcePoint!
          );
          this.georeference.controlPoints = [
            ...this.georeference.controlPoints.slice(0, 2),
            this.controlPoint3!,
          ];
          break;
        case "free":
          this.controlPoint3 ||= {
            sourcePoint: { x: this.georeference.width, y: 0 },
          };
          this.controlPoint4 ||= {
            sourcePoint: { x: 0, y: this.georeference.height },
          };
          this.controlPoint3.mapPoint = this.georeference.toMap(
            this.controlPoint3.sourcePoint!
          );
          this.controlPoint4.mapPoint = this.georeference.toMap(
            this.controlPoint4.sourcePoint!
          );

          this.georeference.controlPoints = [
            ...this.georeference.controlPoints.slice(0, 2),
            this.controlPoint3!,
            this.controlPoint4!,
          ];
          break;
      }

      this.updateGraphics();
    }
  }

  const layer = new MediaLayer({
    blendMode: "multiply",
  });

  const view = new SceneView({
    map: new WebMap({
      basemap: "topo-vector",
      layers: [layer],
    }),
    zoom: 4,
    center: [-100, 40]
  });

  let compass = new Compass({
    view: view,
  });

  // adds the compass to the top left corner of the MapView
  view.ui.add(compass, "top-left");

  const expand = new Expand({
    view,
    content: new BasemapGallery({
      view: view,
      container: document.createElement("div")
    })
  });
  view.ui.add(expand, "top-right");

  const application = new Application({
    container: "application",
    layer,
    view,
    elementView: new MapView({
      map: new WebMap({}),
      ui: {
        components: ["zoom"],
      },
      constraints: {
        snapToZoom: false,
      },
      background: {
        color: "#383838",
      },
      spatialReference: imageSpatialReference,
    }),
  });
}
