// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe","../../../../../core/promiseUtils"],function(b,c,e){class f{constructor(a,g){this._textureRep=a;this.loadPromise=null;this._disposed=!1;a=this._textureRep.acquire(g);e.isPromiseLike(a)?(a.then(d=>{this._disposed?c.releaseMaybe(d):this._textureRef=d}),this.loadPromise=a):this._textureRef=a}dispose(){this._textureRef=c.releaseMaybe(this._textureRef);this._disposed=!0}get glTexture(){return null!=this._textureRef?this._textureRef.glTexture:null}}b.RenderTexture=
f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});