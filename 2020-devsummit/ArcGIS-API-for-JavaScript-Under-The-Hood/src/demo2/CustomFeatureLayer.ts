import { declared, subclass } from "esri/core/accessorSupport/decorators";
import Graphic from "esri/Graphic";
import FeatureLayer from "esri/layers/FeatureLayer";
import Layer from "esri/layers/Layer";
import TileInfo from "esri/layers/support/TileInfo";
import { getFeatures } from "../common/featureLayerUtils";
import CustomFeatureLayerView from "./CustomFeatureLayerView";

@subclass("CustomFeatureLayer")
export default class CustomFeatureLayer extends declared(Layer) {
  tileInfo: TileInfo = TileInfo.create({ size: 512 }); // TileInfo.create({ size: 512, spatialReference: { wkid: 102100 } });

  featureLayer: FeatureLayer;

  // --------------------------------------------------------------------------
  //
  //  Life cycle
  //
  // --------------------------------------------------------------------------

  constructor(params: any = {}) {
    super(params);

    const {
      url = "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer"
    } = params;

    this.featureLayer = new FeatureLayer({
      url
    });

    this.featureLayer.load();
  }

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------

  async queryFeatures(abortOptions: { signal: AbortSignal }): Promise<Graphic[]> {
    const features: Graphic[] = [];
    return getFeatures(features, this.featureLayer, null, null, abortOptions);
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