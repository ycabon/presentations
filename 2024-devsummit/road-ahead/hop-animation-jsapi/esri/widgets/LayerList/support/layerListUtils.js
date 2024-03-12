// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function g(a){if(a)return null!=a.listMode?a.listMode:void 0}function h(a){return null!=a&&"minScale"in a&&null!=a.minScale?a.minScale:void 0}function k(a){return null!=a&&"maxScale"in a&&null!=a.maxScale?a.maxScale:void 0}function l(a){if(a&&!("type"in a&&"wmts"===a.type)&&a.listMode!==m.hideChildren)return"sublayers"in a?"sublayers":"layers"in a?"layers":void 0}function n(a,c){a?.sort((b,e)=>{b="uid"in b?c.indexOf(b.uid):-1;e="uid"in e?c.indexOf(e.uid):-1;return b>
e?-1:b<e?1:0})}function f(a){return null!=a&&"layer"in a&&null!=a.layer}function p(a){return a&&"capabilities"in a&&null!=a.capabilities&&"exportMap"in a.capabilities?a.capabilities.exportMap:void 0}const m={hide:"hide",hideChildren:"hide-children"};d.canDisplayLayer=function(a){return g(a)!==m.hide};d.canSortSublayers=function(a){a=(a?.layer&&f(a.layer)?a.layer.layer:void 0)??a?.layer;if(!a)return!1;a=p(a);return(null!=a&&"supportsDynamicLayers"in a?a.supportsDynamicLayers:void 0)??!0};d.findLayerListMode=
g;d.findLayerMaxScale=k;d.findLayerMinScale=h;d.findLayerVisibilityMode=function(a){if(!a)return"inherited";var c=f(a)?a.layer:a;c=p(c);c=null!=c&&"supportsSublayerVisibility"in c?c.supportsSublayerVisibility:void 0;return null!=c?c?"independent":"inherited":"visibilityMode"in a&&null!=a.visibilityMode?a.visibilityMode:"independent"};d.getItem=function(a){return a?.["data-item"]};d.getItemLayers=function(a){return(a=a?.layer)&&"layers"in a?a.layers:null};d.getLayerType=function(a){return a?.getAttribute("data-layer-type")};
d.getLegendLayerInfo=function(a){var c=f(a)?a:null;const b=a?.parent;return(c=null!=b&&"type"in b&&"map-image"===b.type?c?.source:null)&&b?{layer:b,title:"",sublayerIds:[c.mapLayerId]}:{layer:a,title:""}};d.getNormalizedChildLayerProperty=l;d.getStatusIcon=function({connectionStatus:a,isUpdating:c,publishing:b}){const e=!!a;return e||b||c?e?"connected"===a?"beacon":"offline":b?"stop-square":"bullet-point":"blank"};d.getVisibilityIcon=function({exclusive:a,visible:c,visibilityAppearance:b}){b="checkbox"===
b;return c?a?"circle-f":b?"check-square-f":"view-visible":a?"circle":b?"square":"view-hide"};d.isLayerOutsideScaleRange=function(a,c){if(!a||null==c||isNaN(c))return!1;var b=h(a);a=k(a);b=null!=b&&!isNaN(b)&&0<b&&c>b;c=null!=a&&!isNaN(a)&&0<a&&c<a;return b||c};d.isSublayer=f;d.listItemHasChildren=function({children:a,error:c,incompatible:b}){return!!a?.filter(e=>!e.hidden).length&&!c&&!b};d.sortChildLayersToIds=function(a,c){if(a=a?.layer){var b=l(a);if(b){if("layers"===b&&"layers"in a)var e=a.layers;
else"sublayers"===b&&"sublayers"in a&&(e=a.sublayers);n(e,c)}}};d.sortLayersToIds=n;d.sortableRoot="root";Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});