// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../output/BlendOptions ./BackgroundGrid.glsl ../util/BlendModes.glsl ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/interfaces ../../shaderModules/Texture2DPassUniform".split(" "),function(b,m,n,p,q,r,t,c,u){b.BlendLayersOutput=void 0;(function(a){a[a.Composite=0]="Composite";a[a.ColorComposite=1]="ColorComposite";a[a.GridComposite=2]="GridComposite";a[a.GroupBackgroundComposite=
3]="GroupBackgroundComposite";a[a.COUNT=4]="COUNT"})(b.BlendLayersOutput||(b.BlendLayersOutput={}));b.BaseOpacityMode=void 0;(function(a){a[a.NotRequired=0]="NotRequired";a[a.Required=1]="Required";a[a.COUNT=2]="COUNT"})(b.BaseOpacityMode||(b.BaseOpacityMode={}));b.PremultipliedAlphaSource=void 0;(function(a){a[a.Off=0]="Off";a[a.On=1]="On";a[a.COUNT=2]="COUNT"})(b.PremultipliedAlphaSource||(b.PremultipliedAlphaSource={}));class v extends c.NoParameters{constructor(){super(...arguments);this.baseOpacity=
1;this.backgroundColor=m.ZEROS;this.fboTexture=null}}b.TileBackground=function(a,d){const g=d.output===b.BlendLayersOutput.GridComposite,h=d.output===b.BlendLayersOutput.ColorComposite,k=d.output===b.BlendLayersOutput.GroupBackgroundComposite,l=d.output===b.BlendLayersOutput.Composite;g&&a.fragment.include(p.BackgroundGrid);h&&a.fragment.uniforms.add(new r.Float3PassUniform("backgroundColor",e=>e.backgroundColor));const f=d.baseOpacityMode===b.BaseOpacityMode.Required;f&&a.fragment.uniforms.add(new t.FloatPassUniform("baseOpacity",
e=>e.baseOpacity));l&&a.fragment.uniforms.add(new u.Texture2DPassUniform("fboColor",e=>e.fboTexture));const w=d.blendMode!==n.LayerBlendMode.Normal,x=d.premultipliedSource===b.PremultipliedAlphaSource.On;a.fragment.include(q.BlendModes,d);a.fragment.code.add(c.glsl`
    vec4 getBackground(vec2 uv) {
      return ${f?c.glsl`baseOpacity *`:""} ${k?c.glsl`vec4(0.0, 0.0, 0.0, 0.0)`:h?c.glsl`vec4(backgroundColor, 1.0)`:g?c.glsl`vec4(gridColor(uv), 1.0)`:c.glsl`texelFetch(fboColor, ivec2(gl_FragCoord.xy), 0)`};
    }

    vec4 blendLayers(vec4 bgColor, vec4 colorLayer, float opacity) {
      ${w?c.glsl`
          vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
          vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
          return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);`:c.glsl`
          float composeAlpha = colorLayer.a * opacity;
          return ${!x&&(l&&!f||k)?c.glsl`colorLayer * opacity;`:c.glsl`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`}`}
    }`)};b.TileBackgroundPassParameters=v;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});