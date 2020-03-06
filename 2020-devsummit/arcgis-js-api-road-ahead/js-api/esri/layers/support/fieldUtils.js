// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper @dojo/framework/shim/array ../../core/Error ../../core/maybe ../../core/object ../../core/promiseUtils ../../core/SetUtils ./domains ../../support/arcadeOnDemand".split(" "),function(O,c,X,k,h,r,P,F,w,G,p,t,Q){function H(a,b,d){if(a)for(var c=0;c<a.length;c++){var e=a[c],f=w.getDeepValue(e,b);(f=f&&"function"!==typeof f&&m(d,f))&&w.setDeepValue(e,f.name,b)}}function q(a,
b){if(!a||!b)return[];x.clear();u(x,a,b);return p.valuesOfSet(x).sort()}function u(a,b,d){if(d)if(b&&b.length)if(r.includes(d,"*"))for(d=0;d<b.length;d++)a.add(b[d].name);else for(var c=0;c<d.length;c++)e=d[c],n(a,b,e);else if(r.includes(d,"*"))a.clear(),a.add("*");else for(b=0;b<d.length;b++){var e=d[b];a.add(e)}}function n(a,b,d){b&&b.length?(b=m(b,d))&&a.add(b.name):"string"===typeof d&&a.add(d)}function m(a,b){if("string"!==typeof b)return null;if(null!=a){b=b.toLowerCase();for(var d=0;d<a.length;d++){var c=
a[d];if(c&&c.name.toLowerCase()===b)return c}}return null}function y(a,b,d){return h(this,void 0,void 0,function(){var c,e,f,l,h;return k(this,function(g){switch(g.label){case 0:return d?[4,Q.loadArcade()]:[2];case 1:c=g.sent().arcadeUtils;e=c.extractFieldNames(d);f=0;for(l=e;f<l.length;f++)h=l[f],n(a,b,h);return[2]}})})}function I(a,b){return h(this,void 0,void 0,function(){var d,c;return k(this,function(g){if(!b)return[2];d=b.fields;return(c=w.getDeepValue("elevationInfo.featureExpressionInfo",
b))?[2,c.collectRequiredFields(a,d)]:[2]})})}function J(a,b){return h(this,void 0,void 0,function(){var d,c;return k(this,function(g){switch(g.label){case 0:return d=b.labelingInfo,c=b.fields,d&&d.length?[4,G.all(d.map(function(b){return R(a,c,b)}))]:[2];case 1:return g.sent(),[2]}})})}function R(a,b,d){return h(this,void 0,void 0,function(){var c,e,f,l,h;return k(this,function(g){switch(g.label){case 0:if(!d)return[2];c=d.getLabelExpression();e=d.where;return"arcade"!==c.type?[3,2]:[4,y(a,b,c.expression)];
case 1:return g.sent(),[3,3];case 2:(f=c.expression.match(/{[^}]*}/g))&&f.forEach(function(d){n(a,b,d.slice(1,-1))}),g.label=3;case 3:return l=/['"]+/g,e&&(h=e.split(" "),3===h.length&&n(a,b,h[0].replace(l,"")),7===h.length&&(n(a,b,h[0].replace(l,"")),n(a,b,h[4].replace(l,"")))),[2]}})})}function z(a){return"number"===typeof a&&!isNaN(a)&&isFinite(a)}function S(a){return null===a||z(a)}function T(a){return null===a||v(a)}function K(a){return null!=a&&"string"===typeof a}function U(a){return null===
a||K(a)}function V(){return!0}function A(a,b){var d;switch(a.type){case "date":case "integer":case "long":case "small-integer":case "esriFieldTypeDate":case "esriFieldTypeInteger":case "esriFieldTypeLong":case "esriFieldTypeSmallInteger":d=a.nullable?T:v;break;case "double":case "single":case "esriFieldTypeSingle":case "esriFieldTypeDouble":d=a.nullable?S:z;break;case "string":case "esriFieldTypeString":d=a.nullable?U:K;break;default:d=V}return 1===arguments.length?d:d(b)}function B(a){return null!=
a&&W.has(a.type)}function L(a,b){return a.nullable&&null===b?null:B(a)&&!M(a.type,Number(b))?C.OUT_OF_RANGE:A(a,b)?a.domain?t.validateDomainValue(a.domain,b):null:D.INVALID_TYPE}function M(a,b){return(a="string"===typeof a?E(a):a)?a.isInteger?v(b)&&b>=a.min&&b<=a.max:b>=a.min&&b<=a.max:!1}function E(a){switch(a){case "esriFieldTypeSmallInteger":case "small-integer":return c.smallIntegerRange;case "esriFieldTypeInteger":case "integer":return c.integerRange;case "esriFieldTypeSingle":case "single":return c.singleRange;
case "esriFieldTypeDouble":case "double":return c.doubleRange}}function N(a,b,d){if(!b||!b.attributes||!a){if(F.isSome(d))for(var c=0;c<a.length;c++)b=a[c],d.add(b);return!0}for(var c=b.attributes,e=!1,f=0;f<a.length;f++)if(b=a[f],!(b in c))if(e=!0,F.isSome(d))d.add(b);else break;return e}Object.defineProperty(c,"__esModule",{value:!0});c.rendererFields="field field2 field3 normalizationField rotationInfo.field proportionalSymbolInfo.field proportionalSymbolInfo.normalizationField colorInfo.field colorInfo.normalizationField".split(" ");
c.visualVariableFields=["field","normalizationField"];c.fixRendererFields=function(a,b){if(null!=a&&null!=b){var d=0;for(a=Array.isArray(a)?a:[a];d<a.length;d++){var g=a[d];H(c.rendererFields,g,b);if("visualVariables"in g&&g.visualVariables)for(var e=0,g=g.visualVariables;e<g.length;e++)H(c.visualVariableFields,g[e],b)}}};c.fixTimeInfoFields=function(a,b){if(null!=a&&null!=b)if("startField"in a){var d=m(b,a.startField);b=m(b,a.endField);a.startField=d&&d.name||null;a.endField=b&&b.name||null}else d=
m(b,a.startTimeField),b=m(b,a.endTimeField),a.startTimeField=d&&d.name||null,a.endTimeField=b&&b.name||null};var x=new Set;c.fixFields=q;c.collectFields=u;c.collectField=n;c.unpackFieldNames=function(a,b){return b&&a?r.includes(b,"*")?a.map(function(a){return a.name}):b:[]};c.packFields=function(a,b,d){void 0===d&&(d=1);if(!b||!a)return[];if(r.includes(b,"*"))return["*"];b=q(a,b);return b.length/a.length>=d?["*"]:b};c.getField=m;c.hasField=function(a,b){if(!a||!b||"string"!==typeof b)return!1;b=b.toLowerCase();
for(var d=0;d<a.length;d++){var c=a[d];if(c&&c.name.toLowerCase()===b)return!0}return!1};c.collectArcadeFieldNames=y;c.getElevationFields=function(a){return h(this,void 0,void 0,function(){var b;return k(this,function(c){switch(c.label){case 0:if(!a)return[2,[]];b=new Set;return[4,I(b,a)];case 1:return c.sent(),[2,p.valuesOfSet(b).sort()]}})})};c.collectElevationFields=I;c.collectFilterFields=function(a,b,c){return h(this,void 0,void 0,function(){var d,e;return k(this,function(f){switch(f.label){case 0:if(!b||
!c||!(c.where&&"1\x3d1"!==c.where||c.timeExtent))return[2];b.timeInfo&&c.timeExtent&&u(a,b.fields,[b.timeInfo.startField,b.timeInfo.endField]);return c.where?[4,G.create(function(a){O(["../../core/sql/WhereClause"],a)})]:[3,2];case 1:d=f.sent();e=d.WhereClause.create(c.where,b.fieldsIndex);if(!e.isStandardized)throw new P("fieldUtils:collectFilterFields","Where clause is not standardized");u(a,b.fields,e.fieldNames);f.label=2;case 2:return[2]}})})};c.getTimeFields=function(a){return h(this,void 0,
void 0,function(){var b;return k(this,function(c){return a?(b="timeInfo"in a&&a.timeInfo)?[2,q(a.fields,[a.trackIdField,b.startField,b.endField])]:[2,[]]:[2,[]]})})};c.getFeatureEditFields=function(a){if(!a)return[];var b="editFieldsInfo"in a&&a.editFieldsInfo;return b?q(a.fields,[b&&b.creatorField,b&&b.creationDateField,b&&b.editorField,b&&b.editDateField]):[]};c.getFeatureGeometryFields=function(a){if(!a)return[];var b="geometryProperties"in a&&a.geometryProperties;return b?q(a.fields,[b&&b.shapeAreaFieldName,
b&&b.shapeLengthFieldName]):[]};c.getLabelingFields=function(a){return h(this,void 0,void 0,function(){var b;return k(this,function(c){switch(c.label){case 0:if(!a)return[2,[]];b=new Set;return[4,J(b,a)];case 1:return c.sent(),[2,p.valuesOfSet(b).sort()]}})})};c.collectLabelingFields=J;c.getFieldDefaultValue=function(a){var b=a.defaultValue;if(void 0!==b&&A(a,b))return b;if(a.nullable)return null};var v=function(){return"isInteger"in Number?Number.isInteger:function(a){return"number"===typeof a&&
isFinite(a)&&Math.floor(a)===a}}();c.isValueMatchingFieldType=A;c.numericTypes=["integer","small-integer","single","double"];var W=p.createSetFromValues(c.numericTypes.concat(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]));c.isNumericField=B;c.isStringField=function(a){return null!=a&&("string"===a.type||"esriFieldTypeString"===a.type)};c.isDateField=function(a){return null!=a&&("date"===a.type||"esriFieldTypeDate"===a.type)};c.isValidFieldValue=
function(a,b){return null===L(a,b)};var C;(C=c.NumericRangeValidationError||(c.NumericRangeValidationError={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range";var D;(D=c.TypeValidationError||(c.TypeValidationError={})).INVALID_TYPE="type-validation-error::invalid-type";c.sanitizeNullFieldValue=function(a){return null==a||"number"===typeof a&&isNaN(a)?null:a};c.validateFieldValue=L;c.isNumberInRange=M;c.getFieldRange=function(a){var b=t.getDomainRange(a.domain);if(b)return b;if(B(a))return E(a.type)};
c.getNumericTypeForValue=function(a){if(!z(a))return null;if(v(a)){if(a>=c.smallIntegerRange.min&&a<=c.smallIntegerRange.max)return"esriFieldTypeSmallInteger";if(a>=c.integerRange.min&&a<=c.integerRange.max)return"esriFieldTypeInteger"}return a>=c.singleRange.min&&a<=c.singleRange.max?"esriFieldTypeSingle":"esriFieldTypeDouble"};c.smallIntegerRange={min:-32768,max:32767,isInteger:!0};c.integerRange={min:-2147483648,max:2147483647,isInteger:!0};c.singleRange={min:-3.4E38,max:1.2E38,isInteger:!1};c.doubleRange=
{min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};c.validationErrorToString=function(a,b,c){switch(a){case t.DomainValidationError.INVALID_CODED_VALUE:return"Value "+c+" is not in the coded domain - field: "+b.name+", domain: "+JSON.stringify(b.domain);case t.DomainValidationError.VALUE_OUT_OF_RANGE:return"Value "+c+" is out of the range of valid values - field: "+b.name+", domain: "+JSON.stringify(b.domain);case D.INVALID_TYPE:return"Value "+c+" is not a valid value for the field type - field: "+
b.name+", type: "+b.type+", nullable: "+b.nullable;case C.OUT_OF_RANGE:return a=E(b.type),"Value "+c+" is out of range for the number type - field: "+b.name+", type: "+b.type+", value range is "+a.min+" to "+a.max}};c.featureHasFields=function(a,b){return!N(a,b,null)};c.populateMissingFields=N;c.getExpressionFields=function(a,b){return h(this,void 0,void 0,function(){var c,g,e,f;return k(this,function(d){switch(d.label){case 0:c=new Set,g=0,e=b,d.label=1;case 1:if(!(g<e.length))return[3,4];f=e[g];
return[4,y(c,a.fields,f)];case 2:d.sent(),d.label=3;case 3:return g++,[3,1];case 4:return[2,p.valuesOfSet(c).sort()]}})})}});