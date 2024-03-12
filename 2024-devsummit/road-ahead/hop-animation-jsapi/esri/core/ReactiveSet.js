// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./accessorSupport/tracking","./accessorSupport/tracking/SimpleObservable"],function(b,d){class e{constructor(a){this._observable=new d.SimpleObservable;this._set=new Set(a)}get size(){b.trackAccess(this._observable);return this._set.size}add(a){const c=this._set.size;this._set.add(a);this._set.size!==c&&this._observable.notify();return this}clear(){0<this._set.size&&(this._set.clear(),this._observable.notify())}delete(a){(a=this._set.delete(a))&&this._observable.notify();return a}entries(){b.trackAccess(this._observable);
return this._set.entries()}forEach(a,c){b.trackAccess(this._observable);this._set.forEach((f,g)=>a.call(c,f,g,this),c)}has(a){b.trackAccess(this._observable);return this._set.has(a)}keys(){b.trackAccess(this._observable);return this._set.keys()}values(){b.trackAccess(this._observable);return this._set.values()}[Symbol.iterator](){b.trackAccess(this._observable);return this._set[Symbol.iterator]()}get [Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}return e});