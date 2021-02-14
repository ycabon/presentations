import { gW as d, gI as l, gG as b, I as h, eL as k, p as s, y as e, z as y, A as i } from './_virtual:index-a8a6346c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let u=class extends(d(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(h(((r,o)=>{k((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let e="Unknown layer type";r&&(e+=" "+r),o(new s("layer:unknown-layer-type",e,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};e([y({readOnly:!0})],u.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],u.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unknown"})],u.prototype,"type",void 0),u=e([i("esri.layers.UnknownLayer")],u);var a=u;

export default a;
