// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/maybe"],function(e,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.highlightsSupported=function(a){return a&&"function"===typeof a.highlight};b.occludeesSupported=function(a){return a&&"function"===typeof a.occlude};b.scaleBoundsPredicate=function(a,b,d){return c.isNone(a)||a>d&&(0===b||a<b)};b.extractSafeScaleBounds=function(a){return{minScale:a.minScale||0,maxScale:a.maxScale||0}}});