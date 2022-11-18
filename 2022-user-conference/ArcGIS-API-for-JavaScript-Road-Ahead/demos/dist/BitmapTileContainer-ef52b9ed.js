import { dZ as r$1, aL as e, bI as u } from './_virtual_index-1ea2035a.js';
import { R } from './Bitmap-c8e15fa6.js';
import { b as n$1 } from './WGLContainer-be6ebd59.js';
import { I } from './enums-4e1a5b11.js';
import { i } from './TileContainer-18a96df2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r extends r$1{constructor(e,s,r,i,a,n,m=null){super(e,s,r,i,a,n),this.bitmap=new R(m,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[a,n],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e);}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e);}set stencilRef(e){this.bitmap.stencilRef=e;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:e(),tileMat3:e()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class n extends i{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(r$1){const t=this._tileInfoView.getTileBounds(u(),r$1),s=this._tileInfoView.getTileResolution(r$1.level),[n,o]=this._tileInfoView.tileInfo.size;return new r(r$1,s,t[0],t[3],n,o)}prepareRenderPasses(e){const i=e.registerRenderPass({name:"bitmap (tile)",brushes:[n$1.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}}

export { n };
