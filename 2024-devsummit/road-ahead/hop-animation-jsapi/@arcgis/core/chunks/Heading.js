/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as s}from"./mathUtils.js";import{g as t}from"./globalCss.js";import{c as r}from"./widgetUtils.js";import{t as a}from"./jsxFactory.js";function i({level:s,class:i,...e},n){const l=o(s);return a(`h${l}`,{...e,"aria-level":String(l),class:r(t.heading,i),role:"heading"},n)}function o(t){return s(Math.ceil(t),1,6)}function e(s,t=1){return o(s+t)}export{i as H,e as i};
