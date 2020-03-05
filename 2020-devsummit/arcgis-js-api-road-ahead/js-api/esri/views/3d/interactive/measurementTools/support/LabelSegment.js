// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./viewUtils"],function(g,h,b,a,e){return function(){function f(){this.origin=a.vec3f64.create();this.start=a.vec3f64.create();this.end=a.vec3f64.create()}f.prototype.update=function(a,c,d){b.vec3.copy(this.start,a);b.vec3.copy(this.end,c);if(d)switch(d){case "start":b.vec3.copy(this.origin,this.start);break;case "center":e.midpoint([a,c],this.origin);break;case "end":b.vec3.copy(this.origin,
this.end);break;default:b.vec3.copy(this.origin,d)}else e.midpoint([a,c],this.origin)};return f}()});