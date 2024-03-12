// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../../config","../../core/Logger"],function(e,d,f,g){d.fromPortalItem=async function(a){a="portalItem"in a?a:{portalItem:a};var {fromItem:b}=await new Promise((c,h)=>e(["../../portal/support/portalLayers"],c,h));try{return await b(a)}catch(c){throw b=a&&a.portalItem,a=b?.id||"unset",b=b&&b.portal&&b.portal.url||f.portalUrl,g.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+b+"', id: '"+a+"')",
c),c;}};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});