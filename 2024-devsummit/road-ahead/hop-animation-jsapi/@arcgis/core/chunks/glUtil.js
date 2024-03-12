/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{D as t}from"./enums.js";import{V as r}from"./VertexElementDescriptor.js";function e(t,e=0){const n=t.stride;return Array.from(t.fields.keys()).map((s=>{const i=t.fields.get(s),u=i.constructor.ElementCount,f=function(t){const r=o[t];if(r)return r;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),c=i.offset,m=!(!i.optional||!i.optional.glNormalized);return new r(s,u,f,c,n,m,e)}))}const o={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{e as g};
