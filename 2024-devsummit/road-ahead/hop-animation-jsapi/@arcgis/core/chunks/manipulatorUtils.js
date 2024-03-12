/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{m as e}from"./handleUtils.js";import{d as n}from"./elevationInfoUtils.js";function o(e,o=n(e)){return"on-the-ground"!==o.mode&&!(null==e.geometry||!e.geometry.hasZ)}function t(n,o){let t=null;const r=n.events.on("grab-changed",(e=>{null!=t&&(t.remove(),t=null),"start"===e.action?(t=n.disableDisplay(),o&&o(e)):o&&o(e)}));return e((()=>{t?.remove(),r.remove()}))}export{o as c,t as d};
