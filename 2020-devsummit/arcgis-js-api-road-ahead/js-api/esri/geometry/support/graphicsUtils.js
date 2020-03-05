// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Collection","../../core/maybe","../Extent"],function(m,g,h,k,l){Object.defineProperty(g,"__esModule",{value:!0});g.graphicsExtent=function(a){if(!a||!a.length)return null;var c=k.expect(h.isCollection(a)?a.getItemAt(0).geometry:a[0].geometry),d=c.extent&&c.extent.clone(),b=c;null===d&&(d=new l(b.x,b.y,b.x,b.y,c.spatialReference));for(var e=1;e<a.length;e++){var b=c=k.expect(h.isCollection(a)?a.getItemAt(e).geometry:a[e].geometry),f=c.extent;null===f&&(f=new l(b.x,
b.y,b.x,b.y,c.spatialReference));d=d.union(f)}return 0>d.width&&0>d.height?null:d}});