// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,a){function b(){return[0,0,0]}function c(){return[1,1,1]}function f(){return[1,0,0]}function g(){return[0,1,0]}function h(){return[0,0,1]}Object.defineProperty(a,"__esModule",{value:!0});a.create=b;a.clone=function(a){return[a[0],a[1],a[2]]};a.fromValues=function(a,d,b){return[a,d,b]};a.fromArray=function(a){for(var d=b(),c=Math.min(3,a.length),e=0;e<c;++e)d[e]=a[e];return d};a.createView=function(a,b){return new Float64Array(a,b,3)};a.zeros=function(){return b()};
a.ones=c;a.unitX=f;a.unitY=g;a.unitZ=h;a.ZEROS=b();a.ONES=c();a.UNIT_X=f();a.UNIT_Y=g();a.UNIT_Z=h()});