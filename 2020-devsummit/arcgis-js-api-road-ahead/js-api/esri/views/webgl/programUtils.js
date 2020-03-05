// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./Program"],function(h,d,e){Object.defineProperty(d,"__esModule",{value:!0});d.glslifyDefineMap=function(f){var c="",a;for(a in f){var b=f[a];if("boolean"===typeof b)b&&(c+="#define "+a+"\n");else if("number"===typeof b)c+="#define "+a+" "+b.toFixed()+"\n";else if("object"===typeof b){var d=b.options,e=0,g;for(g in d)c+="#define "+d[g]+" "+(e++).toFixed()+"\n";c+="#define "+a+" "+d[b.value]+"\n"}}return c};d.createProgram=function(d,c,a,b){a=a||{};b=b||"";a="function"===
typeof c.shaders?c.shaders(a):c.shaders;return new e(d,b+a.vertexShader,b+a.fragmentShader,c.attributes)}});