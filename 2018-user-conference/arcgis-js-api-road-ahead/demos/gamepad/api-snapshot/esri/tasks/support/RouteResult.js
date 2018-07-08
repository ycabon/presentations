// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../Graphic","../../core/JSONSupport","./DirectionsFeatureSet"],function(d,b,f){return b.createSubclass({declaredClass:"esri.tasks.support.RouteResult",properties:{directions:{value:null,type:f},route:{value:null,json:{read:function(a,c){a.geometry&&(a.geometry.spatialReference=c.spatialReference);return d.fromJSON(a)}}},routeName:null,stops:{value:null,json:{read:function(a,c){var e=[],b=c.spatialReference;a.forEach(function(a){a.geometry&&(a.geometry.spatialReference=b);e[a.attributes.Sequence-
1]=d.fromJSON(a)});return e}}}}})});