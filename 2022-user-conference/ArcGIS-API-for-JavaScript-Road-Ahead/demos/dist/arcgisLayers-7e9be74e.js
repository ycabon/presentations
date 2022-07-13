import { r, a8 as m$1, t, s, ab as w$1, ac as Ut, z as j, h as L } from './_virtual_index-fc1e0009.js';
import { a } from './lazyLayerLoader-89ee6144.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function y(e){const r=e.properties?.customParameters,a=await f(e.url,r),t={...e.properties,url:e.url};if(!a.sublayerIds)return null!=a.layerOrTableId&&(t.layerId=a.layerOrTableId,t.sourceJSON=a.sourceJSON),new a.Constructor(t);const s=new((await import('./_virtual_index-fc1e0009.js').then(function (n) { return n.rh; })).default)({title:a.parsedUrl.title});return c(s,a,t),s}function i(e,r){return e?e.find((e=>e.id===r)):null}function c(e,r$1,a){function s(e,s){const n={...a,layerId:e,sublayerTitleMode:"service-name"};return r(s)&&(n.sourceJSON=s),new r$1.Constructor(n)}r$1.sublayerIds.forEach((a=>{const t=s(a,i(r$1.sublayerInfos,a));e.add(t);})),r$1.tableIds.forEach((a=>{const t=s(a,i(r$1.tableInfos,a));e.tables.add(t);}));}async function f(e,t$1){let s$1=m$1(e);if(t(s$1)&&(s$1=await d(e,t$1)),t(s$1))throw new s("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:n,sublayer:o}=s$1;let u;const y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(n){case"MapServer":u=null!=o?"FeatureLayer":w(e,t$1).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=h(e,{customParameters:t$1}).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?"LERC"!==r?.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=h(s$1.url.path,{customParameters:t$1}).then((e=>{if(e){if("Voxel"===e?.layerType)return "VoxelLayer";if(e?.layers&&Array.isArray(e.layers)&&e.layers.length>0){const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},a=e.layers[0]?.layerType;if(null!=r[a])return r[a]}}return "SceneLayer"}));break;default:u=y[n];}const i={FeatureLayer:!0,SceneLayer:!0},c="FeatureServer"===n,f={parsedUrl:s$1,Constructor:null,layerOrTableId:c?o:null,sublayerIds:null,tableIds:null},m=await u;if(i[m]&&null==o){const r=await p(e,n,t$1);c&&(f.sublayerInfos=r.layerInfos,f.tableInfos=r.tableInfos);1!==r.layerIds.length+r.tableIds.length?(f.sublayerIds=r.layerIds,f.tableIds=r.tableIds):c&&(f.layerOrTableId=r.layerIds[0]??r.tableIds[0],f.sourceJSON=r.layerInfos[0]??r.tableInfos[0]);}return f.Constructor=await S(m),f}async function d(e,r$1){const a=await h(e,{customParameters:r$1});let l=null,u=null;const y=a.type;if("Feature Layer"===y||"Table"===y?(l="FeatureServer",u=a.id):"indexedVector"===y?l="VectorTileServer":a.hasOwnProperty("mapName")?l="MapServer":a.hasOwnProperty("bandCount")&&a.hasOwnProperty("pixelSizeX")?l="ImageServer":a.hasOwnProperty("maxRecordCount")&&a.hasOwnProperty("allowGeometryUpdates")?l="FeatureServer":a.hasOwnProperty("streamUrls")?l="StreamServer":m(a)?(l="SceneServer",u=a.id):a.hasOwnProperty("layers")&&m(a.layers?.[0])&&(l="SceneServer"),!l)return null;const i=null!=u?w$1(e):null;return {title:r(i)&&a.name||Ut(e),serverType:l,sublayer:u,url:{path:r(i)?i.serviceUrl:j(e).path}}}function m(e){return e?.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function p(e,r,a){let t,s=!1;if("FeatureServer"===r){const r=await b(e,{customParameters:a});s=!!r.layersJSON,t=r.layersJSON||r.serviceJSON;}else t=await h(e,{customParameters:a});const n=t?.layers,l=t?.tables;return {layerIds:n?.map((e=>e.id)).reverse()||[],tableIds:l?.map((e=>e.id)).reverse()||[],layerInfos:s?n:[],tableInfos:s?l:[]}}function I(e){return !e.type||"Feature Layer"===e.type}async function b(e,r){let a=await h(e,r);a=a||{},a.layers=a.layers?.filter(I)||[];const t={serviceJSON:a};if(a.currentVersion<10.5)return t;const s=await h(e+"/layers",r);return t.layersJSON={layers:s?.layers?.filter(I)||[],tables:s?.tables||[]},t}async function S(e){return (0, a[e])()}async function w(e,r){return (await h(e,{customParameters:r})).tileInfo}async function h(r,a){return (await L(r,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}})).data}

export { b as fetchFeatureService, y as fromUrl };
