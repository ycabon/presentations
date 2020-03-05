// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper"],function(a,c,d){Object.defineProperty(c,"__esModule",{value:!0});a=function(){function a(b,a){void 0===b&&(b=0);void 0===a&&(a=0);this.min=b;this.max=a;this.level=0;this.hasNoDataValues=!1}a.prototype.copyFrom=function(a){this.min=a.min;this.max=a.max;this.level=a.level;this.hasNoDataValues=a.hasNoDataValues};return a}();c.ElevationBounds=a});