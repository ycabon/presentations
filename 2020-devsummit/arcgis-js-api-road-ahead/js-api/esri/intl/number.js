// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../core/tsSupport/assignHelper","@dojo/framework/shim/WeakMap","./locale"],function(l,c,m,f,e){function g(a){var b=a||h;if(!d.has(b)){var c=e.getLocale(),c=k[e.getLocale()]||c;d.set(b,new Intl.NumberFormat(c,a))}return d.get(b)}Object.defineProperty(c,"__esModule",{value:!0});var k={ar:"ar-u-nu-latn"},d=new f.default,h={};e.onLocaleChange(function(){d=new f.default;h={}});c.getFormatter=g;c.convertNumberFormatToIntlOptions=function(a){void 0===a&&(a={});var b={};null!=
a.digitSeparator&&(b.useGrouping=a.digitSeparator);null!=a.places&&(b.minimumFractionDigits=b.maximumFractionDigits=a.places);return b};c.formatNumber=function(a,b){return g(b).format(a)}});