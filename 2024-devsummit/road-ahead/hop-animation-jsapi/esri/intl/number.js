// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./locale"],function(c,e){function g(a){const b=a||h;if(!d.has(b)){var f=e.getLocale();f=k[e.getLocale()]||f;d.set(b,new Intl.NumberFormat(f,a))}return d.get(b)}const k={ar:"ar-u-nu-latn"};let d=new WeakMap,h={};e.beforeLocaleChange(()=>{d=new WeakMap;h={}});c.convertNumberFormatToIntlOptions=function(a={}){const b={};null!=a.digitSeparator&&(b.useGrouping=a.digitSeparator);null!=a.places&&(b.minimumFractionDigits=b.maximumFractionDigits=a.places);return b};c.formatNumber=function(a,
b){Object.is(a,-0)&&(a=0);return g(b).format(a)};c.getFormatter=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});