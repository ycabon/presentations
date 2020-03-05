// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,b){Object.defineProperty(b,"__esModule",{value:!0});b.copy=function(c,d,a){var f=c.typedBuffer;c=c.typedBufferStride;var g=d.typedBuffer,b=d.typedBufferStride;d=a?a.count:d.count;var e=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*b;for(var h=0;h<d;++h)f[e]=g[a],f[e+1]=g[a+1],f[e+2]=g[a+2],e+=c,a+=b}});