// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/screenUtils ../../../../../../layers/support/OrderByInfo ./LabelMatcherSchema ./MatcherSchema ./StorageSchema ./VisualVariablesSchema".split(" "),function(l,t,u,h,k,m,n){async function v(a,c){var d=c.renderer;const f=n.createVisualVariableUniforms(d);d=await k.createMatcherSchema(a,d);a=await h.createLabelMatcherSchema(a,c,f);return{symbology:d,labels:a}}function p(a,c){return a.fields.map(d=>({...d.toJSON(),type:w(d,c)}))}function w(a,c){const {onStatisticExpression:d,
onStatisticField:f,statisticType:b}=a;switch(b){case "min":case "max":case "avg":case "avg_angle":case "sum":case "count":return"esriFieldTypeDouble";case "mode":return d?({returnType:a}=d,a?"string"===a?"esriFieldTypeString":"esriFieldTypeDouble":"esriFieldTypeString"):(a=c.find(e=>e.name===f))?a.type:"esriFieldTypeString"}}async function x(a,c,d,f,b){f=p(a,f.fields);var e=a.renderer;const g=await k.createMatcherSchema(c,e),q=m.createStorageSchema(e,[null,null]);e=n.createVisualVariableUniforms(e);
c=await h.createLabelMatcherSchema(c,{geometryType:"polygon",labelingInfo:a.labelingInfo,labelsVisible:a.labelsVisible},e);return{storage:q,mesh:{displayRefreshVersion:b,strategy:{type:"binning",fields:f,fixedBinLevel:a.fixedBinLevel,featureFilter:d.filters[0]},factory:{labels:c,symbology:g},sortKey:null}}}async function y(a,c,d,f,b){const e=p(a,f.fields),g=a.getEffectiveRenderer(),q={type:"cluster",feature:await k.createMatcherSchema(c,g),cluster:await k.createMatcherSchema(c,g)},r=n.createVisualVariableUniforms(g);
c={type:"cluster",feature:await h.createLabelMatcherSchema(c,f,r),cluster:await h.createLabelMatcherSchema(c,{geometryType:"point",labelingInfo:a.labelingInfo,labelsVisible:a.labelsVisible},r)};return{storage:m.createStorageSchema(g,[null,null]),mesh:{displayRefreshVersion:b,strategy:{type:"cluster",fields:e,featureFilter:d.filters[0],clusterRadius:t.pt2px(a.clusterRadius/2)},factory:{labels:c,symbology:q},sortKey:null}}}l.createSimpleProcessorSchema=async function(a,c,d,f){var b=d.featureReduction;
if(b)switch(b.type){case "binning":return x(b,a,c,d,f);case "cluster":return y(b,a,c,d,f)}b=d.orderBy;var e=d.renderer;e=null!=e&&"unique-value"===e.type&&e.orderByClassesEnabled;"default"!==b||e||(b=[new u({field:d.objectIdField,order:"descending"})]);"default"!==b&&b.length?(b=b[0],e="ascending"===b.order?"asc":"desc",b=b.field?{field:b.field,order:e}:b.valueExpression?{expression:b.valueExpression,order:e}:null):b=e?{byRenderer:!0,order:"asc"}:null;c=m.createStorageSchema(d.renderer,c.filters);
a=await v(a,d);return{storage:c,mesh:{displayRefreshVersion:f,strategy:{type:"feature"},factory:a,sortKey:b}}};l.getAggregateFields=p;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});