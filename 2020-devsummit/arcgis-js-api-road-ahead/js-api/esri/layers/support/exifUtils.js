// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/arrayUtils"],function(f,c,d){function e(a){var b=a.tagName;a=a.tags;return a&&b?(a=d.find(a,function(a){return a.name===b}))&&a.value||null:null}Object.defineProperty(c,"__esModule",{value:!0});c.getExifValue=function(a){var b=a.exifInfo,c=a.exifName;a=a.tagName;return b&&c&&a?(b=d.find(b,function(a){return a.name===c}))?e({tagName:a,tags:b.tags}):null:null}});