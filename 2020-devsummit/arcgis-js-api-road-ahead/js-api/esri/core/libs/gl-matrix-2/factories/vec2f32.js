// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,a){function c(){return new Float32Array(2)}function b(a,g){var b=new Float32Array(2);b[0]=a;b[1]=g;return b}function d(){return b(1,1)}function e(){return b(1,0)}function f(){return b(0,1)}Object.defineProperty(a,"__esModule",{value:!0});a.create=c;a.clone=function(a){var b=new Float32Array(2);b[0]=a[0];b[1]=a[1];return b};a.fromValues=b;a.createView=function(a,b){return new Float32Array(a,b,2)};a.zeros=function(){return c()};a.ones=d;a.unitX=e;a.unitY=f;a.ZEROS=
c();a.ONES=d();a.UNIT_X=e();a.UNIT_Y=f()});