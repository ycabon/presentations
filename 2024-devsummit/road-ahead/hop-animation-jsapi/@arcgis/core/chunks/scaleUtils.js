/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{f as t}from"./mathUtils.js";import{g as n,Y as e}from"./unitUtils.js";const i=96;function r(t,r){const a=r||t.extent,s=t.width,o=n(a?.spatialReference);return a&&s?a.width/s*o*e*i:0}function a(t,r){return t/(n(r)*e*i)}function s(t){return t/(e*i)}function o(t,r){return t*(n(r)*e*i)}function u(t,n){const e=t.extent,i=t.width-(t.padding?t.padding.left+t.padding.right:0),r=a(n,e.spatialReference);return e.clone().expand(r*i/e.width)}function c(n,e,i){return function(n,e){return 0===e||t(n,e)||n<e}(n,e)&&function(n,e){return 0===e||t(n,e)||n>e}(n,i)}export{o as a,s as b,u as c,a as d,r as g,c as i};
