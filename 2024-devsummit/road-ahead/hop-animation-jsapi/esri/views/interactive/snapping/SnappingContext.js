// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a){this.selfSnappingZ=this.visualizer=this.excludeFeature=this.vertexHandle=null;this.editGeometryOperations=a.editGeometryOperations;this.elevationInfo=a.elevationInfo;this.pointer=a.pointer;this.vertexHandle=a.vertexHandle;this.excludeFeature=a.excludeFeature;this.feature=a.feature;this.visualizer=a.visualizer;this.selfSnappingZ=a.selfSnappingZ}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}
b.SnappingContext=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});