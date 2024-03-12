/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},t={dash:o.dash,"dash-dot":[...o.dash,...o.dot],dot:o.dot,"long-dash":o["long-dash"],"long-dash-dot":[...o["long-dash"],...o.dot],"long-dash-dot-dot":[...o["long-dash"],...o.dot,...o.dot],none:null,"short-dash":o["short-dash"],"short-dash-dot":[...o["short-dash"],...o["short-dot"]],"short-dash-dot-dot":[...o["short-dash"],...o["short-dot"],...o["short-dot"]],"short-dot":o["short-dot"],solid:null};function d(o){return{pattern:[o,o],pixelRatio:2}}function s(o){return null!=o&&"style"===o.type&&null!=(d=o.style)?null==(s=t[d])?s:{pattern:s.slice(),pixelRatio:8}:null;var d,s}export{d as c,s as g};
