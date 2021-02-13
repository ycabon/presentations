import { e7 as D, e8 as w, h as s, a as u$1, e9 as gt, t, L } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function u(t,r={},a){await t.load(a);const s=D(t.itemUrl,"resources"),{start:n=1,num:u=10,sortOrder:c="asc",sortField:i="created"}=r,l={query:{start:n,num:u,sortOrder:c,sortField:i},signal:w(a,"signal")},p=await t.portal._request(s,l);return {total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:e,size:r,resource:a})=>({created:new Date(e),size:r,resource:t.resourceFromPath(a)})))}}async function c(r,s$1,n,u){if(!r.hasPath())throw new s(`portal-item-resource-${s$1}:invalid-path`,"Resource does not have a valid path");await r.portalItem.load(u);const c=D(r.portalItem.userItemUrl,"add"===s$1?"addResources":"updateResources"),[i,l]=p(r.path),m=await d(n),h=new FormData;return i&&"."!==i&&h.append("resourcesPrefix",i),h.append("fileName",l),h.append("file",m,l),h.append("f","json"),u$1(u)&&u.access&&h.append("access",u.access),await r.portalItem.portal._request(c,{method:"post",body:h,signal:w(u,"signal")}),r}async function i(t,r,s$1){if(!r.hasPath())throw new s("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await t.load(s$1);const n=D(t.userItemUrl,"removeResources");await t.portal._request(n,{method:"post",query:{resource:r.path},signal:w(s$1,"signal")}),r.portalItem=null;}async function l(t,r){await t.load(r);const a=D(t.userItemUrl,"removeResources");return t.portal._request(a,{method:"post",query:{deleteAll:!0},signal:w(r,"signal")})}function p(e){const t=e.lastIndexOf("/");return -1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function m(e){const[t$1,a]=function(e){const t$1=gt(e);if(t(t$1))return [e,""];return [e.slice(0,e.length-t$1.length-1),`.${t$1}`]}(e),[o,n]=p(t$1);return [o,n,a]}async function d(e){if(e instanceof Blob)return e;return (await L(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(D(r,t+a))}function f(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(D(r,t+a))}

export { c as addOrUpdateResource, d as contentToBlob, u as fetchResources, h as getSiblingOfSameType, f as getSiblingOfSameTypeI, l as removeAllResources, i as removeResource, m as splitPrefixFileNameAndExtension };
