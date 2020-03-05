// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Evented ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/scheduling ./TextureTechnique ./Util ../../../webgl/Texture".split(" "),function(f,g,t,u,k,m,v,n,w,p){Object.defineProperty(g,"__esModule",{value:!0});var q=u.getLogger("esri.views.3d.webgl-engine.lib.TextureRepository");f=function(){function a(b,a,c){this.textures=b;this.rctx=c;this._loadingCount=0;this.frameUpdates=new Map;this._unloadDeferredHandle=this._fallbackTextureTransparent=
this._fallbackTexture=null;this._texturesToUnload=[];this.events=new t;this.textureTechniqueConfig=new n.TextureTechniqueConfiguration;this.textureTechnique=a.acquireAndReleaseExisting(n.TextureTechnique,this.textureTechniqueConfig,this.textureTechnique);this.rctx=c;this.idToRefCountedTexture=new Map;this.initializeFallbackTextures()}a.prototype.dispose=function(){k.isSome(this._unloadDeferredHandle)&&(this._unloadDeferredHandle.remove(),this._unloadDeferredHandle=null);this.textures.forEach(function(b){b.unload()})};
a.prototype.initializeFallbackTextures=function(){this.fallbackTextureData=new Uint8Array(256);this.fallbackTextureTransparentData=new Uint8Array(256);for(var b=0;b<this.fallbackTextureData.length;++b)this.fallbackTextureData[b]=255,this.fallbackTextureTransparentData[b]=0!==(b+1)%4?255:0;this.fallbackTextureDesc={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:8,height:8,maxAnisotropy:this.rctx.parameters.maxMaxAnisotropy}};a.prototype.acquire=function(b,a,c){b=this.getOrCreateRef(b,
a,c);b.ref();return b};a.prototype.update=function(){var b=this,a=!1;this.frameUpdates.forEach(function(c){var d=c.texture.frameUpdate(b.rctx,b.textureTechnique,c.previousToken);0<=d&&d!==c.previousToken&&(c.previousToken=d,a=!0)});a&&this.events.emit("changed",{requestType:0})};a.prototype.getOrCreateRef=function(b,a,c){var d=this.idToRefCountedTexture.get(b);return d?d:this.createNewRef(b,a,c)};a.prototype.createNewRef=function(b,a,c){var d=this,h=this.textures.get(b);w.assert(void 0!==h);var g=
h.events.on("unloaded",function(){g.remove();d._onTextureUnloaded(b)});a=!0===a;var e=new r;this.idToRefCountedTexture.set(b,e);var l=h.load(this.rctx,this.textureTechnique);this._loadingCount++;var f=function(a){d._loadingCount--;d.updateGLTexture(e,a);c&&c(e);h.requiresFrameUpdates&&d.frameUpdates.set(b,{texture:h,previousToken:-1});return e},k=function(b){d._loadingCount--;m.isAbortError(b)||q.error(b)};m.isThenable(l)?(this.updateGLTexture(e,a?this.fallbackTextureTransparent:this.fallbackTexture),
l.then(f,k)):f(l);return e};a.prototype.updateGLTexture=function(b,a){b.glTexture=a;this.events.emit("changed",{requestType:1})};a.prototype.release=function(b){var a=this,c=this.idToRefCountedTexture.get(b);c&&(c.unref(),c.isUnreferenced&&(this._texturesToUnload.push(b),k.isNone(this._unloadDeferredHandle)&&(this._unloadDeferredHandle=v.schedule(function(){return a.unloadDeferred()}))))};a.prototype.unloadDeferred=function(){for(var b=this._texturesToUnload,a=this._texturesToUnload.length=0;a<b.length;a++){var c=
b[a],d=this.textures.get(c),c=this.idToRefCountedTexture.get(c);d&&c&&c.isUnreferenced&&d.unload()}};a.prototype.getTexture=function(a){return this.textures.get(a)};Object.defineProperty(a.prototype,"loadingCount",{get:function(){return this._loadingCount},enumerable:!0,configurable:!0});a.prototype._onTextureUnloaded=function(a){this.idToRefCountedTexture.delete(a);this.frameUpdates.delete(a)};Object.defineProperty(a.prototype,"fallbackTexture",{get:function(){this._fallbackTexture||(this._fallbackTexture=
new p(this.rctx,this.fallbackTextureDesc,this.fallbackTextureData));return this._fallbackTexture},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"fallbackTextureTransparent",{get:function(){this._fallbackTextureTransparent||(this._fallbackTextureTransparent=new p(this.rctx,this.fallbackTextureDesc,this.fallbackTextureTransparentData));return this._fallbackTextureTransparent},enumerable:!0,configurable:!0});return a}();g.TextureRepository=f;var r=function(){function a(){this._refCount=
0;this.glTexture=null}Object.defineProperty(a.prototype,"isUnreferenced",{get:function(){return 0===this._refCount},enumerable:!0,configurable:!0});a.prototype.ref=function(){++this._refCount};a.prototype.unref=function(){0===this._refCount?q.error("Cannot dereference texture that has no references!"):--this._refCount};return a}();g.RefCountedTexture=r});