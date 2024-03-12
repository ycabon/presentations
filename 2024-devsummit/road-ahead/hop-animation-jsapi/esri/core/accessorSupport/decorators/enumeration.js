// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../jsonMap","./property"],function(c,d,e){c.enumeration=function(a,b={}){a=a instanceof d.JSONMap?a:new d.JSONMap(a,b);a={type:b?.ignoreUnknown??!0?a.apiValues:String,json:{type:a.jsonValues,read:b?.readOnly?!1:{reader:a.read},write:{writer:a.write}}};void 0!==b?.readOnly&&(a.readOnly=!!b.readOnly);void 0!==b?.default&&(a.json.default=b.default);void 0!==b?.name&&(a.json.name=b.name);void 0!==b?.nonNullable&&(a.nonNullable=b.nonNullable);return e.property(a)};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});