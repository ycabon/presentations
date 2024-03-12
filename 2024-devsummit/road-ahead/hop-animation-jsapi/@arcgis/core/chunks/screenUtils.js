/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,t=96;function r(n){return n?n/72*t:0}function u(n){return n?72*n/t:0}function e(t){if("string"==typeof t){const r=t.match(n);if(r){const n=Number(r[1]),e=r[3]&&r[3].toLowerCase(),o="-"===t.charAt(0),s="px"===e?u(n):n;return o?-s:s}return console.warn("screenUtils.toPt: input not recognized!"),null}return t}function o(n=0,t=0){return{x:n,y:t}}function s(n=0,t=0){return[n,t]}function c(n=0,t=0){return[n,t]}function i(n=0,t=0,r=0){return[n,t,r]}function a(n){return n}function f(n){return n}function p(n){return n}function x(n,t){return t?(t[0]=n.x,t[1]=n.y,t.length>2&&(t[2]=0),t):[n.x,n.y]}export{r as a,s as b,o as c,c as d,f as e,p as f,i as g,a as h,u as p,x as s,e as t};
