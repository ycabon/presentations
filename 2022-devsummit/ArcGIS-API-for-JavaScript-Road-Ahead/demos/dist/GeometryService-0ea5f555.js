import { U, cc as r$5, cv as e$1, cw as G, au as d, aQ as x, bU as p$1, bn as t$4, j as e$2, y, k as i$b, cx as d$1, c9 as a$1, c7 as m$5, c1 as a$2, c5 as U$1, cd as p$2 } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function o$7(o,s,e){const a=r$5(o),u={...a.query,f:"json",...s.toJSON()},f=e$1(u,e);return U(a.path+"/areasAndLengths",f).then((t=>t.data))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$4(t){return {geometryType:d(t[0]),geometries:t.map((e=>e.toJSON()))}}function o$6(e,r,o){const n=G(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i$a(i,n,m,p){const g=n[0].spatialReference,f=r$5(i),a={...f.query,f:"json",sr:JSON.stringify(g.toJSON()),polygons:JSON.stringify(r$4(n).geometries),polylines:JSON.stringify(r$4(m).geometries)},y=e$1(a,p);return U(f.path+"/autoComplete",y).then((({data:t})=>(t.geometries||[]).map((({rings:t})=>new x({spatialReference:g,rings:t})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function s$1(s,n,i){const m=r$5(s),a={...m.query,f:"json",...n.toJSON()},f=n.outSpatialReference||n.geometries[0].spatialReference,p=e$1(a,i);return U(m.path+"/buffer",p).then((r=>(r.data.geometries||[]).map((({rings:r})=>new x({spatialReference:f,rings:r})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i$9(i,n,m){const f=n[0].spatialReference,p=r$5(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r$4(n))},u=e$1(a,m);return U(p.path+"/convexHull",u).then((({data:e})=>p$1(e.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function o$5(o,i,n,m){const a=r$5(o),p=i[0].spatialReference,u={...m,query:{...a.query,f:"json",sr:JSON.stringify(p),target:JSON.stringify({geometryType:d(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await U(a.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return {cutIndexes:f,geometries:g.map((e=>{const r=p$1(e);return r.spatialReference=p,r}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function o$4(o,i,n){const m=i.geometries[0].spatialReference,p=r$5(o),a={...p.query,f:"json",...i.toJSON()},f=e$1(a,n);return U(p.path+"/densify",f).then((({data:t})=>(t.geometries||[]).map((t=>p$1(t).set({spatialReference:m})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i$8(i,m,n,f){const p=m[0].spatialReference,y=r$5(i);let a={query:{...y.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(r$4(m)),geometry:JSON.stringify({geometryType:d(n),geometry:n.toJSON()})}};return f&&(a={...f,...a}),U(y.path+"/difference",a).then((({data:e})=>(e.geometries||[]).map((e=>p$1(e).set({spatialReference:p})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function r$3(r,s,e){const a=r$5(r),i={...a.query,f:"json",...s.toJSON()},c=e$1(i,e);return U(a.path+"/distance",c).then((({data:t})=>t&&t.distance))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const _=new t$4({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function t$3(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=_.toJSON(f),c.conversionMode=i.conversionMode;const m=r$5(t),p={...m.query,f:"json",...c},u=e$1(p,e);return U(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i$7=new t$4({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function r$2(e){const{geometries:r,deviationUnit:s,maxDeviation:o}=e.toJSON(),n={maxDeviation:o};return r&&r.length&&(n.geometries=JSON.stringify({geometryType:d(r[0]),geometries:r}),n.sr=JSON.stringify(r[0].spatialReference)),i$7.write(s,n,"deviationUnit"),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends a$1{constructor(r){super(r),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null;}};e$2([y({type:String,json:{write:!0}})],p.prototype,"deviationUnit",void 0),e$2([y({json:{read:{reader:r=>r?r.map((r=>p$1(r))):null},write:{writer:(r,o)=>{o.geometries=r.map((r=>r.toJSON()));}}}})],p.prototype,"geometries",void 0),e$2([y({type:Number,json:{write:!0}})],p.prototype,"maxDeviation",void 0),p=e$2([i$b("esri.tasks.support.GeneralizeParameters")],p),p.from=d$1(p);var m$4=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i$6(i,m,p){const n=(m=m$4.from(m)).toJSON(),f=r$2(m),j=r$5(i),l={...j.query,f:"json",...f},u=n.geometries[0].spatialReference,c=e$1(l,p);return U(j.path+"/generalize",c).then((({data:r})=>(r.geometries||[]).map((r=>p$1(r).set({spatialReference:u})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function m$3(m,n,p,f){const y=n[0].spatialReference,a=r$5(m),g={...a.query,f:"json",sr:JSON.stringify(y.toJSON()),geometries:JSON.stringify(r$4(n)),geometry:JSON.stringify({geometryType:d(p),geometry:p.toJSON()})},u=e$1(g,f);return U(a.path+"/intersect",u).then((({data:e})=>(e.geometries||[]).map((e=>p$1(e).set({spatialReference:y})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$1(r,i,n){const p=i.map((t=>t.toJSON())),a=i[0].spatialReference,f=r$5(r),l={...f.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(p)},m=e$1(l,n);return U(f.path+"/labelPoints",m).then((({data:e})=>(e.labelPoints||[]).map((e=>p$1(e).set({spatialReference:a})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n$5=new t$4({preserveShape:"preserve-shape"});function o$3(e){const{polylines:o,lengthUnit:t,geodesic:i,calculationType:s}=e.toJSON(),r={};r.polylines=JSON.stringify(o);const l=e.polylines[0].spatialReference;return r.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),t&&(r.lengthUnit=t),i&&(r.geodesic=i),s&&(r.calculationType=n$5.toJSON(s)),r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let l=class extends a$1{constructor(o){super(o),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null;}};e$2([y({type:String,json:{write:!0}})],l.prototype,"calculationType",void 0),e$2([y({type:Boolean,json:{write:!0}})],l.prototype,"geodesic",void 0),e$2([y({json:{write:!0}})],l.prototype,"lengthUnit",void 0),e$2([y({type:[m$5],json:{read:{reader:o=>o?o.map((o=>p$1(o))):null},write:{writer:(o,r)=>{r.polylines=o.map((o=>o.toJSON()));}}}})],l.prototype,"polylines",void 0),l=e$2([i$b("esri.tasks.support.LengthsParameters")],l),l.from=d$1(l);var n$4=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function n$3(n,m,a){m=n$4.from(m);const p=o$3(m),f=r$5(n),i={...f.query,f:"json",...p},u=e$1(i,a);return U(f.path+"/lengths",u).then((({data:t})=>t))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o$2=new t$4({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),s=new t$4({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function r(e){const{geometries:r,bevelRatio:i,offsetDistance:f,offsetHow:n,offsetUnit:m}=e.toJSON(),l={bevelRatio:i,offsetDistance:f};return r&&r.length&&(l.geometries=JSON.stringify({geometryType:d(r[0]),geometries:r}),l.sr=JSON.stringify(r[0].spatialReference)),n&&(l.offsetHow=o$2.toJSON(n)),m&&(l.offsetUnit=s.toJSON(m)),l}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let i$5=class extends a$1{constructor(o){super(o),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null;}};e$2([y({type:Number,json:{write:!0}})],i$5.prototype,"bevelRatio",void 0),e$2([y({json:{read:{reader:o=>o?o.map((o=>p$1(o))):null},write:{writer:(o,r)=>{r.geometries=o.map((o=>o.toJSON()));}}}})],i$5.prototype,"geometries",void 0),e$2([y({type:Number,json:{write:!0}})],i$5.prototype,"offsetDistance",void 0),e$2([y({type:String,json:{write:!0}})],i$5.prototype,"offsetHow",void 0),e$2([y({type:String,json:{write:!0}})],i$5.prototype,"offsetUnit",void 0),i$5=e$2([i$b("esri.tasks.support.OffsetParameters")],i$5),i$5.from=d$1(i$5);var m$2=i$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function m$1(m,p,a){p=m$2.from(p);const i=r(p),n=r$5(m),j={...n.query,f:"json",...i},u=p.geometries[0].spatialReference,c=e$1(j,a);return U(n.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>p$1(e).set({spatialReference:u})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i$4=d$1(a$2);async function n$2(r,e,n){e=i$4(e);const u=r$5(r),a={...u.query,f:"json",...e.toJSON()},c=e.outSpatialReference,j=d(e.geometries[0]),f=e$1(a,n);return U(u.path+"/project",f).then((({data:{geometries:r}})=>o$6(r,j,c)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t$2=new t$4({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function o$1(e){const{geometries1:o,geometries2:r,relation:n,relationParameter:s}=e.toJSON(),a={};if(o&&o.length){a.geometries1=JSON.stringify({geometryType:d(o[0]),geometries:o});const e=o[0].spatialReference;a.sr=e.wkid?e.wkid:JSON.stringify(e);}return r&&r.length>0&&(a.geometries2=JSON.stringify({geometryType:d(r[0]),geometries:r})),n&&(a.relation=t$2.toJSON(n)),s&&(a.relationParam=s),a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let i$3=class extends a$1{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null;}};e$2([y({json:{read:{reader:r=>r?r.map((r=>p$1(r))):null},write:{writer:(r,o)=>{o.geometries1=r.map((r=>r.toJSON()));}}}})],i$3.prototype,"geometries1",void 0),e$2([y({json:{read:{reader:r=>r?r.map((r=>p$1(r))):null},write:{writer:(r,o)=>{o.geometries2=r.map((r=>r.toJSON()));}}}})],i$3.prototype,"geometries2",void 0),e$2([y({type:String,json:{write:!0}})],i$3.prototype,"relation",void 0),e$2([y({type:String,json:{write:!0}})],i$3.prototype,"relationParameter",void 0),i$3=e$2([i$b("esri.tasks.support.RelationParameters")],i$3),i$3.from=d$1(i$3);var a=i$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function e(e,n,i){n=a.from(n);const m=o$1(n),p=r$5(e),f={...p.query,f:"json",...m},u=e$1(f,i);return U(p.path+"/relation",u).then((({data:t})=>t.relations))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i$2(i,n,p,a){const f=n.spatialReference,m=r$5(i),y={...m.query,f:"json",sr:JSON.stringify(f.toJSON()),target:JSON.stringify({geometryType:d(n),geometry:n.toJSON()}),reshaper:JSON.stringify(p.toJSON())},g=e$1(y,a);return U(m.path+"/reshape",g).then((({data:e})=>p$1(e.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function o(o,m,f){const n="string"==typeof o?U$1(o):o,p=m[0].spatialReference,a=d(m[0]),u={...f,query:{...n.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(r$4(m))}},{data:y}=await U(n.path+"/simplify",u);return o$6(y.geometries,a,p)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function t$1(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=_.toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=r$5(t),u={...a.query,f:"json",...c},f=e$1(u,e);return U(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t=new t$4({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function n$1(e){const{extendHow:n,polylines:o,trimExtendTo:r}=e.toJSON(),i={};return i.extendHow=t.toJSON(n),o&&o.length&&(i.polylines=JSON.stringify(o),i.sr=JSON.stringify(o[0].spatialReference)),r&&(i.trimExtendTo=JSON.stringify(r)),i}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let m=class extends a$1{constructor(r){super(r),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null;}};e$2([y({type:String,json:{write:!0}})],m.prototype,"extendHow",void 0),e$2([y({type:[m$5],json:{read:{reader:r=>r?r.map((r=>p$1(r))):null},write:{writer:(r,o)=>{o.polylines=r.map((r=>r.toJSON()));}}}})],m.prototype,"polylines",void 0),e$2([y({json:{read:{reader:r=>r?p$1(r):null},write:{writer:(r,o)=>{o.trimExtendTo=r.toJSON();}}}})],m.prototype,"trimExtendTo",void 0),m=e$2([i$b("esri.tasks.support.TrimExtendParameters")],m),m.from=d$1(m);var n=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i$1(i,p,a){p=n.from(p);const n$2=n$1(p),f=r$5(i),j={...f.query,f:"json",...n$2},u=p.sr,y=e$1(j,a);return U(f.path+"/trimExtend",y).then((({data:r})=>(r.geometries||[]).map((({paths:r})=>new m$5({spatialReference:u,paths:r})))))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function i(i,n,m){const f=n[0].spatialReference,p=r$5(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r$4(n))},u=e$1(a,m);return U(p.path+"/union",u).then((({data:e})=>p$1(e.geometry).set({spatialReference:f})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let C=class extends p$2{constructor(r){super(r),this.url=null;}areasAndLengths(r,e){return o$7(this.url,r,e)}autoComplete(r,e,t){return i$a(this.url,r,e,t)}buffer(r,e){return s$1(this.url,r,e)}convexHull(r,e){return i$9(this.url,r,e)}cut(r,e,t){return o$5(this.url,r,e,t)}densify(r,e){return o$4(this.url,r,e)}difference(r,e,t){return i$8(this.url,r,e,t)}distance(r,e){return r$3(this.url,r,e)}fromGeoCoordinateString(r,e){return t$3(this.url,r,e)}generalize(r,e){return i$6(this.url,r,e)}intersect(r,e,t){return m$3(this.url,r,e,t)}labelPoints(r,e){return r$1(this.url,r,e)}lengths(r,e){return n$3(this.url,r,e)}offset(r,e){return m$1(this.url,r,e)}project(r,e){return n$2(this.url,r,e)}relation(r,e$1){return e(this.url,r,e$1)}reshape(r,e,t){return i$2(this.url,r,e,t)}simplify(r,e){return o(this.url,r,e)}toGeoCoordinateString(r,e){return t$1(this.url,r,e)}trimExtend(r,e){return i$1(this.url,r,e)}union(r,e){return i(this.url,r,e)}};C.UNIT_METER=9001,C.UNIT_GERMAN_METER=9031,C.UNIT_FOOT=9002,C.UNIT_SURVEY_FOOT=9003,C.UNIT_CLARKE_FOOT=9005,C.UNIT_FATHOM=9014,C.UNIT_NAUTICAL_MILE=9030,C.UNIT_SURVEY_CHAIN=9033,C.UNIT_SURVEY_LINK=9034,C.UNIT_SURVEY_MILE=9035,C.UNIT_KILOMETER=9036,C.UNIT_CLARKE_YARD=9037,C.UNIT_CLARKE_CHAIN=9038,C.UNIT_CLARKE_LINK=9039,C.UNIT_SEARS_YARD=9040,C.UNIT_SEARS_FOOT=9041,C.UNIT_SEARS_CHAIN=9042,C.UNIT_SEARS_LINK=9043,C.UNIT_BENOIT_1895A_YARD=9050,C.UNIT_BENOIT_1895A_FOOT=9051,C.UNIT_BENOIT_1895A_CHAIN=9052,C.UNIT_BENOIT_1895A_LINK=9053,C.UNIT_BENOIT_1895B_YARD=9060,C.UNIT_BENOIT_1895B_FOOT=9061,C.UNIT_BENOIT_1895B_CHAIN=9062,C.UNIT_BENOIT_1895B_LINK=9063,C.UNIT_INDIAN_FOOT=9080,C.UNIT_INDIAN_1937_FOOT=9081,C.UNIT_INDIAN_1962_FOOT=9082,C.UNIT_INDIAN_1975_FOOT=9083,C.UNIT_INDIAN_YARD=9084,C.UNIT_INDIAN_1937_YARD=9085,C.UNIT_INDIAN_1962_YARD=9086,C.UNIT_INDIAN_1975_YARD=9087,C.UNIT_FOOT_1865=9070,C.UNIT_RADIAN=9101,C.UNIT_DEGREE=9102,C.UNIT_ARCMINUTE=9103,C.UNIT_ARCSECOND=9104,C.UNIT_GRAD=9105,C.UNIT_GON=9106,C.UNIT_MICRORADIAN=9109,C.UNIT_ARCMINUTE_CENTESIMAL=9112,C.UNIT_ARCSECOND_CENTESIMAL=9113,C.UNIT_MIL6400=9114,C.UNIT_BRITISH_1936_FOOT=9095,C.UNIT_GOLDCOAST_FOOT=9094,C.UNIT_INTERNATIONAL_CHAIN=109003,C.UNIT_INTERNATIONAL_LINK=109004,C.UNIT_INTERNATIONAL_YARD=109001,C.UNIT_STATUTE_MILE=9093,C.UNIT_SURVEY_YARD=109002,C.UNIT_50KILOMETER_LENGTH=109030,C.UNIT_150KILOMETER_LENGTH=109031,C.UNIT_DECIMETER=109005,C.UNIT_CENTIMETER=109006,C.UNIT_MILLIMETER=109007,C.UNIT_INTERNATIONAL_INCH=109008,C.UNIT_US_SURVEY_INCH=109009,C.UNIT_INTERNATIONAL_ROD=109010,C.UNIT_US_SURVEY_ROD=109011,C.UNIT_US_NAUTICAL_MILE=109012,C.UNIT_UK_NAUTICAL_MILE=109013,C.UNIT_SQUARE_INCHES="esriSquareInches",C.UNIT_SQUARE_FEET="esriSquareFeet",C.UNIT_SQUARE_YARDS="esriSquareYards",C.UNIT_ACRES="esriAcres",C.UNIT_SQUARE_MILES="esriSquareMiles",C.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",C.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",C.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",C.UNIT_SQUARE_METERS="esriSquareMeters",C.UNIT_ARES="esriAres",C.UNIT_HECTARES="esriHectares",C.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",e$2([y()],C.prototype,"url",void 0),C=e$2([i$b("esri.tasks.GeometryService")],C);var g=C;

export default g;
