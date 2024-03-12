/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i as r}from"./jsxWidgetSupport.js";var e=function(r,o){for(var t=0,n=r.length;t<n;t++){var i=r[t];Array.isArray(i)?e(i,o):null!=i&&!1!==i&&(i.hasOwnProperty("vnodeSelector")||(i={vnodeSelector:"",properties:void 0,children:void 0,text:i.toString(),domNode:null}),o.push(i))}};function o(o,t,...n){return"function"!=typeof o||r(o)?function(r,o){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return{vnodeSelector:r,properties:o||void 0,children:void 0,text:t[0],domNode:null};var i=[];return e(t,i),{vnodeSelector:r,properties:o||void 0,children:i,text:void 0,domNode:null}}(o,t,...n):o(t,...n)}function t(...r){return r}export{t as a,o as t};
