import { r as r$1, g, j, aP as l, aQ as h, fw as a, t, B as e, D as n } from './_virtual_index-a68dd1ed.js';
import { s } from './utils-65fe22dc.js';
import { r } from './GroupContainer-0d97f989.js';
import { f as f$1 } from './LayerView2D-5e78fc62.js';
import { i } from './GraphicContainer-72267ffa.js';
import { o as oe } from './BaseGraphicContainer-7910f35d.js';
import { u } from './LayerView-c3f47c16.js';
import './EffectView-f0c56014.js';
import './Utils-13ecd570.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-6d086a89.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-c720612c.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './WGLContainer-f0084bc3.js';
import './VertexArrayObject-8465ed50.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-0f5b7acb.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './CIMSymbolHelper-207e14e1.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-86b5337e.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-bfa84563.js';
import './TileContainer-fc4bdcaf.js';
import './visualVariablesUtils-9ffa569b.js';
import './visualVariablesUtils-2b7ff03c.js';
import './Matcher-74eec27a.js';
import './tileUtils-dcde4a9f.js';
import './TileClipper-b97993cf.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-cdc9ead8.js';
import './callExpressionWithFeature-61b951a0.js';
import './ExpandedCIM-ab130668.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-b5b76e05.js';
import './createSymbolSchema-b0736342.js';
import './MD5-efff06bc.js';
import './util-d93141bf.js';
import './ComputedAttributeStorage-85ce72ec.js';
import './centroid-6ca6c7bb.js';
import './vec3f32-3c06790e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const f="sublayers",m="layerView",w=Object.freeze({remove(){},pause(){},resume(){}});let y=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new r;}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){r$1(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r$1(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const s=i.hitTest(e);if(r$1(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate);}return s})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let t;return "number"==typeof e?t=[e]:e instanceof g?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):j.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t);}}):w}update(e){for(const i of this.graphicsViews())i.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),s=this.layer.featureCollections;if(r$1(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new i(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const r=new oe({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i$1,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([l((()=>t.visible),(e=>r.container.visible=e),h),l((()=>r.updating),(()=>this.notifyChange("updating")),h)],m);}this._updateHighlight();}else r$1(this.layer.sublayers)&&this.handles.add(a((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),f);}detach(){this._destroyGraphicsViews(),this.handles.remove(f);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(m);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],i$1=this.view,s$1=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new s,a=new i(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const n=new oe({view:i$1,graphics:t.graphics,requestUpdateCallback:s$1,container:a});this.handles.add([t.on("graphic-update",n.graphicUpdateHandler),l((()=>t.visible),(e=>n.container.visible=e),h),l((()=>n.updating),(()=>this.notifyChange("updating")),h)],m),r.addChild(n.container),this.container.addChild(r),e.push(n);}this._graphicsViews=e,this._updateHighlight();}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1);}else this._highlightIds.set(i,1);this._updateHighlight();}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e);}this._updateHighlight();}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e);}};y=e([n("esri.views.2d.layers.MapNotesLayerView2D")],y);const _=y;

export { _ as default };
