// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./MemCache"],function(f,e){class g{constructor(a,b){this._cache=a(b,(c,d,h)=>this._remove(c,d,h))}hitrate(){return this._cache.hitRate}destroy(){this._cache.destroy()}clear(){this._cache.clear()}getSize(a){return this._cache.getSize(a)}pop(a){const b=this._cache.peek(a);if(b){var c=b.pop();if(0<b.length){if(c){const d=this._cache.getSize(a)-Math.round(c.usedMemory);this._cache.updateSize(a,b,d)}}else this._cache.pop(a);return c}}put(a,b,c=e.NoPriority){const d=this._cache.peek(a);
d?(d.push(b),b=this._cache.getSize(a)+Math.round(b.usedMemory),this._cache.updateSize(a,d,b)):this._cache.put(a,[b],b.usedMemory,c)}_remove(a,b,c){switch(b){case e.RemoveMode.ALL:return a.forEach(d=>d.dispose()),0;case e.RemoveMode.SOME:if(a=a.shift())c-=Math.round(a.usedMemory),a.dispose();return c}}}f.MemCachePool=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});