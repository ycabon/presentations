// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./MemCache"],function(c,d){class e{constructor(a,b){this._storage=new d.MemCacheStorage;this.name=this.id="";this.size=0;this._storage.maxSize=a;this._storage.register(this);b&&this._storage.registerRemoveFunc("",b)}destroy(){this._storage.deregister(this);this._storage.destroy()}put(a,b,f=1){this._storage.put(this,a,b,f,1)}pop(a){return this._storage.pop(this,a)}get(a){return this._storage.get(this,a)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(a){this._storage.maxSize=
a}resetHitRate(){}}c.LRUCache=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});