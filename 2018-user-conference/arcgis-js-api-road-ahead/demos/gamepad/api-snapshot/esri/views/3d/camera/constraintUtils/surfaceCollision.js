// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../intersectionUtils","../../lib/glMatrix"],function(l,c,k,f){Object.defineProperty(c,"__esModule",{value:!0});c.apply=function(e,b,g,a){void 0===g&&(g=0);void 0===a&&(a=b);var d=e.state.constraints;b!==a&&a.copyFrom(b);if(!d.collision.enabled)return!1;var c=k.surfaceElevationBelowEye(e,b);b=e.renderCoordsHelper.getAltitude(b.eye);d=d.collision.elevationMargin;if(b-c>=d)return!1;f.vec3d.subtract(a.center,a.eye,h);e.renderCoordsHelper.setAltitude(c+d,a.eye);1===g&&f.vec3d.add(a.eye,
h,a.center);a.markViewDirty();return!0};var h=f.vec3d.create()});