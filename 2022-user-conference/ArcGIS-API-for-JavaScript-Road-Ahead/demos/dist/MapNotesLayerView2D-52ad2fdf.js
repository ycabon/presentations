import { G as r$1, cG as g, cA as j, l, ai as h, eX as a, O as t, a as e, n } from './_virtual_index-64b818a8.js';
import { s } from './utils-b2399430.js';
import { r } from './GroupContainer-01ac0b29.js';
import { f as f$1 } from './LayerView2D-246827ac.js';
import { i } from './GraphicContainer-e7bff001.js';
import { o as oe } from './BaseGraphicContainer-ae41de74.js';
import { u } from './LayerView-9b4453e0.js';
import './Utils-9723b65e.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-0a4fb0f7.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-a43b2cc5.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './WGLContainer-ddc57cf6.js';
import './pixelUtils-d970883c.js';
import './VertexArrayObject-8b8ec2c7.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-047af3b2.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './CIMSymbolHelper-8a3e4339.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-fc82869e.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-f32c668b.js';
import './TileContainer-a9754968.js';
import './visualVariablesUtils-37e4fcd9.js';
import './visualVariablesUtils-f466489d.js';
import './Matcher-ead959e6.js';
import './tileUtils-eaaeedda.js';
import './TileClipper-e45c89a7.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-15eec215.js';
import './callExpressionWithFeature-2a9f2efb.js';
import './ExpandedCIM-72fcda41.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-6e8c0373.js';
import './createSymbolSchema-15811898.js';
import './MD5-efff06bc.js';
import './util-4c696f7e.js';
import './ComputedAttributeStorage-cfca73bd.js';
import './centroid-e637c3e9.js';
import './vec3f32-3c06790e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const f="sublayers",m="layerView",w=Object.freeze({remove(){},pause(){},resume(){}});let y=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new r;}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){r$1(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r$1(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const s=i.hitTest(e);if(r$1(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate);}return s})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let t;return "number"==typeof e?t=[e]:e instanceof g?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):j.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t);}}):w}update(e){for(const i of this.graphicsViews())i.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),s=this.layer.featureCollections;if(r$1(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new i(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const r=new oe({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i$1,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([l((()=>t.visible),(e=>r.container.visible=e),h),l((()=>r.updating),(()=>this.notifyChange("updating")),h)],m);}this._updateHighlight();}else r$1(this.layer.sublayers)&&this.handles.add(a((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),f);}detach(){this._destroyGraphicsViews(),this.handles.remove(f);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(m);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],i$1=this.view,s$1=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new s,a=new i(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const n=new oe({view:i$1,graphics:t.graphics,requestUpdateCallback:s$1,container:a});this.handles.add([t.on("graphic-update",n.graphicUpdateHandler),l((()=>t.visible),(e=>n.container.visible=e),h),l((()=>n.updating),(()=>this.notifyChange("updating")),h)],m),r.addChild(n.container),this.container.addChild(r),e.push(n);}this._graphicsViews=e,this._updateHighlight();}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1);}else this._highlightIds.set(i,1);this._updateHighlight();}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e);}this._updateHighlight();}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e);}};y=e([n("esri.views.2d.layers.MapNotesLayerView2D")],y);const _=y;

export { _ as default };
