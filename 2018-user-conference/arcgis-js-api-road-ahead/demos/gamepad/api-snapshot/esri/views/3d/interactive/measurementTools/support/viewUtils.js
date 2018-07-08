// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang","../../../../../core/lang","../../../lib/glMatrix"],function(q,e,l,p,d){function g(a,c,b){var e=b._stage.getCamera();b.renderCoordsHelper.toRenderCoords(a,m);e.projectPoint(m,f);d.vec2d.set2(f[0],e.fullHeight-f[1],c)}Object.defineProperty(e,"__esModule",{value:!0});var n=d.vec3d.create();e.copyParameter=function(a,c){a=l.mixin({},a);c=p.clone(c);l.mixin(a,c);return a};e.resizeArray=function(a,c,b,d){for(;a.length<c;)a.push(b());if(d)for(;a.length>c;)b=
a.pop(),d(b);else a.length=c};e.scaleTranslateMatrix=function(a,c,b){d.mat4d.identity(b);d.mat4d.translate(b,c);d.vec3d.set3(a,a,a,n);d.mat4d.scale(b,n)};e.midpoint=function(a,c){d.vec3d.set3(0,0,0,c);for(var b=0;b<a.length;++b)d.vec3d.add(c,a[b]);d.vec3d.scale(c,1/a.length)};e.screenSpaceTangent=function(a,c,b,e){e.projectPoint(a,h);e.projectPoint(c,k);d.vec2d.subtract(k,h,b);d.vec2d.normalize(b)};e.projectPoint=g;e.pointToPointScreenDistance=function(a,c,b){g(a,h,b);g(c,k,b);return d.vec2d.dist(h,
k)};e.pointToScreenPositionDistance=function(a,c,b){g(a,f,b);return d.vec2d.dist(f,c)};var m=d.vec3d.create(),f=d.vec3d.create(),h=d.vec2d.create(),k=d.vec2d.create()});