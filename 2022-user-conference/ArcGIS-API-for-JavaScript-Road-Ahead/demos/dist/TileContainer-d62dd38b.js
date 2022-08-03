import { F as has } from './_virtual_index-9b831d4a.js';
import { I } from './Utils-0ee32720.js';
import { a } from './WGLContainer-c474bc93.js';
import { h, x } from './brushes-0ba66925.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class i extends a{constructor(e){super(),this._tileInfoView=e;}get requiresDedicatedFBO(){return !1}renderChildren(e){this.sortChildren(n),this.setStencilReference(e),super.renderChildren(e);}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(r){const n=super.prepareRenderPasses(r);return n.push(r.registerRenderPass({name:"stencil",brushes:[h],drawPhase:I.DEBUG|I.MAP|I.HIGHLIGHT,target:()=>this.getStencilTarget()})),has("esri-tiles-debug")&&n.push(r.registerRenderPass({name:"tileInfo",brushes:[x],drawPhase:I.DEBUG,target:()=>this.children})),n}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s);}}setStencilReference(e){let r=1;for(const s of this.children)s.stencilRef=r++;}}

export { i };
