// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../core/accessorSupport/originUtils ../../portal/Portal ../../portal/PortalItem ../../portal/support/jsonContext ../../portal/support/portalItemUtils ../../webdoc/support/saveAPIKeyUtils ../../webdoc/support/saveUtils".split(" "),function(f,k,t,B,C,D,u,E,F){function v(a,b,c){c=c(a);if(!c.isValid)throw new k(`${b}:invalid-parameters`,c.errorMessage,{layer:a});}async function w(a){const {layer:b,errorNamePrefix:c,validateLayer:d}=a;await b.load();v(b,c,d)}function l(a,
b){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${b}`}function x(a){const {item:b,errorNamePrefix:c,layer:d,validateItem:e}=a;E.validateSaveAPIKey(b);G(a);if(e&&(a=e(b),!a.isValid))throw new k(`${c}:invalid-parameters`,a.errorMessage,{layer:d});}function G(a){const {item:b,itemType:c,additionalItemType:d,errorNamePrefix:e,layer:g}=a;a=[c];d&&a.push(d);if(!a.includes(b.type))throw a=a.map(h=>`'${h}'`).join(", "),new k(`${e}:portal-item-wrong-type`,`Portal item type should be one of: "${a}"`,
{item:b,layer:g});}function y(a){const {layer:b,errorNamePrefix:c}=a,{portalItem:d}=b;if(!d)throw new k(`${c}:portal-item-not-set`,l(b,"requires the portalItem property to be set"));if(!d.loaded)throw new k(`${c}:portal-item-not-loaded`,l(b,"cannot be saved to a portal item that does not exist or is inaccessible"));x({...a,item:d})}function z(a){const {newItem:b,itemType:c}=a;let d=C.from(b);d.id&&(d=d.clone(),d.id=null);let e;(e=d).type??(e.type=c);let g;(g=d).portal??(g.portal=B.getDefault());x({...a,
item:d});return d}function m(a){return D.createForItemWrite(a,"portal-item")}async function n(a,b,c){"beforeSave"in a&&"function"===typeof a.beforeSave&&await a.beforeSave();a=a.write({},b);await Promise.all(b.resources?.pendingOperations??[]);F.evaluateWriteErrors(b,{errorName:"layer-write:unsupported"},c);return a}function p(a){u.addTypeKeyword(a,u.typeKeyword.JSAPI);a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((b,c,d)=>d.indexOf(b)===c))}async function A(a,b,c){const d=a.portal;await d.signIn();
await d.user?.addItem({item:a,data:b,folder:c?.folder})}f.addItem=A;f.createErrorMessage=l;f.createJSONContextForWrite=m;f.ensureItemConfig=y;f.ensureLayerConfig=v;f.getLayerJSON=n;f.getPortalItem=z;f.save=async function(a,b){const {layer:c,createItemData:d,createJSONContext:e,saveResources:g}=a;await w(a);y(a);a=c.portalItem;const h=e?e(a):m(a);b=await n(c,h,b);b=await d({layer:c,layerJSON:b},a);p(a);await a.update({data:b});t.updateOrigins(h);await g?.(a,h);return a};f.saveAs=async function(a,b){const {layer:c,
createItemData:d,createJSONContext:e,setItemProperties:g,saveResources:h}=a;await w(a);a=z(a);const q=e?e(a):m(a);var r=await n(c,q,b);r=await d({layer:c,layerJSON:r},a);await g(c,a);p(a);await A(a,r,b);c.portalItem=a;t.updateOrigins(q);await h?.(a,q);return a};f.setCommonItemProperties=p;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});