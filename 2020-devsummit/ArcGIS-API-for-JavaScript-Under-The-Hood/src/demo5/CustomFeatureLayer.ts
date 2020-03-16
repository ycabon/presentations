import { declared, property, subclass } from "esri/core/accessorSupport/decorators";
import Layer from "esri/layers/Layer";
import TileInfo from "esri/layers/support/TileInfo";
import CustomFeatureLayerView from "./CustomFeatureLayerView";


@subclass("CustomFeatureLayer")
class CustomFeatureLayer extends declared(Layer) {
  tileInfo: TileInfo = TileInfo.create({ size: 512 }); // TileInfo.create({ size: 512, spatialReference: { wkid: 102100 } });

  // --------------------------------------------------------------------------
  //
  //  Public properties
  //
  // --------------------------------------------------------------------------

  @property()
  get colorRamp(): __esri.colorRampsColorRamp {
    return this._colorRamp;
  }

  set colorRamp(ramp: __esri.colorRampsColorRamp) {
    this._colorRamp = ramp;
    this.notifyChange("colorRamp");
  }

  @property()
  url: string;

  // --------------------------------------------------------------------------
  //
  //  Private properties
  //
  // --------------------------------------------------------------------------

  private _colorRamp: __esri.colorRampsColorRamp;

  // --------------------------------------------------------------------------
  //
  //  Life cycle
  //
  // --------------------------------------------------------------------------

  constructor(params?: any) {
    super(params);

    this.url = "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer/0";
  }

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------

  createLayerView(view: any): any {
    if (view.type === "2d") {
      return new CustomFeatureLayerView({
        view,
        layer: this
      } as any);
    }
  }
}

export = CustomFeatureLayer;