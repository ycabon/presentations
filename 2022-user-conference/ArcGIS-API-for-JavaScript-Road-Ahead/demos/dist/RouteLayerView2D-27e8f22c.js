import { j as j$1, eT as p, r, aQ as h, t, aP as l, B as e, C as d, D as n } from './_virtual_index-4b72c57d.js';
import { b, h as h$1, O, g, a as h$2, c as h$3, D } from './Stop-56f08727.js';
import { f, u } from './LayerView-a579da68.js';
import { i } from './GraphicContainer-8e44c386.js';
import { o as oe } from './BaseGraphicContainer-8cdbc58e.js';
import './utils-1dcda7d1.js';
import './EffectView-0ee93c44.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-1f2484bf.js';
import './enums-fb707d37.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './CIMSymbolHelper-50c786a1.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './normalizeUtilsSync-9f78312b.js';
import './projectionSupport-8e09cd0f.js';
import './json-523694e0.js';
import './VertexArrayObject-47c5aa7a.js';
import './FeatureContainer-5186b646.js';
import './TileContainer-b4229202.js';
import './WGLContainer-e9b25fc8.js';
import './ProgramTemplate-cee70b37.js';
import './StyleDefinition-c3b89df1.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
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
const k=Object.freeze({remove(){},pause(){},resume(){}}),v=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],j={graphic:null,property:null,oldValue:null,newValue:null};function M(e){return e instanceof b||e instanceof h$1||e instanceof O||e instanceof g||e instanceof h$2||e instanceof h$3||e instanceof D}function V(e){return j$1.isCollection(e)&&e.length&&M(e.getItemAt(0))}function G(e){return Array.isArray(e)&&e.length&&M(e[0])}let I=class extends(f(u)){constructor(){super(...arguments),this._graphics=new j$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new p({getCollections:()=>[r(this.layer.routeInfo)?new j$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),h);}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=M(e)?[this._getNetworkFeatureUid(e)]:G(e)?e.map((e=>this._getNetworkFeatureUid(e))):V(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const r$1=t.filter(r);return r$1.length?(this._addHighlight(r$1),{remove:()=>this._removeHighlight(r$1)}):k}async hitTest(e,t){if(this.suspended)return null;const r$1=this._graphicsView.hitTest(e).filter(r).map((e=>this._networkGraphicMap.get(e)));if(!r$1.length)return null;const{layer:s}=this;return r$1.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e);}viewChange(){this._graphicsView.viewChange();}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=()=>this.requestUpdate(),r=new i(e.featuresTilingScheme);this._graphicsView=new oe({container:r,graphics:this._graphics,requestUpdateCallback:t,view:e}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return v.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight();}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.handles.remove(t);}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t$1=this._createGraphic(e);return t(t$1.symbol)?null:(this._networkFeatureMap.set(e,t$1),this._networkGraphicMap.set(t$1,e),t$1)})).filter(r));for(const t of e.added)this.handles.add([l((()=>t.geometry),((e,r)=>{this._updateGraphic(t,"geometry",e,r);})),l((()=>t.symbol),((e,r)=>{this._updateGraphic(t,"symbol",e,r);}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)));}}_updateGraphic(e,t,r,i){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const s=this._networkFeatureMap.get(e);s[t]=r,j.graphic=s,j.property=t,j.oldValue=i,j.newValue=r,this._graphicsView.graphicUpdateHandler(j);}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e);}};e([d()],I.prototype,"_graphics",void 0),e([d()],I.prototype,"_routeItems",null),I=e([n("esri.views.2d.layers.RouteLayerView2D")],I);const F=I;

export { F as default };
