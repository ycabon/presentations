// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/maybe","../../../geometry/support/webMercatorUtils","../../draw/support/drawUtils"],function(p,d,f,g,n){function l(a,b){var h=null,d=f.isSome(a[b])?a[b].spatialReference:null;return function(c){if("start"===c.action&&f.isSome(a[b])){var e=a[b],k=c.spatialReference;h=f.isNone(e)||"mesh"===e.type?null:e.spatialReference.equals(k)?e.clone():g.canProject(e,k)?g.project(e,k):null}f.isNone(h)||(c=n.move(h.clone(),c.deltaX,c.deltaY,c.deltaZ),c.spatialReference.equals(d)?
a[b]=c:a[b]=g.project(c,d))}}function m(a){return l(a,"geometry")}Object.defineProperty(d,"__esModule",{value:!0});d.createGeometryDragAction=l;d.createGraphicDragAction=m;d.createGraphicDragActionMany=function(a){var b=a.map(m);return function(a){return b.forEach(function(b){return b(a)})}}});