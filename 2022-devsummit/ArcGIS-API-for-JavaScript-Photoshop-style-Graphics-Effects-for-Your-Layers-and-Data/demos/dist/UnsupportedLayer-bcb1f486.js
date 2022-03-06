import { dp as w, dq as l, dv as b, kT as v, s, ac as e, ad as d, ae as i } from './_virtual_index-49b2bc11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends(w(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";r&&(s$1+=" "+r),o(new s("layer:unsupported-layer-type",s$1,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([d({readOnly:!0})],c.prototype,"resourceInfo",void 0),e([d({type:["show","hide"]})],c.prototype,"listMode",void 0),e([d({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=e([i("esri.layers.UnsupportedLayer")],c);const u=c;

export { u as default };
