// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/vec42 ../../../../../../core/libs/gl-matrix-2/factories/vec4f64 ../util/ScreenSizePerspective.glsl ../util/View.glsl ../../shaderModules/Float4PassUniform ../../shaderModules/interfaces".split(" "),function(e,h,k,f,l,m,c){function g(d){d.uniforms.add(new m.Float4PassUniform("verticalOffset",(b,a)=>{const {minWorldLength:n,maxWorldLength:p,screenLength:q}=b.verticalOffset;return h.set(r,q*(a.camera.pixelRatio||1),Math.tan(.5*a.camera.fovY)/(.5*a.camera.fullViewport[3]),
n,p)}))}const r=k.create();e.VerticalOffset=function(d,b){const a=d.vertex;b.hasVerticalOffset?(g(a),b.hasScreenSizePerspective&&(d.include(f.ScreenSizePerspective),f.addScreenSizePerspectiveAlignment(a),l.addCameraPosition(d.vertex,b)),a.code.add(c.glsl`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${b.spherical?c.glsl`vec3 worldNormal = normalize(worldPos + localOrigin);`:c.glsl`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${b.hasScreenSizePerspective?c.glsl`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c.glsl`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):a.code.add(c.glsl`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)};e.addVerticalOffset=g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});