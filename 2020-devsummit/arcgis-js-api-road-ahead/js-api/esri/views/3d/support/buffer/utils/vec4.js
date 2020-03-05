// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,f){Object.defineProperty(f,"__esModule",{value:!0});f.copy=function(c,e,a){var g=c.typedBuffer;c=c.typedBufferStride;var h=e.typedBuffer,b=e.typedBufferStride;e=a?a.count:e.count;var d=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*b;for(var k=0;k<e;++k)g[d]=h[a],g[d+1]=h[a+1],g[d+2]=h[a+2],g[d+3]=h[a+3],d+=c,a+=b};f.fill=function(c,e,a,g,h,b){var d=c.typedBuffer,k=c.typedBufferStride;c=b?b.count:c.count;b=(b&&b.dstIndex?b.dstIndex:0)*k;for(var f=
0;f<c;++f)d[b]=e,d[b+1]=a,d[b+2]=g,d[b+3]=h,b+=k}});