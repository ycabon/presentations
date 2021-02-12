import { a as u, cP as n$1, cy as E, q as e, r as i } from './index.js';
import { l as l$1, p } from './LayerView2D-a323da6b.js';
import { Q } from './GraphicsView2D-2d165f43.js';
import './Container-afb7bc3e.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-c0611e45.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-dcbb2c5b.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-ea321f1e.js';
import './RenderingContext-d31ba1e0.js';
import './MaterialKey-54202b75.js';
import './visualVariablesUtils-f62b50fc.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-d3a1727d.js';
import './VertexBuffer-4c2c0271.js';
import './CircularArray-99513797.js';
import './TurboLine-21fa90f1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-3c223b17.js';
import './TileContainer-e5b4ea06.js';
import './WGLContainer-f415d29f.js';
import './VertexArrayObject-b943938d.js';
import './ShaderCompiler-833038a1.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-c1444bb2.js';
import './FeatureSetReader-4c248b92.js';
import './centroid-6105d00e.js';
import './graphicsUtils-9af6492a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const l=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends(l$1(p)){async fetchPopupFeatures(e){return (await Promise.all(Array.from(this.graphicsViews(),(r=>r.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate)))))))).flat()}*graphicsViews(){u(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():u(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){if(this.suspended)return null;const t=Array.from(this.graphicsViews(),(async t=>{const s=await t.hitTest(e,i);if(s){if(s.layer=this.layer,s.sourceLayer=this.layer,u(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(t);!s.popupTemplate&&e.popupTemplate&&(s.popupTemplate=e.popupTemplate);}return s}return null}));return (await Promise.all(t)).filter((e=>!!e))[0]||null}highlight(e){let r;if("number"==typeof e?r=[e]:e instanceof n$1?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):E.isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray()),r=r.filter((e=>null!=e)),!r.length)return l;for(const e of this.graphicsViews())e.addHighlight(r);return {remove:()=>{for(const e of this.graphicsViews())e.removeHighlight(r);}}}update(e){for(const r of this.graphicsViews())r.processUpdate(e);}attach(){var e;const r=this.view,i=()=>this.requestUpdate(),t=()=>this.notifyChange("updating");if(null!=(e=this.layer.featureCollections)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const e of this.layer.featureCollections){const s=new Q({view:r,graphics:e.source,renderer:e.renderer,requestUpdateCallback:i});this._graphicsViewsFeatureCollectionMap.set(s,e),this.container.addChild(s.container),this.handles.add(s.watch("updating",t),"layerview-updating");}}else {const e=[this.layer.polygonGraphics,this.layer.lineGraphics,this.layer.pointGraphics,this.layer.textGraphics].map((e=>new Q({view:r,graphics:e,requestUpdateCallback:i})));for(const r of e)this.handles.add(r.watch("updating",t),"layerview-updating"),this.container.addChild(r.container);this._graphicsViews=e;}}detach(){this.container.removeAllChildren(),this.handles.remove("layerview-updating");for(const e of this.graphicsViews())e.destroy(),e.view=null,e.renderer=null;this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}};c=e([i("esri.views.2d.layers.MapNotesLayerView2D")],c);var n=c;

export default n;
