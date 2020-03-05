// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper dojo/i18n!../../nls/smartMapping ../.. ../../../pointCloudRenderers ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../intl/substitute ./support/utils ../heuristics/ageUnit ../heuristics/outline ../heuristics/sizeRange ../statistics/support/ageUtils ../support/utils ../symbology/color ../../support/AuthoringInfo ../../support/AuthoringInfoVisualVariable ../../support/numberUtils ../../support/utils ../../visualVariables/ColorVariable".split(" "),
function(ha,z,t,r,p,I,C,D,m,v,u,R,h,S,M,N,H,q,x,E,T,U,F,V){function W(b){return p(this,void 0,void 0,function(){var a,c,d,f,e,g,k;return r(this,function(l){switch(l.label){case 0:if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))throw new m("color-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(b.valueExpression&&!b.sqlExpression&&!b.view)throw new m("color-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");
a=t({},b);c=[0,2,1,3];d=q.createLayerAdapter(a.layer,c);a.layer=d;if(!d)throw new m("color-visual-variable:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));f=v.isSome(a.signal)?{signal:a.signal}:null;return[4,d.load(f)];case 1:return l.sent(),e=d.geometryType,"mesh"===e||!a.worldScale||a.view&&"3d"===a.view.type?[4,q.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression})]:[2,u.reject(h.createError("color-visual-variable:invalid-parameters",
"'view' parameter should be an instance of SceneView when 'worldScale' parameter is true"))];case 2:g=l.sent();if(k=h.verifyBasicFieldValidity(d,g,"color-visual-variable:invalid-parameters"))throw k;return[2,a]}})})}function X(b){return p(this,void 0,void 0,function(){var a,c,d,f,e,g,k;return r(this,function(l){switch(l.label){case 0:if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))throw new m("color-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");
if(b.valueExpression&&!b.sqlExpression&&!b.view)throw new m("color-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");a=t({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;c=[0,2,1,3];d=q.createLayerAdapter(a.layer,c);a.layer=d;if(!d)throw new m("color-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));f=v.isSome(a.signal)?{signal:a.signal}:
null;return[4,d.load(f)];case 1:l.sent();e=d.geometryType;a.outlineOptimizationEnabled="polygon"===e?a.outlineOptimizationEnabled:!1;a.sizeOptimizationEnabled="point"===e||"multipoint"===e||"polyline"===e?a.sizeOptimizationEnabled:!1;if("mesh"===e)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else{if("3d-volumetric-uniform"===a.symbolType&&"point"!==e)throw new m("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");
if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new m("color-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}return[4,q.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression})];case 2:g=l.sent();if(k=h.verifyBasicFieldValidity(d,g,"color-continuous-renderer:invalid-parameters"))throw k;return[2,a]}})})}
function Y(b){return p(this,void 0,void 0,function(){var a,c,d,f,e,g,k,l;return r(this,function(n){switch(n.label){case 0:if(!b||!b.layer||!b.field&&!b.valueExpression)throw new m("color-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(b.valueExpression&&!b.view)throw new m("color-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");a=t({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=
null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;a.classificationMethod=a.classificationMethod||"equal-interval";a.normalizationType=q.getNormalizationType(a);c=[0,2,1,3];d=q.createLayerAdapter(a.layer,c);a.layer=d;if(!d)throw new m("color-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));f=null!=a.minValue&&null!=a.maxValue;if(!f&&(null!=a.minValue||null!=a.maxValue))throw new m("color-class-breaks-renderer:missing-parameters",
"Both 'minValue' and 'maxValue' are required when specifying custom data range");e=v.isSome(a.signal)?{signal:a.signal}:null;return[4,d.load(e)];case 1:n.sent();g=d.geometryType;a.outlineOptimizationEnabled="polygon"===g?a.outlineOptimizationEnabled:!1;if("mesh"===g)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else{if("3d-volumetric-uniform"===a.symbolType&&"point"!==g)throw new m("color-continuous-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");
if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new m("color-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}return[4,q.getFieldsList({field:a.field,normalizationField:a.normalizationField})];case 2:k=n.sent();if(l=h.verifyBasicFieldValidity(d,k,"color-class-breaks-renderer:invalid-parameters"))throw l;return[2,a]}})})}function Z(b){b=t({},b);
delete b.basemap;delete b.colorScheme;delete b.legendOptions;delete b.symbolType;delete b.defaultSymbolEnabled;delete b.colorMixMode;delete b.edgesType;b.analyzeData=!(null!=b.minValue&&null!=b.maxValue);return b}function aa(b){if(!b||!b.layer)return u.reject(h.createError("color-point-cloud-true-color-renderer:missing-parameters","'layer' parameter is required"));var a=t({},b),c=[4];b=q.createLayerAdapter(a.layer,c);a.layer=b;a.density=a.density||25;a.size=a.size||"100%";if(!h.isValidPointSize(a.size))return u.reject(h.createError("color-point-cloud-true-color-renderer:invalid-parameters",
"Invalid 'size' parameter. It should be a string of the form '100%'"));if(!b)return u.reject(h.createError("color-point-cloud-true-color-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", ")));c=v.isSome(a.signal)?{signal:a.signal}:null;return b.load(c).then(function(){return a})}function ba(b){if(!(b&&b.layer&&b.field))return u.reject(h.createError("color-point-cloud-continuous-renderer:missing-parameters","'layer' and 'field' parameters are required"));
var a=b.field.toLowerCase();if("intensity"!==a&&"elevation"!==a)return u.reject(h.createError("color-point-cloud-continuous-renderer:invalid-parameters","'field' should be either 'intensity' or 'elevation'"));var c=t({},b),a=[4];b=q.createLayerAdapter(c.layer,a);c.layer=b;c.density=c.density||25;c.size=c.size||"100%";if(!h.isValidPointSize(c.size))return u.reject(h.createError("color-point-cloud-continuous-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'"));
if(!b)return u.reject(h.createError("color-point-cloud-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(a).join(", ")));a=v.isSome(c.signal)?{signal:c.signal}:null;return b.load(a).then(function(){return c})}function O(b){b=t({},b);var a=-1<b.symbolType.indexOf("3d-volumetric");delete b.symbolType;delete b.defaultSymbolEnabled;delete b.colorMixMode;delete b.edgesType;b.worldScale=a;return b}function ca(b){return p(this,void 0,void 0,function(){var a,
c,d,f,e,g;return r(this,function(h){switch(h.label){case 0:if(!(b&&b.layer&&b.view&&b.startTime&&b.endTime))throw new m("color-age-renderer:missing-parameters","'layer', 'view', startTime', 'endTime' parameters are required");a=t({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;c=[0,2,1,3];d=q.createLayerAdapter(a.layer,c);a.layer=d;if(!d)throw new m("color-age-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(c).join(", "));
f=v.isSome(a.signal)?{signal:a.signal}:null;return[4,d.load(f)];case 1:h.sent();e=d.geometryType;a.outlineOptimizationEnabled="polygon"===e?a.outlineOptimizationEnabled:!1;a.sizeOptimizationEnabled="point"===e||"multipoint"===e||"polyline"===e?a.sizeOptimizationEnabled:!1;if("mesh"===e)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else if("3d-volumetric-uniform"===a.symbolType&&"point"!==e)throw new m("color-continuous-renderer:not-supported",
"3d-volumetric-uniform symbols are supported for point layers only");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new m("color-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");if(g=H.verifyDates(d,a.startTime,a.endTime,"color-age-renderer:invalid-parameters"))throw g;if(a.unit&&-1===H.supportedAgeUnits.indexOf(a.unit))throw new m("color-age-renderer:invalid-unit",
"Supported units are: "+H.supportedAgeUnits.join(", "));return[2,a]}})})}function B(b,a){return p(this,void 0,void 0,function(){var c,d,f,e,g,k,l;return r(this,function(n){switch(n.label){case 0:return c=b.colorScheme,f=d=null,[4,h.getBasemapInfo(b.basemap,b.view)];case 1:e=n.sent();d=v.isSome(e.basemapId)?e.basemapId:null;f=v.isSome(e.basemapTheme)?e.basemapTheme:null;if(c)return[2,{scheme:x.cloneScheme(c),basemapId:d,basemapTheme:f}];g=a||b.theme||"high-to-low";if(k=x.getSchemes({theme:g,basemap:d,
basemapTheme:f,geometryType:b.geometryType,worldScale:b.worldScale,view:b.view}))d=k.basemapId,f=k.basemapTheme,b.schemeId?(l=g+"/"+d+"/"+b.schemeId,c=x.getSchemeById({id:l,geometryType:b.geometryType})):c=k.primaryScheme;return[2,{scheme:c,basemapId:d,basemapTheme:f}]}})})}function G(b,a,c){for(var d=(a-b)/(c-1),f=[b],e=1;e<=c-2;e++)f.push(b+e*d);f.push(a);return U.round(f,{strictBounds:!0})}function da(b,a){return p(this,void 0,void 0,function(){var c,d,f,e,g,k,l;return r(this,function(n){switch(n.label){case 0:return c=
a.layer,[4,B({basemap:a.basemap,colorScheme:a.colorScheme,geometryType:c.geometryType,schemeId:"elevation"===a.field.toLowerCase()?"point-cloud-elevation-scheme":"point-cloud-intensity-scheme"})];case 1:d=n.sent();f=d.scheme;if(!f)throw h.createError("color-point-cloud-continuous-renderer:insufficient-info","Unable to find color scheme");e=h.createColors(f.colors,5);if(5>e.length)throw h.createError("color-point-cloud-continuous-renderer:insufficient-info","Color scheme does not have enough colors");
k=(g=h.getDefaultDataRange(b,!1,!0))?G(g[0],g[1],5):h.createStopValues(b);l=F.createColorStops({values:k,isDate:!1,dateFormatOptions:null,colors:e,labelIndexes:[0,2,4]});return[2,{stops:l,basemapId:d.basemapId,basemapTheme:d.basemapTheme,statistics:b,defaultValuesUsed:!!g,colorScheme:x.cloneScheme(f)}]}})})}function ea(b,a,c){return p(this,void 0,void 0,function(){var d,f,e,g,k,l,n,m,w,A,q,p,u,t,y;return r(this,function(r){switch(r.label){case 0:return d=c.layer,f=c.field,e="function"===typeof f,
k=(g=f&&!e?d.getField(f):null)&&"date"===g.type,[4,B({basemap:c.basemap,theme:c.theme,geometryType:d.geometryType,colorScheme:c.colorScheme,worldScale:c.worldScale,view:c.view})];case 1:l=r.sent();n=l.scheme;if(!n)throw h.createError("color-visual-variable:insufficient-info","Unable to find color scheme");m=h.createColors(n.colors,5);if(5>m.length)throw h.createError("color-visual-variable:insufficient-info","Color scheme does not have enough colors");w=h.getDefaultDataRange(b,k,!0);A=-1<n.id.indexOf("seq-");
q=w?G(w[0],w[1],5):h.createStopValues(b,A);p=h.createColors(m,5);u=new V({field:f,valueExpression:c.valueExpression,valueExpressionTitle:c.valueExpressionTitle,normalizationField:a,stops:q.map(function(a,b){return{value:a,color:p[b]}}),legendOptions:c.legendOptions});t=new T({type:"color",minSliderValue:null!=c.minValue?c.minValue:b.min,maxSliderValue:null!=c.maxValue?c.maxValue:b.max,theme:n.theme});y=new E({visualVariables:[t]});return[2,{basemapId:l.basemapId,basemapTheme:l.basemapTheme,visualVariable:u,
statistics:b,defaultValuesUsed:!!w,colorScheme:x.cloneScheme(n),authoringInfo:y}]}})})}function P(b,a,c,d,f,e){var g=e.field,k=e.layer.geometryType,l=e.defaultSymbolEnabled,n=x.cloneScheme(b.colorScheme),m=a&&a.opacity,w=[b.visualVariable.clone()];a&&a.visualVariables&&a.visualVariables.length&&w.push.apply(w,a.visualVariables.map(function(a){return a.clone()}));c&&c.minSize&&w.push(c.minSize);return{renderer:new C.ClassBreaksRenderer({classBreakInfos:[{minValue:-Q,maxValue:Q,symbol:h.createSymbol(k,
{type:e.symbolType,color:n.noDataColor,size:h.getSymbolSizeFromScheme(n,k),outline:h.getSymbolOutlineFromScheme(n,k,m),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}})}],defaultLabel:l?I.other:null,defaultSymbol:l?h.createSymbol(k,{type:e.symbolType,color:n.noDataColor,size:h.getSymbolSizeFromScheme(n,k),outline:h.getSymbolOutlineFromScheme(n,k,m),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}}):null,field:g,normalizationType:d,normalizationField:f,valueExpression:e.valueExpression,
valueExpressionTitle:e.valueExpressionTitle,visualVariables:w,authoringInfo:b.authoringInfo&&b.authoringInfo.clone()}),visualVariable:b.visualVariable.clone(),statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,colorScheme:x.cloneScheme(b.colorScheme),basemapId:b.basemapId,basemapTheme:b.basemapTheme}}function K(b){return p(this,void 0,void 0,function(){var a,c,d,f,e;return r(this,function(g){switch(g.label){case 0:return[4,W(b)];case 1:a=g.sent();d=(c=a.normalizationField)?"field":void 0;
if(!a.statistics)return[3,2];e=a.statistics;return[3,4];case 2:return[4,h.getSummaryStatistics({layer:a.layer,field:a.field,valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:d,normalizationField:c,minValue:a.minValue,maxValue:a.maxValue,view:a.view,signal:a.signal})];case 3:e=g.sent(),g.label=4;case 4:return f=e,[2,ea(f,c,a)]}})})}function fa(b,a){b=b.colorsForClassBreaks;var c;if(b&&0<b.length&&(b.some(function(b){b.numClasses===a&&(c=b.colors);
return!!c}),!c)){var d=b[b.length-1];b=a-d.numClasses;if(0<b){var f=d.colors[d.numClasses-1];c=d.colors.splice(0);for(d=1;d<=b;d++)c.push(f)}}c&&(c=h.createColors(c,c.length));return c}function ga(b,a){return p(this,void 0,void 0,function(){var c,d,f,e,g,k,l,n,q,w,A,p,u,t;return r(this,function(r){switch(r.label){case 0:return c=b.layer,d=b.defaultSymbolEnabled,f=c.geometryType,[4,B({basemap:b.basemap,geometryType:f,colorScheme:b.colorScheme,worldScale:-1<b.symbolType.indexOf("3d-volumetric"),view:b.view})];
case 1:e=r.sent();g=e.scheme;k=a.result;l=a.outlineResult;n=k.classBreakInfos;q=b.classificationMethod;w="standard-deviation"===q;A=b.normalizationType;if(!g)throw new m("color-class-breaks-renderer:insufficient-info","Unable to find color scheme");p=fa(g,n.length);if(!p||p.length!==n.length)throw new m("color-class-breaks-renderer:insufficient-info","Color scheme does not have enough colors");u=l&&l.opacity;t=new C.ClassBreaksRenderer({classBreakInfos:n.map(function(a,c){return{minValue:a.minValue,
maxValue:a.maxValue,symbol:h.createSymbol(f,{type:b.symbolType,color:p[c],size:h.getSymbolSizeFromScheme(g,f),outline:h.getSymbolOutlineFromScheme(g,f,u),meshInfo:{colorMixMode:b.colorMixMode,edgesType:b.edgesType}}),label:a.label}}),defaultLabel:d?I.other:null,defaultSymbol:d?h.createSymbol(f,{type:b.symbolType,color:g.noDataColor,size:h.getSymbolSizeFromScheme(g,f),outline:h.getSymbolOutlineFromScheme(g,f,u),meshInfo:{colorMixMode:b.colorMixMode,edgesType:b.edgesType}}):null,field:b.field,valueExpression:b.valueExpression,
valueExpressionTitle:b.valueExpressionTitle,normalizationType:A,normalizationField:b.normalizationField,normalizationTotal:"percent-of-total"===A?k.normalizationTotal:void 0,legendOptions:b.legendOptions,authoringInfo:new E({type:"class-breaks-color",classificationMethod:q,standardDeviationInterval:b.standardDeviationInterval})});w||F.setLabelsForClassBreaks({classBreakInfos:t.classBreakInfos,classificationMethod:q,normalizationType:A,round:!0});l&&l.visualVariables&&l.visualVariables.length&&(t.visualVariables=
l.visualVariables.map(function(a){return a.clone()}));return[2,{renderer:t,colorScheme:x.cloneScheme(g),classBreaksResult:k,defaultValuesUsed:a.defaultValuesUsed,basemapId:e.basemapId,basemapTheme:e.basemapTheme}]}})})}Object.defineProperty(z,"__esModule",{value:!0});var Q=Math.pow(2,53)-1;z.createVisualVariable=K;z.createContinuousRenderer=function(b){return p(this,void 0,void 0,function(){var a,c,d,f,e,g,h,l,n,m;return r(this,function(k){switch(k.label){case 0:return[4,X(b)];case 1:return a=k.sent(),
c=a.layer,d=a.view,f=a.signal,[4,u.all([K(O(a)),a.outlineOptimizationEnabled?M({layer:c,view:d,signal:f}):null,a.sizeOptimizationEnabled?N({layer:c,view:d,signal:f}):null])];case 2:return e=k.sent(),g=e[0],h=e[1],l=e[2],m=(n=a.normalizationField)?"field":void 0,[2,P(g,h,l,m,n,a)]}})})};z.createClassBreaksRenderer=function(b){return p(this,void 0,void 0,function(){var a,c;return r(this,function(d){switch(d.label){case 0:return[4,Y(b)];case 1:return a=d.sent(),[4,h.getClassBreaks(Z(a),a.outlineOptimizationEnabled)];
case 2:return c=d.sent(),[2,ga(a,c)]}})})};z.createPCTrueColorRenderer=function(b){return aa(b).then(function(a){return{renderer:new D.PointCloudRGBRenderer({field:"RGB",pointsPerInch:a.density,pointSizeAlgorithm:h.getPointSizeAlgorithm(a.size)})}})};z.createPCContinuousRenderer=function(b){return p(this,void 0,void 0,function(){var a,c,d,f,e;return r(this,function(g){switch(g.label){case 0:return[4,ba(b)];case 1:a=g.sent();if(!a.statistics)return[3,2];d=a.statistics;return[3,4];case 2:return[4,h.getSummaryStatistics({layer:a.layer,
field:a.field,signal:a.signal})];case 3:d=g.sent(),g.label=4;case 4:return c=d,[4,da(c,a)];case 5:return f=g.sent(),e=new D.PointCloudStretchRenderer({field:a.field,pointsPerInch:a.density,pointSizeAlgorithm:h.getPointSizeAlgorithm(a.size),stops:f.stops}),[2,{renderer:e,basemapId:f.basemapId,basemapTheme:f.basemapTheme,statistics:f.statistics,defaultValuesUsed:f.defaultValuesUsed,colorScheme:f.colorScheme}]}})})};z.createAgeRenderer=function(b){return p(this,void 0,void 0,function(){var a,c,d,f,e,
g,k,l,n,m,q,p,v,x,z,B,y,C,J,D,E,F,L,G;return r(this,function(r){switch(r.label){case 0:return[4,ca(b)];case 1:return a=r.sent(),c=a.defaultSymbolEnabled,d=a.view,f=a.startTime,e=a.endTime,g=a.symbolType,k=a.colorMixMode,l=a.edgesType,n=a.minValue,m=a.maxValue,q=a.signal,p=a.layer,[4,u.all([a.unit?{unit:a.unit,statistics:null}:S({view:d,layer:p,startTime:f,endTime:e,minValue:n,maxValue:m,signal:q}),a.outlineOptimizationEnabled?M({layer:p,view:d,signal:q}):null,a.sizeOptimizationEnabled?N({layer:p,
view:d,signal:q}):null])];case 2:return v=r.sent(),x=v[0],z=v[1],B=v[2],y=x.unit,C=x.statistics,J=H.getAgeExpressions({layer:p,startTime:f,endTime:e,unit:y}).valueExpression,D=R.substitute(I["ageInfo_"+y],{unit:y,startTime:h.formatDate(f,y,p),endTime:h.formatDate(e,y,p)}),[4,K(O({layer:p,basemap:a.basemap,valueExpression:J,symbolType:g,statistics:C,legendOptions:{title:D},colorScheme:a.colorScheme,theme:a.theme,view:d,minValue:a.minValue,maxValue:a.maxValue,signal:q}))];case 3:return E=r.sent(),F=
{layer:p,valueExpression:J,defaultSymbolEnabled:c,symbolType:g,colorMixMode:k,edgesType:l},L=P(E,z,B,null,null,F),G=L.renderer.authoringInfo.visualVariables,G.forEach(function(a){return h.updateAgeRendererAuthoringInfoVV(a,f,e,y)}),[2,t({},L,{unit:y})]}})})}});