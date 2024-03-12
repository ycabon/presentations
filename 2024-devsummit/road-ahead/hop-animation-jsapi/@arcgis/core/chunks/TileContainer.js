/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{h as e}from"../core/lang.js";import{W as r}from"./Container.js";import{W as s,a as t,c as n}from"./WGLContainer.js";const l=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class i extends s{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s){const l=super.prepareRenderPasses(s);return l.push(s.registerRenderPass({name:"stencil",brushes:[t],drawPhase:r.DEBUG|r.MAP|r.HIGHLIGHT,target:()=>this.getStencilTarget()})),e("esri-tiles-debug")&&l.push(s.registerRenderPass({name:"tileInfo",brushes:[n],drawPhase:r.DEBUG,target:()=>this.children})),l}getStencilTarget(){return this.children}setStencilReference(e){let r=1;for(const e of this.children)e.stencilRef=r++}}export{i as T};
