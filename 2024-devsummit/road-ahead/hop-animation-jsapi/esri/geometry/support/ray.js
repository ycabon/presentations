// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/ObjectStack ../../chunks/vec32 ../../core/libs/gl-matrix-2/factories/vec3f64 ./vectorStacks".split(" "),function(e,k,n,d,g,h){function f(a){if(a){var b=g.clone(a.origin);a=g.clone(a.direction);b={origin:b,direction:a}}else b=g.create(),a=g.create(),b={origin:b,direction:a};return b}function l(a,b,c=f()){d.copy(c.origin,a);d.copy(c.direction,b);return c}function m(a,b){a=d.cross(h.sv3d.get(),d.normalize(h.sv3d.get(),a.direction),d.subtract(h.sv3d.get(),
b,a.origin));return d.dot(a,a)}const p=new n.ObjectStack(()=>f());e.closestPoint=function(a,b,c){b=d.dot(a.direction,d.subtract(c,b,a.origin));d.add(c,a.origin,d.scale(c,a.direction,b));return c};e.copy=function(a,b=f()){return l(a.origin,a.direction,b)};e.create=f;e.distance=function(a,b){return Math.sqrt(m(a,b))};e.distance2=m;e.equals=function(a,b){return k.equals(a.origin,b.origin)&&k.equals(a.direction,b.direction)};e.fromPoints=function(a,b,c=f()){d.copy(c.origin,a);d.subtract(c.direction,b,
a);return c};e.fromValues=l;e.wrap=function(a,b){const c=p.get();c.origin=a;c.direction=b;return c};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});