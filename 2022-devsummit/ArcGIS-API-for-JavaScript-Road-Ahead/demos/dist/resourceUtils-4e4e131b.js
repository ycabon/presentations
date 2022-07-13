import { cK as D, cL as g, s, r, t, cM as qt, U } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
async function c(t,r={},a){await t.load(a);const s=D(t.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:u="asc",sortField:l="created"}=r,i={query:{start:n,num:c,sortOrder:u,sortField:l},signal:g(a,"signal")},p=await t.portal._request(s,i);return {total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:e,size:r,resource:a})=>({created:new Date(e),size:r,resource:t.resourceFromPath(a)})))}}async function u(r$1,s$1,n,c){if(!r$1.hasPath())throw new s(`portal-item-resource-${s$1}:invalid-path`,"Resource does not have a valid path");await r$1.portalItem.load(c);const u=D(r$1.portalItem.userItemUrl,"add"===s$1?"addResources":"updateResources"),[l,i]=p(r$1.path),m=await h(n),d=new FormData;return l&&"."!==l&&d.append("resourcesPrefix",l),d.append("fileName",i),d.append("file",m,i),d.append("f","json"),r(c)&&c.access&&d.append("access",c.access),await r$1.portalItem.portal._request(u,{method:"post",body:d,signal:g(c,"signal")}),r$1}async function l(t,r,s$1){if(!r.hasPath())throw new s("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await t.load(s$1);const n=D(t.userItemUrl,"removeResources");await t.portal._request(n,{method:"post",query:{resource:r.path},signal:g(s$1,"signal")}),r.portalItem=null;}async function i(t,r){await t.load(r);const a=D(t.userItemUrl,"removeResources");return t.portal._request(a,{method:"post",query:{deleteAll:!0},signal:g(r,"signal")})}function p(e){const t=e.lastIndexOf("/");return -1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function m(e){const[t,r]=d(e),[a,o]=p(t);return [a,o,r]}function d(e){const t$1=qt(e);return t(t$1)?[e,""]:[e.slice(0,e.length-t$1.length-1),`.${t$1}`]}async function h(e){if(e instanceof Blob)return e;return (await U(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(D(r,t+a))}function w(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(D(r,t+a))}

export { u as addOrUpdateResource, h as contentToBlob, c as fetchResources, f as getSiblingOfSameType, w as getSiblingOfSameTypeI, i as removeAllResources, l as removeResource, m as splitPrefixFileNameAndExtension };