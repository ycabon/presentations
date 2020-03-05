// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/compilerUtils","../../../../../core/maybe","../../../../../support/elevationInfoUtils"],function(f,a,d,e,c){Object.defineProperty(a,"__esModule",{value:!0});a.isSupportedGraphic=function(b){if("graphics"!==b.layer.type)return 1;if(e.isNone(b.geometry))return 2;var a=b.geometry.type;switch(a){case "polygon":case "point":case "polyline":break;case "multipoint":case "extent":case "mesh":return 3;default:return d.neverReached(a),3}return"on-the-ground"!==
c.getGraphicEffectiveElevationMode(b)&&c.hasGraphicFeatureExpressionInfo(b)?4:0}});