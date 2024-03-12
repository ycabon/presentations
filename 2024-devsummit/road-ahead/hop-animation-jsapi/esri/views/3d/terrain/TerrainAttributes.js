// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../support/buffer/InterleavedLayout","../webgl-engine/lib/VertexAttribute"],function(c,a,b){a=a.newLayout().vec3f(b.VertexAttribute.POSITION).vec2i16(b.VertexAttribute.UV0).vec2i16(b.VertexAttribute.NORMALCOMPRESSED,{glNormalized:!0});c.terrainAttributesLayout=a;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});