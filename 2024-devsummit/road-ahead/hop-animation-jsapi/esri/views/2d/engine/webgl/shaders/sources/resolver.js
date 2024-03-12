// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./shaderRepository","../../../../../webgl/ShaderCompiler"],function(c,d,e){const h=new e.ShaderCompiler(function(a){return function(f){let b=a;f.split("/").forEach(g=>{b&&=b[g]});return b}}(d));c.resolveIncludes=function(a){return h.resolveIncludes(a)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});