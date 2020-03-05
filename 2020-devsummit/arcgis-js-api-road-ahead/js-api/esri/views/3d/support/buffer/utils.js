// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ./types ./utils/mat3 ./utils/mat4 ./utils/scalar ./utils/vec2 ./utils/vec3 ./utils/vec4".split(" "),function(k,a,c,b,d,e,f,g,h){Object.defineProperty(a,"__esModule",{value:!0});a.mat3=b;a.mat4=d;a.scalar=e;a.vec2=f;a.vec3=g;a.vec4=h;a.createBuffer=function(a,b){return new a(new ArrayBuffer(b*a.ElementCount*c.elementTypeSize(a.ElementType)))}});