// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/math/vec2"],function(f,k){class g{constructor(a,b,c=0,d,e){this.TypedArrayConstructor=a;this.elementCount=2;a=this.TypedArrayConstructor;void 0===d&&(d=2*a.BYTES_PER_ELEMENT);const h=0===b.byteLength?0:c;this.typedBuffer=null==e?new a(b,h):new a(b,h,(e-c)/a.BYTES_PER_ELEMENT);this.typedBufferStride=d/a.BYTES_PER_ELEMENT;this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride);this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(a,
b,c=this.count-b){b=this.typedBuffer.byteOffset+b*this.stride;return new a(this.buffer,b,this.stride,b+c*this.stride)}getVec(a,b){a*=this.typedBufferStride;return k.set(b,this.typedBuffer[a],this.typedBuffer[a+1])}setVec(a,b){a*=this.typedBufferStride;this.typedBuffer[a++]=b[0];this.typedBuffer[a]=b[1]}get(a,b){return this.typedBuffer[a*this.typedBufferStride+b]}set(a,b,c){this.typedBuffer[a*this.typedBufferStride+b]=c}setValues(a,b,c){a*=this.typedBufferStride;this.typedBuffer[a++]=b;this.typedBuffer[a]=
c}copyFrom(a,b,c){const d=this.typedBuffer,e=b.typedBuffer;a*=this.typedBufferStride;b=c*b.typedBufferStride;d[a++]=e[b++];d[a]=e[b]}get buffer(){return this.typedBuffer.buffer}}g.ElementCount=2;f.BufferViewVec2Impl=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});