// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../lib/glMatrix ./MomentumController ../../utils/navigationUtils".split(" "),function(b,d,f,e,g,h){Object.defineProperty(d,"__esModule",{value:!0});b=function(b){function c(a,c,d,f){a=b.call(this,a,2)||this;a.momentum=c;a.axis=e.vec3d.create();a.center=e.vec3d.create();e.vec3d.set(f,a.axis);e.vec3d.set(d,a.center);return a}f(c,b);c.prototype.momentumStep=function(a,b){a=this.momentum.value(a);h.applyRotation(b,this.center,this.axis,
a)};return c}(g.MomentumController);d.RotationMomentumController=b});