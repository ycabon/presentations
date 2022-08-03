import { j9 as a, ja as n$1, hE as o$1, hP as e$1, jb as m$2, jc as e$2, hF as n$2, r, hG as o$2, hN as e$3, gQ as c, aE as r$1, gh as O$1, br as n$3, gO as e$4, i2 as t, hU as e$5, hV as o$3, hW as W$1, jd as s, am as R$1, i0 as _$3, i8 as T$2, aH as n$4, aL as o$4, an as E$1, t as t$1, aj as f$1, je as o$5, ad as c$1, ap as F$1, e8 as e$6, B as e$7, hS as e$8, iN as t$2, f9 as p$2, fp as M, jf as o$6, hM as e$9, im as O$2, e9 as z$2, g$ as s$1, f0 as x$1, f2 as r$2, jg as w$1, fe as _$4, hz as j$1, ea as _$5, fd as u$1, f3 as n$5, jh as R$2, iK as E$2, iM as t$3, bl as r$3, hs as v$1, hr as s$2, eJ as l, ji as S$1, i5 as E$3, jj as h$1, jk as B, jl as u$2, al as s$3, jm as p$3, hv as p$4, ha as j$2, hw as m$3, hx as l$1, hy as v$2, jn as m$4, h6 as t$5, jo as e$a, ir as l$2, gc as i$1, iv as O$3, j2 as L, b3 as l$3, b4 as h$2, f4 as r$4, gf as D$1, f7 as a$1, jp as o$7, jq as K, b7 as o$8, jr as a$2, fu as Bn, gp as M$1, gC as m$5, gt as h$3, fF as c$2, gw as T$3, js as a$3 } from './_virtual_index-9b831d4a.js';
import { t as t$4 } from './LineVisualElement-53a30f81.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(i,s){i.extensions.add("GL_OES_standard_derivatives");const p=i.fragment;p.include(a),i.include(n$1),p.uniforms.add([new o$1("globalAlpha",(o=>o.globalAlpha)),new e$1("glowColor",(o=>o.glowColor)),new o$1("glowWidth",((o,e)=>o.glowWidth*e.camera.pixelRatio)),new o$1("glowFalloff",(o=>o.glowFalloff)),new e$1("innerColor",(o=>o.innerColor)),new o$1("innerWidth",((o,e)=>o.innerWidth*e.camera.pixelRatio)),new m$2("depthMap",((o,e)=>e.linearDepthTexture)),new e$2("nearFar",((o,e)=>e.camera.nearFar)),new m$2("frameColor",((o,e)=>e.mainColorTexture))]),p.code.add(n$2`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),p.code.add(n$2`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),p.code.add(n$2`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),p.code.add(n$2`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),s.contrastControlEnabled?(p.uniforms.add(new o$1("globalAlphaContrastBoost",(e=>r(e.globalAlphaContrastBoost)?e.globalAlphaContrastBoost:1))),p.code.add(n$2`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):p.code.add(n$2`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function v(i$1){const r=new o$2;r.include(i,i$1);const{vertex:v,fragment:w}=r;return v.uniforms.add([new e$3("modelView",((i,o)=>c(m$1,o.camera.viewMatrix,i.origin))),new e$3("proj",((e,i)=>i.camera.projectionMatrix)),new o$1("glowWidth",((e,i)=>e.glowWidth*i.camera.pixelRatio)),new e$2("pixelToNDC",((e,i)=>r$1(p$1,2/i.camera.fullViewport[2],2/i.camera.fullViewport[3])))]),r.attributes.add(O$1.START,"vec3"),r.attributes.add(O$1.END,"vec3"),r.attributes.add(O$1.UP,"vec3"),r.attributes.add(O$1.EXTRUDE,"vec2"),r.varyings.add("uv","vec2"),r.varyings.add("vViewStart","vec3"),r.varyings.add("vViewEnd","vec3"),r.varyings.add("vViewPlane","vec4"),v.code.add(n$2`void main() {
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
}`),w.uniforms.add(new o$1("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),w.code.add(n$2`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
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
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),r}const p$1=n$3(),m$1=e$4(),w=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class m extends e$5{initializeProgram(e){return new o$3(e.rctx,m.shader.get().build(this.configuration),h)}initializePipeline(){return W$1({blending:s(R$1.ONE,R$1.ONE_MINUS_SRC_ALPHA),colorWrite:_$3})}}m.shader=new t(w,(()=>import('./LaserlinePath.glsl-afba17a2.js')));const h=new Map([[O$1.START,0],[O$1.END,1],[O$1.UP,2],[O$1.EXTRUDE,3]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class _$2{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=n$4(),this._dirty=!1,this._count=0,this._vao=null;}set vertices(e){const t=new Float64Array(3*e.length);let r=0;for(const s of e)t[r++]=s[0],t[r++]=s[1],t[r++]=s[2];this.buffers=[t];}set buffers(e){if(this._buffers=e,this._buffers.length>0){const e=this._buffers[0],t=3*Math.floor(e.length/3/2);o$4(this._origin,e[t+0],e[t+1],e[t+2]);}else o$4(this._origin,0,0,0);this._dirty=!0;}get origin(){return this._origin}draw(t){const r$1=this._ensureVAO(t);r(r$1)&&(t.bindVAO(r$1),t.drawArrays(E$1.TRIANGLES,0,this._count));}dispose(){r(this._vao)&&this._vao.dispose();}_ensureVAO(e){return t$1(this._buffers)?null:(t$1(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,t){const r=this._createDataBuffer(t);return this._dirty=!1,new f$1(e,h,{data:o$5(V$1)},{data:c$1.createVertex(e,F$1.STATIC_DRAW,r)})}_ensureVertexData(e,t){if(!this._dirty)return;const r=this._createDataBuffer(t);e.vertexBuffers.data.setData(r),this._dirty=!1;}_numberOfRenderVertices(e){return 3*(2*(e.length/3-1))}_createDataBuffer(e){const t=e.reduce(((e,t)=>e+this._numberOfRenderVertices(t)),0);this._count=t;const i=V$1.createBuffer(t),o=this._origin;let f=0,n=0;for(const u of e){for(let e=0;e<u.length;e+=3){const t=o$4(b$1,u[e+0],u[e+1],u[e+2]);0===e?n=this._renderCoordsHelper.getAltitude(t):this._renderCoordsHelper.setAltitude(t,n);const a=this._renderCoordsHelper.worldUpAtPosition(t,d),c=f+2*e,h=e$6(b$1,t,o);if(e<u.length-3){i.up.setVec(c,a),i.up.setVec(c+3,a),i.up.setVec(c+5,a);for(let e=0;e<6;e++)i.start.setVec(c+e,h);i.extrude.setValues(c+0,0,-1),i.extrude.setValues(c+1,1,-1),i.extrude.setValues(c+2,1,1),i.extrude.setValues(c+3,0,-1),i.extrude.setValues(c+4,1,1),i.extrude.setValues(c+5,0,1);}if(e>0){i.up.setVec(c-2,a),i.up.setVec(c-4,a),i.up.setVec(c-5,a);for(let e=-6;e<0;e++)i.end.setVec(c+e,h);}}f+=this._numberOfRenderVertices(u);}return i.buffer}}const d=n$4(),b$1=n$4(),V$1=T$2().vec3f(O$1.START).vec3f(O$1.END).vec3f(O$1.UP).vec2f(O$1.EXTRUDE);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e extends t$2{constructor(){super(...arguments),this.contrastControlEnabled=!1;}}e$7([e$8()],e.prototype,"contrastControlEnabled",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const C=M(6);function A(e){const i$1=new o$2;i$1.extensions.add("GL_OES_standard_derivatives"),i$1.include(o$6),i$1.include(i,e);const t=i$1.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(t.uniforms.add(new o$1("maxPixelDistance",((i,t)=>e.heightManifoldEnabled?2*t.camera.computeScreenPixelSizeAt(i.heightManifoldTarget):2*t.camera.computeScreenPixelSizeAt(i.lineVerticalPlaneSegment.origin)))),t.code.add(n$2`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){const e=(e,i,t)=>O$2(e,i.heightManifoldTarget,t.camera.viewMatrix),i=(e,i)=>O$2(e,[0,0,0],i.camera.viewMatrix);t.uniforms.add([new e$9("heightManifoldOrigin",((t,n)=>(e(T$1,t,n),i(_$1,n),e$6(_$1,_$1,T$1),z$2(G,_$1),G[3]=s$1(_$1),G))),new e$1("globalOrigin",((e,t)=>i(T$1,t))),new o$1("cosSphericalAngleThreshold",((e,i)=>1-Math.max(2,x$1(i.camera.eye,e.heightManifoldTarget)*i.camera.perRenderPixelRatio)/s$1(e.heightManifoldTarget)))]),t.code.add(n$2`float globeDistancePixels(float posInGlobalOriginLength) {
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
}`);}else t.code.add(n$2`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);return e.pointDistanceEnabled&&(t.uniforms.add(new o$1("maxPixelDistance",((e,i)=>2*i.camera.computeScreenPixelSizeAt(e.pointDistanceTarget)))),t.code.add(n$2`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&(t.uniforms.add(new o$1("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),t.code.add(n$2`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&t.code.add(n$2`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),t.code.add(n$2`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled&&(t.uniforms.add([new e$2("angleCutoff",(e=>V(e))),new e$9("heightPlane",((e,i)=>z$1(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,T$1),i.camera.viewMatrix)))]),t.code.add(n$2`{
float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
color = max(color, heightManifoldColor * heightManifoldAlpha);
}`)),e.pointDistanceEnabled&&(t.uniforms.add([new e$2("angleCutoff",(e=>V(e))),new e$9("pointDistanceSphere",((e,i)=>j(e,i)))]),t.code.add(n$2`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(t.uniforms.add([new e$2("angleCutoff",(e=>V(e))),new e$9("lineVerticalPlane",((e,i)=>y(e,i))),new e$1("lineVerticalStart",((e,i)=>O(e,i))),new e$1("lineVerticalEnd",((e,i)=>E(e,i)))]),t.code.add(n$2`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(t.uniforms.add([new e$2("angleCutoff",(e=>V(e))),new e$1("intersectsLineStart",((e,i)=>O$2(T$1,e.lineStartWorld,i.camera.viewMatrix))),new e$1("intersectsLineEnd",((e,i)=>O$2(T$1,e.lineEndWorld,i.camera.viewMatrix))),new e$1("intersectsLineDirection",((e,i)=>(r$2(G,e.intersectsLineSegment.vector),G[3]=0,z$2(T$1,w$1(G,G,i.camera.viewMatrix))))),new o$1("intersectsLineRadius",(e=>e.intersectsLineRadius))]),t.code.add(n$2`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),t.code.add(n$2`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),i$1}function V(t){return r$1(I,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-M(2))))}function j(e,i){return O$2(W,e.pointDistanceOrigin,i.camera.viewMatrix),W[3]=x$1(e.pointDistanceOrigin,e.pointDistanceTarget),W}function y(e,i){const t=j$1(e.lineVerticalPlaneSegment,.5,T$1),n=e.renderCoordsHelper.worldUpAtPosition(t,R),a=z$2(_$1,e.lineVerticalPlaneSegment.vector),r=_$5(G,n,a);return z$2(r,r),z$1(e.lineVerticalPlaneSegment.origin,r,i.camera.viewMatrix)}function O(e,i){const t=r$2(T$1,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(t,0),O$2(t,t,i.camera.viewMatrix)}function E(e,i){const t=u$1(T$1,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(t,0),O$2(t,t,i.camera.viewMatrix)}function z$1(e,i,t){return O$2(U,e,t),r$2(G,i),G[3]=0,w$1(G,G,t),_$4(U,G,F)}const I=n$3(),T$1=n$4(),G=n$5(),R=n$4(),_$1=n$4(),U=n$4(),F=p$2(),W=R$2(),H=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:C,build:A},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class f extends t$3{constructor(){super(...arguments),this.innerColor=r$3(1,1,1),this.innerWidth=1,this.glowColor=r$3(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=M(6),this.pointDistanceOrigin=n$4(),this.pointDistanceTarget=n$4(),this.lineVerticalPlaneSegment=v$1(),this.intersectsLineSegment=v$1(),this.intersectsLineRadius=3,this.heightManifoldTarget=n$4(),this.lineStartWorld=n$4(),this.lineEndWorld=n$4();}}class p extends e$5{initializeProgram(e){return new o$3(e.rctx,p.shader.get().build(this.configuration),E$2)}initializePipeline(){return W$1({blending:s(R$1.ONE,R$1.ONE_MINUS_SRC_ALPHA),colorWrite:_$3})}}p.shader=new t(H,(()=>import('./Laserlines.glsl-839a5040.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class n extends e{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1;}}e$7([e$8()],n.prototype,"heightManifoldEnabled",void 0),e$7([e$8()],n.prototype,"pointDistanceEnabled",void 0),e$7([e$8()],n.prototype,"lineVerticalPlaneEnabled",void 0),e$7([e$8()],n.prototype,"intersectsLineEnabled",void 0),e$7([e$8()],n.prototype,"spherical",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class D{constructor(e,t={contrastControlEnabled:!1}){this._config=t,this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=l.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._passParameters=S$1(e,new f);}get renderSlots(){return [this._config.contrastControlEnabled?E$3.LASERLINES_CONTRAST_CONTROL:E$3.LASERLINES]}get needsLinearDepth(){return !0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender());}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){r$2(this._passParameters.heightManifoldTarget,e),this._requestRender();}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender());}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){r$2(this._passParameters.pointDistanceTarget,e),this._requestRender();}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){r$2(this._passParameters.pointDistanceOrigin,e),this._requestRender();}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender());}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){h$1(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender();}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender());}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){h$1(e,this._passParameters.intersectsLineSegment),this._requestRender();}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender());}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender());}get viewingMode(){return this._viewingMode}set viewingMode(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender());}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,r(this._pathVerticalPlaneData)&&this._requestRender());}set pathVerticalPlaneVertices(e){t$1(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new _$2(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender();}set pathVerticalPlaneBuffers(e){t$1(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new _$2(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender();}setParameters(e){B(this._passParameters,e)&&this._requestRender();}initializeRenderContext(e$1){this._context=e$1;const t=e$1.renderContext.rctx;this._quadVAO=u$2(t),this._techniqueRepository=e$1.shaderTechniqueRepository,this._techniqueConfig=new n;const i=new e;i.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(m,i);}uninitializeRenderContext(){this._quadVAO=s$3(this._quadVAO),this._technique=p$3(this._technique),this._pathVerticalPlaneData=s$3(this._pathVerticalPlaneData),this._pathTechnique=p$3(this._pathTechnique);}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===l.Global,this._technique=this._techniqueRepository.releaseAndAcquire(p,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(e,t){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,t),this.pathVerticalPlaneEnabled&&this._renderPath(e);}_renderUnified(e,t){const i=e.rctx;this._updatePassParameters(e),i.bindTechnique(t,this._passParameters,e.bindParameters),i.bindVAO(this._quadVAO),i.drawArrays(E$1.TRIANGLE_STRIP,0,4);}_renderPath(e){if(t$1(this._pathVerticalPlaneData)||t$1(this._pathTechnique))return;const i=e.rctx,n=this._pathTechnique;i.bindTechnique(n,{...this._passParameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters),this._pathVerticalPlaneData.draw(e.rctx);}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const t=e.bindParameters.camera;if(this._intersectsLineInfinite){if(p$4(j$2(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),T),T.c0=-Number.MAX_VALUE,!m$3(t.frustum,T))return;l$1(T,this._passParameters.lineStartWorld),v$2(T,this._passParameters.lineEndWorld);}else r$2(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),u$1(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector);}_requestRender(){this._context&&this._context.requestRender();}}const T=s$2();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class _ extends t$4{constructor(e){super(e.view),this._angleCutoff=C,this._style={},this._heightManifoldTarget=n$4(),this._heightManifoldEnabled=!1,this._intersectsLine=v$1(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e);}get testData(){return this.renderer}createResources(){this._ensureRenderer();}destroyResources(){this._disposeRenderer();}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance();}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff());}get style(){return this._style}set style(e){this._style=e,this._syncStyle();}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(t){r(t)?(r$2(this._heightManifoldTarget,t),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold();}set intersectsWorldUpAtLocation(e){if(t$1(e))return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(e,o);this.intersectsLine=m$4(e,i),this.intersectsLineInfinite=!0;}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(t){r(t)?(h$1(t,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer();}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite();}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){this._lineVerticalPlaneSegment=r(t)?h$1(t):null,this._syncLineVerticalPlane(),this._syncRenderer();}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer();}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(t){this._pointDistanceLine=r(t)?{origin:t$5(t.origin),target:t$5(t.target)}:null,this._syncPointDistance(),this._syncRenderer();}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||r(this._pointDistanceLine)||r(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer();}_ensureRenderer(){r(this.renderer)||(this.renderer=new D({renderCoordsHelper:this.view.renderCoordsHelper},{contrastControlEnabled:!0}),this.renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer));}_syncStyle(){t$1(this.renderer)||(this.renderer.setParameters(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius));}_syncAngleCutoff(){t$1(this.renderer)||this.renderer.setParameters({angleCutoff:this._angleCutoff});}_syncHeightManifold(){t$1(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget));}_syncIntersectsLine(){t$1(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine));}_syncIntersectsLineInfinite(){t$1(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite);}_syncPathVerticalPlane(){t$1(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=r(this._pathVerticalPlaneBuffers)&&this.visible,r(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers));}_syncLineVerticalPlane(){t$1(this.renderer)||(this.renderer.lineVerticalPlaneEnabled=r(this._lineVerticalPlaneSegment)&&this.visible,r(this._lineVerticalPlaneSegment)&&(this.renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment));}_syncPointDistance(){t$1(this.renderer)||(this.renderer.pointDistanceEnabled=r(this._pointDistanceLine)&&this.visible,r(this._pointDistanceLine)&&(this.renderer.pointDistanceOrigin=this._pointDistanceLine.origin,this.renderer.pointDistanceTarget=this._pointDistanceLine.target));}_disposeRenderer(){r(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null);}}const o=n$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class u{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1;}destroy(){this._destroyResources();}get object(){return r(this._resources)?this._resources.object:null}get resources(){return r(this._resources)?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible());}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources());}recreate(){this.attached&&this._createResources();}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(t$1(this._resources)||!e)return;const r=this._resources.object;this._resources.external.forEach((s=>{s.type===e$a.Geometry&&e.remove(s);})),r.removeAllGeometries();const t=this._resourceFactory.recreateGeometry(this._resources.external,r,this._resources.layer);e.addMany(t);}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources();}_createResources(){this._destroyResources();const e=this._resourceFactory,s=e.view,i=s._stage;if(!i)return;const u=new l$2({isPickable:!1,updatePolicy:i$1.SYNC});i.add(u);const n=new O$3({castShadow:!1}),_=e.createResources(n,u);_.forEach((e=>{i.add(e),e instanceof L&&i.loadImmediate(e);})),i.add(n),u.add(n);const l=e.cameraChanged?l$3((()=>s.state.camera),(s=>e.cameraChanged(s)),h$2):null;this._resources={layer:u,object:n,external:_,cameraHandle:l},this._syncVisible();}_destroyResources(){if(t$1(this._resources))return;const e=this._resourceFactory.view._stage;e?.remove(this._resources.object),e?.remove(this._resources.layer),this._resources.external.forEach((s=>{e?.remove(s),"dispose"in s&&s.dispose();})),this._resources.object.dispose(),this._resources.cameraHandle&&this._resources.cameraHandle.remove(),this._resources=null;}_syncVisible(){t$1(this._resources)||this._resources.object.setVisible(this._visible);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class S{constructor(e){this.view=null,this._geometry=null,this._size=3,this._color=r$4(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=r$4(1,1,1,1),this._elevationInfo=null,this.resources=new u({view:e.view,createResources:e=>this._createResources(e),recreateGeometry:(e,t)=>(e.geometry=this._recreateGeometry(t,e.material),r(e.geometry)?[e.geometry]:[])});let t=!0;for(const r in e)r in this?"attached"===r?t=e[r]:this[r]=e[r]:console.error("Cannot set unknown property",r);this.attached=t;}destroy(){this.resources.destroy();}get visible(){return this.resources.visible}set visible(e){this.resources.visible=e;}get attached(){return this.resources.attached}set attached(e){this.resources.attached=e;}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.resources.recreateGeometry();}get size(){return this._size}set size(e){if(e!==this._size){const t=this._preferredTextureSize;this._size=e,t<this._preferredTextureSize?r(this.resources)&&this.resources.recreate():this._updateSizeAttribute();}}get color(){return this._color}set color(e){D$1(e,this._color)||(a$1(this._color,e),this._updateMaterial());}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial());}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,r(this.resources)&&this.resources.recreate());}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial());}get outlineColor(){return this._outlineColor}set outlineColor(e){D$1(e,this._outlineColor)||(a$1(this._outlineColor,e),this._updateMaterial());}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.resources&&this.resources.recreateGeometry();}_updateMaterial(){const e=this.resources.resources;t$1(e)||e.material.setParameters(this._materialParameters(e.texture.id));}_updateSizeAttribute(){const e=this.resources.resources,t=this.resources.object;if(t$1(e)||t$1(t))return;const r=e.geometry;if(t$1(r))return;const s=r.getMutableAttribute(O$1.SIZE).data,o=this._geometrySize;s[0]=o,s[1]=o,t.geometryVertexAttrsUpdated(t.geometryRecords[0]);}_materialParameters(e){return {color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:z,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:e,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled}}get _geometrySize(){return this._size/b}_recreateGeometry(e,t){const i=this._createRenderGeometry();return r(i)&&e.addGeometry(i,t),i}_createResources(e){const t=o$7(this._primitive,this._preferredTextureSize),i=new K(this._materialParameters(t.id)),s=this._recreateGeometry(e,i);return {material:i,texture:t,geometry:s,forEach(e){e(t),e(i),r(this.geometry)&&e(this.geometry);}}}get _preferredTextureSize(){return o$8(a$2(2*this._geometrySize),16,128)}calculateMapBounds(e){if(t$1(this.resources.resources)||t$1(this.resources.resources.geometry))return !1;const t=this.resources.resources.geometry.vertexAttributes.get(O$1.POSITION);return Bn(t.data,this.view.renderCoordsHelper.spatialReference,x,this.view.spatialReference),M$1(e,x),!0}_createRenderGeometry(){const e=this.geometry;if(t$1(e))return null;const{renderCoordsHelper:t,elevationProvider:r}=this.view,o=m$5(e,r,h$3.fromElevationInfo(this.elevationInfo),t),n=o$4(c$2.get(),e.x,e.y,o),a=c$2.get();Bn(n,e.spatialReference,a,t.spatialReference);const l=this._geometrySize;return T$3.createPointGeometry(null,a,null,[l,l],[0,0,0,1])}}const b=a$3,z=[b/2,b/2,1-b/2,1-b/2],x=n$4();

export { A, C, S, _, u, v };
