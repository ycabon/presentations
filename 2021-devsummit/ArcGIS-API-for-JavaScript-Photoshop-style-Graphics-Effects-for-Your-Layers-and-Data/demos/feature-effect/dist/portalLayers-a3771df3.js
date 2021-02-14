import { d7 as k, U, O, s, L, bK as f$1 } from './index.js';
import { a } from './lazyLayerLoader-255f0e7c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(e,t){return !!e.typeKeywords&&e.typeKeywords.indexOf(t)>-1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(e){return !e.portalItem||e.portalItem instanceof k||(e={...e,portalItem:new k(e.portalItem)}),(r=e.portalItem,r.load().then(c).then(u)).then((r=>{const a={portalItem:e.portalItem,...r.properties},n=r.constructor;return U(new n(a))}));var r;}function c(e){switch(e.type){case"Map Service":return function(e){return function(e){return d(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return y(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return {className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){await e.load();if(t(e,"Map Notes"))return {className:"MapNotesLayer"};if(t(e,"Route Layer"))return {className:"RouteLayer"};if(1===f(await e.fetchData()))return {className:"FeatureLayer"};return {className:"GroupLayer"}}(e);case"Scene Service":return function(e){return y(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return {className:r[t]}}return d(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return {className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var r,t,a;await e.load();const n=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return {className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return {className:"ImageryTileLayer"};const o=await e.fetchData(),l=null==o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===l)return {className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===l)return {className:"ImageryLayer"};const s=await d(e.url);if("map"===(null==(a=s.cacheType)?void 0:a.toLowerCase()))return {className:"ImageryTileLayer"};return {className:"ImageryLayer"}}(e);case"Stream Service":return {className:"StreamLayer"};case"Vector Tile Service":return {className:"VectorTileLayer"};case"KML":return {className:"KMLLayer"};case"WMTS":return {className:"WMTSLayer"};case"WMS":return {className:"WMSLayer"};default:return O(new s("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function u(e){return (0, a[e.className])().then((r=>({constructor:r,properties:e.properties})))}function y(e){return !e.url||e.url.match(/\/\d+$/)?U({}):e.load().then((()=>e.fetchData())).then((r=>f(r)>0?m(r):d(e.url).then(m)))}function m(r){return 1===f(r)&&{id:f$1(p(r))}}function p(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function f(e){var r,t,a,n;return (null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(a=null==e||null==(n=e.tables)?void 0:n.length)?a:0)}function d(e){return L(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}

var portalLayers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fromItem: i,
	selectLayerClassPath: c
});

export { c, portalLayers as p, t };
