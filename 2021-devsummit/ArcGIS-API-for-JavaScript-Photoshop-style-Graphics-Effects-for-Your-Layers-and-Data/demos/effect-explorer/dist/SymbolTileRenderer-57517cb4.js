import { b1 as G, q as e, r as i, ax as t } from './index.js';
import { l, m as m$1 } from './FeatureContainer-cb965a14.js';
import { u as r } from './shapingUtils-c46c57db.js';
import { m } from './CircularArray-5380cc6e.js';
import { o } from './BaseTileRenderer-6f7ea2c9.js';
import { I } from './Utils-923bb70b.js';
import { g } from './WGLContainer-ee097a9e.js';
import './VertexBuffer-a3280664.js';
import './TileContainer-1d971701.js';
import './Container-ef1b7692.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './RenderingContext-707935bb.js';
import './VertexArrayObject-5a96c147.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './MaterialKey-0d01090a.js';
import './visualVariablesUtils-c781af89.js';
import './Rect-49fd2d8c.js';
import './ShaderCompiler-b71ac8b5.js';
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
