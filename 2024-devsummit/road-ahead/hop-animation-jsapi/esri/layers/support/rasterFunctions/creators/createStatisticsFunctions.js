// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../focalStatUtils","./utils"],function(b,c,d){b.statistics=function(a){const {rows:e,cols:f,fillNoDataOnly:g=!1,raster:h,outputPixelType:k}=a;a=c.statisticsTypeMap.toJSON(a.statisticsType);return d.createRasterFunction("Statistics",{rows:e,cols:f,fillNoDataOnly:g,statisticsType:a,raster:h},k)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});