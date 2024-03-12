// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/mathUtils ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../geometry/support/aaBoundingBox ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3DrawUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,g,t,n,p,J,u,K,v,w,l,x,L,M,y,N,z,f,O,P,Q,A){function B(b){const d=new Q.ShaderBuilder,m=b.output===l.ShaderOutput.Color,q=b.output===l.ShaderOutput.LinearDepth,C=b.output===l.ShaderOutput.Highlight,{vertex:k,fragment:D}=d;d.include(x.SliceDraw,b);d.attributes.add(A.VertexAttribute.POSITION,"vec3");d.attributes.add(A.VertexAttribute.COLOR,"vec3");k.uniforms.add(new O.Matrix4DrawUniform("modelView",(a,c)=>t.multiply(E,c.camera.viewMatrix,t.fromTranslation(E,a.origin))),new P.Matrix4PassUniform("proj",
(a,c)=>c.camera.projectionMatrix),new y.Float2DrawUniform("screenMinMaxSize",(a,c,e)=>p.set(r,e.useFixedSizes?0:e.minSizePx*c.camera.pixelRatio,(a.isLeaf?256:64)*c.camera.pixelRatio)),b.useFixedSizes?new N.Float2PassUniform("pointScale",(a,c)=>p.set(r,a.fixedSize*c.camera.pixelRatio,c.camera.fullHeight)):new y.Float2DrawUniform("pointScale",(a,c,e)=>p.set(r,a.splatSize*e.scaleFactor*c.camera.pixelRatio,c.camera.fullHeight/c.camera.pixelRatio)));b.clippingEnabled?k.uniforms.add(new z.Float3DrawUniform("clipMin",
(a,c,e)=>u.set(F,e.clipBox[0]-a.origin[0],e.clipBox[1]-a.origin[1],e.clipBox[2]-a.origin[2])),new z.Float3DrawUniform("clipMax",(a,c,e)=>u.set(F,e.clipBox[3]-a.origin[0],e.clipBox[4]-a.origin[1],e.clipBox[5]-a.origin[2]))):(k.constants.add("clipMin","vec3",[-g.numberMaxFloat32,-g.numberMaxFloat32,-g.numberMaxFloat32]),k.constants.add("clipMax","vec3",[g.numberMaxFloat32,g.numberMaxFloat32,g.numberMaxFloat32]));q?(w.addNearFar(d),w.addCalculateLinearDepth(d),d.varyings.add("depth","float")):b.output!==
l.ShaderOutput.Highlight&&d.varyings.add("vColor","vec3");k.code.add(f.glsl`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${b.drawScreenSize?f.glsl`
      float clampedScreenSize = pointSize;`:f.glsl`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${q?f.glsl`depth = calculateLinearDepth(nearFar, camera.z);`:""}
     ${m?f.glsl`vColor = color;`:""}
    }
  `);D.include(M.RgbaFloatEncoding,b);C&&d.include(L.OutputHighlight,b);D.code.add(f.glsl`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${q?f.glsl`fragColor = float2rgba(depth);`:""}
      ${C?f.glsl`outputHighlight();`:""}
      ${m?f.glsl`fragColor = vec4(vColor, 1.0);`:""}
    }
  `);return d}function G(b){return b?256:64}class H extends f.NoParameters{constructor(){super(...arguments);this.clipBox=v.create(v.positiveInfinity);this.useRealWorldSymbolSizes=this.useFixedSizes=!1;this.scaleFactor=1;this.sizePx=this.size=this.minSizePx=0}get fixedSize(){return this.drawScreenSpace?this.sizePx:this.size}get screenMinSize(){return this.useFixedSizes?0:this.minSizePx}get drawScreenSpace(){return this.useFixedSizes&&!this.useRealWorldSymbolSizes}}class I extends x.SlicePlaneParameters{constructor(b,
d,m){super(b);this.origin=b;this.isLeaf=d;this.splatSize=m}}const E=n.create(),F=K.create(),r=J.create();n=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:I,PointRendererPassParameters:H,build:B,getMaxPointSizeScreenspace:G},Symbol.toStringTag,{value:"Module"}));h.PointRendererDrawParameters=I;h.PointRendererPassParameters=H;h.PointRendererShader=n;h.build=B;h.getMaxPointSizeScreenspace=G});