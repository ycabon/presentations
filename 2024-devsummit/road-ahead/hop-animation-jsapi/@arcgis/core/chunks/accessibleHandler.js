/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i as n}from"./widgetUtils.js";function t(){return function(t,e){if(!t[e])throw new TypeError(`Cannot auto bind undefined function '${String(e)}'`);return{value:(r=t[e],function(t,...e){!function(n){const t=n?.type;return n instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}(t)?r.call(this,t,...e):n(t.key)&&(t.preventDefault(),t.stopPropagation(),t.target.click())})};var r}}export{t as a};
