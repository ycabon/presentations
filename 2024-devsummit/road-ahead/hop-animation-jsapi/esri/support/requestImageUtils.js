// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../request"],function(b,c){b.requestImage=async function(a,d){({data:a}=await c(a,{responseType:"image",...d}));return a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});