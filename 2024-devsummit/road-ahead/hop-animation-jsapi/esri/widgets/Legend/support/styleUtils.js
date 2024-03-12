// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../intl","../../../core/string","../../../intl/substitute","../../../intl/number"],function(c,k,g,e,h){c.attachToNode=function(b){b.appendChild(this)};c.getStretchStopLabel=function(b,a){return b.label?a[b.label]+": "+("string"===typeof b.value?b.value:h.formatNumber(b.value??0,{style:"decimal",notation:b.value?.toString().toLowerCase().includes("e")?"scientific":"standard"})):""};c.getTitle=function(b,a,f){if(a){if("number"===typeof a)return a;if("string"===typeof a)return g.stripHTML(a);
if("value"in a||"unit"in a)return e.substitute(b.dotValue,a);if("colorName"in a&&"bandName"in a)return b[a.colorName]+": "+(b[a.bandName]||a.bandName);if("showCount"in a)return a.showCount?b.clusterCountTitle:void 0;var d=null;f?d=a.ratioPercentTotal?"showRatioPercentTotal":a.ratioPercent?"showRatioPercent":a.ratio?"showRatio":a.normField?"showNormField":a.field?"showField":null:f||(d=a.normField?"showNormField":a.normByPct?"showNormPct":a.field?"showField":null);return d?e.substitute("showField"===
d?"{field}":b[d],{field:a.field,normField:a.normField}):void 0}};c.isImageryStretchedLegend=function(b,a){return!!(a&&"Stretched"===a&&10.3<=b.version&&"esri.layers.ImageryLayer"===b.declaredClass)};c.isRendererTitle=function(b,a){return!a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});