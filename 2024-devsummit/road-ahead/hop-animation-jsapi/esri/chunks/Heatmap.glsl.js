// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),function(e,k,l,d,f,m,g){function h(c){const b=new m.ShaderBuilder;b.include(k.ScreenSpacePass);
b.include(l.DiscardOrAdjustAlphaBlend);({usesHalfFloat:c}=c);b.fragment.uniforms.add(new g.Texture2DPassUniform("densityMap",a=>a.densityMap),new g.Texture2DPassUniform("tex",a=>a.colorRamp),new d.FloatPassUniform("densityNormalizer",a=>1/(a.maxDensity-a.minDensity)),new d.FloatPassUniform("minDensity",a=>a.minDensity),new d.FloatPassUniform("densityMultiplier",a=>3/(a.searchRadius*a.searchRadius*Math.PI)));c&&b.constants.add("compressionFactor","float",4);b.fragment.code.add(f.glsl`
    void main() {
      float density = texture(densityMap, uv).r * densityMultiplier${c?f.glsl` * compressionFactor`:""};
      float densityRatio = (density - minDensity) * densityNormalizer;

      vec4 color = texture(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));

      discardOrAdjustAlpha(color);
      fragColor = color;
    }
  `);return b}const n=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));e.HeatmapShader=n;e.build=h});