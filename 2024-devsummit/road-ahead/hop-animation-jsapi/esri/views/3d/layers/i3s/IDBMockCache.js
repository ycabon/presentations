// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){const d=new WeakMap;class e{constructor(a,b){this._hit=this._miss=0;this.initialized=!0;switch(b){case "layer":this._data=new Map;break;case "view":(b=d.get(a))?this._data=b:(this._data=b=new Map,d.set(a,b))}}init(){return Promise.resolve()}async get(a,b){if(this._data.has(a))return this._hit++,this._data.get(a)??void 0;this._miss++}destroy(){}put(a,b){this._data.set(a,b);return Promise.resolve()}remove(a){this._data.delete(a);return Promise.resolve()}getHitRate(){return this._hit/
(this._hit+this._miss)}}c.IDBMockCache=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});