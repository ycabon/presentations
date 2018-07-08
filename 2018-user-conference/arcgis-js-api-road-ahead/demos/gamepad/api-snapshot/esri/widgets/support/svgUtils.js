// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/has","../../core/lang","../../core/promiseUtils"],function(b,e,f,g,h){Object.defineProperty(e,"__esModule",{value:!0});e.href=function(a){g.startsWith(a,"esri-icon-")||(a="esri-icon-"+a);var c=b.toUrl("./symbol-defs.svg");a="#"+a;return 7!==f("trident")?""+c+a:a};(function(){7!==f("trident")||document.getElementById("esri-widget__symbol-defs")||h.create(function(a){return b(["dojo/text!./symbol-defs.svg","dojo/domReady!"],a)}).then(function(a){var c=document.body,
b=c.firstChild,d=document.createElement("div");d.id="esri-widget__symbol-defs";d.innerHTML=a;b?c.insertBefore(d,b):c.appendChild(d)})})()});