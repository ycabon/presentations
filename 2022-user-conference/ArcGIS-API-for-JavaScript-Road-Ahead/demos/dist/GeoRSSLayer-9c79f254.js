import { p1 as a, p3 as n, l1 as c, l2 as w$1, p2 as t, l3 as O, j9 as b, ac as Ut, r, bG as w$2, h as L$1, pm as G, au as s, B as e, C as d, jo as o, w as w$3, ph as v, pn as c$1, l5 as f, D as n$1, po as a$1, dh as m, pp as n$2, dd as y, jE as S } from './_virtual_index-a68dd1ed.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:a$1,key:"type",typeMap:{"simple-line":m},errorContext:"symbol"},k={base:a$1,key:"type",typeMap:{"picture-marker":n$2,"simple-marker":y},errorContext:"symbol"},_={base:a$1,key:"type",typeMap:{"simple-fill":S},errorContext:"symbol"};let w=class extends(a(n(c(w$1(t(O(b))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,o){return "string"==typeof e?{url:e,...o}:e}readFeatureCollections(e,o){return o.featureCollection.layers.forEach((e=>{const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&o.outline?.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),o.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Ut(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const o=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(w$2).then((()=>this._fetchService(o))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:s$1}=await L$1(s.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:G(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return s$1}_hasGeometry(e){return this.featureCollections?.some((o=>o.featureSet?.geometryType===e&&o.featureSet.features?.length>0))??!1}};e([d()],w.prototype,"description",void 0),e([d()],w.prototype,"featureCollections",void 0),e([o("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),e([d({type:w$3,json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),e([d(v)],w.prototype,"id",void 0),e([d(c$1)],w.prototype,"legendEnabled",void 0),e([d({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),e([d({type:["show","hide"]})],w.prototype,"listMode",void 0),e([d({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),e([d({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),e([d({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),e([d(f)],w.prototype,"url",void 0),e([d({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),e([d({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=e([n$1("esri.layers.GeoRSSLayer")],w);const F=w;

export { F as default };