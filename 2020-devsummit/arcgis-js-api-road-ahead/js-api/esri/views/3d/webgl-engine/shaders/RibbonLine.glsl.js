// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/makeTemplateObjectHelper ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/attributes/RibbonVertexPosition.glsl ../core/shaderLibrary/shading/LineStipple.glsl ../core/shaderLibrary/shading/PiUtils.glsl ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder".split(" "),function(P,g,b,K,L,M,N,c,O){Object.defineProperty(g,"__esModule",{value:!0});g.build=function(d){var a=new O.ShaderBuilder;a.extensions.add("GL_OES_standard_derivatives");
a.include(N.PiUtils);a.include(L.RibbonVertexPosition,d);a.include(M.LineStipple,d);a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("model","mat4").add("nearPlane","float").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2");a.attributes.add("position","vec3");a.attributes.add("subdivisionFactor","float");a.attributes.add("uv0","vec2");a.attributes.add("auxpos1","vec3");a.attributes.add("auxpos2","vec3");a.varyings.add("vColor","vec4");a.varyings.add("vpos","vec3");
var e=d.falloffEnabled,f=d.innerColorEnabled;f&&a.varyings.add("vLineDistance","float");e&&a.varyings.add("vLineDistanceNorm","float");d.falloffEnabled&&a.fragment.uniforms.add("falloff","float");d.innerColorEnabled&&(a.fragment.uniforms.add("innerColor","vec4"),a.fragment.uniforms.add("innerWidth","float"));a.vertex.code.add(c.glsl(h||(h=b(["\n\t\t#define PERPENDICULAR(v) vec2(v.y, -v.x);\n\t\t#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y \x3e 0.0\n\n\t\tfloat interp(float ncp, vec4 a, vec4 b) {\n\t\t\treturn (-ncp - a.z) / (b.z - a.z);\n\t\t}\n\n\t\tvec2 rotate(vec2 v, float a) {\n\t\t\tfloat s \x3d sin(a);\n\t\t\tfloat c \x3d cos(a);\n\t\t\tmat2 m \x3d mat2(c, -s, s, c);\n\t\t\treturn m * v;\n\t\t}\n"],
["\n\t\t#define PERPENDICULAR(v) vec2(v.y, -v.x);\n\t\t#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y \x3e 0.0\n\n\t\tfloat interp(float ncp, vec4 a, vec4 b) {\n\t\t\treturn (-ncp - a.z) / (b.z - a.z);\n\t\t}\n\n\t\tvec2 rotate(vec2 v, float a) {\n\t\t\tfloat s \x3d sin(a);\n\t\t\tfloat c \x3d cos(a);\n\t\t\tmat2 m \x3d mat2(c, -s, s, c);\n\t\t\treturn m * v;\n\t\t}\n"]))));a.vertex.code.add(c.glsl(k||(k=b(["\n    vec4 projectAndScale(vec4 pos) {\n      vec4 posNdc \x3d proj * pos;\n\n      // Note that posNdc is in -1:1, scaling by screenSize converts this to a coordinate system\n      // that is twice scaled (going from -size:size).\n      posNdc.xy *\x3d screenSize / posNdc.w;\n      return posNdc;\n    }\n"],
["\n    vec4 projectAndScale(vec4 pos) {\n      vec4 posNdc \x3d proj * pos;\n\n      // Note that posNdc is in -1:1, scaling by screenSize converts this to a coordinate system\n      // that is twice scaled (going from -size:size).\n      posNdc.xy *\x3d screenSize / posNdc.w;\n      return posNdc;\n    }\n"]))));a.vertex.code.add(c.glsl(l||(l=b(["\n    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {\n      float vnp \x3d nearPlane*0.99;\n\n      //current pos behind ncp --\x3e we need to clip\n      if(pos.z \x3e -nearPlane) {\n        if (!isStartVertex) {\n          //previous in front of ncp\n          if(prev.z \x3c -nearPlane) {\n            pos \x3d mix(prev, pos, interp(vnp, prev, pos));\n            next \x3d pos;\n          } else {\n            pos \x3d vec4(0.0, 0.0, 0.0, 1.0);\n          }\n        }\n        //next in front of ncp\n        if(isStartVertex) {\n          if(next.z \x3c -nearPlane) {\n            pos \x3d mix(pos, next, interp(vnp, pos, next));\n            prev \x3d pos;\n          } else {\n            pos \x3d vec4(0.0, 0.0, 0.0, 1.0);\n          }\n        }\n      } else {\n        //current position visible\n        //previous behind ncp\n        if (prev.z \x3e -nearPlane) {\n          prev \x3d mix(pos, prev, interp(vnp, pos, prev));\n        }\n        //next behind ncp\n        if (next.z \x3e -nearPlane) {\n          next \x3d mix(next, pos, interp(vnp, next, pos));\n        }\n      }\n\n      pos \x3d projectAndScale(pos);\n      next \x3d projectAndScale(next);\n      prev \x3d projectAndScale(prev);\n    }\n"],
["\n    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {\n      float vnp \x3d nearPlane*0.99;\n\n      //current pos behind ncp --\x3e we need to clip\n      if(pos.z \x3e -nearPlane) {\n        if (!isStartVertex) {\n          //previous in front of ncp\n          if(prev.z \x3c -nearPlane) {\n            pos \x3d mix(prev, pos, interp(vnp, prev, pos));\n            next \x3d pos;\n          } else {\n            pos \x3d vec4(0.0, 0.0, 0.0, 1.0);\n          }\n        }\n        //next in front of ncp\n        if(isStartVertex) {\n          if(next.z \x3c -nearPlane) {\n            pos \x3d mix(pos, next, interp(vnp, pos, next));\n            prev \x3d pos;\n          } else {\n            pos \x3d vec4(0.0, 0.0, 0.0, 1.0);\n          }\n        }\n      } else {\n        //current position visible\n        //previous behind ncp\n        if (prev.z \x3e -nearPlane) {\n          prev \x3d mix(pos, prev, interp(vnp, pos, prev));\n        }\n        //next behind ncp\n        if (next.z \x3e -nearPlane) {\n          next \x3d mix(next, pos, interp(vnp, next, pos));\n        }\n      }\n\n      pos \x3d projectAndScale(pos);\n      next \x3d projectAndScale(next);\n      prev \x3d projectAndScale(prev);\n    }\n"]))));
a.vertex.code.add(c.glsl(m||(m=b(["\n  void main(void) {\n    float coverage \x3d 1.0;\n    vpos \x3d (model * vec4(position, 1.0)).xyz;\n\n    // Check for special value of uv0.y which is used by the Renderer when graphics\n    // are removed before the VBO is recompacted. If this is the case, then we just\n    // project outside of clip space.\n    if (uv0.y \x3d\x3d 0.0) {\n      // Project out of clip space\n      gl_Position \x3d vec4(1e038, 1e038, 1e038, 1.0);\n    }\n    else {\n      bool isStartVertex \x3d abs(abs(uv0.y)-3.0) \x3d\x3d 1.0;\n      bool isJoin \x3d abs(uv0.y)-3.0 \x3c 0.0;\n\n      float lineWidth \x3d getSize() * pixelRatio;\n\n      // convert sub-pixel coverage to alpha\n      if (lineWidth \x3c 1.0) {\n        coverage \x3d lineWidth;\n        lineWidth \x3d 1.0;\n      }\n\n      vec4 pos  \x3d view * vec4((model * vec4(position.xyz, 1.0)).xyz, 1.0);\n      vec4 prev \x3d view * vec4((model * vec4(auxpos1.xyz, 1.0)).xyz, 1.0);\n      vec4 next \x3d view * vec4((model * vec4(auxpos2.xyz, 1.0)).xyz, 1.0);\n\n      clipAndTransform(pos, prev, next, isStartVertex);\n\n      vec2 left \x3d (pos.xy - prev.xy);\n      vec2 right \x3d (next.xy - pos.xy);\n\n      float leftLen \x3d length(left);\n      float rightLen \x3d length(right);\n  "],
["\n  void main(void) {\n    float coverage \x3d 1.0;\n    vpos \x3d (model * vec4(position, 1.0)).xyz;\n\n    // Check for special value of uv0.y which is used by the Renderer when graphics\n    // are removed before the VBO is recompacted. If this is the case, then we just\n    // project outside of clip space.\n    if (uv0.y \x3d\x3d 0.0) {\n      // Project out of clip space\n      gl_Position \x3d vec4(1e038, 1e038, 1e038, 1.0);\n    }\n    else {\n      bool isStartVertex \x3d abs(abs(uv0.y)-3.0) \x3d\x3d 1.0;\n      bool isJoin \x3d abs(uv0.y)-3.0 \x3c 0.0;\n\n      float lineWidth \x3d getSize() * pixelRatio;\n\n      // convert sub-pixel coverage to alpha\n      if (lineWidth \x3c 1.0) {\n        coverage \x3d lineWidth;\n        lineWidth \x3d 1.0;\n      }\n\n      vec4 pos  \x3d view * vec4((model * vec4(position.xyz, 1.0)).xyz, 1.0);\n      vec4 prev \x3d view * vec4((model * vec4(auxpos1.xyz, 1.0)).xyz, 1.0);\n      vec4 next \x3d view * vec4((model * vec4(auxpos2.xyz, 1.0)).xyz, 1.0);\n\n      clipAndTransform(pos, prev, next, isStartVertex);\n\n      vec2 left \x3d (pos.xy - prev.xy);\n      vec2 right \x3d (next.xy - pos.xy);\n\n      float leftLen \x3d length(left);\n      float rightLen \x3d length(right);\n  "]))));
d.stippleEnabled&&a.vertex.code.add(c.glsl(n||(n=b(["\n      // uv0.x is either 0 or 1, depending on whether this is considered the start of a line segment\n      // or the end. If start, then use pos-\x3enext, otherwise use prev-\x3epos to define the line segment\n      // vector\n      vec4 stippleSegmentInfo \x3d mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);\n      vec2 stippleSegmentOrigin \x3d stippleSegmentInfo.xy;\n\n      // Scale s.t. it's in units of stipple pattern size.\n      vec2 stippleSegmentDirection \x3d stippleSegmentInfo.zw;\n    "],
["\n      // uv0.x is either 0 or 1, depending on whether this is considered the start of a line segment\n      // or the end. If start, then use pos-\x3enext, otherwise use prev-\x3epos to define the line segment\n      // vector\n      vec4 stippleSegmentInfo \x3d mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);\n      vec2 stippleSegmentOrigin \x3d stippleSegmentInfo.xy;\n\n      // Scale s.t. it's in units of stipple pattern size.\n      vec2 stippleSegmentDirection \x3d stippleSegmentInfo.zw;\n    "]))));
a.vertex.code.add(c.glsl(p||(p=b(['\n    left \x3d (leftLen \x3e 0.001) ? left/leftLen : vec2(0.0, 0.0);\n    right \x3d (rightLen \x3e 0.001) ? right/rightLen : vec2(0.0, 0.0);\n\n    vec2 capDisplacementDir \x3d vec2(0, 0);\n    vec2 joinDisplacementDir \x3d vec2(0, 0);\n    float displacementLen \x3d lineWidth;\n\n    if (isJoin) {\n\n      // JOIN handling ---------------------------------------------------\n      // determine if vertex is on the "outside or "inside" of the join\n      bool isOutside \x3d ISOUTSIDE;\n\n      // compute miter join position first\n      joinDisplacementDir \x3d normalize(left + right);\n      joinDisplacementDir \x3d PERPENDICULAR(joinDisplacementDir);\n\n      // compute miter stretch\n      if (leftLen \x3e 0.001 \x26\x26 rightLen \x3e 0.001) {\n        float nDotSeg \x3d dot(joinDisplacementDir, left);\n        displacementLen /\x3d length(nDotSeg * left - joinDisplacementDir);\n\n        // limit displacement of inner vertices\n        if (!isOutside) {\n          displacementLen \x3d min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));\n        }\n      }\n\n      if (isOutside \x26\x26 (displacementLen \x3e miterLimit * lineWidth)) {\n    '],
['\n    left \x3d (leftLen \x3e 0.001) ? left/leftLen : vec2(0.0, 0.0);\n    right \x3d (rightLen \x3e 0.001) ? right/rightLen : vec2(0.0, 0.0);\n\n    vec2 capDisplacementDir \x3d vec2(0, 0);\n    vec2 joinDisplacementDir \x3d vec2(0, 0);\n    float displacementLen \x3d lineWidth;\n\n    if (isJoin) {\n\n      // JOIN handling ---------------------------------------------------\n      // determine if vertex is on the "outside or "inside" of the join\n      bool isOutside \x3d ISOUTSIDE;\n\n      // compute miter join position first\n      joinDisplacementDir \x3d normalize(left + right);\n      joinDisplacementDir \x3d PERPENDICULAR(joinDisplacementDir);\n\n      // compute miter stretch\n      if (leftLen \x3e 0.001 \x26\x26 rightLen \x3e 0.001) {\n        float nDotSeg \x3d dot(joinDisplacementDir, left);\n        displacementLen /\x3d length(nDotSeg * left - joinDisplacementDir);\n\n        // limit displacement of inner vertices\n        if (!isOutside) {\n          displacementLen \x3d min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));\n        }\n      }\n\n      if (isOutside \x26\x26 (displacementLen \x3e miterLimit * lineWidth)) {\n    ']))));
d.roundJoins?a.vertex.code.add(c.glsl(q||(q=b(["\n        vec2 startDir;\n        vec2 endDir;\n\n        if (leftLen \x3c 0.001) {\n          startDir \x3d right;\n        }\n        else{\n          startDir \x3d left;\n        }\n        startDir \x3d normalize(startDir);\n        startDir \x3d PERPENDICULAR(startDir);\n\n        if (rightLen \x3c 0.001) {\n          endDir \x3d left;\n        }\n        else{\n          endDir \x3d right;\n        }\n        endDir \x3d normalize(endDir);\n        endDir \x3d PERPENDICULAR(endDir);\n\n        float rotationAngle \x3d acos(clamp(dot(startDir, endDir), -1.0, 1.0));\n        joinDisplacementDir \x3d rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);\n      "],
["\n        vec2 startDir;\n        vec2 endDir;\n\n        if (leftLen \x3c 0.001) {\n          startDir \x3d right;\n        }\n        else{\n          startDir \x3d left;\n        }\n        startDir \x3d normalize(startDir);\n        startDir \x3d PERPENDICULAR(startDir);\n\n        if (rightLen \x3c 0.001) {\n          endDir \x3d left;\n        }\n        else{\n          endDir \x3d right;\n        }\n        endDir \x3d normalize(endDir);\n        endDir \x3d PERPENDICULAR(endDir);\n\n        float rotationAngle \x3d acos(clamp(dot(startDir, endDir), -1.0, 1.0));\n        joinDisplacementDir \x3d rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);\n      "])))):
a.vertex.code.add(c.glsl(r||(r=b(["\n        // convert to bevel join if miterLimit is exceeded\n        if (leftLen \x3c 0.001) {\n          joinDisplacementDir \x3d right;\n        }\n        else if (rightLen \x3c 0.001) {\n          joinDisplacementDir \x3d left;\n        }\n        else {\n          joinDisplacementDir \x3d isStartVertex ? right : left;\n        }\n        joinDisplacementDir \x3d normalize(joinDisplacementDir);\n        joinDisplacementDir \x3d PERPENDICULAR(joinDisplacementDir);\n  "],
["\n        // convert to bevel join if miterLimit is exceeded\n        if (leftLen \x3c 0.001) {\n          joinDisplacementDir \x3d right;\n        }\n        else if (rightLen \x3c 0.001) {\n          joinDisplacementDir \x3d left;\n        }\n        else {\n          joinDisplacementDir \x3d isStartVertex ? right : left;\n        }\n        joinDisplacementDir \x3d normalize(joinDisplacementDir);\n        joinDisplacementDir \x3d PERPENDICULAR(joinDisplacementDir);\n  "]))));a.vertex.code.add(c.glsl(t||
(t=b(["\n        displacementLen \x3d lineWidth;\n      }\n    } else {\n    // CAP handling ---------------------------------------------------\n    if (leftLen \x3c 0.001) {\n      joinDisplacementDir \x3d right;\n    }\n    else if (rightLen \x3c 0.001) {\n      joinDisplacementDir \x3d left;\n    }\n    else {\n      joinDisplacementDir \x3d isStartVertex ? right : left;\n    }\n    joinDisplacementDir \x3d normalize(joinDisplacementDir);\n    joinDisplacementDir \x3d PERPENDICULAR(joinDisplacementDir);\n    displacementLen \x3d lineWidth;\n\n    capDisplacementDir \x3d isStartVertex ? -right : left;\n  "],
["\n        displacementLen \x3d lineWidth;\n      }\n    } else {\n    // CAP handling ---------------------------------------------------\n    if (leftLen \x3c 0.001) {\n      joinDisplacementDir \x3d right;\n    }\n    else if (rightLen \x3c 0.001) {\n      joinDisplacementDir \x3d left;\n    }\n    else {\n      joinDisplacementDir \x3d isStartVertex ? right : left;\n    }\n    joinDisplacementDir \x3d normalize(joinDisplacementDir);\n    joinDisplacementDir \x3d PERPENDICULAR(joinDisplacementDir);\n    displacementLen \x3d lineWidth;\n\n    capDisplacementDir \x3d isStartVertex ? -right : left;\n  "]))));
d.roundCaps?a.vertex.code.add(c.glsl(u||(u=b(["\n    float angle \x3d subdivisionFactor*PI*0.5;\n    joinDisplacementDir *\x3d cos(angle);\n    capDisplacementDir *\x3d sin(angle);\n    "],["\n    float angle \x3d subdivisionFactor*PI*0.5;\n    joinDisplacementDir *\x3d cos(angle);\n    capDisplacementDir *\x3d sin(angle);\n    "])))):a.vertex.code.add(c.glsl(v||(v=b(["\n    capDisplacementDir *\x3d subdivisionFactor;\n    "],["\n    capDisplacementDir *\x3d subdivisionFactor;\n    "]))));a.vertex.code.add(c.glsl(w||
(w=b(["\n  }\n\n  // Displacement (in pixels) caused by join/or cap\n  vec2 dpos \x3d joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;\n\n  ","\n\n  ","\n  ","\n\n  pos.xy +\x3d dpos;\n  "],["\n  }\n\n  // Displacement (in pixels) caused by join/or cap\n  vec2 dpos \x3d joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;\n\n  ","\n\n  ","\n  ","\n\n  pos.xy +\x3d dpos;\n  "])),e||f?c.glsl(x||(x=b(["float lineDist \x3d lineWidth * sign(uv0.y) * pos.w;"],
["float lineDist \x3d lineWidth * sign(uv0.y) * pos.w;"]))):"",f?c.glsl(y||(y=b(["vLineDistance \x3d lineDist;"],["vLineDistance \x3d lineDist;"]))):"",e?c.glsl(z||(z=b(["vLineDistanceNorm \x3d lineDist / lineWidth;"],["vLineDistanceNorm \x3d lineDist / lineWidth;"]))):""));d.stippleEnabled&&(a.vertex.code.add(c.glsl(A||(A=b(["\n    {\n      // Compute the stipple pattern UV coordinate from the actual position, based on the origin\n      // and direction of the line segment on which the stipple pattern is based.\n\n      // Project the vector from the origin of the segment to the vertex onto the line segment.\n      // Note the 0.5 factor due to projected positions being at twice the screen size scale (see projectAndScale)\n      vec2 posVec \x3d pos.xy - stippleSegmentOrigin;\n\n      float stippleSegmentDirectionLength \x3d length(stippleSegmentDirection);\n    "],
["\n    {\n      // Compute the stipple pattern UV coordinate from the actual position, based on the origin\n      // and direction of the line segment on which the stipple pattern is based.\n\n      // Project the vector from the origin of the segment to the vertex onto the line segment.\n      // Note the 0.5 factor due to projected positions being at twice the screen size scale (see projectAndScale)\n      vec2 posVec \x3d pos.xy - stippleSegmentOrigin;\n\n      float stippleSegmentDirectionLength \x3d length(stippleSegmentDirection);\n    "])))),
d.stippleIntegerRepeatsEnabled&&a.vertex.code.add(c.glsl(B||(B=b(["\n      float numberOfPatternRepeats \x3d stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;\n      float roundedNumberOfPatternRepeats \x3d max(1.0, floor(numberOfPatternRepeats + 0.5));\n      stipplePatternUvMax \x3d roundedNumberOfPatternRepeats;\n      "],["\n      float numberOfPatternRepeats \x3d stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;\n      float roundedNumberOfPatternRepeats \x3d max(1.0, floor(numberOfPatternRepeats + 0.5));\n      stipplePatternUvMax \x3d roundedNumberOfPatternRepeats;\n      "])))),
a.vertex.code.add(c.glsl(C||(C=b(["\n      if (stippleSegmentDirectionLength \x3e\x3d 0.001) {\n        // Project the vertex position onto the line segment.\n        float projectedLength \x3d dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;\n     ","\n        stipplePatternUv \x3d projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;\n        } else {\n          stipplePatternUv \x3d 1.0;\n        }\n      }\n    "],["\n      if (stippleSegmentDirectionLength \x3e\x3d 0.001) {\n        // Project the vertex position onto the line segment.\n        float projectedLength \x3d dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;\n     ",
"\n        stipplePatternUv \x3d projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;\n        } else {\n          stipplePatternUv \x3d 1.0;\n        }\n      }\n    "])),d.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale \x3d roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale \x3d 1.0;")));a.vertex.code.add(c.glsl(D||(D=b(["\n      // Convert back into NDC\n      pos.xy \x3d pos.xy / screenSize * pos.w;\n\n      vColor \x3d getColor();\n      vColor.a *\x3d coverage;\n\n      gl_Position \x3d pos;\n    }\n  }\n  "],
["\n      // Convert back into NDC\n      pos.xy \x3d pos.xy / screenSize * pos.w;\n\n      vColor \x3d getColor();\n      vColor.a *\x3d coverage;\n\n      gl_Position \x3d pos;\n    }\n  }\n  "]))));a.include(K.Slice,d);0===d.output&&(a.fragment.uniforms.add("intrinsicColor","vec4"),a.fragment.code.add(c.glsl(E||(E=b(["\n    void main() {\n      discardBySlice(vpos);\n      float stippleAlpha \x3d getStippleAlpha();\n      discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);\n\n      vec4 color \x3d intrinsicColor * vColor;\n    "],
["\n    void main() {\n      discardBySlice(vpos);\n      float stippleAlpha \x3d getStippleAlpha();\n      discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);\n\n      vec4 color \x3d intrinsicColor * vColor;\n    "])))),d.innerColorEnabled&&(a.fragment.uniforms.add("pixelRatio","float"),a.fragment.code.add(c.glsl(F||(F=b(["\n      float distToInner \x3d abs(vLineDistance * gl_FragCoord.w) - innerWidth;\n      float innerAA \x3d clamp(0.5 - distToInner, 0.0, 1.0);\n      float innerAlpha \x3d innerColor.a + color.a * (1.0 - innerColor.a);\n      color \x3d mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);\n      "],
["\n      float distToInner \x3d abs(vLineDistance * gl_FragCoord.w) - innerWidth;\n      float innerAA \x3d clamp(0.5 - distToInner, 0.0, 1.0);\n      float innerAlpha \x3d innerColor.a + color.a * (1.0 - innerColor.a);\n      color \x3d mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);\n      "]))))),a.fragment.code.add(c.glsl(G||(G=b(["\n      vec4 finalColor \x3d blendStipple(color, stippleAlpha);\n    "],["\n      vec4 finalColor \x3d blendStipple(color, stippleAlpha);\n    "])))),d.falloffEnabled&&
a.fragment.code.add(c.glsl(H||(H=b(["\n      finalColor.a *\x3d pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);\n      "],["\n      finalColor.a *\x3d pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);\n      "])))),a.fragment.code.add(c.glsl(I||(I=b(["\n      gl_FragColor \x3d highlightSlice(finalColor, vpos);\n    }\n    "],["\n      gl_FragColor \x3d highlightSlice(finalColor, vpos);\n    }\n    "])))));4===d.output&&a.fragment.code.add(c.glsl(J||(J=b(["\n      void main() {\n        discardBySlice(vpos);\n        discardByStippleAlpha(getStippleAlpha(), STIPPLE_ALPHA_HIGHLIGHT_DISCARD);\n        gl_FragColor \x3d vec4(1.0, 1.0, 1.0, 1.0);\n      }\n    "],
["\n      void main() {\n        discardBySlice(vpos);\n        discardByStippleAlpha(getStippleAlpha(), STIPPLE_ALPHA_HIGHLIGHT_DISCARD);\n        gl_FragColor \x3d vec4(1.0, 1.0, 1.0, 1.0);\n      }\n    "]))));return a};var h,k,l,m,n,p,q,r,t,u,v,x,y,z,w,A,B,C,D,E,F,G,H,I,J});