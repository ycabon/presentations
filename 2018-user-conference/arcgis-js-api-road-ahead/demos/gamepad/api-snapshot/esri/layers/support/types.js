// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,c){Object.defineProperty(c,"__esModule",{value:!0});c.isOfType=function(b,d){b=b.constructor._meta;if(!b||!b.bases)return!1;b=b.bases;var c=Array.isArray(d);return b.some(function(a){a=a.__accessorMetadata__;if(!a)return!1;a=a.properties;if(!a||!a.type||!a.type.value)return!1;a=a.type.value;return c?-1!==d.indexOf(a):a===d})}});