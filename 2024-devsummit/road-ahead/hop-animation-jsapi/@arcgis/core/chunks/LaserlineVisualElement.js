/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{s as e,c as t,n as i,l as n,i as s,g as r,p as a,e as l,h as o}from"./vec3.js";import{c,f as h,a as d}from"./vec3f64.js";import{a as p,c as u,g as f,h as g}from"./lineSegment.js";import{V as _}from"./VisualElement.js";import{_ as m}from"./tslib.es6.js";import{c as P,f as b}from"./maybe.js";import{property as v}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as w}from"../core/accessorSupport/decorators/subclass.js";import{c as V,f as x,b as D,g as E,d as L}from"./frustum.js";import{h as y,y as S,e as C}from"./plane.js";import{V as M}from"./ViewingMode.js";import{n as R}from"./DoubleArray.js";import{g as A}from"./glUtil.js";import{n as T}from"./InterleavedLayout.js";import{V as j}from"./VertexArrayObject2.js";import{V as O}from"./VertexAttribute.js";import{R as q,j as I,b as z,d as N,a as W,g as U,M as H,o as B,P as F,l as G,F as X,r as k}from"./StencilUtils.js";import{v as $}from"./mat4.js";import{c as J}from"./mat4f64.js";import{g as K}from"./vec2.js";import{c as Q}from"./vec2f64.js";import{C as Y}from"./CameraSpace.glsl.js";import{g as Z,N as ee}from"./interfaces5.js";import{j as te,m as ie,U as ne}from"./enums.js";import{m as se,s as re,e as ae}from"./OrderIndependentTransparency.js";import{B as le}from"./BufferObject.js";import{a as oe,b as ce,C as he}from"./RenderPlugin.js";import{D as de,u as pe}from"./Material.js";import{p as ue,S as fe}from"./ShaderTechniqueConfiguration.js";import{d as ge}from"./mathUtils.js";import{t as _e}from"./vec4.js";import{c as me}from"./vec4f64.js";import{g as Pe,b as be}from"./sphere.js";function ve(e,t){const i=e.fragment;i.include(q),e.include(Y),i.uniforms.add(new I("globalAlpha",(e=>e.globalAlpha)),new z("glowColor",(e=>e.glowColor)),new I("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new I("glowFalloff",(e=>e.glowFalloff)),new z("innerColor",(e=>e.innerColor)),new I("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio)),new N("depthMap",((e,t)=>t.linearDepth?.getTexture())),new W("nearFar",((e,t)=>t.camera.nearFar)),new N("frameColor",((e,t)=>t.mainColor))),i.code.add(Z`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(Z`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(Z`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(Z`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),t.contrastControlEnabled?(i.uniforms.add(new I("globalAlphaContrastBoost",(e=>null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1))),i.code.add(Z`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(Z`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const we=Q(),Ve=J(),xe=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new U;t.include(ve,e);const{vertex:i,fragment:n}=t;return i.uniforms.add(new H("modelView",((e,t)=>$(Ve,t.camera.viewMatrix,e.origin))),new H("proj",((e,t)=>t.camera.projectionMatrix)),new I("glowWidth",((e,t)=>e.glowWidth*t.camera.pixelRatio)),new W("pixelToNDC",((e,t)=>K(we,2/t.camera.fullViewport[2],2/t.camera.fullViewport[3])))),t.attributes.add(O.START,"vec3"),t.attributes.add(O.END,"vec3"),t.attributes.add(O.UP,"vec3"),t.attributes.add(O.EXTRUDE,"vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),i.code.add(Z`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),n.uniforms.add(new I("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),n.code.add(Z`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),t}},Symbol.toStringTag,{value:"Module"}));class De extends B{initializeProgram(e){return new F(e.rctx,De.shader.get().build(this.configuration),Ee)}initializePipeline(){return se({blending:re(te.ONE,te.ONE_MINUS_SRC_ALPHA),colorWrite:ae})}}De.shader=new G(xe,(()=>Promise.resolve().then((()=>xe))));const Ee=new Map([[O.START,0],[O.END,1],[O.UP,2],[O.EXTRUDE,3]]);class Le{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=c(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const t=R(3*e.length);let i=0;for(const n of e)t[i++]=n[0],t[i++]=n[1],t[i++]=n[2];this.buffers=[t]}set buffers(t){if(this._buffers=t,this._buffers.length>0){const t=this._buffers[0],i=3*Math.floor(t.length/3/2);e(this._origin,t[i],t[i+1],t[i+2])}else e(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const t=this._ensureVAO(e);null!=t&&(e.bindVAO(t),e.drawArrays(ie.TRIANGLES,0,this._count))}dispose(){null!=this._vao&&this._vao.dispose()}_ensureVAO(e){return null==this._buffers?null:(null==this._vao&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const i=this._createDataBuffer(t);return this._dirty=!1,new j(e,Ee,{data:A(Ce)},{data:le.createVertex(e,ne.STATIC_DRAW,i)})}_ensureVertexData(e,t){if(!this._dirty)return;const i=this._createDataBuffer(t);e.vertexBuffers.data?.setData(i),this._dirty=!1}_numberOfRenderVertices(e){return 2*(e.length/3-1)*3}_createDataBuffer(i){const n=i.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=n;const s=Ce.createBuffer(n),r=this._origin;let a=0,l=0;for(const n of i){for(let i=0;i<n.length;i+=3){const o=e(Se,n[i],n[i+1],n[i+2]);0===i?l=this._renderCoordsHelper.getAltitude(o):this._renderCoordsHelper.setAltitude(o,l);const c=this._renderCoordsHelper.worldUpAtPosition(o,ye),h=a+2*i,d=t(Se,o,r);if(i<n.length-3){s.up.setVec(h,c),s.up.setVec(h+3,c),s.up.setVec(h+5,c);for(let e=0;e<6;e++)s.start.setVec(h+e,d);s.extrude.setValues(h,0,-1),s.extrude.setValues(h+1,1,-1),s.extrude.setValues(h+2,1,1),s.extrude.setValues(h+3,0,-1),s.extrude.setValues(h+4,1,1),s.extrude.setValues(h+5,0,1)}if(i>0){s.up.setVec(h-2,c),s.up.setVec(h-4,c),s.up.setVec(h-5,c);for(let e=-6;e<0;e++)s.end.setVec(h+e,d)}}a+=this._numberOfRenderVertices(n)}return s.buffer}}const ye=c(),Se=c(),Ce=T().vec3f(O.START).vec3f(O.END).vec3f(O.UP).vec2f(O.EXTRUDE);class Me extends fe{constructor(){super(...arguments),this.contrastControlEnabled=!1}}m([ue()],Me.prototype,"contrastControlEnabled",void 0);const Re=ge(6);function Ae(e){return K(je,Math.cos(e.angleCutoff),Math.cos(Math.max(0,e.angleCutoff-ge(2))))}function Te(e,t,i){return r(Ne,e,i),a(qe,t),qe[3]=0,_e(qe,qe,i),S(Ne,qe,We)}const je=Q(),Oe=c(),qe=me(),Ie=c(),ze=c(),Ne=c(),We=y(),Ue=be(),He=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const c=new U;c.include(oe),c.include(ve,e);const h=c.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(h.uniforms.add(new I("maxPixelDistance",((t,i)=>e.heightManifoldEnabled?2*i.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*i.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin)))),h.code.add(Z`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,t,i)=>r(e,t.heightManifoldTarget,i.camera.viewMatrix),a=(e,t)=>r(e,[0,0,0],t.camera.viewMatrix);h.uniforms.add(new X("heightManifoldOrigin",((s,r)=>(e(Oe,s,r),a(ze,r),t(ze,ze,Oe),i(qe,ze),qe[3]=n(ze),qe))),new z("globalOrigin",((e,t)=>a(Oe,t))),new I("cosSphericalAngleThreshold",((e,t)=>1-Math.max(2,s(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/n(e.heightManifoldTarget)))),h.code.add(Z`float globeDistancePixels(float posInGlobalOriginLength) {
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
}`)}else h.code.add(Z`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(h.uniforms.add(new I("maxPixelDistance",((e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),h.code.add(Z`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(h.uniforms.add(new I("perScreenPixelRatio",((e,t)=>t.camera.perScreenPixelRatio))),h.code.add(Z`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&h.code.add(Z`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),h.code.add(Z`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled){h.uniforms.add(new W("angleCutoff",(e=>Ae(e))),new X("heightPlane",((e,t)=>Te(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,Oe),t.camera.viewMatrix))));const t=e.spherical?Z`normalize(globalOrigin - pos)`:Z`heightPlane.xyz`;h.code.add(Z`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return e.pointDistanceEnabled&&(h.uniforms.add(new W("angleCutoff",(e=>Ae(e))),new X("pointDistanceSphere",((e,t)=>function(e,t){return r(Pe(Ue),e.pointDistanceOrigin,t.camera.viewMatrix),Ue[3]=s(e.pointDistanceOrigin,e.pointDistanceTarget),Ue}(e,t)))),h.code.add(Z`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(h.uniforms.add(new W("angleCutoff",(e=>Ae(e))),new X("lineVerticalPlane",((e,t)=>function(e,t){const n=p(e.lineVerticalPlaneSegment,.5,Oe),s=e.renderCoordsHelper.worldUpAtPosition(n,Ie),r=i(ze,e.lineVerticalPlaneSegment.vector),a=l(Oe,s,r);return i(a,a),Te(e.lineVerticalPlaneSegment.origin,a,t.camera.viewMatrix)}(e,t))),new z("lineVerticalStart",((e,t)=>function(e,t){const i=a(Oe,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(i,0),r(i,i,t.camera.viewMatrix)}(e,t))),new z("lineVerticalEnd",((e,t)=>function(e,t){const i=o(Oe,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(i,0),r(i,i,t.camera.viewMatrix)}(e,t)))),h.code.add(Z`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(h.uniforms.add(new W("angleCutoff",(e=>Ae(e))),new z("intersectsLineStart",((e,t)=>r(Oe,e.lineStartWorld,t.camera.viewMatrix))),new z("intersectsLineEnd",((e,t)=>r(Oe,e.lineEndWorld,t.camera.viewMatrix))),new z("intersectsLineDirection",((e,t)=>(a(qe,e.intersectsLineSegment.vector),qe[3]=0,i(Oe,_e(qe,qe,t.camera.viewMatrix))))),new I("intersectsLineRadius",(e=>e.intersectsLineRadius))),h.code.add(Z`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),h.code.add(Z`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),c},defaultAngleCutoff:Re},Symbol.toStringTag,{value:"Module"}));class Be extends ee{constructor(){super(...arguments),this.innerColor=h(1,1,1),this.innerWidth=1,this.glowColor=h(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=ge(6),this.pointDistanceOrigin=c(),this.pointDistanceTarget=c(),this.lineVerticalPlaneSegment=u(),this.intersectsLineSegment=u(),this.intersectsLineRadius=3,this.heightManifoldTarget=c(),this.lineStartWorld=c(),this.lineEndWorld=c()}}class Fe extends B{initializeProgram(e){return new F(e.rctx,Fe.shader.get().build(this.configuration),de)}initializePipeline(){return se({blending:re(te.ONE,te.ONE_MINUS_SRC_ALPHA),colorWrite:ae})}}Fe.shader=new G(He,(()=>Promise.resolve().then((()=>He))));class Ge extends Me{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}m([ue()],Ge.prototype,"heightManifoldEnabled",void 0),m([ue()],Ge.prototype,"pointDistanceEnabled",void 0),m([ue()],Ge.prototype,"lineVerticalPlaneEnabled",void 0),m([ue()],Ge.prototype,"intersectsLineEnabled",void 0),m([ue()],Ge.prototype,"spherical",void 0);let Xe=class extends ce{constructor(e){super(e),this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=M.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this._passParameters=new Be,this.produces=new Map([[k.LASERLINES,()=>!this.contrastControlEnabled],[k.LASERLINES_CONTRAST_CONTROL,()=>this.contrastControlEnabled]])}initialize(){this._passParameters.renderCoordsHelper=this.renderCoordsHelper}consumes(){return he}get isDecoration(){return this._isDecoration}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){a(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){a(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){a(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){f(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){f(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get viewingMode(){return this._viewingMode}set viewingMode(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,null!=this._pathVerticalPlaneData&&this._requestRender())}set pathVerticalPlaneVertices(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new Le(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new Le(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){pe(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e,this._techniqueRepository=e.techniqueRepository,this._techniqueConfig=new Ge;const t=new Me;t.contrastControlEnabled=this.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(De,t)}uninitializeRenderContext(){this._technique=P(this._technique),this._pathVerticalPlaneData=b(this._pathVerticalPlaneData),this._pathTechnique=P(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===M.Global,this._technique=this._techniqueRepository.releaseAndAcquire(Fe,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}renderNode(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,t){const i=e.rctx;this._updatePassParameters(e),i.bindTechnique(t,e.bindParameters,this._passParameters),i.screen.draw()}_renderPath(e){if(null==this._pathVerticalPlaneData||null==this._pathTechnique)return;const t=e.rctx,i=this._pathTechnique;t.bindTechnique(i,e.bindParameters,{...this._passParameters,origin:this._pathVerticalPlaneData.origin}),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if(x(C(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),ke),ke.c0=-Number.MAX_VALUE,!D(t.frustum,ke))return;E(ke,this._passParameters.lineStartWorld),L(ke,this._passParameters.lineEndWorld)}else a(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),o(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}get test(){return{passParameters:this._passParameters}}};m([v({constructOnly:!0})],Xe.prototype,"contrastControlEnabled",void 0),m([v({constructOnly:!0})],Xe.prototype,"_isDecoration",void 0),m([v({constructOnly:!0})],Xe.prototype,"renderCoordsHelper",void 0),Xe=m([w("esri.views.3d.support.LaserLineRenderer")],Xe);const ke=V();class $e extends _{constructor(e){super(e),this._angleCutoff=Re,this._style={},this._heightManifoldTarget=c(),this._heightManifoldEnabled=!1,this._intersectsLine=u(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){return this._renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){null!=e?(a(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(null==e)return void(this.intersectsLine=null);const t=this.view.renderCoordsHelper.worldUpAtPosition(e,Je);this.intersectsLine=g(e,t),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){null!=e?(f(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=null!=e?f(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=null!=e?{origin:d(e.origin),target:e.target?d(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||null!=this._pointDistanceLine||null!=this._pathVerticalPlaneBuffers)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){null==this._renderer&&(this._renderer=new Xe({renderCoordsHelper:this.view.renderCoordsHelper,contrastControlEnabled:!0,_isDecoration:this.isDecoration}),this._renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer))}_syncStyle(){null!=this._renderer&&(this._renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){null!=this._renderer&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){null!=this._renderer&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){null!=this._renderer&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){null!=this._renderer&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){null!=this._renderer&&(this._renderer.pathVerticalPlaneEnabled=null!=this._pathVerticalPlaneBuffers&&this.visible,null!=this._pathVerticalPlaneBuffers&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){null!=this._renderer&&(this._renderer.lineVerticalPlaneEnabled=null!=this._lineVerticalPlaneSegment&&this.visible,null!=this._lineVerticalPlaneSegment&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(null==this._renderer)return;const e=this._pointDistanceLine,t=null!=e;this._renderer.pointDistanceEnabled=t&&null!=e.target&&this.visible,t&&(this._renderer.pointDistanceOrigin=e.origin,null!=e.target&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){null!=this._renderer&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const Je=c();export{$e as L};
