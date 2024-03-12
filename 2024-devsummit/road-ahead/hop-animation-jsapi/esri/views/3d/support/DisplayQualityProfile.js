// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../core/has","../../../core/time"],function(d,f){function g(){const a=!!d("esri-mobile"),b=!!d("ios"),h=f.Milliseconds(400);return{low:{graphics3D:{maxTotalNumberOfFeatures:25E3,maxNumberOfDrawCalls:8E3,maxTotalNumberOfVertices:255E4,polygonLodFactor:.5,polylineLodFactor:1,snapshotAvailable:!1,skipHighSymbolLods:!0,uncompressedTextureDownsamplingEnabled:!0},heatmap:{pixelRatio:.125,maxTotalNumberOfFeatures:5E4},sceneService:{object:{lodFactor:.2},point:{lodFactor:1},integratedMesh:{lodFactor:.6},
pointCloud:{lodFactor:.5},uncompressedTextureDownsamplingEnabled:!0},tiledSurface:{lodBias:-1,angledSplitBias:.5,vtlContentZoom:.75,reduceTileLevelDifferences:!0},fadeDuration:f.Milliseconds(0),antialiasingEnabled:!1,physicalBasedRenderingEnabled:!1,highQualityTransparency:!1,highResolutionAtmosphere:!1,reflections:!1,ambientOcclusion:!1,memoryLimit:200+e.IPhone12Pro,additionalCacheMemory:0,frameRate:0,maximumPixelRatio:1},medium:{graphics3D:{maxTotalNumberOfFeatures:1E5,maxNumberOfDrawCalls:17E3,
maxTotalNumberOfVertices:625E4,polygonLodFactor:a?.8:1,polylineLodFactor:a?1.2:1.5,snapshotAvailable:!b,skipHighSymbolLods:!1,uncompressedTextureDownsamplingEnabled:a},heatmap:{pixelRatio:.25,maxTotalNumberOfFeatures:13E4},sceneService:{object:{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:a},tiledSurface:{lodBias:0,angledSplitBias:1,vtlContentZoom:1.5,reduceTileLevelDifferences:!d("disable-feature:reduce-map-tile-levels")},
fadeDuration:h,antialiasingEnabled:!0,physicalBasedRenderingEnabled:!0,highQualityTransparency:!0,highResolutionAtmosphere:!1,reflections:!1,ambientOcclusion:!1,memoryLimit:a?600+e.GalaxyS20:750+e.FullHD,additionalCacheMemory:a?-100:150,frameRate:0,maximumPixelRatio:1},high:{graphics3D:{maxTotalNumberOfFeatures:1E5,maxNumberOfDrawCalls:17E3,maxTotalNumberOfVertices:125E5,polygonLodFactor:a?1.2:2,polylineLodFactor:a?1.2:2,snapshotAvailable:!b,skipHighSymbolLods:!1,uncompressedTextureDownsamplingEnabled:!1},
heatmap:{pixelRatio:.5,maxTotalNumberOfFeatures:23E4},sceneService:{object:{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1,vtlContentZoom:1.5,reduceTileLevelDifferences:!d("disable-feature:reduce-map-tile-levels")},fadeDuration:h,antialiasingEnabled:!0,physicalBasedRenderingEnabled:!0,highQualityTransparency:!0,highResolutionAtmosphere:!0,reflections:!0,ambientOcclusion:!0,
memoryLimit:a?900+e.SurfacePro7:1500+e.FullHDRetina,additionalCacheMemory:a?-150:0,frameRate:0,maximumPixelRatio:a?1:Infinity}}}class c{static isValidProfile(a){return a in c.profiles}static getDefaultProfile(){return d("esri-iPhone")?"low":"medium"}static apply(a,b){a=c.profiles[a];b.graphics3D.maxTotalNumberOfFeatures=a.graphics3D.maxTotalNumberOfFeatures;b.graphics3D.maxNumberOfDrawCalls=a.graphics3D.maxNumberOfDrawCalls;b.graphics3D.maxTotalNumberOfVertices=a.graphics3D.maxTotalNumberOfVertices;
b.graphics3D.polygonLodFactor=a.graphics3D.polygonLodFactor;b.graphics3D.polylineLodFactor=a.graphics3D.polylineLodFactor;b.graphics3D.snapshotAvailable=a.graphics3D.snapshotAvailable;b.graphics3D.skipHighSymbolLods=a.graphics3D.skipHighSymbolLods;b.graphics3D.uncompressedTextureDownsamplingEnabled=a.graphics3D.uncompressedTextureDownsamplingEnabled;b.sceneService.object.lodFactor=a.sceneService.object.lodFactor;b.sceneService.point.lodFactor=a.sceneService.point.lodFactor;b.sceneService.integratedMesh.lodFactor=
a.sceneService.integratedMesh.lodFactor;b.sceneService.pointCloud.lodFactor=a.sceneService.pointCloud.lodFactor;b.sceneService.uncompressedTextureDownsamplingEnabled=a.sceneService.uncompressedTextureDownsamplingEnabled;b.tiledSurface.lodBias=a.tiledSurface.lodBias;b.tiledSurface.angledSplitBias=a.tiledSurface.angledSplitBias;b.tiledSurface.vtlContentZoom=a.tiledSurface.vtlContentZoom;b.tiledSurface.reduceTileLevelDifferences=a.tiledSurface.reduceTileLevelDifferences;b.heatmap.pixelRatio=a.heatmap.pixelRatio;
b.heatmap.maxTotalNumberOfFeatures=a.heatmap.maxTotalNumberOfFeatures;b.fadeDuration=a.fadeDuration;b.antialiasingEnabled=a.antialiasingEnabled;b.physicallyBasedRenderingEnabled=a.physicalBasedRenderingEnabled;b.highQualityTransparency=a.highQualityTransparency;b.highResolutionAtmosphere=a.highResolutionAtmosphere;b.reflections=a.reflections;b.ambientOcclusion=a.ambientOcclusion;b.memoryLimit=a.memoryLimit;b.additionalCacheMemory=a.additionalCacheMemory;b.frameRate=a.frameRate;b.maximumPixelRatio=
a.maximumPixelRatio}}c.test={reset(){const a=g();for(const b of Object.keys(a))c.profiles[b]=a[b]}};const e={IPhone12Pro:120,GalaxyS20:200,FullHD:240,SurfacePro7:300,FullHDRetina:430};(c||={}).profiles=g();return c});