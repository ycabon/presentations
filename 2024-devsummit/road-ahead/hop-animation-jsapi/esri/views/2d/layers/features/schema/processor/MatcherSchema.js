// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./VisualVariablesSchema","./symbols/SymbolSchema"],function(m,f,d){async function n(b,a){var c=a.getSymbols();c=c.length?c[0]:null;a=f.createVisualVariableUniforms(a);return{type:"simple",meshes:await d.createSymbolMeshSchemas(c,{schemaOptions:b,uniforms:a,path:"renderer.symbol"})}}async function p(b,a){const c=f.createVisualVariableUniforms(a);return{type:"dot-density",meshes:await d.createDotDensityMeshSchemas(a,{schemaOptions:b,uniforms:c,path:"renderer.symbol"})}}async function q(b,
a){const c=f.createVisualVariableUniforms(a);var g=a.backgroundFillSymbol,h=a.normalizationType;h="log"===h?"esriNormalizeByLog":"percent-of-total"===h?"esriNormalizeByPercentOfTotal":"field"===h?"esriNormalizeByField":null;var k=a.classBreakInfos.map(async e=>({meshes:await d.createSymbolMeshSchemas(e.symbol,{path:`renderer-stop-${e.minValue}-${e.maxValue}`,schemaOptions:b,uniforms:c}),min:e.minValue,max:e.maxValue}));k=(await Promise.all(k)).sort((e,r)=>e.min-r.min);g=await d.createSymbolMeshSchemas(g,
{schemaOptions:b,path:"renderer.backgroundFill",uniforms:{...f.noVisualVariables,visualVariableSizeOutlineScaleStops:c.visualVariableSizeOutlineScaleStops}});const l=await d.createSymbolMeshSchemas(a.defaultSymbol,{schemaOptions:b,path:"renderer.defaultSymbol",uniforms:c});return{type:"interval",field:a.field,expression:a.valueExpression,backgroundFill:g,defaultSymbol:l,intervals:k,normalizationField:a.normalizationField,normalizationTotal:a.normalizationTotal,normalizationType:h,isMaxInclusive:a.isMaxInclusive}}
async function t(b,a){const c=[],g=f.createVisualVariableUniforms(a),h=await d.createSymbolMeshSchemas(a.backgroundFillSymbol,{schemaOptions:b,path:"renderer.backgroundFill",uniforms:{...f.noVisualVariables,visualVariableSizeOutlineScaleStops:g.visualVariableSizeOutlineScaleStops}}),k=await d.createSymbolMeshSchemas(a.defaultSymbol,{schemaOptions:b,path:"renderer.defaultSymbol",uniforms:g});for(const l of a.uniqueValueInfos??[]){const e=await d.createSymbolMeshSchemas(l.symbol,{path:`renderer-unique-value-${l.value}`,
schemaOptions:b,uniforms:g});c.push({value:""+l.value,symbol:e})}return{type:"map",field:a.field,expression:a.valueExpression,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,backgroundFill:h,defaultSymbol:k,map:c}}async function u(b,a){return{type:"heatmap",meshes:await d.createHeatmapMeshSchemas(a,b)}}async function v(b,a){return{type:"pie-chart",meshes:d.createPieChartMeshSchemas(a,b)}}m.createMatcherSchema=async function(b,a){if(!a)return{type:"simple",meshes:[]};switch(a.type){case "simple":return n(b,
a);case "dot-density":return p(b,a);case "class-breaks":return q(b,a);case "unique-value":return t(b,a);case "dictionary":b=f.createVisualVariableUniforms(a);const c=a.scaleExpression;return{type:"dictionary",fieldMap:a.fieldMap,scaleExpression:null!=c&&"1"!==c?{valueExpressionInfo:{type:"CIMExpressionInfo",expression:a.scaleExpression,returnType:"Numeric"},defaultValue:1}:void 0,visualVariableUniforms:b};case "heatmap":return u(b,a);case "pie-chart":return v(b,a)}};m.createSimpleMatcherSchemaFromSymbol=
async function(b,a,c){return{type:"simple",meshes:await d.createSymbolMeshSchemas(a,{schemaOptions:b,path:c,uniforms:{visualVariableColor:null,visualVariableOpacity:null,visualVariableRotation:null,visualVariableSizeStops:null,visualVariableSizeScaleStops:null,visualVariableSizeOutlineScaleStops:null,visualVariableSizeUnitValue:null,visualVariableSizeMinMaxValue:null}})}};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});