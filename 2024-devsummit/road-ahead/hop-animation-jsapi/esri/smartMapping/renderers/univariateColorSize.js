// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../renderers/support/AuthoringInfo ../../renderers/support/ClassBreakInfo ../../renderers/visualVariables/support/SizeStop ../../renderers/visualVariables/support/visualVariableUtils ./color ./size ./support/utils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils ../symbology/support/aboveAndBelowUtils ../../symbols/support/cimSymbolUtils ../../symbols/support/Symbol3DMaterial".split(" "),function(v,m,H,y,n,t,z,w,u,A,x,q,I,J,K){async function L(a){if(!a?.layer||
!(a.field||a.valueExpression||a.sqlExpression))throw new m("univariate-colorsize-visual-variables:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new m("univariate-colorsize-visual-variables:missing-parameters","View is required when 'valueExpression' is specified");if("above-and-below"===a.theme&&a.sizeOptions?.sizeOptimizationEnabled)throw new m("univariate-colorsize-visual-variables:invalid-parameters",
"sizeOptimizationEnabled cannot be true for 'above-and-below' theme");a.forBinning&&A.verifyBinningParams(a,"univariate-colorsize-visual-variables");const b={...a,layer:a.layer};var c=a.forBinning?q.binningCapableLayerTypes:q.featureCapableLayerTypes;a=q.createLayerAdapter(b.layer,c,a.forBinning);if(!a)throw new m("univariate-colorsize-visual-variables:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));b.layer=a;b.theme=b.theme||b.colorOptions?.theme?b.theme:
"high-to-low";if("90-10"===b.theme)throw new m("univariate-colorsize-visual-variables:not-supported","Only 'high-to-low', 'above-and-below', 'above', 'below' themes are supported.");await a.load(null!=b.signal?{signal:b.signal}:null);c=await x.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(c=u.verifyBasicFieldValidity(a,c,"univariate-colorsize-visual-variables:invalid-parameters"))throw c;return b}async function M(a){if(!a?.layer||!(a.field||
a.valueExpression||a.sqlExpression))throw new m("univariate-colorsize-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new m("univariate-colorsize-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");a.forBinning&&A.verifyBinningParams(a,"univariate-colorsize-continuous-renderer");const b={...a,layer:a.layer};b.symbolType=b.symbolType||
"2d";b.colorOptions||(b.colorOptions={});b.colorOptions.isContinuous=b.colorOptions.isContinuous??!1;var c=a.forBinning?q.binningCapableLayerTypes:q.featureCapableLayerTypes;a=q.createLayerAdapter(b.layer,c,a.forBinning);if(!a)throw new m("univariate-colorsize-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));b.layer=a;await a.load(null!=b.signal?{signal:b.signal}:null);if("above-and-below"===b.theme&&b.symbolOptions){if(b.symbolType.includes("3d-volumetric"))throw new m("univariate-colorsize-continuous-renderer:invalid-parameters",
"'symbolOptions' is applicable for '2d' and '3d-flat' 'symbolType' only");if("point"!==a.geometryType&&"polygon"!==a.geometryType)throw new m("univariate-colorsize-continuous-renderer:invalid-parameters","'symbolOptions' only apply to layers with 'point' or 'polygon' geometryType");}c=await x.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(c=u.verifyBasicFieldValidity(a,c,"univariate-colorsize-continuous-renderer:invalid-parameters"))throw c;
return b}function B(a,b){"type"in a&&"cim"===a.type?J.applyCIMSymbolColor(a,b):"type"in a&&a.type.includes("3d")?a.symbolLayers.forEach(c=>{"material"in c&&null!=c.material&&"color"in c.material&&(c.material?c.material.color=b:c.material=new K.Symbol3DMaterial({color:b}))}):"color"in a&&(a.color=b)}function C(a,b,c=!0){const d=b?.authoringInfo?.clone(),e=b.size.visualVariables.map(g=>g.clone());c?e.push(b.color.visualVariable.clone()):d.visualVariables=d.visualVariables?.filter(g=>"size"===g.type);
e.push(...a.visualVariables.filter(g=>"target"in g&&"outline"===g.target).map(g=>g.clone()));a.authoringInfo=d;a.visualVariables=e}async function N(a,b,c,d){const e=b[0];b=b[1];const g=Math.round((b-e)/2)+e,k=a.clone();k.stops=[new n({value:c[0],size:b}),new n({value:c[1],size:g}),new n({value:c[2],size:e}),new n({value:c[3],size:g}),new n({value:c[4],size:b})];a.stops=[new n({value:d[0],size:t.getSize(k,d[0])}),new n({value:d[1],size:t.getSize(k,d[1])}),new n({value:d[2],size:t.getSize(k,d[2])}),
new n({value:d[3],size:t.getSize(k,d[3])}),new n({value:d[4],size:t.getSize(k,d[4])})]}async function O(a,b,c,d,e){a=a.find(f=>"width-and-depth"!==f.axis&&!f.target);const g="number"===typeof a?.minSize?a?.minSize:null,k="number"===typeof a?.maxSize?a?.maxSize:null;if(null!=a?.minDataValue&&null!=g&&null!=k)if(d)if("above-and-below"===d){a.minDataValue=null;a.maxDataValue=null;a.minSize=null;a.maxSize=null;d=u.createStopValuesForAboveBelow(c,e);const f=u.clampAboveAndBelowStopValues(d,c);await N(a,
[g,k],d,f);b.stops.forEach((l,h)=>l.value=f[h])}else{const {minDataValue:f,maxDataValue:l}=a,h=u.createDefaultStopValues(f,l,5);b.stops.forEach((r,p)=>r.value=h[p]);a.minDataValue=h[0];a.maxDataValue=h[h.length-1]}else a.minDataValue=b.stops[0].value,a.maxDataValue=b.stops[b.stops.length-1].value}async function D(a){var b=await L(a),c=z.createVisualVariable,d={...b},e=d.colorOptions,g=d.theme||e?.theme,k=d.legendOptions||d.colorOptions?.legendOptions;delete d.sizeOptions;delete d.colorOptions;c=await c.call(z,
{...d,...e,statistics:d.statistics,theme:g,legendOptions:k});const {visualVariable:f,statistics:l}=c;d=w.createVisualVariables;e={...b};const {sizeOptions:h,theme:r}=e;g=e.legendOptions||e.sizeOptions?.legendOptions;delete e.sizeOptions;delete e.colorOptions;d=await d.call(w,{...e,...h,statistics:l||e.statistics,theme:"above-and-below"===r?null:r,legendOptions:g});var p=d.visualVariables;e=a.layer;a=a.field?e.getField(a.field):null;await O(p,f,l,b.theme,x.isAnyDateField(a));a=d.basemapId;e=d.basemapTheme;
g=c.defaultValuesUsed;k={visualVariable:f,colorScheme:c.colorScheme};p={visualVariables:p,sizeScheme:d.sizeScheme};const {theme:E,minValue:P,maxValue:Q}=b;b=c.authoringInfo.visualVariables[0].clone();d=d.authoringInfo.visualVariables[0].clone();"above-and-below"===E&&(c=c.visualVariable.stops,b.minSliderValue=d.minSliderValue=P??c[0].value,b.maxSliderValue=d.maxSliderValue=Q??c[c.length-1].value,d.theme="above-and-below");b=new H({type:"univariate-color-size",univariateTheme:E,visualVariables:[b,
d]});return{basemapId:a,basemapTheme:e,statistics:l,defaultValuesUsed:g,color:k,size:p,authoringInfo:b}}async function F(a){a=await M(a);var b=w.createContinuousRenderer,c={...a},d={...c.sizeOptions};delete c.sizeOptions;delete c.colorOptions;delete d.sizeOptimizationEnabled;const {renderer:e,statistics:g,defaultValuesUsed:k}=await b.call(w,{...c,...d});b={...a};c=b.symbolType;d=!!c?.includes("3d-volumetric");delete b.symbolType;delete b.defaultSymbolEnabled;if(b.worldScale=d)b.sizeOptions={...b.sizeOptions},
b.sizeOptions.axis="3d-volumetric-uniform"===c?"all":"height";b.statistics=g;b=await D(b);if("above-and-below"===a.theme){var f=a.symbolOptions,l=a.layer;c=f?.symbols?"custom":f?.symbolStyle;var h=a.colorOptions?.isContinuous;C(e,b,h);if(c||!h){d=b.size.visualVariables[0].stops;l=l.geometryType;!f?.symbolStyle&&!f?.symbols||"point"!==l&&"polygon"!==l?(f=e.classBreakInfos[0].symbol,f={above:f.clone(),below:f.clone()}):f=f.symbols||I.getAboveAndBelowSymbols(f.symbolStyle);const {above:r,below:p}=f;
h||(h=b.color.colorScheme.colors,f=h[0],B(r,h[h.length-1]),B(p,f));e.classBreakInfos=[new y({minValue:-G,maxValue:d[2].value,symbol:p}),new y({minValue:d[2].value,maxValue:G,symbol:r})];c&&e.authoringInfo&&(e.authoringInfo.univariateSymbolStyle=c)}}else C(e,b);return{renderer:e,statistics:g,defaultValuesUsed:k,color:a.colorOptions?.isContinuous||"above-and-below"!==a.theme?b.color:null,size:b.size,basemapId:b.basemapId,basemapTheme:b.basemapTheme}}const G=2**53-1;v.createContinuousRenderer=async function(a){return F(a)};
v.createRenderer=F;v.createVisualVariables=D;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});