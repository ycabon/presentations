/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{W as e,b as s}from"./WGLContainer.js";import{W as r}from"./Container.js";class a extends e{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const a=e.registerRenderPass({name:"bitmap",brushes:[s.bitmap],target:()=>this.children,drawPhase:r.MAP});return[...super.prepareRenderPasses(e),a]}_manageFade(){this.children.reduce(((e,s)=>e+(s.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}export{a as B};
