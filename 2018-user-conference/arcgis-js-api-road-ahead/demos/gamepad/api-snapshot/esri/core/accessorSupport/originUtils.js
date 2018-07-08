// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../MultiOriginJSONSupport"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.updateOrigins=function(a){a&&a.writtenProperties&&a.writtenProperties.forEach(function(b){var a=b.target;b.newOrigin&&b.oldOrigin!==b.newOrigin&&a.isInstanceOf(d)&&a.updateOrigin(b.propName,b.newOrigin)})}});