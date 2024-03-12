// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../centroid","../OptimizedFeature","../OptimizedGeometry"],function(c,d,e,f){c.optimizedFeatureQueryEngineAdapter={getObjectId(a){return a.objectId},getAttributes(a){return a.attributes},getAttribute(a,b){return a.attributes[b]},cloneWithGeometry(a,b){return new e.OptimizedFeature(b,a.attributes,null,a.objectId)},getGeometry(a){return a.geometry},getCentroid(a,b){null==a.centroid&&(a.centroid=d.getCentroidOptimizedGeometry(new f,a.geometry,b.hasZ,b.hasM));return a.centroid}};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});