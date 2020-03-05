// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../core/shaderModules/interfaces"],function(g,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.DiscardByCoverage=function(a,b){a=a.fragment;a.defines.addFloat("COVERAGE_TEST_THRESHOLD",.01);b.antialiasing?a.code.add(d.glsl(e||(e=c(["\n      #define discardByCoverage(radius, coverage) { if (coverage \x3c COVERAGE_TEST_THRESHOLD) discard; }\n    "],["\n      #define discardByCoverage(radius, coverage) { if (coverage \x3c COVERAGE_TEST_THRESHOLD) discard; }\n    "])))):
a.code.add(d.glsl(f||(f=c(["\n      #define discardByCoverage(radius, coverage) { float coverageLimit \x3d radius \x3c\x3d 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75; if (coverage \x3c coverageLimit) discard; }\n    "],["\n      #define discardByCoverage(radius, coverage) { float coverageLimit \x3d radius \x3c\x3d 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75; if (coverage \x3c coverageLimit) discard; }\n    "]))))};var e,f});