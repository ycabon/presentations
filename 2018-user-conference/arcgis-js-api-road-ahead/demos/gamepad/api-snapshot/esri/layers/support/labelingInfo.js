// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./LabelClass"],function(l,a,f){Object.defineProperty(a,"__esModule",{value:!0});var g=/\[([^\[\]]+)\]/gi;a.reader=function(a,c,h){var k=this;return a?a.map(function(a){var b=new f;b.read(a,h);if(b.labelExpression){var d=c.fields||c.layerDefinition&&c.layerDefinition.fields||k.fields;b.labelExpression=b.labelExpression.replace(g,function(a,b){a:if(d){a=b.toLowerCase();for(var c=0;c<d.length;c++){var e=d[c].name;if(e.toLowerCase()===a){b=e;break a}}}return"["+b+"]"})}return b}):
null}});