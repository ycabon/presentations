/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i as r}from"../core/lang.js";import e from"../core/Error.js";import{t as n,d as s}from"../symbols/support/jsonUtils.js";function t(r){return null==r||"simple"===r.type||"unique-value"===r.type||"class-breaks"===r.type||"dictionary"===r.type||"heatmap"===r.type}function o(o,u){if(null==o)return null;if(!t(o))return new e("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${o.type||o.declaredClass}'`,{renderer:o});switch(o.type){case"simple":return function(r){return l(r,n(r.symbol).error)}(o);case"unique-value":return function(e,t){const o={...s,...t},u=e.uniqueValueInfos?.map((r=>n(r.symbol,o).error)).filter(r),a=n(e.defaultSymbol,o);return a.error&&u?.unshift(a.error),l(e,u)}(o,u);case"class-breaks":return function(e){const s=e.classBreakInfos.map((r=>n(r.symbol).error)).filter(r),t=n(e.defaultSymbol);return t.error&&s.unshift(t.error),l(e,s)}(o);case"dictionary":case"heatmap":return null}return null}function l(r,n){if(!n)return null;let s;if(s=Array.isArray(n)?n:[n],s.length>0){const n=s.map((r=>r.details.symbol.type||r.details.symbol.declaredClass)).filter((r=>!!r));n.sort();const t=[];return n.forEach(((r,e)=>{0!==e&&r===n[e-1]||t.push(r)})),new e("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${t.join(", ")}) which are not supported in 3D`,{renderer:r,symbolErrors:s})}return null}export{t as i,o as v};
