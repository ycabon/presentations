// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error"],function(g,h){const m=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);g.beforeSave=async function(b){const e=[];for(const d of b.allLayers)"beforeSave"in d&&"function"===typeof d.beforeSave&&(b=d.beforeSave())&&e.push(b);await Promise.allSettled(e)};g.evaluateWriteErrors=function(b,e,d){let a=(b.messages??[]).filter(({type:c})=>"error"===c).map(({name:c,message:k,details:l})=>new h(c,k,l));
b.blockedRelativeUrls&&(a=a.concat(b.blockedRelativeUrls.map(c=>new h("url:unsupported",`Relative url '${c}' is not supported`))));if(d){const {ignoreUnsupported:c,supplementalUnsupportedErrors:k=[],requiredPropertyChecksDisabled:l}=d;c&&(a=a.filter(({name:f})=>!(m.has(f)||k.includes(f))));l&&(a=a.filter(f=>"web-document-write:property-required"!==f.name))}if(0<a.length)throw new h(e.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",
{errors:a});};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});