import { t as t$1 } from './ShaderCompiler-17283eff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r;}dispose(){this._programCacheByTemplate.forEach((r=>r.programs.forEach((r=>r.dispose())))),this._programCacheByTemplate=null;}getProgram(t,a){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(a=>t$1(this._rctx,t,a))),this.getProgramTemplateInstance(t,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map});}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e);}return a.programs.get(r)}return null}}

export { t };
