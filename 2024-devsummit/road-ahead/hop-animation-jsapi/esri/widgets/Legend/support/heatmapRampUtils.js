// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../renderers/support/HeatmapColorStop"],function(f,h){f.getHeatmapRampStops=function(c){if(!c.colorStops)return[];const b=[...c.colorStops].filter(a=>0<a.color?.a);let d=b.length-1;if(b&&b[0]){const a=b[d];a&&1!==a.ratio&&(b.push(new h({ratio:1,color:a.color})),d++)}return b.map((a,g)=>{let e="";0===g?e=c.legendOptions?.minLabel||"low":g===d&&(e=c.legendOptions?.maxLabel||"high");return{color:a.color,label:e,ratio:a.ratio}}).reverse()};Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});