/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../request.js";import t from"../core/Error.js";import{throwIfAbortError as r}from"../core/promiseUtils.js";import{removeFile as s,normalize as a}from"../core/urlUtils.js";import n from"../portal/Portal.js";import o from"../portal/PortalQueryParams.js";import{h as l}from"../core/lang.js";const i=()=>!!l("enable-feature:direct-3d-object-feature-layer-display"),c=()=>!!l("enable-i3s-patching"),u=()=>!!l("enable-feature:SceneLayer-editing");((e="i3s-patching")=>{switch(l.add("enable-i3s-patching",!1,!0,!0),l.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),l.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":l.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0);break;case"i3s-patching":l.add("enable-i3s-patching",!0,!0,!0)}})("i3s-patching");let f={};function y(e,a,l){return null!=e?.styleUrl?async function(e,t){try{return{data:(await p(e,t)).data,baseUrl:s(e),styleUrl:e}}catch(e){return r(e),null}}(e.styleUrl,l):null!=e?.styleName?function(e,r,s){const a=null!=r.portal?r.portal:n.getDefault();let l;const i=`${a.url} - ${a.user&&a.user.username} - ${e}`;return f[i]||(f[i]=function(e,r,s){return r.load(s).then((()=>{const t=new o({disableExtraQuery:!0,query:`owner:${b} AND type:${h} AND typekeywords:"${e}"`});return r.queryItems(t,s)})).then((({results:r})=>{let a=null;const n=e.toLowerCase();if(r&&Array.isArray(r))for(const e of r){const t=e.typeKeywords?.some((e=>e.toLowerCase()===n));if(t&&e.type===h&&e.owner===b){a=e;break}}if(!a)throw new t("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return a.load(s)}))}(e,a,s).then((e=>(l=e,e.fetchData()))).then((t=>({data:t,baseUrl:l.itemUrl??"",styleName:e})))),f[i]}(e.styleName,a,l):Promise.reject(new t("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function m(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function d(e,t,r=["gltf"]){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!l("enable-feature:force-wosr"))for(const t of r){const r=e.formatInfos.find((e=>e.type===t));if(r)return r.href}return e.webRef}function p(t,r){const s={responseType:"json",query:{f:"json"},...r};return e(a(t),s)}const b="esri_en",h="Style",j="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{j as S,u as a,i as d,y as f,c as i,m,p as r,d as s};