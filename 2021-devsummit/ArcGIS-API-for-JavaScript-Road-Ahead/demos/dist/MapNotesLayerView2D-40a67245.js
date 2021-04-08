import { r, c8 as n, b$ as L, N as d$1, de as C, t, j as e, k as i$1 } from './_virtual_index-634cbc09.js';
import { l, d as d$2 } from './LayerView2D-9976179f.js';
import { e as et } from './BaseGraphicContainer-2d3f7320.js';
import { i } from './GraphicContainer-c6966ce5.js';
import './Container-87e93059.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './definitions-12783a0f.js';
import './schemaUtils-35ff841b.js';
import './MD5-a554c7d9.js';
import './Utils-3e0360c1.js';
import './FramebufferObject-553bb493.js';
import './MaterialKey-202e82ff.js';
import './visualVariablesUtils-07a6daab.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-eed1b518.js';
import './ComputedAttributeStorage-ba368d24.js';
import './quickselect-eae177f3.js';
import './FeatureSetReader-261c974c.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-de638f89.js';
import './tileUtils-5cb6bf04.js';
import './TurboLine-6581f402.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-3c89c245.js';
import './FeatureContainer-0b3bbe85.js';
import './TileContainer-243d7e79.js';
import './WGLContainer-9f4143c6.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-5b134693.js';
import './Program-83739cf0.js';
import './earcut-cd592b7a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(l(d$2)){async fetchPopupFeatures(e){return (await Promise.all(Array.from(this.graphicsViews(),(s=>s.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){r(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){if(this.suspended)return null;const r$1=Array.from(this.graphicsViews(),(async r$1=>{const t=await r$1.hitTest(e,i);if(t){if(r(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(r$1);!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate);}return t}return null}));return (await Promise.all(r$1)).filter((e=>!!e))[0]||null}highlight(e){let s;if("number"==typeof e?s=[e]:e instanceof n?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):L.isCollection(e)&&(s=e.map((e=>e&&e.uid)).toArray()),s=s.filter((e=>null!=e)),!s.length)return f;for(const i of this.graphicsViews())i.addHighlight(s);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(s);}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),r$1=this.layer.featureCollections;if(r(r$1)&&r$1.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of r$1){const r=new i(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const t=new et({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:i$1,container:r});this._graphicsViewsFeatureCollectionMap.set(t,s),this.container.addChild(t.container),this.handles.add([d$1(s,"visible",(e=>t.container.visible=e)),d$1(t,"updating",(()=>this.notifyChange("updating")))],d);}}else r(this.layer.sublayers)&&this.handles.add(C(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u);}detach(){this._destroyGraphicsViews(),this.handles.remove(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],s=this.view,r=()=>this.requestUpdate();for(const i$1 of this.layer.sublayers){const t=new i(this.view.featuresTilingScheme);t.fadeTransitionEnabled=!0;const a=new et({view:s,graphics:i$1.graphics,requestUpdateCallback:r,container:t});this.handles.add([i$1.on("graphic-update",a.graphicUpdateHandler),d$1(i$1,"visible",(e=>a.container.visible=e)),d$1(a,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(a.container),e.push(a);}this._graphicsViews=e;}};g=e([i$1("esri.views.2d.layers.MapNotesLayerView2D")],g);var m=g;

export default m;
