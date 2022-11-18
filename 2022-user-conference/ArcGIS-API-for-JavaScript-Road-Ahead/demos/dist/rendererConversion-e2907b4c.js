import { t, E as s$1, ll as S, lT as a$1, m as r } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s(r){return t(r)||"simple"===r.type||"unique-value"===r.type||"class-breaks"===r.type||"dictionary"===r.type||"heatmap"===r.type}function u(n,o){if(t(n))return null;if(!s(n))return new s$1("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${n.type||n.declaredClass}'`,{renderer:n});switch(n.type){case"simple":return i(n);case"unique-value":return a(n,o);case"class-breaks":return p(n);case"dictionary":case"heatmap":return null}return null}function l(e,n){if(!n)return null;let o;if(o=Array.isArray(n)?n:[n],o.length>0){const n=o.map((r=>r.details.symbol.type||r.details.symbol.declaredClass)).filter((r=>!!r));n.sort();const t=[];return n.forEach(((r,e)=>{0!==e&&r===n[e-1]||t.push(r);})),new s$1("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${t.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:o})}return null}function i(r){return l(r,S(r.symbol).error)}function a(r$1,e){const s={...a$1,...e},u=r$1.uniqueValueInfos?.map((r=>S(r.symbol,s).error)).filter(r),i=S(r$1.defaultSymbol,s);return i.error&&u?.unshift(i.error),l(r$1,u)}function p(r$1){const e=r$1.classBreakInfos.map((r=>S(r.symbol).error)).filter(r),t=S(r$1.defaultSymbol);return t.error&&e.unshift(t.error),l(r$1,e)}

export { s, u };
