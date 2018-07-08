// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["dojo/_base/declare"],function(a){return a(null,{declaredClass:"esri.widgets.SymbolStyler._DelayedUpdate",createUpdateTrigger:function(a,c){var b=-1;return function(){-1<b||(b=setTimeout(function(){b=-1;a.call(c)},0))}}})});