// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./observers"],function(d,h,k){function e(a){a.forEach(({target:c})=>{h.forceUpdate(c)})}const f=new Set;let b;const g={childList:!0};d.connectConditionalSlotComponent=function(a){b||=k.createObserver("mutation",e);b.observe(a.el,g)};d.disconnectConditionalSlotComponent=function(a){f.delete(a.el);e(b.takeRecords());b.disconnect();for(const [c]of f.entries())b.observe(c,g)}});