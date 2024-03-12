// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./basicInterfaces"],function(d,f){class g{constructor(b,a){this._material=b;this._repository=a;this._map=new Map}dispose(){this._map.forEach((b,a)=>{null!=b&&this._repository.release(this._material,a)})}load(b,a,c){const e=this._material.produces.get(a);if(!e||!e(c))return null;this._map.has(c)||this._map.set(c,this._repository.acquire(this._material,a,c));a=this._map.get(c);if(null!=a){if(a.ensureResources(b)===f.ResourceState.LOADED)return a;this._repository.requestRender()}return null}}
d.GLMaterials=g;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});