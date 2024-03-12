/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{h as e}from"../core/lang.js";import{c as t}from"./mathUtils.js";import{f as o}from"./mat3.js";import{c as i}from"./mat3f64.js";import{i as a}from"./mat4.js";import{c as r}from"./mat4f64.js";import{c as s,f as n}from"./vec2f64.js";import{s as l,g as c,n as d,c as p,b as f,p as u,l as v,i as h,w as g,d as m,h as x}from"./vec3.js";import{c as S,f as b}from"./vec3f64.js";import{Z as O,b as P,c as C,f as y}from"./vec4f64.js";import{c as w}from"./aaBoundingRect.js";import{o as A}from"./BufferView.js";import{h as z,c as T,F as j,j as E,E as D,H as V,m as R,d as I,g as F,i as _,I as U,C as N,V as L,O as M,a as B,S as H,y as $,k as G,l as q,o as k,P as W,D as Y,r as X,J as Z,K as J}from"./StencilUtils.js";import{d as K}from"./debugFlags2.js";import{n as Q}from"./InterleavedLayout.js";import{S as ee,a as te,b as oe,c as ie}from"./VerticalOffset.glsl.js";import{g as ae}from"./interfaces5.js";import{V as re}from"./VertexAttribute.js";import{G as se,a as ne}from"./GLTextureMaterial.js";import{D as le,M as ce,b as de,c as pe,p as fe,v as ue,R as ve}from"./Material.js";import{a as he}from"./Util.js";import{c as ge,d as me,e as xe,f as Se,g as be,h as Oe}from"./DefaultBufferWriter.js";import{g as Pe,j as Ce}from"./vec2.js";import{B as ye}from"./RenderPlugin.js";import{m as we,H as Ae}from"./VertexArrayObject2.js";import{o as ze,u as Te}from"./OutputHighlight.glsl.js";import{T as je,s as Ee,d as De,m as Ve,o as Re,e as Ie}from"./OrderIndependentTransparency.js";import{V as Fe}from"./ViewingMode.js";import{j as _e,k as Ue,m as Ne}from"./enums.js";import{_ as Le}from"./tslib.es6.js";import{p as Me}from"./ShaderTechniqueConfiguration.js";function Be(e,t){e.include(ee),e.attributes.add(re.POSITION,"vec3"),e.attributes.add(re.NORMAL,"vec3"),e.attributes.add(re.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;z(o,t),T(o,t),o.uniforms.add(new j("viewport",((e,t)=>t.camera.fullViewport)),new E("polygonOffset",(e=>e.shaderPolygonOffset)),new E("cameraGroundRelative",((e,t)=>t.camera.aboveGround?1:-1))),t.hasVerticalOffset&&te(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(ae`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(ae`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${t.multipassEnabled?ae.float(0):ae`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.draped&&!t.hasVerticalOffset||D(o),t.draped||(o.uniforms.add(new E("perDistancePixelRatio",((e,t)=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)))),o.code.add(ae`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${ae.float(.5)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),t.screenCenterOffsetUnitsEnabled&&V(o),t.hasScreenSizePerspective&&oe(o),o.code.add(ae`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?ae`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":ae`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}class He{constructor(){this.factor=new $e,this.factorAlignment=new $e}}class $e{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function Ge(e){e.uniforms.add(new ye("alignPixelEnabled",((e,t)=>t.alignPixelEnabled))),e.code.add(ae`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(ae`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function qe(e,t){const{vertex:o,fragment:i}=e;o.include(Ge),t.multipassEnabled&&(o.include(we),e.varyings.add("depth","float")),o.code.add(ae`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.multipassEnabled?ae`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${t.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.include(R,t),i.code.add(ae`
  void main() {
    fragColor = vec4(1);
    ${t.multipassEnabled?ae`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function ke(e){e.vertex.uniforms.add(new E("renderTransparentlyOccludedHUD",((e,t)=>t.hudRenderStyle===Ae.Occluded?1:t.hudRenderStyle===Ae.NotOccluded?0:.75)),new j("viewport",((e,t)=>t.camera.fullViewport)),new I("hudVisibilityTexture",((e,t)=>t.hudVisibility?.getTexture()))),e.vertex.include(Ge),e.vertex.code.add(ae`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function We(e){return e.outlineColor[3]>0&&e.outlineSize>0}function Ye(e,t=Xe){var o,i,a;return e.textureIsSignedDistanceField?(o=e.anchorPosition,a=t,null!=(i=e.distanceFieldBoundingBox)?Pe(a,o[0]*(i[2]-i[0])+i[0],o[1]*(i[3]-i[1])+i[1]):Pe(a,0,0)):Ce(t,e.anchorPosition),t}const Xe=s(),Ze=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new F,o=e.signedDistanceFieldEnabled;if(t.include(Be,e),t.include(_,e),e.occlusionPass)return t.include(qe,e),t;const{vertex:i,fragment:a}=t;t.include(ee),a.include(U),a.include(N),t.include(L,e),t.include(M,e),t.include(ke),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),t.varyings.add("voccluded","float"),i.uniforms.add(new j("viewport",((e,t)=>t.camera.fullViewport)),new B("screenOffset",((e,t)=>Pe(Xe,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new B("anchorPosition",(e=>Ye(e))),new j("materialColor",(e=>e.color))),V(i),o&&(i.uniforms.add(new j("outlineColor",(e=>e.outlineColor))),a.uniforms.add(new j("outlineColor",(e=>We(e)?e.outlineColor:O)),new E("outlineSize",(e=>We(e)?e.outlineSize:0)))),e.pixelSnappingEnabled&&i.include(Ge),e.hasScreenSizePerspective&&(ie(i),oe(i)),e.debugDrawLabelBorder&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(re.UV0,"vec2"),t.attributes.add(re.COLOR,"vec4"),t.attributes.add(re.SIZE,"vec2"),t.attributes.add(re.FEATUREATTRIBUTE,"vec4"),i.code.add(ae`
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
      ${e.hasScreenSizePerspective?ae`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:ae`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const r=ae`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,s=e.pixelSnappingEnabled?o?ae`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:ae`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:ae`posProj += quadOffset;`;i.code.add(ae`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${r}
    ${e.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${e.output===H.ObjectAndLayerIdColor?ae`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${ae.float($)};
    ${o?`alphaDiscard = alphaDiscard && outlineColor.a < ${ae.float($)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${s}
      gl_Position = posProj;
    }

    vtc = uv;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?ae`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),a.uniforms.add(new I("tex",(e=>e.texture)));const n=e.debugDrawLabelBorder?ae`(isBorder > 0.0 ? 0.0 : ${ae.float(G)})`:ae.float(G),l=ae`
    ${e.debugDrawLabelBorder?ae`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${e.sampleSignedDistanceFieldTexelCenter?ae`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:ae`
      vec2 samplePos = vtc;
      `}

    ${o?ae`
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
          outlineAlphaFactor + fillAlphaFactor < ${n} ||
          fillPixelColor.a + outlinePixelColor.a < ${ae.float($)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${n}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:ae`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${n}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?ae`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(e.output){case H.Color:a.code.add(ae`
        void main() {
          ${l}
          ${e.transparencyPassType===je.FrontFace?"fragColor.rgb /= fragColor.a;":""}
        }`);break;case H.Alpha:a.code.add(ae`
        void main() {
          ${l}
          fragColor = vec4(fragColor.a);
        }`);break;case H.ObjectAndLayerIdColor:a.code.add(ae`
        void main() {
          ${l}
          outputObjectAndLayerIdColor();
        }`);break;case H.Highlight:a.constants.add("occludedHighlightFlag","vec4",ze),a.constants.add("unoccludedHighlightFlag","vec4",Te),a.code.add(ae`
        void main() {
          ${l}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return t},calculateAnchorPosForRendering:Ye},Symbol.toStringTag,{value:"Module"}));class Je extends k{initializeConfiguration(e,t){t.spherical=e.viewingMode===Fe.Global}initializeProgram(e){return new W(e.rctx,Je.shader.get().build(this.configuration),le)}initializePipeline(){const e=this.configuration.transparencyPassType,t=this.configuration,o=e===je.NONE,i=e===je.FrontFace,a=this.configuration.hasPolygonOffset?Ke:null,r=t.draped?null:(o||i)&&t.output!==H.Highlight&&(t.depthEnabled||t.occlusionPass)?De:null;return Ve({blending:t.output===H.Color||t.output===H.Alpha||t.output===H.Highlight?o?Qe:Re(e):null,depthTest:t.draped?null:{func:Ue.LEQUAL},depthWrite:r,colorWrite:Ie,polygonOffset:a})}get primitiveType(){return this.configuration.occlusionPass?Ne.POINTS:Ne.TRIANGLES}}Je.shader=new q(Ze,(()=>Promise.resolve().then((()=>Ze))));const Ke={factor:0,units:-4},Qe=Ee(_e.ONE,_e.ONE_MINUS_SRC_ALPHA);class et extends Y{constructor(){super(...arguments),this.output=H.Color,this.transparencyPassType=je.NONE,this.screenCenterOffsetUnitsEnabled=!1,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}Le([Me({count:H.COUNT})],et.prototype,"output",void 0),Le([Me({count:je.COUNT})],et.prototype,"transparencyPassType",void 0),Le([Me()],et.prototype,"screenCenterOffsetUnitsEnabled",void 0),Le([Me()],et.prototype,"spherical",void 0),Le([Me()],et.prototype,"occlusionTestEnabled",void 0),Le([Me()],et.prototype,"signedDistanceFieldEnabled",void 0),Le([Me()],et.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),Le([Me()],et.prototype,"vvSize",void 0),Le([Me()],et.prototype,"vvColor",void 0),Le([Me()],et.prototype,"hasVerticalOffset",void 0),Le([Me()],et.prototype,"hasScreenSizePerspective",void 0),Le([Me()],et.prototype,"debugDrawLabelBorder",void 0),Le([Me()],et.prototype,"hasSlicePlane",void 0),Le([Me()],et.prototype,"hasPolygonOffset",void 0),Le([Me()],et.prototype,"depthEnabled",void 0),Le([Me()],et.prototype,"pixelSnappingEnabled",void 0),Le([Me()],et.prototype,"draped",void 0),Le([Me()],et.prototype,"multipassEnabled",void 0),Le([Me()],et.prototype,"cullAboveGround",void 0),Le([Me()],et.prototype,"occlusionPass",void 0),Le([Me()],et.prototype,"objectAndLayerIdColorInstanced",void 0),Le([Me({constValue:!0})],et.prototype,"hasSliceInVertexProgram",void 0),Le([Me({constValue:!1})],et.prototype,"hasVvInstancing",void 0);class tt extends ce{constructor(e){super(e,new Ot),this._configuration=new et,this.produces=new Map([[X.HUD_MATERIAL,e=>Z(e)&&!this.parameters.drawInSecondSlot],[X.LABEL_MATERIAL,e=>Z(e)&&this.parameters.drawInSecondSlot],[X.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[X.DRAPED_MATERIAL,e=>Z(e)]])}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.draped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===X.OCCLUSION_PIXELS&&this.parameters.occlusionTest,e===H.Color&&(this._configuration.debugDrawLabelBorder=!!K.LABELS_SHOW_BORDER),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,r,s,n){if(!(i.options.selectionMode&&i.options.hud&&e.visible&&i.point))return;const g=this.parameters,m=i.point,x=i.camera;let{scaleX:b,scaleY:O}=this._getScreenScale(e);b*=x.pixelRatio,O*=x.pixelRatio,o(dt,t),e.attributes.has(re.FEATUREATTRIBUTE)&&function(e){const t=e[0],o=e[1],i=e[2],a=e[3],r=e[4],s=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+o*o+i*i),p=1/Math.sqrt(a*a+r*r+s*s),f=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=o*d,e[2]=i*d,e[3]=a*p,e[4]=r*p,e[5]=s*p,e[6]=n*f,e[7]=l*f,e[8]=c*f}(dt);const P=e.attributes.get(re.POSITION),C=e.attributes.get(re.SIZE),y=e.attributes.get(re.NORMAL),w=e.attributes.get(re.CENTEROFFSETANDDISTANCE);he(P.size>=3);const A=Ye(g),z="screen"===this.parameters.centerOffsetUnits;for(let e=0;e<P.data.length/P.size;e++){const o=e*P.size;l(rt,P.data[o],P.data[o+1],P.data[o+2]),c(rt,rt,t);const r=e*C.size;St[0]=C.data[r]*b,St[1]=C.data[r+1]*O,c(rt,rt,x.viewMatrix);const s=e*w.size;if(l(ut,w.data[s],w.data[s+1],w.data[s+2]),!z&&(rt[0]+=ut[0],rt[1]+=ut[1],0!==ut[2])){const e=ut[2];d(ut,rt),p(rt,rt,f(ut,ut,e))}const T=e*y.size;if(l(st,y.data[T],y.data[T+1],y.data[T+2]),this._normalAndViewAngle(st,dt,x,gt),this._applyVerticalOffsetTransformationView(rt,gt,x,at),x.applyProjection(rt,nt),nt[0]>-1){z&&(ut[0]||ut[1])&&(nt[0]+=ut[0]*x.pixelRatio,0!==ut[1]&&(nt[1]+=de(ut[1],at.factorAlignment)*x.pixelRatio),x.unapplyProjection(nt,rt)),nt[0]+=this.parameters.screenOffset[0]*x.pixelRatio,nt[1]+=this.parameters.screenOffset[1]*x.pixelRatio,nt[0]=Math.floor(nt[0]),nt[1]=Math.floor(nt[1]),pe(St,at.factor,St);const e=mt*x.pixelRatio;let t=0;if(g.textureIsSignedDistanceField&&(t=g.outlineSize*x.pixelRatio/2),it(m,nt[0],nt[1],St,e,t,g,A)){const e=i.ray;if(c(ct,rt,a(ft,x.viewMatrix)),nt[0]=m[0],nt[1]=m[1],x.unprojectFromRenderScreen(nt,rt)){const t=S();u(t,e.direction);const o=1/v(t);f(t,t,o),n(h(e.origin,rt)*o,t,-1,!0,1,ct)}}}}}intersectDraped(e,t,o,i,a,r){const s=e.attributes.get(re.POSITION),n=e.attributes.get(re.SIZE),l=this.parameters,c=Ye(l);let{scaleX:d,scaleY:p}=this._getScreenScale(e);d*=e.screenToWorldRatio,p*=e.screenToWorldRatio;const f=xt*e.screenToWorldRatio;for(let t=0;t<s.data.length/s.size;t++){const o=t*s.size,u=s.data[o],v=s.data[o+1],h=t*n.size;St[0]=n.data[h]*d,St[1]=n.data[h+1]*p;let g=0;l.textureIsSignedDistanceField&&(g=l.outlineSize*e.screenToWorldRatio/2),it(i,u,v,St,f,g,l,c)&&a(r.dist,r.normal,-1,!1)}}createBufferWriter(){return new yt(this)}_normalAndViewAngle(e,t,i,a){return(function(e){return e instanceof Float32Array&&e.length>=16}(r=t)||function(e){return Array.isArray(e)&&e.length>=16}(r))&&(t=o(pt,t)),g(a.normal,e,t),c(a.normal,a.normal,i.viewInverseTransposeMatrix),a.cosAngle=m(lt,bt),a;var r}_updateScaleInfo(e,t,o){const i=this.parameters;null!=i.screenSizePerspective?fe(o,t,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),null!=i.screenSizePerspectiveAlignment?fe(o,t,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,t,o,i,a,r,s){const n=this._normalAndViewAngle(t,o,a,gt);return this._applyVerticalGroundOffsetView(e,n,a,s),this._applyVerticalOffsetTransformationView(s,n,a,r),this._applyPolygonOffsetView(s,n,i[3],a,s),this._applyCenterOffsetView(s,i,s),s}applyShaderOffsetsNDC(e,t,o,i,a){return this._applyCenterOffsetNDC(e,t,o,i),null!=a&&u(a,i),this._applyPolygonOffsetNDC(i,t,o,i),i}_applyPolygonOffsetView(e,o,i,a,r){const s=a.aboveGround?1:-1;let n=Math.sign(i);0===n&&(n=s);const l=s*n;if(this.parameters.shaderPolygonOffset<=0)return u(r,e);const c=t(Math.abs(o.cosAngle),.01,1),d=1-Math.sqrt(1-c*c)/c/a.viewport[2];return f(r,e,l>0?d:1/d),r}_applyVerticalGroundOffsetView(e,t,o,i){const a=v(e),r=o.aboveGround?1:-1,s=.5*o.computeRenderPixelSizeAtDist(a),n=f(rt,t.normal,r*s);return x(i,e,n),i}_applyVerticalOffsetTransformationView(e,t,o,i){const a=this.parameters;if(!a.verticalOffset?.screenLength){if(a.screenSizePerspective||a.screenSizePerspectiveAlignment){const o=v(e);this._updateScaleInfo(i,o,t.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const r=v(e),s=a.screenSizePerspectiveAlignment??a.screenSizePerspective,n=ue(o,r,a.verticalOffset,t.cosAngle,s);return this._updateScaleInfo(i,r,t.cosAngle),f(t.normal,t.normal,n),x(e,e,t.normal)}_applyCenterOffsetView(e,t,o){const i="screen"!==this.parameters.centerOffsetUnits;return o!==e&&u(o,e),i&&(o[0]+=t[0],o[1]+=t[1],t[2]&&(d(st,o),x(o,o,f(st,st,t[2])))),o}_applyCenterOffsetNDC(e,t,o,i){const a="screen"!==this.parameters.centerOffsetUnits;return i!==e&&u(i,e),a||(i[0]+=t[0]/o.fullWidth*2,i[1]+=t[1]/o.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,o,i){const a=this.parameters.shaderPolygonOffset;if(e!==i&&u(i,e),a){const e=o.aboveGround?1:-1,r=e*Math.sign(t[3]);i[2]-=(r||e)*a}return i}createGLMaterial(e){return new ot(e)}calculateRelativeScreenBounds(e,t,o=w()){return function(e,t,o,i){i[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*o,i[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*o}(this.parameters,e,t,o),o[2]=o[0]+e[0],o[3]=o[1]+e[1],o}_getScreenScale(e){const t=e.attributes.get(re.FEATUREATTRIBUTE);if(null==t)return{scaleX:1,scaleY:1};const o=P(t.data,ht),[i,a]=J(vt,this.parameters,o);return{scaleX:i,scaleY:a}}}class ot extends se{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(Je,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function it(e,t,o,i,a,r,s,n){let l=t-a-(n[0]>0?i[0]*n[0]:0),c=l+i[0]+2*a,d=o-a-(n[1]>0?i[1]*n[1]:0),p=d+i[1]+2*a;const f=s.distanceFieldBoundingBox;return s.textureIsSignedDistanceField&&null!=f&&(l+=i[0]*f[0],d+=i[1]*f[1],c-=i[0]*(1-f[2]),p-=i[1]*(1-f[3]),l-=r,c+=r,d-=r,p+=r),e[0]>l&&e[0]<c&&e[1]>d&&e[1]<p}const at=new He,rt=S(),st=S(),nt=C(),lt=S(),ct=S(),dt=i(),pt=i(),ft=r(),ut=S(),vt=S(),ht=C(),gt={normal:lt,cosAngle:0},mt=1,xt=2,St=[0,0],bt=b(0,0,1);class Ot extends ne{constructor(){super(...arguments),this.renderOccluded=ve.Occlude,this.isDecoration=!1,this.color=y(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=n(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=y(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.draped=!1}}const Pt=Q().vec3f(re.POSITION).vec3f(re.NORMAL).vec2f(re.UV0).vec4u8(re.COLOR).vec2f(re.SIZE).vec4f(re.CENTEROFFSETANDDISTANCE).vec4f(re.FEATUREATTRIBUTE),Ct=Pt.clone().vec4u8(re.OBJECTANDLAYERIDCOLOR);class yt{constructor(t){this._material=t,this.vertexBufferLayout=e("enable-feature:objectAndLayerId-rendering")?Ct:Pt}elementCount(e){return 6*e.attributes.get(re.POSITION).indices.length}write(e,t,o,i,a){ge(o.attributes.get(re.POSITION),e,i.position,a,6),me(o.attributes.get(re.NORMAL),t,i.normal,a,6);const r=o.attributes.get(re.UV0).data;let s,n,l,c;if(null==r||r.length<4){const e=this._material.parameters;s=0,n=0,l=e.texCoordScale[0],c=e.texCoordScale[1]}else s=r[0],n=r[1],l=r[2],c=r[3];l=Math.min(1.99999,l+1),c=Math.min(1.99999,c+1);let d=o.attributes.get(re.POSITION).indices.length,p=a;const f=i.uv0;for(let e=0;e<d;++e)f.set(p,0,s),f.set(p,1,n),p++,f.set(p,0,l),f.set(p,1,n),p++,f.set(p,0,l),f.set(p,1,c),p++,f.set(p,0,l),f.set(p,1,c),p++,f.set(p,0,s),f.set(p,1,c),p++,f.set(p,0,s),f.set(p,1,n),p++;xe(o.attributes.get(re.COLOR),4,i.color,a,6);const{data:u,indices:v}=o.attributes.get(re.SIZE);d=v.length;const h=i.size;p=a;for(let e=0;e<d;++e){const t=u[2*v[e]],o=u[2*v[e]+1];for(let e=0;e<6;++e)h.set(p,0,t),h.set(p,1,o),p++}if(o.attributes.get(re.CENTEROFFSETANDDISTANCE)?Se(o.attributes.get(re.CENTEROFFSETANDDISTANCE),i.centerOffsetAndDistance,a,6):be(i.centerOffsetAndDistance,a,6*d),o.attributes.get(re.FEATUREATTRIBUTE)?Se(o.attributes.get(re.FEATUREATTRIBUTE),i.featureAttribute,a,6):be(i.featureAttribute,a,6*d),null!=o.objectAndLayerIdColor){const e=o.attributes.get(re.POSITION)?.indices;if(e){const t=e.length,r=i.getField(re.OBJECTANDLAYERIDCOLOR,A);Oe(o.objectAndLayerIdColor,r,t,a,6)}}}}export{Ge as A,tt as H,He as S,Be as a,ke as b};
