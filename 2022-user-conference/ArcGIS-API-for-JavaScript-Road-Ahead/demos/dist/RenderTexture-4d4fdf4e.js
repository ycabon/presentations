import { sR as C, k8 as w, m as r$1 } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r{constructor(t,r){this._textureRep=t,this._disposed=!1;const i=this._textureRep.acquire(r);C(i)?(i.then((t=>{this._disposed?w(t):this._textureRef=t;})),this.loadPromise=i):this._textureRef=i;}dispose(){this._textureRef=w(this._textureRef),this._disposed=!0;}get glTexture(){return r$1(this._textureRef)?this._textureRef.glTexture:null}}

export { r };
