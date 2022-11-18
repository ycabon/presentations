import { be as a, u as e, y, z as n, A as m } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o={visible:"visibleSublayers"};let l=class extends(a(m)){constructor(e){super(e),this.scale=0;}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(o[e.propertyName])))],"layer"));}get layers(){return this.visibleSublayers.filter((({name:e})=>e)).map((({name:e})=>e)).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,s=e?.sublayers,t=[],a=e=>{const{minScale:s,maxScale:o,sublayers:l,visible:i}=e;i&&(0===r||(0===s||r<=s)&&(0===o||r>=o))&&(l?l.forEach(a):t.push(e));};return s?.forEach(a),t}toJSON(){const{layer:e,layers:r}=this,{imageFormat:s,imageTransparency:t,version:a}=e;return {format:s,request:"GetMap",service:"WMS",styles:"",transparent:t?"TRUE":"FALSE",version:a,layers:r}}};e([y()],l.prototype,"layer",null),e([y({readOnly:!0})],l.prototype,"layers",null),e([y({type:Number})],l.prototype,"scale",void 0),e([y({readOnly:!0})],l.prototype,"version",null),e([y({readOnly:!0})],l.prototype,"visibleSublayers",null),l=e([n("esri.layers.support.ExportWMSImageParameters")],l);

export { l };
