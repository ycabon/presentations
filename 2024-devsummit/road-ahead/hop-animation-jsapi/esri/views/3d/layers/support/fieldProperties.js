// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../layers/support/fieldUtils"],function(c,a){c.defineFieldProperties=function(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const {layer:d,layer:{fieldsIndex:b},requiredFields:e}=this;return d.outFields?a.fixFields(b,[...a.unpackFieldNames(b,d.outFields),...e]):a.fixFields(b,e)}}}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});