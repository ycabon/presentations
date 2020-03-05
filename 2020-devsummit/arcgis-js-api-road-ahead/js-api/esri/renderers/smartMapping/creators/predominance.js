// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper dojo/i18n!../../nls/smartMapping ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ./size ./type ./support/utils ../heuristics/outline ../statistics/predominantCategories ../statistics/summaryStatistics ../statistics/support/predominanceUtils ../support/utils ../symbology/predominance ../../support/AuthoringInfo ../../support/AuthoringInfoVisualVariable ../../support/numberUtils ../../visualVariables/OpacityVariable".split(" "),
function(da,y,O,m,h,F,l,t,J,P,Q,x,R,S,T,U,z,A,K,V,W,X){function Y(b){return h(this,void 0,void 0,function(){var a,c,e,f,d,g,q,k;return m(this,function(r){switch(r.label){case 0:if(!(b&&b.layer&&b.view&&b.fields&&b.fields.length))throw new l("predominance-renderer:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(2>b.fields.length)throw new l("predominance-renderer:invalid-parameters","Minimum 2 fields are required");if(10<b.fields.length)throw new l("predominance-renderer:invalid-parameters",
"Maximum 10 fields are supported");a=O({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;a.includeOpacityVariable=b.includeOpacityVariable||!1;a.includeSizeVariable=b.includeSizeVariable||!1;a.sortBy=null==a.sortBy?"count":a.sortBy;c=[0,2,1,3];e=z.createLayerAdapter(a.layer,c);a.layer=e;if(!e)throw new l("predominance-renderer:invalid-parameters","'layer' must be one of these types: "+z.getLayerTypeLabels(c).join(", "));f=t.isSome(a.signal)?
{signal:a.signal}:null;return[4,e.load(f)];case 1:r.sent();d=e.geometryType;g=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===d?a.outlineOptimizationEnabled:!1;a.includeSizeVariable||(a.sizeOptimizationEnabled="point"===d||"multipoint"===d||"polyline"===d?a.sizeOptimizationEnabled:!1);if("mesh"===d)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none",a.sizeOptimizationEnabled=!1;else{if(g&&("polyline"===d||"polygon"===d))throw new l("predominance-renderer:not-supported",
"3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new l("predominance-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}q=a.fields.map(function(a){return a.name});if(k=x.verifyBasicFieldValidity(e,q,"predominance-renderer:invalid-parameters"))throw k;return[2,a]}})})}function Z(b){return h(this,void 0,
void 0,function(){var a,c,e,f,d;return m(this,function(g){switch(g.label){case 0:return a=b.predominanceScheme,e=c=null,[4,x.getBasemapInfo(b.basemap,b.view)];case 1:f=g.sent();c=t.isSome(f.basemapId)?f.basemapId:null;e=t.isSome(f.basemapTheme)?f.basemapTheme:null;if(a)return[2,{scheme:A.cloneScheme(a),basemapId:c,basemapTheme:e}];if(d=A.getSchemes({basemap:c,basemapTheme:e,geometryType:b.geometryType,numColors:b.numColors,theme:b.theme,worldScale:b.worldScale,view:b.view}))a=d.primaryScheme,c=d.basemapId,
e=d.basemapTheme;return[2,{scheme:a,basemapId:c,basemapTheme:e}]}})})}function aa(b,a,c,e){return h(this,void 0,void 0,function(){var f,d,g,q,k,r,u,n,p,L,M,v,l,C,G,h,t,D,E,w,B,y,H,I,z,A,N;return m(this,function(m){switch(m.label){case 0:return f=b.layer,d={layer:b.layer,view:b.view,signal:b.signal},[4,J.all([S({layer:f,fields:e,view:b.view,signal:b.signal}),b.outlineOptimizationEnabled?R(d):null])];case 1:return g=m.sent(),q=g[0],k=g[1],(r=q)&&q.predominantCategoryInfos||(r={predominantCategoryInfos:e.map(function(a){return{value:a,
count:0}})}),u=k&&k.opacity,[4,Q.createRenderer({layer:f,basemap:b.basemap,valueExpression:a.valueExpression,valueExpressionTitle:F.predominantCategory,numTypes:-1,defaultSymbolEnabled:b.defaultSymbolEnabled,sortBy:b.sortBy,typeScheme:c,statistics:{uniqueValueInfos:r.predominantCategoryInfos},legendOptions:b.legendOptions,outlineOptimizationEnabled:!1,sizeOptimizationEnabled:b.includeSizeVariable&&b.sizeOptimizationEnabled?!1:b.sizeOptimizationEnabled,symbolType:b.symbolType,colorMixMode:b.colorMixMode,
edgesType:b.edgesType,view:b.view,signal:b.signal})];case 2:n=m.sent();p=n.renderer;L=n.basemapId;M=n.basemapTheme;v=n.uniqueValueInfos;l=n.excludedUniqueValueInfos;C=p.uniqueValueInfos;G={};h=0;for(t=b.fields;h<t.length;h++)D=t[h],E=f.getField(D.name),G[E.name]=D.label||E&&E.alias||D.name;C.forEach(function(a,b){var c=G[a.value];a.label=c;v[b].label=c});b.includeSizeVariable&&(w=f.geometryType,B=null,"polygon"===w?(y=c,H=y.sizeScheme,I=H.background,p.backgroundFillSymbol=x.createSymbol(w,{type:b.symbolType,
color:I.color,outline:x.getSymbolOutlineFromScheme(I,w,u)}),B=H.marker.size,w="point"):"polyline"===w?(z=c,B=z.width):(A=c,B=A.size),N=x.createColors(c.colors,C.length),C.forEach(function(a,d){var e=x.createSymbol(w,{type:b.symbolType,color:N[d],size:B,outline:x.getSymbolOutlineFromScheme(c,w,u),meshInfo:{colorMixMode:b.colorMixMode,edgesType:b.edgesType}});a.symbol=e;v[d].symbol=e.clone()}));k&&k.visualVariables&&k.visualVariables.length&&(p.visualVariables=k.visualVariables.map(function(a){return a.clone()}));
p.authoringInfo=new K({type:"predominance",fields:e.slice()});return[2,{renderer:p,predominantCategoryInfos:v,excludedCategoryInfos:l,predominanceScheme:c,basemapId:L,basemapTheme:M}]}})})}function ba(b,a,c){return P.createVisualVariables({layer:b.layer,basemap:b.basemap,valueExpression:a.valueExpression,sqlExpression:a.statisticsQuery.sqlExpression,sqlWhere:a.statisticsQuery.sqlWhere,sizeScheme:c,sizeOptimizationEnabled:b.sizeOptimizationEnabled,worldScale:-1<b.symbolType.indexOf("3d-volumetric"),
legendOptions:{title:F.sumOfCategories},view:b.view,signal:b.signal})}function ca(b,a){return h(this,void 0,void 0,function(){var c,e,f,d,g,q,k,r;return m(this,function(u){switch(u.label){case 0:return[4,T({layer:b.layer,valueExpression:a.valueExpression,sqlExpression:a.statisticsQuery.sqlExpression,sqlWhere:a.statisticsQuery.sqlWhere,view:b.view,signal:b.signal})];case 1:return c=u.sent(),e=null==c.avg||null==c.stddev,f=1/b.fields.length*100,d=e?100:c.avg+1.285*c.stddev,100<d&&(d=100),g=W.round([f,
d],{strictBounds:!0}),q=new X({valueExpression:a.valueExpression,stops:[{value:g[0],opacity:.15},{value:g[1],opacity:1}],legendOptions:{title:F.strengthOfPredominance}}),k=new V({type:"opacity",minSliderValue:c.min,maxSliderValue:c.max}),r=new K({visualVariables:[k]}),[2,{visualVariable:q,statistics:c,defaultValuesUsed:e,authoringInfo:r}]}})})}Object.defineProperty(y,"__esModule",{value:!0});y.createRenderer=function(b){return h(this,void 0,void 0,function(){var a,c,e,f,d,g,q,k,r,u,n,p,h,l,v,t;return m(this,
function(m){switch(m.label){case 0:return[4,Y(b)];case 1:return a=m.sent(),c=a.layer,[4,Z({basemap:a.basemap,geometryType:c.geometryType,numColors:a.fields.length,predominanceScheme:a.predominanceScheme,worldScale:-1<a.symbolType.indexOf("3d-volumetric"),view:a.view})];case 2:return e=m.sent(),f=e.scheme,d=a.fields.map(function(a){return a.name}),g=U.getPredominanceExpressions(c,d),q=aa(a,g.predominantCategory,f,d),k=a.includeSizeVariable?ba(a,g.size,f.sizeScheme):null,r=a.includeOpacityVariable?
ca(a,g.opacity):null,[4,J.all([q,k,r])];case 3:return u=m.sent(),n=u[0],p=u[1],h=u[2],l=[],v=[],p&&(Array.prototype.push.apply(l,p.visualVariables.map(function(a){return a.clone()})),delete p.sizeScheme,n.size=p,Array.prototype.push.apply(v,p.authoringInfo.visualVariables.map(function(a){return a.clone()}))),h&&(l.push(h.visualVariable.clone()),n.opacity=h,Array.prototype.push.apply(v,h.authoringInfo.visualVariables.map(function(a){return a.clone()}))),l.length&&(t=n.renderer.visualVariables||[],
Array.prototype.push.apply(t,l),n.renderer.visualVariables=t,n.renderer.authoringInfo.visualVariables=v),[2,n]}})})}});