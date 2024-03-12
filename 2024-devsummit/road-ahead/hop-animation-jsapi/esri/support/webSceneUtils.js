// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../core/Error"],function(a,b){a.createCopyError=function(){return new b("webscene:failed-to-copy-embedded-resources","Copying of embedded resources is currently not supported")};a.createSchemaValidationError=function(c){return new b("webscene:schema-validation","Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",{errors:c})};a.schemaValidationErrorName="webscene:schema-validation";Object.defineProperty(a,Symbol.toStringTag,
{value:"Module"})});