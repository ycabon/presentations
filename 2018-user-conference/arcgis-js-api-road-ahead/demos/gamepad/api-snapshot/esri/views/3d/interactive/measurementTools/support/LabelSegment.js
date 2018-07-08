// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./viewUtils","../../../lib/glMatrix"],function(g,h,e,a){return function(){function f(){this.origin=a.vec3d.create();this.start=a.vec3d.create();this.end=a.vec3d.create()}f.prototype.update=function(b,c,d){a.vec3d.set(b,this.start);a.vec3d.set(c,this.end);if(d)switch(d){case "start":a.vec3d.set(this.start,this.origin);break;case "center":e.midpoint([b,c],this.origin);break;case "end":a.vec3d.set(this.end,this.origin);break;default:a.vec3d.set(d,this.origin)}else e.midpoint([b,
c],this.origin)};return f}()});