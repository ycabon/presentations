import { B as e$1, C as d$2, D as n$3, iH as l$3, y, j, mG as r, w3 as t$3, jT as t$4, M as m$4, k6 as m$5, Z as s, r as r$1, h as L, mU as p$6, mV as c$4, mW as w, w1 as t$5, mX as O, w4 as i$2, j$ as b, mD as p$7, s as s$1, G, c0 as w$1, w5 as n$4, mr as o, w6 as j$1, nm as y$1, R as k, w7 as d$4 } from './_virtual_index-9b831d4a.js';
import { U } from './BuildingComponentSublayer-7f5f29be.js';
import { d as d$3 } from './BuildingGroupSublayer-1f0b2896.js';
import { N, L as L$1 } from './SceneService-91c6d519.js';
import { l as l$4 } from './FetchAssociatedFeatureLayer-cb4c7eed.js';
import './capabilities-c4f7e618.js';
import './I3SIndexInfo-aea5d059.js';
import './I3SLayerDefinitions-8230f307.js';
import './resourceUtils-924e3654.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let e=class extends l$3{constructor(){super(...arguments),this.type=null;}};e$1([d$2({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=e$1([n$3("esri.layers.support.BuildingFilterAuthoringInfo")],e);const p$5=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var p$4;let i$1=p$4=class extends l$3{constructor(){super(...arguments),this.filterType=null,this.filterValues=null;}clone(){return new p$4({filterType:this.filterType,filterValues:y(this.filterValues)})}};e$1([d$2({type:String,json:{write:!0}})],i$1.prototype,"filterType",void 0),e$1([d$2({type:[String],json:{write:!0}})],i$1.prototype,"filterValues",void 0),i$1=p$4=e$1([n$3("esri.layers.support.BuildingFilterAuthoringInfoType")],i$1);const l$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var c$3;const l$1=j.ofType(l$2);let n$2=c$3=class extends l$3{clone(){return new c$3({filterTypes:y(this.filterTypes)})}};e$1([d$2({type:l$1,json:{write:!0}})],n$2.prototype,"filterTypes",void 0),n$2=c$3=e$1([n$3("esri.layers.support.BuildingFilterAuthoringInfoBlock")],n$2);const m$3=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var p$3;const l=j.ofType(m$3);let n$1=p$3=class extends p$5{constructor(){super(...arguments),this.type="checkbox";}clone(){return new p$3({filterBlocks:y(this.filterBlocks)})}};e$1([d$2({type:["checkbox"]})],n$1.prototype,"type",void 0),e$1([d$2({type:l,json:{write:!0}})],n$1.prototype,"filterBlocks",void 0),n$1=p$3=e$1([n$3("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n$1);const u$3=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$2=class extends l$3{};e$1([d$2({readOnly:!0,json:{read:!1}})],t$2.prototype,"type",void 0),t$2=e$1([n$3("esri.layers.support.BuildingFilterMode")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var t$1;let p$1=t$1=class extends p$2{constructor(){super(...arguments),this.type="solid";}clone(){return new t$1}};e$1([d$2({type:["solid"],readOnly:!0,json:{write:!0}})],p$1.prototype,"type",void 0),p$1=t$1=e$1([n$3("esri.layers.support.BuildingFilterModeSolid")],p$1);const i=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var c$2;let m$2=c$2=class extends p$2{constructor(){super(...arguments),this.type="wire-frame",this.edges=null;}clone(){return new c$2({edges:y(this.edges)})}};e$1([r({wireFrame:"wire-frame"})],m$2.prototype,"type",void 0),e$1([d$2(t$3)],m$2.prototype,"edges",void 0),m$2=c$2=e$1([n$3("esri.layers.support.BuildingFilterModeWireFrame")],m$2);const a$1=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var t;let p=t=class extends p$2{constructor(){super(...arguments),this.type="x-ray";}clone(){return new t}};e$1([d$2({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=e$1([n$3("esri.layers.support.BuildingFilterModeXRay")],p);const c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var d$1;const a={nonNullable:!0,types:{key:"type",base:p$2,typeMap:{solid:i,"wire-frame":a$1,"x-ray":c$1}},json:{read:e=>{switch(e&&e.type){case"solid":return i.fromJSON(e);case"wireFrame":return a$1.fromJSON(e);case"x-ray":return c$1.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let u$2=d$1=class extends l$3{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new i,this.title="";}clone(){return new d$1({filterExpression:this.filterExpression,filterMode:y(this.filterMode),title:this.title})}};e$1([d$2({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"filterExpression",void 0),e$1([d$2(a)],u$2.prototype,"filterMode",void 0),e$1([d$2({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u$2.prototype,"title",void 0),u$2=d$1=e$1([n$3("esri.layers.support.BuildingFilterBlock")],u$2);const c=u$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var u$1;const d=j.ofType(c);let m$1=u$1=class extends l$3{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=t$4(),this.name=null;}clone(){return new u$1({description:this.description,filterBlocks:y(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:y(this.filterAuthoringInfo)})}};e$1([d$2({type:String,json:{write:!0}})],m$1.prototype,"description",void 0),e$1([d$2({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"filterBlocks",void 0),e$1([d$2({types:{key:"type",base:p$5,typeMap:{checkbox:u$3}},json:{read:o=>"checkbox"===(o&&o.type)?u$3.fromJSON(o):null,write:!0}})],m$1.prototype,"filterAuthoringInfo",void 0),e$1([d$2({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"id",void 0),e$1([d$2({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"name",void 0),m$1=u$1=e$1([n$3("esri.layers.support.BuildingFilter")],m$1);const f=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n=class extends l$3{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null;}};e$1([d$2({type:String})],n.prototype,"fieldName",void 0),e$1([d$2({type:String})],n.prototype,"modelName",void 0),e$1([d$2({type:String})],n.prototype,"label",void 0),e$1([d$2({type:Number})],n.prototype,"min",void 0),e$1([d$2({type:Number})],n.prototype,"max",void 0),e$1([d$2({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],n.prototype,"mostFrequentValues",void 0),e$1([d$2({type:[Number]})],n.prototype,"subLayerIds",void 0),n=e$1([n$3("esri.layers.support.BuildingFieldStatistics")],n);let u=class extends(m$4.LoadableMixin(m$5(l$3))){constructor(){super(...arguments),this.url=null;}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(s.getLogger(this.declaredClass).error("building summary statistics are not loaded"),null)}load(e){const r=r$1(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const t=(await L(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"});}};e$1([d$2({constructOnly:!0,type:String})],u.prototype,"url",void 0),e$1([d$2({readOnly:!0,type:[n],json:{read:{source:"summary"}}})],u.prototype,"fields",null),u=e$1([n$3("esri.layers.support.BuildingSummaryStatistics")],u);const m=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const _=j.ofType(f),B=y(d$3.sublayersProperty);B.json.origins["web-scene"]={type:[U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},B.json.origins["portal-item"]={type:[U],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let P=class extends(N(p$6(c$4(w(t$5(O(i$2(b)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new p$7({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new _,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene";}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy();}readSublayers(e,r,t){const s=d$3.readSublayers(e,r,t);return d$3.forEachSublayer(s,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(s,this.sublayerOverrides),this.sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){d$3.forEachSublayer(e,(e=>e.read(r.get(e.id),t)));}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages.push(new s$1("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return {overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];d$3.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r);})),s.length>0&&(r.sublayers=s);}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push(y(e));}));}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t;}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=G(this.parsedUrl.path,r.statisticsHRef);return new m({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}load(e){const r=r$1(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w$1).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return n$4(this,(e=>{d$3.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r);})),this.summaryStatistics&&e(this.summaryStatistics);}))}async saveAs(e,r){return this._debouncedSaveOperations(L$1.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(L$1.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new s$1("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return ["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&s.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&s.getLogger(this.declaredClass).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"));}async _fetchAssociatedFeatureService(e){const r=new l$4(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem();}catch(t){s.getLogger(this.declaredClass).warn("Associated feature service item could not be loaded",t);}}};e$1([d$2({type:["BuildingSceneLayer"]})],P.prototype,"operationalLayerType",void 0),e$1([d$2({readOnly:!0})],P.prototype,"allSublayers",void 0),e$1([d$2(B)],P.prototype,"sublayers",void 0),e$1([o("service","sublayers")],P.prototype,"readSublayers",null),e$1([d$2({type:_,nonNullable:!0,json:{write:!0}})],P.prototype,"filters",void 0),e$1([d$2({type:String,json:{write:!0}})],P.prototype,"activeFilterId",void 0),e$1([d$2({readOnly:!0,type:m})],P.prototype,"summaryStatistics",void 0),e$1([o("summaryStatistics",["statisticsHRef"])],P.prototype,"readSummaryStatistics",null),e$1([d$2({type:[String],json:{read:!1}})],P.prototype,"outFields",void 0),e$1([d$2(j$1)],P.prototype,"fullExtent",void 0),e$1([d$2({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),e$1([d$2(y$1(k))],P.prototype,"spatialReference",void 0),e$1([d$2(d$4)],P.prototype,"elevationInfo",null),e$1([d$2({json:{read:!1},readOnly:!0})],P.prototype,"type",void 0),e$1([d$2()],P.prototype,"associatedFeatureServiceItem",void 0),P=e$1([n$3("esri.layers.BuildingSceneLayer")],P);const C=P;

export { C as default };
