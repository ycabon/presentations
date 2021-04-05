import { createProjector, VNode, createMapping } from "maquette";
import { jsx } from "maquette-jsx";
import { afterCreateEventHandler } from "../utils/events";

import config from "@arcgis/core/config";

import { highlight } from "../utils/highlight";

import { UniqueValueRenderer } from "@arcgis/core/renderers";
import { SimpleMarkerSymbol } from "@arcgis/core/symbols";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";

import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import Slider from "@arcgis/core/widgets/Slider";
import FeatureEffect from "@arcgis/core/views/layers/support/FeatureEffect";

export function featureEffectScaleDependentApplication() {
  config.assetsPath = "https://unpkg.com/@arcgis/core@4.18.1/assets/"; // new URL("../assets/", window.location.href).toString();

  type Animation = {
    remove(): void;
  };

  let view: MapView | undefined;
  let slider: Slider;
  let gapValue: number = 50;
  let animation: Animation | null = null;
  let layerView: any | undefined;

  //Renders the application content
  function render() {
    return (
      <calcite-shell>
        <header slot="shell-header">
          <h2 style="margin-left: 30px">Feature Effect - Scale Dependent</h2>
        </header>
        <div style="padding: 0; margin: 0; height: 100%; width: 100%;">
          <div class="application">
            <div class="view" afterCreate={createMapView}></div>
            <div class="esri-widget sliderContainer">
              <span class="sliderValue">
                <span style="font-weight:bold; font-size:150%">
                  {(Math.round(gapValue * 100) / 100).toFixed(2) + " %"}
                </span>{" "}
                of the votes separate the two candidates";
              </span>
              <div class="sliderInnerContainer">
                <div class="slider" afterCreate={createSlider}></div>
              </div>
              <calcite-button
                appearance="transparent"
                color="blue"
                scale="m"
                href=""
                icon-start={animation == null ? "play" : "pause"}
                onclick={onPlayButtonClick}
              >
                {animation == null ? "Play" : "Pause"}
              </calcite-button>
            </div>
          </div>

          <div
            style="position: absolute;
                 bottom: 110px;
                 right: 12px;
                 display: flex;
                 flex-direction: column;
                 align-items: flex-end"
          >
            <div
              style="background-color: var(--calcite-ui-foreground-1);
                   box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
                   padding: 12px;"
            >
              {effectCodeBlock(gapValue)}
            </div>
          </div>
        </div>
      </calcite-shell>
    );
  }

  function createMapView(container: HTMLDivElement) {
    const layer = new FeatureLayer({
      portalItem: {
        id: "359bc19d9bbb4f2ba1b2baec7e13e757",
      },
      outFields: ["PERCENT_GAP"],
      // don't show precincts that didn't record any votes
      definitionExpression: "(P2008_D > 0) AND (P2008_R > 0)",
      title: "Voting precincts",
      opacity: 1,
      renderer: new UniqueValueRenderer({
        field: "Majority",
        uniqueValueInfos: [
          {
            value: "Obama",
            symbol: new SimpleMarkerSymbol({
              size: 9,
              color: "rgb(0, 92, 230)",
              outline: undefined,
            }),
          },
          {
            value: "McCain",
            symbol: new SimpleMarkerSymbol({
              size: 9,
              color: "rgb(255, 20, 20)",
              outline: undefined,
            }),
          },
          {
            value: "Tied",
            symbol: new SimpleMarkerSymbol({
              size: 9,
              color: "rgb(158, 85, 156)",
              outline: undefined,
            }),
          },
        ],
        visualVariables: [
          new SizeVariable({
            minDataValue: 600,
            maxDataValue: 4562,
            minSize: 3,
            maxSize: 20,
            valueExpression: "$feature.P2008_D + $feature.P2008_R",
            valueExpressionTitle: "Turnout",
            valueUnit: "unknown",
          }),
        ],
      }),
    });

    (window as any).view = view = new MapView({
      map: new Map({
        basemap: {
          portalItem: {
            id: "3582b744bba84668b52a16b0b6942544",
          },
        },
        layers: [layer],
      }),
      container,
      constraints: {
        snapToZoom: false,
      },
      extent: {
        xmin: -126.902,
        ymin: 23.848,
        xmax: -65.73,
        ymax: 50.15,
      },
    });

    // When the layerview is available, setup hovering interactivity
    view.whenLayerView(layer).then((lv) => {
      layerView = lv;
      setGapValue();
    });
  }

  function createSlider(container: HTMLDivElement) {
    slider = new Slider({
      container,
      min: 0,
      max: 100,
      values: [50],
      visibleElements: {
        rangeLabels: true,
      },
      labelFormatFunction: (value, type) => {
        if (type === "min") {
          return "Contested";
        }
        if (type === "max") {
          return "Landslide";
        }
        return "" + value;
      },
    });

    function inputHandler(event: any) {
      stopAnimation();
      setGapValue(parseInt(event.value));
    }
    slider.on("thumb-drag", inputHandler);

    setGapValue();
  }

  /**
   * Sets the current visualized gap.
   */
  function setGapValue(value: number = gapValue) {
    gapValue = value;
    slider?.viewModel.setValue(0, value);
    if (layerView) {
      layerView.effect = createEffect(value);
    }
    projector.scheduleRender();
  }

  /**
   * Creates an effect centered around a gap between the 2 candidates.
   * If the precincts have the specified gap percentage, drop-shadow
   * effect is applied to make them stand out from the rest. If they
   * fall outside of the specified gap percentage, grayscale, blur
   * and opacity effects are applied to subdue their presence.
   */
  function createEffect(gapValue: number) {
    gapValue = Math.min(100, Math.max(0, gapValue));

    function roundToTheTenth(value: number) {
      return Math.round(value * 10) / 10;
    }

    return new FeatureEffect({
      filter: {
        where: `PERCENT_GAP > ${roundToTheTenth(
          gapValue - 1
        )} AND PERCENT_GAP < ${roundToTheTenth(gapValue + 1)}`,
      },
      includedEffect: "drop-shadow(0, 2px, 2px, black)",
      excludedEffect: [
        {
          scale: 1324642,
          value: "grayscale(25%) blur(5px) opacity(25%)",
        },
        {
          scale: 528166,
          value: "grayscale(0) blur(0px) opacity(10%)",
        },
      ],
    });
  }

  function effectCodeBlock(gapValue: number) {
    const snippet = createEffectSnippet(gapValue);
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

  function copyToClipboard(newClip: string) {
    const input = document.createElement("textarea");
    input.innerText = newClip;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }

  function createEffectSnippet(gapValue: number) {
    gapValue = Math.min(100, Math.max(0, gapValue));

    function roundToTheTenth(value: number) {
      return Math.round(value * 10) / 10;
    }

    return `  layerView.effect = new FeatureEffect({
    filter: {
      where: "PERCENT_GAP > ${roundToTheTenth(
        gapValue - 1
      )} AND PERCENT_GAP < ${roundToTheTenth(gapValue + 1)}"
    },
    includedEffect: "drop-shadow(0, 2px, 2px, black)",
    excludedEffect: [
      {
        scale: 1324642,
        value: "grayscale(25%) blur(5px) opacity(25%)"
      },
      {
        scale: 528166,
        value: "grayscale(0) blur(0px) opacity(10%)"
      },
    ]
  });`;
  }

  function onPlayButtonClick() {
    if (animation) {
      stopAnimation();
    } else {
      startAnimation();
    }
  }

  /**
   * Starts the animation that cycle
   * through the gap between the two candidates.
   */
  function startAnimation() {
    stopAnimation();
    animation = animate(slider.values[0]);
  }

  /**
   * Stops the animations
   */
  function stopAnimation() {
    if (!animation) {
      return;
    }

    animation.remove();
    animation = null;
  }

  /**
   * Animates the visualized gap continously.
   */
  function animate(startValue: number): Animation {
    var animating = true;
    var value = startValue;
    var direction = 0.1;

    var frame = function () {
      if (!animating) {
        return;
      }

      value += direction;
      if (value > 100) {
        value = 100;
        direction = -direction;
      } else if (value < 0) {
        value = 0;
        direction = -direction;
      }

      setGapValue(value);
      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);

    return {
      remove: function () {
        animating = false;
      },
    };
  }

  const projector = createProjector();
  projector.append(document.body, render);

  // Starts the application by visualizing a gap of 50% between the two candidates
  setGapValue();
}
