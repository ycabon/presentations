// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../webgl","./sources/resolver"],function(d,a,c,b){Object.defineProperty(a,"__esModule",{value:!0});a.magnifier={name:"magnifier",shaders:{vertexShader:b.resolveIncludes("magnifier/magnifier.vert"),fragmentShader:b.resolveIncludes("magnifier/magnifier.frag")},attributes:{a_pos:0}};a.createMagnifierProgram=function(b){return c.createProgram(b,a.magnifier)}});