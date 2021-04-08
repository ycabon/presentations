import { ck as u$1, cl as l, cp as b, hu as v, s, j as e, y, k as i } from './_virtual_index-634cbc09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let c=class extends(u$1(l(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let e="Unknown layer type";r&&(e+=" "+r),o(new s("layer:unknown-layer-type",e,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};e([y({readOnly:!0})],c.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],c.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unknown"})],c.prototype,"type",void 0),c=e([i("esri.layers.UnknownLayer")],c);var u=c;

export default u;
