// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/mathUtils","../../../geometry/support/aaBoundingRect","./TilingScheme"],function(a,b,c,g){b=b.clampFloat32(b.numberMaxFloat32/10);const e=c.create();g.TilingScheme.WebMercatorAuxiliarySphere.getExtent(0,0,0,e);c=c.create([-180,-90,180,90]);let f=3;a.elevationNodataValue=b;a.geographicWorldExtent=c;a.getElevationDesiredResolutionLevel=function(d){return 4>d?3:f};a.maxMemoryLodBias=2.5;a.maxPatchTesselation=512;a.maxRootTiles=64;a.maxTileNeighborLevelDelta=4;a.progressiveLoadingModulo=
2;a.test={setElevationDesiredMaxUpscalingDistance(d){f=null==d?3:d}};a.tooManyRootTilesAfterChangeError="Cannot extend surface to encompass all layers because it would result in too many root tiles.";a.tooManyRootTilesForLayerError="Surface extent is too large for tile resolution at level 0.";a.webmercatorWorldExtent=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});