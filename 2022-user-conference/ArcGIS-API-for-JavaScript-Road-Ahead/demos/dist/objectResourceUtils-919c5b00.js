import { a as a$8 } from './devEnvironmentUtils-0f97b5c2.js';
import { fp as n$2, a as e$3, a5 as o$3, a3 as n$3, O as t$2, al as o$4, G as r$2, et as r$4, e9 as n$5, ac as r$5, ea as r$6, eD as e$d, dR as l$1, dx as r$7, cW as z$1, cV as e$h, at as s$4, au as g, cU as P$2, fr as S$1, C as s$5, ix as r$8, hT as h$6, hP as b$1, L as L$1, e as e$i, bb as w$1, s as s$6, e8 as e$j, fd as B$2, ha as m$4, hL as g$2, fD as h$7, eI as O$2, iy as i$b, d2 as A$2 } from './_virtual_index-64b818a8.js';
import { o as o$6, e as e$m } from './mat4f64-2ebd3575.js';
import { i as i$9, c as c$9, u as u$2, x as x$3, L as L$3, O as O$1, E as E$3 } from './BufferView-e399da5f.js';
import { t as t$7, r as r$a, f as f$2, e as e$l } from './vec33-84eb2a4f.js';
import { c as c$8, n as n$9, o as o$i, r as r$9, a as r$b, b as n$a, d as o$j, e as e$k, t as t$8, i as i$a, f as o$k, g as n$b } from './DefaultMaterial_COLOR_GAMMA-0bb181c0.js';
import { r as o$2, v as r$1, C as C$1, o as o$d, n as n$8, w as e$e, W, c as c$7, A as A$1, h as h$3, f as l$2, d as a$6, _ as _$1, g as a$7, S, a as t$6 } from './requestImageUtils-c1c7cdb8.js';
import { n as n$1, h as e$4, i as t$1, aP as c$2, aQ as o$1, w as h$1, d as e$5, aR as e$6, aJ as U$3, D as t$3, o as o$5, A as v$2, x as r$3, aS as d$1, aa as s$1, m as m$1, y as u$1, ac as a$2, aT as o$7, aU as n$4, aV as i$6, $ as o$8, b as e$7, aW as o$9, aX as a$3, aY as e$8, as as a$4, aZ as p$1, a_ as p$2, k as e$9, ay as m$2, au as n$6, ax as m$3, aN as c$3, _ as t$4, e as e$a, aw as o$a, at as s$2, z as e$b, c as o$b, aM as o$c, a$ as a$5, v as c$4, av as i$7, al as e$c, C as n$7, b0 as h$2, az as c$5, b1 as p$3, aq as c$6, t as t$5, b2 as f, N as o$e, q as o$f, f as e$f, aA as i$8, g as o$g, E as E$1, O as e$g, P as o$h, Q as f$1, F as s$3, G as d$2, ag as L, H as x$2, ap as y, p as E$2, R as h$4, K as h$5, L as L$2, s as g$1 } from './BooleanPassUniform-64b26380.js';
import { T as T$1 } from './InterleavedLayout-45b3d520.js';
import { O } from './VertexAttribute-f7d7a686.js';
import { I as I$1, D as D$2, E as E$4 } from './enums-fb707d37.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$2(e,o){const n=e.fragment;switch(n.code.add(n$1`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i$5.None:n.code.add(n$1`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i$5.View:n.code.add(n$1`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i$5.WindingOrder:n.code.add(n$1`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n$2(o.doubleSidedMode);case i$5.COUNT:}}var i$5;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT";}(i$5||(i$5={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e$1(e){e.vertex.code.add(n$1`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class v$1 extends t$1{constructor(){super(...arguments),this.instancedDoublePrecision=!1;}}function p(e,i){i.instanced&&i.instancedDoublePrecision&&(e.attributes.add(O.MODELORIGINHI,"vec3"),e.attributes.add(O.MODELORIGINLO,"vec3"),e.attributes.add(O.MODEL,"mat3"),e.attributes.add(O.MODELNORMAL,"mat3"));const c=e.vertex;i.instancedDoublePrecision&&(c.include(c$2,i),c.uniforms.add(new o$1("viewOriginHi",((e,i)=>o$2(o$3(x$1,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),x$1)))),c.uniforms.add(new o$1("viewOriginLo",((e,i)=>r$1(o$3(x$1,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),x$1))))),c.code.add(n$1`
    vec3 calculateVPos() {
      ${i.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),c.code.add(n$1`
    vec3 subtractOrigin(vec3 _pos) {
      ${i.instancedDoublePrecision?n$1`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),c.code.add(n$1`
    vec3 dpNormal(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),i.output===h$1.Normal&&(c.uniforms.add(new e$5("viewNormal",((e,r)=>r.camera.viewInverseTransposeMatrix))),c.code.add(n$1`
    vec3 dpNormalView(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),i.hasVertexTangents&&c.code.add(n$1`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `);}e$3([e$4()],v$1.prototype,"instancedDoublePrecision",void 0);const x$1=n$3();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var r;function n(t){switch(t){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function o(n,o,l){if(t$2(n)||o===r.Ignore)return l[0]=255,l[1]=255,l[2]=255,void(l[3]=255);const p=o$4(Math.round(n[3]*a$1),0,a$1),s=0===p||o===r.Tint?0:o===r.Replace?c$1:u;l[0]=o$4(Math.round(n[0]*i$4),0,i$4),l[1]=o$4(Math.round(n[1]*i$4),0,i$4),l[2]=o$4(Math.round(n[2]*i$4),0,i$4),l[3]=p+s;}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint";}(r||(r={}));const i$4=255,a$1=85,c$1=a$1,u=2*a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(n$1`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n$1.int(r.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n$1.int(r.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n$1.int(r.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n$1.int(r.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i$3(i,t){t.hasSymbolColors?(i.include(e),i.attributes.add(O.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(n$1`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new e$6("colorMixMode",(o=>U$3[o.colorMixMode]))),i.vertex.code.add(n$1`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function d(d){d.fragment.code.add(n$1`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n$1.float(t$3)}) { discard; } }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function s(a,e){l(a,e,new o$5("textureAlphaCutoff",(a=>a.textureAlphaCutoff)));}function l(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==C$1.Mask&&r.alphaDiscardMode!==C$1.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case C$1.Blend:return e.include(d);case C$1.Opaque:t.code.add(n$1`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case C$1.Mask:t.code.add(n$1`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case C$1.MaskBlend:e.fragment.code.add(n$1`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function x(x,j){const w=x.vertex.code,C=x.fragment.code,T=j.hasModelTransformation;switch(T&&x.vertex.uniforms.add(new e$5("model",(e=>r$2(e.modelTransformation)?e.modelTransformation:o$6))),j.output){case h$1.Depth:case h$1.Shadow:case h$1.ShadowHighlight:case h$1.ShadowExludeHighlight:v$2(x,j),x.include(r$3,j),x.include(d$1,j),x.include(s$1,j),x.include(o$8,j),x.include(u$1,j),x.vertex.uniforms.add(new e$7("nearFar",((o,r)=>r.camera.nearFar))),x.varyings.add("depth","float"),j.hasColorTexture&&x.fragment.uniforms.add(new m$1("tex",(o=>o.texture))),w.add(n$1`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${T?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
          }
        `),x.include(s,j),C.add(n$1`
          void main(void) {
            discardBySlice(vpos);
            ${j.hasColorTexture?n$1`
            vec4 texColor = texture2D(tex, vuv0);
            discardOrAdjustAlpha(texColor);`:""}
            outputDepth(depth);
          }
        `);break;case h$1.Normal:v$2(x,j),x.include(r$3,j),x.include(o$7,j),x.include(n$4,j),x.include(d$1,j),x.include(s$1,j),j.hasColorTexture&&x.fragment.uniforms.add(new m$1("tex",(o=>o.texture))),x.varyings.add("vPositionView","vec3"),w.add(n$1`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${j.normalType===i$6.Attribute?n$1`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),x.include(u$1,j),x.include(s,j),C.add(n$1`
          void main() {
            discardBySlice(vpos);
            ${j.hasColorTexture?n$1`
            vec4 texColor = texture2D(tex, vuv0);
            discardOrAdjustAlpha(texColor);`:""}

            ${j.normalType===i$6.ScreenDerivative?n$1`
                vec3 normal = screenDerivativeNormal(vPositionView);`:n$1`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case h$1.Highlight:v$2(x,j),x.include(r$3,j),x.include(d$1,j),x.include(s$1,j),j.hasColorTexture&&x.fragment.uniforms.add(new m$1("tex",(o=>o.texture))),w.add(n$1`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),x.include(u$1,j),x.include(s,j),x.include(a$2),C.add(n$1`
          void main() {
            discardBySlice(vpos);
            ${j.hasColorTexture?n$1`
            vec4 texColor = texture2D(tex, vuv0);
            discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i$2(i,c){const u=i.fragment;if(c.hasVertexTangents?(i.attributes.add(O.TANGENT,"vec4"),i.varyings.add("vTangent","vec4"),c.doubleSidedMode===i$5.WindingOrder?u.code.add(n$1`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):u.code.add(n$1`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(i.extensions.add("GL_OES_standard_derivatives"),u.code.add(n$1`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),c.textureCoordinateType!==o$9.None){i.include(a$3,c);const e=c.supportsTextureAtlas?e$8.Size:e$8.None;u.uniforms.add(c.pbrTextureBindType===a$4.Pass?p$1("normalTexture",(e=>e.textureNormal),e):p$2("normalTexture",(e=>e.textureNormal),e)),u.code.add(n$1`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${c.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a(o,a){const l=o.fragment;a.receiveAmbientOcclusion?(l.uniforms.add([new m$1("ssaoTex",((e,o)=>o.ssaoHelper.colorTexture)),new e$9("viewportPixelSz",((o,r)=>r$4(i$1,r.camera.fullViewport[0],r.camera.fullViewport[1],1/r.ssaoHelper.width,1/r.ssaoHelper.height)))]),l.code.add(n$1`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):l.code.add(n$1`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);}const i$1=n$5();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function m(m,g){const h=m.fragment;m.include(a,g),g.pbrMode!==m$2.Disabled&&m.include(n$6,g),m.include(m$3,g),h.constants.add("ambientBoostFactor","float",c$3),m.include(t$4),h.code.add(n$1`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${g.pbrMode===m$2.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h.uniforms.add(new e$a("lightingMainDirection",((i,n)=>n.lighting.lightingMainDirection))),h.code.add(n$1`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${g.spherical?n$1`normalize(vPosWorld)`:n$1`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),h.uniforms.add([new o$5("lightingGlobalFactor",((i,n)=>n.lighting.globalFactor)),new e$a("lightingMainIntensity",((i,n)=>n.lighting.mainLight.intensity))]),h.code.add(n$1`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),g.pbrMode===m$2.Disabled||g.pbrMode===m$2.WaterOnIntegratedMesh?(m.include(o$a,g),h.code.add(n$1`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):g.pbrMode!==m$2.Normal&&g.pbrMode!==m$2.Schematic||(h.code.add(n$1`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),h.code.add(n$1`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),g.useFillLights?h.uniforms.add(new s$2("hasFillLights",((i,n)=>n.enableFillLights))):h.constants.add("hasFillLights","bool",!1),h.code.add(n$1`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),h.uniforms.add([new o$5("lightingSpecularStrength",((i,n)=>n.lighting.mainLight.specularStrength)),new o$5("lightingEnvironmentStrength",((i,n)=>n.lighting.mainLight.environmentStrength))]),h.code.add(n$1`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),h.code.add(n$1`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${g.pbrMode===m$2.Schematic?n$1`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:n$1`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(i){i.include(e$b),i.code.add(n$1`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n$1.int(r.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n$1.int(r.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$1.int(r.Replace)}) {
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

      if (mode == ${n$1.int(r.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n$1.int(r.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function U$2(U){const k=new o$b,W=k.vertex.code,q=k.fragment.code;return v$2(k,U),k.include(o$c),k.varyings.add("vpos","vec3"),k.include(s$1,U),k.include(p,U),k.include(a$5,U),U.output!==h$1.Color&&U.output!==h$1.Alpha||(c$4(k.vertex,U),k.include(o$7,U),k.include(r$3,U),U.normalType===i$6.Attribute&&U.offsetBackfaces&&k.include(e$1),k.include(i$2,U),k.include(n$4,U),U.instancedColor&&k.attributes.add(O.INSTANCECOLOR,"vec4"),k.varyings.add("localvpos","vec3"),k.include(d$1,U),k.include(i$7,U),k.include(i$3,U),k.include(e$c,U),k.vertex.uniforms.add(new e$9("externalColor",(e=>e.externalColor))),k.varyings.add("vcolorExt","vec4"),U.hasMultipassTerrain&&k.varyings.add("depth","float"),U.hasModelTransformation&&k.vertex.uniforms.add(new e$5("model",(o=>r$2(o.modelTransformation)?o.modelTransformation:o$6))),W.add(n$1`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${U.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${n$1.float(t$3)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${U.normalType===i$6.Attribute?n$1`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${U.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${U.hasModelTransformation?"model,":""} vpos);
          ${U.normalType===i$6.Attribute&&U.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${U.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),U.output===h$1.Alpha&&(k.include(u$1,U),k.include(s,U),k.include(n$7,U),k.fragment.uniforms.add([new o$5("opacity",(e=>e.opacity)),new o$5("layerOpacity",(e=>e.layerOpacity))]),U.hasColorTexture&&k.fragment.uniforms.add(new m$1("tex",(e=>e.texture))),k.fragment.include(i),q.add(n$1`
      void main() {
        discardBySlice(vpos);
        ${U.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${U.hasColorTexture?n$1`
                vec4 texColor = texture2D(tex, vuv0);
                ${U.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$1`vec4 texColor = vec4(1.0);`}
        ${U.hasVertexColors?n$1`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$1`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),U.output===h$1.Color&&(k.include(u$1,U),k.include(m,U),k.include(a,U),k.include(s,U),k.include(U.instancedDoublePrecision?h$2:c$5,U),k.include(n$7,U),c$4(k.fragment,U),k.fragment.uniforms.add([k.vertex.uniforms.get("localOrigin"),new e$a("ambient",(e=>e.ambient)),new e$a("diffuse",(e=>e.diffuse)),new o$5("opacity",(e=>e.opacity)),new o$5("layerOpacity",(e=>e.layerOpacity)),new o$5("lightingGlobalFactor",((e,r)=>r.lighting.globalFactor)),new e$a("lightingMainIntensity",((e,r)=>r.lighting.mainLight.intensity))]),k.fragment.constants.add("ambientBoostFactor","float",c$3),U.hasColorTexture&&k.fragment.uniforms.add(new m$1("tex",(e=>e.texture))),k.include(p$3,U),k.include(n$6,U),k.fragment.include(i),k.include(e$2,U),q.add(n$1`
      void main() {
        discardBySlice(vpos);
        ${U.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${U.hasColorTexture?n$1`
                vec4 texColor = texture2D(tex, vuv0);
                ${U.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$1`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${U.normalType===i$6.ScreenDerivative?n$1`
                vec3 normal = screenDerivativeNormal(localvpos);`:n$1`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${U.pbrMode===m$2.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${U.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":U.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${U.hasVertexColors?n$1`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$1`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${U.hasNormalTexture?n$1`
                mat3 tangentSpace = ${U.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:n$1`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${U.spherical?n$1`normalize(vpos + localOrigin);`:n$1`vec3(0.0, 0.0, 1.0);`}

        ${U.snowCover?n$1`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${U.pbrMode===m$2.Normal||U.pbrMode===m$2.Schematic?n$1`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${U.snowCover?n$1`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:n$1`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${U.transparencyPassType===o$d.Color?n$1`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),k.include(x,U),k}const k$3=Object.freeze(Object.defineProperty({__proto__:null,build:U$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class F extends f{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=r$5(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=n$8.Back,this.emissiveFactor=r$5(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=r$5(.2,.2,.2),this.diffuse=r$5(.8,.8,.8),this.externalColor=r$6(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=n$3(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=e$d(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=e$e.Less,this.textureAlphaMode=C$1.Blend,this.textureAlphaCutoff=o$e,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=o$f.Occlude;}}class k$2 extends c$6{constructor(){super(...arguments),this.origin=n$3(),this.slicePlaneLocalOrigin=this.origin;}}class _ extends e$f{initializeConfiguration(e,t){t.spherical=e.viewingMode===l$1.Global,t.doublePrecisionRequiresObfuscation=i$8(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?o$9.Default:o$9.None;}initializeProgram(e){return this._initializeProgram(e,_.shader)}_initializeProgram(e,t){return new o$g(e.rctx,t.get().build(this.configuration),E$1)}_convertDepthTestFunction(e){return e===e$e.Lequal?I$1.LEQUAL:I$1.LESS}_makePipeline(e,t){const i=this.configuration,s=e===o$d.NONE,r=e===o$d.FrontFace;return W({blending:i.output!==h$1.Color&&i.output!==h$1.Alpha||!i.transparent?null:s?c$7:A$1(e),culling:E(i)&&h$3(i.cullFace),depthTest:{func:l$2(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:s||r?i.writeDepth&&a$6:null,colorWrite:_$1,stencilWrite:i.hasOccludees?e$g:null,stencilTest:i.hasOccludees?t?o$h:f$1:null,polygonOffset:s||r?null:a$7(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function E(e){return e.cullFace!==n$8.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}_.shader=new t$5(k$3,(()=>import('./DefaultMaterial.glsl-8a838d57.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class c extends s$3{constructor(){super(...arguments),this.output=h$1.Color,this.alphaDiscardMode=C$1.Opaque,this.doubleSidedMode=i$5.None,this.pbrMode=m$2.Disabled,this.cullFace=n$8.None,this.transparencyPassType=o$d.NONE,this.normalType=i$6.Attribute,this.textureCoordinateType=o$9.None,this.customDepthTest=e$e.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1;}}e$3([e$4({count:h$1.COUNT})],c.prototype,"output",void 0),e$3([e$4({count:C$1.COUNT})],c.prototype,"alphaDiscardMode",void 0),e$3([e$4({count:i$5.COUNT})],c.prototype,"doubleSidedMode",void 0),e$3([e$4({count:m$2.COUNT})],c.prototype,"pbrMode",void 0),e$3([e$4({count:n$8.COUNT})],c.prototype,"cullFace",void 0),e$3([e$4({count:o$d.COUNT})],c.prototype,"transparencyPassType",void 0),e$3([e$4({count:i$6.COUNT})],c.prototype,"normalType",void 0),e$3([e$4({count:o$9.COUNT})],c.prototype,"textureCoordinateType",void 0),e$3([e$4({count:e$e.COUNT})],c.prototype,"customDepthTest",void 0),e$3([e$4()],c.prototype,"spherical",void 0),e$3([e$4()],c.prototype,"hasVertexColors",void 0),e$3([e$4()],c.prototype,"hasSymbolColors",void 0),e$3([e$4()],c.prototype,"hasVerticalOffset",void 0),e$3([e$4()],c.prototype,"hasSlicePlane",void 0),e$3([e$4()],c.prototype,"hasSliceHighlight",void 0),e$3([e$4()],c.prototype,"hasColorTexture",void 0),e$3([e$4()],c.prototype,"hasMetalnessAndRoughnessTexture",void 0),e$3([e$4()],c.prototype,"hasEmissionTexture",void 0),e$3([e$4()],c.prototype,"hasOcclusionTexture",void 0),e$3([e$4()],c.prototype,"hasNormalTexture",void 0),e$3([e$4()],c.prototype,"hasScreenSizePerspective",void 0),e$3([e$4()],c.prototype,"hasVertexTangents",void 0),e$3([e$4()],c.prototype,"hasOccludees",void 0),e$3([e$4()],c.prototype,"hasMultipassTerrain",void 0),e$3([e$4()],c.prototype,"hasModelTransformation",void 0),e$3([e$4()],c.prototype,"offsetBackfaces",void 0),e$3([e$4()],c.prototype,"vvSize",void 0),e$3([e$4()],c.prototype,"vvColor",void 0),e$3([e$4()],c.prototype,"receiveShadows",void 0),e$3([e$4()],c.prototype,"receiveAmbientOcclusion",void 0),e$3([e$4()],c.prototype,"textureAlphaPremultiplied",void 0),e$3([e$4()],c.prototype,"instanced",void 0),e$3([e$4()],c.prototype,"instancedColor",void 0),e$3([e$4()],c.prototype,"instancedDoublePrecision",void 0),e$3([e$4()],c.prototype,"doublePrecisionRequiresObfuscation",void 0),e$3([e$4()],c.prototype,"writeDepth",void 0),e$3([e$4()],c.prototype,"transparent",void 0),e$3([e$4()],c.prototype,"enableOffset",void 0),e$3([e$4()],c.prototype,"cullAboveGround",void 0),e$3([e$4()],c.prototype,"snowCover",void 0),e$3([e$4({constValue:!0})],c.prototype,"hasVvInstancing",void 0),e$3([e$4({constValue:!1})],c.prototype,"useCustomDTRExponentForWater",void 0),e$3([e$4({constValue:!1})],c.prototype,"supportsTextureAtlas",void 0),e$3([e$4({constValue:!0})],c.prototype,"useFillLights",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function D$1(D){const B=new o$b,V=B.vertex.code,I=B.fragment.code;return v$2(B,D),B.include(o$c),B.varyings.add("vpos","vec3"),B.include(s$1,D),B.include(p,D),B.include(a$5,D),D.output!==h$1.Color&&D.output!==h$1.Alpha||(c$4(B.vertex,D),B.include(o$7,D),B.include(r$3,D),D.offsetBackfaces&&B.include(e$1),D.instancedColor&&B.attributes.add(O.INSTANCECOLOR,"vec4"),B.varyings.add("vNormalWorld","vec3"),B.varyings.add("localvpos","vec3"),D.hasMultipassTerrain&&B.varyings.add("depth","float"),B.include(d$1,D),B.include(i$7,D),B.include(i$3,D),B.include(e$c,D),B.vertex.uniforms.add(new e$9("externalColor",(e=>e.externalColor))),B.varyings.add("vcolorExt","vec4"),V.add(n$1`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${D.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${n$1.float(t$3)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${D.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${D.hasMultipassTerrain?n$1`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),D.output===h$1.Alpha&&(B.include(u$1,D),B.include(s,D),B.include(n$7,D),B.fragment.uniforms.add([new o$5("opacity",(e=>e.opacity)),new o$5("layerOpacity",(e=>e.layerOpacity))]),D.hasColorTexture&&B.fragment.uniforms.add(new m$1("tex",(e=>e.texture))),B.fragment.include(i),I.add(n$1`
      void main() {
        discardBySlice(vpos);
        ${D.hasMultipassTerrain?n$1`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${D.hasColorTexture?n$1`
                vec4 texColor = texture2D(tex, vuv0);
                ${D.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$1`vec4 texColor = vec4(1.0);`}
        ${D.hasVertexColors?n$1`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$1`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),D.output===h$1.Color&&(B.include(u$1,D),B.include(m,D),B.include(a,D),B.include(s,D),B.include(D.instancedDoublePrecision?h$2:c$5,D),B.include(n$7,D),c$4(B.fragment,D),B.fragment.uniforms.add([B.vertex.uniforms.get("localOrigin"),B.vertex.uniforms.get("view"),new e$a("ambient",(e=>e.ambient)),new e$a("diffuse",(e=>e.diffuse)),new o$5("opacity",(e=>e.opacity)),new o$5("layerOpacity",(e=>e.layerOpacity)),new o$5("lightingGlobalFactor",((e,r)=>r.lighting.globalFactor)),new e$a("lightingMainIntensity",((e,r)=>r.lighting.mainLight.intensity))]),B.fragment.constants.add("ambientBoostFactor","float",c$3),D.hasColorTexture&&B.fragment.uniforms.add(new m$1("tex",(e=>e.texture))),B.include(p$3,D),B.include(n$6,D),B.fragment.include(i),B.extensions.add("GL_OES_standard_derivatives"),I.add(n$1`
      void main() {
        discardBySlice(vpos);
        ${D.hasMultipassTerrain?n$1`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${D.hasColorTexture?n$1`
                vec4 texColor = texture2D(tex, vuv0);
                ${D.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:n$1`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${D.pbrMode===m$2.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${D.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":D.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${D.hasVertexColors?n$1`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:n$1`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${D.snowCover?n$1`albedo = mix(albedo, vec3(1), 0.9);`:n$1``}
        ${n$1`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${D.pbrMode===m$2.Normal||D.pbrMode===m$2.Schematic?D.spherical?n$1`vec3 normalGround = normalize(vpos + localOrigin);`:n$1`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:n$1``}
        ${D.pbrMode===m$2.Normal||D.pbrMode===m$2.Schematic?n$1`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${D.snowCover?n$1`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:n$1`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${D.transparencyPassType===o$d.Color?n$1`gl_FragColor = premultiplyAlpha(gl_FragColor);`:n$1``}
      }
    `)),B.include(x,D),B}const B$1=Object.freeze(Object.defineProperty({__proto__:null,build:D$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t extends _{initializeConfiguration(i,s){super.initializeConfiguration(i,s),s.hasMetalnessAndRoughnessTexture=!1,s.hasEmissionTexture=!1,s.hasOcclusionTexture=!1,s.hasNormalTexture=!1,s.hasModelTransformation=!1,s.normalType=i$6.Attribute,s.doubleSidedMode=i$5.WindingOrder,s.hasVertexTangents=!1;}initializeProgram(e){return this._initializeProgram(e,t.shader)}}t.shader=new t$5(B$1,(()=>import('./RealisticTree.glsl-f8422316.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class R extends d$2{constructor(e){super(e,D),this.supportsEdges=!0,this._configuration=new c,this.vertexBufferLayout=j$1(this.parameters),this.instanceBufferLayout=e.instanced?B(this.parameters):null;}isVisibleForOutput(e){return e!==h$1.Shadow&&e!==h$1.ShadowExludeHighlight&&e!==h$1.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||0===t.layerOpacity)return !1;const{instanced:r,hasVertexColors:a,hasSymbolColors:s,vvColorEnabled:i}=t,o=r$2(r)&&r.includes("color"),n="replace"===t.colorMixMode,h=t.opacity>0,c=t.externalColor&&t.externalColor[3]>0;return a&&(o||i||s)?!!n||h:a?n?c:h:o||i||s?!!n||h:n?c:h}getConfiguration(t,r){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=r$2(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=r$2(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType="screenDerivative"===this.parameters.normals?i$6.ScreenDerivative:i$6.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,r$2(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?n$8.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=r$2(this.parameters.modelTransformation),t!==h$1.Color&&t!==h$1.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=i$5.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?i$5.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?i$5.WindingOrder:i$5.None,this._configuration.instancedColor=r$2(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?m$2.Schematic:m$2.Normal:m$2.Disabled,this._configuration.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<S,this._configuration.snowCover=this.hasSnowCover(r)),this._configuration}hasSnowCover(t){return r$2(t.weather)&&t.weatherVisible&&"snowy"===t.weather.type&&"enabled"===t.weather.snowCover}intersect(c,l,m,p,d,f,g$1){if(r$2(this.parameters.verticalOffset)){const e=p.camera;o$3(k$1,m[12],m[13],m[14]);let c=null;switch(p.viewingMode){case l$1.Global:c=z$1(U$1,k$1);break;case l$1.Local:c=r$7(U$1,G);}let l=0;const g$1=e$h(q,k$1,e.eye),T=s$4(g$1),_=g(g$1,g$1,1/T);let v=null;this.parameters.screenSizePerspective&&(v=P$2(c,_)),l+=L(e,T,this.parameters.verticalOffset,v,this.parameters.screenSizePerspective),g(c,c,l),S$1(z,c,p.transform.inverseRotation),d=e$h(V,d,z),f=e$h(H,f,z);}x$2(c,l,p,d,f,y(p.verticalOffset),g$1);}requiresSlot(e,t){if(t===h$1.Color||t===h$1.Alpha||t===h$1.Depth||t===h$1.Normal||t===h$1.Shadow||t===h$1.ShadowHighlight||t===h$1.ShadowExludeHighlight||t===h$1.Highlight){return e===(this.parameters.transparent?this.parameters.writeDepth?E$2.TRANSPARENT_MATERIAL:E$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:E$2.OPAQUE_MATERIAL)||e===E$2.DRAPED_MATERIAL}return !1}createGLMaterial(e){return new C(e)}createBufferWriter(){return new N(this.vertexBufferLayout,this.instanceBufferLayout)}}class C extends h$4{constructor(e){super({...e,...e.material.parameters});}_updateParameters(e){const r=this._material.parameters;this.updateTexture(r.textureId);const a=e.camera.viewInverseTransposeMatrix;return o$3(r.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?t:_,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees});}beginSlot(e){return this._output!==h$1.Color&&this._output!==h$1.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class P$1 extends F{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1;}}const D=new P$1;class N{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t;}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(O.POSITION).length}write(e,t,r,a){h$5(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,a);}}function j$1(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=T$1().vec3f(O.POSITION).vec3f(O.NORMAL);return e.hasVertexTangents&&r.vec4f(O.TANGENT),t&&r.vec2f(O.UV0),e.hasVertexColors&&r.vec4u8(O.COLOR),e.hasSymbolColors&&r.vec4u8(O.SYMBOLCOLOR),r}function B(t){let r=T$1();return r=t.instancedDoublePrecision?r.vec3f(O.MODELORIGINHI).vec3f(O.MODELORIGINLO).mat3f(O.MODEL).mat3f(O.MODELNORMAL):r.mat4f(O.MODEL).mat4f(O.MODELNORMAL),r$2(t.instanced)&&t.instanced.includes("color")&&(r=r.vec4f(O.INSTANCECOLOR)),r$2(t.instanced)&&t.instanced.includes("featureAttribute")&&(r=r.vec4f(O.INSTANCEFEATUREATTRIBUTE)),r}const V=n$3(),H=n$3(),G=r$5(0,0,1),U$1=n$3(),z=n$3(),k$1=n$3(),q=n$3();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const b=s$5.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function w(e,t){const r=await h(e,t);return {resource:r,textures:await P(r.textureDefinitions,t)}}async function h(r,n){const i=r$2(n)&&n.streamDataRequester;if(i)return v(r,i,n);const u=await b$1(L$1(r,e$i(n)));if(!0===u.ok)return u.value.data;w$1(u.error),j(u.error);}async function v(e,r,n){const a=await b$1(r.request(e,"json",n));if(!0===a.ok)return a.value;w$1(a.error),j(a.error.details.url);}function j(e){throw new s$6("",`Request for object resource failed: ${e}`)}function A(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(b.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(b.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(b.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(b.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else b.warn("Indexed geometries must specify faces"),n=!1;break}default:b.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(b.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(b.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function M(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=r$8.parse(l.version||"1.0","wosr");k.validate(c);const p=l.model.name,f=l.model.geometries,x=l.materialDefinitions,b=e.textures;let w=0;const h=new Map;for(let i=0;i<f.length;i++){const e=f[i];if(!A(e))continue;const l=T(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}]);}const v=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)v.push([e,new Uint32Array(t[e].values)]);}const j=b&&b[l.texture];if(j&&!h.has(l.texture)){const{image:e,params:t}=j,r=new L$2(e,t);o.push(r),h.set(l.texture,r);}const M=h.get(l.texture),U=M?M.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?I(j.alphaChannelUsage):void 0,i={ambient:e$j(e.diffuse),diffuse:e$j(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:U,initTextureTransparent:!0,doubleSided:!0,cullFace:n$8.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};r$2(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new R(i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P;}n.push(P);const k=new g$1(p,v);w+=v.position?v.position.length:0,r.push(k);}return {name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:U(r),numberOfVertices:w,lodThreshold:null}}function U(e){const t=B$2();return e.forEach((e=>{const r=e.boundingInfo;r$2(r)&&(h$6(t,r.getBBMin()),h$6(t,r.getBBMax()));})),t}async function P(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){b.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:D$2.REPEAT,t:D$2.REPEAT},preMultiplyAlpha:I(l)!==C$1.Opaque},m=r$2(t)&&t.disableTextures?Promise.resolve(null):t$6(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function I(e){switch(e){case"mask":return C$1.Mask;case"maskAndTransparency":return C$1.MaskBlend;case"none":return C$1.Opaque;default:return C$1.Blend}}function T(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const k=new r$8(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function J(s,o){const i=X(a$8(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):w(i.url,o)),t=M(e,o);return {lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):c$8(new n$9(o.streamDataRequester),i.url,o,o.usePBR)),u=m$4(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&r$2(u)&&a.meta.uri.includes("/RealisticTrees/")&&te(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:!!a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:!!a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=Y(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=Y(a,n,l,0)[0].boundingBox;}return {lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=Y(a,n,l);return {lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function X(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Y(e,t,s,a){const u=e.model,n=e$d(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:r$2(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:B$2()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=r$2(e.attributes.texCoord0),f=r$2(e.attributes.normal),p=Z(a.alphaMode);if(!c.has(i)){if(l){if(r$2(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:p!==C$1.Opaque};m.set(a.textureColor,new L$2(e.data,t));}if(r$2(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new L$2(e.data,e.parameters));}if(r$2(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new L$2(e.data,e.parameters));}if(r$2(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new L$2(e.data,e.parameters));}if(r$2(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new L$2(e.data,e.parameters));}}const o=a.color[0]**(1/o$i),n=a.color[1]**(1/o$i),d=a.color[2]**(1/o$i),x=a.emissiveFactor[0]**(1/o$i),g=a.emissiveFactor[1]**(1/o$i),h=a.emissiveFactor[2]**(1/o$i),b=r$2(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new R({...t,transparent:p===C$1.Blend,customDepthTest:e$e.Lequal,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?n$8.None:n$8.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:r$2(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:r$2(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:r$2(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:r$2(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:r$2(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:r$2(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,h],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}));}const x=ee(e.indices||e.attributes.position.count,e.primitiveType),S=e.attributes.position.count,A=r$9(i$9,S);t$7(A,e.attributes.position,e.transform);const N=[[O.POSITION,{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],I=[[O.POSITION,x]];if(r$2(e.attributes.normal)){const t=r$9(i$9,S);g$2(n,e.transform),r$a(t,e.attributes.normal,n),N.push([O.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O.NORMAL,x]);}if(r$2(e.attributes.tangent)){const t=r$9(c$9,S);g$2(n,e.transform),r$b(t,e.attributes.tangent,n),N.push([O.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O.TANGENT,x]);}if(r$2(e.attributes.texCoord0)){const t=r$9(u$2,S);n$a(t,e.attributes.texCoord0),N.push([O.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O.UV0,x]);}if(r$2(e.attributes.color)){const t=r$9(x$3,S);if(4===e.attributes.color.elementCount)e.attributes.color instanceof c$9?o$j(t,e.attributes.color,255):e.attributes.color instanceof x$3?e$k(t,e.attributes.color):e.attributes.color instanceof L$3&&o$j(t,e.attributes.color,1/256);else {t$8(t,255,255,255,255);const r=new O$1(t.buffer,0,4);e.attributes.color instanceof i$9?f$2(r,e.attributes.color,255):e.attributes.color instanceof O$1?e$l(r,e.attributes.color):e.attributes.color instanceof E$3&&f$2(r,e.attributes.color,1/256);}N.push([O.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push([O.COLOR,x]);}const L=new g$1(N,I);d.stageResources.geometries.push(L),d.stageResources.materials.push(c.get(i)),l&&(r$2(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),r$2(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),r$2(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),r$2(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),r$2(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=S;const F=L.boundingInfo;r$2(F)&&(h$6(d.boundingBox,F.getBBMin()),h$6(d.boundingBox,F.getBBMax()));}));})),l}function Z(e){switch(e){case"BLEND":return C$1.Blend;case"MASK":return C$1.Mask;case"OPAQUE":case null:case void 0:return C$1.Opaque}}function ee(e,t){switch(t){case E$4.TRIANGLES:return n$b(e);case E$4.TRIANGLE_STRIP:return o$k(e);case E$4.TRIANGLE_FAN:return i$a(e)}}function te(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(t$2(o))return;const x=i.attributes.position,g=x.count,b=n$3(),R=n$3(),B=n$3(),M=r$9(x$3,g),T=r$9(i$9,g),w=h$7(e$m(),i.transform);for(let s=0;s<g;s++){x.getVec(s,R),o.getVec(s,b),O$2(R,R,i.transform),e$h(B,R,t.center),i$b(B,B,t.radius);const a=B[2],u=s$4(B),p=Math.min(.45+.55*u*u,1);i$b(B,B,t.radius),O$2(B,B,w),z$1(B,B),r+1!==e.model.lods.length&&e.model.lods.length>1&&A$2(B,B,b,a>-1?.2:Math.min(-4*a-3.8,1)),T.setVec(s,B),M.set(s,0,255*p),M.set(s,1,255*p),M.set(s,2,255*p),M.set(s,3,255);}i.attributes.normal=T,i.attributes.color=M;}}}

var objectResourceUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fetch: J,
    gltfToEngineResources: Y,
    parseUrl: X
});

export { B, D$1 as D, J, R, U$2 as U, a, objectResourceUtils as b, e$2 as e, i$5 as i, k$2 as k, m, n, o };
