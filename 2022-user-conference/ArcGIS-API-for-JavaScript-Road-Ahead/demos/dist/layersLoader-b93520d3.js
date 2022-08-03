import { h as L, s as s$1, dO as t, $ as B } from './_virtual_index-9b831d4a.js';
import { a } from './lazyLayerLoader-dc46fa3b.js';
import { e } from './jsonContext-a86a950d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function n(n){const{data:o}=await L(n,{responseType:"json",query:{f:"json"}});return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function l(e,t){const r=e.instance.portalItem;if(r&&r.id)return await r.load(t),s(e),i(e,t)}function s(t){const r=t.instance.portalItem;if(!t.supportedTypes.includes(r.type))throw new s$1("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:t.supportedTypes.join(", ")})}async function i(e$1,t$1){const r=e$1.instance,o=r.portalItem,{url:l,title:s}=o,i=e(o);if("group"===r.type)return r.read({title:s},i),u(r,e$1);l&&r.read({url:l},i);const c=await d(e$1,t$1);return c&&r.read(c,i),r.resourceReferences={portalItem:o,paths:i.readResourcePaths},r.read({title:s},i),t(r,i)}function u(r,n){let a$1;const o=r.portalItem.type;switch(o){case"Feature Service":case"Feature Collection":a$1=a.FeatureLayer;break;case"Stream Service":a$1=a.StreamLayer;break;case"Scene Service":a$1=a.SceneLayer;break;default:throw new s$1("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}let l;return a$1().then((e=>(l=e,d(n)))).then((async e=>"Feature Service"===o?(e=await f(e,r.portalItem.url),p(r,l,e)):I(e)>0?p(r,l,e):c(r,l)))}function c(e,t){return e.portalItem.url?n(e.portalItem.url).then((r=>{function n(e){return {id:e.id,name:e.name}}r&&p(e,t,{layers:r.layers?.map(n),tables:r.tables?.map(n)});})):Promise.resolve()}function p(e,t,r){let n=r.layers||[];const a=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{"Table"===e?.layerDefinition?.type&&a.push(e);})),n=n.filter((e=>"Table"!==e?.layerDefinition?.type))),n.reverse().forEach((n=>{const a=y(e,t,r,n);e.add(a);})),a.reverse().forEach((n=>{const a=y(e,t,r,n);e.tables.add(a);}));}function y(e,t,n,a){const o=new t({portalItem:e.portalItem.clone(),layerId:a.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||B.getDefault()};o.read(a,t);const l=n.showLegend;null!=l&&o.read({showLegend:l},t);}return o}function d(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(b(r)){let t,n=!0;return e&&I(e)>0&&(null==r.layerId&&(r.layerId=m(e)),t=h(e,r.layerId),t&&(1===I(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function f(e,t){if(null==e?.layers||null==e?.tables){const r=await n(t);(e=e||{}).layers=e.layers||r?.layers,e.tables=e.tables||r?.tables;}return e}function m(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function h(e,t){const r=e.layers;if(r)for(let a=0;a<r.length;a++)if(r[a].id===t)return r[a];const n=e.tables;if(n)for(let a=0;a<n.length;a++)if(n[a].id===t)return n[a];return null}function I(e){return (e?.layers?.length??0)+(e?.tables?.length??0)}function b(e){return "stream"!==e.type&&"layerId"in e}

var layersLoader = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getFirstLayerOrTableId: m,
	getNumLayersAndTables: I,
	load: l,
	preprocessFSItemData: f
});

export { I, f, layersLoader as l, m, n };
