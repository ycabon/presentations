// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../shaderModules/interfaces","../../lib/VertexAttribute"],function(b,c,e){b.ScreenSpacePass=function(a,d=!0){a.attributes.add(e.VertexAttribute.POSITION,"vec2");d&&a.varyings.add("uv","vec2");a.vertex.code.add(c.glsl`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${d?c.glsl`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});