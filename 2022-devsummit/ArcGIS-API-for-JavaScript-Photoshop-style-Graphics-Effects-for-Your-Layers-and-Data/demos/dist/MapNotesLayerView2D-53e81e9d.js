import { h as r, cV as h, S, W as i$1, ic as $, g as t, ac as e, ae as i$2 } from './_virtual_index-49b2bc11.js';
import { l, u as u$1 } from './LayerView-9194fd82.js';
import { i } from './GraphicContainer-f578401c.js';
import { i as it } from './BaseGraphicContainer-aff65f18.js';
import './Container-905526e1.js';
import './Utils-8759b086.js';
import './Texture-7f200883.js';
import './CIMSymbolHelper-bfef80ee.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f94b815a.js';
import './json-2bf9d675.js';
import './VertexArrayObject-fabb4101.js';
import './FeatureContainer-ead96078.js';
import './TileContainer-7b06a76e.js';
import './WGLContainer-0a7b434f.js';
import './ShaderCompiler-17283eff.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-67bb5654.js';
import './earcut-211aa720.js';
import './visualVariablesUtils-d152fc61.js';
import './visualVariablesUtils-9beed5ec.js';
import './Matcher-098afb59.js';
import './tileUtils-e14c76f8.js';
import './TileClipper-0109d9ce.js';
import './cimSymbolUtils-634dbb78.js';
import './quantizationUtils-65d5f437.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-54c0b4c1.js';
import './MD5-a16a7511.js';
import './util-2e9ee3aa.js';
import './ComputedAttributeStorage-39bb9c65.js';
import './FeatureSetReader-c99e2aca.js';
import './centroid-15412c9b.js';
import './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(l(u$1)){async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(s=>s.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){r(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,s){const i=Array.from(this.graphicsViews(),(async s=>{const i=await s.hitTest(e);if(r(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(s);for(const s of i)!s.popupTemplate&&e.popupTemplate&&(s.popupTemplate=e.popupTemplate);}return i}));return (await Promise.all(i)).flat()}highlight(e){let t;if("number"==typeof e?t=[e]:e instanceof h?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):S.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),!t.length)return f;for(const s of this.graphicsViews())s.addHighlight(t);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(t);}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e);}attach(){const e=this.view,s=()=>this.requestUpdate(),i$2=this.layer.featureCollections;if(r(i$2)&&i$2.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of i$2){const i$2=new i(this.view.featuresTilingScheme);i$2.fadeTransitionEnabled=!0;const r=new it({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:s,container:i$2});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([i$1(t,"visible",(e=>r.container.visible=e)),i$1(r,"updating",(()=>this.notifyChange("updating")))],d);}}else r(this.layer.sublayers)&&this.handles.add($(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u);}detach(){this._destroyGraphicsViews(),this.handles.remove(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],s=this.view,i$2=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new i(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const o=new it({view:s,graphics:t.graphics,requestUpdateCallback:i$2,container:r});this.handles.add([t.on("graphic-update",o.graphicUpdateHandler),i$1(t,"visible",(e=>o.container.visible=e)),i$1(o,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(o.container),e.push(o);}this._graphicsViews=e;}};g=e([i$2("esri.views.2d.layers.MapNotesLayerView2D")],g);const m=g;

export { m as default };
