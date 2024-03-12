/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{N as t}from"./NestedMap.js";import{P as r}from"./Program.js";class s{constructor(r){this._rctx=r,this._store=new t}dispose(){this._store.forEach((t=>t.forEach((t=>t.dispose())))),this._store.clear()}acquire(t,s,e,o){const a=this._store.get(t,s);if(null!=a)return a.ref(),a;const c=new r(this._rctx,t,s,e,o);return c.ref(),this._store.set(t,s,c),c}get test(){let t=0;return this._store.forEach((r=>r.forEach((r=>t+=r.hasGLName?2:1)))),{cachedWebGLProgramObjects:t}}}export{s as P};
