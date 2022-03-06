import { j as e, y, k as i, fF as f, r, ca as g, bz as M, cf as p, o as t, c6 as e$1, g7 as m, g8 as p$1, fP as ke, aP as k, eq as t$1, cF as R } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let u=class extends f{constructor(e){super(e),this.type="csv";}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null;}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>g.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _startWorker(e){this._connection=await p("CSVSourceWorker",{strategy:t("feature-layers-workers")?"dedicated":"local",signal:e});const o=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=o.locationInfo,this.sourceJSON=o.layerDefinition,this.columnDelimiter=o.columnDelimiter;}};e([y()],u.prototype,"type",void 0),e([y()],u.prototype,"url",void 0),e([y()],u.prototype,"delimiter",void 0),e([y()],u.prototype,"fields",void 0),e([y()],u.prototype,"latitudeField",void 0),e([y()],u.prototype,"longitudeField",void 0),e([y()],u.prototype,"spatialReference",void 0),e([y()],u.prototype,"timeInfo",void 0),e([y()],u.prototype,"locationInfo",void 0),e([y()],u.prototype,"sourceJSON",void 0),e([y()],u.prototype,"columnDelimiter",void 0),u=e([i("esri.layers.graphics.sources.CSVSource")],u);var a=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let d=class extends ke{constructor(...e){super(...e),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=k.WGS84,this.source=null,this.type="csv";}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}get capabilities(){return {data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:t$1,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e);}async createGraphicsSource(e){const t=new a({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(R.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(R.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(R.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(R.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return !1}};e([y({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],d.prototype,"capabilities",null),e([y({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],d.prototype,"delimiter",void 0),e([y({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"editingEnabled",void 0),e([y({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],d.prototype,"fields",void 0),e([y({type:Boolean,readOnly:!0})],d.prototype,"isTable",null),e([e$1("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],d.prototype,"readWebMapLabelsVisible",null),e([y({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"latitudeField",void 0),e([y({type:["show","hide"]})],d.prototype,"listMode",void 0),e([y({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"locationType",void 0),e([y({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"longitudeField",void 0),e([y({type:["CSV"]})],d.prototype,"operationalLayerType",void 0),e([y()],d.prototype,"outFields",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],d.prototype,"path",void 0),e([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"portalItem",void 0),e([y({json:{read:!1},cast:null,type:a,readOnly:!0})],d.prototype,"source",void 0),e([y({json:{read:!1},value:"csv",readOnly:!0})],d.prototype,"type",void 0),e([y({json:{read:m,write:{isRequired:!0,ignoreOrigin:!0,writer:p$1}}})],d.prototype,"url",null),d=e([i("esri.layers.CSVLayer")],d);var c=d;

export default c;