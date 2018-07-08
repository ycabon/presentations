// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../core/tsSupport/extendsHelper","../core/Version"],function(a,c,d,e){Object.defineProperty(c,"__esModule",{value:!0});a=function(a){function b(b,c){return a.call(this,b,c,"webscene")||this}d(b,a);Object.defineProperty(b.prototype,"supportsGround",{get:function(){return this.since(1,8)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"supportsVisibleElevationLayersInSlides",{get:function(){return this.lessThan(1,8)},enumerable:!0,configurable:!0});return b}(e.Version);
c.Version=a;c.default=a});