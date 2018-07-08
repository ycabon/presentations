// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","dojox/string/BidiEngine"],function(e,a,d){Object.defineProperty(a,"__esModule",{value:!0});var c=new d;a.bidiText=function(b){if(!c.hasBidiChar(b))return[b,!1];var a;a="rtl"===c.checkContextual(b)?"IDNNN":"ICNNN";return[c.bidiTransform(b,a,"VLYSN"),!0]}});