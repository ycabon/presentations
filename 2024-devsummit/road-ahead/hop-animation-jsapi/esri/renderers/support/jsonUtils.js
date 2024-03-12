// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Warning","../../core/accessorSupport/extensions/serializableProperty/reader","./types"],function(c,f,g,h){function e(a,d,b){return a?a&&(a.styleName||a.styleUrl)&&"uniqueValue"!==a.type?(b?.messages&&b.messages.push(new f("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+a.type+"'",{definition:a,context:b})),null):k(a,d,b):null}const k=g.createTypeReader({types:h.rendererTypes});c.fromJSON=function(a,d){return e(a,null,
d)};c.read=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});