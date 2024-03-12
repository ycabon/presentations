// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../attributes/VertexTextureCoordinates.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DDrawUniform ../../shaderModules/Texture2DPassUniform ../../shaderTechnique/BindType ../../../lib/GLTextureMaterial".split(" "),function(f,n,l,m,d,h,k,g,p){f.PBRMode=void 0;(function(a){a[a.Disabled=0]="Disabled";a[a.Normal=1]="Normal";a[a.Schematic=2]="Schematic";a[a.Water=3]="Water";a[a.WaterOnIntegratedMesh=
4]="WaterOnIntegratedMesh";a[a.Simplified=5]="Simplified";a[a.TerrainWithWater=6]="TerrainWithWater";a[a.COUNT=7]="COUNT"})(f.PBRMode||(f.PBRMode={}));class q extends p.GLTextureMaterialBindParameters{}f.PBRBindParameters=q;f.PhysicallyBasedRenderingParameters=function(a,c){const e=a.fragment,r=c.hasMetallicRoughnessTexture||c.hasEmissionTexture||c.hasOcclusionTexture;c.pbrMode===f.PBRMode.Normal&&r&&a.include(n.VertexTextureCoordinates,c);c.pbrMode===f.PBRMode.Schematic?e.code.add(d.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`):c.pbrMode===f.PBRMode.Disabled?e.code.add(d.glsl`float getBakedOcclusion() { return 1.0; }`):c.pbrMode===f.PBRMode.Normal&&(e.code.add(d.glsl`vec3 mrr;
vec3 emission;
float occlusion;`),a=c.pbrTextureBindType,c.hasMetallicRoughnessTexture&&(e.uniforms.add(a===g.BindType.Pass?new k.Texture2DPassUniform("texMetallicRoughness",b=>b.textureMetallicRoughness):new h.Texture2DDrawUniform("texMetallicRoughness",b=>b.textureMetallicRoughness)),e.code.add(d.glsl`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),c.hasEmissionTexture&&(e.uniforms.add(a===g.BindType.Pass?new k.Texture2DPassUniform("texEmission",b=>b.textureEmissive):new h.Texture2DDrawUniform("texEmission",b=>b.textureEmissive)),e.code.add(d.glsl`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),c.hasOcclusionTexture?(e.uniforms.add(a===g.BindType.Pass?new k.Texture2DPassUniform("texOcclusion",b=>b.textureOcclusion):new h.Texture2DDrawUniform("texOcclusion",b=>b.textureOcclusion)),e.code.add(d.glsl`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):e.code.add(d.glsl`float getBakedOcclusion() { return 1.0; }`),a===g.BindType.Pass?e.uniforms.add(new m.Float3PassUniform("emissionFactor",b=>b.emissiveFactor),new m.Float3PassUniform("mrrFactors",b=>b.mrrFactors)):e.uniforms.add(new l.Float3DrawUniform("emissionFactor",b=>b.emissiveFactor),new l.Float3DrawUniform("mrrFactors",b=>b.mrrFactors)),e.code.add(d.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${c.hasMetallicRoughnessTexture?d.glsl`applyMetallnessAndRoughness(${c.hasMetallicRoughnessTextureTransform?d.glsl`metallicRoughnessUV`:"vuv0"});`:""}

      ${c.hasEmissionTexture?d.glsl`applyEmission(${c.hasEmissiveTextureTransform?d.glsl`emissiveUV`:"vuv0"});`:""}

      ${c.hasOcclusionTexture?d.glsl`applyOcclusion(${c.hasOcclusionTextureTransform?d.glsl`occlusionUV`:"vuv0"});`:""}
    }
  `))};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});