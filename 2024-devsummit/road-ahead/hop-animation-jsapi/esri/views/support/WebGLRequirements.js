// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../webgl/capabilities"],function(c,a,d){c.check=function(e){const b=d.getWebGLCapabilities();return b.available?"3d"===e&&b.majorPerformanceCaveat?new a("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is in a blocklist."):b.supportsHighPrecisionFragment?b.supportsVertexShaderSamplers?null:new a("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported."):
new a("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported."):new a("webgl:required","WebGL2 is required but not supported.",Error().stack)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});