// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./shaderRepository","../../../../../webgl/ShaderCompiler"],function(c,d,e){const g=new e.ShaderCompiler(function(a){let b=d;a.split("/").forEach(f=>{b&&=b[f]});return b});c.resolveIncludes=function(a){return g.resolveIncludes(a)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});