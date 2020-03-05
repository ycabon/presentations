// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/kernel"],function(f,a,e){Object.defineProperty(a,"__esModule",{value:!0});var c=e.locale;a.getLocale=function(){return c};a.setLocale=function(d){c=d;b.slice().forEach(function(a){a.call(null,d)})};var b=[];a.onLocaleChange=function(a){b.push(a);return{remove:function(){b.splice(b.indexOf(a),1)}}}});