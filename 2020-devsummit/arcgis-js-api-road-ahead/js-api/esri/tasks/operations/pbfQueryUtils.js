// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./pbfFeatureServiceParser"],function(g,b,f){Object.defineProperty(b,"__esModule",{value:!0});b.parsePBFFeatureQuery=function(a,c){if((a=f.parseFeatureQuery(a,c).queryResult.featureResult)&&a.features&&a.features.length&&a.objectIdFieldName){c=a.objectIdFieldName;for(var d=0,b=a.features;d<b.length;d++){var e=b[d];e.attributes&&(e.objectId=e.attributes[c])}}return a}});