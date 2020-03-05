// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,a){Object.defineProperty(a,"__esModule",{value:!0});if(window.performance&&window.performance.measure){var b=window.performance,c;a.windowPerformanceProjectorLogger=function(a){b.mark(a);switch(a){case "domEventProcessed":b.measure("eventHandler","domEvent","domEventProcessed");break;case "renderDone":b.measure("renderCycle","renderStart","renderDone");break;case "rendered":b.measure("render",c,"rendered");break;case "patched":b.measure("diff+patch","rendered",
"patched")}c=a}}else a.windowPerformanceProjectorLogger=function(){}});