// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./debounce"],function(g,d){g.throttle=function(e,f,a){var b=!0,c=!0;if("function"!=typeof e)throw new TypeError("Expected a function");d.isObject(a)&&(b="leading"in a?!!a.leading:b,c="trailing"in a?!!a.trailing:c);return d.debounce(e,f,{leading:b,maxWait:f,trailing:c})}});