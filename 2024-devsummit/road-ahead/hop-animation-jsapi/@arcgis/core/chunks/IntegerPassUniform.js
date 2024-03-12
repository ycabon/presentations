/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{n as e}from"./compilerUtils.js";import{c as t}from"./mat3f64.js";import{c as o}from"./vec4f64.js";import{g as a}from"./interfaces5.js";import{V as r}from"./VertexAttribute.js";import{X as n,Y as s,Z as i,_ as c,$ as l,b as d,U as u,d as m,Q as h,a0 as f}from"./StencilUtils.js";import{B as g}from"./BindType.js";import"../core/Error.js";import"./Logger.js";import"./basicInterfaces.js";import{c as v,l as p}from"./mathUtils.js";import{s as x,p as b,y,b as N,h as S,a as w}from"./vec3.js";import{c as T,f as C}from"./vec3f64.js";function L(t,o){switch(o.normalType){case R.Compressed:t.attributes.add(r.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(a`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case R.Attribute:t.attributes.add(r.NORMAL,"vec3"),t.vertex.code.add(a`vec3 normalModel() {
return normal;
}`);break;case R.ScreenDerivative:t.fragment.code.add(a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:e(o.normalType);case R.COUNT:case R.Ground:}}var R,H,F;function M(t,o){switch(o.normalType){case R.Attribute:case R.Compressed:t.include(L,o),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new c("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new l("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),t.vertex.code.add(a`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case R.Ground:t.include(i,o),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(a`
        void forwardNormal() {
          vNormalWorld = ${o.spherical?a`normalize(vPositionWorldCameraRelative);`:a`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case R.ScreenDerivative:t.vertex.code.add(a`void forwardNormal() {}`);break;default:e(o.normalType);case R.COUNT:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(R||(R={}));class _ extends s{constructor(){super(...arguments),this.transformNormalViewFromGlobal=t()}}class V extends n{constructor(){super(...arguments),this.transformNormalGlobalFromModel=t(),this.toMapSpace=o()}}function O(e){e.uniforms.add(new d("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function U(e){e.uniforms.add(new d("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function D(e){O(e.fragment),U(e.fragment),e.fragment.code.add(a`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function G(t,o){switch(o.textureCoordinateType){case H.Default:return t.attributes.add(r.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(a`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case H.Compressed:return t.attributes.add(r.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(a`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case H.Atlas:return t.attributes.add(r.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(r.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(a`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:e(o.textureCoordinateType);case H.None:return void t.vertex.code.add(a`void forwardTextureCoordinates() {}`);case H.COUNT:return}}function k(e){e.fragment.code.add(a`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function A(t,o){switch(t.include(G,o),o.textureCoordinateType){case H.Default:case H.Compressed:return void t.fragment.code.add(a`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case H.Atlas:return t.include(k),void t.fragment.code.add(a`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:e(o.textureCoordinateType);case H.None:case H.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(H||(H={}));class I extends u{constructor(e,t){super(e,"sampler2D",g.Draw,((o,a,r)=>o.bindTexture(e,t(a,r))))}}function W(e,t){const o=e.fragment,r=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===F.Normal&&r&&e.include(A,t),t.pbrMode!==F.Schematic)if(t.pbrMode!==F.Disabled){if(t.pbrMode===F.Normal){o.code.add(a`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(o.uniforms.add(e===g.Pass?new m("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new I("texMetallicRoughness",(e=>e.textureMetallicRoughness))),o.code.add(a`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add(e===g.Pass?new m("texEmission",(e=>e.textureEmissive)):new I("texEmission",(e=>e.textureEmissive))),o.code.add(a`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add(e===g.Pass?new m("texOcclusion",(e=>e.textureOcclusion)):new I("texOcclusion",(e=>e.textureOcclusion))),o.code.add(a`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(a`float getBakedOcclusion() { return 1.0; }`),e===g.Pass?o.uniforms.add(new d("emissionFactor",(e=>e.emissiveFactor)),new d("mrrFactors",(e=>e.mrrFactors))):o.uniforms.add(new h("emissionFactor",(e=>e.emissiveFactor)),new h("mrrFactors",(e=>e.mrrFactors))),o.code.add(a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?a`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?a`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?a`applyEmission(${t.hasEmissiveTextureTransform?a`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?a`applyOcclusion(${t.hasOcclusionTextureTransform?a`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else o.code.add(a`float getBakedOcclusion() { return 1.0; }`);else o.code.add(a`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function P(e){const t=e.fragment.code;t.add(a`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(a`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(a`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function E(e,t){const o=e.fragment.code;e.include(f),t.pbrMode!==F.Normal&&t.pbrMode!==F.Schematic&&t.pbrMode!==F.Simplified&&t.pbrMode!==F.TerrainWithWater||(o.add(a`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(a`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==F.Normal&&t.pbrMode!==F.Schematic||(e.include(P),o.add(a`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),o.add(a`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(a`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(a`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function z(e,t){const o=e.fragment.code;e.include(f),o.add(a`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),o.add(a`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),o.add(a`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),o.add(a`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),o.add(a`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(F||(F={}));class j{constructor(e=T()){this.intensity=e}}class B{constructor(e=T(),t=C(.57735,.57735,.57735)){this.intensity=e,this.direction=t}}class ${constructor(e=T(),t=C(.57735,.57735,.57735),o=!0,a=1,r=1){this.intensity=e,this.direction=t,this.castShadows=o,this.specularStrength=a,this.environmentStrength=r}}class K{constructor(){this.r=[0],this.g=[0],this.b=[0]}}function q(e,t,o){(o=o||e).length=e.length;for(let a=0;a<e.length;a++)o[a]=e[a]*t[a];return o}function Q(e,t,o){(o=o||e).length=e.length;for(let a=0;a<e.length;a++)o[a]=e[a]*t;return o}function X(e,t,o){(o=o||e).length=e.length;for(let a=0;a<e.length;a++)o[a]=e[a]+t[a];return o}function Y(e){return(e+1)*(e+1)}function Z(e,t,o){const a=e[0],r=e[1],n=e[2],s=o||[];return s.length=Y(t),t>=0&&(s[0]=.28209479177),t>=1&&(s[1]=.4886025119*a,s[2]=.4886025119*n,s[3]=.4886025119*r),t>=2&&(s[4]=1.09254843059*a*r,s[5]=1.09254843059*r*n,s[6]=.31539156525*(3*n*n-1),s[7]=1.09254843059*a*n,s[8]=.54627421529*(a*a-r*r)),s}const J=[],ee=[],te=[],oe=[0],ae=[0],re=T(),ne=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class se{constructor(){this.color=T(),this.intensity=1}}class ie{constructor(){this.direction=T(),this.ambient=new se,this.diffuse=new se}}const ce=.4;class le{constructor(){this._shOrder=2,this._legacy=new ie,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new K,this._mainLight=new $(T(),C(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){(function(e,t,o,a){!function(e,t){const o=Y(e),a=t||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=o;for(let e=0;e<o;e++)a.r[e]=a.g[e]=a.b[e]=0}(t,a),x(o.intensity,0,0,0);let r=!1;const n=J,s=ee,i=te;n.length=0,s.length=0,i.length=0;for(const t of e)t instanceof $&&!r?(b(o.direction,t.direction),b(o.intensity,t.intensity),o.specularStrength=t.specularStrength,o.environmentStrength=t.environmentStrength,o.castShadows=t.castShadows,r=!0):t instanceof $||t instanceof B?n.push(t):t instanceof j?s.push(t):t instanceof K&&i.push(t);(function(e,t){const o=(a=t.r.length,v(Math.floor(Math.sqrt(a)-1),0,2));var a;for(const a of e)y(re,a.direction),Z(re,o,oe),q(oe,ne),Q(oe,a.intensity[0],ae),X(t.r,ae),Q(oe,a.intensity[1],ae),X(t.g,ae),Q(oe,a.intensity[2],ae),X(t.b,ae)})(n,a),function(e,t){Z(re,0,oe);for(const o of e)t.r[0]+=oe[0]*ne[0]*o.intensity[0]*4*Math.PI,t.g[0]+=oe[0]*ne[0]*o.intensity[1]*4*Math.PI,t.b[0]+=oe[0]*ne[0]*o.intensity[2]*4*Math.PI}(s,a);for(const e of i)X(a.r,e.r),X(a.g,e.g),X(a.b,e.b)})(e,this._shOrder,this._mainLight,this._sphericalHarmonics),b(this._legacy.direction,this._mainLight.direction);const t=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*t,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*t,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*t,N(this._legacy.diffuse.color,this._mainLight.intensity,t),b(de,this._legacy.diffuse.color),N(de,de,.4*this.globalFactor),S(this._legacy.ambient.color,this._legacy.ambient.color,de)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),b(this._mainLight.direction,e.mainLight.direction),b(this._mainLight.intensity,e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,t,o){if(w(this._mainLight.intensity,e.mainLight.intensity,t.mainLight.intensity,o),this._mainLight.environmentStrength=p(e.mainLight.environmentStrength,t.mainLight.environmentStrength,o),this._mainLight.specularStrength=p(e.mainLight.specularStrength,t.mainLight.specularStrength,o),b(this._mainLight.direction,t.mainLight.direction),this._mainLight.castShadows=t.mainLight.castShadows,this.globalFactor=p(e.globalFactor,t.globalFactor,o),this.noonFactor=p(e.noonFactor,t.noonFactor,o),e.sh.r.length===t.sh.r.length)for(let a=0;a<t.sh.r.length;a++)this._sphericalHarmonics.r[a]=p(e.sh.r[a],t.sh.r[a],o),this._sphericalHarmonics.g[a]=p(e.sh.g[a],t.sh.g[a],o),this._sphericalHarmonics.b[a]=p(e.sh.b[a],t.sh.b[a],o);else for(let e=0;e<t.sh.r.length;e++)this._sphericalHarmonics.r[e]=t.sh.r[e],this._sphericalHarmonics.g[e]=t.sh.g[e],this._sphericalHarmonics.b[e]=t.sh.b[e]}}const de=T();class ue extends u{constructor(e,t){super(e,"int",g.Pass,((o,a,r)=>o.setUniform1i(e,t(a,r))))}}export{j as A,B as F,ue as I,D as M,L as N,F as P,le as S,H as T,M as V,G as a,R as b,A as c,I as d,ce as e,E as f,O as g,U as h,W as i,V as j,_ as k,z as l,$ as m,k as n};
