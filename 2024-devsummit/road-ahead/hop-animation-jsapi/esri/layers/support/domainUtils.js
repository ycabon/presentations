// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../widgets/support/dateUtils"],function(d,e){function h(a){return null!=a&&("date-only"===a.type||"esriFieldTypeDateOnly"===a.type)}function k(a){return null!=a&&("timestamp-offset"===a.type||"esriFieldTypeTimestampOffset"===a.type)}function l(a){return null!=a&&("time-only"===a.type||"esriFieldTypeTimeOnly"===a.type)}function m(a,c){var b=c??a?.domain;if(b&&"range"===b.type){c="range"in b?b.range[0]:b.minValue;b="range"in b?b.range[1]:b.maxValue;var f=null!=a&&q.has(a.type);
return h(a)||l(a)||k(a)?{...n(a,b,c),isInteger:f}:{min:null!=c&&"number"===typeof c?c:null,max:null!=b&&"number"===typeof b?b:null,rawMin:c,rawMax:b,isInteger:f}}}function n(a,c,b){return h(a)?{min:e.dateOnlyToDateTime(b)?.toMillis(),max:e.dateOnlyToDateTime(c)?.toMillis(),rawMin:b,rawMax:c}:l(a)?{min:e.timeOnlyToDateTime(b)?.toMillis(),max:e.timeOnlyToDateTime(c)?.toMillis(),rawMin:b,rawMax:c}:k(a)?{min:e.timestampOffsetToDateTime(b)?.toMillis(),max:e.timestampOffsetToDateTime(c)?.toMillis(),rawMin:b,
rawMax:c}:{max:null,min:null}}d.DomainValidationError=void 0;(function(a){a.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range";a.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"})(d.DomainValidationError||(d.DomainValidationError={}));const q=new Set("integer small-integer big-integer esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeBigInteger".split(" "));d.dateTimeFieldValuesToNumericRange=n;d.getDomainRange=m;d.validateDomainValue=function(a,c){const b=
a?.domain;if(!b)return null;switch(b.type){case "range":const {min:f,max:p}=m(a);if(null!=f&&+c<f||null!=p&&+c>p)return d.DomainValidationError.VALUE_OUT_OF_RANGE;break;case "coded-value":if(null==b.codedValues||b.codedValues.every(g=>null==g||g.code!==c))return d.DomainValidationError.INVALID_CODED_VALUE;break;case "codedValue":if(null==b.codedValues||b.codedValues.every(g=>null==g||g.code!==c))return d.DomainValidationError.INVALID_CODED_VALUE}return null};Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});