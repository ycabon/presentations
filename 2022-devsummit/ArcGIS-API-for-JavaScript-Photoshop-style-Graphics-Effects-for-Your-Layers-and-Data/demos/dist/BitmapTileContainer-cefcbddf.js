import { X as n$1, aA as u } from './_virtual_index-49b2bc11.js';
import { g } from './Bitmap-4819b4da.js';
import { r as r$1, o } from './TileContainer-7b06a76e.js';
import { j } from './WGLContainer-0a7b434f.js';
import { I } from './Utils-8759b086.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends r$1{constructor(t,s,r,i,a,n=null){super(t,s,r,i,a),this.bitmap=new g(n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t);}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t);}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:n$1(),tileMat3:n$1()}}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends o{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds(u(),s),[i,n]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,n)}destroyTile(){}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[j.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}}

export { n };
