import TileLayer from "@arcgis/core/layers/TileLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { SimpleRenderer } from "@arcgis/core/renderers";
import { SimpleFillSymbol } from "@arcgis/core/symbols";
import OpacityVariable from "@arcgis/core/renderers/visualVariables/OpacityVariable";
import ColorVariable from "@arcgis/core/renderers/visualVariables/ColorVariable";
import WebMap from "@arcgis/core/WebMap";

let counter = 0;
function uid() {
  return `uid-${counter++}`;
}

export interface State {
  filterConfigs: FilterConfig[];
}

export interface RangeEffectParameter {
  readonly uid: string;
  type: "range";
  name: string;
  value: number;
  min: number;
  max: number;
  step: number;
  snap: boolean;
  visible?: boolean;
  unit: "" | "px" | "%" | "deg";
}

export interface ColorEffectParameter {
  readonly uid: string;
  type: "color";
  name: string;
  value: string;
  visible?: boolean;
}

export interface ScaleDependentEffect {
  readonly uid: string;
  selected: boolean;
  scale: number;
  value: Effect[];
}

export interface Effect {
  readonly uid: string;
  type: string;
  parameters: (RangeEffectParameter | ColorEffectParameter)[];
}

export interface FilterConfig {
  selected: boolean;
  title: string;
  description: string;
  map: WebMap;
  view?: {
    center: [number, number],
    zoom: number,
  },
  layerId: string;
  effects: Effect[] | ScaleDependentEffect[];
}

export function isScaleDependent(effects: FilterConfig["effects"]): effects is ScaleDependentEffect[] {
  return "scale" in effects[0];
}

export function effectsToString(effects: FilterConfig["effects"]): string | { scale: number; value: string }[] {
  if (isScaleDependent(effects)) {
    return effects.map(({ scale, value }) => ({ scale, value: effectListToString(value) }));
  }

  return effectListToString(effects);
}

function effectListToString(effectList: Effect[]): string {
  return effectList
    .map((effect) => {
      return `${effect.type}(${effect.parameters
        .map((parameter) => parameterToString(parameter))
        .join(" ")})`;
    })
    .join(" ");
}

export function parameterToString(
  parameter: RangeEffectParameter | ColorEffectParameter
): string {
  switch (parameter.type) {
    case "range":
      return parameter.value + parameter.unit;
    case "color":
      return parameter.value;
  }
}

