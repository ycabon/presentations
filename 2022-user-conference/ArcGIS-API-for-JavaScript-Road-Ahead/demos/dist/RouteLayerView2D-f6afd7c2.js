import { cA as j$1, jN as p, G as r, ai as h, O as t, l, a as e, d, n } from './_virtual_index-64b818a8.js';
import { b, h as h$1, O, g, a as h$2, c as h$3, D } from './Stop-0b7d78c8.js';
import { f } from './LayerView2D-246827ac.js';
import { i } from './GraphicContainer-e7bff001.js';
import { o as oe } from './BaseGraphicContainer-ae41de74.js';
import { u } from './LayerView-9b4453e0.js';
import './utils-b2399430.js';
import './Utils-9723b65e.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-0a4fb0f7.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-a43b2cc5.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './CIMSymbolHelper-8a3e4339.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-fc82869e.js';
import './GeometryUtils-10c98655.js';
import './VertexArrayObject-8b8ec2c7.js';
import './FeatureContainer-f32c668b.js';
import './TileContainer-a9754968.js';
import './WGLContainer-ddc57cf6.js';
import './pixelUtils-d970883c.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-047af3b2.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
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
const k=Object.freeze({remove(){},pause(){},resume(){}}),v=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],j={graphic:null,property:null,oldValue:null,newValue:null};function M(e){return e instanceof b||e instanceof h$1||e instanceof O||e instanceof g||e instanceof h$2||e instanceof h$3||e instanceof D}function V(e){return j$1.isCollection(e)&&e.length&&M(e.getItemAt(0))}function G(e){return Array.isArray(e)&&e.length&&M(e[0])}let I=class extends(f(u)){constructor(){super(...arguments),this._graphics=new j$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new p({getCollections:()=>[r(this.layer.routeInfo)?new j$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),h);}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=M(e)?[this._getNetworkFeatureUid(e)]:G(e)?e.map((e=>this._getNetworkFeatureUid(e))):V(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const r$1=t.filter(r);return r$1.length?(this._addHighlight(r$1),{remove:()=>this._removeHighlight(r$1)}):k}async hitTest(e,t){if(this.suspended)return null;const r$1=this._graphicsView.hitTest(e).filter(r).map((e=>this._networkGraphicMap.get(e)));if(!r$1.length)return null;const{layer:s}=this;return r$1.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e);}viewChange(){this._graphicsView.viewChange();}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=()=>this.requestUpdate(),r=new i(e.featuresTilingScheme);this._graphicsView=new oe({container:r,graphics:this._graphics,requestUpdateCallback:t,view:e}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return v.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight();}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.handles.remove(t);}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t$1=this._createGraphic(e);return t(t$1.symbol)?null:(this._networkFeatureMap.set(e,t$1),this._networkGraphicMap.set(t$1,e),t$1)})).filter(r));for(const t of e.added)this.handles.add([l((()=>t.geometry),((e,r)=>{this._updateGraphic(t,"geometry",e,r);})),l((()=>t.symbol),((e,r)=>{this._updateGraphic(t,"symbol",e,r);}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)));}}_updateGraphic(e,t,r,i){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const s=this._networkFeatureMap.get(e);s[t]=r,j.graphic=s,j.property=t,j.oldValue=i,j.newValue=r,this._graphicsView.graphicUpdateHandler(j);}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e);}};e([d()],I.prototype,"_graphics",void 0),e([d()],I.prototype,"_routeItems",null),I=e([n("esri.views.2d.layers.RouteLayerView2D")],I);const F=I;

export { F as default };
