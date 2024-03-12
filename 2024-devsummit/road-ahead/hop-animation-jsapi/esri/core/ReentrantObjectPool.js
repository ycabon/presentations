// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./ObjectPool"],function(b,c){class d extends c{constructor(){super(...arguments);this._set=new Set}destroy(){super.destroy();this._set=null}acquire(...a){a=super.acquire(...a);this._set.delete(a);return a}release(a){a&&!this._set.has(a)&&(super.release(a),this._set.add(a))}_dispose(a){this._set.delete(a);super._dispose(a)}}b.ReentrantObjectPool=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});