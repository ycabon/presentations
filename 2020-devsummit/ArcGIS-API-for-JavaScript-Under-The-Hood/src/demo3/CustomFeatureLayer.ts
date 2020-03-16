import { declared, property, subclass } from "esri/core/accessorSupport/decorators";
import Envelope from "esri/geometry/Extent";
import Graphic from "esri/Graphic";
import FeatureLayer from "esri/layers/FeatureLayer";
import Layer from "esri/layers/Layer";
import TileInfo from "esri/layers/support/TileInfo";
import { getFeatures } from "../common/featureLayerUtils";
import { QuantizationParameters } from "../interfaces";
import CustomFeatureLayerView from "./CustomFeatureLayerView";

@subclass("CustomFeatureLayer")
export default class CustomFeatureLayer extends declared(Layer) {
  tileInfo: TileInfo = TileInfo.create({ size: 512 }); // TileInfo.create({ size: 512, spatialReference: { wkid: 102100 } });

  @property()
  get internalFeatureLayer(): FeatureLayer {
    return this._featureLayer;
  }

  // --------------------------------------------------------------------------
  //
  //  Private properties
  //
  // --------------------------------------------------------------------------

  private _featureLayer: FeatureLayer;

  // --------------------------------------------------------------------------
  //
  //  Life cycle
  //
  // --------------------------------------------------------------------------

  constructor(params?: any) {
    super(params);

    params = params || {
      url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer"
    };

    const featureLayer = new FeatureLayer({
      url: params.url
    });

   featureLayer.load();

    this._featureLayer = featureLayer;
  }

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------

  async queryFeatures(extent: Envelope, quantizationParams: QuantizationParameters, abortOptions: { signal: AbortSignal }): Promise<Graphic[]> {
    const featureLayer = this._featureLayer;
    const features: Graphic[] = [];

    return getFeatures(features, featureLayer, extent, quantizationParams, abortOptions);
  }

  createLayerView(view: any): any {
    if (view.type === "2d") {
      return new CustomFeatureLayerView({
        view,
        layer: this
      } as any);
    }
  }
}