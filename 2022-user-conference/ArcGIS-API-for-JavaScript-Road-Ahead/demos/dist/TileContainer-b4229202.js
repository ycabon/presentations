import { cg as e, cV as s, bM as i$1, F as has } from './_virtual_index-4b72c57d.js';
import { r as r$1 } from './utils-1dcda7d1.js';
import { I } from './Utils-af323e30.js';
import { b as a, h, x } from './WGLContainer-e9b25fc8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r extends r$1{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new e(t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,n]=i.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;s(h,a,0,0,0,l,0,o,n,1),i$1(this.transforms.dvs,i.displayViewMat3,h);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class i extends a{constructor(e){super(),this._tileInfoView=e;}get requiresDedicatedFBO(){return !1}renderChildren(e){this.sortChildren(n),this.setStencilReference(e),super.renderChildren(e);}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(r){const n=super.prepareRenderPasses(r);return n.push(r.registerRenderPass({name:"stencil",brushes:[h],drawPhase:I.DEBUG|I.MAP|I.HIGHLIGHT,target:()=>this.getStencilTarget()})),has("esri-tiles-debug")&&n.push(r.registerRenderPass({name:"tileInfo",brushes:[x],drawPhase:I.DEBUG,target:()=>this.children})),n}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s);}}setStencilReference(e){let r=1;for(const s of this.children)s.stencilRef=r++;}}

export { i, r };
