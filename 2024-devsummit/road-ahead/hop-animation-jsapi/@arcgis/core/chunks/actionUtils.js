/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{substitute as i}from"../intl.js";function n(i){return i.icon?i.icon:"image"in i&&i.image||i.className?void 0:"question"}function t(i){return i?{backgroundImage:`url(${i})`}:{}}function a({action:n,feature:t}){const a=t?.attributes,e="image"in n?n.image:void 0;return e&&a?i(e,a):e??""}export{t as a,n as g,a as s};
