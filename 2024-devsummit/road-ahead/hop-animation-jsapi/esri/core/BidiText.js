// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./BidiEngine"],function(c,e){const b=new e;c.bidiText=function(a){if(null==a)return["",!1];if(!b.hasBidiChar(a))return[a,!1];let d;d="rtl"===b.checkContextual(a)?"IDNNN":"ICNNN";return[b.bidiTransform(a,d,"VLYSN"),!0]};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});