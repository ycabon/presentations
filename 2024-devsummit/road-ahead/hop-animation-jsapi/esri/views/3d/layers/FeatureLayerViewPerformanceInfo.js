// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./support/LayerViewPerformanceInfo"],function(b,c){class d extends c.LayerViewPerformanceInfo{constructor(a,e,f,g,h,k){super(a.usedMemory,a.displayedFeatures,a.totalFeatures,a.maximumFeatures,a.nodes,a.core);this.storedFeatures=e;this.totalVertices=f;this.partial=g;this.mode=h;this.symbolComplexity=k}}b.FeatureLayerViewPerformanceInfo=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});