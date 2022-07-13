import { d as a, g as u, j as e, y, dd as w, k as i } from './_virtual_index-2683c931.js';
import { n as n$1 } from './sublayerUtils-a5b6b99d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let n=class extends(a(u)){constructor(e){super(e),this.scale=0;}destroy(){this.layer=null;}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&n$1(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(l[e.propertyName])))],"layer"));}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,r)=>(e[r.id]=r.definitionExpression,e)),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,a=0===r.minScale||t<=r.minScale,o=0===r.maxScale||t>=r.maxScale;r.visible&&(i||a&&o)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r));};r&&r.forEach(s);const t=this._get("visibleSublayers");return !t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};e([y({readOnly:!0})],n.prototype,"dynamicLayers",null),e([y({readOnly:!0})],n.prototype,"hasDynamicLayers",null),e([y()],n.prototype,"layer",null),e([y({readOnly:!0})],n.prototype,"layers",null),e([y({readOnly:!0})],n.prototype,"layerDefs",null),e([y({type:Number})],n.prototype,"scale",void 0),e([y(w)],n.prototype,"timeExtent",void 0),e([y({readOnly:!0})],n.prototype,"version",null),e([y({readOnly:!0})],n.prototype,"visibleSublayers",null),n=e([i("esri.layers.mixins.ExportImageParameters")],n);

export { n };