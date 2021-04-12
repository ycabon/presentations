import { r, c8 as n, b$ as L, N as d$1, de as C, t, j as e, k as i$1 } from './_virtual_index-2683c931.js';
import { l, d as d$2 } from './LayerView2D-e9137e52.js';
import { e as et } from './BaseGraphicContainer-d9ecea3a.js';
import { i } from './GraphicContainer-e41c0016.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './definitions-12783a0f.js';
import './schemaUtils-62f0bc7d.js';
import './MD5-a554c7d9.js';
import './Utils-0b584b8b.js';
import './FramebufferObject-c19fef9d.js';
import './MaterialKey-2936dc4b.js';
import './visualVariablesUtils-ba6f60d7.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-4b43760e.js';
import './ComputedAttributeStorage-bb926dc8.js';
import './quickselect-eae177f3.js';
import './FeatureSetReader-c8b784f1.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-52efe4a8.js';
import './tileUtils-a3c95651.js';
import './TurboLine-b4d64355.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-46b123b8.js';
import './FeatureContainer-3f732927.js';
import './TileContainer-f32af6bf.js';
import './WGLContainer-0b2e4b10.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u="sublayers",d="layerView",f=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends(l(d$2)){async fetchPopupFeatures(e){return (await Promise.all(Array.from(this.graphicsViews(),(s=>s.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){r(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){if(this.suspended)return null;const r$1=Array.from(this.graphicsViews(),(async r$1=>{const t=await r$1.hitTest(e,i);if(t){if(r(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(r$1);!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate);}return t}return null}));return (await Promise.all(r$1)).filter((e=>!!e))[0]||null}highlight(e){let s;if("number"==typeof e?s=[e]:e instanceof n?s=[e.uid]:Array.isArray(e)&&e.length>0?s="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):L.isCollection(e)&&(s=e.map((e=>e&&e.uid)).toArray()),s=s.filter((e=>null!=e)),!s.length)return f;for(const i of this.graphicsViews())i.addHighlight(s);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(s);}}}update(e){for(const s of this.graphicsViews())s.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),r$1=this.layer.featureCollections;if(r(r$1)&&r$1.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of r$1){const r=new i(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const t=new et({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:i$1,container:r});this._graphicsViewsFeatureCollectionMap.set(t,s),this.container.addChild(t.container),this.handles.add([d$1(s,"visible",(e=>t.container.visible=e)),d$1(t,"updating",(()=>this.notifyChange("updating")))],d);}}else r(this.layer.sublayers)&&this.handles.add(C(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),u);}detach(){this._destroyGraphicsViews(),this.handles.remove(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],s=this.view,r=()=>this.requestUpdate();for(const i$1 of this.layer.sublayers){const t=new i(this.view.featuresTilingScheme);t.fadeTransitionEnabled=!0;const a=new et({view:s,graphics:i$1.graphics,requestUpdateCallback:r,container:t});this.handles.add([i$1.on("graphic-update",a.graphicUpdateHandler),d$1(i$1,"visible",(e=>a.container.visible=e)),d$1(a,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(a.container),e.push(a);}this._graphicsViews=e;}};g=e([i$1("esri.views.2d.layers.MapNotesLayerView2D")],g);var m=g;

export default m;
