// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./lineGraphicVisualElementUtils","./originGraphicVisualElementUtils"],function(b,c,d){b.createVisualElements=function(a){switch(a.graphic.geometry.type){case "point":case "mesh":return d.createVisualElements(a);case "polygon":case "polyline":return c.createVisualElements(a);default:return null}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});