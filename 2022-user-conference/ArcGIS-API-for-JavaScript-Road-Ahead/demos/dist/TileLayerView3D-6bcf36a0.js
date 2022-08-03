import { t, fL as An, s, B as e, C as d, D as n$1 } from './_virtual_index-9b831d4a.js';
import { n } from './LayerView3D-b7813df6.js';
import { c } from './TiledLayerView3D-3780d78b.js';
import { u } from './LayerView-e26ca8f9.js';
import { i } from './RefreshableLayerView-18d98912.js';
import { i as i$1 } from './TileLayerView-b7d0adce.js';
import { a } from './drapedUtils-7abad8d8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f=class extends(i(c(i$1(n(u))))){constructor(){super(...arguments),this.type="tile-3d";}get imageFormatIsOpaque(){return "jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return "mixed"===this.layer.tileInfo.format}get dataLevelRange(){if(this.tileInfo){const e=this.tileInfo.lods,r=e[0].scale,t=e[e.length-1].scale;return this.levelRangeFromScaleRange(r,t)}return {minLevel:0,maxLevel:0}}initialize(){if("web-tile"===this.layer.type){const e=this.layer.get("fullExtent.spatialReference"),i=this.layer.get("tileInfo.spatialReference");if(t(e)||t(i)||!An(e,i)){const e="defaults"===this.layer.originOf("fullExtent")||t(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new s("layerview:incompatible-fullextent",e)));}}this._addTilingSchemeMatchPromise();}createFetchPopupFeaturesQueryGeometry(e,r){return a(e,r,this.view)}async doRefresh(){this.suspended||this.emit("data-changed");}};e([d({readOnly:!0})],f.prototype,"imageFormatIsOpaque",null),e([d({readOnly:!0})],f.prototype,"hasMixedImageFormats",null),e([d()],f.prototype,"layer",void 0),e([d({readOnly:!0,aliasOf:"layer.tileInfo"})],f.prototype,"tileInfo",void 0),e([d({readOnly:!0})],f.prototype,"dataLevelRange",null),f=e([n$1("esri.views.3d.layers.TileLayerView3D")],f);const y=f;

export { y as default };
