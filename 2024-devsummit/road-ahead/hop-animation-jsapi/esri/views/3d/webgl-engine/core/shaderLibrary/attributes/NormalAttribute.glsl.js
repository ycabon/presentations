// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/compilerUtils","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(b,f,c,d){b.NormalType=void 0;(function(a){a[a.Attribute=0]="Attribute";a[a.Compressed=1]="Compressed";a[a.Ground=2]="Ground";a[a.ScreenDerivative=3]="ScreenDerivative";a[a.COUNT=4]="COUNT"})(b.NormalType||(b.NormalType={}));b.NormalAttribute=function(a,e){switch(e.normalType){case b.NormalType.Compressed:a.attributes.add(d.VertexAttribute.NORMALCOMPRESSED,"vec2");a.vertex.code.add(c.glsl`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case b.NormalType.Attribute:a.attributes.add(d.VertexAttribute.NORMAL,"vec3");a.vertex.code.add(c.glsl`vec3 normalModel() {
return normal;
}`);break;case b.NormalType.ScreenDerivative:a.fragment.code.add(c.glsl`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:f.neverReached(e.normalType);case b.NormalType.COUNT:case b.NormalType.Ground:}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});