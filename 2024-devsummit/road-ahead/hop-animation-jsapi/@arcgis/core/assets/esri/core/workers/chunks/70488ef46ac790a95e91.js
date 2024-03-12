"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1426],{81426:(t,e,r)=>{r.r(e),r.d(e,{executeForTopExtents:()=>l}),r(74569);var i=r(20438),o=r(66977),s=r(39210),n=r(21801);async function l(t,e,r){const l=(0,i.p)(t),u=await(0,o.b)(l,s.Z.from(e),{...r}),a=u.data.extent;return!a||isNaN(a.xmin)||isNaN(a.ymin)||isNaN(a.xmax)||isNaN(a.ymax)?{count:u.data.count,extent:null}:{count:u.data.count,extent:n.Z.fromJSON(a)}}r(91306),r(76506),r(92143),r(31450),r(73796),r(29768),r(12047),r(21972),r(17533),r(86656),r(66396),r(22723),r(6540),r(60991),r(34250),r(62062),r(6906),r(50406),r(97714),r(60947),r(53785),r(57251),r(73173),r(82058),r(88762),r(32101),r(2906),r(84069),r(91597),r(86787),r(35132),r(44567),r(63685),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(22781),r(32422),r(95533),r(94751),r(95307),r(22572),r(49214),r(76733),r(11385),r(55823),r(92847),r(93314),r(35197),r(8925),r(3482),r(76131),r(36097),r(90549)},66977:(t,e,r)=>{r.d(e,{a:()=>c,b:()=>h,c:()=>m,e:()=>y});var i=r(82058),o=r(32101),s=r(32422),n=r(95533),l=r(53785),u=r(49214),a=r(55823);const p="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),o=i;if(null!=r&&(o.geometry=JSON.stringify(r),o.geometryType=(0,s.Ji)(r),o.inSR=(0,l.X)(r.spatialReference)),i.topFilter?.groupByFields&&(o.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(o.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","):delete o.outFields,i.outSR?o.outSR=(0,l.X)(i.outSR):r&&i.returnGeometry&&(o.outSR=o.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(o.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return o}async function y(t,e,r,i){const o=await w(t,e,"json",i);return(0,a.a)(e,r,o.data),o}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:w(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(p);if(e.hasOwnProperty("count"))throw new Error(p);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r,s={},l={}){const a="string"==typeof t?(0,o.mN)(t):t,p=e.geometry?[e.geometry]:[];return s.responseType="pbf"===r?"array-buffer":"json",(0,n.aX)(p,null,s).then((t=>{const n=t?.[0];null!=n&&((e=e.clone()).geometry=n);const p=(0,u.m)({...a.query,f:r,...l,...d(e,l)});return(0,i.Z)((0,o.v_)(a.path,"queryTopFeatures"),{...s,query:{...p,...s.query}})}))}},39210:(t,e,r)=>{r.d(e,{Z:()=>j});var i,o=r(29768),s=r(74569),n=r(93314),l=r(57251),u=r(12047),a=r(76506),p=r(34250),d=r(91306),y=r(17533),c=r(2906),h=r(32422),m=r(90549),w=r(60947);r(21801),r(92143),r(31450),r(73796),r(97714),r(21972),r(86656),r(66396),r(22723),r(62062),r(6540),r(6906),r(50406),r(60991),r(53785),r(73173),r(82058),r(88762),r(32101),r(91597),r(86787),r(35132),r(84069),r(44567),r(63685),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(22781),r(35197),r(8925),r(3482),r(76131),r(36097);const b=new l.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),v=new l.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let F=i=class extends u.wq{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new i((0,a.d9)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],F.prototype,"cacheHint",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],F.prototype,"distance",void 0),(0,o._)([(0,p.Cb)({types:s.qM,json:{read:h.im,write:!0}})],F.prototype,"geometry",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],F.prototype,"geometryPrecision",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{write:!0}})],F.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],F.prototype,"num",void 0),(0,o._)([(0,p.Cb)({json:{write:!0}})],F.prototype,"objectIds",void 0),(0,o._)([(0,p.Cb)({type:[String],json:{write:!0}})],F.prototype,"orderByFields",void 0),(0,o._)([(0,p.Cb)({type:[String],json:{write:!0}})],F.prototype,"outFields",void 0),(0,o._)([(0,p.Cb)({type:w.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],F.prototype,"outSpatialReference",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],F.prototype,"resultType",void 0),(0,o._)([(0,p.Cb)({json:{write:!0}})],F.prototype,"returnGeometry",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],F.prototype,"returnM",void 0),(0,o._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],F.prototype,"returnZ",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],F.prototype,"start",void 0),(0,o._)([(0,c.w)("start"),(0,c.w)("num")],F.prototype,"writeStart",null),(0,o._)([(0,p.Cb)({type:String,json:{read:{source:"spatialRel",reader:b.read},write:{target:"spatialRel",writer:b.write}}})],F.prototype,"spatialRelationship",void 0),(0,o._)([(0,p.Cb)({type:n.Z,json:{write:!0}})],F.prototype,"timeExtent",void 0),(0,o._)([(0,p.Cb)({type:m.Z,json:{write:!0}})],F.prototype,"topFilter",void 0),(0,o._)([(0,p.Cb)({type:String,json:{read:v.read,write:{writer:v.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],F.prototype,"units",void 0),(0,o._)([(0,p.Cb)({type:String,json:{write:!0}})],F.prototype,"where",void 0),F=i=(0,o._)([(0,y.j)("esri.rest.support.TopFeaturesQuery")],F),F.from=(0,d.e)(F);const j=F},90549:(t,e,r)=>{r.d(e,{Z:()=>a});var i,o=r(29768),s=r(12047),n=r(34250),l=(r(76506),r(92143),r(17533));r(21972),r(86656),r(66396),r(22723),r(62062),r(6540),r(6906),r(50406),r(60991),r(31450),r(91306);let u=i=class extends s.wq{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,n.Cb)({type:[String],json:{write:!0}})],u.prototype,"groupByFields",void 0),(0,o._)([(0,n.Cb)({type:Number,json:{write:!0}})],u.prototype,"topCount",void 0),(0,o._)([(0,n.Cb)({type:[String],json:{write:!0}})],u.prototype,"orderByFields",void 0),u=i=(0,o._)([(0,l.j)("esri.rest.support.TopFilter")],u);const a=u}}]);