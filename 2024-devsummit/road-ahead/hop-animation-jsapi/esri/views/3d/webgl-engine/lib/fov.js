// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.fovd2fovx=function(c,a,b){return 2*Math.atan(a*Math.tan(.5*c)/Math.sqrt(a*a+b*b))};d.fovd2fovy=function(c,a,b){return 2*Math.atan(b*Math.tan(.5*c)/Math.sqrt(a*a+b*b))};d.fovx2fovd=function(c,a,b){return 2*Math.atan(Math.sqrt(a*a+b*b)*Math.tan(.5*c)/a)};d.fovy2fovd=function(c,a,b){return 2*Math.atan(Math.sqrt(a*a+b*b)*Math.tan(.5*c)/b)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});