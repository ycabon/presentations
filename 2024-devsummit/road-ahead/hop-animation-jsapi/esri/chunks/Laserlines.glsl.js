// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/mathUtils ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ./vec42 ../core/libs/gl-matrix-2/factories/vec4f64 ../geometry/support/lineSegment ../geometry/support/plane ./sphere ../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(v,y,G,w,c,q,z,H,I,A,B,J,K,r,l,t,p,g,L){function C(e){const m=new L.ShaderBuilder;m.include(K.ScreenSpacePass);m.include(J.Laserline,e);const d=m.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)d.uniforms.add(new p.FloatPassUniform("maxPixelDistance",(a,b)=>e.heightManifoldEnabled?2*b.camera.computeScreenPixelSizeAt(a.heightManifoldTarget):2*b.camera.computeScreenPixelSizeAt(a.lineVerticalPlaneSegment.origin))),d.code.add(g.glsl`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical?(d.uniforms.add(new t.Float4PassUniform("heightManifoldOrigin",(a,b)=>{c.transformMat4(k,a.heightManifoldTarget,b.camera.viewMatrix);c.transformMat4(n,[0,0,0],b.camera.viewMatrix);c.subtract(n,n,k);c.normalize(h,n);h[3]=c.length(n);return h}),new l.Float3PassUniform("globalOrigin",(a,b)=>c.transformMat4(k,[0,0,0],b.camera.viewMatrix)),new p.FloatPassUniform("cosSphericalAngleThreshold",(a,b)=>1-Math.max(2,c.distance(b.camera.eye,a.heightManifoldTarget)*b.camera.perRenderPixelRatio)/
c.length(a.heightManifoldTarget))),d.code.add(g.glsl`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)):d.code.add(g.glsl`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);e.pointDistanceEnabled&&(d.uniforms.add(new p.FloatPassUniform("maxPixelDistance",(a,b)=>2*b.camera.computeScreenPixelSizeAt(a.pointDistanceTarget))),d.code.add(g.glsl`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`));e.intersectsLineEnabled&&(d.uniforms.add(new p.FloatPassUniform("perScreenPixelRatio",(a,b)=>b.camera.perScreenPixelRatio)),d.code.add(g.glsl`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`));(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&d.code.add(g.glsl`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`);d.code.add(g.glsl`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`);if(e.heightManifoldEnabled){d.uniforms.add(new r.Float2PassUniform("angleCutoff",b=>u(b)),new t.Float4PassUniform("heightPlane",(b,f)=>D(b.heightManifoldTarget,b.renderCoordsHelper.worldUpAtPosition(b.heightManifoldTarget,k),f.camera.viewMatrix)));const a=e.spherical?g.glsl`normalize(globalOrigin - pos)`:g.glsl`heightPlane.xyz`;d.code.add(g.glsl`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${a})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}e.pointDistanceEnabled&&(d.uniforms.add(new r.Float2PassUniform("angleCutoff",a=>u(a)),new t.Float4PassUniform("pointDistanceSphere",(a,b)=>{c.transformMat4(B.getCenter(x),a.pointDistanceOrigin,b.camera.viewMatrix);x[3]=c.distance(a.pointDistanceOrigin,a.pointDistanceTarget);return x})),d.code.add(g.glsl`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`));e.lineVerticalPlaneEnabled&&(d.uniforms.add(new r.Float2PassUniform("angleCutoff",a=>u(a)),new t.Float4PassUniform("lineVerticalPlane",(a,b)=>{var f=I.pointAt(a.lineVerticalPlaneSegment,.5,k);f=a.renderCoordsHelper.worldUpAtPosition(f,M);const N=c.normalize(n,a.lineVerticalPlaneSegment.vector);f=c.cross(k,f,N);c.normalize(f,f);return D(a.lineVerticalPlaneSegment.origin,f,b.camera.viewMatrix)}),new l.Float3PassUniform("lineVerticalStart",(a,b)=>{const f=c.copy(k,a.lineVerticalPlaneSegment.origin);
a.renderCoordsHelper.setAltitude(f,0);return c.transformMat4(f,f,b.camera.viewMatrix)}),new l.Float3PassUniform("lineVerticalEnd",(a,b)=>{const f=c.add(k,a.lineVerticalPlaneSegment.origin,a.lineVerticalPlaneSegment.vector);a.renderCoordsHelper.setAltitude(f,0);return c.transformMat4(f,f,b.camera.viewMatrix)})),d.code.add(g.glsl`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`));e.intersectsLineEnabled&&(d.uniforms.add(new r.Float2PassUniform("angleCutoff",a=>u(a)),new l.Float3PassUniform("intersectsLineStart",(a,b)=>c.transformMat4(k,a.lineStartWorld,b.camera.viewMatrix)),new l.Float3PassUniform("intersectsLineEnd",(a,b)=>c.transformMat4(k,a.lineEndWorld,b.camera.viewMatrix)),new l.Float3PassUniform("intersectsLineDirection",(a,b)=>{c.copy(h,a.intersectsLineSegment.vector);h[3]=0;return c.normalize(k,z.transformMat4(h,h,b.camera.viewMatrix))}),new p.FloatPassUniform("intersectsLineRadius",
a=>a.intersectsLineRadius)),d.code.add(g.glsl`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`));d.code.add(g.glsl`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`);return m}function u(e){return G.set(O,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-y.deg2rad(2))))}function D(e,m,d){c.transformMat4(E,e,d);c.copy(h,m);h[3]=0;z.transformMat4(h,h,d);return A.fromPositionAndNormal(E,h,P)}const F=y.deg2rad(6),O=w.create(),k=q.create(),h=H.create(),M=q.create(),n=q.create(),E=q.create(),P=A.create(),x=B.create();w=Object.freeze(Object.defineProperty({__proto__:null,build:C,defaultAngleCutoff:F},Symbol.toStringTag,{value:"Module"}));v.LaserlinesShader=
w;v.build=C;v.defaultAngleCutoff=F});