/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../core/lang.js";import{L as e}from"./Logger.js";function n(e,n){for(const[r,t]of e)if(n(t,r))return!0;return!1}function r(e,n){for(const[r,t]of e)if(n(t,r))return t;return null}function t(e,n,r){const t=e.get(n);if(void 0!==t)return t;const o=r();return e.set(n,o),o}function o(e){const n=new Map;return r=>(n.has(r)||n.set(r,e(r)),n.get(r))}const u=()=>e.getLogger("esri.core.accessorSupport.ensureTypes");function a(e){return null==e?e:new Date(e)}function s(e){return null==e?e:!!e}function c(e){return null==e?e:e.toString()}function i(e){return null==e?e:(e=parseFloat(e),isNaN(e)?0:e)}function l(e){return null==e?e:Math.round(parseFloat(e))}function f(e){return e?.constructor&&void 0!==e.constructor.__accessorMetadata__}function p(e,n){return null!=n&&e&&!(n instanceof e)}function y(e){return e&&"isCollection"in e}function v(e){return e?.Type?"function"==typeof e.Type?e.Type:e.Type.base:null}function g(e,n){return!!f(n)&&(u().error("Accessor#set","Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+d(e)+"'"),!0)}function h(e,n){return null==n?n:y(e)?function(e,n){if(!n?.constructor||!y(n.constructor))return g(e,n)?n:new e(n);const r=v(e.prototype.itemType),t=v(n.constructor.prototype.itemType);return r?t?r===t?n:r.prototype.isPrototypeOf(t.prototype)?new e(n):(g(e,n),n):new e(n):n}(e,n):p(e,n)?g(e,n)?n:new e(n):n}function d(e){return e?.prototype?.declaredClass||"unknown"}const m=new WeakMap;function b(e,n){const r=function(e){switch(e){case Number:return i;case N:return l;case Boolean:return s;case String:return c;case Date:return a;default:return t(m,e,(()=>h.bind(null,e)))}}(e);return 1===arguments.length?r:r(n)}function w(e,n,r){return 1===arguments.length?w.bind(null,e):n?Array.isArray(n)?n.map((n=>e(n,r))):[e(n,r)]:n}function A(e,n){return 1===arguments.length?w((n=>b(e,n))):w((n=>b(e,n)),n)}function $(e,n,r){return 0!==n&&Array.isArray(r)?r.map((r=>$(e,n-1,r))):e(r)}function j(e,n,r){if(2===arguments.length)return r=>j(e,n,r);if(!r)return r;r=$(e,n,r);let t=n,o=r;for(;t>0&&Array.isArray(o);)t--,o=o[0];if(void 0!==o)for(let e=0;e<t;e++)r=[r];return r}function k(e,n,r){return 2===arguments.length?j((n=>b(e,n)),n):j((n=>b(e,n)),n,r)}function M(e){return!!Array.isArray(e)&&!e.some((n=>{const r=typeof n;return!("string"===r||"number"===r||"function"===r&&e.length>1)}))}function S(e,n){if(2===arguments.length)return S(e).call(null,n);const r=new Set,t=e.filter((e=>"function"!=typeof e)),o=e.filter((e=>"function"==typeof e));for(const n of e)"string"!=typeof n&&"number"!=typeof n||r.add(n);let a=null,s=null;return(e,n)=>{if(null==e)return e;const c=typeof e,i="string"===c||"number"===c;return i&&(r.has(e)||o.some((e=>"string"===c&&e===String||"number"===c&&e===Number)))||"object"===c&&o.some((n=>!p(e,n)))?e:(i&&t.length?(a||(a=t.map((e=>"string"==typeof e?`'${e}'`:`${e}`)).join(", ")),u().error("Accessor#set",`'${e}' is not a valid value for this property, only the following values are valid: ${a}`)):"object"==typeof e&&o.length?(s||(s=o.map((e=>d(e))).join(", ")),u().error("Accessor#set",`'${e}' is not a valid value for this property, value must be one of ${s}`)):u().error("Accessor#set",`'${e}' is not a valid value for this property`),n&&(n.valid=!1),null)}}function T(e,n){if(2===arguments.length)return T(e).call(null,n);const r={},t=[],o=[];for(const n in e.typeMap){const u=e.typeMap[n];r[n]=b(u),t.push(d(u)),o.push(n)}const a="string"==typeof e.key?n=>n[e.key]:e.key;return n=>{if(e.base&&!p(e.base,n))return n;if(null==n)return n;const s=a(n)||e.defaultKeyValue,c=r[s];if(!c)return u().error("Accessor#set",`Invalid property value, value needs to be one of '${t.join("', '")}', or a plain object that can autocast (having .type = '${o.join("', '")}')`),null;if(!p(e.typeMap[s],n))return n;if("string"==typeof e.key&&!f(n)){const r={};for(const t in n)t!==e.key&&(r[t]=n[t]);return c(r)}return c(n)}}class N{}const _={native:e=>({type:"native",value:e}),array:e=>({type:"array",value:e}),oneOf:e=>({type:"one-of",values:e})};function B(e){if(!e||!("type"in e))return!1;switch(e.type){case"native":case"array":case"one-of":return!0}return!1}function C(e){switch(e.type){case"native":return b(e.value);case"array":return w(C(e.value));case"one-of":return function(e){let n=null;return(r,t)=>I(r,e)?r:(null==n&&(n=D(e)),u().error("Accessor#set",`Invalid property value, value needs to be of type ${n}`),t&&(t.valid=!1),null)}(e);default:return null}}function D(e){switch(e.type){case"native":switch(e.value){case Number:return"number";case String:return"string";case Boolean:return"boolean";case N:return"integer";case Date:return"date";default:return d(e.value)}case"array":return`array of ${D(e.value)}`;case"one-of":{const n=e.values.map((e=>D(e)));return`one of ${n.slice(0,-1)} or ${n[n.length-1]}`}}return"unknown"}function I(e,n){if(null==e)return!0;switch(n.type){case"native":switch(n.value){case Number:case N:return"number"==typeof e;case Boolean:return"boolean"==typeof e;case String:return"string"==typeof e}return e instanceof n.value;case"array":return!!Array.isArray(e)&&!e.some((e=>!I(e,n.value)));case"one-of":return n.values.some((n=>I(e,n)))}}export{N as I,T as a,h as b,l as c,c as d,b as e,i as f,t as g,w as h,B as i,C as j,M as k,S as l,j as m,A as n,k as o,r as p,o as q,n as s,_ as t};
