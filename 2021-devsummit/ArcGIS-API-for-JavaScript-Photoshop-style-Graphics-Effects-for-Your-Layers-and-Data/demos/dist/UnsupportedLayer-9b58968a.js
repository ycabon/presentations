import { gW as d, gI as l, gG as b, I as h, eL as k, p as s, ds as l$1, y as e, z as y, A as i } from './_virtual:index-98fd932b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let n=class extends(d(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(h(((r,o)=>{k((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let e="Unsupported layer type";r&&(e+=" "+r),o(new s("layer:unsupported-layer-type",e,{layerType:r}));}));})));}read(r,o){const e={resourceInfo:r};null!=r.id&&(e.id=r.id),null!=r.title&&(e.title=r.title),super.read(e,o);}write(r){return l$1(r||{},this.resourceInfo,{id:this.id})}};e([y({readOnly:!0})],n.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],n.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unsupported"})],n.prototype,"type",void 0),n=e([i("esri.layers.UnsupportedLayer")],n);var a=n;

export default a;
