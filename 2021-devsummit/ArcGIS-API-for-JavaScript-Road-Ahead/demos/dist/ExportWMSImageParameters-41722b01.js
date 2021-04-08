import { d as a$1, g as u, j as e, y, k as i } from './_virtual_index-634cbc09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const a={visible:"visibleSublayers"};let l=class extends(a$1(u)){constructor(e){super(e),this.scale=0;}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"));}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,s=null==e?void 0:e.sublayers,t=[],o=e=>{const{minScale:s,maxScale:a,sublayers:l,visible:i}=e;i&&(0===r||(0===s||r<=s)&&(0===a||r>=a))&&(l?l.forEach(o):t.unshift(e));};return null==s||s.forEach(o),t}toJSON(){const{layer:e,layers:r}=this,{imageFormat:s,imageTransparency:t,version:o}=e;return {format:s,request:"GetMap",service:"WMS",styles:"",transparent:t,version:o,layers:r}}};e([y()],l.prototype,"layer",null),e([y({readOnly:!0})],l.prototype,"layers",null),e([y({type:Number})],l.prototype,"scale",void 0),e([y({readOnly:!0})],l.prototype,"version",null),e([y({readOnly:!0})],l.prototype,"visibleSublayers",null),l=e([i("esri.layers.support.ExportWMSImageParameters")],l);

export { l };
