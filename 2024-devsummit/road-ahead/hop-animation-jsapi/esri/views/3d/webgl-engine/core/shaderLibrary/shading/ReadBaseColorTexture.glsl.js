// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../ShaderOutput ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexTextureCoordinates.glsl ../util/TextureAtlasLookup.glsl ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../../lib/basicInterfaces".split(" "),function(e,f,g,h,k,c,l,m){e.ReadBaseColorTexture=function(d,a){const b=d.fragment;!a.hasColorTexture||a.output!==f.ShaderOutput.Color&&a.alphaDiscardMode===m.AlphaDiscardMode.Opaque?b.code.add(c.glsl`vec4 readBaseColorTexture() { return vec4(1.0); }`):
(d.include(h.VertexTextureCoordinates,a),a=a.textureCoordinateType===g.TextureCoordinateAttributeType.Atlas,b.uniforms.add(new l.Texture2DDrawUniform("baseColorTexture",n=>n.texture)),a?(d.include(k.TextureAtlasLookup),b.code.add(c.glsl`vec4 readBaseColorTexture() {
return textureAtlasLookup(baseColorTexture, vuv0, vuvRegion);
}`)):b.code.add(c.glsl`vec4 readBaseColorTexture() {
return texture(baseColorTexture, vuv0);
}`))};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});