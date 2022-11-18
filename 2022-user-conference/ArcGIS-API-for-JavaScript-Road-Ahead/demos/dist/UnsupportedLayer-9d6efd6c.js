import { mD as v, mz as O, lI as v$1, u as e, y, z as n, eb as b, E as s } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let u=class extends(v(O(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v$1((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";r&&(s$1+=" "+r),o(new s("layer:unsupported-layer-type",s$1,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([y({readOnly:!0})],u.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],u.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unsupported"})],u.prototype,"type",void 0),u=e([n("esri.layers.UnsupportedLayer")],u);const c=u;

export { c as default };
