// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../lib/VertexAttribute","./internal/bufferWriterUtils"],function(b,c,d){class e{constructor(a){this.vertexBufferLayout=a}elementCount(a){return a.attributes.get(c.VertexAttribute.POSITION).indices.length}write(a,f,g,h,k){d.writeDefaultAttributes(g,this.vertexBufferLayout,a,f,h,k)}}b.DefaultBufferWriter=e;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});