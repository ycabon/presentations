import { h as r, cV as h, S, W as i$1, i4 as $, g as t, ac as e, ae as i$2 } from './_virtual_index-3ad07138.js';
import { l, u as u$1 } from './LayerView-ccf9971d.js';
import { i } from './GraphicContainer-f108ffc8.js';
import { i as it } from './BaseGraphicContainer-e75c5940.js';
import './Container-0ea8b7c2.js';
import './Utils-ba2d87f4.js';
import './Texture-970325f3.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f3b66f92.js';
import './json-2bf9d675.js';
import './VertexArrayObject-3beb5624.js';
import './FeatureContainer-c3691c35.js';
import './TileContainer-d98cb7c6.js';
import './WGLContainer-bec6b82e.js';
import './ShaderCompiler-9e67e52b.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-8a7bcdbb.js';
import './earcut-211aa720.js';
import './visualVariablesUtils-c0918cfa.js';
import './visualVariablesUtils-b2bf8e17.js';
import './Matcher-f07858c6.js';
import './tileUtils-84582c2d.js';
import './TileClipper-f06c223a.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-05c05689.js';
import './MD5-a16a7511.js';
import './util-af29771e.js';
import './ComputedAttributeStorage-64438d2c.js';
import './FeatureSetReader-25593c0a.js';
import './centroid-3bf097a6.js';
import './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(l(u$1)){async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(s=>s.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){r(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,s){const i=Array.from(this.graphicsViews(),(async s=>{const i=await s.hitTest(e);if(r(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(s);for(const s of i)!s.popupTemplate&&e.popupTemplate&&(s.popupTemplate=e.popupTemplate);}return i}));return (await Promise.all(i)).flat()}highlight(e){let t;if("number"==typeof e?t=[e]:e instanceof h?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):S.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),!t.length)return f;for(const s of this.graphicsViews())s.addHighlight(t);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(t);}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e);}attach(){const e=this.view,s=()=>this.requestUpdate(),i$2=this.layer.featureCollections;if(r(i$2)&&i$2.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of i$2){const i$2=new i(this.view.featuresTilingScheme);i$2.fadeTransitionEnabled=!0;const r=new it({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:s,container:i$2});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([i$1(t,"visible",(e=>r.container.visible=e)),i$1(r,"updating",(()=>this.notifyChange("updating")))],d);}}else r(this.layer.sublayers)&&this.handles.add($(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u);}detach(){this._destroyGraphicsViews(),this.handles.remove(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],s=this.view,i$2=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new i(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const o=new it({view:s,graphics:t.graphics,requestUpdateCallback:i$2,container:r});this.handles.add([t.on("graphic-update",o.graphicUpdateHandler),i$1(t,"visible",(e=>o.container.visible=e)),i$1(o,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(o.container),e.push(o);}this._graphicsViews=e;}};g=e([i$2("esri.views.2d.layers.MapNotesLayerView2D")],g);const m=g;

export { m as default };
