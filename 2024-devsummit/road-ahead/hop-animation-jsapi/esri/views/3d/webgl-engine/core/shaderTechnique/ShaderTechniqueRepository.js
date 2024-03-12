// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/NestedMap","./ShaderTechniqueConfiguration"],function(f,g,h){class k{constructor(a){this._context=a;this._perConstructorInstances=new g.NestedMap;this._frameCounter=0;this._keepAliveFrameCount=-1}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}destroy(){this._perConstructorInstances.forEach(a=>a.forEach(c=>c.technique.destroy()));this._perConstructorInstances.clear()}acquire(a,c=l){const b=c.key;let d=this._perConstructorInstances.get(a,
b);if(null==d){const e=new a(this._context,c,()=>this.release(e));d=new m(e);this._perConstructorInstances.set(a,b,d)}++d.refCount;return d.technique}releaseAndAcquire(a,c,b){if(null!=b){if(c.key===b.key)return b;this.release(b)}return this.acquire(a,c)}release(a){null==a||this._perConstructorInstances.empty||(a=this._perConstructorInstances.get(a.constructor,a.key),null!=a&&(--a.refCount,0===a.refCount&&(a.refZeroFrame=this._frameCounter)))}frameUpdate(){this._frameCounter++;-1!==this._keepAliveFrameCount&&
this._perConstructorInstances.forEach((a,c)=>{a.forEach((b,d)=>{0===b.refCount&&b.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(b.technique.destroy(),this._perConstructorInstances.delete(c,d))})})}async reloadAll(){const a=[];this._perConstructorInstances.forEach((c,b)=>{a.push((async(d,e)=>{if(e=e.shader)await e.reload(),d.forEach(n=>n.technique.reload(this._context))})(c,b))});await Promise.all(a)}}class m{constructor(a){this.technique=a;this.refZeroFrame=this.refCount=0}}const l=
new h.ShaderTechniqueConfiguration;f.ShaderTechniqueRepository=k;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});