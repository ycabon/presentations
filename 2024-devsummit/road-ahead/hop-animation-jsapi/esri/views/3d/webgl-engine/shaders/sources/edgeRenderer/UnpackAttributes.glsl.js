// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/compilerUtils","../../../core/shaderModules/interfaces","../../../lib/VertexAttribute","./EdgeUtil.glsl"],function(e,g,a,h,b){e.UnpackAttributes=function(f,d){const c=f.vertex;f.attributes.add(h.VertexAttribute.SIDENESS,"vec2");d.mode===b.EdgeUtilMode.MIXED?c.code.add(a.glsl`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
float type;
};`):c.code.add(a.glsl`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
};`);switch(d.mode){case b.EdgeUtilMode.MIXED:c.code.add(a.glsl`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float fType = component.type;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
if (fType <= 0.0) {
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
}
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);
}`);break;case b.EdgeUtilMode.SKETCH:c.code.add(a.glsl`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case b.EdgeUtilMode.SOLID:c.code.add(a.glsl`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case b.EdgeUtilMode.COUNT:break;default:g.neverReached(d.mode)}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});