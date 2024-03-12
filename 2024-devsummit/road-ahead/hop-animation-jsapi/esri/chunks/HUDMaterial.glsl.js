// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ../core/libs/gl-matrix-2/factories/vec4f64 ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDVisibility.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(r,m,t,A,h,B,C,D,E,F,G,w,H,k,I,J,u,K,x,n,L,b,M,N,O,p){function y(a){const c=new M.ShaderBuilder;var e=a.signedDistanceFieldEnabled;c.include(E.HUD,a);c.include(B.SliceDraw,a);if(a.occlusionPass)return c.include(F.HUDOcclusionPass,a),c;const {vertex:g,fragment:f}=c;c.include(u.ScreenSizePerspective);f.include(J.RgbaFloatEncoding);f.include(I.ColorConversion);c.include(H.VisualVariables,a);c.include(C.ObjectAndLayerIdColor,a);c.include(G.HUDVisibility);c.varyings.add("vcolor","vec4");c.varyings.add("vtc",
"vec2");c.varyings.add("vsize","vec2");c.varyings.add("voccluded","float");g.uniforms.add(new n.Float4PassUniform("viewport",(d,q)=>q.camera.fullViewport),new x.Float2PassUniform("screenOffset",(d,q)=>m.set(z,2*d.screenOffset[0]*q.camera.pixelRatio,2*d.screenOffset[1]*q.camera.pixelRatio)),new x.Float2PassUniform("anchorPosition",d=>v(d)),new n.Float4PassUniform("materialColor",d=>d.color));K.addPixelRatio(g);e&&(g.uniforms.add(new n.Float4PassUniform("outlineColor",d=>d.outlineColor)),f.uniforms.add(new n.Float4PassUniform("outlineColor",
d=>0<d.outlineColor[3]&&0<d.outlineSize?d.outlineColor:A.ZEROS),new L.FloatPassUniform("outlineSize",d=>0<d.outlineColor[3]&&0<d.outlineSize?d.outlineSize:0)));a.pixelSnappingEnabled&&g.include(D.AlignPixel);a.hasScreenSizePerspective&&(u.addScreenSizePerspective(g),u.addScreenSizePerspectiveAlignment(g));a.debugDrawLabelBorder&&c.varyings.add("debugBorderCoords","vec4");c.attributes.add(p.VertexAttribute.UV0,"vec2");c.attributes.add(p.VertexAttribute.COLOR,"vec4");c.attributes.add(p.VertexAttribute.SIZE,
"vec2");c.attributes.add(p.VertexAttribute.FEATUREATTRIBUTE,"vec4");g.code.add(b.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${a.hasScreenSizePerspective?b.glsl`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:b.glsl`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${a.vvSize?"inputSize *\x3d vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);var l=b.glsl`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`;const P=a.pixelSnappingEnabled?e?b.glsl`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:b.glsl`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:b.glsl`posProj += quadOffset;`;g.code.add(b.glsl`
    ${a.occlusionTestEnabled?"if (visible) {":""}
    ${l}
    ${a.vvColor?"vcolor \x3d interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor \x3d color / 255.0 * materialColor;"}

    ${a.output===h.ShaderOutput.ObjectAndLayerIdColor?b.glsl`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${b.glsl.float(k.symbolAlphaCutoff)};
    ${e?`alphaDiscard = alphaDiscard && outlineColor.a < ${b.glsl.float(k.symbolAlphaCutoff)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${P}
      gl_Position = posProj;
    }

    vtc = uv;

    ${a.debugDrawLabelBorder?"debugBorderCoords \x3d vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${a.occlusionTestEnabled?b.glsl`} else { vtc = vec2(0.0);
      ${a.debugDrawLabelBorder?"debugBorderCoords \x3d vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `);f.uniforms.add(new N.Texture2DPassUniform("tex",d=>d.texture));l=a.debugDrawLabelBorder?b.glsl`(isBorder > 0.0 ? 0.0 : ${b.glsl.float(k.defaultMaskAlphaCutoff)})`:b.glsl.float(k.defaultMaskAlphaCutoff);e=b.glsl`
    ${a.debugDrawLabelBorder?b.glsl`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${a.sampleSignedDistanceFieldTexelCenter?b.glsl`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:b.glsl`
      vec2 samplePos = vtc;
      `}

    ${e?b.glsl`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${l} ||
          fillPixelColor.a + outlinePixelColor.a < ${b.glsl.float(k.symbolAlphaCutoff)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${l}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:b.glsl`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${l}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${a.debugDrawLabelBorder?b.glsl`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(a.output){case h.ShaderOutput.Color:f.code.add(b.glsl`
        void main() {
          ${e}
          ${a.transparencyPassType===O.TransparencyPassType.FrontFace?"fragColor.rgb /\x3d fragColor.a;":""}
        }`);break;case h.ShaderOutput.Alpha:f.code.add(b.glsl`
        void main() {
          ${e}
          fragColor = vec4(fragColor.a);
        }`);break;case h.ShaderOutput.ObjectAndLayerIdColor:f.code.add(b.glsl`
        void main() {
          ${e}
          outputObjectAndLayerIdColor();
        }`);break;case h.ShaderOutput.Highlight:f.constants.add("occludedHighlightFlag","vec4",w.occludedHighlightFlag),f.constants.add("unoccludedHighlightFlag","vec4",w.unoccludedHighlightFlag),f.code.add(b.glsl`
        void main() {
          ${e}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return c}function v(a,c=z){if(a.textureIsSignedDistanceField){var e=a.anchorPosition;a=a.distanceFieldBoundingBox;null!=a?m.set(c,e[0]*(a[2]-a[0])+a[0],e[1]*(a[3]-a[1])+a[1]):m.set(c,0,0)}else m.copy(c,a.anchorPosition);return c}const z=t.create();t=Object.freeze(Object.defineProperty({__proto__:null,build:y,calculateAnchorPosForRendering:v},Symbol.toStringTag,{value:"Module"}));r.HUDMaterial=t;r.build=y;r.calculateAnchorPosForRendering=v});