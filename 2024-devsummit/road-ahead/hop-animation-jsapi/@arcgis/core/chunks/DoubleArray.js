/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{n as r,c as n}from"../core/lang.js";function a(n,a=!1){return n<=r?a?new Array(n).fill(0):new Array(n):new Float64Array(n)}function t(a){return(n(a)?a.length:a.byteLength/8)<=r?Array.from(a):new Float64Array(a)}function e(r,n,a){return Array.isArray(r)?r.slice(n,n+a):r.subarray(n,n+a)}function o(r,n){for(let a=0;a<n.length;++a)r[a]=n[a];return r}function s(r){return Array.isArray(r)?new Float64Array(r):r}export{t as a,o as c,e as d,a as n,s as t};
