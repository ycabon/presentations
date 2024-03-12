// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/compilerUtils","../../shaderModules/interfaces"],function(b,e,c){b.NormalsDoubleSidedMode=void 0;(function(a){a[a.None=0]="None";a[a.View=1]="View";a[a.WindingOrder=2]="WindingOrder";a[a.COUNT=3]="COUNT"})(b.NormalsDoubleSidedMode||(b.NormalsDoubleSidedMode={}));b.Normals=function(a,d){a=a.fragment;a.code.add(c.glsl`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`);switch(d.doubleSidedMode){case b.NormalsDoubleSidedMode.None:a.code.add(c.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case b.NormalsDoubleSidedMode.View:a.code.add(c.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case b.NormalsDoubleSidedMode.WindingOrder:a.code.add(c.glsl`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:e.neverReached(d.doubleSidedMode);case b.NormalsDoubleSidedMode.COUNT:}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});