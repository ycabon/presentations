import { C, s as s$1, o as o$1, a as t, B } from './_virtual_index-49b2bc11.js';
import { a } from './lazyLayerLoader-d9f4f784.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(n){const{data:o}=await C(n,{responseType:"json",query:{f:"json"}});return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function o(e,t){const r=e.instance.portalItem;return r&&r.id?(await r.load(t),s(e),i(e,t)):Promise.resolve()}function s(t){const r=t.instance.portalItem;if(-1===t.supportedTypes.indexOf(r.type))throw new s$1("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:t.supportedTypes.join(", ")})}async function i(e,t$1){const r=e.instance,a=r.portalItem,{url:o,title:s}=a,i=o$1(a);if("group"===r.type)return r.read({title:s},i),u(r,e);o&&r.read({url:o},i);const c=await y(e,t$1);return c&&r.read(c,i),r.resourceReferences={portalItem:a,paths:i.readResourcePaths},r.read({title:s},i),t(r,i)}function u(r,n){let l;const a$1=r.portalItem.type;switch(a$1){case"Feature Service":case"Feature Collection":l=a.FeatureLayer;break;case"Stream Service":l=a.StreamLayer;break;case"Scene Service":l=a.SceneLayer;break;default:throw new s$1("portal:unsupported-item-type-as-group",`The item type '${a$1}' is not supported as a 'IGroupLayer'`)}let o;return l().then((e=>(o=e,y(n)))).then((async e=>"Feature Service"===a$1?(e=await m(e,r.portalItem.url),p(r,o,e)):h(e)>0?p(r,o,e):c(r,o)))}function c(e,t){return e.portalItem.url?n(e.portalItem.url).then((r=>{var n,l;function a(e){return {id:e.id,name:e.name}}r&&p(e,t,{layers:null==(n=r.layers)?void 0:n.map(a),tables:null==(l=r.tables)?void 0:l.map(a)});})):Promise.resolve()}function p(e,t,r){let n=r.layers||[];const l=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e);})),n=n.filter((e=>{var t;return "Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const l=d(e,t,r,n);e.add(l);})),l.reverse().forEach((n=>{const l=d(e,t,r,n);e.tables.add(l);}));}function d(e,t,n,l){const a=new t({portalItem:e.portalItem.clone(),layerId:l.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||B.getDefault()};a.read(l,t);const o=n.showLegend;null!=o&&a.read({showLegend:o},t);}return a}function y(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(I(r)){let t,n=!0;return e&&h(e)>0&&(null==r.layerId&&(r.layerId=f(e)),t=v(e,r.layerId),t&&(1===h(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function m(e,t){var r,n$1;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(n$1=e)?void 0:n$1.tables)){const r=await n(t);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables);}return e}function f(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function v(e,t){const r=e.layers;if(r)for(let l=0;l<r.length;l++)if(r[l].id===t)return r[l];const n=e.tables;if(n)for(let l=0;l<n.length;l++)if(n[l].id===t)return n[l];return null}function h(e){var t,r,n,l;return (null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}function I(e){return "stream"!==e.type&&"layerId"in e}

var layersLoader = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getFirstLayerOrTableId: f,
	getNumLayersAndTables: h,
	load: o,
	preprocessFSItemData: m
});

export { f, h, layersLoader as l, m, n };
