import { t as t$1, s as s$1, i_ as a } from './_virtual_index-a68dd1ed.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o(r){return t$1(r)||"simple"===r.type||"unique-value"===r.type||"class-breaks"===r.type||"dictionary"===r.type||"heatmap"===r.type}function t(n){if(t$1(n))return null;if(!o(n))return new s$1("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${n.type||n.declaredClass}'`,{renderer:n});switch(n.type){case"simple":return u(n);case"unique-value":return l(n);case"class-breaks":return i(n);case"dictionary":case"heatmap":return null}return null}function s(e,n){if(!n)return null;let o;if(o=Array.isArray(n)?n:[n],o.length>0){const n=o.map((r=>r.details.symbol.type||r.details.symbol.declaredClass)).filter((r=>!!r));n.sort();const t=[];return n.forEach(((r,e)=>{0!==e&&r===n[e-1]||t.push(r);})),new s$1("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${t.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:o})}return null}function u(r){return s(r,a(r.symbol).error)}function l(r){const e=r.uniqueValueInfos.map((r=>a(r.symbol).error)).filter((r=>!!r)),o=a(r.defaultSymbol);return o.error&&e.unshift(o.error),s(r,e)}function i(r){const e=r.classBreakInfos.map((r=>a(r.symbol).error)).filter((r=>!!r)),o=a(r.defaultSymbol);return o.error&&e.unshift(o.error),s(r,e)}

export { o, t };
