// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../config","../../core/Error","../../support/apiKeyUtils"],function(a,c,d,e){a.validateSaveAPIKey=function(b){if(c.apiKey&&e.supportsApiKey(b.portal.url))throw new d("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${b.portal.url} when using an api key`);};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});