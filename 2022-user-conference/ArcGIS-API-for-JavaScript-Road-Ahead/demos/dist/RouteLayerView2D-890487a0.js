import { j as j$1, kT as p, r, aQ as h, t, aP as l, B as e, C as d, D as n } from './_virtual_index-fc1e0009.js';
import { b, h as h$1, O, g, a as h$2, c as h$3, D } from './Stop-def5b7e9.js';
import { f } from './LayerView2D-915c0186.js';
import { i } from './GraphicContainer-f41e7bce.js';
import { o as oe } from './BaseGraphicContainer-32186530.js';
import { u } from './LayerView-9aad410e.js';
import './utils-9d4b373e.js';
import './EffectView-1b384502.js';
import './Utils-073d76fd.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-4621aa9a.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-833d16dd.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './CIMSymbolHelper-d0b50b9c.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-3ce2e497.js';
import './GeometryUtils-10c98655.js';
import './VertexArrayObject-6f9baa1d.js';
import './FeatureContainer-e490cef1.js';
import './TileContainer-07a8055c.js';
import './WGLContainer-b291d234.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-dbebc039.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './visualVariablesUtils-2a1be08f.js';
import './visualVariablesUtils-cff6b693.js';
import './Matcher-f9684b93.js';
import './tileUtils-b7a1d603.js';
import './TileClipper-6e5d91c3.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-8dbd5635.js';
import './callExpressionWithFeature-1f700441.js';
import './ExpandedCIM-1216aadf.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-001ae18f.js';
import './createSymbolSchema-6c79a99e.js';
import './MD5-efff06bc.js';
import './util-1b5d3cc6.js';
import './ComputedAttributeStorage-7fb1a814.js';
import './centroid-e754a555.js';
import './vec3f32-3c06790e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const k=Object.freeze({remove(){},pause(){},resume(){}}),v=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],j={graphic:null,property:null,oldValue:null,newValue:null};function M(e){return e instanceof b||e instanceof h$1||e instanceof O||e instanceof g||e instanceof h$2||e instanceof h$3||e instanceof D}function V(e){return j$1.isCollection(e)&&e.length&&M(e.getItemAt(0))}function G(e){return Array.isArray(e)&&e.length&&M(e[0])}let I=class extends(f(u)){constructor(){super(...arguments),this._graphics=new j$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new p({getCollections:()=>[r(this.layer.routeInfo)?new j$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),h);}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=M(e)?[this._getNetworkFeatureUid(e)]:G(e)?e.map((e=>this._getNetworkFeatureUid(e))):V(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const r$1=t.filter(r);return r$1.length?(this._addHighlight(r$1),{remove:()=>this._removeHighlight(r$1)}):k}async hitTest(e,t){if(this.suspended)return null;const r$1=this._graphicsView.hitTest(e).filter(r).map((e=>this._networkGraphicMap.get(e)));if(!r$1.length)return null;const{layer:s}=this;return r$1.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e);}viewChange(){this._graphicsView.viewChange();}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=()=>this.requestUpdate(),r=new i(e.featuresTilingScheme);this._graphicsView=new oe({container:r,graphics:this._graphics,requestUpdateCallback:t,view:e}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return v.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight();}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.handles.remove(t);}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t$1=this._createGraphic(e);return t(t$1.symbol)?null:(this._networkFeatureMap.set(e,t$1),this._networkGraphicMap.set(t$1,e),t$1)})).filter(r));for(const t of e.added)this.handles.add([l((()=>t.geometry),((e,r)=>{this._updateGraphic(t,"geometry",e,r);})),l((()=>t.symbol),((e,r)=>{this._updateGraphic(t,"symbol",e,r);}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)));}}_updateGraphic(e,t,r,i){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const s=this._networkFeatureMap.get(e);s[t]=r,j.graphic=s,j.property=t,j.oldValue=i,j.newValue=r,this._graphicsView.graphicUpdateHandler(j);}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e);}};e([d()],I.prototype,"_graphics",void 0),e([d()],I.prototype,"_routeItems",null),I=e([n("esri.views.2d.layers.RouteLayerView2D")],I);const F=I;

export { F as default };
