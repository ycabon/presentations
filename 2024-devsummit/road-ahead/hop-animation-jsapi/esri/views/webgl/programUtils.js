// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){g.glslifyDefineMap=function(h){let b="";for(const c in h){var a=h[c];if("boolean"===typeof a)a&&(b+=`#define ${c}\n`);else if("number"===typeof a)b+=`#define ${c} ${a.toFixed()}\n`;else if("object"===typeof a){const {options:l,value:m}=a;if("number"===typeof l[m]){const {value:d,options:e,namespace:f}=a;a=f?`${f}_`:"";for(const k in e)b+=`#define ${a}${k} ${e[k].toFixed()}\n`;b+=`#define ${c} ${a}${d}\n`}else{const d=a.options;let e=0;for(const f in d)b+=`#define ${d[f]} ${(e++).toFixed()}\n`;
b+=`#define ${c} ${d[a.value]}\n`}}}return b};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});