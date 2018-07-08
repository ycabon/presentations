// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,d){Object.defineProperty(d,"__esModule",{value:!0});d.getFullyQualifiedFontName=function(a){a=a.font;var c;a:{switch(a.weight.toLowerCase()){case "bold":case "bolder":c=" Bold";break a}c=""}var b;a:{switch(a.style.toLowerCase()){case "italic":case "oblic":b=" Italic";break a}b=""}c+=b;a:{switch(a.decoration.toLowerCase()){case "underline":b=" Underline";break a;case "line-through":b=" Strikethrough";break a}b=""}c+=b;return a.family.charAt(0).toUpperCase()+
a.family.slice(1)+(0<c.length?c:" Regular")}});