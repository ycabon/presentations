// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,a){Object.defineProperty(a,"__esModule",{value:!0});a.EPSILON=1E-6;a.RANDOM=Math.random;var d=Math.PI/180,e=180/Math.PI;a.toRadian=function(a){return a*d};a.toDegree=function(a){return a*e};a.equals=function(b,c){return Math.abs(b-c)<=a.EPSILON*Math.max(1,Math.abs(b),Math.abs(c))}});