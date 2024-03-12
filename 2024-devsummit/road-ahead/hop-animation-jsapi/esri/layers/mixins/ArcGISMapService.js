// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../request ../../core/MapUtils ../../core/promiseUtils ../../core/urlUtils ../../core/Version ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/PropertyOrigin ../../geometry/Extent ../../geometry/SpatialReference ../support/arcgisLayerUrl ../support/commonProperties ../../portal/support/portalItemUtils".split(" "),
function(n,f,p,y,q,r,z,h,I,J,K,t,A,u,B,C,v,w,x){n.ArcGISMapService=e=>{e=class extends e{constructor(){super(...arguments);this.capabilities=void 0;this.fullExtent=this.copyright=null;this.legendEnabled=!0;this.spatialReference=null;this.version=void 0;this._allLayersAndTablesMap=null}readCapabilities(a,b){var d=b.capabilities&&b.capabilities.split(",").map(D=>D.toLowerCase().trim());if(!d)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},
exportMap:null,exportTiles:null};var c=this.type;a="tile"!==c&&!!b.supportsDynamicLayers;const g=d.includes("query"),k=d.includes("map"),l=!!b.exportTilesAllowed,E=d.includes("tilemap");d=d.includes("data");const F="tile"!==c&&(!b.tileInfo||a),G="tile"!==c&&(!b.tileInfo||a);c="tile"!==c;var m=b.cimVersion&&z.Version.parse(b.cimVersion);const H=m?.since(1,4)??!1;m=m?.since(2,0)??!1;return{operations:{supportsExportMap:k,supportsExportTiles:l,supportsIdentify:g,supportsQuery:d,supportsTileMap:E},exportMap:k?
{supportsArcadeExpressionForLabeling:H,supportsSublayersChanges:c,supportsDynamicLayers:a,supportsSublayerVisibility:F,supportsSublayerDefinitionExpression:G,supportsCIMSymbols:m}:null,exportTiles:l?{maxExportTilesCount:+b.maxExportTilesCount}:null}}readVersion(a,b){(a=b.currentVersion)||(a=b.hasOwnProperty("capabilities")||b.hasOwnProperty("tables")?10:b.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3);return a}async fetchRelatedService(a){var b=this.portalItem;if(!b||!x.isHostedLayer(b))return null;
this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=b.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},a).then(d=>d.find(c=>"Feature Service"===c.type)??null,()=>null));b=await this._relatedFeatureServicePromise;q.throwIfAborted(a);return b?{itemId:b.id,url:b.url}:null}async fetchSublayerInfo(a,b){const {source:d}=a;if(this?.portalItem&&"tile"===this.type&&"map-layer"===d?.type&&x.isHostedLayer(this.portalItem)&&a.originIdOf("url")<u.OriginId.SERVICE){var c=
await this.fetchRelatedService(b);c&&(a.url=r.join(c.url,d.mapLayerId.toString()),a.layerItemId=c.itemId)}({url:c}=a);let g;if("data-layer"===d.type)g=(await p(c,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...b})).data;else if(c&&a.originIdOf("url")>u.OriginId.SERVICE)try{const k=await this._fetchAllLayersAndTablesFromService(c),l=v.parse(c)?.sublayer??d.mapLayerId;g=k.get(l)}catch{}else{a=a.id;"map-layer"===d?.type&&(a=d.mapLayerId);try{g=(await this.fetchAllLayersAndTables(b)).get(a)}catch{}}return g}async fetchAllLayersAndTables(a){return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path,
a)}async _fetchAllLayersAndTablesFromService(a,b){await this.load(b);this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const d=v.parse(a);a=await y.getOrCreateMapValue(this._allLayersAndTablesMap,d?.url.path,()=>p(r.join(d?.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(c=>{const g=new Map;for(const k of c.data.layers)g.set(k.id,k);return{result:g}},c=>({error:c})));q.throwIfAborted(b);if("result"in a)return a.result;throw a.error;
}};f.__decorate([h.property({readOnly:!0})],e.prototype,"capabilities",void 0);f.__decorate([t.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null);f.__decorate([h.property({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0);f.__decorate([h.property({type:B})],e.prototype,"fullExtent",void 0);f.__decorate([h.property(w.id)],e.prototype,"id",void 0);f.__decorate([h.property({type:Boolean,
json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0);f.__decorate([h.property(w.popupEnabled)],e.prototype,"popupEnabled",void 0);f.__decorate([h.property({type:C})],e.prototype,"spatialReference",void 0);f.__decorate([h.property({readOnly:!0})],e.prototype,"version",void 0);f.__decorate([t.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null);return e=
f.__decorate([A.subclass("esri.layers.mixins.ArcGISMapService")],e)};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});