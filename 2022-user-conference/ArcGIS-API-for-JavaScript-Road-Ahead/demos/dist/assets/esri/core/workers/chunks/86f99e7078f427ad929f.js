"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4910,4477],{42033:(e,t,r)=>{r.d(t,{E:()=>s,_:()=>o});var i=r(70586);async function s(e,t){const{WhereClause:i}=await Promise.resolve().then(r.bind(r,41534));return i.create(e,t)}function o(e,t){return(0,i.pC)(e)?(0,i.pC)(t)?`(${e}) AND (${t})`:e:t}},45425:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var i=r(43697),s=(r(66577),r(20102)),o=r(70586),n=r(17452),a=r(5600),l=(r(67676),r(80442)),u=(r(75215),r(71715)),p=r(52011),d=r(3121),c=r(83379),y=r(95330),h=r(78346),m=r(74889),f=r(6570);let g=class extends c.Z{constructor(e){super(e),this.type="csv",this.refresh=(0,y.Ds)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=(0,o.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return m.default.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:f.Z.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await(0,h.bA)("CSVSourceWorker",{strategy:(0,l.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:r,fields:i,latitudeField:s,longitudeField:o,spatialReference:n,timeInfo:a}=this.loadOptions,u=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:i?.map((e=>e.toJSON())),latitudeField:s,longitudeField:o,spatialReference:n?.toJSON(),timeInfo:a?.toJSON()}},{signal:e});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};(0,i._)([(0,a.Cb)()],g.prototype,"type",void 0),(0,i._)([(0,a.Cb)()],g.prototype,"loadOptions",void 0),(0,i._)([(0,a.Cb)()],g.prototype,"customParameters",void 0),(0,i._)([(0,a.Cb)()],g.prototype,"locationInfo",void 0),(0,i._)([(0,a.Cb)()],g.prototype,"sourceJSON",void 0),(0,i._)([(0,a.Cb)()],g.prototype,"delimiter",void 0),g=(0,i._)([(0,p.j)("esri.layers.graphics.sources.CSVSource")],g);var v=r(25278),w=r(57444),C=r(25929),_=r(82971);function b(e,t){throw new s.Z(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let I=class extends d.default{constructor(...e){super(...e),this.capabilities=(0,v.MS)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=_.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=(0,n.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new g({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(w.Z.from(e)||this.createQuery()))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(w.Z.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(w.Z.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(w.Z.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new s.Z("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return b(this,"csv-layer:save")}async saveAs(e,t){return b(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return(0,o.pC)(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"capabilities",void 0),(0,i._)([(0,a.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],I.prototype,"delimiter",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],I.prototype,"editingEnabled",void 0),(0,i._)([(0,a.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],I.prototype,"fields",void 0),(0,i._)([(0,a.Cb)({type:Boolean,readOnly:!0})],I.prototype,"isTable",null),(0,i._)([(0,u.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],I.prototype,"readWebMapLabelsVisible",null),(0,i._)([(0,a.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],I.prototype,"latitudeField",void 0),(0,i._)([(0,a.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],I.prototype,"locationType",void 0),(0,i._)([(0,a.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],I.prototype,"longitudeField",void 0),(0,i._)([(0,a.Cb)({type:["CSV"]})],I.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.Cb)()],I.prototype,"outFields",void 0),(0,i._)([(0,a.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],I.prototype,"path",void 0),(0,i._)([(0,a.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],I.prototype,"portalItem",void 0),(0,i._)([(0,a.Cb)({json:{read:!1},cast:null,type:g,readOnly:!0})],I.prototype,"source",void 0),(0,i._)([(0,a.Cb)({json:{read:!1},value:"csv",readOnly:!0})],I.prototype,"type",void 0),(0,i._)([(0,a.Cb)({json:{read:C.r,write:{isRequired:!0,ignoreOrigin:!0,writer:C.w}}})],I.prototype,"url",null),I=(0,i._)([(0,p.j)("esri.layers.CSVLayer")],I);const S=I},61159:(e,t,r)=>{r.d(t,{g:()=>i});const i={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},25278:(e,t,r)=>{r.d(t,{Dm:()=>p,Hq:()=>d,MS:()=>c,bU:()=>a});var i=r(80442),s=r(22974),o=r(61159),n=r(58333);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function p(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new i}catch(r){return()=>({[t]:null,...e})}}function d(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},54295:(e,t,r)=>{r.d(t,{V:()=>n});var i=r(43697),s=r(5600),o=(r(67676),r(80442),r(75215),r(52011));const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,s.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,o.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>u});var i=r(43697),s=r(92604),o=r(70586),n=r(5600),a=(r(67676),r(80442),r(75215),r(52011)),l=r(66677);const u=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.Qc)(this.url);if((0,o.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.Nm)(e,s.Z.getLogger(this.declaredClass)))}};return(0,i._)([(0,n.Cb)()],t.prototype,"title",null),(0,i._)([(0,n.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,a.j)("esri.layers.mixins.ArcGISService")],t),t}},16859:(e,t,r)=>{r.d(t,{I:()=>w});var i=r(43697),s=r(40330),o=r(3172),n=r(66643),a=r(20102),l=r(92604),u=r(70586),p=r(95330),d=r(17452),c=r(5600),y=(r(67676),r(80442),r(75215),r(71715)),h=r(52011),m=r(30556),f=r(65587),g=r(15235),v=r(86082);const w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new g.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8062).then(r.bind(r,18062));return(0,p.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,p.D_)(e)||l.Z.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,p.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?s.id?.findCredential(this.url):null;if(!t)return!0;const r=C.credential===t?C.user:await this._fetchEditingUser(e);return C.credential=t,C.user=r,(0,u.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=s.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,a=f.Z.getDefault();if(a&&a.loaded&&(0,d.Fv)(a.restUrl)===(0,d.Fv)(i))return a.user;const l=`${i}/community/self`,p=(0,u.pC)(e)?e.signal:null,c=await(0,n.q6)((0,o.default)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return c.ok?v.default.fromJSON(c.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||f.Z.getDefault());return r&&i&&!(0,d.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,c.Cb)({type:g.default})],t.prototype,"portalItem",null),(0,i._)([(0,y.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,m.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,c.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,i._)([(0,h.j)("esri.layers.mixins.PortalLayer")],t),t},C={credential:null,user:null}},56765:(e,t,r)=>{r.d(t,{Z:()=>p});var i,s=r(43697),o=r(46791),n=r(96674),a=r(5600),l=(r(67676),r(80442),r(75215),r(52011));let u=i=class extends n.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.Z}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],u.prototype,"floorField",void 0),(0,s._)([(0,a.Cb)({json:{read:!1,write:!1}})],u.prototype,"viewAllMode",void 0),(0,s._)([(0,a.Cb)({json:{read:!1,write:!1}})],u.prototype,"viewAllLevelIds",void 0),u=i=(0,s._)([(0,l.j)("esri.layers.support.LayerFloorInfo")],u);const p=u},51706:(e,t,r)=>{var i,s;function o(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function l(e,t){const r=t||a(e),o=e.valueUnit||"unknown";return r===i.Unknown?s.Constant:e.stops?s.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?s.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?s.Proportional:s.Additive:s.Identity:s.RealWorldSize}r.d(t,{PS:()=>a,QW:()=>l,RY:()=>i,hL:()=>s,iY:()=>o,qh:()=>n}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(s||(s={}))}}]);