/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{initializeProjection as e,project as t}from"../geometry/projection.js";import r from"../geometry/SpatialReference.js";import{webMercatorToGeographic as n}from"../geometry/support/webMercatorUtils.js";function o(e,t){if(!i(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function i(e,t){return!!e.typeKeywords?.includes(t)}function s(e){return i(e,l.HOSTED_SERVICE)}function a(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function c(e,t,r){r?o(e,t):a(e,t)}async function u(o){const i=o.clone().normalize();let s;if(i.length>1)for(const e of i)s?e.width>s.width&&(s=e):s=e;else s=i[0];return async function(o){const i=o.spatialReference;if(i.isWGS84)return o.clone();if(i.isWebMercator)return n(o);const s=r.WGS84;return await e(i,s),t(o,s)}(s)}const l={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function f(e){const{portal:t,isOrgItem:r,itemControl:n}=e,o=t.user?.privileges;let i=!o||o.includes("features:user:edit"),s=!!r&&!!o?.includes("features:user:fullEdit");const a="update"===n||"admin"===n;return a?s=i=!0:s&&(i=!0),{features:{edit:i,fullEdit:s},content:{updateItem:a}}}export{u as a,o as b,c,f as g,i as h,s as i,a as r,l as t};
