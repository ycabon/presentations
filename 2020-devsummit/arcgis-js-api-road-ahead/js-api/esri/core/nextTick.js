// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./global"],function(n,p,a){function l(){if(a.postMessage&&!a.importScripts){var d=a.onmessage,e=!0;a.onmessage=function(){e=!1};a.postMessage("","*");a.onmessage=d;return e}return!1}function h(a){f.push(a);1===f.length&&m(function(){for(var a=0,c=g;a<c.length;a++)(0,c[a])();a=f.slice();for(c=f.length=0;c<a.length;c++)(0,a[c])()})}var k=a.MutationObserver||a.WebKitMutationObserver,m=function(){if(a.process&&a.process.nextTick)return function(b){a.process.nextTick(b)};if(a.Promise)return function(b){a.Promise.resolve().then(b)};
if(k){var d=[],e=document.createElement("div");(new k(function(){for(;0<d.length;)d.shift()()})).observe(e,{attributes:!0});return function(a){d.push(a);e.setAttribute("queueStatus","1")}}if(l()){var c=[];a.addEventListener("message",function(b){if(b.source===a&&"esri-nexttick-message"===b.data)for(b.stopPropagation();c.length;)c.shift()()},!0);return function(b){c.push(b);a.postMessage("esri-nexttick-message","*")}}return a.setImmediate?function(b){return a.setImmediate(b)}:function(b){return a.setTimeout(b,
0)}}(),f=[],g=[];(function(a){a.before=function(a){g.push(a);return{remove:function(){g=g.filter(function(c){return c!==a})}}}})(h||(h={}));return h});