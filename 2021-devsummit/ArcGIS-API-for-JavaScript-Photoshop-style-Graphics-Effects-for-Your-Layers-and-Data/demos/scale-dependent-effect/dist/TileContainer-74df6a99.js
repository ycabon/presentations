import { bT as r$1, c as e, bX as s, bY as M } from './index.js';
import { a } from './Container-8a78d3ea.js';
import { I } from './Utils-c3a9816c.js';
import { b as t, c as s$1, r as r$2 } from './WGLContainer-b0229d22.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r extends a{constructor(s,t,e$1,r=e$1){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:r$1(),tileMat3:r$1()},this.triangleCount=0,this.key=new e(s),this.bounds=t,this.size=e$1,this.coordRange=r;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(s){this._coords=[s[0],s[3]],this._bounds=s;}setTransform(o,i){const e=i/(o.resolution*o.pixelRatio),r=this.transforms.tileMat3,[n,h]=o.toScreenNoRotation([0,0],this.coords),a=this.size[0]/this.coordRange[0]*e,d=this.size[1]/this.coordRange[1]*e;s(r,a,0,0,0,d,0,n,h,1),M(this.transforms.dvs,o.displayViewMat3,r);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class d extends t{constructor(e){super(),this._tileInfoView=e;}renderChildren(e){this.sortChildren(n),this.setStencilReference(),super.renderChildren(e);}createRenderParams(e){const{state:r}=e;return {...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(r.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(r.scale)}}prepareRenderPasses(t){const n=t.registerRenderPass({name:"stencil",brushes:[s$1],drawPhase:I.DEBUG|I.MAP|I.HIGHLIGHT,target:()=>this.getStencilTarget()}),i=t.registerRenderPass({name:"tileInfo",brushes:[r$2],drawPhase:I.DEBUG,target:()=>this.children,has:"esri-tiles-debug"});return [...super.prepareRenderPasses(t),n,i]}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s);}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++;}}

export { d, r };
