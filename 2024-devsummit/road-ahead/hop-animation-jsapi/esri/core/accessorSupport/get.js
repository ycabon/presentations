// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./utils"],function(d,e){function g(a,b){a="?"===a[a.length-1]?a.slice(0,-1):a;if(null!=b.getItemAt||Array.isArray(b)){var c=parseInt(a,10);if(!isNaN(c))return Array.isArray(b)?b[c]:b.at(c)}c=e.getProperties(b);return e.isPropertyDeclared(c,a)?c.get(a):b[a]}function h(a,b,c){if(null==a)return a;if((a=g(b[c],a))||!(c<b.length-1))return c===b.length-1?a:h(a,b,c+1)}function f(a,b,c=0){return"string"!==typeof b||b.includes(".")?h(a,e.pathToArray(b),c):g(b,a)}d.exists=function(a,b){return void 0!==
f(b,a)};d.get=function(a,b){return f(a,b)};d.valueOf=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});