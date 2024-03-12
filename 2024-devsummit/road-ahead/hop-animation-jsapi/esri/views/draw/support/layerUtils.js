// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.addUniqueLayer=function(b,c,d){if(c&&b?.map){({map:b}=b);var a=b.layers.find(f=>f===c);a||b.add(c,d);a&&null!=d&&b.layers.reorder(a,d)}};e.findLayerView=function(b,c){const d="subtype-sublayer"===c?.type?c.parent:c;return b.allLayerViews.find(a=>{a=a.layer;return a===d||"sublayers"in a&&null!=a.sublayers&&a.sublayers.includes(d)})};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});