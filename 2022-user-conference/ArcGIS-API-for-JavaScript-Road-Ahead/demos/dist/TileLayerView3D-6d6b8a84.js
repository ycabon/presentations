import { t, gz as An, E as s, u as e, y as y$1, z as n$1 } from './_virtual_index-1ea2035a.js';
import { n } from './LayerView3D-c60482d9.js';
import { c } from './TiledLayerView3D-30bc8b2b.js';
import { u } from './LayerView-04d8537b.js';
import { i } from './RefreshableLayerView-f32b8d34.js';
import { i as i$1 } from './TileLayerView-bf7416b0.js';
import { a } from './drapedUtils-fff0739e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f=class extends(i(c(i$1(n(u))))){constructor(){super(...arguments),this.type="tile-3d";}get imageFormatIsOpaque(){return "jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return "mixed"===this.layer.tileInfo.format}get tileInfo(){return this.layer?.tileInfo}get dataLevelRange(){if(this.tileInfo){const e=this.tileInfo.lods,t=e[0].scale,r=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,r)}return {minLevel:0,maxLevel:0}}initialize(){if("web-tile"===this.layer.type){const e=this.layer.get("fullExtent.spatialReference"),i=this.layer.get("tileInfo.spatialReference");if(t(e)||t(i)||!An(e,i)){const e="defaults"===this.layer.originOf("fullExtent")||t(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new s("layerview:incompatible-fullextent",e)));}}this._addTilingSchemeMatchPromise();}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.suspended||this.emit("data-changed");}};e([y$1()],f.prototype,"imageFormatIsOpaque",null),e([y$1()],f.prototype,"hasMixedImageFormats",null),e([y$1()],f.prototype,"layer",void 0),e([y$1()],f.prototype,"tileInfo",null),e([y$1()],f.prototype,"dataLevelRange",null),f=e([n$1("esri.views.3d.layers.TileLayerView3D")],f);const y=f;

export { y as default };
