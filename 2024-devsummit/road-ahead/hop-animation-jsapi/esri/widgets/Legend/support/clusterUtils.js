// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../renderers/visualVariables/SizeVariable"],function(d,e){d.getEffectiveClusterSizeVariable=function(a,b,c){a=a.getEffectiveRenderer();if(!(a&&"visualVariables"in a&&a.visualVariables))return null;a=a.visualVariables.find(f=>"size"===f.type);if(!("stops"in a&&3===a.stops?.length&&a.stops[2].useMinValue))return null;c=c.featuresTilingScheme.getClosestInfoForScale(c.scale).level;return(b=b.getDisplayStatistics(c,a.field))?new e({field:a.field,minSize:a.stops[2].size,minDataValue:b.minValue,
maxSize:a.stops[3].size,maxDataValue:b.maxValue}):null};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});