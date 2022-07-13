import { o as o$1, t, a as n$5, m as me, b as ne, c as n$6, d as b, e as d$2, S as S$1, f as o$2, l as l$3, h as L, i as t$1, k as c$3, x, w, p as d$3, q as x$1, r as r$1, L as L$1, G, v, u as r$2, z as j, A as S$2, B as e, C as d$4, D as n$7, E as f, K, F as has, H as a$4, I as y$1, s as s$5, J as s$6, M as m$3, N as x$2, O as i$2, P as y$2, Q as o$4, R as k, g as g$1, T as d$5, n as nt } from './_virtual_index-4b72c57d.js';
import { o as o$3 } from './clientSideDefaults-8e243a4e.js';
import { n as n$8, s as s$4 } from './executeForIds-0f4f7b71.js';
import './QueryEngineCapabilities-140b3c8f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i$1(e,t){return t}function n$4(e,t,r,s){switch(r){case 0:return d$1(e,t+s,0);case 1:return "lowerLeft"===e.originPosition?d$1(e,t+s,1):l$2(e,t+s,1)}}function a$3(e,t,r,s){return 2===r?d$1(e,t,2):n$4(e,t,r,s)}function h(e,t,r,s){return 2===r?d$1(e,t,3):n$4(e,t,r,s)}function u$1(e,t,r,s){return 3===r?d$1(e,t,3):a$3(e,t,r,s)}function d$1({translate:e,scale:t},r,s){return e[s]+r*t[s]}function l$2({translate:e,scale:t},r,s){return e[s]-r*t[s]}class c$2{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=i$1,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=()=>{};}createFeatureResult(){return {fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=()=>{},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const s=o$1(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(!t(s))for(const t of e.features)s(t.geometry);}createSpatialReference(){return {}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this._attributesConstructor=function(){for(const e of r)this[e]=null;};}addFeature(e,t){e.features.push(t);}prepareFeatures(t){switch(this.transform=t.transform,this._options.applyTransform&&t.transform&&(this.applyTransform=this._deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e);break;default:n$5(t.geometryType);}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t);}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:i}=t,n=me(r.clone(),r,!1,!1,this.transform),a=ne(n,i,!1,!1);e.queryGeometryType=i,e.queryGeometry={...a};}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t;}}_transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r);}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r);}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s);}_createPolygonGeometry(e){return {rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return {paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return {points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),o.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s;}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?u$1:t?a$3:r?h:n$4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function n$3(o,s,n){const p=n$6(o),i={...n},u=b.from(s),m=!u.quantizationParameters,{data:f}=await d$2(p,u,new c$2({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n$2(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function a$2(o,r){const n={};for(const a of o){const{parentObjectId:o,parentGlobalId:c,attachmentInfos:i}=a;for(const a of i){const{id:i}=a,m=S$1(o$2(`${r}/${o}/attachments/${i}`)),p=l$3.fromJSON(a);p.set({url:m,parentObjectId:o,parentGlobalId:c}),n[o]?n[o].push(p):n[o]=[p];}}return n}function c$1(t,e,s){let a={query:t$1({...t.query,f:"json",...n$2(e)})};return s&&(a={...s,...a,query:{...s.query,...a.query}}),L(t.path+"/queryAttachments",a)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function a$1(a,m,n){const s=n$6(a);return c$1(s,c$3.from(m),{...n}).then((t=>a$2(t.data.attachmentGroups,s.path)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function m$2(m,n,s){const p=n$6(m);return x(p,b.from(n),{...s}).then((t=>({count:t.data.count,extent:w.fromJSON(t.data.extent)})))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function r(e,t,o){const r=await s$3(e,t,o),n=r.data,a=n.geometryType,d=n.spatialReference,c={};for(const s of n.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:d,hasZ:!!n.hasZ,hasM:!!n.hasM,features:s.relatedRecords};if(null!=s.objectId)c[s.objectId]=e;else for(const t in s)s.hasOwnProperty(t)&&"relatedRecords"!==t&&(c[s[t]]=e);}return {...r,data:c}}async function n$1(e,t,o){const r=await s$3(e,t,o,{returnCountOnly:!0}),n=r.data,a={};for(const s of n.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return {...r,data:a}}async function s$3(r,n,s={},a){const d=t$1({...r.query,f:"json",...a,...o(n,a)});return L(r.path+"/queryRelatedRecords",{...s,query:{...s.query,...d}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function n(e,n,u){n=d$3.from(n);const a=n$6(e);return r(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=x$1.fromJSON(r[t]))),e}))}async function u(r,o,n){o=d$3.from(o);const u=n$6(r);return n$1(u,o,{...n}).then((t=>t.data))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l$1="Layer does not support extent calculation.";function y(t,r){const o=t.geometry,i=t.toJSON(),s=i;if(r$1(o)&&(s.geometry=JSON.stringify(o),s.geometryType=v(o),s.inSR=o.spatialReference.wkid||JSON.stringify(o.spatialReference)),i.topFilter?.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(r?.returnCountOnly||r?.returnExtentOnly||r?.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=i.outSR.wkid||JSON.stringify(i.outSR):o&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent;}return s}async function d(t,e,r,o){const n=await c(t,e,"json",o);return r$2(e,r,n.data),n}async function m$1(t,r,o){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?{data:{objectIds:[]}}:c(t,r,"json",o,{returnIdsOnly:!0})}async function p(t,r,o){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?{data:{count:0,extent:null}}:c(t,r,"json",o,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(l$1);if(e.hasOwnProperty("count"))throw new Error(l$1);return t}))}function a(t,r,o){return r$1(r.timeExtent)&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(t,r,"json",o,{returnIdsOnly:!0,returnCountOnly:!0})}function c(n,u,l,d={},m={}){const p="string"==typeof n?j(n):n,a=u.geometry?[u.geometry]:[];return d.responseType="pbf"===l?"array-buffer":"json",L$1(a,null,d).then((o=>{const n=o&&o[0];r$1(n)&&((u=u.clone()).geometry=n);const i=t$1({...p.query,f:l,...m,...y(u,m)});return L(G(p.path,"queryTopFeatures"),{...d,query:{...i,...d.query}})}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function s$2(s,p,u,a){const m=n$6(s),i={...a},{data:f}=await d(m,S$2.from(p),u,i);return x$1.fromJSON(f)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function s$1(s,e,p){const a=n$6(s);return (await m$1(a,S$2.from(e),{...p})).data.objectIds}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=n$6(m),a=await p(p$1,S$2.from(s),{...n});return {count:a.data.count,extent:w.fromJSON(a.data.extent)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=n$6(s);return (await a(u,S$2.from(e),{...p})).data.count}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i=class extends f{constructor(...r){super(...r),this.requestOptions=null,this.url=null;}normalizeCtorArgs(r,s){return "string"!=typeof r?r:{url:r,...s}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(r){return r?j(r):null}_encode(r,s,t){const o={};for(const e in r){if("declaredClass"===e)continue;const i=r[e];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){o[e]=[];for(let r=0;r<i.length;r++)o[e][r]=this._encode(i[r]);}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(t&&t[e]);o[e]=s?r:JSON.stringify(r);}else o[e]=s?i:JSON.stringify(i);else o[e]=i;}return o}};e([d$4({readOnly:!0})],i.prototype,"parsedUrl",null),e([d$4()],i.prototype,"requestOptions",void 0),e([d$4({type:String})],i.prototype,"url",void 0),i=e([n$7("esri.tasks.Task")],i);const l=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let q$1=class extends l{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null;}execute(t,e){return this.executeJSON(t,e).then((r=>this.featureSetFromJSON(t,r,e)))}async executeJSON(t,e){const r={...this.requestOptions,...e},o=this._normalizeQuery(t),s=null!=t.outStatistics?.[0],i=has("featurelayer-pbf-statistics"),u=!s||i;let n;if("pbf"===this.format&&u)try{n=await n$3(this.url,o,r);}catch(p){if("query:parsing-pbf"!==p.name)throw p;this.format="json";}return "json"!==this.format&&u||(n=await a$4(this.url,o,r)),this._normalizeFields(n.fields),n}async featureSetFromJSON(t$1,e,o){if(!this._queryIs3DObjectFormat(t$1)||t(this.infoFor3D)||!e.features||!e.features.length)return x$1.fromJSON(e);const{meshFeatureSetFromJSON:i}=await y$1(import('./meshFeatureSet-c75c3ad1.js').then(function (n) { return n.a; }),o);return i(t$1,this.infoFor3D,e)}executeForCount(t,e){const r={...this.requestOptions,...e},o=this._normalizeQuery(t);return n$8(this.url,o,r)}executeForExtent(t,e){const r={...this.requestOptions,...e},o=this._normalizeQuery(t);return m$2(this.url,o,r)}executeForIds(t,e){const r={...this.requestOptions,...e},o=this._normalizeQuery(t);return s$4(this.url,o,r)}executeRelationshipQuery(t,e){t=d$3.from(t);const r={...this.requestOptions,...e};return (this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),n(this.url,t,r)}executeRelationshipQueryForCount(t,e){t=d$3.from(t);const r={...this.requestOptions,...e};return (this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),u(this.url,t,r)}executeAttachmentQuery(t,e){const r={...this.requestOptions,...e};return a$1(this.url,t,r)}executeTopFeaturesQuery(t,e){const r={...this.requestOptions,...e};return s$2(this.parsedUrl,t,this.sourceSpatialReference,r)}executeForTopIds(t,e){const r={...this.requestOptions,...e};return s$1(this.parsedUrl,t,r)}executeForTopExtents(t,e){const r={...this.requestOptions,...e};return m(this.parsedUrl,t,r)}executeForTopCount(t,e){const r={...this.requestOptions,...e};return s(this.parsedUrl,t,r)}_normalizeQuery(t$1){let s=b.from(t$1);if(s.sourceSpatialReference=s.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(s=s===t$1?s.clone():s,s.gdbVersion=t$1.gdbVersion||this.gdbVersion,s.dynamicDataSource=t$1.dynamicDataSource?K.from(t$1.dynamicDataSource):this.dynamicDataSource),r$1(this.infoFor3D)&&this._queryIs3DObjectFormat(t$1)){s=s===t$1?s.clone():s,s.formatOf3DObjects=null;for(const t of this.infoFor3D.queryFormats){if("3D_glb"===t.id){s.formatOf3DObjects=t.id;break}"3D_gltf"!==t.id||s.formatOf3DObjects||(s.formatOf3DObjects=t.id);}if(!s.formatOf3DObjects)throw new s$5("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t(s.outFields)||!s.outFields.includes("*")){s=s===t$1?s.clone():s,t(s.outFields)&&(s.outFields=[]);const{originX:e,originY:o,originZ:i,translationX:u,translationY:n,translationZ:a,scaleX:c,scaleY:p,scaleZ:m,rotationX:f,rotationY:l,rotationZ:h,rotationDeg:d}=this.infoFor3D.transformFieldRoles;s.outFields.push(e,o,i,u,n,a,c,p,m,f,l,h,d);}}return s}_normalizeFields(t){if(r$1(this.fieldsIndex)&&r$1(t))for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON());}}_queryIs3DObjectFormat(t){return r$1(this.infoFor3D)&&t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}};e([d$4({type:K})],q$1.prototype,"dynamicDataSource",void 0),e([d$4()],q$1.prototype,"fieldsIndex",void 0),e([d$4()],q$1.prototype,"format",void 0),e([d$4()],q$1.prototype,"gdbVersion",void 0),e([d$4()],q$1.prototype,"infoFor3D",void 0),e([d$4()],q$1.prototype,"sourceSpatialReference",void 0),q$1=e([n$7("esri.tasks.QueryTask")],q$1);const g=q$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const q=new s$6({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function I(e){if("string"==typeof e){const t=nt(e);return t||{data:e}}return new Promise(((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(nt(s.result)),s.onerror=e=>r(e);}))}const _=new Set(["Feature Layer","Table"]);let O=class extends m$3{constructor(){super(...arguments),this.type="feature-layer",this.refresh=x$2((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return {dataChanged:!0,updates:{}};try{await this._fetchService(null);}catch{return {dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return {dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}));}load(e){const t=r$1(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t$1,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:i,fieldsIndex:o}=this.layer,n=has("featurelayer-pbf")&&e&&t(s)?"pbf":"json";return new g({url:t$1.path,format:n,fieldsIndex:o,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:i})}async addAttachment(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",i=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,i.query);try{const e=await L(a,{body:o});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(s,n)}}async updateAttachment(e,t,s){await this.load();const a=e.attributes[this.layer.objectIdField],i=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),n=this._getFormDataForAttachment(s,o.query);try{const e=await L(i,{body:n});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(e,t){await this.load();const s=e.addFeatures.map(this._serializeFeature,this),a=e.updateFeatures.map(this._serializeFeature,this),i=this._getFeatureIds(e.deleteFeatures,t?.globalIdUsed);i$2(s,a,this.layer.spatialReference);const o=[],n=[],u=[...e.deleteAttachments];for(const r of e.addAttachments)o.push(await this._serializeAttachment(r));for(const r of e.updateAttachments)n.push(await this._serializeAttachment(r));const d=o.length||n.length||u.length?{adds:o,updates:n,deletes:u}:null,l={gdbVersion:t?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:t?.globalIdUsed,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,sessionId:t?.sessionId};t?.returnServiceEditsOption?(l.edits=JSON.stringify([{id:this.layer.layerId,adds:s,updates:a,deletes:i,attachments:d}]),l.returnServiceEditsOption=q.toJSON(t?.returnServiceEditsOption),l.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(l.adds=s.length?JSON.stringify(s):null,l.updates=a.length?JSON.stringify(a):null,l.deletes=i.length?t?.globalIdUsed?JSON.stringify(i):i.join(","):null,l.attachments=d&&JSON.stringify(d));const c=this._getLayerRequestOptions({method:"post",query:l}),h=t?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,p=await L(h+"/applyEdits",c);return this._createEditsResult(p)}async deleteAttachments(e,t){await this.load();const s=e.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return (await L(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:i}=this.layer,{data:o}=await L(`${i}/${a}`,t),{id:n,extent:u,fullExtent:d,timeExtent:l}=o,c=u||d;return {id:n,fullExtent:c&&w.fromJSON(c),timeExtent:l&&y$2.fromJSON({start:l[0],end:l[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:s}=this.layer,a=s.path;await this.load();const i=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,s=[];for(const e of t){const t=a+"/"+e+"/attachments";s.push(L(t,i));}return Promise.all(s).then((e=>t.map(((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))))).then((e=>a$2(e,a)))}return this.queryTask.executeAttachmentQuery(e,i)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const{data:s}=await L(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:has("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=s;}this.sourceJSON=this._patchServiceJSON(e);const s=e.type;if(!_.has(s))throw new s$5("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(e){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=o$3(e.geometryType).renderer;o$4("drawingInfo.renderer",t,e);}return "esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}_serializeFeature(e){const{geometry:t$1,attributes:r}=e;return t(t$1)?{attributes:r}:"mesh"===t$1.type||"extent"===t$1.type?null:{geometry:t$1.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:a,contentType:i,data:o,uploadId:n}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(u.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),n)u.uploadId=n;else if(o){const e=await I(o);u.contentType=e.mediaType,u.data=e.data,o instanceof File&&(u.name=o.name);}return a&&(u.name=a),i&&(u.contentType=i),u}_getFeatureIds(e,t){const r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_getGlobalIdsFromFeatureIdentifier(e){return e.map((e=>e.globalId))}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,s=[];let a=null;if(Array.isArray(t))for(const n of t)s.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===r&&(a={addResults:n.addResults,updateResults:n.updateResults,deleteResults:n.deleteResults,attachments:n.attachments,editMoment:n.editMoment});else a=t;const i=a?.attachments,o={addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]};if(a.editMoment&&(o.editMoment=a.editMoment),s.length>0){o.editedFeatureResults=[];for(const e of s){const{adds:t,updates:r,deletes:s,spatialReference:a}=e.editedFeatures,i=a?new k(a):null;o.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:t?.map((e=>this._createEditedFeature(e,i)))||[],updates:r?.map((e=>({original:this._createEditedFeature(e[0],i),current:this._createEditedFeature(e[1],i)})))||[],deletes:s?.map((e=>this._createEditedFeature(e,i)))||[],spatialReference:i}});}}return o}_createEditedFeature(e,r){return new g$1({attributes:e.attributes,geometry:d$5({...e.geometry,spatialReference:r})})}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:t?new s$5("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return {objectId:e,globalId:null,error:new s$5("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const s in t){const e=t[s];null!=e&&(r.set?r.set(s,e):r.append(s,e));}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return {...e,query:{gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}};e([d$4()],O.prototype,"type",void 0),e([d$4({constructOnly:!0})],O.prototype,"layer",void 0),e([d$4({readOnly:!0})],O.prototype,"queryTask",null),O=e([n$7("esri.layers.graphics.sources.FeatureLayerSource")],O);const S=O;

export { S as default };
