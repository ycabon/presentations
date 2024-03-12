// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ./ShadowCastAccumulate.glsl ../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration".split(" "),
function(g,h,r,t,u,v,w,e,d,x,y,z,k){function l(b){const f=new x.ShaderBuilder,c=f.fragment;c.include(v.RgbaFloatEncoding);c.include(t.ReadLinearDepth);f.include(u.CameraSpace);f.include(r.ScreenSpacePass);const {visualization:m,bandsEnabled:n}=b;c.constants.add("inverseSampleValue","float",z.ShadowCastMaxSamples);c.uniforms.add(new y.Texture2DPassUniform("shadowCastMap",a=>a.shadowCastMap),new e.FloatPassUniform("sampleScale",a=>a.sampleScale),new e.FloatPassUniform("opacityFromElevation",a=>a.opacityFromElevation),
new w.Float4PassUniform("uColor",a=>a.color));b=m===k.ShadowCastVisualization.Gradient;const p=m===k.ShadowCastVisualization.Threshold;b&&n?c.uniforms.add(new e.FloatPassUniform("bandSize",a=>a.bandSize)):p&&c.uniforms.add(new e.FloatPassUniform("threshold",a=>a.threshold));c.code.add(d.glsl`
    void main(void) {
      float record = texture(shadowCastMap, uv).r;
      float pixelSamples = record * inverseSampleValue;
      if (pixelSamples < 1.0) {
        discard;
      }

      float strength = pixelSamples * sampleScale;

      ${p?d.glsl`
          if (strength <= threshold) {
            discard;
          }`:""}

      ${b&&n?d.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

      fragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${b?d.glsl`* strength`:""});
    }
  `);return f}class q extends d.NoParameters{constructor(b){super();this._data=b;this.sampleScale=0;this.opacityFromElevation=1;this.color=h.clone(A);this.bandSize=.1;this.threshold=.5}get shadowCastMap(){return this._data.shadowCastTexture}}const A=h.fromValues(.01,0,.25,1),B=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:q,build:l},Symbol.toStringTag,{value:"Module"}));g.ShadowCastVisualize=B;g.ShadowCastVisualizePassParameters=q;g.build=l});