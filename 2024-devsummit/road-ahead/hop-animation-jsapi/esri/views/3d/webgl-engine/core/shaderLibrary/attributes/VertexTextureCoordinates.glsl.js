// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/compilerUtils","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],function(d,f,a,g,e){d.VertexTextureCoordinates=function(b,c){b.include(a.TextureCoordinateAttribute,c);switch(c.textureCoordinateType){case a.TextureCoordinateAttributeType.Default:case a.TextureCoordinateAttributeType.Compressed:b.fragment.code.add(e.glsl`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);break;case a.TextureCoordinateAttributeType.Atlas:b.include(g.TextureAtlasLookup);b.fragment.code.add(e.glsl`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);break;default:f.neverReached(c.textureCoordinateType);case a.TextureCoordinateAttributeType.None:case a.TextureCoordinateAttributeType.COUNT:}};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});