import { r as r$1, g, j, aP as l, aQ as h, dK as a, t, B as e, D as n } from './_virtual_index-4b72c57d.js';
import { s } from './utils-1dcda7d1.js';
import { r } from './GroupContainer-5c2c9c46.js';
import { f as f$1, u } from './LayerView-a579da68.js';
import { i } from './GraphicContainer-8e44c386.js';
import { o as oe } from './BaseGraphicContainer-8cdbc58e.js';
import './EffectView-0ee93c44.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-1f2484bf.js';
import './enums-fb707d37.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './WGLContainer-e9b25fc8.js';
import './VertexArrayObject-47c5aa7a.js';
import './ProgramTemplate-cee70b37.js';
import './StyleDefinition-c3b89df1.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './CIMSymbolHelper-50c786a1.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './normalizeUtilsSync-9f78312b.js';
import './projectionSupport-8e09cd0f.js';
import './json-523694e0.js';
import './FeatureContainer-5186b646.js';
import './TileContainer-b4229202.js';
import './visualVariablesUtils-6896dbe6.js';
import './visualVariablesUtils-a3d3fab4.js';
import './Matcher-08aa0565.js';
import './tileUtils-6b4a5161.js';
import './TileClipper-ce64f0f6.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-ee2b7de5.js';
import './quantizationUtils-994cbb23.js';
import './ExpandedCIM-72783fee.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-9aaf6a24.js';
import './createSymbolSchema-35c250f9.js';
import './MD5-efff06bc.js';
import './util-04e40aaf.js';
import './ComputedAttributeStorage-59add305.js';
import './centroid-824ff9a8.js';
import './vec3f32-90dde670.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const f="sublayers",m="layerView",w=Object.freeze({remove(){},pause(){},resume(){}});let y=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new r;}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){r$1(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r$1(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const s=i.hitTest(e);if(r$1(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate);}return s})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let t;return "number"==typeof e?t=[e]:e instanceof g?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):j.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t);}}):w}update(e){for(const i of this.graphicsViews())i.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),s=this.layer.featureCollections;if(r$1(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new i(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const r=new oe({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i$1,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([l((()=>t.visible),(e=>r.container.visible=e),h),l((()=>r.updating),(()=>this.notifyChange("updating")),h)],m);}this._updateHighlight();}else r$1(this.layer.sublayers)&&this.handles.add(a((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),f);}detach(){this._destroyGraphicsViews(),this.handles.remove(f);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(m);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],i$1=this.view,s$1=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new s,a=new i(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const n=new oe({view:i$1,graphics:t.graphics,requestUpdateCallback:s$1,container:a});this.handles.add([t.on("graphic-update",n.graphicUpdateHandler),l((()=>t.visible),(e=>n.container.visible=e),h),l((()=>n.updating),(()=>this.notifyChange("updating")),h)],m),r.addChild(n.container),this.container.addChild(r),e.push(n);}this._graphicsViews=e,this._updateHighlight();}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1);}else this._highlightIds.set(i,1);this._updateHighlight();}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e);}this._updateHighlight();}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e);}};y=e([n("esri.views.2d.layers.MapNotesLayerView2D")],y);const _=y;

export { _ as default };
