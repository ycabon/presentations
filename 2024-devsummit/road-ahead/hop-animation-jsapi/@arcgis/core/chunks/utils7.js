/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import r from"../config.js";import{id as e}from"../kernel.js";import{clone as t}from"../core/lang.js";import{urlToObject as n}from"../core/urlUtils.js";import{s as o}from"../request.js";function i(r,e){return e?{...e,query:{...r??{},...e.query}}:{query:r}}function s(r){return"string"==typeof r?n(r):t(r)}function f(r,e,t){const n={};for(const o in r){if("declaredClass"===o)continue;const i=r[o];if(null!=i&&"function"!=typeof i)if(Array.isArray(i))n[o]=i.map((r=>f({item:r},e,t).item));else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(t?.[o]);n[o]=e?r:JSON.stringify(r)}else n[o]=e?i:JSON.stringify(i);else n[o]=i}return n}function u(t,n){return t?o(t)&&(n||r.apiKey)?n||r.apiKey:e?.findCredential(t)?.token:null}export{i as a,f as e,u as g,s as p};
