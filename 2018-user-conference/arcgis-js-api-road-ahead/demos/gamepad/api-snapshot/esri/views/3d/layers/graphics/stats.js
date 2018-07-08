// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,c){Object.defineProperty(c,"__esModule",{value:!0});c.stats=function(d,e){var c=e.graphics3DGraphics,f="null",a=d.suspendResumeExtent;a&&(f=[a[0],a[1],a[2],a[3]].map(function(a){return a.toPrecision(4)}).join(", "));var a="null",b=e.computedExtent;b&&(a=[b.xmin,b.ymin,b.xmax,b.ymax].map(function(a){return a.toPrecision(4)}).join(", "));return{numCollection:d.loadedGraphics.length,numGraphics:Object.keys(c).length,graphicsUpdating:e.updating,resumeExtent:f,computedExtent:a,
updating:d.updating,suspended:d.suspended}}});