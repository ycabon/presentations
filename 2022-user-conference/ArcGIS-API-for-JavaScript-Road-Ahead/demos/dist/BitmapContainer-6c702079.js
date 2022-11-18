import { o, b as n } from './WGLContainer-be6ebd59.js';
import { I } from './enums-4e1a5b11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class a extends o{constructor(){super(...arguments),this._hasCrossfade=!1;}get requiresDedicatedFBO(){return this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade();}prepareRenderPasses(r){const a=r.registerRenderPass({name:"bitmap",brushes:[n.bitmap],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(r),a]}_manageFade(){this.children.reduce(((e,s)=>e+(s.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1);}}

export { a };
