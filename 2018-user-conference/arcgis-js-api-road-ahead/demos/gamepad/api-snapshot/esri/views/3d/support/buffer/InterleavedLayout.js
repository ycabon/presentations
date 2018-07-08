// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./BufferView"],function(h,e,d){Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function c(a,b){this.layout=a;this.buffer="number"===typeof b?new ArrayBuffer(b*a.stride):b;b=0;for(var c=a.fieldNames;b<c.length;b++){var d=c[b],e=a.fields.get(d);this[d]=new e.constructor(this.buffer,e.offset,this.stride)}}Object.defineProperty(c.prototype,"stride",{get:function(){return this.layout.stride},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"count",{get:function(){return this.buffer.byteLength/this.stride},enumerable:!0,configurable:!0});c.prototype.slice=function(a,b){return new c(this.layout,this.buffer.slice(a*this.stride,b*this.stride))};return c}(),g=function(){function c(){this.stride=0;this.fields=new Map;this.fieldNames=[]}c.prototype.vec2f=function(a,b){this.fields.set(a,{size:8,constructor:d.BufferViewVec2f,offset:this.stride,optional:b});this.stride+=8;this.fieldNames.push(a);return this};c.prototype.vec3f=function(a,b){this.fields.set(a,
{size:12,constructor:d.BufferViewVec3f,offset:this.stride,optional:b});this.stride+=12;this.fieldNames.push(a);return this};c.prototype.vec4f=function(a,b){this.fields.set(a,{size:16,constructor:d.BufferViewVec4f,offset:this.stride,optional:b});this.stride+=16;this.fieldNames.push(a);return this};c.prototype.mat3f=function(a,b){this.fields.set(a,{size:36,constructor:d.BufferViewMat3f,offset:this.stride,optional:b});this.stride+=36;this.fieldNames.push(a);return this};c.prototype.mat4f=function(a,
b){this.fields.set(a,{size:64,constructor:d.BufferViewMat4f,offset:this.stride,optional:b});this.stride+=64;this.fieldNames.push(a);return this};c.prototype.vec4u8=function(a,b){this.fields.set(a,{offset:this.stride,size:4,optional:b,constructor:d.BufferViewVec4u8});this.stride+=4;this.fieldNames.push(a);return this};c.prototype.u8=function(a,b){this.fields.set(a,{offset:this.stride,size:1,optional:b,constructor:d.BufferViewUint8});this.stride+=1;this.fieldNames.push(a);return this};c.prototype.u16=
function(a,b){this.fields.set(a,{offset:this.stride,size:2,optional:b,constructor:d.BufferViewUint16});this.stride+=2;this.fieldNames.push(a);return this};c.prototype.i8=function(a,b){this.fields.set(a,{offset:this.stride,size:1,optional:b,constructor:d.BufferViewInt8});this.stride+=1;this.fieldNames.push(a);return this};c.prototype.vec2i8=function(a,b){this.fields.set(a,{offset:this.stride,size:2,optional:b,constructor:d.BufferViewVec2i8});this.stride+=2;this.fieldNames.push(a);return this};c.prototype.vec2i16=
function(a,b){this.fields.set(a,{offset:this.stride,size:4,optional:b,constructor:d.BufferViewVec2i16});this.stride+=4;this.fieldNames.push(a);return this};c.prototype.vec2u8=function(a,b){this.fields.set(a,{offset:this.stride,size:2,optional:b,constructor:d.BufferViewVec2u8});this.stride+=2;this.fieldNames.push(a);return this};c.prototype.vec4u16=function(a,b){this.fields.set(a,{offset:this.stride,size:8,optional:b,constructor:d.BufferViewVec4u16});this.stride+=8;this.fieldNames.push(a);return this};
c.prototype.u32=function(a,b){this.fields.set(a,{offset:this.stride,size:4,optional:b,constructor:d.BufferViewUint32});this.stride+=4;this.fieldNames.push(a);return this};c.prototype.createBuffer=function(a){return new f(this,a)};c.prototype.createView=function(a){return new f(this,a)};c.prototype.clone=function(){var a=new c;a.stride=this.stride;a.fields=new Map;this.fields.forEach(function(b,c){return a.fields.set(c,b)});a.fieldNames=this.fieldNames.slice();a.BufferType=this.BufferType;return a};
return c}();e.InterleavedLayout=g;e.newLayout=function(){return new g}});