// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../RasterFunction"],function(b,e){b.createRasterFunction=function(f,a,c){Object.keys(a).forEach(d=>{null==a[d]&&delete a[d]});c||="unknown";return new e({functionName:f,functionArguments:a,outputPixelType:c})};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});