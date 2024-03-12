/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{a as e}from"./devEnvironmentUtils.js";import{m as t,h as o}from"./mat3.js";import{I as a,f as r,c as i}from"./mat3f64.js";import{i as n}from"./mat4.js";import{I as s,c as l}from"./mat4f64.js";import{s as c,o as d,i as u,p as h,n as m,c as p,l as f,b as v,d as g,w as x,g as b,F as y,a as T}from"./vec3.js";import{c as w,Z as M,e as C,f as S}from"./vec3f64.js";import{k as O,e as E}from"./aaBoundingBox.js";import{b as A,F as _,y as j,U as I,j as R,S as P,h as z,V as L,d as G,i as N,v as B,O as F,w as D,g as V,ab as H,a as U,o as W,P as q,l as Y,r as J,a0 as k,ac as Z,$,C as X,ad as K,ae as Q,c as ee,af as te,m as oe,k as ae,s as re,p as ie,q as ne,D as se,ag as le,ah as ce,T as de,n as ue}from"./StencilUtils.js";import{c as he,o as me,s as pe,b as fe,n as ve,r as ge}from"./BufferView.js";import{t as xe,c as be,e as ye}from"./vec32.js";import{l as Te,D as we,h as Me,c as Ce,i as Se,j as Oe,k as Ee,m as Ae,o as _e}from"./DefaultMaterial_COLOR_GAMMA.js";import{i as je}from"./resourceUtils3.js";import{Z as Ie,O as Re}from"./vec2f32.js";import Pe from"../request.js";import{r as ze}from"./asyncUtils.js";import{h as Le,T as Ge}from"../core/lang.js";import Ne from"../core/Error.js";import{L as Be}from"./Logger.js";import{N as Fe}from"./NestedMap.js";import{throwIfAbortError as De}from"../core/promiseUtils.js";import{V as Ve}from"./Version.js";import{a as He}from"./Indices.js";import{r as Ue}from"./requestImageUtils.js";import{A as We}from"./Attribute.js";import{A as qe,C as Ye,a as Je}from"./basicInterfaces.js";import{G as ke}from"./Geometry.js";import{V as Ze}from"./VertexAttribute.js";import{V as $e}from"./ViewingMode.js";import{n as Xe}from"./InterleavedLayout.js";import{P as Ke,I as Qe,a as et,N as tt,V as ot,b as at,T as rt,c as it,d as nt,e as st,f as lt,g as ct,h as dt,M as ut,i as ht,j as mt,k as pt}from"./IntegerPassUniform.js";import{n as ft}from"./compilerUtils.js";import{g as vt,N as gt}from"./interfaces5.js";import{G as xt}from"./GLTextureMaterial.js";import{d as bt,D as yt,R as Tt,M as wt,v as Mt,i as Ct}from"./Material.js";import{m as St,e as Ot,T as Et,f as At,o as _t,c as jt,a as It,d as Rt,g as Pt,O as zt}from"./OrderIndependentTransparency.js";import{g as Lt}from"./verticalOffsetUtils.js";import{D as Gt}from"./DefaultBufferWriter.js";import{c as Nt,f as Bt}from"./vec4f64.js";import{T as Ft,O as Dt,V as Vt}from"./OutputHighlight.glsl.js";import{C as Ht}from"./symbolColorUtils.js";import{V as Ut}from"./VerticalOffset.glsl.js";import{B as Wt}from"./BindType.js";import{_ as qt}from"./tslib.es6.js";import{f as Yt}from"./maybe.js";import{watch as Jt,syncAndInitial as kt}from"../core/reactiveUtils.js";import{M as Zt}from"../core/scheduling.js";import{property as $t}from"../core/accessorSupport/decorators/property.js";import{subclass as Xt}from"../core/accessorSupport/decorators/subclass.js";import{g as Kt}from"./vec2.js";import{ColorFormat as Qt}from"../views/3d/webgl/ManagedFBO.js";import{a as eo,S as to,c as oo,d as ao,B as ro}from"./RenderPlugin.js";import{c as io}from"./vec2f64.js";import{C as no}from"./CameraSpace.glsl.js";import{R as so}from"./RenderState.js";import{b as lo,a as co,d as uo,l as ho,k as mo}from"./enums.js";import{a as po,T as fo}from"./Texture.js";import{s as vo}from"./vec4.js";import{p as go}from"./ShaderTechniqueConfiguration.js";function xo(e,t){const o=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(o.uniforms.add(new A("lightingAmbientSH0",((e,t)=>c(bo,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),o.code.add(vt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(o.uniforms.add(new _("lightingAmbientSH_R",((e,t)=>vo(yo,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new _("lightingAmbientSH_G",((e,t)=>vo(yo,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new _("lightingAmbientSH_B",((e,t)=>vo(yo,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),o.code.add(vt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(o.uniforms.add(new A("lightingAmbientSH0",((e,t)=>c(bo,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new _("lightingAmbientSH_R1",((e,t)=>vo(yo,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new _("lightingAmbientSH_G1",((e,t)=>vo(yo,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new _("lightingAmbientSH_B1",((e,t)=>vo(yo,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new _("lightingAmbientSH_R2",((e,t)=>vo(yo,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new _("lightingAmbientSH_G2",((e,t)=>vo(yo,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new _("lightingAmbientSH_B2",((e,t)=>vo(yo,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),o.code.add(vt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==Ke.Normal&&t.pbrMode!==Ke.Schematic||o.code.add(vt`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const bo=w(),yo=Nt();var To,wo;function Mo(e=!Le("disable-feature:high-quality-idle"),t=null){const o=new Fe;return e?(o.set(so.IDLE,To.Antialiasing,"low"!==t),o.set(so.IDLE,To.HighResolutionAtmosphere,"low"!==t),o.set(so.IDLE,To.HighQualityTransparency,!0),o.set(so.IDLE,To.SSAO,!0),o.set(so.IDLE,To.WaterReflection,!0),o.set(so.IDLE,To.PhysicalPixelRendering,!0)):(o.set(so.ANIMATING,To.HighResolutionShadows,!0),o.set(so.INTERACTING,To.HighResolutionShadows,!0)),o.set(so.IDLE,To.HighResolutionShadows,!0),o.set(so.IDLE,To.HighResolutionVoxel,!0),o}function Co(e,t){const o=e.fragment;switch(o.code.add(vt`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case wo.None:o.code.add(vt`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case wo.View:o.code.add(vt`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case wo.WindingOrder:o.code.add(vt`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ft(t.doubleSidedMode);case wo.COUNT:}}function So({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:a,emissiveTexture:r,emissiveFactor:i,occlusionTexture:n}){return null==e&&null==t&&null==r&&(null==i||d(i,M))&&null==n&&(null==a||1===a)&&(null==o||1===o)}function Oo({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:a,emissiveTexture:r,emissiveFactor:i,occlusionTexture:n}){return null==e&&null==t&&null==r&&(null==i||d(i,M))&&null==n&&(null==a||1===a)&&(null==o||1===o||0===o)}!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(To||(To={})),function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(wo||(wo={}));const Eo=[1,1,.5],Ao=[0,.6,.2],_o=[0,1,.2];function jo(e){e.vertex.code.add(vt`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Io(e){e.vertex.code.add(vt`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${vt.int(Ht.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${vt.int(Ht.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${vt.int(Ht.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${vt.int(Ht.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ro(e,t){t.hasSymbolColors?(e.include(Io),e.attributes.add(Ze.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(vt`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Qe("colorMixMode",(e=>bt[e.colorMixMode]))),e.vertex.code.add(vt`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Po(e){e.fragment.code.add(vt`
    #define discardOrAdjustAlpha(color) { if (color.a < ${vt.float(j)}) { discard; } }
  `)}class zo extends I{constructor(e,t){super(e,"float",Wt.Draw,((o,a,r)=>o.setUniform1f(e,t(a,r))))}}function Lo(e,t){No(e,t,new R("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function Go(e,t){No(e,t,new zo("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function No(e,t,o){const a=e.fragment;switch(t.alphaDiscardMode!==qe.Mask&&t.alphaDiscardMode!==qe.MaskBlend||a.uniforms.add(o),t.alphaDiscardMode){case qe.Blend:return e.include(Po);case qe.Opaque:a.code.add(vt`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case qe.Mask:a.code.add(vt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case qe.MaskBlend:e.fragment.code.add(vt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Bo(e,t){const{vertex:o,fragment:a}=e,r=t.hasColorTexture&&t.alphaDiscardMode!==qe.Opaque;switch(t.output){case P.LinearDepth:case P.Shadow:case P.ShadowHighlight:case P.ShadowExcludeHighlight:case P.ObjectAndLayerIdColor:z(o,t),e.include(Ft,t),e.include(et,t),e.include(L,t),e.include(B,t),e.include(N,t),e.include(F,t),D(e),e.varyings.add("depth","float"),r&&a.uniforms.add(new G("tex",(e=>e.texture))),o.code.add(vt`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(Lo,t),a.code.add(vt`
          void main(void) {
            discardBySlice(vpos);
            ${r?vt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?vt`colorUV`:vt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===P.ObjectAndLayerIdColor?vt`outputObjectAndLayerIdColor();`:vt`outputDepth(depth);`}
          }
        `);break;case P.Normal:{z(o,t),e.include(Ft,t),e.include(tt,t),e.include(ot,t),e.include(et,t),e.include(L,t),r&&a.uniforms.add(new G("tex",(e=>e.texture))),t.normalType===at.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===at.Attribute||t.normalType===at.Compressed;o.code.add(vt`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?vt`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:vt`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(N,t),e.include(Lo,t),a.code.add(vt`
          void main() {
            discardBySlice(vpos);
            ${r?vt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?vt`colorUV`:vt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===at.ScreenDerivative?vt`vec3 normal = screenDerivativeNormal(vPositionView);`:vt`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case P.Highlight:z(o,t),e.include(Ft,t),e.include(et,t),e.include(L,t),r&&a.uniforms.add(new G("tex",(e=>e.texture))),o.code.add(vt`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(N,t),e.include(Lo,t),e.include(Dt,t),a.code.add(vt`
          void main() {
            discardBySlice(vpos);
            ${r?vt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?vt`colorUV`:vt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Fo(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(Ze.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===wo.WindingOrder?o.code.add(vt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(vt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(vt`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==rt.None&&(e.include(it,t),o.uniforms.add(t.pbrTextureBindType===Wt.Pass?new G("normalTexture",(e=>e.textureNormal)):new nt("normalTexture",(e=>e.textureNormal))),o.code.add(vt`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}class Do extends I{constructor(e,t){super(e,"vec2",Wt.Draw,((o,a,r,i)=>o.setUniform2fv(e,t(a,r,i))))}}const Vo=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new V,t=e.fragment;return e.include(eo),t.include(H),t.uniforms.add(new G("depthMap",(e=>e.depthTexture)),new nt("tex",(e=>e.colorTexture)),new Do("blurSize",(e=>e.blurSize)),new R("projScale",((e,t)=>{const o=u(t.camera.eye,t.camera.center);return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale})),new U("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(vt`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromDepthTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${vt.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(vt`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromDepthTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${vt.int(4)}; r <= ${vt.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}},Symbol.toStringTag,{value:"Module"}));class Ho extends W{initializeProgram(e){return new q(e.rctx,Ho.shader.get().build(),yt)}initializePipeline(){return St({colorWrite:Ot})}}Ho.shader=new Y(Vo,(()=>Promise.resolve().then((()=>Vo))));class Uo extends gt{constructor(){super(...arguments),this.projScale=1}}class Wo extends Uo{constructor(){super(...arguments),this.intensity=1}}class qo extends gt{}class Yo extends qo{constructor(){super(...arguments),this.blurSize=io()}}function Jo(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const ko=io(),Zo=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new V,t=e.fragment;return e.include(eo),e.include(no),t.include(H),t.uniforms.add(new R("radius",((e,t)=>Jo(t.camera)))),t.code.add(vt`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(vt`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new U("nearFar",((e,t)=>t.camera.nearFar)),new G("normalMap",(e=>e.normalTexture)),new G("depthMap",(e=>e.depthTexture)),new R("projScale",(e=>e.projScale)),new G("rnm",(e=>e.noiseTexture)),new U("rnmScale",((e,t)=>Kt(ko,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new R("intensity",(e=>e.intensity)),new U("screenSize",((e,t)=>Kt(ko,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(vt`
    void main(void) {
      float currentPixelDepth = linearDepthFromDepthTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${vt.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromDepthTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${vt.int(16)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e},getRadius:Jo},Symbol.toStringTag,{value:"Module"}));class $o extends W{initializeProgram(e){return new q(e.rctx,$o.shader.get().build(),yt)}initializePipeline(){return St({colorWrite:Ot})}}$o.shader=new Y(Zo,(()=>Promise.resolve().then((()=>Zo))));const Xo=2;let Ko=class extends to{constructor(e){super(e),this._context=null,this._passParameters=new Wo,this._drawParameters=new Yo,this.produces=new Map([[J.SSAO,()=>this._produces()]])}_produces(){return null!=this._enableTime&&null!=this._context}consumes(){return this._produces()?oo:ao}initializeRenderContext(e){this._context=e,this.addHandles([Jt((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(To.SSAO)),(e=>e?this._enable():this._disable()),kt)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=Yt(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new po;t.wrapMode=lo.CLAMP_TO_EDGE,t.pixelFormat=co.RGB,t.wrapMode=lo.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new fo(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire($o)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(Ho)),this._enableTime=Zt(0),this._context?.requestRender()}renderNode(e,t,o){const a=e.bindParameters,r=o?.get("normals"),i=r?.getTexture(),n=r?.getTexture(uo);if(null==this._enableTime||null==this._context||!i||!n)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const s=e.rctx,l=a.camera,c=this.view.qualitySettings.fadeDuration,d=c>0?Math.min(c,e.time-this._enableTime)/c:1;this._passParameters.normalTexture=i,this._passParameters.depthTexture=n,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Qo/Jo(l)**6*d;const u=l.fullViewport[2],h=l.fullViewport[3],m=Math.round(u/Xo),p=Math.round(h/Xo),f=this._context.fbos,v=f.acquire(u,h,"ssao input",Qt.RG);s.setViewport(0,0,u,h),s.bindTechnique(this._ssaoTechnique,a,this._passParameters,this._drawParameters),s.screen.draw();const g=f.acquire(m,p,"ssao blur",Qt.RED);this._drawParameters.colorTexture=v.getTexture(),Kt(this._drawParameters.blurSize,0,Xo/h),s.bindTechnique(this._blurTechnique,a,this._passParameters,this._drawParameters),s.setViewport(0,0,m,p),s.screen.draw(),v.release();const x=f.acquire(m,p,"ssao",Qt.RED);return s.setViewport(0,0,u,h),s.setClearColor(1,1,1,0),s.clear(ho.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=g.getTexture(),Kt(this._drawParameters.blurSize,Xo/u,0),s.bindTechnique(this._blurTechnique,a,this._passParameters,this._drawParameters),s.setViewport(0,0,m,p),s.screen.draw(),s.setViewport4fv(l.fullViewport),g.release(),d<1&&this._context.requestRender(),x}};qt([$t({constructOnly:!0})],Ko.prototype,"view",void 0),qt([$t()],Ko.prototype,"_context",void 0),Ko=qt([Xt("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Ko);const Qo=.5;function ea(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new G("ssaoTex",((e,t)=>t.ssao?.getTexture()))),o.constants.add("blurSizePixelsInverse","float",1/Xo),o.code.add(vt`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(vt`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function ta(e){e.constants.add("ambientBoostFactor","float",st)}function oa(e){e.uniforms.add(new R("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function aa(e,t){const o=e.fragment;switch(e.include(ea,t),t.pbrMode!==Ke.Disabled&&e.include(lt,t),e.include(xo,t),e.include(k),o.code.add(vt`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===Ke.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),ta(o),oa(o),ct(o),o.code.add(vt`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?vt`normalize(vPosWorld)`:vt`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),dt(o),o.code.add(vt`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case Ke.Disabled:case Ke.WaterOnIntegratedMesh:case Ke.Water:e.include(ut),o.code.add(vt`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case Ke.Normal:case Ke.Schematic:o.code.add(vt`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(vt`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new ro("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(vt`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new R("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new R("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),o.code.add(vt`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(vt`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==Ke.Schematic||t.hasColorTexture?vt`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:vt`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case Ke.Simplified:case Ke.TerrainWithWater:e.include(ut),o.code.add(vt`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:ft(t.pbrMode);case Ke.COUNT:}}class ra extends I{constructor(e,t,o){super(e,"mat4",Wt.Draw,((o,a,r,i)=>o.setUniformMatrix4fv(e,t(a,r,i))),o)}}class ia extends I{constructor(e,t,o){super(e,"mat4",Wt.Pass,((o,a,r)=>o.setUniformMatrix4fv(e,t(a,r))),o)}}class na extends gt{constructor(){super(...arguments),this.modelTransformation=s}}class sa extends na{constructor(){super(...arguments),this.origin=w()}}function la(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new ia("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),da(e))}function ca(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new ra("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),da(e))}function da(e){const t=e.fragment;t.include(Z),t.uniforms.add(new G("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new Qe("numCascades",((e,t)=>t.shadowMap.numCascades)),new _("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(vt`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function ua(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new $("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??a))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(vt`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(vt`void forwardColorUV(){}`)}function ha(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==rt.None?(e.vertex.uniforms.add(new $("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(vt`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(vt`void forwardNormalUV(){}`)}function ma(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==rt.None?(e.vertex.uniforms.add(new $("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??a))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(vt`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(vt`void forwardEmissiveUV(){}`)}function pa(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==rt.None?(e.vertex.uniforms.add(new $("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??a))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(vt`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(vt`void forwardOcclusionUV(){}`)}function fa(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==rt.None?(e.vertex.uniforms.add(new $("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??a))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(vt`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(vt`void forwardMetallicRoughnessUV(){}`)}function va(e){e.include(X),e.code.add(vt`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${vt.int(Ht.Multiply)}) {
        return allMixed;
      }
      if (mode == ${vt.int(Ht.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${vt.int(Ht.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${vt.int(Ht.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${vt.int(Ht.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}const ga=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new V,{vertex:o,fragment:a,varyings:r}=t;if(z(o,e),t.include(K),r.add("vpos","vec3"),t.include(L,e),t.include(Q,e),t.include(Ut,e),t.include(ua,e),e.output===P.Color||e.output===P.Alpha){t.include(ha,e),t.include(ma,e),t.include(pa,e),t.include(fa,e),ee(o,e),t.include(tt,e),t.include(Ft,e);const a=e.normalType===at.Attribute||e.normalType===at.Compressed;a&&e.offsetBackfaces&&t.include(jo),t.include(Fo,e),t.include(ot,e),e.instancedColor&&t.attributes.add(Ze.INSTANCECOLOR,"vec4"),r.add("vPositionLocal","vec3"),t.include(et,e),t.include(te,e),t.include(Ro,e),t.include(Vt,e),o.uniforms.add(new _("externalColor",(e=>e.externalColor))),r.add("vcolorExt","vec4"),e.multipassEnabled&&r.add("depth","float"),o.code.add(vt`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${vt.float(j)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?vt`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case P.Alpha:t.include(N,e),t.include(Lo,e),t.include(oe,e),a.uniforms.add(new R("opacity",(e=>e.opacity)),new R("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&a.uniforms.add(new G("tex",(e=>e.texture))),a.include(va),a.code.add(vt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?vt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?vt`colorUV`:vt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:vt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?vt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:vt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case P.Color:t.include(N,e),t.include(aa,e),t.include(ea,e),t.include(Lo,e),t.include(e.instancedDoublePrecision?la:ca,e),t.include(oe,e),ee(a,e),a.uniforms.add(o.uniforms.get("localOrigin"),new A("ambient",(e=>e.ambient)),new A("diffuse",(e=>e.diffuse)),new R("opacity",(e=>e.opacity)),new R("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&a.uniforms.add(new G("tex",(e=>e.texture))),t.include(ht,e),t.include(lt,e),a.include(va),t.include(Co,e),ta(a),oa(a),dt(a),a.code.add(vt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?vt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?vt`colorUV`:vt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:vt`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===at.ScreenDerivative?vt`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:vt`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===Ke.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?vt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:vt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?vt`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?vt`normalUV`:"vuv0"});`:vt`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?vt`normalize(posWorld);`:vt`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?vt`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===Ke.Normal||e.pbrMode===Ke.Schematic?vt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?vt`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:vt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Et.Color?vt`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(Bo,e),t}},Symbol.toStringTag,{value:"Module"}));class xa extends pt{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=C(Eo),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Ye.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=S(0,0,0),this.instancedDoublePrecision=!1,this.normalType=at.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=S(.2,.2,.2),this.diffuse=S(.8,.8,.8),this.externalColor=Bt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=w(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Je.Less,this.textureAlphaMode=qe.Blend,this.textureAlphaCutoff=ae,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Tt.Occlude,this.isDecoration=!1}}class ba extends mt{constructor(){super(...arguments),this.origin=w(),this.slicePlaneLocalOrigin=this.origin}}class ya extends W{initializeConfiguration(e,t){t.spherical=e.viewingMode===$e.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?rt.Default:rt.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,ya.shader)}_initializeProgram(e,t){return new q(e.rctx,t.get().build(this.configuration),yt)}_convertDepthTestFunction(e){return e===Je.Lequal?mo.LEQUAL:mo.LESS}_makePipeline(e,t){const o=this.configuration,a=e===Et.NONE,r=e===Et.FrontFace;return St({blending:o.output!==P.Color&&o.output!==P.Alpha||!o.transparent?null:a?At:_t(e),culling:Ta(o)?jt(o.cullFace):null,depthTest:{func:It(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(a||r)&&o.writeDepth?Rt:null,colorWrite:Ot,stencilWrite:o.hasOccludees?re:null,stencilTest:o.hasOccludees?t?ie:ne:null,polygonOffset:a||r?null:Pt(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function Ta(e){return e.cullFace!==Ye.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}ya.shader=new Y(ga,(()=>Promise.resolve().then((()=>ga))));class wa extends se{constructor(){super(...arguments),this.output=P.Color,this.alphaDiscardMode=qe.Opaque,this.doubleSidedMode=wo.None,this.pbrMode=Ke.Disabled,this.cullFace=Ye.None,this.transparencyPassType=Et.NONE,this.normalType=at.Attribute,this.textureCoordinateType=rt.None,this.customDepthTest=Je.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}qt([go({count:P.COUNT})],wa.prototype,"output",void 0),qt([go({count:qe.COUNT})],wa.prototype,"alphaDiscardMode",void 0),qt([go({count:wo.COUNT})],wa.prototype,"doubleSidedMode",void 0),qt([go({count:Ke.COUNT})],wa.prototype,"pbrMode",void 0),qt([go({count:Ye.COUNT})],wa.prototype,"cullFace",void 0),qt([go({count:Et.COUNT})],wa.prototype,"transparencyPassType",void 0),qt([go({count:at.COUNT})],wa.prototype,"normalType",void 0),qt([go({count:rt.COUNT})],wa.prototype,"textureCoordinateType",void 0),qt([go({count:Je.COUNT})],wa.prototype,"customDepthTest",void 0),qt([go()],wa.prototype,"spherical",void 0),qt([go()],wa.prototype,"hasVertexColors",void 0),qt([go()],wa.prototype,"hasSymbolColors",void 0),qt([go()],wa.prototype,"hasVerticalOffset",void 0),qt([go()],wa.prototype,"hasSlicePlane",void 0),qt([go()],wa.prototype,"hasSliceHighlight",void 0),qt([go()],wa.prototype,"hasColorTexture",void 0),qt([go()],wa.prototype,"hasMetallicRoughnessTexture",void 0),qt([go()],wa.prototype,"hasEmissionTexture",void 0),qt([go()],wa.prototype,"hasOcclusionTexture",void 0),qt([go()],wa.prototype,"hasNormalTexture",void 0),qt([go()],wa.prototype,"hasScreenSizePerspective",void 0),qt([go()],wa.prototype,"hasVertexTangents",void 0),qt([go()],wa.prototype,"hasOccludees",void 0),qt([go()],wa.prototype,"multipassEnabled",void 0),qt([go()],wa.prototype,"hasModelTransformation",void 0),qt([go()],wa.prototype,"offsetBackfaces",void 0),qt([go()],wa.prototype,"vvSize",void 0),qt([go()],wa.prototype,"vvColor",void 0),qt([go()],wa.prototype,"receiveShadows",void 0),qt([go()],wa.prototype,"receiveAmbientOcclusion",void 0),qt([go()],wa.prototype,"textureAlphaPremultiplied",void 0),qt([go()],wa.prototype,"instanced",void 0),qt([go()],wa.prototype,"instancedColor",void 0),qt([go()],wa.prototype,"objectAndLayerIdColorInstanced",void 0),qt([go()],wa.prototype,"instancedDoublePrecision",void 0),qt([go()],wa.prototype,"doublePrecisionRequiresObfuscation",void 0),qt([go()],wa.prototype,"writeDepth",void 0),qt([go()],wa.prototype,"transparent",void 0),qt([go()],wa.prototype,"enableOffset",void 0),qt([go()],wa.prototype,"cullAboveGround",void 0),qt([go()],wa.prototype,"snowCover",void 0),qt([go()],wa.prototype,"hasColorTextureTransform",void 0),qt([go()],wa.prototype,"hasEmissionTextureTransform",void 0),qt([go()],wa.prototype,"hasNormalTextureTransform",void 0),qt([go()],wa.prototype,"hasOcclusionTextureTransform",void 0),qt([go()],wa.prototype,"hasMetallicRoughnessTextureTransform",void 0),qt([go({constValue:!1})],wa.prototype,"occlusionPass",void 0),qt([go({constValue:!0})],wa.prototype,"hasVvInstancing",void 0),qt([go({constValue:!1})],wa.prototype,"useCustomDTRExponentForWater",void 0),qt([go({constValue:!1})],wa.prototype,"supportsTextureAtlas",void 0),qt([go({constValue:!0})],wa.prototype,"useFillLights",void 0);const Ma=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new V,{vertex:o,fragment:a,varyings:r}=t;return z(o,e),t.include(K),r.add("vpos","vec3"),t.include(L,e),t.include(Q,e),t.include(Ut,e),e.output!==P.Color&&e.output!==P.Alpha||(ee(t.vertex,e),t.include(tt,e),t.include(Ft,e),e.offsetBackfaces&&t.include(jo),e.instancedColor&&t.attributes.add(Ze.INSTANCECOLOR,"vec4"),r.add("vNormalWorld","vec3"),r.add("localvpos","vec3"),e.multipassEnabled&&r.add("depth","float"),t.include(et,e),t.include(te,e),t.include(Ro,e),t.include(Vt,e),o.uniforms.add(new _("externalColor",(e=>e.externalColor))),r.add("vcolorExt","vec4"),o.code.add(vt`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${vt.float(j)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?vt`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===P.Alpha&&(t.include(N,e),t.include(Lo,e),t.include(oe,e),a.uniforms.add(new R("opacity",(e=>e.opacity)),new R("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&a.uniforms.add(new G("tex",(e=>e.texture))),a.include(va),a.code.add(vt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?vt`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?vt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?vt`colorUV`:vt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:vt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?vt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:vt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===P.Color&&(t.include(N,e),t.include(aa,e),t.include(ea,e),t.include(Lo,e),t.include(e.instancedDoublePrecision?la:ca,e),t.include(oe,e),ee(t.fragment,e),ct(a),ta(a),oa(a),a.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new A("ambient",(e=>e.ambient)),new A("diffuse",(e=>e.diffuse)),new R("opacity",(e=>e.opacity)),new R("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&a.uniforms.add(new G("tex",(e=>e.texture))),t.include(ht,e),t.include(lt,e),a.include(va),dt(a),a.code.add(vt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?vt`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?vt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?vt`colorUV`:vt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:vt`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===Ke.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?vt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:vt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?vt`albedo = mix(albedo, vec3(1), 0.9);`:vt``}
        ${vt`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===Ke.Normal||e.pbrMode===Ke.Schematic?e.spherical?vt`vec3 normalGround = normalize(vpos + localOrigin);`:vt`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:vt``}
        ${e.pbrMode===Ke.Normal||e.pbrMode===Ke.Schematic?vt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?vt`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:vt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Et.Color?vt`fragColor = premultiplyAlpha(fragColor);`:vt``}
      }
    `)),t.include(Bo,e),t}},Symbol.toStringTag,{value:"Module"}));class Ca extends ya{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=at.Attribute,t.doubleSidedMode=wo.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Ca.shader)}}Ca.shader=new Y(Ma,(()=>Promise.resolve().then((()=>Ma))));class Sa extends wt{constructor(e){super(e,Ea),this.supportsEdges=!0,this.produces=new Map([[J.OPAQUE_MATERIAL,e=>(le(e)||ce(e))&&!this.parameters.transparent],[J.TRANSPARENT_MATERIAL,e=>(le(e)||ce(e))&&this.parameters.transparent&&this.parameters.writeDepth],[J.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(le(e)||ce(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new wa,this._vertexBufferLayout=function(e){const t=Xe().vec3f(Ze.POSITION);return e.normalType===at.Compressed?t.vec2i16(Ze.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(Ze.NORMAL),e.hasVertexTangents&&t.vec4f(Ze.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(Ze.UV0),e.hasVertexColors&&t.vec4u8(Ze.COLOR),e.hasSymbolColors&&t.vec4u8(Ze.SYMBOLCOLOR),Le("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(Ze.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==P.Shadow&&e!==P.ShadowExcludeHighlight&&e!==P.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:a,vvColor:r}=e,i="replace"===e.colorMixMode,n=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||r||a;return o&&l?i||n:o?i?s:n:l?i||n:i?s:n}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Ye.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==P.Color&&e!==P.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=wo.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?wo.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?wo.WindingOrder:wo.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Ke.Schematic:Ke.Normal:Ke.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<zt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,o,a,r,i){if(null!=this.parameters.verticalOffset){const e=o.camera;c(Pa,t[12],t[13],t[14]);let i=null;switch(o.viewingMode){case $e.Global:i=m(Ia,Pa);break;case $e.Local:i=h(Ia,ja)}let n=0;const s=p(za,Pa,e.eye),l=f(s),d=v(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=g(i,d)),n+=Mt(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),v(i,i,n),x(Ra,i,o.transform.inverseRotation),a=p(Aa,a,Ra),r=p(_a,r,Ra)}Ct(e,o,a,r,Lt(o.verticalOffset),i)}createGLMaterial(e){return new Oa(e)}createBufferWriter(){return new Gt(this._vertexBufferLayout)}}class Oa extends xt{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==P.Color&&this._output!==P.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return c(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Ca:ya,e)}}const Ea=new class extends xa{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},Aa=w(),_a=w(),ja=S(0,0,1),Ia=w(),Ra=w(),Pa=w(),za=w();function La(e){if(null==e)return null;const o=null!=e.offset?e.offset:Ie,a=null!=e.rotation?e.rotation:0,n=null!=e.scale?e.scale:Re,s=r(1,0,0,0,1,0,o[0],o[1],1),l=r(Math.cos(a),-Math.sin(a),0,Math.sin(a),Math.cos(a),0,0,0,1),c=r(n[0],0,0,0,n[1],0,0,0,1),d=i();return t(d,l,c),t(d,s,d),d}class Ga{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Na{constructor(e,t,o){this.name=e,this.lodThreshold=t,this.pivotOffset=o,this.stageResources=new Ga,this.numberOfVertices=0}}const Ba=()=>Be.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Fa(e,t){const o=await async function(e,t){const o=t?.streamDataRequester;if(o)return async function(e,t,o){const a=await ze(t.request(e,"json",o));return!0===a.ok?a.value:(De(a.error),void Da(a.error.details.url))}(e,o,t);const a=await ze(Pe(e,t));return!0===a.ok?a.value.data:(De(a.error),void Da(a.error))}(e,t),a=await async function(e,t){const o=new Array;for(const a in e){const r=e[a],i=r.images[0].data;if(!i){Ba().warn("Externally referenced texture data is not yet supported");continue}const n=r.encoding+";base64,"+i,s="/textureDefinitions/"+a,l="rgba"===r.channels?r.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:lo.REPEAT,t:lo.REPEAT},preMultiplyAlpha:Ua(l)!==qe.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):Ue(n,t);o.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const a=await Promise.all(o),r={};for(const e of a)r[e.refId]=e;return r}(o.textureDefinitions??{},t);let r=0;for(const e in a)if(a.hasOwnProperty(e)){const t=a[e];r+=t?.image?t.image.width*t.image.height*4:0}return{resource:o,textures:a,size:r+Ge(o)}}function Da(e){throw new Ne("",`Request for object resource failed: ${e}`)}function Va(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||(Ba().warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ba().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),a=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ba().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),a=!1)):(Ba().warn(`Indexed geometry does not specify face indices for '${o}' attribute`),a=!1)}}else Ba().warn("Indexed geometries must specify faces"),a=!1;break}default:Ba().warn(`Unsupported topology '${o}'`),a=!1}e.params.material||(Ba().warn("Geometry requires material"),a=!1);const r=e.params.vertexAttributes;for(const e in r)r[e].values||(Ba().warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function Ha(e){const t=O();return e.forEach((e=>{const o=e.boundingInfo;null!=o&&(E(t,o.bbMin),E(t,o.bbMax))})),t}function Ua(e){switch(e){case"mask":return qe.Mask;case"maskAndTransparency":return qe.MaskBlend;case"none":return qe.Opaque;default:return qe.Blend}}function Wa(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const qa=new Ve(1,2,"wosr");async function Ya(t,o){const a=Ja(e(t));if("wosr"===a.fileType){const e=await(o.cache?o.cache.loadWOSR(a.url,o):Fa(a.url,o)),{engineResources:t,referenceBoundingBox:r}=function(e,t){const o=new Array,a=new Array,r=new Array,i=new Fe,n=e.resource,s=Ve.parse(n.version||"1.0","wosr");qa.validate(s);const l=n.model.name,c=n.model.geometries,d=n.materialDefinitions??{},u=e.textures;let h=0;const m=new Map;for(let e=0;e<c.length;e++){const n=c[e];if(!Va(n))continue;const s=Wa(n),l=n.params.vertexAttributes,p=[],f=e=>{if("PerAttributeArray"===n.params.topology)return null;const t=n.params.faces;for(const o in t)if(o===e)return t[o].values;return null},v=l[Ze.POSITION],g=v.values.length/v.valuesPerElement;for(const e in l){const t=l[e],o=t.values,a=f(e)??He(g);p.push([e,new We(o,a,t.valuesPerElement,!0)])}const x=s.texture,b=u&&u[x];if(b&&!m.has(x)){const{image:e,parameters:t}=b,o=new de(e,t);a.push(o),m.set(x,o)}const y=m.get(x),T=y?y.id:void 0,w=s.material;let M=i.get(w,x);if(null==M){const e=d[w.substring(w.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=b&&b.alphaChannelUsage,a=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,r=b?Ua(b.alphaChannelUsage):void 0,n={ambient:C(e.diffuse),diffuse:C(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:r,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:Ye.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:b?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(n,t.materialParameters),M=new Sa(n),i.set(w,x,M)}r.push(M);const S=new ke(M,p);h+=p.find((e=>e[0]===Ze.POSITION))?.[1]?.indices.length??0,o.push(S)}return{engineResources:[{name:l,stageResources:{textures:a,materials:r,geometries:o},pivotOffset:n.model.pivotOffset,numberOfVertices:h,lodThreshold:null}],referenceBoundingBox:Ha(o)}}(e,o);return{lods:t,referenceBoundingBox:r,isEsriSymbolResource:!1,isWosr:!0}}const r=await(o.cache?o.cache.loadGLTF(a.url,o,!!o.usePBR):Te(new we(o.streamDataRequester),a.url,o,o.usePBR)),i=r.model.meta?.ESRI_proxyEllipsoid,s=r.meta.isEsriSymbolResource&&null!=i&&"EsriRealisticTreesStyle"===r.meta.ESRI_webstyle;s&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,function(e,t){for(let o=0;o<e.model.lods.length;++o){const a=e.model.lods[o];for(const r of a.parts){const a=r.attributes.normal;if(null==a)return;const i=r.attributes.position,s=i.count,c=w(),d=w(),u=w(),h=new Uint8Array(4*s),v=new Float64Array(3*s),g=n(l(),r.transform);let x=0,M=0;for(let n=0;n<s;n++){i.getVec(n,d),a.getVec(n,c),b(d,d,r.transform),p(u,d,t.center),y(u,u,t.radius);const s=u[2],l=f(u),w=Math.min(.45+.55*l*l,1);y(u,u,t.radius),null!==g&&b(u,u,g),m(u,u),o+1!==e.model.lods.length&&e.model.lods.length>1&&T(u,u,c,s>-1?.2:Math.min(-4*s-3.8,1)),v[x]=u[0],v[x+1]=u[1],v[x+2]=u[2],x+=3,h[M]=255*w,h[M+1]=255*w,h[M+2]=255*w,h[M+3]=255,M+=4}r.attributes.normal=new fe(v),r.attributes.color=new me(h)}}}(r,i));const c=!!o.usePBR,d=r.meta.isEsriSymbolResource?{usePBR:c,isSchematic:!1,treeRendering:s,mrrFactors:[..._o]}:{usePBR:c,isSchematic:!1,treeRendering:!1,mrrFactors:[...Eo]},u={...o.materialParameters,treeRendering:s},{engineResources:h,referenceBoundingBox:v}=ka(r,d,u,o.skipHighLods&&null==a.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:a.specifiedLodIndex});return{lods:h,referenceBoundingBox:v,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Ja(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ka(e,t,a,r){const i=e.model,n=new Array,s=new Map,l=new Map,c=i.lods.length,d=O();return i.lods.forEach(((e,u)=>{const h=!0===r.skipHighLods&&(c>1&&0===u||c>3&&1===u)||!1===r.skipHighLods&&null!=r.singleLodIndex&&u!==r.singleLodIndex;if(h&&0!==u)return;const m=new Na(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const r=h?new Sa({}):function(e,t,o,a,r,i,n){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),c=null!=t.attributes.texCoord0,d=null!=t.attributes.normal;if(null==l)return null;const u=function(e){switch(e){case"BLEND":return qe.Blend;case"MASK":return qe.Mask;case"OPAQUE":case null:case void 0:return qe.Opaque}}(l.alphaMode);if(!i.has(s)){if(c){const t=(t,o=!1)=>{if(null!=t&&!n.has(t)){const a=e.textures.get(t);if(null!=a){const e=a.data;n.set(t,new de(je(e)?e.data:e,{...a.parameters,preMultiplyAlpha:!je(e)&&o,encoding:je(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,u!==qe.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const o=l.color[0]**(1/Me),h=l.color[1]**(1/Me),m=l.color[2]**(1/Me),p=l.emissiveFactor[0]**(1/Me),f=l.emissiveFactor[1]**(1/Me),v=l.emissiveFactor[2]**(1/Me),g=null!=l.textureColor&&c?n.get(l.textureColor):null,x=So({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion});i.set(s,new Sa({...a,transparent:u===qe.Blend,customDepthTest:Je.Lequal,textureAlphaMode:u,textureAlphaCutoff:l.alphaCutoff,diffuse:[o,h,m],ambient:[o,h,m],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?Ye.None:Ye.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?at.Attribute:at.ScreenDerivative,castShadows:!0,textureId:null!=g?g.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&c?n.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=g&&!!g.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&c?n.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&c?n.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&c?n.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[p,f,v],mrrFactors:x?[...Ao]:[l.metallicFactor,l.roughnessFactor,a.mrrFactors[2]],isSchematic:x,colorTextureTransformMatrix:La(l.colorTextureTransform),normalTextureTransformMatrix:La(l.normalTextureTransform),occlusionTextureTransformMatrix:La(l.occlusionTextureTransform),emissiveTextureTransformMatrix:La(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:La(l.metallicRoughnessTextureTransform),...r}))}const h=i.get(s);if(o.stageResources.materials.push(h),c){const e=e=>{null!=e&&o.stageResources.textures.push(n.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return h}(i,e,m,t,a,s,l),{geometry:n,vertexCount:c}=function(e,t){const a=e.attributes.position.count,r=Ce(e.indices||a,e.primitiveType),i=ue(3*a),{typedBuffer:n,typedBufferStride:s}=e.attributes.position;xe(i,n,e.transform,3,s);const l=[[Ze.POSITION,new We(i,r,3,!0)]];if(null!=e.attributes.normal){const t=ue(3*a),{typedBuffer:i,typedBufferStride:n}=e.attributes.normal;o(Za,e.transform),be(t,i,Za,3,n),l.push([Ze.NORMAL,new We(t,r,3,!0)])}if(null!=e.attributes.tangent){const t=ue(4*a),{typedBuffer:i,typedBufferStride:n}=e.attributes.tangent;o(Za,e.transform),Se(t,i,Za,4,n),l.push([Ze.TANGENT,new We(t,r,4,!0)])}if(null!=e.attributes.texCoord0){const t=ue(2*a),{typedBuffer:o,typedBufferStride:i}=e.attributes.texCoord0;Oe(t,o,2,i),l.push([Ze.UV0,new We(t,r,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*a);4===e.attributes.color.elementCount?e.attributes.color instanceof he?Ee(t,e.attributes.color,255):e.attributes.color instanceof me?Ae(t,e.attributes.color):e.attributes.color instanceof pe&&Ee(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof fe?ye(t,e.attributes.color,255,4):e.attributes.color instanceof ve?_e(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof ge&&ye(t,e.attributes.color,1/256,4)),l.push([Ze.COLOR,new We(t,r,4,!0)])}return{geometry:new ke(t,l),vertexCount:a}}(e,null!=r?r:new Sa({})),p=n.boundingInfo;null!=p&&0===u&&(E(d,p.bbMin),E(d,p.bbMax)),null!=r&&(m.stageResources.geometries.push(n),m.numberOfVertices+=c)})),h||n.push(m)})),{engineResources:n,referenceBoundingBox:d}}const Za=i(),$a=Object.freeze(Object.defineProperty({__proto__:null,fetch:Ya,gltfToEngineResources:ka,parseUrl:Ja},Symbol.toStringTag,{value:"Module"}));export{Fo as C,Po as D,aa as E,Do as F,va as M,Co as N,To as R,Ko as S,Oo as a,Eo as b,Sa as c,Ao as d,ba as e,Ya as f,La as g,ca as h,ea as i,ta as j,oa as k,wo as l,xo as m,Fa as n,sa as o,Io as p,zo as q,Go as r,la as s,Mo as t,So as u,$a as v};
