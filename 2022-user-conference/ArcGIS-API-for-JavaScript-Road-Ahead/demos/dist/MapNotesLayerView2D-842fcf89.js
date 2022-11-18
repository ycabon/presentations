import { m as r$1, P as g, e9 as j, b7 as l, b8 as h, gD as a, t, u as e, z as n } from './_virtual_index-1ea2035a.js';
import { i as i$1 } from './utils-94e6680e.js';
import { r } from './GroupContainer-6e7b4632.js';
import { y as y$1 } from './LayerView2D-0acb5666.js';
import { i } from './GraphicContainer-0fdd8b97.js';
import { o as oe } from './BaseGraphicContainer-aab27617.js';
import { u } from './LayerView-04d8537b.js';
import './EffectView-de5a8347.js';
import './enums-4e1a5b11.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './Utils-7b2ac961.js';
import './number-7d0da80b.js';
import './enums-3e26cf0d.js';
import './definitions-a784b44f.js';
import './WGLContainer-be6ebd59.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './StyleDefinition-98114241.js';
import './GeometryUtils-07c7843a.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './heatmapTextureUtils-076ceaf2.js';
import './cimAnalyzer-32e4ad07.js';
import './fontUtils-49a60944.js';
import './BidiEngine-25d35bf3.js';
import './Rect-1c5846da.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-e333c7c0.js';
import './visualVariablesUtils-e0de182e.js';
import './visualVariablesUtils-933d57c8.js';
import './TileContainer-18a96df2.js';
import './Matcher-39feddc4.js';
import './tileUtils-e3849516.js';
import './TileClipper-b7d453c3.js';
import './Geometry-bc69b0c8.js';
import './ExpandedCIM-a44ee24d.js';
import './schemaUtils-15a39169.js';
import './createSymbolSchema-49eb4f50.js';
import './util-b1c4d8f0.js';
import './ComputedAttributeStorage-5652149f.js';
import './centroid-205dc6cf.js';
import './GraphicsView-fce768d1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const f="sublayers",m="layerView",w=Object.freeze({remove(){},pause(){},resume(){}});let y=class extends(y$1(u)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new r;}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){r$1(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r$1(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const s=i.hitTest(e);if(r$1(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate),i.sourceLayer=i.layer=this.layer;}return s})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let t;return "number"==typeof e?t=[e]:e instanceof g?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):j.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t);}}):w}update(e){for(const i of this.graphicsViews())i.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),s=this.layer.featureCollections;if(r$1(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new i(this.view.featuresTilingScheme),r=new oe({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i$1,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([l((()=>t.visible),(e=>r.container.visible=e),h),l((()=>r.updating),(()=>this.notifyChange("updating")),h)],m);}this._updateHighlight();}else r$1(this.layer.sublayers)&&this.handles.add(a((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),f);}detach(){this._destroyGraphicsViews(),this.handles.remove(f);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(m);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],i$2=this.view,s=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new i$1,a=new i(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const n=new oe({view:i$2,graphics:t.graphics,requestUpdateCallback:s,container:a});this.handles.add([t.on("graphic-update",n.graphicUpdateHandler),l((()=>t.visible),(e=>n.container.visible=e),h),l((()=>n.updating),(()=>this.notifyChange("updating")),h)],m),r.addChild(n.container),this.container.addChild(r),e.push(n);}this._graphicsViews=e,this._updateHighlight();}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1);}else this._highlightIds.set(i,1);this._updateHighlight();}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e);}this._updateHighlight();}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e);}};y=e([n("esri.views.2d.layers.MapNotesLayerView2D")],y);const _=y;

export { _ as default };
