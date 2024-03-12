// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../LayerList/support/layerListUtils"],function(b,g){const f=a=>d(a)||e(a),d=a=>{if(!("type"in a))return!1;switch(a.type){case "feature":case "geojson":case "csv":case "graphics":case "wfs":case "map-notes":case "oriented-imagery":case "scene":case "building-scene":return!0;default:return!1}},e=a=>{const c=g.getNormalizedChildLayerProperty(a);if(null!=c&&a.hasOwnProperty(c)&&null!=a[c])for(const h of a[c])if(f(h))return!0;return!1};b.isValidSnappingLayer=f;b.isValidSnappingLayerGroup=
e;b.isValidSnappingLayerSource=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});