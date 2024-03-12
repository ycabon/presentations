// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.getTranslatedLineTitle=function(c,{profiles:a}){const d=c.title;if(null!=d)return d;switch(c.type){case "ground":return a.ground;case "input":return a.input;case "query":return a.query;case "view":return a.view;default:return""}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});