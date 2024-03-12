// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./TerrainConst","./TileAgent"],function(a,b,c){class d extends c.TileAgent{constructor(){super(...arguments);this._scaleRangeEnabled=!1}get _desiredMinLevelDelta(){return b.getElevationDesiredResolutionLevel(this.tile.level)-(this.tile.elevationLevel-this.tile.level)}get _progressiveLevelModulo(){return 0}}a.ElevationTileAgent=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});