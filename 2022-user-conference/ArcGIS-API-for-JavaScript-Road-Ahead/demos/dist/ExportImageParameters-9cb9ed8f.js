import { aW as a, cv as t, r, B as e, C as d, k5 as g, D as n$1, E as f } from './_virtual_index-fc1e0009.js';
import { n } from './floorFilterUtils-776aae8e.js';
import { i } from './sublayerUtils-cad23a30.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends(a(f)){constructor(e){super(e),this.floors=null,this.scale=0;}destroy(){this.layer=null;}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=n(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&i(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"));}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,r$1=this.visibleSublayers.filter((r=>null!=r.definitionExpression||e&&null!=r.floorInfo));return r$1.length?JSON.stringify(r$1.reduce(((e,r$1)=>{const s=n(this.floors,r$1),o=t(s,r$1.definitionExpression);return r(o)&&(e[r$1.id]=o),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r));};r&&r.forEach(s);const t=this._get("visibleSublayers");return !t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};e([d({readOnly:!0})],c.prototype,"dynamicLayers",null),e([d()],c.prototype,"floors",void 0),e([d({readOnly:!0})],c.prototype,"hasDynamicLayers",null),e([d()],c.prototype,"layer",null),e([d({readOnly:!0})],c.prototype,"layers",null),e([d({readOnly:!0})],c.prototype,"layerDefs",null),e([d({type:Number})],c.prototype,"scale",void 0),e([d(g)],c.prototype,"timeExtent",void 0),e([d({readOnly:!0})],c.prototype,"version",null),e([d({readOnly:!0})],c.prototype,"visibleSublayers",null),c=e([n$1("esri.layers.mixins.ExportImageParameters")],c);

export { c };
