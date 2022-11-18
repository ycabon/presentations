import { mD as v, mz as O, lI as v$1, u as e, y, z as n, eb as b, E as s } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends(v(O(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{v$1((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unknown layer type";r&&(s$1+=" "+r),e(new s("layer:unknown-layer-type",s$1,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};e([y({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],a.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=e([n("esri.layers.UnknownLayer")],a);const c=a;

export { c as default };
