import TileLayer from "@arcgis/core/layers/TileLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
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
  }

  return "";
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
        title: "Bloom",
        description: "Make features shine bright",
        map: new WebMap({
          portalItem: {
            id: "c2a3444863f2466aaad9efa6e65063e1"
          }
        }),
        layerId: "Volcanoes_2025",
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
                max: 1,
                step: 1,
                snap: false,
                unit: "",
              },
            ],
          },
        ],
      },
    ],
  }
};
