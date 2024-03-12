// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){class b{constructor(c,d){this._module=c;this._loadModule=d}get(){return this._module}async reload(){return this._module=await this._loadModule()}}a.ReloadableShaderModule=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});