// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./maybe","./accessorSupport/utils"],function(f,b,d,e){function c(a){return{remove:e.once(a||function(){})}}Object.defineProperty(b,"__esModule",{value:!0});b.handlesGroup=function(a){return c(function(){return a.forEach(function(a){return d.isSome(a)&&a.remove()})})};b.makeHandle=c;b.refHandle=function(a){return c(function(){var b=a();d.isSome(b)&&b.remove()})};b.destroyHandle=function(a){return c(function(){return a.destroy()})};b.timeoutHandle=function(a,b){var c=setTimeout(a,
b);return{remove:function(){return clearTimeout(c)}}}});