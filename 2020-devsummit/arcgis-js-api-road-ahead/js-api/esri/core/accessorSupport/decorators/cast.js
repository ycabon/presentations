// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../deprecate ../../Logger ../ensureType ../metadata".split(" "),function(r,e,g,h,k,f){function l(a){var b="_meta"in a?k.ensureType(a):a;return function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];a.push(b);return"number"===typeof a[2]?m.apply(this,a):n.apply(this,a)}}function n(a,b,c,d){f.getPropertyMetadata(a,b).cast=d}function m(a,b,c,d){g.deprecated(h.getLogger("esri.core.accessorSupport.decorators.cast"),"@cast decorator on method parameters is deprecated for compatibility with ES decorator spec",
{version:"4.14",see:"https://arcg.is/vvbW8"});f.getParameterMetadata(a,b,c).cast=d}function p(a){return function(b,c){f.getPropertyMetadata(b,a).cast=b[c]}}Object.defineProperty(e,"__esModule",{value:!0});var q=Object.prototype.toString;e.autocastMethod=function(a,b,c){if(f.hasParametersMetadata(a,b)){var d=f.getParametersMetadata(a,b).filter(function(a){return null!=a.cast});if(d.length){var e=c.value;c.value=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];for(b=0;b<d.length;b++){var c=
d[b];a[c.index]=c.cast(a[c.index])}return e.apply(this,a)};return c}console.warn("Method "+a.declaredClass+"::"+b+" is decorated with @cast but no parameters are decorated")}};e.cast=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];if(3!==a.length||"string"!==typeof a[1]){if(1===a.length&&"[object Function]"===q.call(a[0]))return l(a[0]);if(1===a.length&&"string"===typeof a[0])return p(a[0])}}});