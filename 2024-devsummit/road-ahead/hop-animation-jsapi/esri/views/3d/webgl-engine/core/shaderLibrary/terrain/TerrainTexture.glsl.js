// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../shading/ReadShadowMap.glsl ./BackgroundGrid.glsl ./TileBlendInput ../../shaderModules/interfaces ../../shaderModules/Uniform".split(" "),function(e,q,r,m,b,f){class t extends q.ReadShadowMapPassParameters{constructor(){super(...arguments);this.overlayOpacity=1}}class u extends f.Uniform{constructor(a){super(a,"float")}}class g extends f.Uniform{constructor(a){super(a,"vec3")}}class n extends f.Uniform{constructor(a){super(a,"vec4")}}class h extends f.Uniform{constructor(a){super(a,
"sampler2D")}}e.Float3Uniform=g;e.OverlayTerrainPassParameters=t;e.TerrainTexture=function(a,d){const {vertex:k,fragment:c,varyings:p}=a;p.add("vtc","vec2");k.uniforms.add(new n("texOffsetAndScale"));c.uniforms.add(new h("tex"));c.uniforms.add(new g("textureOpacities"));if(a=d.textureFadingEnabled&&!d.renderOccluded)k.uniforms.add(new n("nextTexOffsetAndScale")),p.add("nvtc","vec2"),c.uniforms.add(new h("texNext")),c.uniforms.add(new g("nextTexOpacities")),c.uniforms.add(new u("fadeFactor"));const l=
d.tileBlendInput===m.TileBlendInput.ColorComposite;(d=d.tileBlendInput===m.TileBlendInput.GridComposite)&&c.include(r.BackgroundGrid);l&&c.uniforms.add(new g("backgroundColor"));k.code.add(b.glsl`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${a?b.glsl`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:b.glsl``}
  }`);c.code.add(b.glsl`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${d||l?b.glsl`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = vec4(${l?b.glsl`backgroundColor`:b.glsl`gridColor(uv)`} * opacities.y, opacities.y);
              vec4 layer = color * opacities.z;
              return (bg * (1.0 - layer.a) + layer) * opacities.x;`:b.glsl`return color;`}
    }`);a?c.code.add(b.glsl`vec4 getTileColor() {
vec4 color = getColor(texture(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):c.code.add(b.glsl`vec4 getTileColor() {
return getColor(texture(tex, vtc), vtc, textureOpacities);
}`)};e.Texture2DUniform=h;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});