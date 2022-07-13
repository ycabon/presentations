import { eV as i$6, dm as l$2, B as e, C as d, D as n$4, eG as o, ij as T, cq as i$7, c1 as l$3, j, dI as n$5, Z as s$2, f3 as p$b, f4 as c$3, f5 as w, kl as t$7, f6 as O, ky as i$8, fa as b, lY as S, r, bE as w$1, s as s$3, t as t$8, aI as r$1, gZ as z, ks as p$c, kJ as c$4, f9 as f$1 } from './_virtual_index-4b72c57d.js';
import { N } from './SceneService-2be62a8a.js';
import './resourceUtils-71d3c2c0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p$a=class extends(i$6(l$2)){constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null;}};e([d({type:Boolean,json:{default:!0,write:!0}})],p$a.prototype,"enabled",void 0),e([d({type:String,json:{write:!0}})],p$a.prototype,"label",void 0),e([d({type:[Number],json:{write:!0}})],p$a.prototype,"normal",void 0),e([d({type:[Number],json:{write:!0}})],p$a.prototype,"point",void 0),p$a=e([n$4("esri.layers.support.VoxelDynamicSection")],p$a);const i$5=p$a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p$9=class extends(i$6(l$2)){constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null;}};e([d({type:Boolean,json:{write:!0}})],p$9.prototype,"enabled",void 0),e([d({type:String,json:{write:!0}})],p$9.prototype,"label",void 0),e([d({type:[Number],json:{write:!0}})],p$9.prototype,"normal",void 0),e([d({type:[Number],json:{write:!0}})],p$9.prototype,"point",void 0),p$9=e([n$4("esri.layers.support.VoxelSlice")],p$9);const i$4=p$9;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n$3=class extends l$2{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null;}readHref(e,r,o){return i$7(e,o)}};e([d({type:Boolean,json:{default:!0,write:!0}})],n$3.prototype,"enabled",void 0),e([d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],n$3.prototype,"href",void 0),e([o(["service","web-scene"],"href")],n$3.prototype,"readHref",null),e([d({type:T,json:{write:{enabled:!0,isRequired:!0}}})],n$3.prototype,"id",void 0),e([d({type:String,json:{write:!0}})],n$3.prototype,"label",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n$3.prototype,"normal",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n$3.prototype,"point",void 0),e([d({type:[T],json:{write:{enabled:!0,isRequired:!0}}})],n$3.prototype,"sizeInPixel",void 0),e([d({type:[i$4],json:{write:!0}})],n$3.prototype,"slices",void 0),e([d({type:T,json:{default:0,write:!0}})],n$3.prototype,"timeId",void 0),e([d({type:T,json:{write:{enabled:!0,isRequired:!0}}})],n$3.prototype,"variableId",void 0),n$3=e([n$4("esri.layers.support.VoxelSection")],n$3);const a$1=n$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$6=class extends l$2{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5;}};e([d({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$6.prototype,"diffuseFactor",void 0),e([d({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$6.prototype,"specularFactor",void 0),t$6=e([n$4("esri.layers.support.VoxelSimpleShading")],t$6);const p$8=t$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let s$1=class extends l$2{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null;}};e([d({type:["discrete","continuous"],json:{write:!0}})],s$1.prototype,"continuity",void 0),e([d({type:Boolean,json:{write:!0}})],s$1.prototype,"hasNoData",void 0),e([d({type:Number,json:{write:!0}})],s$1.prototype,"noData",void 0),e([d({type:Number,json:{write:!0}})],s$1.prototype,"offset",void 0),e([d({type:Number,json:{write:!0}})],s$1.prototype,"scale",void 0),e([d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s$1.prototype,"type",void 0),s$1=e([n$4("esri.layers.support.VoxelFormat")],s$1);const p$7=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i$3=class extends l$2{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null;}};e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i$3.prototype,"id",void 0),e([d({type:String,json:{write:!0}})],i$3.prototype,"description",void 0),e([d({type:String,json:{write:{enabled:!0,isRequired:!0}}})],i$3.prototype,"name",void 0),e([d({type:p$7,json:{write:!0}})],i$3.prototype,"originalFormat",void 0),e([d({type:p$7,json:{write:{enabled:!0,isRequired:!0}}})],i$3.prototype,"renderingFormat",void 0),e([d({type:String,json:{write:!0}})],i$3.prototype,"unit",void 0),e([d({type:Number,json:{write:!0}})],i$3.prototype,"volumeId",void 0),e([d({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],i$3.prototype,"type",void 0),i$3=e([n$4("esri.layers.support.VoxelVariable")],i$3);const p$6=i$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l$1=class extends l$2{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null;}};e([d({type:l$3,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],l$1.prototype,"color",void 0),e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l$1.prototype,"value",void 0),e([d({type:Boolean,json:{default:!0,write:!0}})],l$1.prototype,"enabled",void 0),e([d({type:String,json:{write:!0}})],l$1.prototype,"label",void 0),l$1=e([n$4("esri.layers.support.VoxelIsosurface")],l$1);const i$2=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$5=class extends l$2{constructor(){super(...arguments),this.alpha=0,this.position=0;}};e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$5.prototype,"alpha",void 0),e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$5.prototype,"position",void 0),t$5=e([n$4("esri.layers.support.VoxelAlphaStop")],t$5);const p$5=t$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i$1=class extends l$2{constructor(){super(...arguments),this.color=null,this.position=0;}};e([d({type:l$3,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"color",void 0),e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"position",void 0),i$1=e([n$4("esri.layers.support.VoxelColorStop")],i$1);const c$2=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$4=class extends l$2{constructor(){super(...arguments),this.enabled=!1,this.range=null;}};e([d({type:Boolean,json:{default:!1,write:!0}})],t$4.prototype,"enabled",void 0),e([d({type:[Number],json:{write:!0}})],t$4.prototype,"range",void 0),t$4=e([n$4("esri.layers.support.VoxelRangeFilter")],t$4);const p$4=t$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n$2=class extends l$2{constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new j,this.alphaStops=new j;}set colorStops(o){this._set("colorStops",n$5(o,this._get("colorStops"),j.ofType(c$2)));}set alphaStops(o){this._set("alphaStops",n$5(o,this._get("alphaStops"),j.ofType(p$5)));}};e([d({type:["linear","nearest"],json:{write:!0}})],n$2.prototype,"interpolation",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n$2.prototype,"stretchRange",void 0),e([d({type:j.ofType(c$2),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],n$2.prototype,"colorStops",null),e([d({type:j.ofType(p$5),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],n$2.prototype,"alphaStops",null),e([d({type:p$4,json:{write:!0}})],n$2.prototype,"rangeFilter",void 0),n$2=e([n$4("esri.layers.support.VoxelTransferFunctionStyle")],n$2);const c$1=n$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i=class extends l$2{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null;}};e([d({type:l$3,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],i.prototype,"color",void 0),e([d({type:T,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"value",void 0),e([d({type:Boolean,json:{default:!0,write:!0}})],i.prototype,"enabled",void 0),e([d({type:String,json:{write:!0}})],i.prototype,"label",void 0),i=e([n$4("esri.layers.support.VoxelUniqueValue")],i);const l=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let c=class extends(i$6(l$2)){constructor(e){super(e),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new j,this.isosurfaces=new j;}set uniqueValues(e){this._set("uniqueValues",n$5(e,this._get("uniqueValues"),j.ofType(l)));}set isosurfaces(e){this._set("isosurfaces",n$5(e,this._get("isosurfaces"),j.ofType(i$2)));}};e([d({type:T,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"variableId",void 0),e([d({type:String,json:{write:!0}})],c.prototype,"label",void 0),e([d({type:c$1,json:{write:{enabled:!0,overridePolicy(){return {enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],c.prototype,"transferFunction",void 0),e([d({type:j.ofType(l),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],c.prototype,"uniqueValues",null),e([d({type:j.ofType(i$2),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return {enabled:e&&s}}}}})],c.prototype,"isosurfaces",null),c=e([n$4("esri.layers.support.VoxelVariableStyle")],c);const f=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$3=class extends l$2{constructor(){super(...arguments),this.values=null;}};e([d({type:[Number],json:{write:!0}})],t$3.prototype,"values",void 0),t$3=e([n$4("esri.layers.support.VoxelIrregularSpacing")],t$3);const p$3=t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$2=class extends l$2{constructor(){super(...arguments),this.scale=1,this.offset=0;}};e([d({type:Number,json:{write:!0}})],t$2.prototype,"scale",void 0),e([d({type:Number,json:{write:!0}})],t$2.prototype,"offset",void 0),t$2=e([n$4("esri.layers.support.VoxelRegularSpacing")],t$2);const p$2=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p$1=class extends l$2{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null;}};e([d({type:p$3,json:{write:!0}})],p$1.prototype,"irregularSpacing",void 0),e([d({type:Boolean,json:{write:!0}})],p$1.prototype,"isPositiveUp",void 0),e([d({type:Boolean,json:{write:!0}})],p$1.prototype,"isWrappedDateLine",void 0),e([d({type:String,json:{write:!0}})],p$1.prototype,"label",void 0),e([d({type:String,json:{write:!0}})],p$1.prototype,"name",void 0),e([d({type:String,json:{write:!0}})],p$1.prototype,"quantity",void 0),e([d({type:p$2,json:{write:!0}})],p$1.prototype,"regularSpacing",void 0),e([d({type:Number,json:{write:!0}})],p$1.prototype,"size",void 0),e([d({type:String,json:{write:!0}})],p$1.prototype,"unit",void 0),p$1=e([n$4("esri.layers.support.VoxelDimension")],p$1);const n$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$1=class extends l$2{constructor(){super(...arguments),this.id=0,this.dimensions=null;}getZDimension(){if(!this.dimensions)return -1;if(!Array.isArray(this.dimensions))return -1;if(4!==this.dimensions.length)return -1;for(let s=2;s<4;++s)if(this.dimensions[s].size>0)return s;return -1}isVolumeValid(){return !!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&-1!==this.getZDimension())))}};e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t$1.prototype,"id",void 0),e([d({type:[n$1],json:{write:{enabled:!0,isRequired:!0}}})],t$1.prototype,"dimensions",void 0),t$1=e([n$4("esri.layers.support.VoxelVolume")],t$1);const n=t$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var t;let s=t=class extends l$2{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4];}isValid(){const e=new t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"apronWidth",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"brickSize",void 0),e([d({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"maxLodLevel",void 0),e([d({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"nodeSize",void 0),s=t=e([n$4("esri.layers.support.VoxelVolumeIndex")],s);const p=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends(i$6(l$2)){constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new j,this.dynamicSections=new j;}set slices(e){this._set("slices",n$5(e,this._get("slices"),j.ofType(i$4)));}set dynamicSections(e){this._set("dynamicSections",n$5(e,this._get("dynamicSections"),j.ofType(i$5)));}};e([d({type:T,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"volumeId",void 0),e([d({type:Number,json:{default:1,write:!0}})],a.prototype,"verticalExaggeration",void 0),e([d({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],a.prototype,"exaggerationMode",void 0),e([d({type:Number,json:{default:0,write:!0}})],a.prototype,"verticalOffset",void 0),e([d({type:j.ofType(i$4),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.slices&&this.slices.length>0}}}}})],a.prototype,"slices",null),e([d({type:j.ofType(i$5),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],a.prototype,"dynamicSections",null),a=e([n$4("esri.layers.support.VoxelVolumeStyle")],a);const m=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const A="esri.layers.VoxelLayer",J=s$2.getLogger(A);let R=class extends(N(p$b(c$3(w(t$7(O(i$8(b)))))))){constructor(e){super(e),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=new j,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new p$8,this.opacity=1,this.variables=new j,this.volumes=new j,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.volumeStyles=new j,this.variableStyles=new j;}set url(e){this._set("url",S(e,J));}load(e){const i=r(e)?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w$1).then((()=>this._fetchService(i))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(t),Promise.resolve(this)}readVersion(e,i){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new s$3("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new s$3("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new s$3("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:{volumeStyles:this.volumeStyles.toJSON(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.variableStyles.toJSON(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index.isValid()?JSON.stringify(e):""}getVariableStyle(e){let i=-1;i=r(e)?e:this.currentVariableId;if(!this.variableStyles||-1===i)return null;const t=this.variableStyles.findIndex((e=>e.variableId===i));return t<0?null:this.variableStyles.getItemAt(t)}getVariable(e){let i=-1;if(i=r(e)?e:this.currentVariableId,!this.variables||-1===i)return null;const t=this.variables.findIndex((e=>e.id===i));return t<0?null:this.variables.getItemAt(t)}getSections(){const e=[];for(const i of this.sections)e.push(new a$1({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return e}getVolume(e){const i=this.getVariable(e);return r(i)?this.volumes.find((({id:e})=>e===i.volumeId)):null}getVolumeStyle(e){const i=this.getVariable(e);return r(i)?this.volumeStyles.find((({volumeId:e})=>e===i.volumeId)):null}getSlices(){const e=[],i=this.getVolume(null);if(t$8(i)||!i.isVolumeValid())return e;const t=this.getVolumeStyle(null);if(t$8(t))return e;for(const r of t.slices)this._isPlaneValid(r,[0,1,i.getZDimension()],i.dimensions)?e.push(new i$4({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):e.push(new i$4({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return e}getDynamicSections(){const e=[],i=this.getVolume(null);if(t$8(i)||!i.isVolumeValid())return e;const t=this.getVolumeStyle(null);if(t$8(t))return e;for(const r of t.dynamicSections)this._isPlaneValid(r,[0,1,i.getZDimension()],i.dimensions)?e.push(new i$5({enabled:r.enabled,label:r.label,point:r.point,normal:r.normal})):e.push(new i$5({enabled:!1,label:"invalid",point:r.point,normal:r.normal}));return e}getVerticalExaggeration(){const e=1,i=this.getVolumeStyle(null);return t$8(i)?e:i.verticalExaggeration}getVerticalOffset(){const e=1,i=this.getVolumeStyle(null);return t$8(i)?e:i.verticalOffset}_isPlaneValid(e,i,t){if(!e.point)return !1;if(!Array.isArray(e.point)||3!==e.point.length)return !1;if(!e.normal)return !1;if(!Array.isArray(e.normal)||3!==e.normal.length)return !1;for(let s=0;s<3;++s){const r=e.point[s];if(r<0||r>=t[i[s]].size)return !1}const r=r$1(e.normal[0],e.normal[1],e.normal[2]);z(r,r);const o=1e-6;return !(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<o)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}};e([d(p$c)],R.prototype,"popupEnabled",void 0),e([d({type:["Voxel"]})],R.prototype,"operationalLayerType",void 0),e([d(c$4)],R.prototype,"legendEnabled",void 0),e([d({json:{write:!0}})],R.prototype,"title",void 0),e([d(f$1)],R.prototype,"url",null),e([d({type:j.ofType(a$1),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],R.prototype,"sections",void 0),e([d({type:T,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0}},service:{name:"style.currentVariableId"}}}})],R.prototype,"currentVariableId",void 0),e([d({type:j.ofType(m),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],R.prototype,"volumeStyles",void 0),e([d({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],R.prototype,"renderMode",void 0),e([d({type:j.ofType(f),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],R.prototype,"variableStyles",void 0),e([d({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],R.prototype,"enableSlices",void 0),e([d({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],R.prototype,"enableSections",void 0),e([d({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],R.prototype,"enableDynamicSections",void 0),e([d({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],R.prototype,"enableIsosurfaces",void 0),e([d({type:p$8,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],R.prototype,"shading",void 0),e([d({type:["show","hide"]})],R.prototype,"listMode",void 0),e([d({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],R.prototype,"opacity",void 0),e([d({type:j.ofType(p$6)})],R.prototype,"variables",void 0),e([d({type:j.ofType(n)})],R.prototype,"volumes",void 0),e([d({type:p})],R.prototype,"index",void 0),e([d({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],R.prototype,"minScale",void 0),e([d({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],R.prototype,"maxScale",void 0),e([d({json:{read:!1},readOnly:!0})],R.prototype,"type",void 0),e([d({readOnly:!0,json:{name:"serviceVersion"}})],R.prototype,"version",void 0),e([o("service","version")],R.prototype,"readVersion",null),R=e([n$4(A)],R);const _=R;

export { _ as default };
