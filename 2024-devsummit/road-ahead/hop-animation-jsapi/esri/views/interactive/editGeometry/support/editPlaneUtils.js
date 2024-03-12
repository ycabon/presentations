// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/boundedPlane ../../../../geometry/support/vectorStacks ../operations/MoveVertex ../operations/RotateVertex ../operations/ScaleVertex ../operations/UpdateVertices".split(" "),function(m,d,h,p,k,l,u,v,w,x){function r(a,b,c){if(a instanceof x.UpdateVertices){if(a.operation instanceof u.MoveVertex)return y(a.operation,b,c),!0;if(a.operation instanceof
v.RotateVertex)return z(a.operation,b,c),!0;if(a.operation instanceof w.ScaleVertex)return A(a.operation,b,c),!0}return!1}function y(a,b,c=!1){c=c?-1:1;a=p.fromValues(c*a.dx,c*a.dy,c*a.dz);h.add(b.origin,b.origin,a);k.updateUnboundedPlane(b)}function z(a,b,c=!1){a=c?-a.angle:a.angle;h.rotateZ(b.basis1,b.basis1,p.ZEROS,a);h.rotateZ(b.basis2,b.basis2,p.ZEROS,a);k.updateUnboundedPlane(b)}function A(a,b,c=!1){const e=c?1/a.factor1:a.factor1;c=c?1/a.factor2:a.factor2;h.scale(b.basis1,b.basis1,e);h.scale(b.basis2,
b.basis2,c);d.projectAndScale(b.origin,b.origin,a.origin,a.axis1,e);d.projectAndScale(b.origin,b.origin,a.origin,a.axis2,c);k.updateUnboundedPlane(b)}m.apply=function(a,b){return r(a,b,!1)};m.applyInverse=function(a,b){return r(a,b,!0)};m.calculateOrientedBounds=function(a,b,c,e){e||=k.create();const n=d.set(l.sv2d.get(),a[1],-a[0]),f=d.set(l.sv2d.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),g=d.set(l.sv2d.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),q=l.sv2d.get();b.components.forEach(B=>
B.vertices.forEach(({pos:t})=>{d.set(q,d.dot(a,t),d.dot(n,t));d.min(f,f,q);d.max(g,g,q)}));b=d.set(l.sv2d.get(),1E-6>g[0]-f[0]?c/2:0,1E-6>g[1]-f[1]?c/2:0);d.subtract(f,f,b);d.add(g,g,b);d.scale(e.basis1,a,(g[0]-f[0])/2);d.scale(e.basis2,n,(g[1]-f[1])/2);d.set(e.origin,f[0]*a[0]+f[1]*n[0],f[0]*a[1]+f[1]*n[1]);d.add(e.origin,e.origin,e.basis1);d.add(e.origin,e.origin,e.basis2);k.updateUnboundedPlane(e);return e};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});