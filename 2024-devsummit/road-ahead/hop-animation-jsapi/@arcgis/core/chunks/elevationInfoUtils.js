/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as e}from"./unitConversionUtils.js";function n(e){return e?x:y}function t(e,t){return t?.mode?t.mode:n(e).mode}function o(e,t){return null!=t?t:n(e)}function r(e,n){return t(null!=e&&e.hasZ,n)}function u(e,n){return o(null!=e&&!!e.hasZ,n)}function s(e){const n=i(e);return r(e.geometry,n)}function l(n){const t=i(n),o=r(n.geometry,t);return{mode:o,offset:null!=t&&"on-the-ground"!==o?(t.offset??0)*e(t.unit??"meters"):0}}function a(e){if("on-the-ground"===s(e))return!1;const n=i(e),t=n?.featureExpressionInfo?n.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function i(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function f(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=null!=t.offset?t.offset:0;switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function c(e,n,t,o=null){return v(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function d(e,n,t,o,r=null){return v(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function v(e,n,t,o,r,u,s=null){if(null==u)return;const l=null!=s?s.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:a}=g(n,t,o,r,e,u);return function(e,n,t,o,r,u,s,l){const a=null!=s?.offset?s.offset:0;switch(l){case"absolute-height":return e-a;case"relative-to-ground":return e-((u.elevationProvider.getElevation(n,t,o,r,"ground")??0)+a);case"relative-to-scene":return e-((u.elevationProvider.getElevation(n,t,o,r,"scene")??0)+a)}}(a,n,t,o,r,e,s,l)}function g(e,n,t,o,r,u){const s=null!=u.offset?u.offset:0;switch(u.mode){case"absolute-height":return{absoluteZ:t+s,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+s,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+s,elevation:u}}}}function h(e,n){if(null==n)return!1;const{mode:t}=n;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function m(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function p(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function b(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function E(e,n){n&&e.warn(".elevationInfo=",n)}const x={mode:"absolute-height",offset:0},y={mode:"on-the-ground",offset:null};export{x as a,d as b,r as c,l as d,m as e,b as f,c as g,f as h,o as i,h as j,s as k,E as l,u as m,p as n,y as o,v as p,a as q,t as r,g as z};