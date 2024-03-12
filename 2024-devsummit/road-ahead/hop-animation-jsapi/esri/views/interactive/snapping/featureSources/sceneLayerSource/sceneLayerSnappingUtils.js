// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/vec32","../../../../../chunks/sphere"],function(c,b,e){c.boundsFromEdge=function(f,g,h){const d=e.create(),a=e.getCenter(d);b.scaleAndAdd(a,a,f,.5);b.scaleAndAdd(a,a,g,.5);d[3]=b.distance(a,f);b.add(a,a,h);return d};c.maxCandidateCount=1E3;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});