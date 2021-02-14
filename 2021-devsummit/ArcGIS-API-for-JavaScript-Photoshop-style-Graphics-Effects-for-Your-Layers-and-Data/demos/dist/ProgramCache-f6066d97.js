import { t } from './ShaderCompiler-d9930b79.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r;}dispose(){this._programCacheByTemplate.forEach((r=>{r.programs.forEach((r=>{r.dispose();}));})),this._programCacheByTemplate=null;}getProgram(t$1,a){return this._programCacheByTemplate.has(t$1)||this.addProgramTemplate(t$1,(a=>t(this._rctx,t$1,a))),this.getProgramTemplateInstance(t$1,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map});}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e);}return a.programs.get(r)}return null}}

export { s };