export function createState(): State {
  return {
    filterConfigs: [
      {
        selected: true,
        title: "Bloom filter without scale dependency",
        description: "Too bright at large scale",
        view: {
          center: [-73.967569, 40.727724],
          zoom: 12,
        },
        map: new WebMap({
          basemap: {
            portalItem: {
              id: "4f2e99ba65e34bb8af49733d9778fb8e"
            }
          },
          layers: [
            new FeatureLayer({
              id: "new-york",
              portalItem: {
                id: "dfe2d606134546f5a712e689d76540ac"
              },
              definitionExpression: "CNSTRCT_YR > 0",
              title: "Building Footprints",
              minScale: 400000,
              renderer: new SimpleRenderer({
                symbol: new SimpleFillSymbol({
                  color: "rgb(0, 0, 0)",
                  outline: undefined
                }),
                visualVariables: [
                  new OpacityVariable({
                    field: "CNSTRCT_YR",
                    stops: [
                      {
                        opacity: 1,
                        value: 1958
                      },
                      {
                        opacity: 0,
                        value: 1958 + 1
                      }
                    ],
                    legendOptions: {
                      showLegend: false
                    }
                  }),
                  new ColorVariable({
                    field: "CNSTRCT_YR",
                    legendOptions: {
                      title: "Built:"
                    },
                    stops: [
                      {
                        value: 1958,
                        color: "#0ff",
                        label: "in " + Math.floor(1958)
                      },
                      {
                        value: 1958 - 10,
                        color: "#f0f",
                        label: "in " + (Math.floor(1958) - 20)
                      },
                      {
                        value: 1958 - 50,
                        color: "#404",
                        label: "before " + (Math.floor(1958) - 50)
                      }
                    ]
                  })
                ]
              })
            })
          ]
        }),
        layerId: "new-york",
        effects: [{
          uid: uid(),
          type: "bloom",
          parameters: [
            {
              uid: uid(),
              type: "range",
              name: "intensity",
              value: 2,
              min: 0,
              max: 4,
              step: 1,
              snap: true,
              unit: "",
            },
            {
              uid: uid(),
              type: "range",
              name: "radius",
              value: 0,
              min: 0,
              max: 10,
              step: 1,
              snap: true,
              visible: false,
              unit: "px",
            },
            {
              uid: uid(),
              type: "range",
              name: "threshold",
              value: 65,
              min: 0,
              max: 100,
              step: 1,
              snap: true,
              unit: "%",
            },
          ],
        }],
      },
      {
        selected: false,
        title: "Scale Dependency",
        description: "Full control",
        view: {
          center: [-73.967569, 40.727724],
          zoom: 12,
        },
        map: new WebMap({
          basemap: {
            portalItem: {
              id: "4f2e99ba65e34bb8af49733d9778fb8e"
            }
          },
          layers: [
            new FeatureLayer({
              id: "new-york",
              portalItem: {
                id: "dfe2d606134546f5a712e689d76540ac"
              },
              definitionExpression: "CNSTRCT_YR > 0",
              title: "Building Footprints",
              minScale: 400000,
              renderer: new SimpleRenderer({
                symbol: new SimpleFillSymbol({
                  color: "rgb(0, 0, 0)",
                  outline: undefined
                }),
                visualVariables: [
                  new OpacityVariable({
                    field: "CNSTRCT_YR",
                    stops: [
                      {
                        opacity: 1,
                        value: 1958
                      },
                      {
                        opacity: 0,
                        value: 1958 + 1
                      }
                    ],
                    legendOptions: {
                      showLegend: false
                    }
                  }),
                  new ColorVariable({
                    field: "CNSTRCT_YR",
                    legendOptions: {
                      title: "Built:"
                    },
                    stops: [
                      {
                        value: 1958,
                        color: "#0ff",
                        label: "in " + Math.floor(1958)
                      },
                      {
                        value: 1958 - 10,
                        color: "#f0f",
                        label: "in " + (Math.floor(1958) - 20)
                      },
                      {
                        value: 1958 - 50,
                        color: "#404",
                        label: "before " + (Math.floor(1958) - 50)
                      }
                    ]
                  })
                ]
              })
            })
          ]
        }),
        layerId: "new-york",
        effects: [{
          scale: 80000,
          selected: true,
          uid: uid(),
          value: [{
            uid: uid(),
            type: "bloom",
            parameters: [
              {
                uid: uid(),
                type: "range",
                name: "intensity",
                value: 2,
                min: 0,
                max: 4,
                step: 1,
                snap: true,
                unit: "",
              },
              {
                uid: uid(),
                type: "range",
                name: "radius",
                value: 0,
                min: 0,
                max: 10,
                step: 1,
                visible: false,
                snap: true,
                unit: "px",
              },
              {
                uid: uid(),
                type: "range",
                name: "threshold",
                value: 65,
                min: 0,
                max: 100,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          }],
        }, {
          scale: 20000,
          selected: false,
          uid: uid(),
          value: [{
            uid: uid(),
            type: "bloom",
            parameters: [
              {
                uid: uid(),
                type: "range",
                name: "intensity",
                value: 2,
                min: 0,
                max: 4,
                step: 1,
                snap: true,
                unit: "",
              },
              {
                uid: uid(),
                type: "range",
                name: "radius",
                value: 0,
                min: 0,
                max: 10,
                step: 1,
                visible: false,
                snap: true,
                unit: "px",
              },
              {
                uid: uid(),
                type: "range",
                name: "threshold",
                value: 65,
                min: 0,
                max: 100,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          }],
        }],
      }
    ]
  }
};
