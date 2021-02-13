import { dH as p, t, h as s$1, L, a as u$1 } from './index.js';
import { a } from './lazyLayerLoader-9e4029ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function s(t$1){const s=await async function(r){const t$1=p(r);if(t(t$1))throw new s$1("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:s,sublayer:o}=t$1;let y;const c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(s){case"MapServer":y=null!=o?"FeatureLayer":async function(e){return (await i(e)).tileInfo}(r).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":y=i(r).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":y=i(t$1.url.path).then((e=>{const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const a=e.layers[0].layerType;if(null!=r[a])return r[a]}return "SceneLayer"}));break;default:y=c[s];}const d={FeatureLayer:!0,SceneLayer:!0},f="FeatureServer"===s,I={parsedUrl:t$1,Constructor:null,layerOrTableId:f?o:null,sublayerIds:null,tableIds:null},b=await y;if(d[b]&&null==o){const e=await async function(e,r){var a,t;let l,n=!1;if("FeatureServer"===r){const r=await async function(e){var r,a;let t=await i(e);t=t||{},t.layers=(null==(r=t.layers)?void 0:r.filter(u))||[];const l={serviceJSON:t};if(t.currentVersion<10.5)return l;const n=await i(e+"/layers");return l.layersJSON={layers:(null==n||null==(a=n.layers)?void 0:a.filter(u))||[],tables:(null==n?void 0:n.tables)||[]},l}(e);n=!!r.layersJSON,l=r.layersJSON||r.serviceJSON;}else l=await i(e);const s=null==(a=l)?void 0:a.layers,o=null==(t=l)?void 0:t.tables;return {layerIds:(null==s?void 0:s.map((e=>e.id)).reverse())||[],tableIds:(null==o?void 0:o.map((e=>e.id)).reverse())||[],layerInfos:n?s:[],tableInfos:n?o:[]}}(r,s);f&&(I.sublayerInfos=e.layerInfos,I.tableInfos=e.tableInfos);if(1!==e.layerIds.length+e.tableIds.length)I.sublayerIds=e.layerIds,I.tableIds=e.tableIds;else if(f){var p$1,v;I.layerOrTableId=null!=(p$1=e.layerIds[0])?p$1:e.tableIds[0],I.sourceJSON=null!=(v=e.layerInfos[0])?v:e.tableInfos[0];}}return I.Constructor=await async function(e){return (0, a[e])()}(b),I}(t$1.url),y={...t$1.properties,url:t$1.url};if(!s.sublayerIds)return null!=s.layerOrTableId&&(y.layerId=s.layerOrTableId,y.sourceJSON=s.sourceJSON),new s.Constructor(y);const c=new((await import('./GroupLayer-21c231b7.js')).default)({title:s.parsedUrl.title});return function(e,a,t){function l(e,l){const n={...t,layerId:e,sublayerTitleMode:"service-name"};return u$1(l)&&(n.sourceJSON=l),new a.Constructor(n)}a.sublayerIds.forEach((r=>{const t=l(r,o(a.sublayerInfos,r));e.add(t);})),a.tableIds.forEach((r=>{const t=l(r,o(a.tableInfos,r));e.tables.add(t);}));}(c,s,y),c}function o(e,r){return e?e.find((e=>e.id===r)):null}function u(e){return !e.type||"Feature Layer"===e.type}async function i(e){return (await L(e,{responseType:"json",query:{f:"json"}})).data}

export { s as fromUrl };
