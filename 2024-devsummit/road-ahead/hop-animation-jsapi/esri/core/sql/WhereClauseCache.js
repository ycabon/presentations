// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../LRUCache","./WhereClause"],function(e,f,h){class k{constructor(a,b){this._cache=new f.LRUCache(a);this._invalidCache=new f.LRUCache(b)}get(a,b){const c=`${b.uid}:${a}`,g=this._cache.get(c);if(g)return g;if(null!=this._invalidCache.get(c))return null;try{const d=h.WhereClause.create(a,b);this._cache.put(c,d);return d}catch(d){return this._invalidCache.put(c,d),null}}getError(a,b){return this._invalidCache.get(`${b.uid}:${a}`)??null}}e.WhereClauseCache=k;Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});