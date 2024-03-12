// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/TransparencyPassType ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/materials/PatternStyle".split(" "),
function(t,u,d,x,y,z,A,B,C,D,E,F,v,G,r,b,H,I,m,f){function w(a){const c=new H.ShaderBuilder,g=a.multipassEnabled&&(a.output===d.ShaderOutput.Color||a.output===d.ShaderOutput.Alpha),{vertex:e,fragment:h,attributes:n,varyings:p}=c;v.addProjViewLocalOrigin(e,a);c.include(y.Transform,a);c.include(z.VertexColor,a);c.include(D.VisualVariables,a);a.draped?e.uniforms.add(new r.FloatPassUniform("worldToScreenRatio",(q,k)=>1/k.screenToPCSRatio)):n.add(m.VertexAttribute.BOUNDINGRECT,"mat3");n.add(m.VertexAttribute.POSITION,
"vec3");n.add(m.VertexAttribute.UVMAPSPACE,"vec4");a.vvColor&&n.add(m.VertexAttribute.COLORFEATUREATTRIBUTE,"float");p.add("vColor","vec4");p.add("vpos","vec3");p.add("vuv","vec2");g&&p.add("depth","float");e.uniforms.add(new G.Float4PassUniform("uColor",q=>q.color));var l=a.style===f.Style.ForwardDiagonal||a.style===f.Style.BackwardDiagonal||a.style===f.Style.DiagonalCross;l&&e.code.add(b.glsl`
      const mat2 rotate45 = mat2(${b.glsl.float(.70710678118)}, ${b.glsl.float(-.70710678118)},
                                 ${b.glsl.float(.70710678118)}, ${b.glsl.float(.70710678118)});
    `);a.draped||(v.addCameraPosition(e,a),e.uniforms.add(new r.FloatPassUniform("worldToScreenPerDistanceRatio",(q,k)=>1/k.camera.perScreenPixelRatio)),e.code.add(b.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),e.code.add(b.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),e.code.add(b.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${b.glsl.float(.08715574274)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `));e.code.add(b.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${l?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${l?" * rotate45":""};

      ${a.draped?"":b.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${b.glsl.float(a.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);if(l=a.output===d.ShaderOutput.LinearDepth)c.include(A.OutputDepth,a),u.addNearFar(c),u.addLinearDepth(c);e.code.add(b.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${g?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      ${a.hasVertexColors?"vColor *\x3d uColor;":a.vvColor?"vColor \x3d uColor * interpolateVVColor(colorFeatureAttribute);":"vColor \x3d uColor;"}
      gl_Position = ${l?b.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:b.glsl`transformPosition(proj, view, vpos);`}
    }
  `);c.include(x.SliceDraw,a);h.include(F.ColorConversion);a.draped&&h.uniforms.add(new r.FloatPassUniform("texelSize",(q,k)=>1/k.camera.pixelRatio));a.output===d.ShaderOutput.Highlight&&c.include(B.OutputHighlight,a);g&&c.include(C.multipassTerrainTest,a);a.output!==d.ShaderOutput.Highlight&&(h.code.add(b.glsl`
      const float lineWidth = ${b.glsl.float(a.lineWidth)};
      const float spacing = ${b.glsl.float(a.patternSpacing)};
      const float spacingINV = ${b.glsl.float(1/a.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),a.draped||h.code.add(b.glsl`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`));h.code.add(b.glsl`
    void main() {
      discardBySlice(vpos);
      ${g?"terrainDepthTest(depth);":""}
      vec4 color = vColor;
      color = highlightSlice(color, vpos);

      ${a.output!==d.ShaderOutput.Highlight?b.glsl`color.a *= ${J(a)};`:""}

      ${a.output===d.ShaderOutput.ObjectAndLayerIdColor?b.glsl`color.a = 1.0;`:""}

      if (color.a < ${b.glsl.float(E.symbolAlphaCutoff)}) {
        discard;
      }

      ${a.output===d.ShaderOutput.Alpha?b.glsl`fragColor = vec4(color.a);`:""}

      ${a.output===d.ShaderOutput.Color?b.glsl`fragColor = color; ${a.transparencyPassType===I.TransparencyPassType.Color?"fragColor \x3d premultiplyAlpha(fragColor);":""}`:""}
      ${a.output===d.ShaderOutput.Highlight?b.glsl`outputHighlight();`:""}
      ${a.output===d.ShaderOutput.LinearDepth?b.glsl`outputDepth(linearDepth);`:""};
    }
  `);return c}function J(a){function c(g){return a.draped?b.glsl`coverage(vuv.${g}, texelSize)`:b.glsl`sampleAA(vuv.${g})`}switch(a.style){case f.Style.ForwardDiagonal:case f.Style.Horizontal:return c("y");case f.Style.BackwardDiagonal:case f.Style.Vertical:return c("x");case f.Style.DiagonalCross:case f.Style.Cross:return b.glsl`
        1.0 - (1.0 - ${c("x")}) * (1.0 - ${c("y")})
      `;default:return"0.0"}}const K=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));t.Pattern=K;t.build=w});