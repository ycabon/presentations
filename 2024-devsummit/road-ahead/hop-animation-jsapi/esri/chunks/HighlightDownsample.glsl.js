// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform"],function(a,g,b,h,k){function e(){const c=new h.ShaderBuilder,{outputs:l,fragment:d}=c;c.include(g.ScreenSpacePass);d.uniforms.add(new k.Texture2DDrawUniform("textureInput",m=>m.input));d.constants.add("sampleArea","int",5);l.add("fragGrid",
"vec2");d.code.add(b.glsl`
    void main() {
      float red = 0.0;
      float green = 1.0;
      int cellSize = ${b.glsl.int(32)};
      vec2 texelSize = 1.0 / vec2(textureSize(textureInput, 0));
      vec2 offset = floor(gl_FragCoord.xy) * vec2(float(cellSize));

      for(int x = -sampleArea; x < cellSize + sampleArea; x += 2) {
        for(int y = -sampleArea; y < cellSize + sampleArea; y += 2) {
          vec2 coord = (offset + vec2(float(x), float(y))) * texelSize;
          vec4 value = texture(textureInput, coord);
          float mx = floor(max(value.g, value.b));

          red = max(red, ceil(value.r));
          green = min(green, mx);
          if(red == 1.0 && green == 0.0) {
            fragGrid = vec2(red, green);
            return;
          }
        }
      }
      fragGrid = vec2(red, green);
    }`);return c}class f extends b.NoParameters{}const n=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:f,blurSize:.4,build:e,gridCellPixelSize:32,outlineSize:9},Symbol.toStringTag,{value:"Module"}));a.HighlightDownsample=n;a.HighlightDownsampleDrawParameters=f;a.blurSize=.4;a.build=e;a.gridCellPixelSize=32;a.outlineSize=9});