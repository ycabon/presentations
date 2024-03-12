// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../core/Error ../../geometry/support/scaleUtils ../../renderers/visualVariables/SizeVariable ../statistics/spatialStatistics ../support/binningUtils ../support/adapters/support/layerUtils".split(" "),function(e,h,k,l,m,f){async function n(a){const {view:c}=a;if(!(a&&c&&a.layer))throw new e("outline:missing-parameters","'view' and 'layer' parameters are required");a.forBinning&&m.verifyBinningParams(a,"outline");const {layer:d,...g}=a;var b=a.forBinning?f.binningCapableLayerTypes:f.featureCapableLayerTypes;
a=f.createLayerAdapter(d,b,a.forBinning);if(!a)throw new e("outline:invalid-parameters","'layer' must be one of these types: "+f.getLayerTypeLabels(b).join(", "));b={layerAdapter:a,...g,view:c};await c.when();await a.load(null!=b.signal?{signal:b.signal}:null);if("polygon"!==a.geometryType)throw new e("outline:not-supported",`outline is not supported for geometryType: ${a.geometryType}`);return b}function p(a,c){const d=a.avgSize,g=h.getScaleForResolution(1,c.spatialReference);a=q.map(b=>({size:b.width,
value:Math.round(d/b.size*g)}));a.sort((b,r)=>b.value-r.value);return{visualVariables:[new k({target:"outline",valueExpression:"$view.scale",stops:a})],opacity:.25}}const q=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];return async function(a){const {layerAdapter:c,...d}=await n(a);a=await c.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...d},"json");if(!a?.length)throw new e("outline:insufficient-info","No features are available to calculate statistics");a=await l({features:a,
geometryType:c.geometryType});if(!(a&&"avgSize"in a&&a.avgSize))throw new e("outline:insufficient-info","average polygon size is invalid");return p({...a,avgSize:a.avgSize},d.view)}});