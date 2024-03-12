// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],function(d,k,a,l,f){function g(b){const c=new l.ShaderBuilder;c.include(k.ScreenSpacePass);c.fragment.uniforms.add(new f.Texture2DPassUniform("colorTexture",e=>e.color),new f.Texture2DPassUniform("depthTexture",e=>e.depth));b=b.haze;
c.fragment.code.add(a.glsl`
    void main() {
      ${b?a.glsl`vec4`:a.glsl`float`} depthSample = texture(depthTexture, uv) ${b?"":a.glsl`.r`};
      if (depthSample ${b?a.glsl`== vec4(0)`:a.glsl`!= 1.0`} ) {
          fragColor = vec4(0);
          return;
      }
      fragColor = texture(colorTexture, uv);
    }
    `);return c}class h extends a.NoParameters{}const m=Object.freeze(Object.defineProperty({__proto__:null,AtmosphereCompositingPassParameters:h,build:g},Symbol.toStringTag,{value:"Module"}));d.AtmosphereCompositing=m;d.AtmosphereCompositingPassParameters=h;d.build=g});