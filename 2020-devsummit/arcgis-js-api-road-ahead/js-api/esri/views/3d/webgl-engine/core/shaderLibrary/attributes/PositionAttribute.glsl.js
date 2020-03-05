// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(e,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.PositionAttribute=function(a){a.attributes.add("position","vec3");a.vertex.code.add(d.glsl(b||(b=c(["\n    vec3 positionModel() { return position; }\n  "],["\n    vec3 positionModel() { return position; }\n  "]))))};var b});