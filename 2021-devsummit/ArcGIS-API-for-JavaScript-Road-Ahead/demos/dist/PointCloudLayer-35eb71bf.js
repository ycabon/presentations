import { j as e$1, y, k as i$2, c9 as a, fn as N$1, dD as r, b3 as y$1, n as n$2, ci as p$4, cj as l$1, ck as u$3, fL as s, cl as l$2, cp as b, bM as e$2, cz as y$2, fJ as o, r as r$1, e2 as w, fQ as a$3, h9 as i$3, s as s$1, cK as D, U, fT as c$3, dA as M, c6 as e$3, g0 as m, gd as d$1, bi as o$1, fU as l$3 } from './_virtual_index-634cbc09.js';
import { R as R$1 } from './SceneService-878cce56.js';
import { d as a$1, b as c$1, c as c$2, a as a$2 } from './PointCloudUniqueValueRenderer-cec1627c.js';
import './resourceUtils-0b2889e5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let t=class extends a{constructor(r){super(r),this.field=null,this.type=null;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};e$1([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),e$1([y({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=e$1([i$2("esri.layers.pointCloudFilters.PointCloudFilter")],t);var p$3=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$2;let d=p$2=class extends p$3{constructor(r){super(r),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield";}clone(){return new p$2({field:this.field,requiredClearBits:y$1(this.requiredClearBits),requiredSetBits:y$1(this.requiredSetBits)})}};e$1([y({type:[N$1],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),e$1([y({type:[N$1],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),e$1([r({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=p$2=e$1([i$2("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);var u$2=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p$1;let u$1=p$1=class extends p$3{constructor(r){super(r),this.includedReturns=[],this.type="return";}clone(){return new p$1({field:this.field,includedReturns:y$1(this.includedReturns)})}};e$1([y({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],u$1.prototype,"includedReturns",void 0),e$1([r({pointCloudReturnFilter:"return"})],u$1.prototype,"type",void 0),u$1=p$1=e$1([i$2("esri.layers.pointCloudFilters.PointCloudReturnFilter")],u$1);var n$1=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;let u=p=class extends p$3{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[];}clone(){return new p({field:this.field,mode:this.mode,values:y$1(this.values)})}};e$1([y({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"mode",void 0),e$1([r({pointCloudValueFilter:"value"})],u.prototype,"type",void 0),e$1([y({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"values",void 0),u=p=e$1([i$2("esri.layers.pointCloudFilters.PointCloudValueFilter")],u);var l=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e={key:"type",base:p$3,typeMap:{value:l,bitfield:u$2,return:n$1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var i$1;let c=i$1=class extends a$1{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null;}clone(){return new i$1({...this.cloneProperties(),field:y$1(this.field)})}};e$1([r({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),e$1([y({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i$1=e$1([i$2("esri.renderers.PointCloudRGBRenderer")],c);var n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i={key:"type",base:a$1,typeMap:{"point-cloud-class-breaks":c$1,"point-cloud-rgb":n,"point-cloud-stretch":c$2,"point-cloud-unique-value":a$2},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const N=n$2.getLogger("esri.layers.PointCloudLayer"),O=l$3();let R=class extends(R$1(p$4(l$1(u$3(s(l$2(b))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}get fieldsIndex(){return new e$2(this.fields)}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new y$2;return "FieldTypeInteger"===e.type&&((e=y$1(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new y$2({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}writeRenderer(e,r,o$1,i){o("layerDefinition.drawingInfo.renderer",e.write(null,i),r);}load(e){const r=r$1(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=a$3(this,e);return this.formatPopupTemplateReturnsField(r),this.formatPopupTemplateRGBField(r),r}formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$3({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded";}formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$3({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded";}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new s$1("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const t=this.fieldsIndex.get(e);if(!t)throw new s$1("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===t.name){const e=D(this.parsedUrl.path,`./statistics/${o.key}`);return U(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new s$1("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(1,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s$1("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return ["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&N.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&N.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"));}};e$1([y({type:["PointCloudLayer"]})],R.prototype,"operationalLayerType",void 0),e$1([y(c$3)],R.prototype,"popupEnabled",void 0),e$1([y({type:M,json:{name:"popupInfo",write:!0}})],R.prototype,"popupTemplate",void 0),e$1([y({readOnly:!0,json:{read:!1}})],R.prototype,"defaultPopupTemplate",null),e$1([y({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],R.prototype,"opacity",void 0),e$1([y({type:["show","hide"]})],R.prototype,"listMode",void 0),e$1([y({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],R.prototype,"filters",void 0),e$1([y({type:[y$2]})],R.prototype,"fields",void 0),e$1([y({readOnly:!0})],R.prototype,"fieldsIndex",null),e$1([e$3("service","fields",["fields","attributeStorageInfo"])],R.prototype,"readServiceFields",null),e$1([y(O.outFields)],R.prototype,"outFields",void 0),e$1([y({readOnly:!0})],R.prototype,"attributeStorageInfo",void 0),e$1([y(m)],R.prototype,"elevationInfo",null),e$1([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],R.prototype,"path",void 0),e$1([y(d$1)],R.prototype,"legendEnabled",void 0),e$1([y({types:i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],R.prototype,"renderer",void 0),e$1([o$1("renderer")],R.prototype,"writeRenderer",null),e$1([y({json:{read:!1},readOnly:!0})],R.prototype,"type",void 0),R=e$1([i$2("esri.layers.PointCloudLayer")],R);var _=R;

export default _;
