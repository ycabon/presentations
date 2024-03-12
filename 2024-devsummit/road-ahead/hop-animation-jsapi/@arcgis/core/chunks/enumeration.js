/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{J as e}from"./jsonMap.js";import{property as n}from"../core/accessorSupport/decorators/property.js";function o(o,r={}){const a=o instanceof e?o:new e(o,r),t={type:r?.ignoreUnknown??1?a.apiValues:String,json:{type:a.jsonValues,read:!r?.readOnly&&{reader:a.read},write:{writer:a.write}}};return void 0!==r?.readOnly&&(t.readOnly=!!r.readOnly),void 0!==r?.default&&(t.json.default=r.default),void 0!==r?.name&&(t.json.name=r.name),void 0!==r?.nonNullable&&(t.nonNullable=r.nonNullable),n(t)}export{o as e};
