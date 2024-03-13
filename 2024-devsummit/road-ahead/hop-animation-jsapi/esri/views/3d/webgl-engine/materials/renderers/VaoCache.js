// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/MemCachePool","../../lib/VertexArrayObject","../../../../webgl/BufferObject","../../../../webgl/enums"],function(c,d,e,f,g){class h{constructor(a,b,k){this._rctx=a;this._locations=b;this._layout=k;this._cache=new d.MemCachePool(a.newCache,"VAOCache")}dispose(){this._cache.destroy()}newVao(a){let b=this._cache.pop(a.toString());if(b)return b;b=new e.VertexArrayObject(this._rctx,this._locations,{geometry:this._layout},{geometry:f.BufferObject.createVertex(this._rctx,
g.Usage.STATIC_DRAW)});b.vertexBuffers.geometry.setSize(a);return b}deleteVao(a){null!=a&&this._cache.put(a.byteSize.toString(),a)}}c.VaoCache=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});