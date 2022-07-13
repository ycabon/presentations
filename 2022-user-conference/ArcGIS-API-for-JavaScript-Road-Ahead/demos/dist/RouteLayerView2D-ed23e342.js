import { j as j$1, kT as p, r, aQ as h, t, aP as l, B as e, C as d, D as n } from './_virtual_index-a68dd1ed.js';
import { b, h as h$1, O, g, a as h$2, c as h$3, D } from './Stop-2fed589d.js';
import { f } from './LayerView2D-5e78fc62.js';
import { i } from './GraphicContainer-72267ffa.js';
import { o as oe } from './BaseGraphicContainer-7910f35d.js';
import { u } from './LayerView-c3f47c16.js';
import './utils-65fe22dc.js';
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
import './CIMSymbolHelper-207e14e1.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-86b5337e.js';
import './GeometryUtils-10c98655.js';
import './VertexArrayObject-8465ed50.js';
import './FeatureContainer-bfa84563.js';
import './TileContainer-fc4bdcaf.js';
import './WGLContainer-f0084bc3.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-0f5b7acb.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
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
const k=Object.freeze({remove(){},pause(){},resume(){}}),v=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],j={graphic:null,property:null,oldValue:null,newValue:null};function M(e){return e instanceof b||e instanceof h$1||e instanceof O||e instanceof g||e instanceof h$2||e instanceof h$3||e instanceof D}function V(e){return j$1.isCollection(e)&&e.length&&M(e.getItemAt(0))}function G(e){return Array.isArray(e)&&e.length&&M(e[0])}let I=class extends(f(u)){constructor(){super(...arguments),this._graphics=new j$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new p({getCollections:()=>[r(this.layer.routeInfo)?new j$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),h);}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=M(e)?[this._getNetworkFeatureUid(e)]:G(e)?e.map((e=>this._getNetworkFeatureUid(e))):V(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const r$1=t.filter(r);return r$1.length?(this._addHighlight(r$1),{remove:()=>this._removeHighlight(r$1)}):k}async hitTest(e,t){if(this.suspended)return null;const r$1=this._graphicsView.hitTest(e).filter(r).map((e=>this._networkGraphicMap.get(e)));if(!r$1.length)return null;const{layer:s}=this;return r$1.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e);}viewChange(){this._graphicsView.viewChange();}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=()=>this.requestUpdate(),r=new i(e.featuresTilingScheme);this._graphicsView=new oe({container:r,graphics:this._graphics,requestUpdateCallback:t,view:e}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return v.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight();}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.handles.remove(t);}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t$1=this._createGraphic(e);return t(t$1.symbol)?null:(this._networkFeatureMap.set(e,t$1),this._networkGraphicMap.set(t$1,e),t$1)})).filter(r));for(const t of e.added)this.handles.add([l((()=>t.geometry),((e,r)=>{this._updateGraphic(t,"geometry",e,r);})),l((()=>t.symbol),((e,r)=>{this._updateGraphic(t,"symbol",e,r);}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)));}}_updateGraphic(e,t,r,i){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const s=this._networkFeatureMap.get(e);s[t]=r,j.graphic=s,j.property=t,j.oldValue=i,j.newValue=r,this._graphicsView.graphicUpdateHandler(j);}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e);}};e([d()],I.prototype,"_graphics",void 0),e([d()],I.prototype,"_routeItems",null),I=e([n("esri.views.2d.layers.RouteLayerView2D")],I);const F=I;

export { F as default };
