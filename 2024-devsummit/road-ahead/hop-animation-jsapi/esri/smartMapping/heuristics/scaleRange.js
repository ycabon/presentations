// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../core/Error","../../geometry/support/scaleUtils","../statistics/spatialStatistics","../support/binningUtils","../support/adapters/support/layerUtils"],function(k,n,r,t,l){async function u(a){const {view:b,sampleSize:f}=a;if(!(a&&b&&a.layer))throw new k("scale-range:missing-parameters","'view' and 'layer' parameters are required");a.forBinning&&t.verifyBinningParams(a,"scale-range");const {layer:g,...h}=a;var e=a.forBinning?l.binningCapableLayerTypes:l.featureCapableLayerTypes;a=l.createLayerAdapter(g,
e,a.forBinning);if(!a)throw new k("scale-range:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(e).join(", "));e={layerAdapter:a,...h};e.sampleSize=f||500;await b.when();await a.load(null!=e.signal?{signal:e.signal}:null);return e}function p(a,b,f=!0){if(a.constraints&&"effectiveLODs"in a.constraints){a=a.constraints.effectiveLODs;a=f?a:a.slice(0).reverse();let g=null;for(const h of a)if(!(f?h.scale>b:h.scale<b)){g=h;break}return g}}return async function(a){var b,f=
await u(a);const {view:g,sampleSize:h,layerAdapter:e,signal:v}=f;a=await e.getSampleFeatures({view:g,sampleSize:h,returnGeometry:!0,signal:v},"json");if(!a?.length)throw new k("scale-range:insufficient-info","No features are available to calculate statistics");a=await r({features:a,geometryType:e.geometryType});var c=0,d=0;let m=b=0;switch(e.geometryType){case "point":case "multipoint":c=a.avgMinDistance??0;d=12;b=a.minDistance??0;m=320;break;case "polyline":c=a.avgLength??0;d=30;b=a.minLength??0;
m=320;break;case "polygon":c=a.avgSize??0,d=15,b=a.minSize??0,m=640}b=0<b?b/m:null;c=n.getScaleForResolution((0<c?c/d:null)??0,g.spatialReference);d=n.getScaleForResolution(b??0,g.spatialReference);const {minScale:w,maxScale:x}={minScale:c,maxScale:d};c=w;d=x;const {view:q,snapToLOD:y,layerAdapter:z}=f;y&&(f=p(q,c),b=p(q,d,!1),c=f?f.scale:c,d=b?b.scale:d);if(c<d)throw new k("scale-range:invalid","calculated minScale is less than maxScale.");d>c/2&&(d=Math.floor(d/2));1E8<c&&(c=0);"polygon"!==z.geometryType&&
(d=0);return{minScale:Math.ceil(c),maxScale:Math.floor(d),spatialStatistics:a}}});