/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{u as t,l as n}from"./unitUtils.js";function e(n,e){return{type:t(e),value:n,unit:e}}function u(n,e){return{type:t(e),value:n,unit:e}}function a(n,e,u="arithmetic"){return{type:t(e),value:n,unit:e,rotationType:u}}function r(n,e){const u=i(n,e);return"angle"===n.type?a(u,e,n.rotationType):function(n,e){return{type:t(e),value:n,unit:e}}(u,e)}function i(t,e){return n(t.value,t.unit,e)}function s(t,e){return null==t?e:null==e||t.value>n(e.value,e.unit,t.unit)?t:e}function o(t,n){return null==t?null:{...t,value:t.value*n}}function c(t,n,e){if(n===e)return t;switch(e){case"arithmetic":case"geographic":return 90-t}}const l=e(0,"meters"),f=u(0,"square-meters");a(0,"radians");const p=a(0,"degrees"),v=a(0,"degrees","geographic");export{c as a,u as b,a as c,e as d,p as e,f,v as g,s as m,o as s,r as t,i as v,l as z};
