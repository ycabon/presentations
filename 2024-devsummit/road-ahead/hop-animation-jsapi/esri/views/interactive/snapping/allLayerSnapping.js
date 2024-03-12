// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Collection ../../../core/reactiveUtils ./FeatureSnappingLayerSource ./Settings ./SnappingOptions".split(" "),function(a,f,b,g,c,h){a.makeAllLayerSnappingOptions=function(k,d){const e=new h({enabled:!0,selfEnabled:!1,featureEnabled:!0,distance:d?.distance??c.defaults.distance,touchSensitivityMultiplier:d?.touchSensitivityMultiplier??c.defaults.touchSensitivityMultiplier});return{...b.watch(()=>k.map?.allLayers?.toArray()??[],l=>{e.featureSources=new f(l.map(m=>new g({layer:m,
enabled:!0})))},b.initial),options:e}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});