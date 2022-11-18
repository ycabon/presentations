"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2855,4889],{88068:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var o=r(43697),i=(r(66577),r(51773)),n=(r(16050),r(12501),r(28756),r(92271),r(72529),r(5499),r(84382),r(81571),r(91423),r(32400)),s=r(16453),a=r(5600),l=(r(67676),r(75215),r(52011)),p=r(86973),u=r(87085),c=r(20102),d=r(83379),y=r(70586),f=r(16467),m=r(74889),h=r(82971);let g=class extends d.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:r,supportedCrs:o},layer:{apiKey:i,customParameters:n,effectiveMaxRecordCount:s}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:s,queryParameters:{apiKey:i,customParameters:n},spatialReference:r,supportedCrs:o}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>m.default.fromJSON(e)))}queryFeaturesJSON(e,t={}){const r=this.getSource();return this.load(t).then((()=>(0,f.yN)(r,e,t)))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}_conformsToType(e,t){const r=new RegExp(`^${t}$`,"i");return e.conformsTo.some((e=>r.test(e)))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){return e?.components?.parameters?.limit?.schema?.maximum??e?.components?.parameters?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const t=e.storageCrs??f.$9,r=(0,f.d)(t);return(0,y.Wi)(r)?h.Z.WGS84:new h.Z({wkid:r})}_getSupportedSpatialReferences(e,t){const r="#/crs",o=e.crs??[f.$9],i=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs):o,n=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((e=>!n.test(e)))}async _loadOGCServices(e,t){const r=(0,y.pC)(t)?t.signal:null,{apiKey:o,collectionId:i,customParameters:n,fields:s,geometryType:a,hasZ:l,objectIdField:u,timeInfo:d,url:m}=e,h={fields:s?.map((e=>e.toJSON())),geometryType:p.P$.toJSON(a),hasZ:l,objectIdField:u,timeInfo:d?.toJSON()},g={apiKey:o,customParameters:n,signal:r},w=await(0,f.gp)(m,g),[S,b]=await Promise.all([(0,f.G4)(w,g),(0,f.j)(w,g)]);if(!this._conformsToType(S,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new c.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const C=b.collections.find((e=>e.id===i));if(!C)throw new c.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const v=this._conformsToType(S,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,f.eS)(w,g):null,F=await(0,f.w9)(C,h,g),x=this._getMaxRecordCount(v),T=this._getCapabilities(F.hasZ,x),_=this._getStorageSpatialReference(C).toJSON(),j=this._getSupportedSpatialReferences(C,b),R=new RegExp(`^${f.Lu}`,"i"),I={};for(const e of j){const t=(0,f.d)(e);(0,y.pC)(t)&&(I[t]||(I[t]=e.replace(R,"")))}this.featureDefinition={capabilities:T,collection:C,layerDefinition:F,spatialReference:_,supportedCrs:I}}};(0,o._)([(0,a.Cb)()],g.prototype,"featureDefinition",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],g.prototype,"layer",void 0),(0,o._)([(0,a.Cb)()],g.prototype,"type",void 0),g=(0,o._)([(0,l.j)("esri.layers.graphics.sources.OGCFeatureSource")],g);var w=r(54295),S=r(71612),b=r(17017),C=r(69637),v=r(6404),F=r(38009),x=r(68825),T=r(16859),_=r(34760),j=r(72965),R=r(28294),I=r(21506),P=r(16451),O=r(1231),Z=r(53518),G=r(35671),k=r(54306),D=r(30707),M=r(14165),E=r(32163),q=r(6570);const N=(0,Z.v)();let A=class extends((0,w.V)((0,b.N)((0,v.M)((0,C.b)((0,S.h)((0,x.c)((0,R.n)((0,j.M)((0,F.q)((0,T.I)((0,_.Q)((0,s.R)(u.Z))))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new g({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,G.YN)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,E.eZ)(this,e)}createQuery(){return new M.Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){let r,o=!1;const i=t?.feature?.attributes,n=this.typeIdField&&i?.[this.typeIdField];return null!=n&&this.types&&(o=this.types.some((t=>t.id==n&&(r=t.domains?.[e],"inherited"===r?.type&&(r=this._getLayerDomain(e)),!0)))),o||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(M.Z.from(e)||this.createQuery(),t))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,G.YN)(this.renderer,this.fieldsIndex),(0,G.UF)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,o._)([(0,a.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],A.prototype,"capabilities",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],A.prototype,"collectionId",void 0),(0,o._)([(0,a.Cb)({type:String})],A.prototype,"copyright",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],A.prototype,"defaultPopupTemplate",null),(0,o._)([(0,a.Cb)({type:String})],A.prototype,"definitionExpression",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],A.prototype,"description",void 0),(0,o._)([(0,a.Cb)({type:String})],A.prototype,"displayField",void 0),(0,o._)([(0,a.Cb)({type:Number})],A.prototype,"effectiveMaxRecordCount",null),(0,o._)([(0,a.Cb)(I.PV)],A.prototype,"elevationInfo",void 0),(0,o._)([(0,a.Cb)({type:[O.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],A.prototype,"fields",void 0),(0,o._)([(0,a.Cb)(N.fieldsIndex)],A.prototype,"fieldsIndex",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,type:q.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],A.prototype,"fullExtent",void 0),(0,o._)([(0,a.Cb)({type:p.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:p.Mk.read}}}}})],A.prototype,"geometryType",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],A.prototype,"hasZ",void 0),(0,o._)([(0,a.Cb)({type:Boolean,readOnly:!0})],A.prototype,"isTable",null),(0,o._)([(0,a.Cb)({type:[k.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:D.r},write:!0}}}})],A.prototype,"labelingInfo",void 0),(0,o._)([(0,a.Cb)(I.iR)],A.prototype,"labelsVisible",void 0),(0,o._)([(0,a.Cb)(I.rn)],A.prototype,"legendEnabled",void 0),(0,o._)([(0,a.Cb)({type:Number})],A.prototype,"maxRecordCount",void 0),(0,o._)([(0,a.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],A.prototype,"objectIdField",void 0),(0,o._)([(0,a.Cb)({type:["OGCFeatureLayer"]})],A.prototype,"operationalLayerType",void 0),(0,o._)([(0,a.Cb)(I.C_)],A.prototype,"popupEnabled",void 0),(0,o._)([(0,a.Cb)({type:i.Z,json:{name:"popupInfo",write:!0}})],A.prototype,"popupTemplate",void 0),(0,o._)([(0,a.Cb)({types:n.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:n.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],A.prototype,"renderer",null),(0,o._)([(0,a.Cb)(I.YI)],A.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],A.prototype,"source",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,type:h.Z,json:{origins:{service:{read:!0}}}})],A.prototype,"spatialReference",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],A.prototype,"title",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,readOnly:!0})],A.prototype,"typeIdField",void 0),(0,o._)([(0,a.Cb)({type:[P.Z]})],A.prototype,"types",void 0),(0,o._)([(0,a.Cb)(I.HQ)],A.prototype,"url",void 0),A=(0,o._)([(0,l.j)("esri.layers.OGCFeatureLayer")],A);const L=A},61159:(e,t,r)=>{r.d(t,{g:()=>o});const o={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},92722:(e,t,r)=>{r.d(t,{O3:()=>C,lG:()=>F,my:()=>v,q9:()=>l});var o=r(20102),i=r(70272),n=r(5428),s=r(35671);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function l(e){return a[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function c(e){for(const t of e)if(t.length>2)return!0;return!1}function d(e){let t=0;for(let r=0;r<e.length;r++){const o=e[r],i=e[(r+1)%e.length];t+=o[0]*i[1]-i[0]*o[1]}return t<=0}function y(e){const t=e[0],r=e[e.length-1];return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]||e.push(t),e}function f(e,t,r){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,r){return g(e,t.coordinates,r),e}(e,t,r);case"MultiLineString":return function(e,t,r){for(const o of t.coordinates)g(e,o,r);return e}(e,t,r);case"MultiPolygon":return function(e,t,r){for(const o of t.coordinates){m(e,o[0],r);for(let t=1;t<o.length;t++)h(e,o[t],r)}return e}(e,t,r);case"Point":return function(e,t,r){return S(e,t.coordinates,r),e}(e,t,r);case"Polygon":return function(e,t,r){const o=t.coordinates;m(e,o[0],r);for(let t=1;t<o.length;t++)h(e,o[t],r);return e}(e,t,r)}}function m(e,t,r){const o=y(t);!function(e){return!d(e)}(o)?g(e,o,r):w(e,o,r)}function h(e,t,r){const o=y(t);!function(e){return d(e)}(o)?g(e,o,r):w(e,o,r)}function g(e,t,r){for(const o of t)S(e,o,r);e.lengths.push(t.length)}function w(e,t,r){for(let o=t.length-1;o>=0;o--)S(e,t[o],r);e.lengths.push(t.length)}function S(e,t,r){const[o,i,n]=t;e.coords.push(o,i),r.hasZ&&e.coords.push(n||0)}function b(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function C(e){if(!e)throw new o.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const r="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,i=new RegExp(".*(CRS84H?|4326)$","i");if(!r||!i.test(r))throw new o.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function v(e,t={}){const r=[],o=new Set,i=new Set;let n,a=!1,d=null,y=!1,{geometryType:f=null}=t,m=!1;for(const t of p(e)){const{geometry:e,properties:p,id:h}=t;if((!e||(f||(f=l(e.type)),l(e.type)===f))&&(a||(a=c(u(e))),y||(y=null!=h,y&&(n=typeof h,d=Object.keys(p).filter((e=>p[e]===h)))),y&&null!=h&&(d.length>1?d=d.filter((e=>p[e]===h)):1===d.length&&(d=p[d[0]]===h?d:[])),!m&&p)){let e=!0;for(const t in p){if(o.has(t))continue;const n=p[t];if(null==n){e=!1,i.add(t);continue}const a=b(n);"unknown"!==a?(i.delete(t),o.add(t),r.push({name:(0,s.q6)(t),alias:t,type:a})):i.add(t)}m=e}}const h=(0,s.q6)(1===d?.length&&d[0]||null);if(h)for(const e of r)if(e.name===h&&(0,s.H7)(e)){e.type="esriFieldTypeOID";break}return{fields:r,geometryType:f,hasZ:a,objectIdFieldName:h,objectIdFieldType:n,unknownFields:Array.from(i)}}function F(e,t){return Array.from(function*(e,t={}){const{geometryType:r,objectIdField:o}=t;for(const s of e){const{geometry:e,properties:a,id:p}=s;if(e&&l(e.type)!==r)continue;const u=a||{};let c=u[o]??null;o&&null!=p&&!u[o]&&(u[o]=c=p);const d=new i.u_(e?f(new n.Z,e,t):null,u,null,c);yield d}}(p(e),t))}},25278:(e,t,r)=>{r.d(t,{Dm:()=>u,Hq:()=>c,MS:()=>d,bU:()=>a});var o=r(80442),i=r(22974),n=r(61159),s=r(58333);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.I4:"esriGeometryPolyline"===e?s.ET:s.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function u(e,t){if((0,o.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const o=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new o}catch(r){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function d(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:n.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},54295:(e,t,r)=>{r.d(t,{V:()=>s});var o=r(43697),i=r(5600),n=(r(67676),r(75215),r(52011));const s=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,o._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,o._)([(0,n.j)("esri.layers.mixins.APIKeyMixin")],t),t}},68825:(e,t,r)=>{r.d(t,{c:()=>m});var o,i=r(43697),n=r(78286),s=r(5600),a=(r(67676),r(75215),r(52011)),l=r(35454),p=r(96674);const u=new l.X({asc:"ascending",desc:"descending"});let c=o=class extends p.wq{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new o({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),(0,i._)([(0,s.Cb)({type:u.apiValues,json:{read:u.read,write:u.write}})],c.prototype,"order",void 0),c=o=(0,i._)([(0,a.j)("esri.layers.support.OrderByInfo")],c);const d=c;function y(e,t,r){if(!e)return null;const o=e.find((e=>!!e.field));if(!o)return null;const i=new d;return i.read(o,r),[i]}function f(e,t,r,o){const i=e.find((e=>!!e.field));i&&(0,n.RB)(r,[i.toJSON()],t)}const m=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,i._)([(0,s.Cb)({type:[d],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:y},write:{target:"layerDefinition.orderBy",writer:f}}})],t.prototype,"orderBy",void 0),t=(0,i._)([(0,a.j)("esri.layers.mixins.OrderedLayer")],t),t}},16467:(e,t,r)=>{r.d(t,{$9:()=>w,G4:()=>C,Lu:()=>g,WW:()=>_,d:()=>x,eS:()=>F,gp:()=>v,j:()=>b,w9:()=>S,yN:()=>T}),r(66577);var o=r(3172),i=r(20102),n=r(92604),s=r(70586),a=r(8744),l=r(40488),p=r(98732),u=r(44876),c=r(92722),d=r(25278),y=r(99514),f=r(86719),m=r(82971);const h=n.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),g="http://www.opengis.net/def/crs/",w=`${g}OGC/1.3/CRS84`;async function S(e,t,r={},n=5){const{links:a}=e,l=O(a,"items","application/geo+json")||O(a,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.Wi)(l))throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:p}=await(0,o.default)(l.href,{signal:r.signal,query:{limit:n,...r.customParameters,token:r.apiKey},headers:{accept:"application/geo+json"}});await(0,c.O3)(p);const u=(0,c.my)(p,{geometryType:t.geometryType}),m=t.fields||u.fields||[],g=null!=t.hasZ?t.hasZ:u.hasZ,w=u.geometryType,S=t.objectIdField||u.objectIdFieldName||"OBJECTID";let b=t.timeInfo;const C=m.find((({name:e})=>e===S));if(C)C.editable=!1,C.nullable=!1;else{if(!u.objectIdFieldType)throw new i.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");m.unshift({name:S,alias:S,type:"number"===u.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(S!==u.objectIdFieldName){const e=m.find((({name:e})=>e===u.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}m===u.fields&&u.unknownFields.length>0&&h.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}});for(const e of m){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new i.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(!f.v.jsonValues.includes(e.type))throw new i.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(b){const e=new y.Z(m);if(b.startTimeField){const t=e.get(b.startTimeField);t?(b.startTimeField=t.name,t.type="esriFieldTypeDate"):b.startTimeField=null}if(b.endTimeField){const t=e.get(b.endTimeField);t?(b.endTimeField=t.name,t.type="esriFieldTypeDate"):b.endTimeField=null}if(b.trackIdField){const t=e.get(b.trackIdField);t?b.trackIdField=t.name:(b.trackIdField=null,h.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:b}}))}b.startTimeField||b.endTimeField||(h.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:b}}),b=null)}return{drawingInfo:w?(0,d.bU)(w):null,extent:P(e),geometryType:w,fields:m,hasZ:!!g,objectIdField:S,timeInfo:b}}async function b(e,t={}){const{links:r}=e,n=O(r,"data","application/json")||O(r,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,s.Wi)(n))throw new i.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:l,signal:p}=t,{data:u}=await(0,o.default)(n.href,{signal:p,headers:{accept:"application/json"},query:{...l,token:a}});return u}async function C(e,t={}){const{links:r}=e,n=O(r,"conformance","application/json")||O(r,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,s.Wi)(n))throw new i.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:l,signal:p}=t,{data:u}=await(0,o.default)(n.href,{signal:p,headers:{accept:"application/json"},query:{...l,token:a}});return u}async function v(e,t={}){const{apiKey:r,customParameters:i,signal:n}=t,{data:s}=await(0,o.default)(e,{signal:n,headers:{accept:"application/json"},query:{...i,token:r}});return s}async function F(e,t={}){const r="application/vnd.oai.openapi+json;version=3.0",i=O(e.links,"service-desc",r);if((0,s.Wi)(i))return h.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:n,customParameters:a,signal:l}=t,{data:p}=await(0,o.default)(i.href,{signal:l,headers:{accept:r},query:{...a,token:n}});return p}function x(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e)?.groups;if(!t)return null;const{authority:r,code:o}=t;switch(r.toLowerCase()){case"ogc":switch(o.toLowerCase()){case"crs27":return m.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return m.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(o,10);return Number.isNaN(e)?null:e}default:return null}}async function T(e,t,r){const o=await _(e,t,r);return(0,p.cn)(o)}async function _(e,t,r){const{collection:n,layerDefinition:d,maxRecordCount:y,queryParameters:{apiKey:f,customParameters:h},spatialReference:g,supportedCrs:w}=e,{links:S}=n,b=O(S,"items","application/geo+json")||O(S,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.Wi)(b))throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:C,num:v,start:F,timeExtent:x,where:T}=t;if(t.objectIds)throw new i.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const _=m.Z.fromJSON(g),R=(0,s.Pt)(t.outSpatialReference,_),P=R.isWGS84?null:j(R,w),Z=I(C,w),G=function(e){if((0,s.Wi)(e))return null;const{start:t,end:r}=e;return`${(0,s.pC)(t)?t.toISOString():".."}/${(0,s.pC)(r)?r.toISOString():".."}`}(x),k=(E=T,(0,s.Wi)(E)||!E||"1=1"===E?null:E),D=v??(null!=F&&void 0!==F?10:y),{data:M}=await(0,o.default)(b.href,{...r,query:{...h,...Z,crs:P,datetime:G,query:k,limit:D,startindex:F,token:f},headers:{accept:"application/geo+json"}});var E;let q=!1;M.links&&(q=!!M.links.find((e=>"next"===e.rel))),!q&&Number.isInteger(M.numberMatched)&&Number.isInteger(M.numberReturned)&&(q=M.numberReturned<M.numberMatched);const{fields:N,geometryType:A,hasZ:L,objectIdField:z}=d,W=(0,c.lG)(M,{geometryType:A,hasZ:L,objectIdField:z});if(!P&&R.isWebMercator)for(const e of W)if((0,s.pC)(e.geometry)){const t=(0,p.di)(e.geometry,A,L,!1);t.spatialReference=m.Z.WGS84,e.geometry=(0,p.GH)((0,l.iV)(t,R))}for(const e of W)e.objectId=e.attributes[z];const $=P||!P&&R.isWebMercator?R.toJSON():a.Zn,Q=new u.Z;return Q.exceededTransferLimit=q,Q.features=W,Q.fields=N,Q.geometryType=A,Q.hasZ=L,Q.objectIdFieldName=z,Q.spatialReference=$,Q}function j(e,t){const{isWebMercator:r,wkid:o}=e;if(!o)return null;const i=r?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return i?`${g}${i}`:null}function R(e){if((0,s.Wi)(e))return"";const{xmin:t,ymin:r,xmax:o,ymax:i}=e;return`${t},${r},${o},${i}`}function I(e,t){if(!function(e){return(0,s.pC)(e)&&"extent"===e.type}(e))return null;const{spatialReference:r}=e;if(!r||r.isWGS84)return{bbox:R(e)};const o=j(r,t);return(0,s.pC)(o)?{bbox:R(e),"bbox-crs":o}:r.isWebMercator?{bbox:R((0,l.iV)(e,m.Z.WGS84))}:null}function P(e){const t=e.extent?.spatial;if(!t)return null;const r=t.bbox[0],o=4===r.length,i=r[0],n=r[1],s=o?void 0:r[2];return{xmin:i,ymin:n,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:s,zmax:o?void 0:r[5],spatialReference:m.Z.WGS84.toJSON()}}function O(e,t,r){return e.find((e=>e.rel===t&&e.type===r))||e.find((e=>e.rel===t&&!e.type))}},70082:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(43697),i=r(2368),n=r(35454),s=r(96674),a=r(5600),l=(r(67676),r(75215),r(52011));const p=new n.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,i.J)(s.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,o._)([(0,a.Cb)({json:{read:p.read,write:p.write}})],u.prototype,"drawingTool",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,o._)([(0,l.j)("esri.layers.support.FeatureTemplate")],u);const c=u},16451:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(43697),i=r(2368),n=r(96674),s=r(5600),a=(r(67676),r(75215),r(71715)),l=r(52011),p=r(30556),u=r(72729),c=r(70082);let d=class extends((0,i.J)(n.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,o._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"id",void 0),(0,o._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,o._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"domains",void 0),(0,o._)([(0,a.r)("domains")],d.prototype,"readDomains",null),(0,o._)([(0,p.c)("domains")],d.prototype,"writeDomains",null),(0,o._)([(0,s.Cb)({type:[c.Z],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,o._)([(0,l.j)("esri.layers.support.FeatureType")],d);const y=d},51706:(e,t,r)=>{var o,i;function n(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?o.Expression:e.field&&"string"==typeof e.field?o.Field:o.Unknown}function l(e,t){const r=t||a(e),n=e.valueUnit||"unknown";return r===o.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===n?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}r.d(t,{PS:()=>a,QW:()=>l,RY:()=>o,hL:()=>i,iY:()=>n,qh:()=>s}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(o||(o={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}))},74889:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var o,i=r(43697),n=r(66577),s=r(38171),a=r(35454),l=r(96674),p=r(22974),u=r(70586),c=r(5600),d=(r(75215),r(71715)),y=r(52011),f=r(30556),m=r(82971),h=r(33955),g=r(1231);const w=new a.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let S=o=class extends l.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=m.Z.fromJSON(t.spatialReference),o=[];for(let t=0;t<e.length;t++){const i=e[t],n=s.Z.fromJSON(i),a=i.geometry&&i.geometry.spatialReference;(0,u.pC)(n.geometry)&&!a&&(n.geometry.spatialReference=r);const l=i.aggregateGeometries,p=n.aggregateGeometries;if(l&&(0,u.pC)(p))for(const e in p){const t=p[e],o=l[e]?.spatialReference;(0,u.pC)(t)&&!o&&(t.spatialReference=r)}o.push(n)}return o}writeGeometryType(e,t,r,o){if(e)return void w.write(e,t,r,o);const{features:i}=this;if(i)for(const e of i)if(e&&(0,u.pC)(e.geometry))return void w.write(e.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,h.im)(e);return o&&!r&&t.spatialReference&&(o.spatialReference=m.Z.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,u.pC)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new o(this.cloneProperties())}cloneProperties(){return(0,p.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,i]}=e,n=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-o)/t)),(e=>Math.round((i-e)/r)));for(let e=0,t=n.length;e<t;e++)s?.((0,u.Wg)(n[e].geometry))||(n.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,i],scale:[n,s]}=r,a=this._getHydrationFunction(e,(e=>e*n+o),(e=>i-e*s));for(const{geometry:e}of t)(0,u.pC)(e)&&a&&a(e);return this.transform=null,this}_quantizePoints(e,t,r){let o,i;const n=[];for(let s=0,a=e.length;s<a;s++){const a=e[s];if(s>0){const e=t(a[0]),s=r(a[1]);e===o&&s===i||(n.push([e-o,s-i]),o=e,i=s)}else o=t(a[0]),i=r(a[1]),n.push([o,i])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,h.oU)(e)?e.rings:e.paths,i=[];for(let e=0,n=o.length;e<n;e++){const n=o[e],s=this._quantizePoints(n,t,r);s&&i.push(s)}return i.length>0?((0,h.oU)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const o=(0,h.oU)(e)?e.rings:e.paths;let i,n;for(let e=0,s=o.length;e<s;e++){const s=o[e];for(let e=0,o=s.length;e<o;e++){const o=s[e];e>0?(i+=o[0],n+=o[1]):(i=o[0],n=o[1]),o[0]=t(i),o[1]=r(n)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const o=e.points;let i,n;for(let e=0,s=o.length;e<s;e++){const s=o[e];e>0?(i+=s[0],n+=s[1]):(i=s[0],n=s[1]),s[0]=t(i),s[1]=r(n)}}:null}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],S.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,c.Cb)({type:[s.Z],json:{write:!0}})],S.prototype,"features",void 0),(0,i._)([(0,d.r)("features")],S.prototype,"readFeatures",null),(0,i._)([(0,c.Cb)({type:[g.Z],json:{write:!0}})],S.prototype,"fields",void 0),(0,i._)([(0,c.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],S.prototype,"geometryType",void 0),(0,i._)([(0,f.c)("geometryType")],S.prototype,"writeGeometryType",null),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],S.prototype,"hasM",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],S.prototype,"hasZ",void 0),(0,i._)([(0,c.Cb)({types:n.qM,json:{write:!0}})],S.prototype,"queryGeometry",void 0),(0,i._)([(0,d.r)("queryGeometry")],S.prototype,"readQueryGeometry",null),(0,i._)([(0,c.Cb)({type:m.Z,json:{write:!0}})],S.prototype,"spatialReference",void 0),(0,i._)([(0,f.c)("spatialReference")],S.prototype,"writeSpatialReference",null),(0,i._)([(0,c.Cb)({json:{write:!0}})],S.prototype,"transform",void 0),S=o=(0,i._)([(0,y.j)("esri.rest.support.FeatureSet")],S),S.prototype.toJSON.isDefaultToJSON=!0;const b=S},58333:(e,t,r)=>{r.d(t,{ET:()=>n,I4:()=>i,eG:()=>l,lF:()=>s,lj:()=>u,qP:()=>a,wW:()=>p});const o=[252,146,31,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:o,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:o},s={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},p={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);