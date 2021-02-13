import { dT as l, dU as d, dV as l$1, dY as b, fq as qe, U, n as e, y, b_ as E, dQ as e$1, p as i } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let c=class extends(l(d(l$1(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new qe;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new qe;return t.read(e,r),t}))}get fullExtent(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>e?e.union(t.fullExtent):t.fullExtent),null):null}get maxScale(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),null):0}set maxScale(e){this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),null):0}set minScale(e){this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),U(this)}_getNamedFeatureLayer(e){if(this.featureCollections)return this.featureCollections.find((t=>t.title===e))}};e([y({dependsOn:["featureCollections"]})],c.prototype,"barrierLines",null),e([y({dependsOn:["featureCollections"]})],c.prototype,"barrierPoints",null),e([y({dependsOn:["featureCollections"]})],c.prototype,"barrierPolygons",null),e([y({dependsOn:["featureCollections"]})],c.prototype,"directionLines",null),e([y({dependsOn:["featureCollections"]})],c.prototype,"directionPoints",null),e([y({type:E.ofType(qe)})],c.prototype,"featureCollections",void 0),e([e$1("portal-item","featureCollections",["layers"])],c.prototype,"readFeatureCollectionsFromItem",null),e([e$1("web-map","featureCollections",["featureCollection.layers"])],c.prototype,"readFeatureCollectionsFromWebMap",null),e([y({dependsOn:["featureCollections"],readOnly:!0})],c.prototype,"fullExtent",null),e([y({type:["show","hide"]})],c.prototype,"listMode",void 0),e([y({dependsOn:["featureCollections"]})],c.prototype,"maxScale",null),e([y({dependsOn:["featureCollections"]})],c.prototype,"minScale",null),e([y({dependsOn:["featureCollections"]})],c.prototype,"routeInfo",null),e([y({dependsOn:["featureCollections"]})],c.prototype,"stops",null),e([y({readOnly:!0,json:{read:!1}})],c.prototype,"type",void 0),c=e([i("esri.layers.RouteLayer")],c);var m=c;

export default m;
