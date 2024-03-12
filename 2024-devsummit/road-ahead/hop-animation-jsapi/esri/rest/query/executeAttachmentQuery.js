// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/queryAttachments","../support/AttachmentQuery"],function(a,d,b,e){a.executeAttachmentQuery=async function(f,g,h){const c=d.parseUrl(f);return b.executeAttachmentQuery(c,e.from(g),{...h}).then(k=>b.processAttachmentQueryResult(c,k))};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});