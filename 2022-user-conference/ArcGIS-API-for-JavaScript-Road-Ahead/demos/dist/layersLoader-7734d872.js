import { U, E as s, e7 as t, ea as s$1, a8 as j, eb as b$1, a7 as x, ec as d$1 } from './_virtual_index-1ea2035a.js';
import { e } from './jsonContext-4d6c9fc0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function n(n){const{data:o}=await U(n,{responseType:"json",query:{f:"json"}});return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function p(e,t){const r=e.instance.portalItem;if(r&&r.id)return await r.load(t),u(e),y(e,t)}function u(t){const r=t.instance.portalItem;if(!t.supportedTypes.includes(r.type))throw new s("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:t.supportedTypes.join(", ")})}async function y(e$1,t$1){const r=e$1.instance,a=r.portalItem,{url:n,title:l}=a,i=e(a);if("group"===r.type)return r.read({title:l},i),c(r,e$1);n&&r.read({url:n},i);const p=await h(e$1,t$1);return p&&r.read(p,i),r.resourceReferences={portalItem:a,paths:i.readResourcePaths},"subtype-group"!==r.type&&r.read({title:l},i),t(r,i)}function c(t,r){let a;const n=t.portalItem.type,o=r.layerModuleTypeMap,s$2=s$1(t.portalItem,"Oriented Imagery Layer")??!1;switch(n){case"Feature Service":a=s$2?o.OrientedImageryLayer:o.FeatureLayer;break;case"Stream Service":a=o.StreamLayer;break;case"Scene Service":a=o.SceneLayer;break;case"Feature Collection":a=o.FeatureLayer;break;default:throw new s("portal:unsupported-item-type-as-group",`The item type '${n}' is not supported as a 'IGroupLayer'`)}let i;return a().then((e=>(i=e,h(r)))).then((async e=>{let r=()=>i;if("Feature Service"===n){if(T(e=await b(e,t.portalItem.url)).length){const e=o.SubtypeGroupLayer,t=await e();r=e=>"SubtypeGroupLayer"===e.layerType?t:i;}return m(t,r,e)}return w(e)>0?m(t,r,e):d(t,r)}))}function d(e,t){return e.portalItem.url?n(e.portalItem.url).then((r=>{function a(e){return {id:e.id,name:e.name}}r&&m(e,t,{layers:r.layers?.map(a),tables:r.tables?.map(a)});})):Promise.resolve()}function m(e,t,r){let a=r.layers||[];const n=r.tables||[];if("Feature Collection"===e.portalItem.type&&(a.forEach((e=>{"Table"===e?.layerDefinition?.type&&n.push(e);})),a=a.filter((e=>"Table"!==e?.layerDefinition?.type))),"coverage"in r){const t=L(r);e.add(t);}a.reverse().forEach((a=>{const n=f(e,t(a),r,a);e.add(n);})),n.reverse().forEach((a=>{const n=f(e,t(a),r,a);e.tables.add(n);}));}function f(e,t,r,n){const o=new t({portalItem:e.portalItem.clone(),layerId:n.id});if("subtype-group"!==o.type&&(o.sublayerTitleMode="service-name"),"Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||j.getDefault()};o.read(n,t);const l=r.showLegend;null!=l&&o.read({showLegend:l},t);}return o}function h(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((e=>{if(v(r)){let t,a=!0;if(e&&w(e)>0){if(null==r.layerId){const t=T(e);r.layerId="subtype-group"===r.type?t?.[0]:g(e);}t=I(e,r),t&&(1===w(e)&&(a=!1),null!=e.showLegend&&(t.showLegend=e.showLegend));}return a&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function b(e,t){if(null==e?.layers||null==e?.tables){const r=await n(t);(e=e||{}).layers=e.layers||r?.layers,e.tables=e.tables||r?.tables;}return e}function g(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function I(e,t){const{layerId:r}=t,a=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return a&&S(a,t)?a:null}function w(e){return (e?.layers?.length??0)+(e?.tables?.length??0)}function v(e){return "stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}function L(a){const{coverage:o}=a;if(!o)return null;const l=new URL(o);if(o.toLowerCase().includes("item.html")){const e=l.searchParams.get("id"),r=l.origin;return b$1.fromPortalItem({portalItem:new x({id:e,url:r})})}if(d$1(o))return b$1.fromArcGISServerUrl({url:o});throw new s("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}function T(e){const t=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id);})),t}function S(e,t){return !("feature"===t.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===t.type&&!("layerType"in e))}

var layersLoader = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getFirstLayerOrTableId: g,
	getNumLayersAndTables: w,
	getSubtypeGroupLayerIds: T,
	load: p,
	preprocessFSItemData: b
});

export { T, b, g, layersLoader as l, n, w };
