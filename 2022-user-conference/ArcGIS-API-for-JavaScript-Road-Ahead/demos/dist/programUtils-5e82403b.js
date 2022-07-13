import { r } from './_virtual_index-4b72c57d.js';
import { h } from './ProgramTemplate-cee70b37.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map;}clear(){this._outer.clear();}get empty(){return 0===this._outer.size}get(t,e){return this._outer.get(t)?.get(e)}set(t,e,r){const s=this._outer.get(t);s?s.set(e,r):this._outer.set(t,new Map([[e,r]]));}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t));}forEach(t){this._outer.forEach(((e,r)=>t(e,r)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s{constructor(r){this._rctx=r,this._store=new t;}dispose(){this._store.forEach((r=>r.forEach((r=>r.dispose())))),this._store.clear();}acquire(t,s,o,c){const i=this._store.get(t,s);if(r(i))return i.ref(),i;const h$1=new h(this._rctx,t,s,o,c);return h$1.ref(),this._store.set(t,s,h$1),h$1}get test(){let r=0;return this._store.forEach((t=>t.forEach((t=>r+=t.hasGLName?2:1)))),{cachedWebGLObjects:r}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e){const{options:n,value:o}=e;return "number"==typeof n[o]}function n(n){let o="";for(const t in n){const i=n[t];if("boolean"==typeof i)i&&(o+=`#define ${t}\n`);else if("number"==typeof i)o+=`#define ${t} ${i.toFixed()}\n`;else if("object"==typeof i)if(e(i)){const{value:e,options:n,namespace:f}=i,s=f?`${f}_`:"";for(const t in n)o+=`#define ${s}${t} ${n[t].toFixed()}\n`;o+=`#define ${t} ${s}${e}\n`;}else {const e=i.options;let n=0;for(const t in e)o+=`#define ${e[t]} ${(n++).toFixed()}\n`;o+=`#define ${t} ${e[i.value]}\n`;}}return o}

export { n, s };
