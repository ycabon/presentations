// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/promiseUtils ../../glTF/DefaultLoadingContext ../../glTF/loader ./wosrLoader".split(" "),function(l,m,h,n,p,q){class r{constructor(a){this._gltfLoading=new Map;this._wosrLoading=new Map;this._gltfMemCache=a("gltf-resources",()=>{});this._wosrMemCache=a("wosr-resources",()=>{})}destroy(){this._gltfLoading.forEach(a=>a.abortController.abort());this._wosrLoading.forEach(a=>a.abortController.abort());this._gltfMemCache.destroy();this._wosrMemCache.destroy()}loadGLTF(a,
c,b){const d=b?`gltfPBR:${a}`:`gltf:${a}`,e=this._gltfMemCache.get(d);return null!=e?Promise.resolve(e):this._loadOnce(this._gltfLoading,this._gltfMemCache,d,g=>p.loadGLTF(new n.DefaultLoadingContext(g.streamDataRequester),a,g,b),c)}loadWOSR(a,c){const b=`wosr:${a}:${c.disableTextures}`,d=this._wosrMemCache.get(b);return null!=d?Promise.resolve(d):this._loadOnce(this._wosrLoading,this._wosrMemCache,b,e=>q.load(a,e),c)}async _loadOnce(a,c,b,d,e){h.throwIfAborted(e);const g=h.onAbort(e,()=>this._abortLoad(a,
b));var f=a.get(b);f?f.refCount++:(f=new AbortController,d=d({...e,signal:f.signal}),f={refCount:1,abortController:f,promise:d},a.set(b,f));try{const k=await f.promise;c.put(b,k,k.size);a.delete(b);h.throwIfAborted(e);return k}finally{m.removeMaybe(g)}}_abortLoad(a,c){const b=a.get(c);null!=b&&0<--b.refCount||(a.delete(c),null!=b&&b.abortController.abort())}}l.ObjectResourceCache=r;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});