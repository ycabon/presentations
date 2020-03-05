// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,a){function e(){return new Float32Array(3)}function c(a,b,c){var d=new Float32Array(3);d[0]=a;d[1]=b;d[2]=c;return d}function f(){return c(1,1,1)}function g(){return c(1,0,0)}function h(){return c(0,1,0)}function k(){return c(0,0,1)}Object.defineProperty(a,"__esModule",{value:!0});a.create=e;a.clone=function(a){var b=new Float32Array(3);b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};a.fromValues=c;a.createView=function(a,b){return new Float32Array(a,b,3)};a.zeros=
function(){return e()};a.ones=f;a.unitX=g;a.unitY=h;a.unitZ=k;a.ZEROS=e();a.ONES=f();a.UNIT_X=g();a.UNIT_Y=h();a.UNIT_Z=k()});