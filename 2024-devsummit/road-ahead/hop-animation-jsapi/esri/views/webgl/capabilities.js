// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./contextUtils"],function(e,f){function g(b){if("undefined"===typeof WebGL2RenderingContext)return null;var c=document.createElement("canvas");if(!c)return null;let a=f.createContext(c,{failIfMajorPerformanceCaveat:!0});null==a&&(a=f.createContext(c),null!=a&&(b.majorPerformanceCaveat=!0));if(null==a)return a;b.available=!0;b.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE);b.supportsVertexShaderSamplers=0<a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS);if(c=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
a.HIGH_FLOAT))b.supportsHighPrecisionFragment=0<c.precision;return a}let d;class h{constructor(){this.majorPerformanceCaveat=this.available=!1;this.maxTextureSize=0;this.supportsColorBufferHalfFloat=this.supportsColorBufferFloatBlend=this.supportsColorBufferFloat=this.supportsHighPrecisionFragment=this.supportsVertexShaderSamplers=!1}}e.getWebGLCapabilities=function(){if(!d){{const b=new h,c=g(b);null!=c&&(b.supportsColorBufferFloat=null!==c.getExtension("EXT_color_buffer_float"),b.supportsColorBufferFloatBlend=
null!==c.getExtension("EXT_float_blend"),b.supportsColorBufferHalfFloat=b.supportsColorBufferFloat||null!==c.getExtension("EXT_color_buffer_half_float"));d=b}}return d};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});