import { j as e, y as y$1, c6 as e$1, bz as M, g1 as b$1, fT as c, aP as k$1, k as i, gW as r, U as U$1, c5 as U$2, z as h$1, n, d as a, cl as l, aL as r$1, fF as f$1, s, bM as e$2, gX as a$1, gY as c$1, gZ as a$2, cx as d$1, b$ as L, g_ as T, cm as C$1, gc as e$3, fQ as a$3, cF as R$1, b3 as y$2, cz as y$3, fn as N, g$ as E, bi as o, dA as M$1, h0 as m, fS as n$1, h1 as K, gk as y$4, ct as c$2, h2 as u, gG as t, fZ as l$1, h3 as n$2 } from './_virtual_index-2683c931.js';
import { i as i$1 } from './sublayerUtils-a5b6b99d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const y=y=>{let m=class extends y{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null;}readCapabilities(e,r$1){const s=r$1.capabilities&&r$1.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!s)return {operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const t=this.type,o=-1!==s.indexOf("query"),i=-1!==s.indexOf("map"),p=!!r$1.exportTilesAllowed,a=-1!==s.indexOf("tilemap"),l="tile"!==t&&!!r$1.supportsDynamicLayers,u="tile"!==t&&(!r$1.tileInfo||l),c="tile"!==t&&(!r$1.tileInfo||l),y="tile"!==t,m=!!r$1.cimVersion&&r.parse(r$1.cimVersion).since(1,4);return {operations:{supportsQuery:o,supportsExportMap:i,supportsExportTiles:p,supportsTileMap:a},exportMap:i?{supportsArcadeExpressionForLabeling:m,supportsSublayersChanges:y,supportsDynamicLayers:l,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:c}:null,exportTiles:p?{maxExportTilesCount:+r$1.maxExportTilesCount}:null}}readVersion(e,r){let s=r.currentVersion;return s||(s=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=U$1(U$2(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return {result:e.data}}),(e=>({error:e}))));const r=await this._allLayersAndTablesPromise;if(h$1(e),"result"in r)return r.result;throw r.error}};return e([y$1({readOnly:!0})],m.prototype,"capabilities",void 0),e([e$1("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],m.prototype,"readCapabilities",null),e([y$1({json:{read:{source:"copyrightText"}}})],m.prototype,"copyright",void 0),e([y$1({type:M})],m.prototype,"fullExtent",void 0),e([y$1(b$1)],m.prototype,"id",void 0),e([y$1({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],m.prototype,"legendEnabled",void 0),e([y$1(c)],m.prototype,"popupEnabled",void 0),e([y$1({type:k$1})],m.prototype,"spatialReference",void 0),e([y$1()],m.prototype,"version",void 0),e([e$1("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],m.prototype,"readVersion",null),m=e([i("esri.layers.mixins.ArcGISMapService")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var k;function A(e){return e&&"esriSMS"===e.type}function U(e,r,i){var t$1;return {ignoreOrigin:!0,enabled:!!i&&("map-image"===(null==(t$1=i.layer)?void 0:t$1.type)&&(i.writeSublayerStructure||this.originIdOf(r)>=t(i.origin)))}}function q(e,r,i){var t;return {enabled:!!i&&("tile"===(null==(t=i.layer)?void 0:t.type)&&this._isOverridden(r))}}function C(e,r,i){return {ignoreOrigin:!0,enabled:i&&i.writeSublayerStructure||!1}}function $(e,r,i){return {ignoreOrigin:!0,enabled:!!i&&(i.writeSublayerStructure||this.originIdOf(r)>=t(i.origin))}}const J=n.getLogger("esri.layers.support.Sublayer");let R=0;const B=new Set;B.add("layer"),B.add("parent"),B.add("loaded"),B.add("loadStatus"),B.add("loadError"),B.add("loadWarnings");let Q=k=class extends(a(l(r$1(f$1)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null;}async load(e){return this.addResolvingPromise((async()=>{var r;if(!this.layer&&!this.url)throw new s("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let i=null;if(!this.layer||this.originIdOf("url")>2||"data-layer"===(null==(r=this.source)?void 0:r.type)){i=(await U$1(this.url,{responseType:"json",query:{f:"json"},...e})).data;}else {var t;let r=this.id;"map-layer"===(null==(t=this.source)?void 0:t.type)&&(r=this.source.mapLayerId),i=await this.layer.fetchSublayerInfo(r,e);}i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service"}));})()),this}readCapabilities(e,r){const i=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[];return {exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:-1!==i.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e);}get fieldsIndex(){return new e$2(this.fields||[])}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const i of r.fields)if("esriFieldTypeGlobalID"===i.type)return i.name}get id(){const e=this._get("id");return null==e?R++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e);}writeLabelingInfo(e,r,i,t){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},t)))}});}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e);}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e));}set listMode(e){this._set("listMode",e);}set minScale(e){this._setAndNotifyLayer("minScale",e);}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e);}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const i of r.fields)if("esriFieldTypeOID"===i.type)return i.name}set opacity(e){this._setAndNotifyLayer("opacity",e);}readOpacity(e,r){const i=r.layerDefinition;return 1-.01*(null!=i.transparency?i.transparency:i.drawingInfo.transparency)}writeOpacity(e,r,i,t){r.layerDefinition={drawingInfo:{transparency:100-100*e}};}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=a$1(this.parent.id):r.parentLayerId=-1;}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if(c$1(r)){J.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e);}get source(){return this._get("source")||new a$2({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e);}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e);}castSublayers(e){return d$1(L.ofType(k),e)}writeSublayers(e,r,i){this.get("sublayers.length")&&(r[i]=this.sublayers.map((e=>e.id)).toArray().reverse());}readTypeIdField(e,r){const i=(r=r.layerDefinition||r).typeIdField;if(i){const e=T(r.fields,i);if(e)return e.name}return null}get url(){var e,r;const i=null!=(e=null==(r=this.layer)?void 0:r.parsedUrl)?e:this._lastParsedUrl,t=this.source;if(!i)return null;if(this._lastParsedUrl=i,"map-layer"===(null==t?void 0:t.type))return `${i.path}/${t.mapLayerId}`;const o={layer:JSON.stringify({source:this.source})};return `${i.path}/dynamicLayer?${C$1(o)}`}set url(e){e?this._override("url",e):this._clearOverride("url");}set visible(e){this._setAndNotifyLayer("visible",e);}writeVisible(e,r,i,t){r[i]=this.getAtOrigin("defaultVisibility","service")||e;}clone(){const{store:e}=e$3(this),r=new k;return e$3(r).store=e.clone(B),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return a$3(this,e)}createQuery(){return new R$1({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,i;if(this.hasOwnProperty("sublayers"))return null;const t=null==(e=this.layer)?void 0:e.parsedUrl,o=new((await import('./_virtual_index-2683c931.js').then(function (n) { return n.im; })).default)({url:t.path});return t&&this.source&&("map-layer"===this.source.type?o.layerId=this.source.mapLayerId:o.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(o.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(o.definitionExpression=this.definitionExpression),this.originIdOf("labelingInfo")>2&&(o.labelingInfo=y$2(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(o.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(o.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(o.visible=this.visible),this.originIdOf("minScale")>0&&(o.minScale=this.minScale),this.originIdOf("maxScale")>0&&(o.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(o.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(o.popupTemplate=y$2(this.popupTemplate)),this.originIdOf("renderer")>2&&(o.renderer=y$2(this.renderer)),"data-layer"===(null==(i=this.source)?void 0:i.type)&&(o.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(o.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(o.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(o.customParameters=this.layer.customParameters),o}getFeatureType(e){const{typeIdField:r,types:i}=this;if(!r||!e)return null;const t=e.attributes?e.attributes[r]:void 0;if(null==t)return null;let o=null;return i.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===t.toString()&&(o=e),!!o)})),o}getFieldDomain(e,r){const i=r&&r.feature,t=this.getFeatureType(i);if(t){const r=t.domains&&t.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}queryFeatures(e=this.createQuery(),r){return this.load().then((()=>{if(!this.get("capabilities.operations.supportsQuery"))throw new s("Sublayer.queryFeatures","this layer doesn't support queries.");return Promise.all([import('./_virtual_index-2683c931.js').then(function (n) { return n.ik; }),import('./_virtual_index-2683c931.js').then(function (n) { return n.ij; })])})).then((([{executeQuery:i},{default:t}])=>i(this.url,R$1.from(e),this.layer?this.layer.spatialReference:null,{...r,query:{...this.layer.customParameters}}).then((e=>t.fromJSON(e.data))))).then((e=>(null!=e&&e.features&&e.features.forEach((e=>{e.sourceLayer=this;})),e)))}toExportImageJSON(){var e;const r={id:this.id,source:(null==(e=this.source)?void 0:e.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};this.definitionExpression&&(r.definitionExpression=this.definitionExpression);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{});if(Object.keys(i).some((e=>i[e]>2))){const e=r.drawingInfo={};i.renderer>2&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>2&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>2&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),i.opacity>2&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer);}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0]);}));}_forEachSimpleMarkerSymbols(e,r){if(e){const i="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of i)A(e.symbol)&&r(e.symbol);"symbol"in e&&A(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&A(e.defaultSymbol)&&r(e.defaultSymbol);}}_setAndNotifyLayer(e,r){const i=this.layer,t=this._get(e);let o,s;switch(e){case"definitionExpression":o="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":o="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":o="supportsDynamicLayers",s="supportsModification";}const a=e$3(this).getDefaultOrigin();if("service"!==a){if(o&&!1===this.get(`layer.capabilities.exportMap.${o}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${o}'`);if(s&&!1===this.get(`capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${s}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==a&&t!==r&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()");}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer;})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(J.error(new s("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault());}))]));}_logLockedError(e,r){J.error(new s("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}));}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};Q.test={isMapImageLayerOverridePolicy:e=>e===C||e===U,isTileImageLayerOverridePolicy:e=>e===q},e([y$1({readOnly:!0})],Q.prototype,"capabilities",void 0),e([e$1("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],Q.prototype,"readCapabilities",null),e([y$1({type:String,value:null,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression",overridePolicy:U}}})],Q.prototype,"definitionExpression",null),e([y$1({type:[y$3],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],Q.prototype,"fields",void 0),e([y$1({readOnly:!0})],Q.prototype,"fieldsIndex",null),e([y$1({type:M,json:{read:{source:"layerDefinition.extent"}}})],Q.prototype,"fullExtent",void 0),e([y$1({type:String})],Q.prototype,"globalIdField",void 0),e([e$1("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Q.prototype,"readGlobalIdFieldFromService",null),e([y$1({type:N,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"id",null),e([y$1({value:null,type:[E],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:C}}})],Q.prototype,"labelingInfo",null),e([o("labelingInfo")],Q.prototype,"writeLabelingInfo",null),e([y$1({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:C}}})],Q.prototype,"labelsVisible",null),e([y$1({value:null})],Q.prototype,"layer",null),e([y$1({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:$}}})],Q.prototype,"legendEnabled",void 0),e([y$1({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],Q.prototype,"listMode",null),e([y$1({type:Number,value:0,json:{write:{overridePolicy:C}}})],Q.prototype,"minScale",null),e([e$1("minScale",["minScale","layerDefinition.minScale"])],Q.prototype,"readMinScale",null),e([y$1({type:Number,value:0,json:{write:{overridePolicy:C}}})],Q.prototype,"maxScale",null),e([e$1("maxScale",["maxScale","layerDefinition.maxScale"])],Q.prototype,"readMaxScale",null),e([y$1({type:String})],Q.prototype,"objectIdField",void 0),e([e$1("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Q.prototype,"readObjectIdFieldFromService",null),e([y$1({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:C}}})],Q.prototype,"opacity",null),e([e$1("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],Q.prototype,"readOpacity",null),e([o("opacity")],Q.prototype,"writeOpacity",null),e([y$1({json:{type:N,write:{target:"parentLayerId",allowNull:!0,overridePolicy:C}}})],Q.prototype,"parent",void 0),e([o("parent")],Q.prototype,"writeParent",null),e([y$1({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:$,writer(e,r,i){r[i]=!e;}}}})],Q.prototype,"popupEnabled",void 0),e([y$1({type:M$1,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:$}}})],Q.prototype,"popupTemplate",void 0),e([y$1({readOnly:!0})],Q.prototype,"defaultPopupTemplate",null),e([y$1({types:m,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:C},origins:{"web-scene":{types:n$1,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:C}}}}})],Q.prototype,"renderer",null),e([y$1({types:{key:"type",base:null,typeMap:{"data-layer":K,"map-layer":a$2}},cast(e){if(e){if("mapLayerId"in e)return y$4(a$2,e);if("dataSource"in e)return y$4(K,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:C}}})],Q.prototype,"source",null),e([y$1()],Q.prototype,"sourceJSON",void 0),e([y$1({value:null,json:{type:[N],write:{target:"subLayerIds",allowNull:!0,overridePolicy:C}}})],Q.prototype,"sublayers",null),e([c$2("sublayers")],Q.prototype,"castSublayers",null),e([o("sublayers")],Q.prototype,"writeSublayers",null),e([y$1({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:$}}})],Q.prototype,"title",void 0),e([y$1({type:String})],Q.prototype,"typeIdField",void 0),e([e$1("typeIdField",["layerDefinition.typeIdField"])],Q.prototype,"readTypeIdField",null),e([y$1({type:[u],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],Q.prototype,"types",void 0),e([y$1({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:q}}})],Q.prototype,"url",null),e([y$1({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:C}}})],Q.prototype,"visible",null),e([o("visible")],Q.prototype,"writeVisible",null),Q=k=e([i("esri.layers.support.Sublayer")],Q);var G=Q;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const b=n.getLogger("esri.layers.TileLayer");function p(e,r){const s=[],t={};return e?(e.forEach((e=>{const o=new G;if(o.read(e,r),t[o.id]=o,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(o);}else s.unshift(o);})),s):s}const d=L.ofType(G);function f(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&f(e.sublayers,r);}));}const h=r=>{let h=class extends r{constructor(...e){super(...e),this.allSublayers=new l$1({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.watch("sublayers",((e,r)=>this._handleSublayersChange(e,r)),!0);}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:t$1}=this,o=t(r.origin);if(o<2)return;if(t$1[o]={context:r,visibleLayers:e.visibleLayers||t$1[o].visibleLayers,layers:e.layers||t$1[o].layers},o>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:a,origin:l}=this.createSublayersForOrigin("web-document"),n=e$3(this);n.setDefaultOrigin(l),this._set("sublayers",new d(a)),n.setDefaultOrigin("user");}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=t("web-document"===e?"web-map":e);let s=2,t$1=this.sublayersSourceJSON[2].layers,o=this.sublayersSourceJSON[2].context,a=null;const n=[3,4,5].filter((e=>e<=r));for(const i of n){const e=this.sublayersSourceJSON[i];i$1(e.layers)&&(s=i,t$1=e.layers,o=e.context,e.visibleLayers&&(a={visibleLayers:e.visibleLayers,context:e.context}));}const u=[3,4,5].filter((e=>e>s&&e<=r));let y=null;for(const i of u){const{layers:e,visibleLayers:r,context:s}=this.sublayersSourceJSON[i];e&&(y={layers:e,context:s}),r&&(a={visibleLayers:r,context:s});}const b=p(t$1,o),h=new Map,m=new Set;if(y)for(const i of y.layers)h.set(i.id,i);if(a)for(const i of a.visibleLayers)m.add(i);return f(b,(e=>{y&&e.read(h.get(e.id),y.context),a&&e.read({defaultVisibility:m.has(e.id)},a.context);})),{origin:n$2(s),sublayers:new d({items:b})}}read(e,r){super.read(e,r),this.readSublayers(e,r);}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null;})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this;})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this;})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null;}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{b.error(new s("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault();})),"sublayers-owner"));}};return e([y$1({readOnly:!0})],h.prototype,"allSublayers",void 0),e([y$1({readOnly:!0,type:L.ofType(G)})],h.prototype,"serviceSublayers",void 0),e([y$1({value:null,type:d,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],h.prototype,"sublayers",void 0),e([y$1({readOnly:!0})],h.prototype,"sublayersSourceJSON",void 0),h=e([i("esri.layers.mixins.SublayersOwner")],h),h};

export { G, h, y };
