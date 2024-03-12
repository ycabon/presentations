"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1605,6646],{59765:(e,t,i)=>{i.d(t,{Z:()=>m,t:()=>c});var n=i(29768),r=i(66122),s=i(12047),o=i(35197),l=i(34250),a=(i(76506),i(92143),i(59465)),u=i(17533),d=i(57251);i(21972),i(86656),i(66396),i(22723),i(62062),i(6540),i(6906),i(50406),i(60991),i(31450),i(91306),i(8925),i(3482),i(76131),i(36097);const c=(0,d.s)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let p=class extends((0,r.J)(s.wq)){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return(0,o.c)(this.value,this.unit,"milliseconds")}};(0,n._)([(0,a.e)(c,{nonNullable:!0})],p.prototype,"unit",void 0),(0,n._)([(0,l.Cb)({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),p=(0,n._)([(0,u.j)("esri.TimeInterval")],p);const m=p},16204:(e,t,i)=>{i.d(t,{O:()=>n});class n{constructor(e=[],t=[],i=!1){this.lengths=e??[],this.coords=t??[],this.hasIndeterminateRingOrder=i}static fromRect(e){const[t,i,r,s]=e,o=r-t,l=s-i;return new n([5],[t,i,o,0,0,l,-o,0,0,-l])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let i=0;i<this.lengths.length;i++){const n=this.lengths[i];for(let i=0;i<n;i++)e(this.coords[2*(i+t)],this.coords[2*(i+t)+1]);t+=n}}deltaDecode(){const e=this.clone(),{coords:t,lengths:i}=e;let n=0;for(const e of i){for(let i=1;i<e;i++)t[2*(n+i)]+=t[2*(n+i)-2],t[2*(n+i)+1]+=t[2*(n+i)-1];n+=e}return e}clone(e){if(0===this.lengths.length)return new n([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),i=this.coords.slice(0,t);return e?(e.set(i),new n(this.lengths,e,this.hasIndeterminateRingOrder)):new n(Array.from(this.lengths),Array.from(i),this.hasIndeterminateRingOrder)}}},35154:(e,t,i)=>{i.d(t,{U:()=>r,i:()=>s,s:()=>o});var n=i(36097);class r{}function s(e){return e instanceof n.Z?e===r.instance:"unknown"===e?.toString().toLowerCase()}function o(e){return s(e)?r.instance:e}r.instance=new n.I("Etc/UTC")},53326:(e,t,i)=>{i.d(t,{a:()=>l,b:()=>w,c:()=>r,d:()=>h,e:()=>a,f:()=>s,g:()=>y,i:()=>f,k:()=>m,n:()=>b,s:()=>u,t:()=>o,u:()=>d,v:()=>c,x:()=>p});var n=i(21801);function r(e=g){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function s(e,t,i,n,s,o,l=r()){return l[0]=e,l[1]=t,l[2]=i,l[3]=n,l[4]=s,l[5]=o,l}function o(e,t){const i=isFinite(e[2])||isFinite(e[5]);return new n.Z(i?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t=[0,0,0]){return t[0]=function(e){return e[0]>=e[3]?0:e[3]-e[0]}(e),t[1]=function(e){return e[1]>=e[4]?0:e[4]-e[1]}(e),t[2]=function(e){return e[2]>=e[5]?0:e[5]-e[2]}(e),t}function d(e,t,i=e){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i!==e&&(i[3]=e[3],i[4]=e[4],i[5]=e[5]),i}function c(e,t,i=e){return i[3]=t[0],i[4]=t[1],i[5]=t[2],i!==e&&(i[0]=e[0],i[1]=e[1],i[2]=e[2]),e}function p(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function m(e){return e?p(e,b):r(b)}function h(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function y(e,t,i,n,r){return e[0]=t,e[1]=i,e[2]=Number.NEGATIVE_INFINITY,e[3]=n,e[4]=r,e[5]=Number.POSITIVE_INFINITY,e}function f(e){return 6===e.length}function w(e,t,i){if(null==e||null==t)return e===t;if(!f(e)||!f(t))return!1;if(i){for(let n=0;n<e.length;n++)if(!i(e[n],t[n]))return!1}else for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}i(92482);const b=[1/0,1/0,1/0,-1/0,-1/0,-1/0],g=[0,0,0,0,0,0];r()},9801:(e,t,i)=>{i.d(t,{f:()=>a,t:()=>l}),i(76506);var n=i(53523),r=i(42911),s=i(46826),o=i(45433);const l={key:"type",base:r.Z,typeMap:{range:o.Z,"coded-value":n.Z,inherited:s.Z}};function a(e){if(!e?.type)return null;switch(e.type){case"range":return o.Z.fromJSON(e);case"codedValue":return n.Z.fromJSON(e);case"inherited":return s.Z.fromJSON(e)}return null}},62670:(e,t,i)=>{i.d(t,{a:()=>D,b:()=>b,c:()=>P,d:()=>F,e:()=>A,f:()=>M,g:()=>_,h:()=>T,i:()=>Z,j:()=>j,k:()=>C,l:()=>O,m:()=>S,n:()=>N,o:()=>q,p:()=>I,q:()=>x,r:()=>E,s:()=>w,t:()=>U,u:()=>v,v:()=>R,w:()=>J});var n=i(88762),r=i(96467),s=i(41864),o=i(60991),l=i(57251),a=i(52991),u=i(17533),d=i(72992),c=i(39855),p=i(86758),m=i(95310),h=i(34446),y=i(31292),f=i(46646);const w=new l.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function b(e,t,i,n){const r=await V(e);if(await g(e,t,n),!r.addAttachment)throw new o.Z(n,"Layer source does not support addAttachment capability");return r.addAttachment(t,i)}function g(e,t,i){const{attributes:n}=t,{objectIdField:r}=e;return e.capabilities?.data?.supportsAttachment?t?n?r&&n[r]?Promise.resolve():Promise.reject(new o.Z(i,`feature is missing the identifying attribute ${r}`)):Promise.reject(new o.Z(i,"'attributes' are required on a feature to query attachments")):Promise.reject(new o.Z(i,"A feature is required to add/delete/update attachments")):Promise.reject(new o.Z(i,"this layer doesn't support attachments"))}async function v(e,t,i,n,r){const s=await V(e);if(await g(e,t,r),!s.updateAttachment)throw new o.Z(r,"Layer source does not support updateAttachment capability");return s.updateAttachment(t,i,n)}async function F(e,t,n){const{applyEdits:r}=await i.e(9231).then(i.bind(i,89231)),s=await e.load(),{source:o,globalIdField:l}=s;let a=n;return("feature"===s.type?s.infoFor3D:null)&&null!=t.deleteFeatures&&null!=l&&(a={...a,globalIdToObjectId:await J(e,t.deleteFeatures,l)}),r(s,o,t,n)}async function I(e,t,n){const{uploadAssets:r}=await i.e(9231).then(i.bind(i,89231)),s=await e.load();return r(s,s.source,t,n)}async function _(e,t,i,n){const r=await V(e);if(await g(e,t,n),!r.deleteAttachments)throw new o.Z(n,"Layer source does not support deleteAttachments capability");return r.deleteAttachments(t,i)}async function T(e,t,i){const n=(await e.load({signal:t?.signal})).source;if(!n.fetchRecomputedExtents)throw new o.Z(i,"Layer source does not support fetchUpdates capability");return n.fetchRecomputedExtents(t)}async function x(e,t,i,n){t=h.Z.from(t),await e.load();const r=e.source,s=e.capabilities;if(!s?.data?.supportsAttachment)throw new o.Z(n,"this layer doesn't support attachments");const{attachmentTypes:l,objectIds:a,globalIds:u,num:d,size:c,start:p,where:m}=t;if(!s?.operations?.supportsQueryAttachments&&(l?.length>0||u?.length>0||c?.length>0||d||p||m))throw new o.Z(n,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(a?.length||u?.length||m))throw new o.Z(n,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!r.queryAttachments)throw new o.Z(n,"Layer source does not support queryAttachments capability",t);return r.queryAttachments(t)}async function Z(e,t,i,n){const r=await V(e);if(!r.queryObjectIds)throw new o.Z(n,"Layer source does not support queryObjectIds capability");return r.queryObjectIds(y.Z.from(t)??e.createQuery(),i)}async function j(e,t,i,n){const r=await V(e);if(!r.queryFeatureCount)throw new o.Z(n,"Layer source does not support queryFeatureCount capability");return r.queryFeatureCount(y.Z.from(t)??e.createQuery(),i)}async function C(e,t,i,n){const r=await V(e);if(!r.queryExtent)throw new o.Z(n,"Layer source does not support queryExtent capability");return r.queryExtent(y.Z.from(t)??e.createQuery(),i)}async function O(e,t,i,n){const r=await V(e);if(!r.queryRelatedFeatures)throw new o.Z(n,"Layer source does not support queryRelatedFeatures capability");return r.queryRelatedFeatures(f.default.from(t),i)}async function S(e,t,i,n){const r=await V(e);if(!r.queryRelatedFeaturesCount)throw new o.Z(n,"Layer source does not support queryRelatedFeaturesCount capability");return r.queryRelatedFeaturesCount(f.default.from(t),i)}async function N(e){const t=e.source;if(t?.refresh)try{const{dataChanged:i,updates:n}=await t.refresh();if(null!=n&&(e.sourceJSON={...e.sourceJSON,...n},e.read(n,{origin:"service",url:e.parsedUrl})),i)return!0}catch{}if(e.definitionExpression)try{return(await(0,a.E)(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function M(e){const t=new y.Z,i=e.capabilities?.data,n=e.capabilities?.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,n&&(t.compactGeometryEnabled=n.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),i&&(i.supportsZ&&null!=e.returnZ&&(t.returnZ=e.returnZ),i.supportsM&&null!=e.returnM&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:r,timeExtent:s}=e;return t.timeExtent=null!=r&&null!=s?s.offset(-r.value,r.unit):s||null,t.multipatchOption="multipatch"===e.geometryType?"xyFootprint":null,t}function E(e){const{globalIdField:t,fields:i}=e;if(t)return t;if(i)for(const e of i)if("esriFieldTypeGlobalID"===e.type)return e.name}function q(e){const{objectIdField:t,fields:i}=e;if(t)return t;if(i)for(const e of i)if("esriFieldTypeOID"===e.type)return e.name}function R(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}async function V(e){return(await e.load()).source}async function A(e,t,i){const r=e.parsedUrl?.path;r&&e.authenticationTriggerEvent===t&&await async function(e,t){if(!n.id)return;if(n.id.findCredential(e))return;let i;try{const r=await(0,c.f)(e,t);r&&(i=await n.id.checkSignInStatus(`${r}/sharing`))}catch(e){}if(i)try{const i=null!=t?t.signal:null;await n.id.getCredential(e,{signal:i})}catch(e){}}(r,i)}function D(e){return!e.sourceJSON?.isMultiServicesView&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const L=(0,u.c)({types:r.QT});function P(e,t){if(e.defaultSymbol)return e.types?.length?new m.Z({defaultSymbol:L(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map((e=>({id:e.id,symbol:L(e.symbol,e,t)})))}):new p.Z({symbol:L(e.defaultSymbol,e,t)})}function U(e){let t=e.sourceJSON?.cacheMaxAge;if(!t)return!1;const i=e.editingInfo?.lastEditDate?.getTime();return null==i||(t*=1e3,Date.now()-i<t)}async function J(e,t,i){if(null==t)return null;const n=[],{objectIdField:r}=e;if(t.forEach((e=>{let t=null;if("attributes"in e){const{attributes:n}=e;t={globalId:n[i],objectId:null!=n[r]&&-1!==n[r]?n[r]:null}}else t={globalId:e.globalId,objectId:null!=e.objectId&&-1!==e.objectId?e.objectId:null};null!=t.globalId&&(null!=t.objectId&&-1!==t.objectId||n.push(t.globalId))})),0===n.length)return null;const o=e.createQuery();o.where=n.map((e=>`${i}='${e}'`)).join(" OR "),o.returnGeometry=!1,o.outFields=[r,i],o.cacheHint=!1;const l=await(0,s.a)((0,d.q)(e,o));if(!l.ok)return null;const a=new Map,u=l.value.features;for(const e of u){const t=e.attributes[i],n=e.attributes[r];null!=t&&null!=n&&-1!==n&&a.set(t,n)}return a}},72992:(e,t,i)=>{i.d(t,{q:()=>r});var n=i(31292);async function r(e,t,i){t=t.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=s(e));const n=function(e){return s(e)*function(e){return e.capabilities.query.maxRecordCount||2e3}(e)}(e),r=e.capabilities.query.supportsPagination;t.start=0,t.num=n;let o=null;for(;;){const s=await e.source.queryFeaturesJSON(t,i);if(null==o?o=s:o.features=o.features.concat(s.features),o.exceededTransferLimit=s.exceededTransferLimit,!r||!s.exceededTransferLimit)break;t.start+=n}return o}function s(e){return e.capabilities.query.supportsMaxRecordCountFactor?n.Z.MAX_MAX_RECORD_COUNT_FACTOR:1}},47346:(e,t,i)=>{i.d(t,{d:()=>a});var n=i(76506),r=i(92143),s=i(97546),o=i(1709),l=i(14249);function a(){return{fields:{type:[s.Z],value:null,set:function(e){if(e&&(0,n.h)("big-integer-warning-enabled")){const t=e.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(t.length){const e=t.map((e=>`'${e.name}'`)).join(", ");r.L.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${e}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",e)}},fieldsIndex:{readOnly:!0,get(){return o.Z.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e?.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e){const i=this.fieldsIndex?.has(t);i||r.L.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e})}return(0,l.Q0)(this.fieldsIndex,e)}}}}},54732:(e,t,i)=>{i.d(t,{k:()=>n});const n=new(i(57251).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},82377:(e,t,i)=>{i.d(t,{n:()=>c});var n=i(29768),r=i(93314),s=i(59765),o=i(34250),l=(i(76506),i(92143),i(97714)),a=i(17533),u=i(14249),d=i(77361);i(12047),i(21972),i(86656),i(66396),i(22723),i(62062),i(6540),i(6906),i(50406),i(60991),i(31450),i(35197),i(8925),i(57251),i(3482),i(76131),i(36097),i(2906),i(91306),i(66122),i(59465),i(66284),i(87239),i(82058),i(88762),i(32101),i(73173),i(82426),i(72836),i(66106),i(29794),i(74569),i(21801),i(73796),i(60947),i(53785),i(91597),i(86787),i(35132),i(84069),i(44567),i(63685),i(89034),i(98380),i(92482),i(92896),i(22781),i(32422);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const i=t.timeInfo.exportOptions;if(!i)return null;const n=i.timeOffset,r=s.t.fromJSON(i.timeOffsetUnits);return n&&r?new s.Z({value:n,unit:r}):null}set timeInfo(e){(0,u.UF)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,n._)([(0,o.Cb)({type:r.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,n._)([(0,o.Cb)({type:s.Z})],t.prototype,"timeOffset",void 0),(0,n._)([(0,l.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,n._)([(0,o.Cb)({value:null,type:d.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,n._)([(0,o.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,n._)([(0,a.j)("esri.layers.mixins.TemporalLayer")],t),t}},53523:(e,t,i)=>{i.d(t,{Z:()=>h});var n,r=i(29768),s=i(76506),o=i(34250),l=(i(92143),i(59465)),a=i(17533),u=i(12047),d=i(42911);i(91306),i(66396),i(22723),i(86656),i(60991),i(31450),i(57251),i(6540),i(21972),i(62062),i(6906),i(50406);let c=n=class extends u.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new n({name:this.name,code:this.code})}};var p;(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,r._)([(0,o.Cb)({type:[String,Number],json:{write:!0}})],c.prototype,"code",void 0),c=n=(0,r._)([(0,a.j)("esri.layers.support.CodedValue")],c);let m=p=class extends d.Z{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const i=String(e);this.codedValues.some((e=>(String(e.code)===i&&(t=e.name),!!t)))}return t}clone(){return new p({codedValues:(0,s.d9)(this.codedValues),name:this.name})}};(0,r._)([(0,o.Cb)({type:[c],json:{write:!0}})],m.prototype,"codedValues",void 0),(0,r._)([(0,l.e)({codedValue:"coded-value"})],m.prototype,"type",void 0),m=p=(0,r._)([(0,a.j)("esri.layers.support.CodedValueDomain")],m);const h=m},42911:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(29768),r=i(57251),s=i(12047),o=i(34250),l=(i(76506),i(92143),i(59465)),a=i(17533);i(31450),i(21972),i(86656),i(66396),i(22723),i(62062),i(6540),i(6906),i(50406),i(60991),i(91306);const u=new r.J({inherited:"inherited",codedValue:"coded-value",range:"range"});let d=class extends s.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],d.prototype,"name",void 0),(0,n._)([(0,l.e)(u)],d.prototype,"type",void 0),d=(0,n._)([(0,a.j)("esri.layers.support.Domain")],d);const c=d},97546:(e,t,i)=>{i.d(t,{Z:()=>f});var n,r=i(29768),s=i(57251),o=i(12047),l=i(34250),a=i(91306),u=(i(76506),i(59465)),d=i(97714),c=i(17533),p=i(9801),m=i(54732);i(31450),i(21972),i(92143),i(86656),i(66396),i(22723),i(62062),i(6540),i(6906),i(50406),i(60991),i(53523),i(42911),i(46826),i(45433);const h=new s.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let y=n=class extends o.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let i=null;try{i=t?JSON.parse(t):null}catch(e){}return i?.value??null}readValueType(e,{description:t}){let i=null;try{i=t?JSON.parse(t):null}catch(e){}return i?h.fromJSON(i.fieldValueType):null}clone(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],y.prototype,"alias",void 0),(0,r._)([(0,l.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],y.prototype,"defaultValue",void 0),(0,r._)([(0,l.Cb)()],y.prototype,"description",void 0),(0,r._)([(0,d.r)("description")],y.prototype,"readDescription",null),(0,r._)([(0,l.Cb)({types:p.t,json:{read:{reader:p.f},write:!0}})],y.prototype,"domain",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"editable",void 0),(0,r._)([(0,l.Cb)({type:a.I,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],y.prototype,"length",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],y.prototype,"nullable",void 0),(0,r._)([(0,u.e)(m.k)],y.prototype,"type",void 0),(0,r._)([(0,l.Cb)()],y.prototype,"valueType",void 0),(0,r._)([(0,d.r)("valueType",["description"])],y.prototype,"readValueType",null),(0,r._)([(0,l.Cb)({type:Boolean,json:{read:!1}})],y.prototype,"visible",void 0),y=n=(0,r._)([(0,c.j)("esri.layers.support.Field")],y);const f=y},1709:(e,t,i)=>{i.d(t,{Z:()=>p});var n=i(60991),r=i(12047),s=i(92143),o=i(91306),l=i(35154),a=i(14249),u=i(76131),d=i(36097);i(76506),i(31450),i(29768),i(21972),i(17533),i(86656),i(66396),i(22723),i(6540),i(34250),i(62062),i(6906),i(50406),i(66284),i(8925),i(57251),i(3482),i(87239),i(82058),i(88762),i(32101),i(73173),i(82426),i(72836),i(66106),i(29794),i(74569),i(21801),i(73796),i(97714),i(60947),i(53785),i(2906),i(91597),i(86787),i(35132),i(84069),i(44567),i(63685),i(89034),i(98380),i(92482),i(92896),i(22781),i(32422);const c=new Map;class p{static fromJSON(e){return new p(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new p(e.fields??[],f(e))}static fromLayerJSON(e){return new p(e.fields??[],f(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const i=[];for(const e of this.fields){const t=e?.name,n=h(t);if(t&&n){const r=m(t);this._fieldsMap.set(t,e),this._fieldsMap.set(r,e),this._normalizedFieldsMap.set(n,e),i.push(`${r}:${e.type}:${this._timeZoneByFieldName?.get(t)}`),(0,a.y2)(e)?(this.dateFields.push(e),this._dateFieldsSet.add(e)):(0,a.H7)(e)&&(this._numericFieldsSet.add(e),this.numericFields.push(e)),(0,a.Dl)(e)||(0,a.Se)(e)||(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable)}}i.sort(),this.uid=i.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,a.Dl)(e)||(0,a.Se)(e)||e.nullable||void 0!==(0,a.os)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(m(e))??this._normalizedFieldsMap.get(h(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&"string"!=typeof e?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):"date"===t.type||"esriFieldTypeDate"===t.type?(s.L.getLogger("esri.layers.support.FieldsIndex").error(new n.Z("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),u.u):y.has(t.type)?u.a:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u.a?l.U.instance:t===u.u?d.F.utcInstance:(0,o.g)(c,t,(()=>d.I.create(t))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return(0,a.sX)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,r.AK)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function m(e){return e.trim().toLowerCase()}function h(e){return(0,a.q6)(e)?.toLowerCase()??""}const y=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function f(e){const t=new Map;if(!e.fields)return t;const i=!0===e.datesInUnknownTimezone,{timeInfo:n,editFieldsInfo:r}=e,s=(n?"startField"in n?n.startField:n.startTimeField:"")??"",o=(n?"endField"in n?n.endField:n.endTimeField:"")??"",l="dateFieldsTimeZone"in e?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,u.f)(e.dateFieldsTimeReference):null,a=r?"timeZone"in r?r.timeZone??l:r.dateFieldsTimeReference?(0,u.f)(r.dateFieldsTimeReference):l??u.u:null,d=n?"timeZone"in n?n.timeZone??l:n.timeReference?(0,u.f)(n.timeReference):l:null,c=new Map([[m(r?.creationDateField??""),a],[m(r?.editDateField??""),a],[m(s),d],[m(o),d]]);for(const{name:n,type:r}of e.fields)if(y.has(r))t.set(n,u.a);else if("date"!==r&&"esriFieldTypeDate"!==r)t.set(n,null);else if(i)t.set(n,u.a);else{const e=c.get(m(n??""))??l;t.set(n,e)}return t}},46826:(e,t,i)=>{i.d(t,{Z:()=>u});var n,r=i(29768),s=(i(92143),i(76506),i(60991),i(59465)),o=i(17533),l=i(42911);i(31450),i(57251),i(34250),i(91306),i(66396),i(22723),i(86656),i(6540),i(12047),i(21972),i(62062),i(6906),i(50406);let a=n=class extends l.Z{constructor(e){super(e),this.type="inherited"}clone(){return new n}};(0,r._)([(0,s.e)({inherited:"inherited"})],a.prototype,"type",void 0),a=n=(0,r._)([(0,o.j)("esri.layers.support.InheritedDomain")],a);const u=a},45433:(e,t,i)=>{i.d(t,{Z:()=>d});var n,r=i(29768),s=i(34250),o=(i(76506),i(92143),i(59465)),l=i(17533),a=i(42911);i(91306),i(66396),i(22723),i(86656),i(60991),i(31450),i(57251),i(6540),i(12047),i(21972),i(62062),i(6906),i(50406);let u=n=class extends a.Z{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new n({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,r._)([(0,s.Cb)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,i){t[i]=[this.minValue||0,e]}}}})],u.prototype,"maxValue",void 0),(0,r._)([(0,s.Cb)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,i){t[i]=[e,this.maxValue||0]}}}})],u.prototype,"minValue",void 0),(0,r._)([(0,o.e)({range:"range"})],u.prototype,"type",void 0),u=n=(0,r._)([(0,l.j)("esri.layers.support.RangeDomain")],u);const d=u},77361:(e,t,i)=>{i.d(t,{Z:()=>y});var n=i(29768),r=i(93314),s=i(59765),o=i(66122),l=i(12047),a=i(34250),u=(i(76506),i(92143),i(97714)),d=i(17533),c=i(2906),p=i(76131);function m(e,t){return s.Z.fromJSON({value:e,unit:t})}i(35197),i(8925),i(57251),i(31450),i(3482),i(22723),i(36097),i(21972),i(86656),i(66396),i(62062),i(6540),i(6906),i(50406),i(60991),i(91306),i(59465);let h=class extends((0,o.J)(l.wq)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const i=new Date(t.timeExtent[0]),n=new Date(t.timeExtent[1]);return new r.Z({start:i,end:n})}writeFullTimeExtent(e,t){null!=e?.start&&null!=e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?m(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?m(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){t.timeInterval=e?.toJSON().value??null,t.timeIntervalUnits=e?.toJSON().unit??null}};(0,n._)([(0,a.Cb)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],h.prototype,"cumulative",void 0),(0,n._)([(0,a.Cb)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],h.prototype,"endField",void 0),(0,n._)([(0,a.Cb)({type:r.Z,json:{write:{enabled:!0,allowNull:!0}}})],h.prototype,"fullTimeExtent",void 0),(0,n._)([(0,u.r)("fullTimeExtent",["timeExtent"])],h.prototype,"readFullTimeExtent",null),(0,n._)([(0,c.w)("fullTimeExtent")],h.prototype,"writeFullTimeExtent",null),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],h.prototype,"hasLiveData",void 0),(0,n._)([(0,a.Cb)({type:s.Z,json:{write:{enabled:!0,allowNull:!0}}})],h.prototype,"interval",void 0),(0,n._)([(0,u.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],h.prototype,"readInterval",null),(0,n._)([(0,c.w)("interval")],h.prototype,"writeInterval",null),(0,n._)([(0,a.Cb)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],h.prototype,"startField",void 0),(0,n._)([(0,a.Cb)((0,p.t)("timeReference",!0))],h.prototype,"timeZone",void 0),(0,n._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],h.prototype,"trackIdField",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],h.prototype,"useTime",void 0),h=(0,n._)([(0,d.j)("esri.layers.support.TimeInfo")],h);const y=h},46646:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var n,r=i(29768),s=(i(74569),i(12047)),o=i(76506),l=i(34250),a=i(91306),u=i(17533),d=i(2906),c=i(69218),p=i(60947);i(21801),i(92143),i(31450),i(73796),i(97714),i(21972),i(86656),i(66396),i(22723),i(62062),i(6540),i(6906),i(50406),i(60991),i(53785),i(57251),i(73173),i(82058),i(88762),i(32101),i(91597),i(86787),i(35132),i(84069),i(44567),i(63685),i(89034),i(98380),i(92482),i(82426),i(72836),i(66106),i(29794),i(92896),i(22781),i(32422),i(59465),i(97546),i(9801),i(53523),i(42911),i(46826),i(45433),i(54732);let m=n=class extends s.wq{constructor(e){super(e),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(t.definitionExpression="1=1")}clone(){return new n((0,o.d9)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,r._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"cacheHint",void 0),(0,r._)([(0,l.Cb)({type:c.D,json:{write:!0}})],m.prototype,"dynamicDataSource",void 0),(0,r._)([(0,l.Cb)({type:String,json:{write:!0}})],m.prototype,"gdbVersion",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],m.prototype,"geometryPrecision",void 0),(0,r._)([(0,l.Cb)({type:Date})],m.prototype,"historicMoment",void 0),(0,r._)([(0,d.w)("historicMoment")],m.prototype,"_writeHistoricMoment",null),(0,r._)([(0,l.Cb)({type:Number,json:{write:!0}})],m.prototype,"maxAllowableOffset",void 0),(0,r._)([(0,l.Cb)({type:[Number],json:{write:!0}})],m.prototype,"objectIds",void 0),(0,r._)([(0,l.Cb)({type:[String],json:{write:!0}})],m.prototype,"orderByFields",void 0),(0,r._)([(0,l.Cb)({type:[String],json:{write:!0}})],m.prototype,"outFields",void 0),(0,r._)([(0,l.Cb)({type:p.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],m.prototype,"outSpatialReference",void 0),(0,r._)([(0,l.Cb)({json:{write:!0}})],m.prototype,"relationshipId",void 0),(0,r._)([(0,l.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],m.prototype,"start",void 0),(0,r._)([(0,d.w)("start"),(0,d.w)("num")],m.prototype,"writeStart",null),(0,r._)([(0,l.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],m.prototype,"num",void 0),(0,r._)([(0,l.Cb)({json:{write:!0}})],m.prototype,"returnGeometry",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],m.prototype,"returnM",void 0),(0,r._)([(0,l.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],m.prototype,"returnZ",void 0),(0,r._)([(0,l.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],m.prototype,"where",void 0),m=n=(0,r._)([(0,u.j)("esri.rest.support.RelationshipQuery")],m),m.from=(0,a.e)(m);const h=m}}]);