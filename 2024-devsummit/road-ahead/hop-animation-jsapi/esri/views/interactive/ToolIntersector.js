// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../3d/webgl-engine/lib/Intersector","../3d/webgl-engine/lib/IntersectorInterfaces"],function(b,c,d){b.newToolIntersector=function(a){a=c.newIntersector(a);a.options.store=d.StoreResults.MIN;a.options.hud=!1;return a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});