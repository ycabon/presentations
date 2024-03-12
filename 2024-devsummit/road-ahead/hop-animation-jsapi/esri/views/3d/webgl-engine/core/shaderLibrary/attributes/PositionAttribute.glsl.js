// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(a,c,d){a.PositionAttribute=function(b){b.attributes.add(d.VertexAttribute.POSITION,"vec3");b.vertex.code.add(c.glsl`vec3 positionModel() { return position; }`)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});