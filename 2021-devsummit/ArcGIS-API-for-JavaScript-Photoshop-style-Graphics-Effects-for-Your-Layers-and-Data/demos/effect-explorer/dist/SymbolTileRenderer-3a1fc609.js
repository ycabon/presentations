import { b1 as G, q as e, r as i, ax as t } from './index.js';
import { l, m as m$1 } from './FeatureContainer-3c223b17.js';
import { u as r } from './shapingUtils-dcbb2c5b.js';
import { m } from './CircularArray-99513797.js';
import { o } from './BaseTileRenderer-1b98f4b0.js';
import { I } from './Utils-ea321f1e.js';
import { g } from './WGLContainer-f415d29f.js';
import './VertexBuffer-4c2c0271.js';
import './TileContainer-e5b4ea06.js';
import './Container-afb7bc3e.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './RenderingContext-d31ba1e0.js';
import './VertexArrayObject-b943938d.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './MaterialKey-54202b75.js';
import './visualVariablesUtils-f62b50fc.js';
import './Rect-49fd2d8c.js';
import './ShaderCompiler-833038a1.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a extends l{constructor(e,s,t){super(e),this._pointToCallbacks=new Map,this._layer=t,this._layerView=s;}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView);}super.renderChildren(e);}hitTest(s,t){const i=[s,t],a=G();return this._pointToCallbacks.set(i,a),this.requestRender(),a.promise}doRender(e){const{minScale:s,maxScale:t}=this._layer,i=e.state.scale;i<=(s||1/0)&&i>=t&&super.doRender(e);}get hasAnimation(){return this.hasLabels}get hasLabels(){const e=this._layer.featureReduction,s=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!s}get labelsVisible(){return this._layer.labelsVisible}prepareRenderPasses(e){const i=e.registerRenderPass({name:"label",brushes:[g.label],target:()=>this.hasLabels?this.children:null,drawPhase:I.LABEL|I.LABEL_ALPHA}),a=e.registerRenderPass({name:"geometry",brushes:[g.fill,g.line,g.marker,g.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),r=e.registerRenderPass({name:"highlight",brushes:[g.fill,g.line,g.marker,g.text],target:()=>this.children,drawPhase:I.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return [...super.prepareRenderPasses(e),a,r,i]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let n=class extends o{install(e){const t=new a(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t);}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy();}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const i=(r(e).visualVariables||[]).map((e=>{const t=e.clone();return "normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=m(i);}this.featuresView.setRendererInfo(e,t,this.layerView.effects);}onTileData(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate();}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t);}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload();}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lockUploads()));}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlockUploads()));}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&(this.tiles.forEach((e=>e.isDirty=!0)),this.layerView.view.labelManager.requestUpdate());}createTile(e){const t$1=this.tileInfoView.getTileBounds(t(),e),r=new m$1(e,t$1);return this.featuresView.hasLabels&&this.layerView.view.labelManager.addTile(this.layerView,r),r}disposeTile(e){this.featuresView.removeChild(e),this.featuresView.hasLabels&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate();}};n=e([i("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],n);var u=n;

export default u;
