/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{f as a}from"./associatedFeatureServiceUtils.js";import{f as t}from"./requestPresets.js";import{s as r}from"./layerUtils2.js";import{l as s}from"./lazyLayerLoader.js";import c from"../portal/PortalItem.js";import{h as n}from"./portalItemUtils.js";class i{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const s=await t(e,a);return this._serviceMetadatas.set(e,s),s}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}function l(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function o(e,a,t){if(null==e?.layers||null==e?.tables){const r=await t.fetchServiceMetadata(a,{customParameters:m(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(l),e.tables=e.tables||r?.tables?.map(l)}return e}function u(e){const{layers:a,tables:t}=e;return a?.length?a[0].id:t?.length?t[0].id:null}function m(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function y(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function f(e){const a=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}function p(e){return e?.layers?.filter((({layerType:e})=>"OrientedImageryLayer"===e)).map((({id:e})=>e))}function d(e){return e?.layers?.filter((({layerType:e})=>"CatalogLayer"===e)).map((({id:e})=>e))}async function L(e,t,r){if(!e?.url)return t??{};if(t??={},!t.layers){const a=await r.fetchServiceMetadata(e.url);t.layers=a.layers?.map(l)}const{serverUrl:s,portalItem:c}=await a(e.url,{sceneLayerItem:e,customParameters:m(t)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==s)return t.tables=[],t;if(!t.tables&&c){const e=await c.fetchData();if(e?.tables)t.tables=e.tables.map(l);else{const a=await r.fetchServiceMetadata(s,{customParameters:m(e)?.customParameters});t.tables=a?.tables?.map(l)}}if(t.tables)for(const e of t.tables)e.url=`${s}/${e.id}`;return t}async function w(t,s){switch(t.type){case"Map Service":return async function(e,a){const t=await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a);return t?{className:"TileLayer"}:{className:"MapImageLayer"}}(t,s);case"Feature Service":return async function(e,a){const t=await h(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(t,s);case"Feature Collection":return async function(e){await e.load();const a=n(e,"Map Notes"),t=n(e,"Markup");return a||t?{className:"MapNotesLayer"}:n(e,"Route Layer")?{className:"RouteLayer"}:1===y(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(t);case"Scene Service":return async function(e,t){const s=await h(e,t,(async()=>{try{if(!e.url)return[];const{serverUrl:r}=await a(e.url,{sceneLayerItem:e}),s=await t.fetchServiceMetadata(r);return s?.tables??[]}catch{return[]}}));if("object"==typeof s){const a={};let c;if(null!=s.id?(a.layerId=s.id,c=`${e.url}/layers/${s.id}`):c=e.url,e.typeKeywords?.length)for(const a of Object.keys(r))if(e.typeKeywords.includes(a))return{className:r[a]};const n=await t.fetchServiceMetadata(c,{customParameters:await t.fetchCustomParameters(e,(e=>m(e)?.customParameters))});return{className:r[n?.layerType]||"SceneLayer",properties:a}}if(!1===s){const a=await t.fetchServiceMetadata(e.url);if("Voxel"===a?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(t,s);case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"Image Service":return async function(e,a){await e.load();const t=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),s=r?.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),n=c.cacheType?.toLowerCase(),i=c.capabilities?.toLowerCase().includes("tilesonly");return"map"===n||i?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(t,s);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};case"Group Layer":return{className:"GroupLayer"};default:throw new e("portal:unknown-item-type","Unknown item type '${type}'",{type:t.type})}}async function h(e,a,t){const{url:r,type:s}=e,c="Feature Service"===s;if(!r)return{};if(/\/\d+$/.test(r)){if(c){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>m(e)?.customParameters))});if("Oriented Imagery Layer"===t.type)return{id:t.id,className:"OrientedImageryLayer",sourceJSON:t}}return{}}await e.load();let n=await a.fetchItemData(e);if(c){const e=await o(n,r,a),t=S(e);if("object"==typeof t){const a=f(e),r=p(e),s=d(e);t.className=null!=t.id&&a.includes(t.id)?"SubtypeGroupLayer":null!=t.id&&r?.includes(t.id)?"OrientedImageryLayer":null!=t.id&&s?.includes(t.id)?"CatalogLayer":"FeatureLayer"}return t}if("Scene Service"===s&&(n=await L(e,n,a)),y(n)>0)return S(n);const i=await a.fetchServiceMetadata(r);return t&&(i.tables=await t()),S(i)}function S(e){return 1===y(e)&&{id:u(e)}}const I=Object.freeze(Object.defineProperty({__proto__:null,fromItem:async function(e){!e.portalItem||e.portalItem instanceof c||(e={...e,portalItem:new c(e.portalItem)});const a=await async function(e){await e.load();const a=new i;return async function(e){const a=e.className,t=s[a];return{constructor:await t(),properties:e.properties}}(await w(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})},selectLayerClassPath:w},Symbol.toStringTag,{value:"Module"}));export{i as L,f as a,p as b,d as c,L as d,y as e,l as f,m as g,u as h,I as i,o as p,w as s};