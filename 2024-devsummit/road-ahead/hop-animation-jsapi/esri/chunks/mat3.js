// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){function f(b,c,a){const l=b.typedBuffer;b=b.typedBufferStride;const m=c.typedBuffer,g=c.typedBufferStride;c=a?a.count:c.count;let h=(a?.dstIndex??0)*b;a=(a?.srcIndex??0)*g;for(let k=0;k<c;++k){for(let d=0;9>d;++d)l[h+d]=m[a+d];h+=b;a+=g}}const n=Object.freeze(Object.defineProperty({__proto__:null,copy:f},Symbol.toStringTag,{value:"Module"}));e.copy=f;e.mat3=n});