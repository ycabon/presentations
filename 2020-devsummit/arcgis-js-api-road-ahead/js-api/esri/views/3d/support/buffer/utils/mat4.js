// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,d){Object.defineProperty(d,"__esModule",{value:!0});d.copy=function(b,c,a){var d=b.typedBuffer;b=b.typedBufferStride;var k=c.typedBuffer,f=c.typedBufferStride;c=a?a.count:c.count;var g=(a&&a.dstIndex?a.dstIndex:0)*b;a=(a&&a.srcIndex?a.srcIndex:0)*f;for(var h=0;h<c;++h){for(var e=0;16>e;++e)d[g+e]=k[a+e];g+=b;a+=f}}});