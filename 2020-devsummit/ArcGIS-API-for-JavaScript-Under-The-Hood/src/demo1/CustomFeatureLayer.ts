import { declared, property, subclass } from "esri/core/accessorSupport/decorators";
import Graphic from "esri/Graphic";
import FeatureLayer from "esri/layers/FeatureLayer";
import Layer from "esri/layers/Layer";
import CustomLayerView2D from "./CustomFeatureLayerView";
import { getFeatures } from "./featureLayerUtils";

@subclass("CustomFeatureLayer")
export default class CustomFeatureLayer extends declared(Layer) {
  // --------------------------------------------------------------------------
  //
  //  Public properties
  //
  // --------------------------------------------------------------------------

  @property()
  graphics: Graphic[];
  
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

    featureLayer.when(async () => {
      this.graphics = await getFeatures(featureLayer, null, null, null);
    });
  }

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------
  
  createLayerView(view: any): any {
    if (view.type === "2d") {
      return new CustomLayerView2D({
        view,
        layer: this
      } as any);
    }
  }
}