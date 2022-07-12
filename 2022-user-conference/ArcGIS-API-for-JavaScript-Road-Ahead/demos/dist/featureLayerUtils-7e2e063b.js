import { C as s, dW as x$1, lV as i, bQ as B$1, s as s$1, lW as a, lX as i$1, lY as f, lZ as s$2, l_ as Ke, cx as E$1, O as t, l$ as l, cz as b$1, iT as m, G as r, m0 as a$1, m1 as c } from './_virtual_index-64b818a8.js';
import { fetchFeatureService as b } from './arcgisLayers-1ffb7061.js';
import { o } from './jsonContext-050d86f9.js';
import './lazyLayerLoader-e404acbe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const I=s.getLogger("esri.layers.FeatureLayer"),S="Feature Service";function g(e,t){return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function j(e,a){if(a.type!==S)throw new s$1("feature-layer:portal-item-wrong-type",g(e,`should have portal item of type "${S}"`))}async function L(e){if(await e.load(),a(e))throw new s$1("feature-layer:save",g(e,"using an in-memory source cannot be saved to a portal item"))}function P(e,a){let r=e.messages.filter((({type:e})=>"error"===e)).map((({name:e,message:a,details:r})=>new s$1(e,a,r)));if(a?.ignoreUnsupported&&(r=r.filter((({name:e})=>"layer:unsupported"!==e&&"symbol:unsupported"!==e&&"symbol-layer:unsupported"!==e&&"property:unsupported"!==e&&"url:unsupported"!==e))),r.length>0)throw new s$1("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function J(e,t,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const r=e.write({},t);return P(t,a),r}function N(e){const{layer:t,layerJSON:a}=e;return t.isTable?{layers:[],tables:[a]}:{layers:[a],tables:[]}}function O(e){i$1(e,f.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)));}function E(e){const a=e.portalItem;if(!a)throw I.error("save: requires the portalItem property to be set"),new s$1("feature-layer:portal-item-not-set",g(e,"requires the portalItem property to be set"));if(!a.loaded)throw new s$1("feature-layer:portal-item-not-loaded",g(e,"cannot be saved to a portal item that does not exist or is inaccessible"));j(e,a);}async function T(e,t){return /\/\d+\/?$/.test(e.url)?N(t[0]):$(e,t)}async function $(e,t){const{layer:{url:a,customParameters:r,apiKey:o}}=t[0];let s=await e.fetchData("json");s&&null!=s.layers&&null!=s.tables||(s=await x(s,{url:a,customParameters:r,apiKey:o},t.map((e=>e.layer.layerId))));for(const l of t)K(l.layer,l.layerJSON,s);return s}async function x(e,t,a){var r,o;e||(e={}),(r=e).layers||(r.layers=[]),(o=e).tables||(o.tables=[]);const{url:s,customParameters:l,apiKey:i}=t,{serviceJSON:n,layersJSON:p}=await b(s,{customParameters:l,apiKey:i}),c=A(e.layers,n.layers,a),y=A(e.tables,n.tables,a);e.layers=c.itemResources,e.tables=y.itemResources;const d=[...c.added,...y.added],m=p?[...p.layers,...p.tables]:[];return await U(e,d,s,m),e}function A(t,a,r){const o=s$2(t,a,((e,t)=>e.id===t.id));t=t.filter((e=>!o.removed.some((t=>t.id===e.id))));const s=o.added.map((({id:e})=>({id:e})));return s.forEach((({id:e})=>{t.push({id:e});})),{itemResources:t,added:s.filter((({id:e})=>!r.includes(e)))}}async function U(e,t$1,a,o){const s=t$1.map((({id:e})=>new Ke({url:a,layerId:e,sourceJSON:o.find((({id:t})=>t===e))})));await E$1(s.map((e=>e.load()))),s.forEach((t$1=>{const{layerId:a,loaded:o,defaultPopupTemplate:s}=t$1;if(!o||t(s))return;K(t$1,{id:a,popupInfo:s.toJSON()},e);}));}function K(e,t,a){e.isTable?F(a.tables,t):F(a.layers,t);}function F(e,t){const a=e.findIndex((({id:e})=>e===t.id));-1===a?e.push(t):e[a]=t;}function R(e){const{portalItem:t}=e;return l(e)&&!e.dynamicDataSource&&!!t?.loaded&&t.type===S}async function D(e){if(!e?.length)throw new s$1("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(e.map((e=>e.load())));for(const o of e)if(!R(o))throw new s$1("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${g(o,"does not conform")}`,{layer:o});const a=e.map((e=>e.portalItem.id));if(new Set(a).size>1)throw new s$1("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const r=e.map((e=>e.layerId));if(new Set(r).size!==r.length)throw new s$1("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function _(e,t){var a,r;let o=b$1.from(t);return o.id&&(o=o.clone(),o.id=null),(a=o).type??(a.type=S),(r=o).portal??(r.portal=B$1.getDefault()),j(e,o),o}async function q(e,t){const{url:a,layerId:r$1,title:s,fullExtent:l,isTable:i}=e,n=m(a),u=r(n)&&"FeatureServer"===n.serverType;t.url=u?a:`${a}/${r$1}`,t.title||(t.title=s),t.extent=null,!i&&r(l)&&(t.extent=await a$1(l)),c(t,f.METADATA),c(t,f.MULTI_LAYER),i$1(t,f.SINGLE_LAYER),i&&i$1(t,f.TABLE),O(t);}async function z(e,t,a){const r=e.portal;await r._signIn(),await r.user.addItem({item:e,data:t,folder:a?.folder});}const C=x$1(M);async function M(e,t){await L(e),E(e);const a=e.portalItem,r=o(a),o$1=await J(e,r,t),s=await T(a,[{layer:e,layerJSON:o$1}]);return O(a),await a.update({data:s}),i(r),a}const Y=x$1((async(e,t)=>{await D(e);const a=e[0].portalItem,r=o(a),o$1=await Promise.all(e.map((e=>J(e,r,t)))),s=await T(a,e.map(((e,t)=>({layer:e,layerJSON:o$1[t]}))));return O(a),await a.update({data:s}),await Promise.all(e.slice(1).map((e=>e.portalItem.reload()))),i(r),a.clone()})),B=x$1(G);async function G(e,t,a){await L(e);const r=_(e,t),o$1=o(r),s=N({layer:e,layerJSON:await J(e,o$1,a)});return await q(e,r),await z(r,s,a),e.portalItem=r,i(o$1),r}

export { C as save, Y as saveAll, B as saveAs };
