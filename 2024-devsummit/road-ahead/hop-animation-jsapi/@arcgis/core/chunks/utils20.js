/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{id as e}from"../kernel.js";import r from"../request.js";async function n(n,s,t){const u=e?.findCredential(n.restUrl);if(!u)return null;if("loaded"===n.loadStatus&&""===s&&n.user?.sourceJSON&&!1===t)return n.user.sourceJSON;const o={responseType:"json",query:{f:"json"}};if(t&&(o.query.returnUserLicenseTypeExtensions=!0),""===s){const e=await r(n.restUrl+"/community/self",o);if(e.data){const r=e.data;if(r?.username)return r}return null}const a=await r(n.restUrl+"/community/users/"+s,o);if(a.data){const e=a.data;return e.error?null:e}return null}async function s(e,r,s){const t=await n(e,r,!0);return t?.userLicenseTypeExtensions?.includes(s)??!1}export{s as h,n as l};
