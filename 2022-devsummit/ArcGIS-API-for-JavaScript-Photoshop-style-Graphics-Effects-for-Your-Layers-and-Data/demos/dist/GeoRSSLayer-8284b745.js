import { j5 as i, j7 as n, dn as y, dp as w$1, j6 as s, dq as l, dv as b, fi as ht, h as r, b4 as b$1, C, jw as A, r as r$1, ac as e, ad as d, d6 as o, c_ as M, jp as j, jx as c, du as f, ae as i$1, jy as a, jz as m, jA as n$1, jB as y$1, jC as S } from './_virtual_index-49b2bc11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:a,key:"type",typeMap:{"simple-line":m},errorContext:"symbol"},k={base:a,key:"type",typeMap:{"picture-marker":n$1,"simple-marker":y$1},errorContext:"symbol"},_={base:a,key:"type",typeMap:{"simple-fill":S},errorContext:"symbol"};let w=class extends(i(n(y(w$1(s(l(b))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach((e=>{var r;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&null!=(r=o.outline)&&r.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?ht(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(b$1).then((()=>this._fetchService(r$1))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const s=this.spatialReference,{data:i}=await C(r$1.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:A(s)?void 0:null!=(t=s.wkid)?t:JSON.stringify(s)},signal:e});return i}_hasGeometry(e){var r,o;return null!=(r=null==(o=this.featureCollections)?void 0:o.some((r=>{var o,t;return (null==(o=r.featureSet)?void 0:o.geometryType)===e&&(null==(t=r.featureSet.features)?void 0:t.length)>0})))&&r}};e([d()],w.prototype,"description",void 0),e([d()],w.prototype,"featureCollections",void 0),e([o("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),e([d({type:M,json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),e([d(j)],w.prototype,"id",void 0),e([d(c)],w.prototype,"legendEnabled",void 0),e([d({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),e([d({type:["show","hide"]})],w.prototype,"listMode",void 0),e([d({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),e([d({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),e([d({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),e([d(f)],w.prototype,"url",void 0),e([d({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),e([d({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=e([i$1("esri.layers.GeoRSSLayer")],w);const F=w;

export { F as default };