/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../request.js";import t from"../core/Error.js";import{join as r,getPathExtension as s}from"../core/urlUtils.js";import"../config.js";import"../core/lang.js";import"../kernel.js";import"../core/promiseUtils.js";import"./handleUtils.js";import"./Logger.js";import"./maybe.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";async function o(e,t={},s){await e.load(s);const o=r(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:i="created"}=t,p={query:{start:a,num:n,sortOrder:c,sortField:i,token:e.apiKey},signal:s?.signal},l=await e.portal.request(o,p);return{total:l.total,nextStart:l.nextStart,resources:l.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function a(e,s,o,a){const n=new Map;for(const{resource:e,content:r,compress:a,access:c}of s){if(!e.hasPath())throw new t(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const[s,p]=i(e.path),l=`${s}/${a??""}/${c??""}`;n.has(l)||n.set(l,{prefix:s,compress:a,access:c,files:[]}),n.get(l).files.push({fileName:p,content:r})}await e.load(a);const c=r(e.userItemUrl,"add"===o?"addResources":"updateResources");for(const{prefix:t,compress:r,access:s,files:o}of n.values()){const n=25;for(let i=0;i<o.length;i+=n){const p=o.slice(i,i+n),l=new FormData;t&&"."!==t&&l.append("resourcesPrefix",t),r&&l.append("compress","true"),s&&l.append("access",s);let u=0;for(const{fileName:e,content:t}of p)l.append("file"+ ++u,t,e);l.append("f","json"),await e.portal.request(c,{method:"post",body:l,signal:a?.signal})}}}async function n(e,s,o){if(!s.hasPath())throw new t("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const a=r(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:s.path},signal:o?.signal}),s.portalItem=null}async function c(e,t){await e.load(t);const s=r(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function i(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=s(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[o,a]=i(t);return[o,a,r]}async function l(t){return"blob"===t.type?t.blob:"json"===t.type?new Blob([t.jsonString],{type:"application/json"}):(await e(t.url,{responseType:"blob"})).data}function u(e,t){if(!e.hasPath())return null;const[s,,o]=p(e.path);return e.portalItem.resourceFromPath(r(s,t+o))}export{a as addOrUpdateResources,l as contentToBlob,o as fetchResources,u as getSiblingOfSameTypeI,c as removeAllResources,n as removeResource,p as splitPrefixFileNameAndExtension};