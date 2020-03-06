// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/makeTemplateObjectHelper","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],function(x,g,b,c,w){Object.defineProperty(g,"__esModule",{value:!0});g.build=function(d){var a=new w.ShaderBuilder,e=a.vertex.code,f=a.fragment.code;a.attributes.add("position","vec2");2===d.highlightStage&&(e.add(c.glsl(h||(h=b(["\n    void main() {\n      gl_Position \x3d vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);\n    }"],["\n    void main() {\n      gl_Position \x3d vec4(vec2(1.0) - position * 2.0, 0.0, 1.0);\n    }"])))),
a.fragment.uniforms.add("tex","sampler2D"),a.fragment.uniforms.add("invFramebufferDim","vec2"),f.add(c.glsl(k||(k=b(["\n      void main() {\n        vec2 coord \x3d gl_FragCoord.xy * invFramebufferDim;\n        vec4 value \x3d texture2D(tex, coord);\n        float mx \x3d floor(max(value.g, value.b));\n        gl_FragColor \x3d vec4(ceil(value.r), mx, mx, 1.0);\n      }"],["\n      void main() {\n        vec2 coord \x3d gl_FragCoord.xy * invFramebufferDim;\n        vec4 value \x3d texture2D(tex, coord);\n        float mx \x3d floor(max(value.g, value.b));\n        gl_FragColor \x3d vec4(ceil(value.r), mx, mx, 1.0);\n      }"])))));
0===d.highlightStage&&(a.attributes.add("uv0","vec2"),d.gridOptimization?(a.vertex.uniforms.add("coverageTex","sampler2D"),a.fragment.uniforms.add("blurSize","vec2"),a.varyings.add("blurCoordinate","vec3")):(a.vertex.uniforms.add("blurSize","vec2"),a.varyings.add("blurCoordinates[5]","vec2")),e.add(c.glsl(l||(l=b(["\n    void main() {\n      gl_Position \x3d vec4(position, 0.0, 1.0);\n      ","\n    }"],["\n    void main() {\n      gl_Position \x3d vec4(position, 0.0, 1.0);\n      ","\n    }"])),
d.gridOptimization?c.glsl(m||(m=b(["\n      vec4 cov \x3d texture2D(coverageTex, uv0);\n      if (cov.r \x3d\x3d 0.0) {\n        gl_Position \x3d vec4(0.0);\n      }\n      blurCoordinate \x3d vec3(gl_Position.xy * 0.5 + vec2(0.5), max(cov.g, cov.b));\n      "],["\n      vec4 cov \x3d texture2D(coverageTex, uv0);\n      if (cov.r \x3d\x3d 0.0) {\n        gl_Position \x3d vec4(0.0);\n      }\n      blurCoordinate \x3d vec3(gl_Position.xy * 0.5 + vec2(0.5), max(cov.g, cov.b));\n      "]))):c.glsl(n||
(n=b(["\n      vec2 uv \x3d position.xy * 0.5 + vec2(0.5);\n      blurCoordinates[0] \x3d uv;\n      blurCoordinates[1] \x3d uv + blurSize * 1.407333;\n      blurCoordinates[2] \x3d uv - blurSize * 1.407333;\n      blurCoordinates[3] \x3d uv + blurSize * 3.294215;\n      blurCoordinates[4] \x3d uv - blurSize * 3.294215;\n          "],["\n      vec2 uv \x3d position.xy * 0.5 + vec2(0.5);\n      blurCoordinates[0] \x3d uv;\n      blurCoordinates[1] \x3d uv + blurSize * 1.407333;\n      blurCoordinates[2] \x3d uv - blurSize * 1.407333;\n      blurCoordinates[3] \x3d uv + blurSize * 3.294215;\n      blurCoordinates[4] \x3d uv - blurSize * 3.294215;\n          "]))))),
a.fragment.uniforms.add("tex","sampler2D"),f.add(c.glsl(p||(p=b(["\n    void main() {\n      ","\n    }"],["\n    void main() {\n      ","\n    }"])),d.gridOptimization?c.glsl(q||(q=b(["\n          vec2 uv \x3d blurCoordinate.xy;\n          vec4 center \x3d texture2D(tex, uv);\n\n          // do not blur if no pixel or all pixels in neighborhood are set\n          if (blurCoordinate.z \x3d\x3d 1.0) {\n            gl_FragColor \x3d center;\n          } else {\n            vec4 sum \x3d vec4(0.0);\n            sum +\x3d center * 0.204164;\n            sum +\x3d texture2D(tex, uv + blurSize * 1.407333) * 0.304005;\n            sum +\x3d texture2D(tex, uv - blurSize * 1.407333) * 0.304005;\n            sum +\x3d texture2D(tex, uv + blurSize * 3.294215) * 0.093913;\n            sum +\x3d texture2D(tex, uv - blurSize * 3.294215) * 0.093913;\n            gl_FragColor \x3d sum;\n          }"],
["\n          vec2 uv \x3d blurCoordinate.xy;\n          vec4 center \x3d texture2D(tex, uv);\n\n          // do not blur if no pixel or all pixels in neighborhood are set\n          if (blurCoordinate.z \x3d\x3d 1.0) {\n            gl_FragColor \x3d center;\n          } else {\n            vec4 sum \x3d vec4(0.0);\n            sum +\x3d center * 0.204164;\n            sum +\x3d texture2D(tex, uv + blurSize * 1.407333) * 0.304005;\n            sum +\x3d texture2D(tex, uv - blurSize * 1.407333) * 0.304005;\n            sum +\x3d texture2D(tex, uv + blurSize * 3.294215) * 0.093913;\n            sum +\x3d texture2D(tex, uv - blurSize * 3.294215) * 0.093913;\n            gl_FragColor \x3d sum;\n          }"]))):
c.glsl(r||(r=b(["\n          vec4 sum \x3d vec4(0.0);\n          sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.204164;\n          sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.304005;\n          sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.304005;\n          sum +\x3d texture2D(tex, blurCoordinates[3]) * 0.093913;\n          sum +\x3d texture2D(tex, blurCoordinates[4]) * 0.093913;\n          gl_FragColor \x3d sum;"],["\n          vec4 sum \x3d vec4(0.0);\n          sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.204164;\n          sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.304005;\n          sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.304005;\n          sum +\x3d texture2D(tex, blurCoordinates[3]) * 0.093913;\n          sum +\x3d texture2D(tex, blurCoordinates[4]) * 0.093913;\n          gl_FragColor \x3d sum;"]))))));
1===d.highlightStage&&(a.varyings.add("uv","vec2"),d.gridOptimization&&(a.attributes.add("uv0","vec2"),a.vertex.uniforms.add("coverageTex","sampler2D")),e.add(c.glsl(t||(t=b(["\n      void main() {\n        ","\n        gl_Position \x3d vec4(position, 0.0, 1.0);\n        uv \x3d position.xy * 0.5 + vec2(0.5);\n      }"],["\n      void main() {\n        ","\n        gl_Position \x3d vec4(position, 0.0, 1.0);\n        uv \x3d position.xy * 0.5 + vec2(0.5);\n      }"])),d.gridOptimization?c.glsl(u||
(u=b(["\n            vec4 cov \x3d texture2D(coverageTex, uv0);\n            // if no highlight pixel set in this block, hide block\n            if (cov.r \x3d\x3d 0.0) {\n              gl_Position \x3d vec4(0.0);\n              return;\n            }"],["\n            vec4 cov \x3d texture2D(coverageTex, uv0);\n            // if no highlight pixel set in this block, hide block\n            if (cov.r \x3d\x3d 0.0) {\n              gl_Position \x3d vec4(0.0);\n              return;\n            }"]))):
"")),a.fragment.uniforms.add("tex","sampler2D"),a.fragment.uniforms.add("origin","sampler2D"),a.fragment.uniforms.add("color","vec4"),a.fragment.uniforms.add("haloColor","vec4"),a.fragment.uniforms.add("outlineSize","float"),a.fragment.uniforms.add("blurSize","float"),a.fragment.uniforms.add("opacities","vec4"),f.add(c.glsl(v||(v=b(["\n      void main() {\n        // Read the highlight intensity from the blurred highlight image\n        vec4 blurredHighlightValue \x3d texture2D(tex, uv);\n        float highlightIntensity \x3d blurredHighlightValue.a;\n\n        // Discard all pixels which are not affected by highlight\n        if (highlightIntensity \x3d\x3d 0.0) {\n          discard;\n        }\n\n        vec4 origin_color \x3d texture2D(origin, uv);\n\n        float outlineIntensity;\n        float fillIntensity;\n\n        // if occluded\n        if (blurredHighlightValue.g \x3e blurredHighlightValue.b) {\n          outlineIntensity \x3d haloColor.w * opacities[1];\n          fillIntensity \x3d color.w * opacities[3];\n        }\n        // if unoccluded\n        else {\n          outlineIntensity \x3d haloColor.w * opacities[0];\n          fillIntensity \x3d color.w * opacities[2];\n        }\n\n        float inner \x3d 1.0 - outlineSize / 9.0;\n        float outer \x3d 1.0 - (outlineSize + blurSize) / 9.0;\n\n        float outlineFactor \x3d smoothstep(outer, inner, highlightIntensity);\n        //float fillFactor \x3d smoothstep(0.6, 0.72, highlightIntensity);\n        float fillFactor \x3d any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;\n        float intensity \x3d outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;\n\n        // Blending equation: gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\n        // I.e., color should not be premultiplied with alpha\n        gl_FragColor \x3d vec4(mix(haloColor.rgb, color.rgb, fillFactor), intensity);\n      }"],
["\n      void main() {\n        // Read the highlight intensity from the blurred highlight image\n        vec4 blurredHighlightValue \x3d texture2D(tex, uv);\n        float highlightIntensity \x3d blurredHighlightValue.a;\n\n        // Discard all pixels which are not affected by highlight\n        if (highlightIntensity \x3d\x3d 0.0) {\n          discard;\n        }\n\n        vec4 origin_color \x3d texture2D(origin, uv);\n\n        float outlineIntensity;\n        float fillIntensity;\n\n        // if occluded\n        if (blurredHighlightValue.g \x3e blurredHighlightValue.b) {\n          outlineIntensity \x3d haloColor.w * opacities[1];\n          fillIntensity \x3d color.w * opacities[3];\n        }\n        // if unoccluded\n        else {\n          outlineIntensity \x3d haloColor.w * opacities[0];\n          fillIntensity \x3d color.w * opacities[2];\n        }\n\n        float inner \x3d 1.0 - outlineSize / 9.0;\n        float outer \x3d 1.0 - (outlineSize + blurSize) / 9.0;\n\n        float outlineFactor \x3d smoothstep(outer, inner, highlightIntensity);\n        //float fillFactor \x3d smoothstep(0.6, 0.72, highlightIntensity);\n        float fillFactor \x3d any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;\n        float intensity \x3d outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;\n\n        // Blending equation: gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\n        // I.e., color should not be premultiplied with alpha\n        gl_FragColor \x3d vec4(mix(haloColor.rgb, color.rgb, fillFactor), intensity);\n      }"])))));
return a};var h,k,m,n,l,q,r,p,u,t,v});