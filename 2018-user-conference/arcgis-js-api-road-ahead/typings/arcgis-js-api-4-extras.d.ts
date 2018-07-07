/**
 * Cool find huh!
 * These are typings for undocumented, non supported APIs.
 * Generally they are still buggy, so you are on your own.
 * HF!
 */

declare namespace __esriExtras {
  class HeatmapSlider extends __esri.Widget {
    constructor(options: Partial<Pick<HeatmapSlider, "minSliderValue" | "maxSliderValue" | "showLabels" | "showTicks" | "showHandles" | "colorStops">>, srcNodeRef?: string);
    minSliderValue: number;
    maxSliderValue: number;
    showLabels: boolean;
    showTicks: boolean;
    showHandles: boolean;
    colorStops: __esri.HeatmapColorStop[];
  }
}

declare module "esri/widgets/HeatmapSlider" {
  import HeatmapSlider = __esriExtras.HeatmapSlider;
  export = HeatmapSlider;
}
