// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../Color ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../core/Logger ../../symbols ../../core/arrayUtils ../../core/Error ../../core/screenUtils ../../intl/messages ../../layers/support/AggregateField ../../layers/support/ExpressionInfo ../../renderers/support/AttributeColorInfo ../../renderers/support/OthersCategory ../heuristics/outline ../heuristics/sizeRange ./size ./support/utils ../statistics/predominantCategories ../statistics/support/utils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils ../symbology/pieChart ../../symbols/support/cimSymbolUtils ../../symbols/SimpleLineSymbol".split(" "),
function(E,q,la,ma,na,oa,I,pa,qa,ra,sa,ta,ua,N,l,O,F,y,z,J,P,Q,R,S,u,T,U,V,W,r,G,X,Y){async function Z(a){if(!(a?.layer&&a.view&&a.attributes?.length))throw new l("pie-chart-renderer:missing-parameters","'layer', 'view' and 'attributes' parameters are required");if(10<a.attributes.length)throw new l("pie-chart-renderer:invalid-parameters","PieChart renderer does not support more than 10 attributes");a.forBinning&&V.verifyBinningParams(a,"pie-chart-renderer");const b={...a,layer:a.layer,view:a.view,
attributes:a.attributes};b.shape=b.shape||"pie";b.othersCategoryEnabled??(b.othersCategoryEnabled=!0);b.includeSizeVariable=a.includeSizeVariable||!1;var c=a.forBinning?r.binningCapableLayerTypes:H,d=r.createLayerAdapter(b.layer,c,a.forBinning);if(!d)throw new l("pie-chart-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(c).join(", "));b.layer=d;c=null!=b.signal?{signal:b.signal}:null;await Promise.all([a.view.when(),d.load(c)]);c=d.geometryType;a="polygon"===
c;c="point"===c||"multipoint"===c||a;b.outlineOptimizationEnabled=a?b.outlineOptimizationEnabled:!1;b.sizeOptimizationEnabled=c?b.sizeOptimizationEnabled:!1;if(!c)throw new l("pie-chart-renderer:not-supported","PieChart renderer is only supported for point and polygon layers");a=[];c=b.attributes;for(const g of c)c=await W.getFieldsList({field:g.field,valueExpression:g.valueExpression}),a.push(...c);if(d=u.verifyBasicFieldValidity(d,a.filter(Boolean),"pie-chart-renderer:invalid-parameters"))throw d;
return b}async function aa(a){let b=a.pieChartScheme,c=null;var d=null;d=await u.getBasemapInfo(a.basemap,a.view);c=null!=d.basemapId?d.basemapId:null;d=null!=d.basemapTheme?d.basemapTheme:null;if(b)return{scheme:G.cloneScheme(b),basemapId:c,basemapTheme:d};if(a=G.getSchemes({numColors:a.attributes.length,geometryType:a.layer.geometryType,basemapTheme:d}))b=a.primaryScheme,c=a.basemapId,d=a.basemapTheme;return{scheme:b,basemapId:c,basemapTheme:d}}async function ba(a,b){const {valueExpression:c,sqlExpression:d,
sqlWhere:g}=U.getSumOfAttributesExpr(a.attributes),k=await F.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");return S.createVisualVariables({layer:a.layer,basemap:a.basemap,valueExpression:c,sqlExpression:d,sqlWhere:g,sizeScheme:b,sizeOptimizationEnabled:a.sizeOptimizationEnabled,legendOptions:{title:k.sumOfCategories},view:a.view,signal:a.signal})}async function ca(a){if(!a||!a.layer)throw new l("pie-chart-cluster-renderer:missing-parameters","'layer' parameter is required");const b={...a};
b.shape=b.shape||"pie";b.defaultSymbolEnabled??(b.defaultSymbolEnabled=!0);a=a.layer;if(!r.getLayerTypes(H).includes(a.type))throw new l("pie-chart-cluster-renderer:invalid-parameters","'layer' must be one of these types: "+r.getLayerTypeLabels(H).join(", "));await a.load(null!=b.signal?{signal:b.signal}:null);if("point"!==a.geometryType)throw new l("pie-chart-cluster-renderer:invalid-parameters","Cluster renderers are only supported for point layers");({renderer:a}=a);if(!a)throw new l("pie-chart-cluster-renderer:invalid-parameters",
"input layer does not have a renderer.");if(!da.has(a.type))throw new l("pie-chart-cluster-renderer:invalid-parameters",`Cannot create a pie chart renderer for clusters based on a ${a.type} renderer.`);if("valueExpression"in a&&a.valueExpression)throw new l("pie-chart-cluster-renderer:invalid-parameters","Cannot create a pie chart renderer for clusters from a layer whose renderer contains a valueExpression.");if("unique-value"===a.type){if(a.field2)throw new l("pie-chart-cluster-renderer:invalid-parameters",
"Cannot create a pie chart renderer for clusters from a UniqueValueRenderer using more than one field.");if(null!=a.uniqueValueInfos&&10<a.uniqueValueInfos.length)throw new l("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer cannot be created from a UniqueValueRenderer with more than 10 unique value infos.");}if("class-breaks"===a.type){if(2>a.classBreakInfos.length)throw new l("pie-chart-cluster-renderer:invalid-parameters","Cannot create a pie chart renderer for clusters from a layer renderer with a continuous color or size gradient.");
if(10<a.classBreakInfos.length)throw new l("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer can not be created from a ClassBreaksRenderer with more than 10 class break infos.");if("class-breaks-size"===a?.authoringInfo?.type)throw new l("pie-chart-cluster-renderer:invalid-parameters","PieChart cluster renderer can not be created from a ClassBreaksRenderer with breaks varied by size instead of color.");}return b}function ea(a){const {renderer:b,defaultSymbolEnabled:c,defaultLabelBackup:d}=
a,{field:g,defaultSymbol:k,defaultLabel:n}=b;a=b.uniqueValueInfos??[];var p=k&&c,h=p?9:10;const v=u.createColors(K,h);h=a.slice(0,h).map((e,m)=>{const t=e.label;m=v[m];return{field:new y({name:A(e.value?.toString()),alias:t,onStatisticExpression:new z({title:`Field definition - ${t}`,expression:`Number(Text($feature["${g}"]) == "${e.value+""}")`,returnType:"number"}),statisticType:"sum"}),color:B(e.symbol,m)}})??[];p&&(p=n||d,h.push({field:new y({name:A("cluster_default"),alias:p,onStatisticExpression:new z({title:`Field definition - ${p}`,
expression:fa(g,a),returnType:"number"}),statisticType:"sum"}),color:B(k,L)}));return h}function ha(a){const {renderer:b,defaultSymbolEnabled:c,defaultLabelBackup:d}=a,{field:g,classBreakInfos:k,defaultSymbol:n,defaultLabel:p}=b;var h=(a=n&&c)?9:10;const v=u.createColors(K,h);h=k.slice(0,h).map((e,m)=>{const t=e.label||`${e.minValue} - ${e.maxValue}`;m=v[m];return{field:new y({name:A(t),alias:t,onStatisticExpression:new z({title:`Field definition - ${t}`,expression:`Number($feature["${g}"] >= ${e.minValue} && $feature["${g}"] < ${e.maxValue})`,
returnType:"number"}),statisticType:"sum"}),color:B(e.symbol,m)}});a&&(a=p||d,h.push({field:new y({name:A("cluster_default"),alias:a,onStatisticExpression:new z({title:`Field definition - ${a}`,expression:ia(g,k),returnType:"number"}),statisticType:"sum"}),color:B(n,L)}));return h}function A(a){return"SUM_"+(a+"").replaceAll(/[^a-zA-Z0-9_]/g,"_")}function B(a,b){return"simple-marker"===a?.type&&a.color?a.color.clone():"cim"===a?.type&&(a=X.getCIMSymbolColor(a))?a.clone():b?b.clone():ja.clone()}function fa(a,
b){return`Number(!(${b.map(c=>`(Text($feature["${a}"]) == "${c.value+""}")`).join(" || ")}))`}function ia(a,b){return`Number(!(${b.map(c=>`($feature["${a}"] >= ${c.minValue} && $feature["${a}"] < ${c.maxValue})`).join(" || ")}))`}const H=[r.LayerType.CSVLayer,r.LayerType.FeatureLayer,r.LayerType.GeoJSONLayer,r.LayerType.OGCFeatureLayer,r.LayerType.OrientedImageryLayer,r.LayerType.StreamLayer,r.LayerType.WFSLayer],da=new Set(["unique-value","class-breaks"]),ja=new q("#aaaaaa"),L=new q("#5c5c5c"),K=
[new q("#e60049"),new q("#0bb4ff"),new q("#50e991"),new q("#e6d800"),new q("#9b19f5"),new q("#ffa300"),new q("#dc0ab4"),new q("#b3d4ff"),new q("#00bfa0"),new q("#f0cccc")];E.createRenderer=async function(a){const [b,c]=await Promise.all([Z(a),F.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);a=await aa(b);const d=a?.scheme;if(!d)throw new l("pie-chart-renderer:insufficient-info","Unable to find pie-chart scheme");var g=b.layer;const {includeSizeVariable:k,sizeOptimizationEnabled:n,outlineOptimizationEnabled:p,
view:h,signal:v}=b;var e=d.sizeScheme,m=b.attributes,t=m.map(f=>f.field).filter(N.isSome);const [M,w,x,C]=await Promise.all([1<t.length?T({layer:g,fields:t,view:h,signal:v}):null,k?ba(b,e):null,!k&&n?R({layer:g,view:h,signal:v}).catch(u.errorCallback):null,p?Q({layer:g,view:h,signal:v}).catch(u.errorCallback):null]);t=M?.predominantCategoryInfos?{uniqueValueInfos:M.predominantCategoryInfos}:{uniqueValueInfos:t.map(f=>({value:f,count:0}))};const ka=u.createColors(d.colors,m.length);m=m.map((f,D)=>
new J({field:f.field,valueExpression:f.valueExpression,label:f.label,valueExpressionTitle:f.valueExpressionTitle,color:ka[D]}));g=g.geometryType;e=null!=e&&"background"in e&&e.background;e=new I({attributes:m,othersCategory:new P.OthersCategory({label:c.other,color:b.othersCategoryEnabled?d.colorForOthersCategory:null,threshold:.04}),holePercentage:"donut"===b.shape?.45:0,backgroundFillSymbol:e?u.createSymbol(g,{type:"2d",color:e.color,outline:u.getSymbolOutlineFromScheme(e,g,C?.opacity)}):null,size:O.toPt(d.size),
outline:new Y(u.getSymbolOutlineFromScheme(d,"point",C?.opacity)),legendOptions:b.legendOptions});w&&(n||w.visualVariables.forEach(f=>{"number"===typeof f.minSize&&"number"===typeof f.maxSize&&(f.minSize*=2.5,f.maxSize*=1.8)}),n&&"point"===g&&w.visualVariables.forEach(f=>{f?.minSize&&"object"===typeof f.minSize&&f.minSize?.stops?.forEach(D=>{D.size*=1.8})}),e.authoringInfo=w.authoringInfo.clone(),e.visualVariables=w.visualVariables?.map(f=>f.clone()));C?.visualVariables?.length&&(m=C.visualVariables.map(f=>
f.clone()),e.visualVariables?e.visualVariables.push(...m):e.visualVariables=m);x?.minSize&&("point"===g&&x.minSize.stops?.forEach(f=>{f.size*=2.5}),"polygon"===g&&x.minSize.stops?.forEach(f=>{f.size*=1.8}),e.visualVariables?e.visualVariables.push(x.minSize):e.visualVariables=[x.minSize]);return{renderer:e,pieChartScheme:G.cloneScheme(d),size:w,basemapId:a.basemapId,basemapTheme:a.basemapTheme,statistics:t}};E.createRendererForClustering=async function(a){a=await ca(a);const {layer:b,shape:c,defaultSymbolEnabled:d,
legendOptions:g}=a;var {renderer:k}=b,n=(await F.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")).other;a=[];"unique-value"===k?.type&&(a=ea({renderer:k,defaultSymbolEnabled:d,defaultLabelBackup:n}));"class-breaks"===k?.type&&(a=ha({renderer:k,defaultSymbolEnabled:d,defaultLabelBackup:n}));k=[];n=[];for(var p of a){const {field:h,color:v}=p;k.push(h);n.push(new J({color:v,field:h.name,label:h.alias}))}p=new I({attributes:n,legendOptions:g,holePercentage:"donut"===c?.45:0,outline:null,size:18,
othersCategory:null});return{fields:k,renderer:p}};Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});