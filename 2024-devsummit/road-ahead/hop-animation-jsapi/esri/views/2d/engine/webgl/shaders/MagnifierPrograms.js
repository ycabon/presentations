// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./sources/resolver","../../../../webgl/ProgramTemplate"],function(a,b,d){const c={shaders:{vertexShader:b.resolveIncludes("magnifier/magnifier.vert"),fragmentShader:b.resolveIncludes("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};a.createMagnifierProgram=function(e){return d.createProgram(e,c)};a.magnifierProgramTemplate=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});