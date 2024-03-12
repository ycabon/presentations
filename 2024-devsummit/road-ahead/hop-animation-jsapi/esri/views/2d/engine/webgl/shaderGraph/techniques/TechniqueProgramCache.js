// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){class k{constructor(){this._programCache=new Map}destroy(){for(const a of this._programCache.values())a.destroy();this._programCache.clear()}getProgram(a,d,e,f,g){const h=a.getShaderKey(d,e,f,g);let b=this._programCache.get(h);b||(b=a.getProgram(d,e,f,g),this._programCache.set(h,b));return b}}c.TechniqueProgramCache=k;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});