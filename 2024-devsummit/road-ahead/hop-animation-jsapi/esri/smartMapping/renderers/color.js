// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../renderers/PointCloudClassBreaksRenderer ../../renderers/PointCloudRenderer ../../renderers/PointCloudRGBRenderer ../../renderers/PointCloudStretchRenderer ../../renderers/PointCloudUniqueValueRenderer ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../core/Logger ../../core/Error ../../intl/messages ../../intl/substitute ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/support/utils ../../renderers/visualVariables/ColorVariable ../heuristics/ageUnit ../heuristics/outline ../heuristics/sizeRange ./support/utils ../statistics/support/ageUtils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils ../symbology/color".split(" "),
function(w,ia,ja,P,Q,ka,G,la,ma,na,oa,pa,qa,ra,sa,ta,g,C,R,H,S,I,T,U,J,K,e,A,D,z,l,v){async function V(a){if(!(a&&a.layer&&(a.field||a.valueExpression||a.sqlExpression)))throw new g("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new g("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");a.forBinning&&D.verifyBinningParams(a,
"color-visual-variable");const b={...a};if("90-10"===b.theme)throw new g("color-visual-variable:not-supported","Only 'high-to-low', 'above-and-below', 'centered-on', 'extremes', 'above', 'below' themes are supported.");var c=a.forBinning?l.binningCapableLayerTypes:l.featureCapableLayerTypes;a=l.createLayerAdapter(b.layer,c,a.forBinning);if(!a)throw new g("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(c).join(", "));b.layer=a;await a.load(null!=
b.signal?{signal:b.signal}:null);if("mesh"!==a.geometryType&&b.worldScale&&(!b.view||"3d"!==b.view.type))throw new g("color-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true");c=await z.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(c=e.verifyBasicFieldValidity(a,c,"color-visual-variable:invalid-parameters"))throw c;return b}async function W(a){if(!(a&&a.layer&&(a.field||
a.valueExpression||a.sqlExpression)))throw new g("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new g("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");a.forBinning&&D.verifyBinningParams(a,"color-continuous-renderer");const b={...a};b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled??(b.defaultSymbolEnabled=
!0);var c=a.forBinning?l.binningCapableLayerTypes:l.featureCapableLayerTypes;a=l.createLayerAdapter(b.layer,c,a.forBinning);if(!a)throw new g("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(c).join(", "));b.layer=a;await a.load(null!=b.signal?{signal:b.signal}:null);c=a.geometryType;b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;b.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?b.sizeOptimizationEnabled:
!1;if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=b.edgesType||"none";else{if("3d-volumetric-uniform"===b.symbolType&&"point"!==c)throw new g("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(b.symbolType.includes("3d-volumetric")&&(!b.view||"3d"!==b.view.type))throw new g("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");
}c=await z.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(a=e.verifyBasicFieldValidity(a,c,"color-continuous-renderer:invalid-parameters"))throw a;return b}async function X(a){if(!a||!a.layer||!a.field&&!a.valueExpression)throw new g("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(a.valueExpression&&!a.view)throw new g("color-class-breaks-renderer:missing-parameters",
"View is required when 'valueExpression' is specified");a.forBinning&&D.verifyBinningParams(a,"color-class-breaks-renderer");const b={...a};b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled??(b.defaultSymbolEnabled=!0);b.classificationMethod??(b.classificationMethod="equal-interval");b.normalizationType=z.getNormalizationType(b);var c=a.forBinning?l.binningCapableLayerTypes:l.featureCapableLayerTypes;a=l.createLayerAdapter(b.layer,c,a.forBinning);if(!a)throw new g("color-class-breaks-renderer:invalid-parameters",
"'layer' must be one of these types: "+l.getLayerTypeLabels(c).join(", "));b.layer=a;if(!(null!=b.minValue&&null!=b.maxValue||null==b.minValue&&null==b.maxValue))throw new g("color-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");await a.load(null!=b.signal?{signal:b.signal}:null);c=a.geometryType;b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=
b.colorMixMode||"replace",b.edgesType=b.edgesType||"none";else{if("3d-volumetric-uniform"===b.symbolType&&"point"!==c)throw new g("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(b.symbolType.includes("3d-volumetric")&&(!b.view||"3d"!==b.view.type))throw new g("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");
}c=await z.getFieldsList({field:b.field,normalizationField:b.normalizationField});if(a=e.verifyBasicFieldValidity(a,c,"color-class-breaks-renderer:invalid-parameters"))throw a;return b}async function Y(a){if(!a?.layer)throw new g("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required");a={...a,layer:a.layer};const b=[l.LayerType.PointCloudLayer],c=l.createLayerAdapter(a.layer,b);if(!c)throw new g("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+
l.getLayerTypeLabels(b).join(", "));a.layer=c;a.density=a.density||25;a.size=a.size||"100%";if(!e.isValidPointSize(a.size))throw new g("color-point-cloud-true-color-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");await c.load(null!=a.signal?{signal:a.signal}:null);return a}async function Z(a){if(!a?.layer||!a.field)throw new g("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required");var b=a.field.toLowerCase();
if("intensity"!==b&&"elevation"!==b)throw new g("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'");a={...a,layer:a.layer,field:a.field};b=[l.LayerType.PointCloudLayer];const c=l.createLayerAdapter(a.layer,b);if(!c)throw new g("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(b).join(", "));a.layer=c;a.density=a.density||25;a.size=a.size||"100%";if(!e.isValidPointSize(a.size))throw new g("color-point-cloud-continuous-renderer:invalid-parameters",
"Invalid 'size' parameter. It should be a string of the form '100%'");await c.load(null!=a.signal?{signal:a.signal}:null);return a}function L(a){a={...a};const b=!!a.symbolType?.includes("3d-volumetric");delete a.symbolType;delete a.defaultSymbolEnabled;delete a.colorMixMode;delete a.edgesType;a.worldScale=b;return a}async function aa(a){if(!(a&&a.layer&&a.view&&a.startTime&&a.endTime))throw new g("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");
a={...a};a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled??(a.defaultSymbolEnabled=!0);var b=l.createLayerAdapter(a.layer,l.featureCapableLayerTypes);if(!b)throw new g("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(l.featureCapableLayerTypes).join(", "));a.layer=b;await b.load(null!=a.signal?{signal:a.signal}:null);const c=b.geometryType;a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:!1;a.sizeOptimizationEnabled="point"===
c||"multipoint"===c||"polyline"===c?a.sizeOptimizationEnabled:!1;if("mesh"===c)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else if("3d-volumetric-uniform"===a.symbolType&&"point"!==c)throw new g("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(a.symbolType.includes("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new g("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");
if(b=A.verifyDates(b,a.startTime,a.endTime,"color-age-renderer:invalid-parameters"))throw b;if(a.unit&&!A.supportedAgeUnits.includes(a.unit))throw new g("color-age-renderer:invalid-unit",`Supported units are: ${A.supportedAgeUnits.join(", ")}`);return a}async function E(a,b){let c=a.colorScheme,f=null;var d=null,{view:h}=a;d=await e.getBasemapInfo(a.basemap,h);f=null!=d.basemapId?d.basemapId:null;d=null!=d.basemapTheme?d.basemapTheme:null;if(c)return{scheme:v.cloneScheme(c),basemapId:f,basemapTheme:d};
b=b||a.theme||"high-to-low";if(h=v.getSchemes({theme:b,basemapTheme:d,geometryType:a.geometryType,worldScale:a.worldScale,view:h}))f=h.basemapId,d=h.basemapTheme,c=a.schemeId?v.getSchemeById({id:b+"/"+f+"/"+a.schemeId,geometryType:a.geometryType}):h.primaryScheme;return{scheme:c,basemapId:f,basemapTheme:d}}async function ba(a,b){b=await E({basemap:b.basemap,colorScheme:b.colorScheme,geometryType:b.layer.geometryType,schemeId:"elevation"===b.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"});
const c=b.scheme;if(!c)throw new g("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme");const f=e.createColors(c.colors,5);if(5>f.length)throw new g("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors");const d=e.getDefaultDataRange(a,!1,!0),h=d?e.createDefaultStopValues(d[0],d[1],5):e.createStopValues(a);return{stops:I.createColorStops({values:h,isDate:!1,colors:f,labelIndexes:[0,2,4]}),basemapId:b.basemapId,basemapTheme:b.basemapTheme,
statistics:a,defaultValuesUsed:!!d,colorScheme:v.cloneScheme(c)}}async function ca(a,b,c,f,d){const {field:h,theme:k}=a;f=await E({basemap:a.basemap,theme:a.theme,geometryType:f,colorScheme:a.colorScheme,worldScale:a.worldScale,view:a.view});const m=f.scheme;if(!m)throw new g("color-visual-variable:insufficient-info","Unable to find color scheme");var n=e.createColors(m.colors,5);if(5>n.length)throw new g("color-visual-variable:insufficient-info","Color scheme does not have enough colors");const r=
m.id.includes("seq-");c=e.getDataRange(b,c,k,d,"90-10"!==k);d=e.createDataValues(c,b,k,r);const p=e.createColors(n,5);n=new T({field:h,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,normalizationField:a.normalizationField,stops:d.map((t,q)=>({value:t,color:p[q]})),legendOptions:a.legendOptions});a=new S({type:"color",minSliderValue:null!=a.minValue?a.minValue:b.min,maxSliderValue:null!=a.maxValue?a.maxValue:b.max,theme:m.theme});a=new H({visualVariables:[a]});return{basemapId:f.basemapId,
basemapTheme:f.basemapTheme,visualVariable:n,statistics:b,defaultValuesUsed:c.defaultValuesUsed,colorScheme:v.cloneScheme(m),authoringInfo:a}}async function M(a,b,c,f,d,h,k){const m=await C.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),{field:n,defaultSymbolEnabled:r}=k,p=v.cloneScheme(a.colorScheme),t=b?.opacity,q=[a.visualVariable.clone()];b?.visualVariables?.length&&q.push(...b.visualVariables.map(x=>x.clone()));c?.minSize&&q.push(c.minSize);return{renderer:new G({classBreakInfos:[{minValue:-N,
maxValue:N,symbol:e.createSymbol(h,{type:k.symbolType,color:p.noDataColor,size:e.getSymbolSizeFromScheme(p,h),outline:e.getSymbolOutlineFromScheme(p,h,t),meshInfo:{colorMixMode:k.colorMixMode,edgesType:k.edgesType}})}],defaultLabel:r?m.other:null,defaultSymbol:r?e.createSymbol(h,{type:k.symbolType,color:p.noDataColor,size:e.getSymbolSizeFromScheme(p,h),outline:e.getSymbolOutlineFromScheme(p,h,t),meshInfo:{colorMixMode:k.colorMixMode,edgesType:k.edgesType}}):null,field:n,normalizationType:f,normalizationField:d,
valueExpression:k.valueExpression,valueExpressionTitle:k.valueExpressionTitle,visualVariables:q,authoringInfo:a.authoringInfo&&a.authoringInfo.clone()}),visualVariable:a.visualVariable.clone(),statistics:a.statistics,defaultValuesUsed:a.defaultValuesUsed,colorScheme:v.cloneScheme(a.colorScheme),basemapId:a.basemapId,basemapTheme:a.basemapTheme}}async function F(a){a=await V(a);const {view:b,field:c,valueExpression:f,minValue:d,maxValue:h,layer:k,normalizationField:m,signal:n,statistics:r}=a,[p,t]=
await Promise.all([r??e.getSummaryStatistics({layer:k,field:c,valueExpression:f,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:m?"field":void 0,normalizationField:m,minValue:d,maxValue:h,view:b,signal:n}),"90-10"===a.theme?e.getClassBreaks({layer:k,field:c,normalizationField:m,valueExpression:f,classificationMethod:"quantile",minValue:d,maxValue:h,view:b,numClasses:10,signal:n}):null]),q=c&&"function"!==typeof c?k.getField(c):null;return ca(a,p,t?.result,k.geometryType,z.isAnyDateField(q))}
function da(a,b){a=a.colorsForClassBreaks;let c;if(a&&0<a.length&&(a.some(d=>{d.numClasses===b&&(c=d.colors);return!!c}),!c)){var f=a[a.length-1];a=b-f.numClasses;if(0<a){const d=f.colors[f.numClasses-1];c=f.colors.splice(0);for(f=1;f<=a;f++)c.push(d)}}c&&=e.createColors(c,c.length);return c}async function ea(a,b){var c=await C.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const f=a.defaultSymbolEnabled,d=a.layer.geometryType,h=a.classificationMethod,k="standard-deviation"===h,m=await E({basemap:a.basemap,
geometryType:d,theme:k?"above-and-below":null,colorScheme:a.colorScheme,worldScale:!!a.symbolType?.includes("3d-volumetric"),view:a.view}),n=m.scheme,{result:r,outlineResult:p}=b,t=r.classBreakInfos,q=a.normalizationType;if(!n)throw new g("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");const x=da(n,t.length);if(!x||x.length!==t.length)throw new g("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");const B=p?.opacity;c=new G({classBreakInfos:t.map((y,
u)=>({minValue:y.minValue,maxValue:y.maxValue,symbol:e.createSymbol(d,{type:a.symbolType,color:x[u],size:e.getSymbolSizeFromScheme(n,d),outline:e.getSymbolOutlineFromScheme(n,d,B),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}}),label:y.label})),defaultLabel:f?c.other:null,defaultSymbol:f?e.createSymbol(d,{type:a.symbolType,color:n.noDataColor,size:e.getSymbolSizeFromScheme(n,d),outline:e.getSymbolOutlineFromScheme(n,d,B),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}}):
null,field:a.field,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,normalizationType:q,normalizationField:a.normalizationField,normalizationTotal:"percent-of-total"===q?r.normalizationTotal:void 0,legendOptions:a.legendOptions,authoringInfo:new H({type:"class-breaks-color",classificationMethod:h,standardDeviationInterval:a.standardDeviationInterval})});k||I.setLabelsForClassBreaks({classBreakInfos:c.classBreakInfos,classificationMethod:h,normalizationType:q,round:!0});
p?.visualVariables?.length&&(c.visualVariables=p.visualVariables.map(y=>y.clone()));return{renderer:c,colorScheme:v.cloneScheme(n),classBreaksResult:r,defaultValuesUsed:b.defaultValuesUsed,basemapId:m.basemapId,basemapTheme:m.basemapTheme}}const N=2**53-1;w.createAgeRenderer=async function(a){var b=await C.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const c=await aa(a),{defaultSymbolEnabled:f,view:d,startTime:h,endTime:k,symbolType:m,colorMixMode:n,edgesType:r,minValue:p,maxValue:t,signal:q}=
c;a=c.layer;const [x,B,y]=await Promise.all([c.unit?{unit:c.unit,statistics:null}:U({view:d,layer:a,startTime:h,endTime:k,minValue:p,maxValue:t,signal:q}),c.outlineOptimizationEnabled?J({layer:a,view:d,signal:q}).catch(e.errorCallback):null,c.sizeOptimizationEnabled?K({layer:a,view:d,signal:q}).catch(e.errorCallback):null]),{unit:u,statistics:fa}=x,O=A.getAgeExpressions({layer:a,startTime:h,endTime:k,unit:u}).valueExpression;b=R.substitute(b[`ageInfo_${u}`],{unit:u,startTime:e.formatDate(h,u,a,d),
endTime:e.formatDate(k,u,a,d)});b=await F(L({layer:a,basemap:c.basemap,valueExpression:O,symbolType:m,statistics:fa,legendOptions:{title:b},colorScheme:c.colorScheme,theme:c.theme,view:d,minValue:c.minValue,maxValue:c.maxValue,signal:q}));a=await M(b,B,y,null,null,a.geometryType,{layer:a,valueExpression:O,defaultSymbolEnabled:f,symbolType:m,colorMixMode:n,edgesType:r});a.renderer.authoringInfo?.visualVariables?.forEach(ha=>e.updateAgeRendererAuthoringInfoVV(ha,h,k,u));return{...a,unit:u}};w.createClassBreaksRenderer=
async function(a){a=await X(a);var b=e.getClassBreaks;const c={...a};delete c.basemap;delete c.colorScheme;delete c.legendOptions;delete c.symbolType;delete c.defaultSymbolEnabled;delete c.colorMixMode;delete c.edgesType;c.analyzeData=!(null!=c.minValue&&null!=c.maxValue);b=await b.call(e,c,a.outlineOptimizationEnabled);return ea(a,b)};w.createContinuousRenderer=async function(a){a=await W(a);const {layer:b,view:c,signal:f}=a,[d,h,k]=await Promise.all([F(L(a)),a.outlineOptimizationEnabled?J({layer:b,
view:c,signal:f}).catch(e.errorCallback):null,a.sizeOptimizationEnabled?K({layer:b,view:c,signal:f}).catch(e.errorCallback):null]),m=a.normalizationField;return M(d,h,k,m?"field":void 0,m,b.geometryType,a)};w.createPCContinuousRenderer=async function(a){a=await Z(a);var b=a.statistics??await e.getSummaryStatistics({layer:a.layer,field:a.field,signal:a.signal});b=await ba(b,a);return{renderer:new Q({field:a.field,pointsPerInch:a.density,pointSizeAlgorithm:e.getPointSizeAlgorithm(a.size),stops:b.stops}),
basemapId:b.basemapId,basemapTheme:b.basemapTheme,statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,colorScheme:b.colorScheme}};w.createPCTrueColorRenderer=function(a){return Y(a).then(b=>({renderer:new P({field:"RGB",pointsPerInch:b.density,pointSizeAlgorithm:e.getPointSizeAlgorithm(b.size)})}))};w.createVisualVariable=F;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});