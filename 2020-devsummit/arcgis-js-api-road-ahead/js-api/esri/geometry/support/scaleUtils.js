// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/unitUtils"],function(f,c,d){function e(b,a){a=d.getMetersPerUnitForSR(a);return b/(a*d.inchesPerMeter*96)}Object.defineProperty(c,"__esModule",{value:!0});c.getScale=function(b,a){a=a||b.extent;b=b.width;var c=d.getMetersPerUnitForSR(a&&a.spatialReference);return a&&b?a.width/b*c*d.inchesPerMeter*96:0};c.getResolutionForScale=e;c.getScaleForResolution=function(b,a){a=d.getMetersPerUnitForSR(a);return b*a*d.inchesPerMeter*96};c.getExtentForScale=function(b,a){var c=
b.extent;b=b.width;a=e(a,c.spatialReference);return c.clone().expand(a*b/c.width)}});