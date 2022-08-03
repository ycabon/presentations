import { B as e, C as d, D as n, iH as l$1, r8 as u, j as j$1, bF as v, fL as An, ni as t, oO as Wn, mr as o, by as t$1, g2 as a, h5 as U, cH as i, t as t$2, h as L, jU as m, y, mU as p$1, mV as c$1, mW as w$1, w1 as t$3, mX as O, w4 as i$1, j$ as b, r, d4 as d$1, wl as c$2, Z as s$2, c0 as w$2, dO as t$5, d as b$1, nn as d$2, s as s$3, G, x2 as e$1, mw as r$1, aA as j$2, jX as j$3, xc as t$6, xd as p$2, x3 as p$3, w7 as d$3, wo as m$2, wp as j$4, wq as i$2, we as c$3, xe as r$2, no as n$1, np as p$4, lY as J, wt as l$4, nq as s$4 } from './_virtual_index-9b831d4a.js';
import { N, L as L$1 } from './SceneService-91c6d519.js';
import { t as t$4 } from './capabilities-c4f7e618.js';
import { l as l$2 } from './FetchAssociatedFeatureLayer-cb4c7eed.js';
import { s as s$1, l as l$3, u as u$1, m as m$1 } from './I3SLayerDefinitions-8230f307.js';
import { w } from './persistable-564ba5e4.js';
import './I3SIndexInfo-aea5d059.js';
import './resourceUtils-924e3654.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let s=class extends l$1{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo";}};e([d({type:String,json:{read:!0,write:!0}})],s.prototype,"name",void 0),e([d({type:String,json:{read:!0,write:!0}})],s.prototype,"field",void 0),e([d({type:[Number],json:{read:!0,write:!0}})],s.prototype,"currentRangeExtent",void 0),e([d({type:[Number],json:{read:!0,write:!0}})],s.prototype,"fullRangeExtent",void 0),e([d({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=e([n("esri.layers.support.RangeInfo")],s);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var c;let p=c=class extends(u(j$1.ofType(v))){constructor(e){super(e);}clone(){return new c(this.items.map((e=>e.clone())))}write(e,r){return this.toJSON(r)}toJSON(e){const r=e?.layer?.spatialReference;return r?this.toArray().map((t$1=>{if(!r.equals(t$1.spatialReference)){if(!An(t$1.spatialReference,r))return e&&e.messages&&e.messages.push(new t("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const s=new v;Wn(t$1,s,r),t$1=s;}const s=t$1.toJSON(e);return delete s.spatialReference,s})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new t("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((r=>r.toJSON(e))))}static fromJSON(e,r){const t=new c;return e.forEach((e=>t.add(v.fromJSON(e,r)))),t}};p=c=e([n("esri.layers.support.PolygonCollection")],p);const l=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var g;let f=g=class extends l$1{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new l,this._geometriesSource=null,this._handles=new t$1;}initialize(){this._handles.add(a((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),U));}destroy(){this._handles.destroy();}readGeometries(e,o,r){this._geometriesSource={url:i(e,r),context:r};}async loadGeometries(e,r){if(t$2(this._geometriesSource))return;const{url:s,context:t}=this._geometriesSource,p=await L(s,{responseType:"json",signal:m(r,"signal")}),n=e.toJSON(),c=p.data.map((e=>({...e,spatialReference:n})));this.geometries=l.fromJSON(c,t),this._geometriesSource=null;}clone(){return new g({geometries:y(this.geometries),spatialRelationship:this.spatialRelationship})}};e([d({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),e([d({type:l,nonNullable:!0,json:{write:!0}}),w({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0),e([o(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=g=e([n("esri.layers.support.SceneFilter")],f);const j=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const X=["3DObject","Point"],Y=s$4();let ee=class extends(N(p$1(c$1(w$1(t$3(O(i$1(b)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new j$1,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0;}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&r(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return r(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return r(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return r(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new d$1(this.fields)}readNodePages(e,t,r){return "Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:s$1.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo();}get geometryType(){return re[this.profile]||"mesh"}set renderer(e){c$2(e,this.fieldsIndex),this._set("renderer",e);}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=r(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:t$4,{query:t,editing:{supportsGlobalId:r$1,supportsRollbackOnFailure:s,supportsUploadWithItemId:i,supportsReturnServiceEditsInSourceSpatialReference:o},data:{supportsZ:a,supportsM:p,isVersioned:l,supportsAttachment:d},operations:{supportsEditing:y,supportsUpdate:u,supportsQuery:c,supportsQueryAttachments:f}}=e,h=e.operations.supportsChangeTracking;return {query:t,editing:{supportsGlobalId:r$1,supportsReturnServiceEditsInSourceSpatialReference:o,supportsRollbackOnFailure:s,supportsGeometryUpdate:!1,supportsUploadWithItemId:i},data:{supportsAttachment:d,supportsZ:a,supportsM:p,isVersioned:l},operations:{supportsQuery:c,supportsQueryAttachments:f,supportsEditing:y&&h,supportsAdd:!1,supportsDelete:!1,supportsUpdate:u&&h}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled");}get defaultPopupTemplate(){return r(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return !e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return !e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return r(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&te[r]?te[r]:(s$2.getLogger(this.declaredClass).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=r(e)?e.signal:null,r$1=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w$2).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),r(this.filter)?this.filter.loadGeometries(this.spatialReference):null]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>t$5(this,{origin:"service"},t))).then((()=>c$2(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r$1),Promise.resolve(this)}async beforeSave(){r(this.filter)&&await this.load();}createQuery(){const e=new b$1;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(s$2.getLogger(this.declaredClass).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return d$2(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return r(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),t$2(this.associatedLayer))throw new s$3("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new s$3("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new s$3("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new s$3("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const i of this.statisticsInfo)if(i.name===r.name){const e=G(this.parsedUrl.path,i.href);return L(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s$3("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(L$1.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(L$1.SAVE,e)}async applyEdits(e,t){const r=await import('./editingSupport-986b8b2f.js');if(await this.load(),t$2(this.associatedLayer))throw new s$3(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!X.includes(e.layerType))throw new s$3("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$3("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new s$3("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(e,t){let r=!1,s=!1;if(null==e)r=!0,s=!0;else {const i=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,s=i;break;case"vertex-reference-frame":r=!0,s=!i;break;default:r=!1;}}if(!r)throw new s$3("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!s)throw new s$3("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference);}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else {if("mesh-pyramids"!==this.profile)throw new s$3("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject");}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r$1=!!(r(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),s={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r$1,supportsLayerQuery:r$1};this._fieldUsageInfo[e.name]=s;}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides();}_applyAssociatedLayerFieldsOverrides(){if(t$2(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()));}e&&this._set("fields",e);}_applyAssociatedLayerPopupOverrides(){if(t$2(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=e$1(this);for(let r=0;r<e.length;r++){const s=e[r],i=this.originIdOf(s),o=this.associatedLayer.originIdOf(s);i<o&&(o===r$1.SERVICE||o===r$1.PORTAL_ITEM)&&t.setAtOrigin(s,this.associatedLayer[s],o);}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new l$2(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch();}catch(r){j$2(r)||this._logWarningOnPopupEnabled();}}async _logWarningOnPopupEnabled(){await j$3((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?s$2.getLogger(this.declaredClass).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):s$2.getLogger(this.declaredClass).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`);}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&s$2.getLogger(this.declaredClass).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&s$2.getLogger(this.declaredClass).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"));}};e([d({types:{key:"type",base:t$6,typeMap:{selection:p$2}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ee.prototype,"featureReduction",void 0),e([d({type:[s],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ee.prototype,"rangeInfos",void 0),e([d({json:{read:!1}})],ee.prototype,"associatedLayer",void 0),e([d({type:["show","hide"]})],ee.prototype,"listMode",void 0),e([d({type:["ArcGISSceneServiceLayer"]})],ee.prototype,"operationalLayerType",void 0),e([d({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),e([d({...Y.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ee.prototype,"fields",void 0),e([d()],ee.prototype,"types",null),e([d()],ee.prototype,"typeIdField",null),e([d()],ee.prototype,"formTemplate",null),e([d({readOnly:!0})],ee.prototype,"fieldsIndex",null),e([d({type:p$3,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ee.prototype,"floorInfo",void 0),e([d(Y.outFields)],ee.prototype,"outFields",void 0),e([d({type:s$1,readOnly:!0,json:{read:!1}})],ee.prototype,"nodePages",void 0),e([o("service","nodePages",["nodePages","pointNodePages"])],ee.prototype,"readNodePages",null),e([d({type:[l$3],readOnly:!0})],ee.prototype,"materialDefinitions",void 0),e([d({type:[u$1],readOnly:!0})],ee.prototype,"textureSetDefinitions",void 0),e([d({type:[m$1],readOnly:!0})],ee.prototype,"geometryDefinitions",void 0),e([d({readOnly:!0})],ee.prototype,"serviceUpdateTimeStamp",void 0),e([d({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),e([d({readOnly:!0})],ee.prototype,"statisticsInfo",void 0),e([d({type:j$1.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ee.prototype,"excludeObjectIds",void 0),e([d({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ee.prototype,"definitionExpression",void 0),e([d({type:j,json:{name:"layerDefinition.polygonFilter",write:!0}})],ee.prototype,"filter",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),e([d(d$3)],ee.prototype,"elevationInfo",null),e([d({type:String})],ee.prototype,"geometryType",null),e([d(m$2)],ee.prototype,"labelsVisible",void 0),e([d({type:[j$4],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:i$2},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i$2},write:!0}})],ee.prototype,"labelingInfo",void 0),e([d(c$3)],ee.prototype,"legendEnabled",void 0),e([d({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?r$2(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ee.prototype,"opacity",void 0),e([d({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ee.prototype,"priority",void 0),e([d({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ee.prototype,"semantic",void 0),e([d({types:n$1,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ee.prototype,"renderer",null),e([d({json:{read:!1}})],ee.prototype,"cachedDrawingInfo",void 0),e([o("service","cachedDrawingInfo")],ee.prototype,"readCachedDrawingInfo",null),e([d({readOnly:!0,json:{read:!1}})],ee.prototype,"capabilities",null),e([d({type:Boolean,json:{read:!1}})],ee.prototype,"editingEnabled",null),e([d(p$4)],ee.prototype,"popupEnabled",void 0),e([d({type:J,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),e([d({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{read:!1}})],ee.prototype,"objectIdField",void 0),e([o("service","objectIdField",["objectIdField","fields"])],ee.prototype,"readObjectIdField",null),e([d({type:String,json:{read:!1}})],ee.prototype,"globalIdField",void 0),e([o("service","globalIdField",["globalIdField","fields"])],ee.prototype,"readGlobalIdField",null),e([d({readOnly:!0,type:String,json:{read:!1}})],ee.prototype,"displayField",null),e([d({type:String,json:{read:!1}})],ee.prototype,"profile",void 0),e([o("service","profile",["store.profile"])],ee.prototype,"readProfile",null),e([d({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ee.prototype,"normalReferenceFrame",void 0),e([d(l$4)],ee.prototype,"screenSizePerspectiveEnabled",void 0),ee=e([n("esri.layers.SceneLayer")],ee);const te={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},re={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},se=ee;

export { se as default };