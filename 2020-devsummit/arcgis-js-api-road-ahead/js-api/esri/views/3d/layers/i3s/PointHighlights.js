// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","../../../../core/SetUtils","../../webgl-engine/lib/Object3DStateSet"],function(e,f,g,h,k){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function d(a){this.context=a;this.highlights=new Set}Object.defineProperty(d.prototype,"hasHighlights",{get:function(){return 0<this.highlights.size},enumerable:!0,configurable:!0});d.prototype.destroy=function(){this.highlights=null};d.prototype.add=function(a){var b=this,c=new l(a);this.highlights.add(c);
this.enableSet(c);return{remove:function(){return b.removeSet(c)},pause:function(){b.disableSet(c)},resume:function(){b.enableSet(c)}}};d.prototype.removeSet=function(a){this.disableSet(a);this.highlights.delete(a)};d.prototype.enableSet=function(a){var b=this;a.enabled||(a.enabled=!0,this.context.forEachNode(function(c){return b.enableSetForNode(a,c)}))};d.prototype.enableSetForNode=function(a,b){var c=this;if(a.enabled){var d=a.ids.get(b.id);d&&d.forEach(function(d){return c.context.addHighlight(b,
d,a.id)})}};d.prototype.disableSet=function(a){var b=this;a.enabled&&(a.enabled=!1,this.context.forEachNode(function(c){return b.disableSetForNode(a,c)}))};d.prototype.disableSetForNode=function(a,b){a.enabled||this.context.removeHighlight(b,a.id)};d.prototype.nodeAdded=function(a){var b=this;this.highlights.forEach(function(c){return b.enableSetForNode(c,a)})};d.prototype.nodeRemoved=function(a){var b=this;this.highlights.forEach(function(c){return b.disableSetForNode(c,a)})};d.prototype.removeAll=
function(){var a=this;this.highlights.forEach(function(b){return a.disableSet(b)})};return d}();f.PointHighlights=e;var l=function(){function d(a){this.id=k.generateObject3DStateId(0);this.ids=new Map;this.enabled=!1;for(var b=0;b<a.length;b++){var c=a[b];g.isSome(c)&&this.add(c.nodeId,c.pointId)}}d.prototype.add=function(a,b){var c=this.ids.get(a);c?c.add(b):this.ids.set(a,h.createSetFromValues([b]))};return d}()});