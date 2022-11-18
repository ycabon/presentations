import { fP as r, eF as z, pv as v, eB as e$1, eJ as E$1, pw as u$2, aU as r$1, px as y$2, aK as n, jq as i$3, js as s$2, jt as a$4, u as e$2, y as y$3, jr as s$3, z as n$1, ju as l$4, kv as p$c, mL as T, ck as l$5, e9 as j$1, n9 as n$2, bb as a$5, m2 as h$1, Y as y$4, $ as s$4, O as k$1, fD as E$2, bp as r$2, eE as e$3, py as i$4, bk as w, fO as e$4, pz as c$4, g0 as u$3, mC as p$d, my as c$5, mD as v$1, mv as t$4, mz as O$1, mE as i$5, oP as S$1, m as r$3, c1 as w$1, E as s$5, w as w$2, mR as p$e, nf as c$6, mY as f$3, mH as o, eb as b } from './_virtual_index-1ea2035a.js';
import { N } from './SceneService-f34bce56.js';
import { g as g$1 } from './persistable-2efd2972.js';
import './I3SIndexInfo-68240858.js';
import './resourceUtils-c3673d3f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const f$2=n(),e=e$1(),h=e$1(),i$2=e$1(),p$b=new Float64Array([0,0,1]),j=new Float64Array([0,1,0]),k=new Float64Array([1,0,0]);function l$3(s){r(f$2,s),z(f$2,f$2);const n=Math.atan2(f$2[1],f$2[0]),r$1=v(e$1(),p$b,-n);E$1(f$2,f$2,r$1);const e=-1*Math.atan2(f$2[2],f$2[0]);return [u$2(n)+270,u$2(e)+90]}function q(t,n){return v(h,p$b,r$1(t-270)),v(i$2,j,r$1(n-90)),y$2(e,h,i$2),r(f$2,k),E$1(f$2,f$2,e),z(f$2,f$2),[f$2[0],f$2[1],f$2[2]]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m$2=class extends(i$3(l$4)){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null;}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=l$3(this.normal);return s$2.normalize(a$4(t),0,!0)}set orientation(t){const o=q(t,this.tilt);this._set("normal",o),this._set("orientation",t);}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=l$3(this.normal);return s$2.normalize(a$4(o),0,!0)}set tilt(t){const o=q(this.orientation,t);this._set("normal",o),this._set("tilt",t);}};e$2([y$3({type:Boolean,json:{write:!0}})],m$2.prototype,"enabled",void 0),e$2([y$3({type:String,json:{write:!0}})],m$2.prototype,"label",void 0),e$2([y$3({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),s$3((t=>s$2.normalize(a$4(t),0,!0)))],m$2.prototype,"orientation",null),e$2([y$3({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),s$3((t=>s$2.normalize(a$4(t),0,!0)))],m$2.prototype,"tilt",null),e$2([y$3({type:[Number],json:{write:!0}})],m$2.prototype,"normal",void 0),e$2([y$3({type:[Number],json:{write:!0}})],m$2.prototype,"point",void 0),m$2=e$2([n$1("esri.layers.voxel.VoxelSlice")],m$2);const c$3=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let d$2=class extends(i$3(l$4)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null;}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=l$3(this.normal);return s$2.normalize(a$4(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=l$3(this.normal);return s$2.normalize(a$4(r),0,!0)}};e$2([y$3({type:Boolean,json:{default:!0,write:!0}})],d$2.prototype,"enabled",void 0),e$2([y$3({type:String,json:{origins:{service:{read:p$c}},write:{enabled:!0,isRequired:!0}}}),g$1({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],d$2.prototype,"href",void 0),e$2([y$3({type:T,json:{write:{enabled:!0,isRequired:!0}}})],d$2.prototype,"id",void 0),e$2([y$3({type:String,json:{write:!0}})],d$2.prototype,"label",void 0),e$2([y$3({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d$2.prototype,"orientation",null),e$2([y$3({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d$2.prototype,"tilt",null),e$2([y$3({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d$2.prototype,"normal",void 0),e$2([y$3({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d$2.prototype,"point",void 0),e$2([y$3({type:[T],json:{write:{enabled:!0,isRequired:!0}}})],d$2.prototype,"sizeInPixel",void 0),e$2([y$3({type:[c$3],json:{write:!0}})],d$2.prototype,"slices",void 0),e$2([y$3({type:T,json:{default:0,write:!0}})],d$2.prototype,"timeId",void 0),e$2([y$3({type:T,json:{write:{enabled:!0,isRequired:!0}}})],d$2.prototype,"variableId",void 0),d$2=e$2([n$1("esri.layers.voxel.VoxelSection")],d$2);const u$1=d$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$3=class extends l$4{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5;}};e$2([y$3({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$3.prototype,"diffuseFactor",void 0),e$2([y$3({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$3.prototype,"specularFactor",void 0),t$3=e$2([n$1("esri.layers.voxel.VoxelSimpleShading")],t$3);const p$a=t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let s$1=class extends l$4{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null;}};e$2([y$3({type:["discrete","continuous"],json:{write:!0}})],s$1.prototype,"continuity",void 0),e$2([y$3({type:Boolean,json:{write:!0}})],s$1.prototype,"hasNoData",void 0),e$2([y$3({type:Number,json:{write:!0}})],s$1.prototype,"noData",void 0),e$2([y$3({type:Number,json:{write:!0}})],s$1.prototype,"offset",void 0),e$2([y$3({type:Number,json:{write:!0}})],s$1.prototype,"scale",void 0),e$2([y$3({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s$1.prototype,"type",void 0),s$1=e$2([n$1("esri.layers.voxel.VoxelFormat")],s$1);const p$9=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i$1=class extends l$4{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null;}};e$2([y$3({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"id",void 0),e$2([y$3({type:String,json:{write:!0}})],i$1.prototype,"description",void 0),e$2([y$3({type:String,json:{write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"name",void 0),e$2([y$3({type:p$9,json:{write:!0}})],i$1.prototype,"originalFormat",void 0),e$2([y$3({type:p$9,json:{write:{enabled:!0,isRequired:!0}}})],i$1.prototype,"renderingFormat",void 0),e$2([y$3({type:String,json:{write:!0}})],i$1.prototype,"unit",void 0),e$2([y$3({type:Number,json:{write:!0}})],i$1.prototype,"volumeId",void 0),e$2([y$3({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],i$1.prototype,"type",void 0),i$1=e$2([n$1("esri.layers.voxel.VoxelVariable")],i$1);const p$8=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l$2=class extends(i$3(l$4)){constructor(){super(...arguments),this.color=l$5.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!0;}};e$2([y$3({type:l$5,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],l$2.prototype,"color",void 0),e$2([y$3({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l$2.prototype,"value",void 0),e$2([y$3({type:Boolean,json:{default:!0,write:!0}})],l$2.prototype,"enabled",void 0),e$2([y$3({type:String,json:{write:!0}})],l$2.prototype,"label",void 0),e$2([y$3({type:Boolean,json:{default:!1}})],l$2.prototype,"colorLocked",void 0),l$2=e$2([n$1("esri.layers.voxel.VoxelIsosurface")],l$2);const a$3=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let c$2=class extends(i$3(l$4)){constructor(){super(...arguments),this.color=null,this.position=0;}};e$2([y$3({type:l$5,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],c$2.prototype,"color",void 0),e$2([y$3({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],c$2.prototype,"position",void 0),c$2=e$2([n$1("esri.layers.voxel.VoxelColorStop")],c$2);const l$1=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p$7=class extends(i$3(l$4)){constructor(){super(...arguments),this.opacity=1,this.position=0;}};e$2([y$3({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],p$7.prototype,"opacity",void 0),e$2([y$3({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],p$7.prototype,"position",void 0),p$7=e$2([n$1("esri.layers.voxel.VoxelOpacityStop")],p$7);const i=p$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p$6=class extends(i$3(l$4)){constructor(){super(...arguments),this.enabled=!1,this.range=null;}};e$2([y$3({type:Boolean,json:{default:!1,write:!0}})],p$6.prototype,"enabled",void 0),e$2([y$3({type:[Number],json:{write:!0}})],p$6.prototype,"range",void 0),p$6=e$2([n$1("esri.layers.voxel.VoxelRangeFilter")],p$6);const a$2=p$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var u;!function(o){o[o.Color=1]="Color",o[o.Alpha=2]="Alpha",o[o.Both=3]="Both";}(u||(u={}));let y$1=class extends(i$3(l$4)){constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(j$1.ofType(l$1)),this.opacityStops=new(j$1.ofType(i));}set colorStops(o){this._set("colorStops",n$2(o,this._get("colorStops"),j$1.ofType(l$1)));}set opacityStops(o){this._set("opacityStops",n$2(o,this._get("opacityStops"),j$1.ofType(i)));}getPreviousNext(o,t,r){let e=o;for(;--e>0&&t[e].type!==r&&t[e].type!==u.Both;);let s=o;const i=t.length;for(;++s<i&&t[s].type!==r&&t[s].type!==u.Both;);return [e,s]}get rasterizedTransferFunction(){const o=[];if(this.colorStops.length<2)return o;const r=[],e=[],s=1e-5;for(const t of this.colorStops){if(!t.color)return o;e.push({color:{r:t.color.r,g:t.color.g,b:t.color.b,a:Math.round(255*(1-t.color.a))},position:t.position,type:u.Color});}if(0===this.opacityStops.length)for(const t of e)r.push({color:t.color,position:t.position});else {for(const t of this.opacityStops){const o=a$5(t.position,0,1),r=Math.round(255*a$5(1-t.opacity,0,1));let i=!1;for(const t of e)if(t.type===u.Color&&Math.abs(t.position-o)<s){t.color.a=r,t.type=u.Both,i=!0;break}i||e.push({color:{r:0,g:0,b:0,a:r},position:t.position,type:u.Alpha});}e.sort(((o,t)=>o.position<t.position?-1:1));const o=e.length;for(let t=0;t<o;++t){const r=e[t];if(r.type!==u.Both)if(r.type===u.Color){const[s,i]=this.getPreviousNext(t,e,u.Alpha);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position);r.color.a=Math.round(h$1(e[s].color.a,e[i].color.a,o));}else r.color.a=-1!==s?e[s].color.a:e[i].color.a;}else {const[s,i]=this.getPreviousNext(t,e,u.Color);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position),t=e[s].color,p=e[i].color;["r","g","b"].forEach((e=>{r.color[e]=Math.round(h$1(t[e],p[e],o));}));}else ["r","g","b"].forEach(-1!==s?o=>{r.color[o]=e[s][o];}:o=>{r.color[o]=e[i][o];});}}for(const t of e)r.push({color:t.color,position:t.position});}r[0].position=0,r[r.length-1].position=1;let i=0,l=1;for(let c=0;c<this._colorMapSize;++c){const e=c/this._colorMapSize;for(;e>r[l].position;)i=l++;const s=(e-r[i].position)/(r[l].position-r[i].position),a=r[i].color,h=r[l].color,f=new l$5;["r","g","b"].forEach((o=>{f[o]=Math.round(h$1(a[o],h[o],s));})),f.a=a$5(1-h$1(a.a,h.a,s)/255,0,1),o.push(f);}return o}getColorForContinuousDataValue(o,t){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let e=this.stretchRange[0],s=this.stretchRange[1];if(e>s){const o=e;e=s,s=o;}o=a$5(o,e,s);const i=r[Math.round((o-e)/(s-e)*(this._colorMapSize-1))].clone();return t||(i.a=1),i}};e$2([y$3({type:["linear","nearest"],json:{write:!0}})],y$1.prototype,"interpolation",void 0),e$2([y$3({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],y$1.prototype,"stretchRange",void 0),e$2([y$3({type:j$1.ofType(l$1),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],y$1.prototype,"colorStops",null),e$2([y$3({type:j$1.ofType(i),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return {enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],y$1.prototype,"opacityStops",null),e$2([y$3({type:a$2,json:{write:!0}})],y$1.prototype,"rangeFilter",void 0),e$2([y$3({type:[l$5],clonable:!1,json:{read:!1}})],y$1.prototype,"rasterizedTransferFunction",null),y$1=e$2([n$1("esri.layers.voxel.VoxelTransferFunctionStyle")],y$1);const g=y$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends(i$3(l$4)){constructor(){super(...arguments),this.color=l$5.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="";}};e$2([y$3({type:l$5,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],l.prototype,"color",void 0),e$2([y$3({type:T,json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"value",void 0),e$2([y$3({type:Boolean,json:{default:!0,write:!0}})],l.prototype,"enabled",void 0),e$2([y$3({type:String,json:{write:!0}})],l.prototype,"label",void 0),l=e$2([n$1("esri.layers.voxel.VoxelUniqueValue")],l);const a$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var p$5;let c$1=p$5=class extends l$4{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(j$1.ofType(a$1)),this.isosurfaces=new(j$1.ofType(a$3));}clone(){return new p$5({variableId:this.variableId,label:this.label,transferFunction:y$4(this.transferFunction),uniqueValues:y$4(this.uniqueValues),isosurfaces:y$4(this.isosurfaces)})}};e$2([y$3({type:T,json:{write:{enabled:!0,isRequired:!0}}})],c$1.prototype,"variableId",void 0),e$2([y$3({type:String,json:{write:!0}})],c$1.prototype,"label",void 0),e$2([y$3({type:g,json:{write:{enabled:!0,overridePolicy(){return {enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],c$1.prototype,"transferFunction",void 0),e$2([y$3({type:j$1.ofType(a$1),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],c$1.prototype,"uniqueValues",void 0),e$2([y$3({type:j$1.ofType(a$3),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return {enabled:e&&s}}}}})],c$1.prototype,"isosurfaces",void 0),c$1=p$5=e$2([n$1("esri.layers.voxel.VoxelVariableStyle")],c$1);const f$1=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$2=class extends l$4{constructor(){super(...arguments),this.values=null;}};e$2([y$3({type:[Number],json:{write:!0}})],t$2.prototype,"values",void 0),t$2=e$2([n$1("esri.layers.voxel.VoxelIrregularSpacing")],t$2);const p$4=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let t$1=class extends l$4{constructor(){super(...arguments),this.scale=1,this.offset=0;}};e$2([y$3({type:Number,json:{write:!0}})],t$1.prototype,"scale",void 0),e$2([y$3({type:Number,json:{write:!0}})],t$1.prototype,"offset",void 0),t$1=e$2([n$1("esri.layers.voxel.VoxelRegularSpacing")],t$1);const p$3=t$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p$2=class extends l$4{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null;}get isRegular(){return (null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};e$2([y$3({type:p$4,json:{write:!0}})],p$2.prototype,"irregularSpacing",void 0),e$2([y$3({type:Boolean,json:{write:!0}})],p$2.prototype,"isPositiveUp",void 0),e$2([y$3({type:Boolean,json:{write:!0}})],p$2.prototype,"isWrappedDateLine",void 0),e$2([y$3({type:String,json:{write:!0}})],p$2.prototype,"label",void 0),e$2([y$3({type:String,json:{write:!0}})],p$2.prototype,"name",void 0),e$2([y$3({type:String,json:{write:!0}})],p$2.prototype,"quantity",void 0),e$2([y$3({type:p$3,json:{write:!0}})],p$2.prototype,"regularSpacing",void 0),e$2([y$3({type:Number,json:{write:!0}})],p$2.prototype,"size",void 0),e$2([y$3({type:String,json:{write:!0}})],p$2.prototype,"unit",void 0),e$2([y$3({type:Boolean,json:{read:!1}})],p$2.prototype,"isRegular",null),p$2=e$2([n$1("esri.layers.voxel.VoxelDimension")],p$2);const a=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const d$1="esri.layers.voxel.VoxelVolume",y=s$4.getLogger(d$1);let f=class extends l$4{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=k$1.WGS84;}get zDimension(){if(!this.dimensions)return -1;if(!Array.isArray(this.dimensions))return -1;if(4!==this.dimensions.length)return -1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return -1}get isValid(){return !!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1))))}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return [0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return [e[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return [0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],t=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let n=0;n<3;++n)t[n]<2?t[n]=1:t[n]-=1;return s.isRegular&&!s.isPositiveUp&&(t[2]*=-1),[(e[1]-e[0])/t[0],(i[1]-i[0])/t[1],(r[1]-r[0])/t[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!e&&i)return "xyt";if(e&&i)return "xyzt"}return "xyz"}get sizeInVoxels(){if(!this.isValid)return [0,0,0];const e=this.zDimension;return [this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}computeVoxelSpaceLocation(e){if(!this.isValid)return [0,0,0];if("xyt"===this.volumeType)return y.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!E$2(this.spatialReference,e.spatialReference))return y.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=r$2(e.x,e.y,e.z??0);e$3(i,i,this.originInLayerSpace3D),i$4(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray(s.irregularSpacing?.values)&&s.irregularSpacing.values.length>1){const r=e.z??0,t=s.irregularSpacing.values,n=s.isPositiveUp?1:-1,o=t.reduce(((e,i)=>Math.abs(n*i-r)<Math.abs(n*e-r)?i:e));for(let e=0;e<t.length;++e)if(t[e]===o){i[2]=e;break}}return [i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new w({x:0,y:0,spatialReference:this.spatialReference});const i=e$4(e);if(c$4(i,i,this.voxelSizeInLayerSpaceSigned),u$3(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new w({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new w({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};e$2([y$3({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"id",void 0),e$2([y$3({type:[a],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"dimensions",void 0),e$2([y$3({type:k$1,json:{read:{enabled:!1}}})],f.prototype,"spatialReference",void 0),e$2([y$3({type:Number,json:{read:!1}})],f.prototype,"zDimension",null),e$2([y$3({type:[Boolean],json:{read:!1}})],f.prototype,"isValid",null),e$2([y$3({type:[Number],json:{read:!1}})],f.prototype,"originInLayerSpace3D",null),e$2([y$3({type:[Number],json:{read:!1}})],f.prototype,"voxelSizeInLayerSpaceSigned",null),e$2([y$3({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],f.prototype,"volumeType",null),e$2([y$3({type:[Number],json:{read:!1}})],f.prototype,"sizeInVoxels",null),f=e$2([n$1(d$1)],f);const S=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var t;let s=t=class extends l$4{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4];}isValid(){const e=new t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};e$2([y$3({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"apronWidth",void 0),e$2([y$3({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"brickSize",void 0),e$2([y$3({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"maxLodLevel",void 0),e$2([y$3({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"nodeSize",void 0),s=t=e$2([n$1("esri.layers.voxel.VoxelVolumeIndex")],s);const p$1=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m$1=class extends(i$3(l$4)){constructor(t){super(t),this.enabled=!0,this.label="",this.normal=null,this.point=null;}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=l$3(this.normal);return s$2.normalize(a$4(t),0,!0)}set orientation(t){const o=q(t,this.tilt);this._set("normal",o),this._set("orientation",t);}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[t,o]=l$3(this.normal);return s$2.normalize(a$4(o),0,!0)}set tilt(t){const o=q(this.orientation,t);this._set("normal",o),this._set("tilt",t);}};e$2([y$3({type:Boolean,json:{default:!0,write:!0}})],m$1.prototype,"enabled",void 0),e$2([y$3({type:String,json:{write:!0}})],m$1.prototype,"label",void 0),e$2([y$3({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),s$3((t=>s$2.normalize(a$4(t),0,!0)))],m$1.prototype,"orientation",null),e$2([y$3({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),s$3((t=>s$2.normalize(a$4(t),0,!0)))],m$1.prototype,"tilt",null),e$2([y$3({type:[Number],json:{write:!0}})],m$1.prototype,"normal",void 0),e$2([y$3({type:[Number],json:{write:!0}})],m$1.prototype,"point",void 0),m$1=e$2([n$1("esri.layers.voxel.VoxelDynamicSection")],m$1);const c=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var p;let m=p=class extends l$4{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(j$1.ofType(c$3)),this.dynamicSections=new(j$1.ofType(c));}set slices(e){this._set("slices",n$2(e,this._get("slices"),j$1.ofType(c$3)));}set dynamicSections(e){this._set("dynamicSections",n$2(e,this._get("dynamicSections"),j$1.ofType(c)));}clone(){return new p({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:y$4(this.slices),dynamicSections:y$4(this.dynamicSections)})}};e$2([y$3({type:T,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"volumeId",void 0),e$2([y$3({type:Number,json:{default:1,write:!0}})],m.prototype,"verticalExaggeration",void 0),e$2([y$3({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],m.prototype,"exaggerationMode",void 0),e$2([y$3({type:Number,json:{default:0,write:!0}})],m.prototype,"verticalOffset",void 0),e$2([y$3({type:j$1.ofType(c$3),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.slices&&this.slices.length>0}}}}})],m.prototype,"slices",null),e$2([y$3({type:j$1.ofType(c),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],m.prototype,"dynamicSections",null),m=p=e$2([n$1("esri.layers.voxel.VoxelVolumeStyle")],m);const d=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const E="esri.layers.VoxelLayer",R=s$4.getLogger(E);let M=class extends(N(p$d(c$5(v$1(t$4(O$1(i$5(b)))))))){constructor(e){super(e),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new p$a,this.opacity=1,this.variables=new j$1,this.volumes=new j$1,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.volumeStyles=new(j$1.ofType(d)),this.variableStyles=new(j$1.ofType(f$1)),this.sections=new(j$1.ofType(u$1));}set url(e){this._set("url",S$1(e,R));}load(e){const r=r$3(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(w$1).then((()=>this._fetchService(r))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}read(e,r){super.read(e,r);for(const i of this.volumes)i.spatialReference=this.spatialReference;}readVersion(e,r){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new s$5("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new s$5("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new s$5("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,r,i){if(null!=e&&"object"==typeof e){const o=w$2.fromJSON(e,i);if(0===o.zmin&&0===o.zmax&&Array.isArray(r.volumes)){const e=S.fromJSON(r.volumes[0]);if(e.isValid&&"xyt"!==e.volumeType){const r=e.dimensions[2];if(r.isRegular){let e=r.regularSpacing.offset,i=r.regularSpacing.offset+r.regularSpacing.scale*(r.size-1);if(e>i){const r=e;e=i,i=r;}o.zmin=e,o.zmax=i;}}}return o}return null}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index.isValid()?JSON.stringify(e):""}getVariableStyle(e){let r=-1;r=r$3(e)?e:this.currentVariableId;if(!this.variableStyles||-1===r)return null;const i=this.variableStyles.findIndex((e=>e.variableId===r));return i<0?null:this.variableStyles.getItemAt(i)}getVariable(e){let r=-1;if(r=r$3(e)?e:this.currentVariableId,!this.variables||-1===r)return null;const i=this.variables.findIndex((e=>e.id===r));return i<0?null:this.variables.getItemAt(i)}getVolume(e){const r=this.getVariable(e);return r$3(r)?this.volumes.find((({id:e})=>e===r.volumeId)):null}getVolumeStyle(e){const r=this.getVariable(e);return r$3(r)?this.volumeStyles.find((({volumeId:e})=>e===r.volumeId)):null}getColorForContinuousDataValue(e,r,i){const o=this.getVariable(e);if(!r$3(o)||"continuous"!==o.renderingFormat.continuity)return null;if(!this.variableStyles)return null;const s=this.variableStyles.findIndex((r=>r.variableId===e));if(s<0)return null;const n=this.variableStyles.getItemAt(s);return n.transferFunction?n.transferFunction.getColorForContinuousDataValue(r,i):null}getSections(){const e=[];for(const r of this.sections)e.push(new u$1({enabled:r.enabled,href:r.href,id:r.id,label:r.label,normal:r.normal,point:r.point,sizeInPixel:r.sizeInPixel,slices:r.slices,timeId:r.timeId,variableId:r.variableId}));return e}getVariableStyles(){const e=[];for(const r of this.variableStyles){const i=this._getVariable(r);if(r$3(i)){const o=r.clone();o.isosurfaces.length>4&&(o.isosurfaces=o.isosurfaces.slice(0,3),R.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const e of o.isosurfaces)if(e.colorLocked){const r=this.getColorForContinuousDataValue(o.variableId,e.value,!1);null===r||r.equals(e.color)||(e.color=r);}if("continuous"===i.renderingFormat.continuity)(null===o.transferFunction||o.transferFunction.colorStops.length<2)&&R.error(`VoxelVariableStyle for variable ${i.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),null!==o.transferFunction&&(Array.isArray(o.transferFunction.stretchRange)&&2===o.transferFunction.stretchRange.length||(R.error(`VoxelVariableStyle for variable ${i.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),o.transferFunction.stretchRange=[0,1],o.transferFunction.colorStops.removeAll()));else if("discrete"===i.renderingFormat.continuity)if(0===r.uniqueValues.length)R.error(`VoxelVariableStyle for variable ${i.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const e of r.uniqueValues)null!==e.label&&void 0!==e.label||null===e.value||void 0===e.value||(e.label=e.value.toString());e.push(o);}else R.error(`VoxelVariable ID=${r.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`);}return e}getVolumeStyles(){const e=[];for(const r of this.volumeStyles){const i=this._getVolumeFromVolumeId(r.volumeId);if(r$3(i)){const o=r.clone();for(const e of o.slices)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");for(const e of o.dynamicSections)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");e.push(o);}else R.error(`VoxelVolume ID=${r.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`);}return e}_getVariable(e){const r=e.variableId;for(const i of this.variables)if(i.id===r)return i;return null}_getVolumeFromVolumeId(e){for(const r of this.volumes)if(r.id===e)return r;return null}_isPlaneValid(e,r,i){if(!e.point)return !1;if(!Array.isArray(e.point)||3!==e.point.length)return !1;if(!e.normal)return !1;if(!Array.isArray(e.normal)||3!==e.normal.length)return !1;for(let s=0;s<3;++s){const o=e.point[s];if(o<0||o>=i[r[s]].size)return !1}const o=r$2(e.normal[0],e.normal[1],e.normal[2]);z(o,o);const t=1e-6;return !(Math.abs(o[0])+Math.abs(o[1])+Math.abs(o[2])<t)&&(e.normal[0]=o[0],e.normal[1]=o[1],e.normal[2]=o[2],!0)}};e$2([y$3(p$e)],M.prototype,"popupEnabled",void 0),e$2([y$3({type:["Voxel"]})],M.prototype,"operationalLayerType",void 0),e$2([y$3(c$6)],M.prototype,"legendEnabled",void 0),e$2([y$3({json:{write:!0}})],M.prototype,"title",void 0),e$2([y$3(f$3)],M.prototype,"url",null),e$2([y$3({type:j$1.ofType(u$1),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],M.prototype,"sections",void 0),e$2([y$3({type:T,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],M.prototype,"currentVariableId",void 0),e$2([y$3({type:j$1.ofType(d),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],M.prototype,"volumeStyles",void 0),e$2([y$3({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],M.prototype,"renderMode",void 0),e$2([y$3({type:j$1.ofType(f$1),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],M.prototype,"variableStyles",void 0),e$2([y$3({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],M.prototype,"enableSlices",void 0),e$2([y$3({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],M.prototype,"enableSections",void 0),e$2([y$3({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],M.prototype,"enableDynamicSections",void 0),e$2([y$3({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],M.prototype,"enableIsosurfaces",void 0),e$2([y$3({type:p$a,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],M.prototype,"shading",void 0),e$2([y$3({type:["show","hide"]})],M.prototype,"listMode",void 0),e$2([y$3({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],M.prototype,"opacity",void 0),e$2([y$3({type:j$1.ofType(p$8)})],M.prototype,"variables",void 0),e$2([y$3({type:j$1.ofType(S)})],M.prototype,"volumes",void 0),e$2([y$3({type:p$1})],M.prototype,"index",void 0),e$2([y$3({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],M.prototype,"minScale",void 0),e$2([y$3({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],M.prototype,"maxScale",void 0),e$2([y$3({json:{read:!1},readOnly:!0})],M.prototype,"type",void 0),e$2([y$3({readOnly:!0,json:{name:"serviceVersion"}})],M.prototype,"version",void 0),e$2([o("service","version")],M.prototype,"readVersion",null),e$2([y$3({type:w$2})],M.prototype,"fullExtent",void 0),e$2([o("service","fullExtent",["fullExtent"])],M.prototype,"readFullExtent",null),M=e$2([n$1(E)],M);const O=M;

export { O as default };
