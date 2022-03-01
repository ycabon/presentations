import TileLayer from "@arcgis/core/layers/TileLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { SimpleRenderer } from "@arcgis/core/renderers";
import { SimpleFillSymbol } from "@arcgis/core/symbols";
import OpacityVariable from "@arcgis/core/renderers/visualVariables/OpacityVariable";
import ColorVariable from "@arcgis/core/renderers/visualVariables/ColorVariable";
import WebMap from "@arcgis/core/WebMap";

export interface State {
  filterConfigs: FilterConfig[];
  selectedFilterConfig: number;
}

export interface RangeEffectParameter {
  type: "range";
  name: string;
  value: number;
  min: number;
  max: number;
  step: number;
  snap: boolean;
  unit: "" | "px" | "%" | "deg";
}

export interface ColorEffectParameter {
  type: "color";
  name: string;
  value: string;
}

export interface Effect {
  type: string;
  parameters: (RangeEffectParameter | ColorEffectParameter)[];
}

export interface FilterConfig {
  title: string;
  description: string;
  map: WebMap;
  view?: {
    center: [number, number],
    zoom: number,
  },
  layerId: string;
  effects: Effect[];
}

export function effectsToString(effects: Effect[]): string {
  return effects
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
    selectedFilterConfig: 0,
    filterConfigs: [
      {
        title: "Image correction",
        description: "Adjust brightness, contrast, and saturation",
        map: new WebMap({
          layers: [
            new TileLayer({
              id: "imagery",
              url:
                "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
            }),
          ],
        }),
        layerId: "imagery",
        effects: [
          {
            type: "brightness",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 100,
                min: 0,
                max: 200,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          },
          {
            type: "contrast",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 100,
                min: 0,
                max: 200,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          },
          {
            type: "saturate",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 100,
                min: 0,
                max: 200,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          },
        ],
      },
      {
        title: "Color filters",
        description: "Adjust sepia, grayscale, and hue-rotate",
        map: new WebMap({
          layers: [
            new TileLayer({
              id: "imagery",
              url:
                "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
            }),
          ],
        }),
        layerId: "imagery",
        effects: [
          {
            type: "sepia",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 0,
                min: 0,
                max: 100,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          },
          {
            type: "grayscale",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 0,
                min: 0,
                max: 100,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          },
          {
            type: "hue-rotate",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 0,
                min: 0,
                max: 360,
                step: 1,
                snap: true,
                unit: "deg",
              },
            ],
          },
        ],
      },
      {
        title: "Invert filter",
        description: "Make a light version of a dark basemap",
        map: new WebMap({
          layers: [
            new VectorTileLayer({
              id: "nova",
              portalItem: {
                id: "75f4dfdff19e445395653121a95a85db"
              }
            }),
          ],
        }),
        layerId: "nova",
        effects: [
          {
            type: "invert",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 0,
                min: 0,
                max: 100,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          },
          {
            type: "hue-rotate",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 0,
                min: 0,
                max: 360,
                step: 1,
                snap: true,
                unit: "deg",
              },
            ],
          },
        ],
      },
      {
        title: "Blur filter",
        description: "Out of focus",
        view: {
          center: [55.50, -21.134],
          zoom: 11
        },
        map: new WebMap({
          layers: [
            new TileLayer({
              id: "hillshade",
              portalItem: {
                id: "1b243539f4514b6ba35e7d995890db1d",
              },
            }),
            new VectorTileLayer({
              blendMode: "multiply",
              portalItem: {
                id: "effe3475f05a4d608e66fd6eeb2113c0",
              },
            }),
          ],
        }),
        layerId: "hillshade",
        effects: [
          {
            type: "blur",
            parameters: [
              {
                type: "range",
                name: "amount",
                value: 0,
                min: 0,
                max: 10,
                step: 1,
                snap: true,
                unit: "px",
              },
            ],
          },
        ],
      },
      {
        title: "Drop Shadow",
        description: "Make features stand out",
        view: {
          center: [2.67, 45.57],
          zoom: 5
        },
        layerId: "countries",
        map: new WebMap({
          basemap: {
            baseLayers: [
              new TileLayer({
                id: "hillshade",
                portalItem: {
                  id: "1b243539f4514b6ba35e7d995890db1d",
                },
              })
            ]
          },
          layers: [
            new FeatureLayer({
              id: "countries",
              definitionExpression: "FID = 156",
              portalItem: {
                id: "53a1e68de7e4499cad77c80daba46a94"
              },
              renderer: new SimpleRenderer({
                symbol: new SimpleFillSymbol({
                  style: "solid",
                  color: "#EEE"
                })
              })
            })
          ]
        }),
        effects: [
          {
            type: "drop-shadow",
            parameters: [
              {
                name: "offset-x",
                type: "range",
                min: -40,
                max: 40,
                unit: "px",
                value: 0,
                snap: true,
                step: 1
              },
              {
                name: "offset-y",
                type: "range",
                min: -40,
                max: 40,
                unit: "px",
                value: 0,
                snap: true,
                step: 1
              },
              {
                name: "blur radius",
                type: "range",
                min: 0,
                max: 40,
                unit: "px",
                value: 0,
                snap: true,
                step: 1
              },
              {
                name: "color",
                type: "color",
                value: "#000000",
              }
            ]
          }
        ]
      },
      {
        title: "Bloom filter",
        description: "Make features shine bright",
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
              minScale: 72223.819286,
              effect: "bloom(2.5 0 0.5)",
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
        effects: [
          {
            type: "bloom",
            parameters: [
              {
                type: "range",
                name: "intensity",
                value: 0,
                min: 0,
                max: 10,
                step: 1,
                snap: false,
                unit: "",
              },
              {
                type: "range",
                name: "radius",
                value: 0,
                min: 0,
                max: 10,
                step: 1,
                snap: true,
                unit: "px",
              },
              {
                type: "range",
                name: "threshold",
                value: 0,
                min: 0,
                max: 100,
                step: 1,
                snap: true,
                unit: "%",
              },
            ],
          },
        ],
      },
    ],
  }
};
