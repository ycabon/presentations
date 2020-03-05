// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../webgl","./shaderRepository"],function(g,c,d,e){Object.defineProperty(c,"__esModule",{value:!0});var f=new d.ShaderCompiler(function(a){var b=e;a.split("/").forEach(function(a){b&&(b=b[a])});return b});c.resolveIncludes=function(a){return f.resolveIncludes(a)}});