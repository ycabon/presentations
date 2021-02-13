import { ax as t } from './index.js';
import { I } from './Utils-f727cc5b.js';
import { g } from './WGLContainer-2372d076.js';
import { r, d } from './TileContainer-ba62d40b.js';
import { c } from './Bitmap-c2d170a2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s extends r{constructor(e,s,r,i=null){super(e,s,r,r),this.bitmap=new c(i),this.bitmap.coordScale=r,this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e);}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e);}set stencilRef(e){this.bitmap.stencilRef=e;}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap.stage=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o extends d{createTile(r){const s$1=this._tileInfoView.getTileBounds(t(),r);return new s(r,s$1,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[g.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}}

export { o };
