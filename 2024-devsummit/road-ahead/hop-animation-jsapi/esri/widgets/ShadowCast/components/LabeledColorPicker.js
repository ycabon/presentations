// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./Label","../../support/ColorPicker","../../support/widgetUtils","../../support/jsxFactory"],function(b,d,e,f,c){b.LabeledColorPicker=function(a){return c.tsx(d.Label,{for:a.id,label:a.label,tabIndex:-1},c.tsx(e.ColorPicker,{id:a.id,value:a.value,onChange:a.onChange}))};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});