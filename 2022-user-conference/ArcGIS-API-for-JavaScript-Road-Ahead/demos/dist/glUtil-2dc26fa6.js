import { C } from './enums-fb707d37.js';
import { t } from './VertexElementDescriptor-b07b83f4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o(t$1,o=0){const n=t$1.stride;return t$1.fieldNames.filter((e=>{const o=t$1.fields.get(e).optional;return !(o&&o.glPadding)})).map((i=>{const s=t$1.fields.get(i),l=s.constructor.ElementCount,u=r(s.constructor.ElementType),f=s.offset,c=!(!s.optional||!s.optional.glNormalized);return new t(i,l,u,f,n,c,o)}))}function r(t){const e=n[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const n={u8:C.UNSIGNED_BYTE,u16:C.UNSIGNED_SHORT,u32:C.UNSIGNED_INT,i8:C.BYTE,i16:C.SHORT,i32:C.INT,f32:C.FLOAT};

export { o };
