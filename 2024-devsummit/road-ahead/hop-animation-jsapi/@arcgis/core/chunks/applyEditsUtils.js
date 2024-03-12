/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import t from"../Graphic.js";import e from"../core/Error.js";import{L as a}from"./Logger.js";import{Z as s}from"./unitUtils.js";import{parseData as r}from"../core/urlUtils.js";import{initializeProjection as o,project as n}from"../geometry/projection.js";import{fromJSON as l}from"../geometry/support/jsonUtils.js";import{isFeatureIdentifierArrayWithGlobalId as i,isFeatureIdentifierArrayWithObjectId as d}from"./editingSupport.js";async function u(t,e,a){const{geometry:r}=e,l={...e.attributes};if(null!=a&&"mesh"===r?.type){const{transformFieldRoles:e}=a,{origin:i,spatialReference:d,transform:u}=r,c=t.spatialReference;await o(d,c);const p=n(i,c);if(l[e.originX]=p.x,l[e.originY]=p.y,l[e.originZ]=p.z??0,null!=u){const{translation:t,scale:a,rotation:o}=u,{vertexSpace:n}=r,i="georeferenced"===n.type?1:s(d)/s(c);l[e.translationX]=t[0]*i,l[e.translationY]=t[2]*i,l[e.translationZ]=-t[1]*i,l[e.scaleX]=a[0],l[e.scaleY]=a[2],l[e.scaleZ]=a[1],l[e.rotationX]=o[0],l[e.rotationY]=o[2],l[e.rotationZ]=-o[1],l[e.rotationDeg]=o[3]}return{attributes:l}}return null==r?{attributes:l}:"mesh"===r.type||"extent"===r.type?null:{geometry:r.toJSON(),attributes:l}}async function c(t,e){const a=await Promise.all((e.addAttachments??[]).map((e=>p(t,e)))),s=await Promise.all((e.updateAttachments??[]).map((e=>p(t,e)))),r=e.deleteAttachments??[];return a.length||s.length||r.length?{adds:a,updates:s,deletes:[...r]}:null}async function p(t,e){const{feature:a,attachment:s}=e,{globalId:o,name:n,contentType:l,data:i,uploadId:d}=s,u={globalId:o};if(a&&("attributes"in a?u.parentGlobalId=a.attributes?.[t.globalIdField]:a.globalId&&(u.parentGlobalId=a.globalId)),d)u.uploadId=d;else if(i){const t=await r(i);t&&(u.contentType=t.mediaType,u.data=t.data),i instanceof File&&(u.name=i.name)}return n&&(u.name=n),l&&(u.contentType=l),u}function m(t,e,a){if(!e||0===e.length)return[];if(a&&i(e))return e.map((t=>t.globalId));if(d(e))return e.map((t=>t.objectId));const s=a?t.globalIdField:t.objectIdField;return s?e.map((t=>t.getAttribute(s))):[]}function g(t){const e=t?.assetMaps;if(e){for(const t of e.addResults)t.success||a.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`);for(const t of e.updateResults)t.success||a.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`)}const s=t?.attachments,r={addFeatureResults:t?.addResults?.map(f)??[],updateFeatureResults:t?.updateResults?.map(f)??[],deleteFeatureResults:t?.deleteResults?.map(f)??[],addAttachmentResults:s?.addResults?s.addResults.map(f):[],updateAttachmentResults:s?.updateResults?s.updateResults.map(f):[],deleteAttachmentResults:s?.deleteResults?s.deleteResults.map(f):[]};return t?.editMoment&&(r.editMoment=t.editMoment),r}function f(t){const a=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:a?new e("feature-layer-source:edit-failure",a.description,{code:a.code}):null}}function b(e,a){return new t({attributes:e.attributes,geometry:l({...e.geometry,spatialReference:a})})}function R(t,e){return{adds:t?.adds?.map((t=>b(t,e)))||[],updates:t?.updates?.map((t=>({original:b(t[0],e),current:b(t[1],e)})))||[],deletes:t?.deletes?.map((t=>b(t,e)))||[],spatialReference:e}}function y(t){const e=t.details.raw,a=+e.code,s=+e.extendedCode;return 500===a&&(-2147217144===s||-2147467261===s)}export{m as a,c as b,R as c,f as d,u as g,y as i,g as u};
