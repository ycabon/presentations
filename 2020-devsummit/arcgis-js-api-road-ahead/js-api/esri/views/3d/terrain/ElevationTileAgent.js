// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/ObjectPool ./TerrainConst ./TileAgent".split(" "),function(g,h,c,d,e,f){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a._scaleRangeEnabled=!1;return a}c(a,b);Object.defineProperty(a.prototype,"_desiredMinLevelDelta",{get:function(){return e.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.lij[0])},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"_loadingLevelDelta",
{get:function(){return 0},enumerable:!0,configurable:!0});a.Pool=new d(a);return a}(f.TileAgent)});