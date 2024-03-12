// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/datetime"],function(b,d){function e(a){return a instanceof d.Zone?a===c.instance?!0:!1:"unknown"===a?.toString().toLowerCase()?!0:!1}class c{}c.instance=new d.IANAZone("Etc/UTC");b.UnknownTimeZone=c;b.adoptTimeZone=function(a,f){return d.DateTime.fromObject({day:a.day,year:a.year,month:a.month,hour:a.hour,minute:a.minute,second:a.second,millisecond:a.millisecond},{zone:f})};b.isUnknownTimeZone=e;b.substituteUnknownTimezone=function(a){return e(a)?c.instance:a};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});