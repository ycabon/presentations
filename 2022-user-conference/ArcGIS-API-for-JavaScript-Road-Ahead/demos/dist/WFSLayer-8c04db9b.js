import { ao as a, lR as m, dW as x, G as r, jg as x$1, eP as w, s, e, lE as i, cx as E, j0 as f, S as has, a as e$1, d, n, nI as p, nJ as o$1, nK as p$1, ne as a$1, nL as a$2, ng as n$1, nf as t, jV as c, jW as w$1, jX as O, ij as b, ba as k$1, nM as c$1, nN as m$1, ld as y, lT as o$2, m as j, nj as d$1, iu as b$1, nt as d$2, nO as p$2, bY as r$1, nP as m$2, nQ as j$1, nR as i$1, nF as c$2, lv as T, oG as u, nl as p$3, jj as J$1, nT as p$4, nk as n$2, nU as l$1, jZ as f$1, nm as s$1 } from './_virtual_index-64b818a8.js';
import { l, o } from './clientSideDefaults-8e0965b1.js';
import { D, X, z, W, C } from './wfsUtils-d1c9a0e7.js';
import './QueryEngineCapabilities-140b3c8f.js';
import './geojson-a6b45bd5.js';
import './xmlUtils-37ff00c9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let F=class extends(a(m)){constructor(){super(...arguments),this.capabilities=l(!1,!1),this.type="wfs",this.refresh=x((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}));}load(e){const t=(r(e)&&e.signal)??null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return x$1.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return {count:r.count,extent:w.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e$1){const{url:r,customParameters:o,name:s$1,namespaceUri:i$1,spatialReference:n,fields:c,geometryType:p,swapXY:l}=this.layer;if(!r)throw new s("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await D(r,{customParameters:o,...e$1}));const m=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),y=m?await X(this.wfsCapabilities,s$1,i$1,{spatialReference:n,customParameters:o,signal:e$1?.signal}):{...z(c),geometryType:p,name:s$1,namespaceUri:i$1,spatialReference:n,swapXY:l},g=e(W(this.wfsCapabilities.readFeatureTypes(),y.name,y.namespaceUri)),S=i.toJSON(y.geometryType);return {customParameters:o,featureType:g,fields:y.fields.map((e=>e.toJSON())),geometryField:y.geometryField,geometryType:S,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:y.objectIdField,spatialReference:y.spatialReference.toJSON(),swapXY:y.swapXY}}async _startWorker(e){const[t,r]=await E([this._createLoadOptions(e),f("WFSSourceWorker",{...e,strategy:has("feature-layers-workers")?"dedicated":"local"})]),o$1=t.error||r.error||null,s=r.value||null;if(o$1)throw s&&s.close(),o$1;const a=t.value;this._connection=r.value;const{extent:i}=await this._connection.invoke("load",a,e);this.sourceJSON={extent:i,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:o(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}};}};e$1([d()],F.prototype,"capabilities",void 0),e$1([d({constructOnly:!0})],F.prototype,"layer",void 0),e$1([d()],F.prototype,"sourceJSON",void 0),e$1([d()],F.prototype,"type",void 0),e$1([d()],F.prototype,"wfsCapabilities",void 0),F=e$1([n("esri.layers.graphics.sources.WFSSource")],F);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var J;const M=s$1();let _=J=class extends(p(o$1(p$1(a$1(a$2(n$1(t(c(w$1(O(b))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new F({layer:this}),this.spatialReference=k$1.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0;}static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m}=e;return new J({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m})}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),c$1(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,t){const i=e.filter((e=>e.name!==C));this.geometryField&&i.unshift(new y({name:this.geometryField,alias:this.geometryField,type:"geometry"})),o$2(t,i.map((e=>e.toJSON())),r);}get parsedUrl(){return this.url?j(this.url):null}set renderer(e){c$1(e,this.fieldsIndex),this._set("renderer",e);}createPopupTemplate(e){return d$1(this,e)}createQuery(){const e=new b$1;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$1.from(e)||this.createQuery(),r))).then((e=>{if(e?.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b$1.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b$1.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b$1.from(e)||this.createQuery(),r)))}async hasDataChanged(){try{const{dataChanged:e,updates:r$1}=await this.source.refresh(this.customParameters);return r(r$1)&&this.read(r$1,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}};e$1([d({readOnly:!0,aliasOf:"source.capabilities"})],_.prototype,"capabilities",void 0),e$1([d({type:String})],_.prototype,"copyright",void 0),e$1([d({readOnly:!0})],_.prototype,"createQueryVersion",null),e$1([d({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],_.prototype,"customParameters",void 0),e$1([d({readOnly:!0})],_.prototype,"defaultPopupTemplate",null),e$1([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],_.prototype,"definitionExpression",void 0),e$1([d({type:String})],_.prototype,"displayField",void 0),e$1([d(d$2)],_.prototype,"elevationInfo",void 0),e$1([d(p$2)],_.prototype,"featureReduction",void 0),e$1([d({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"featureUrl",void 0),e$1([d({type:[y],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],_.prototype,"fields",void 0),e$1([r$1("fields")],_.prototype,"writeFields",null),e$1([d(M.fieldsIndex)],_.prototype,"fieldsIndex",void 0),e$1([d({type:w,json:{name:"extent"}})],_.prototype,"fullExtent",void 0),e$1([d()],_.prototype,"geometryField",void 0),e$1([d({type:String,json:{read:{source:"layerDefinition.geometryType",reader:i.read},write:{target:"layerDefinition.geometryType",writer:i.write,ignoreOrigin:!0},origins:{service:{read:i.read}}}})],_.prototype,"geometryType",void 0),e$1([d({type:String})],_.prototype,"id",void 0),e$1([d(m$2)],_.prototype,"labelsVisible",void 0),e$1([d({type:[j$1],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i$1},write:!0}})],_.prototype,"labelingInfo",void 0),e$1([d(c$2)],_.prototype,"legendEnabled",void 0),e$1([d({type:["show","hide"]})],_.prototype,"listMode",void 0),e$1([d({type:String})],_.prototype,"objectIdField",void 0),e$1([d({type:["WFS"]})],_.prototype,"operationalLayerType",void 0),e$1([d({type:T,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"maxFeatures",void 0),e$1([d({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],_.prototype,"mode",void 0),e$1([d({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"name",void 0),e$1([d({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"namespaceUri",void 0),e$1([d(u)],_.prototype,"opacity",void 0),e$1([d(M.outFields)],_.prototype,"outFields",void 0),e$1([d({readOnly:!0})],_.prototype,"parsedUrl",null),e$1([d(p$3)],_.prototype,"popupEnabled",void 0),e$1([d({type:J$1,json:{name:"popupInfo",write:!0}})],_.prototype,"popupTemplate",void 0),e$1([d({types:p$4,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$2,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],_.prototype,"renderer",null),e$1([d(l$1)],_.prototype,"screenSizePerspectiveEnabled",void 0),e$1([d({readOnly:!0})],_.prototype,"source",void 0),e$1([d({type:k$1,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],_.prototype,"spatialReference",void 0),e$1([d({readOnly:!0,type:[T],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"spatialReferences",void 0),e$1([d({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"swapXY",void 0),e$1([d({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],_.prototype,"title",void 0),e$1([d({json:{read:!1},readOnly:!0})],_.prototype,"type",void 0),e$1([d(f$1)],_.prototype,"url",void 0),e$1([d({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"version",void 0),e$1([d({aliasOf:"source.wfsCapabilities"})],_.prototype,"wfsCapabilities",void 0),_=J=e$1([n("esri.layers.WFSLayer")],_);const k=_;

export { k as default };
