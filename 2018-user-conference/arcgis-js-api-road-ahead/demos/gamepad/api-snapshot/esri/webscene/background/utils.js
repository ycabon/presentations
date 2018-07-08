// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./Background","./ColorBackground"],function(a,d,f,g){Object.defineProperty(d,"__esModule",{value:!0});a={base:f,key:"type",typeMap:{color:g}};d.backgroundProperty={types:a,json:{read:function(a){return function(c,b,d){if(!c)return c;for(var e in a.typeMap)if(c.type===e)return b=new a.typeMap[e],b.read(c,d),b}}(a),write:{overridePolicy:function(a,c,b){return{enabled:!b||!b.isPresentation}}}}}});