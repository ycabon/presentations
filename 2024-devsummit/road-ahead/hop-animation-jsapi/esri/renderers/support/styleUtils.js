// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/asyncUtils","../../core/promiseUtils","../../core/Warning"],function(e,f,g,h){e.loadStyleRenderer=async function(c,b,d){var a=c&&c.getAtOrigin&&c.getAtOrigin("renderer",b.origin);a&&"unique-value"===a.type&&a.styleOrigin&&(a=await f.result(a.populateFromStyle()),g.throwIfAborted(d),!1===a.ok&&(d=a.error,b?.messages&&b.messages.push(new h("renderer:style-reference",`Failed to create unique value renderer from style reference: ${d.message}`,{error:d,context:b})),c.clear("renderer",
b?.origin)))};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});