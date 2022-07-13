import { B as e, C as d, jo as o, w, ph as v, p8 as p, R as k, D as n, jl as r, h as L, z as j, as as f$1, aW as a, l3 as O, bC as s, M as m$1, s as s$1, kP as r$1, a8 as m$2, r as r$2, cF as d$1, qb as s$2, m4 as c, Z as s$3, qc as c$1, q6 as b, j as j$1, jR as I, qd as e$1, p6 as d$2, d as b$1, y as y$1, cv as t, cw as c$2, nM as i, n8 as y$2, qe as p$1, nq as T, py as j$2, cr as r$3, kj as J$1, pB as p$2, p7 as n$1, K as K$1, jq as v$1, gC as s$4, pE as n$2, hW as t$1, kT as p$3, aP as l, gx as U, qf as n$3 } from './_virtual_index-fc1e0009.js';
import { t as t$2 } from './sublayerUtils-cad23a30.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const y=y=>{let d$1=class extends y{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0;}readCapabilities(e,r$1){const s=r$1.capabilities&&r$1.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!s)return {operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const t=this.type,i=s.includes("data"),p=s.includes("query"),a=s.includes("map"),l=!!r$1.exportTilesAllowed,n=s.includes("tilemap"),u="tile"!==t&&!!r$1.supportsDynamicLayers,c="tile"!==t&&(!r$1.tileInfo||u),y="tile"!==t&&(!r$1.tileInfo||u),d="tile"!==t,m=r$1.cimVersion&&r.parse(r$1.cimVersion),h=m?.since(1,4)??!1,b=m?.since(2,0)??!1;return {operations:{supportsExportMap:a,supportsExportTiles:l,supportsIdentify:p,supportsQuery:i,supportsTileMap:n},exportMap:a?{supportsArcadeExpressionForLabeling:h,supportsSublayersChanges:d,supportsDynamicLayers:u,supportsSublayerVisibility:c,supportsSublayerDefinitionExpression:y,supportsCIMSymbols:b}:null,exportTiles:l?{maxExportTilesCount:+r$1.maxExportTilesCount}:null}}readVersion(e,r){let s=r.currentVersion;return s||(s=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=L(j(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return {result:e.data}}),(e=>({error:e}))));const o=await this._allLayersAndTablesPromise;if(f$1(e),"result"in o)return o.result;throw o.error}};return e([d({readOnly:!0})],d$1.prototype,"capabilities",void 0),e([o("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],d$1.prototype,"readCapabilities",null),e([d({json:{read:{source:"copyrightText"}}})],d$1.prototype,"copyright",void 0),e([d({type:w})],d$1.prototype,"fullExtent",void 0),e([d(v)],d$1.prototype,"id",void 0),e([d({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],d$1.prototype,"legendEnabled",void 0),e([d(p)],d$1.prototype,"popupEnabled",void 0),e([d({type:k})],d$1.prototype,"spatialReference",void 0),e([d({readOnly:!0})],d$1.prototype,"version",void 0),e([o("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],d$1.prototype,"readVersion",null),d$1=e([n("esri.layers.mixins.ArcGISMapService")],d$1),d$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var $;function J(e){return e&&"esriSMS"===e.type}function B(e,r,t){const i=this.originIdOf(r)>=t$1(t.origin);return {ignoreOrigin:!0,allowNull:i,enabled:!!t&&("map-image"===t.layer?.type&&(t.writeSublayerStructure||i))}}function Q(e,r,t){return {enabled:!!t&&("tile"===t.layer?.type&&this._isOverridden(r))}}function G(e,r,t){return {ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function H(e,r,t){return {ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=t$1(t.origin))}}let K=0;const W=new Set;W.add("layer"),W.add("parent"),W.add("loaded"),W.add("loadStatus"),W.add("loadError"),W.add("loadWarnings");let X=$=class extends(a(O(s(m$1)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null;}async load(e){return this.addResolvingPromise((async()=>{if(!this.layer&&!this.url)throw new s$1("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let r=null;if(!this.layer||this.originIdOf("url")>r$1.SERVICE||"data-layer"===this.source?.type){r=(await L(this.url,{responseType:"json",query:{f:"json"},...e})).data;}else {let t=this.id;"map-layer"===this.source?.type&&(t=this.source.mapLayerId),r=await this.layer.fetchSublayerInfo(t,e);}r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"}));})()),this}readCapabilities(e,r){const t=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[],i=this.url?m$2(this.url):null,o=t.includes(r$2(i)&&"MapServer"===i.serverType?"data":"query");return {exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:o}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e);}get fieldsIndex(){return new d$1(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e);}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeGlobalID"===t.type)return t.name}get id(){const e=this._get("id");return e??K++}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e);}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}});}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e);}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}set listMode(e){this._set("listMode",e);}set minScale(e){this._setAndNotifyLayer("minScale",e);}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e);}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return {minScale:e,maxScale:r}}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeOID"===t.type)return t.name}set opacity(e){this._setAndNotifyLayer("opacity",e);}readOpacity(e,r){const t=r.layerDefinition;return 1-.01*(null!=t.transparency?t.transparency:t.drawingInfo.transparency)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}};}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=s$2(this.parent.id):r.parentLayerId=-1;}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if(c(r)){s$3.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e);}get source(){return this._get("source")||new c$1({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e);}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e);}castSublayers(e){return b(j$1.ofType($),e)}writeSublayers(e,r,t){this.get("sublayers.length")&&(r[t]=this.sublayers.map((e=>e.id)).toArray().reverse());}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name);}return null}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===r?.type)return `${e.path}/${r.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return `${e.path}/dynamicLayer?${I(t)}`}set url(e){e?this._override("url",e):this._clearOverride("url");}set visible(e){this._setAndNotifyLayer("visible",e);}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e;}clone(){const{store:e}=e$1(this),r=new $;return e$1(r).store=e.clone(W),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return d$2(this,e)}createQuery(){return new b$1({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const e=this.layer?.parsedUrl,r=new((await import('./_virtual_index-fc1e0009.js').then(function (n) { return n.rg; })).default)({url:e.path});return e&&this.source&&("map-layer"===this.source.type?r.layerId=this.source.mapLayerId:r.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(r.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(r.definitionExpression=this.definitionExpression),this.floorInfo&&(r.floorInfo=y$1(this.floorInfo)),this.originIdOf("labelingInfo")>r$1.SERVICE&&(r.labelingInfo=y$1(this.labelingInfo)),this.originIdOf("labelsVisible")>r$1.DEFAULTS&&(r.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>r$1.DEFAULTS&&(r.legendEnabled=this.legendEnabled),this.originIdOf("visible")>r$1.DEFAULTS&&(r.visible=this.visible),this.originIdOf("minScale")>r$1.DEFAULTS&&(r.minScale=this.minScale),this.originIdOf("maxScale")>r$1.DEFAULTS&&(r.maxScale=this.maxScale),this.originIdOf("opacity")>r$1.DEFAULTS&&(r.opacity=this.opacity),this.originIdOf("popupTemplate")>r$1.DEFAULTS&&(r.popupTemplate=y$1(this.popupTemplate)),this.originIdOf("renderer")>r$1.SERVICE&&(r.renderer=y$1(this.renderer)),"data-layer"===this.source?.type&&(r.dynamicDataSource=this.source.clone()),this.originIdOf("title")>r$1.DEFAULTS&&(r.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>r$1.DEFAULTS&&(r.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>r$1.DEFAULTS&&(r.customParameters=this.layer.customParameters),r}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;let o=null;return t.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===i.toString()&&(o=e),!!o)})),o}getFieldDomain(e,r){const t=r&&r.feature,i=this.getFeatureType(t);if(i){const r=i.domains&&i.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),r){if(await this.load(),!this.capabilities?.operations?.supportsQuery)throw new s$1("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:t},{default:i}]=await Promise.all([import('./_virtual_index-fc1e0009.js').then(function (n) { return n.rj; }),import('./_virtual_index-fc1e0009.js').then(function (n) { return n.rf; })]),o=await t(this.url,b$1.from(e),this.layer?.spatialReference??null,{...r,query:{...this.layer?.customParameters,token:this.layer?.apiKey}}),a=i.fromJSON(o.data);if(a?.features)for(const s of a.features)s.sourceLayer=this;return a}toExportImageJSON(e){const r={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},t$1=t(e,this.definitionExpression);r$2(t$1)&&(r.definitionExpression=t$1);const i$1=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),o=Object.keys(i$1).some((e=>i$1[e]>r$1.SERVICE));if(o){const e=r.drawingInfo={};if(i$1.renderer>r$1.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),i$1.labelsVisible>r$1.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i$1.labelingInfo>r$1.SERVICE){!this.loaded&&this.labelingInfo.some((e=>!e.labelPlacement))&&s$3.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let r=this.labelingInfo;r$2(this.geometryType)&&(r=c$2(this.labelingInfo,i.toJSON(this.geometryType))),e.labelingInfo=r.filter((e=>e.labelPlacement)).map((e=>e.toJSON({origin:"service",layer:this.layer}))),e.showLabels=!0;}i$1.opacity>r$1.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer);}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0]);}));}_forEachSimpleMarkerSymbols(e,r){if(e){const t="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of t)J(e.symbol)&&r(e.symbol);"symbol"in e&&J(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&J(e.defaultSymbol)&&r(e.defaultSymbol);}}_setAndNotifyLayer(e,r){const t=this.layer,i=this._get(e);let o,a;switch(e){case"definitionExpression":case"floorInfo":o="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":o="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":o="supportsDynamicLayers",a="supportsModification";}const s=e$1(this).getDefaultOrigin();if("service"!==s){if(o&&!1===this.get(`layer.capabilities.exportMap.${o}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${o}'`);if(a&&!1===this.get(`capabilities.exportMap.${a}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${a}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==s&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()");}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(s$3.getLogger(this.declaredClass).error(new s$1("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault());}))]));}_logLockedError(e,r){s$3.getLogger(this.declaredClass).error(new s$1("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}));}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};X.test={isMapImageLayerOverridePolicy:e=>e===G||e===B,isTileImageLayerOverridePolicy:e=>e===Q},e([d({readOnly:!0})],X.prototype,"capabilities",void 0),e([o("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],X.prototype,"readCapabilities",null),e([d({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:B}}})],X.prototype,"definitionExpression",null),e([d({type:[y$2],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],X.prototype,"fields",void 0),e([d({readOnly:!0})],X.prototype,"fieldsIndex",null),e([d({type:p$1,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:B},origins:{"web-scene":{read:!1,write:!1}}}})],X.prototype,"floorInfo",null),e([d({type:w,json:{read:{source:"layerDefinition.extent"}}})],X.prototype,"fullExtent",void 0),e([d({type:i.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:i.read}}}}})],X.prototype,"geometryType",void 0),e([d({type:String})],X.prototype,"globalIdField",void 0),e([o("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],X.prototype,"readGlobalIdFieldFromService",null),e([d({type:T,json:{write:{ignoreOrigin:!0}}})],X.prototype,"id",null),e([d({value:null,type:[j$2],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:G}}})],X.prototype,"labelingInfo",null),e([r$3("labelingInfo")],X.prototype,"writeLabelingInfo",null),e([d({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:G}}})],X.prototype,"labelsVisible",null),e([d({value:null})],X.prototype,"layer",null),e([d({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:H}}})],X.prototype,"legendEnabled",void 0),e([d({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],X.prototype,"listMode",null),e([d({type:Number,value:0,json:{write:{overridePolicy:G}}})],X.prototype,"minScale",null),e([o("minScale",["minScale","layerDefinition.minScale"])],X.prototype,"readMinScale",null),e([d({type:Number,value:0,json:{write:{overridePolicy:G}}})],X.prototype,"maxScale",null),e([o("maxScale",["maxScale","layerDefinition.maxScale"])],X.prototype,"readMaxScale",null),e([d({readOnly:!0})],X.prototype,"effectiveScaleRange",null),e([d({type:String})],X.prototype,"objectIdField",void 0),e([o("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],X.prototype,"readObjectIdFieldFromService",null),e([d({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:G}}})],X.prototype,"opacity",null),e([o("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],X.prototype,"readOpacity",null),e([r$3("opacity")],X.prototype,"writeOpacity",null),e([d({json:{type:T,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:G}}})],X.prototype,"parent",void 0),e([r$3("parent")],X.prototype,"writeParent",null),e([d({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:H,writer(e,r,t){r[t]=!e;}}}})],X.prototype,"popupEnabled",void 0),e([d({type:J$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:H}}})],X.prototype,"popupTemplate",void 0),e([d({readOnly:!0})],X.prototype,"defaultPopupTemplate",null),e([d({types:p$2,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:G},origins:{"web-scene":{types:n$1,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:G}}}}})],X.prototype,"renderer",null),e([d({types:{key:"type",base:null,typeMap:{"data-layer":K$1,"map-layer":c$1}},cast(e){if(e){if("mapLayerId"in e)return v$1(c$1,e);if("dataSource"in e)return v$1(K$1,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:G}}})],X.prototype,"source",null),e([d()],X.prototype,"sourceJSON",void 0),e([d({value:null,json:{type:[T],write:{target:"subLayerIds",allowNull:!0,overridePolicy:G}}})],X.prototype,"sublayers",null),e([s$4("sublayers")],X.prototype,"castSublayers",null),e([r$3("sublayers")],X.prototype,"writeSublayers",null),e([d({type:String,json:{name:"name",write:{overridePolicy:H}}})],X.prototype,"title",void 0),e([d({type:String})],X.prototype,"typeIdField",void 0),e([o("typeIdField",["layerDefinition.typeIdField"])],X.prototype,"readTypeIdField",null),e([d({type:[n$2],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],X.prototype,"types",void 0),e([d({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:Q}}})],X.prototype,"url",null),e([d({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:G}}})],X.prototype,"visible",null),e([r$3("visible")],X.prototype,"writeVisible",null),X=$=e([n("esri.layers.support.Sublayer")],X);const z=X;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const f=s$3.getLogger("esri.layers.TileLayer");function h(e,r){const s=[],t={};return e?(e.forEach((e=>{const o=new z;if(o.read(e,r),t[o.id]=o,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(o);}else s.unshift(o);})),s):s}const S=j$1.ofType(z);function m(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&m(e.sublayers,r);}));}const E=o=>{let E=class extends o{constructor(...e){super(...e),this.allSublayers=new p$3({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[r$1.SERVICE]:{},[r$1.PORTAL_ITEM]:{},[r$1.WEB_SCENE]:{},[r$1.WEB_MAP]:{}},this.addHandles(l((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),U));}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:s}=this,t=t$1(r.origin);if(t<r$1.SERVICE)return;if(s[t]={context:r,visibleLayers:e.visibleLayers||s[t].visibleLayers,layers:e.layers||s[t].layers},t>r$1.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:o,origin:a}=this.createSublayersForOrigin("web-document"),i=e$1(this);i.setDefaultOrigin(a),this._set("sublayers",new S(o)),i.setDefaultOrigin("user");}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=t$1("web-document"===e?"web-map":e);let s=r$1.SERVICE,t=this.sublayersSourceJSON[r$1.SERVICE].layers,o=this.sublayersSourceJSON[r$1.SERVICE].context,a=null;const i=[r$1.PORTAL_ITEM,r$1.WEB_SCENE,r$1.WEB_MAP].filter((e=>e<=r));for(const y of i){const e=this.sublayersSourceJSON[y];t$2(e.layers)&&(s=y,t=e.layers,o=e.context,e.visibleLayers&&(a={visibleLayers:e.visibleLayers,context:e.context}));}const l=[r$1.PORTAL_ITEM,r$1.WEB_SCENE,r$1.WEB_MAP].filter((e=>e>s&&e<=r));let n=null;for(const y of l){const{layers:e,visibleLayers:r,context:s}=this.sublayersSourceJSON[y];e&&(n={layers:e,context:s}),r&&(a={visibleLayers:r,context:s});}const u=h(t,o),p=new Map,f=new Set;if(n)for(const y of n.layers)p.set(y.id,y);if(a)for(const y of a.visibleLayers)f.add(y);return m(u,(e=>{n&&e.read(p.get(e.id),n.context),a&&e.read({defaultVisibility:f.has(e.id)},a.context);})),{origin:n$3(s),sublayers:new S({items:u})}}read(e,r){super.read(e,r),this.readSublayers(e,r);}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this;})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{f.error(new s$1("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault();})),"sublayers-owner"));}};return e([d({readOnly:!0})],E.prototype,"allSublayers",void 0),e([d({readOnly:!0,type:j$1.ofType(z)})],E.prototype,"serviceSublayers",void 0),e([d({value:null,type:S,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],E.prototype,"sublayers",void 0),e([d({readOnly:!0})],E.prototype,"sublayersSourceJSON",void 0),E=e([n("esri.layers.mixins.SublayersOwner")],E),E};

export { E, y, z };
