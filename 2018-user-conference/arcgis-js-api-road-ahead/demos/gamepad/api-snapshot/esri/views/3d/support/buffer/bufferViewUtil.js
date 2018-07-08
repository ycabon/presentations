// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,b){Object.defineProperty(b,"__esModule",{value:!0});b.unrolledCopyVec3=function(c,a){var e=c.typedBuffer;c=c.typedBufferStride;var f=a.typedBuffer,b=a.typedBufferStride;a=a.count;for(var d=0;d<a;d++){var g=d*c,h=d*b;e[g]=f[h];e[g+1]=f[h+1];e[g+2]=f[h+2]}}});