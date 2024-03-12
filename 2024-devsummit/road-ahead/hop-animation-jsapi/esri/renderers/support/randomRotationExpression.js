// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){const b=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;a.matchRandomRotationExpression=function(c){return c.match(b)?.[1]?.replace(/\\'/g,"'")??null};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});