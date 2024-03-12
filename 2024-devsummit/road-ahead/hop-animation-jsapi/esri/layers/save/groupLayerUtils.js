// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./utils","../../portal/support/jsonContext","../../portal/support/portalItemUtils","../../webdoc/support/resourceUtils"],function(f,h,p,c,k){function l(a){return{isValid:"group"===a.type,errorMessage:"Layer.type should be 'group'"}}function q(a){return{isValid:c.hasTypeKeyword(a,g),errorMessage:`Layer.portalItem.typeKeywords should have '${g}'`}}function m(a,b){return{...p.createForItemWrite(a,"web-map",!0),initiator:b}}function n(a){a=a.layerJSON;return Promise.resolve(a&&Object.keys(a).length?
a:null)}async function r(a,b){b.title||(b.title=a.title);c.removeTypeKeyword(b,c.typeKeyword.METADATA);c.addTypeKeyword(b,g)}const g=c.typeKeyword.GROUP_LAYER_MAP;f.save=async function(a,b){return h.save({layer:a,itemType:"Group Layer",validateLayer:l,validateItem:q,createJSONContext:d=>m(d,a),createItemData:n,errorNamePrefix:"group-layer-save",saveResources:async(d,e)=>{a.sourceIsPortalItem||await d.removeAllResources().catch(()=>{});return k.saveResources(a.resourceReferences,e)}},b)};f.saveAs=
async function(a,b,d){return h.saveAs({layer:a,itemType:"Group Layer",validateLayer:l,createJSONContext:e=>m(e,a),createItemData:n,errorNamePrefix:"group-layer-save-as",newItem:b,setItemProperties:r,saveResources:(e,t)=>k.saveResources(a.resourceReferences,t)},d)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});