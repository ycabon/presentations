// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/Logger ../../core/has ../../core/RandomLCG ../../core/Error ../../core/accessorSupport/decorators/subclass ../../geometry/projection".split(" "),function(f,b,g,l,m,n,h,k){b=class extends b.Clonable{projectOrWarn(a,c){if(null==a)return a;const {geometry:d,pending:e}=k.projectOrLoad(a,c);return e?null:e||d?d:(g.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:a,sourceSpatialReference:a.spatialReference,
targetSpatialReference:c}),null)}};return b=f.__decorate([h.subclass("esri.layers.support.GeoreferenceBase")],b)});