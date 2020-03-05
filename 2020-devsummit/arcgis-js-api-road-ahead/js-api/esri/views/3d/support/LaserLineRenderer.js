// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/mathUtils ../../../core/maybe ../../../core/libs/gl-matrix-2/vec2f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../core/libs/gl-matrix-2/vec4 ../../../core/libs/gl-matrix-2/vec4f64 ./geometryUtils ./LaserlinePathData ../webgl-engine/lib/glUtil3D ../webgl-engine/lib/Util ../webgl-engine/materials/internal/MaterialUtil ../webgl-engine/shaders/LaserlinePathTechnique ../webgl-engine/shaders/LaserlineTechnique".split(" "),
function(p,q,H,y,k,z,f,g,r,n,h,t,A,B,u,v,w){function x(b,a,e,c){var d=C,m=D;f.vec3.transformMat4(d,a,c);f.vec3.copy(m,e);m[3]=0;r.vec4.transformMat4(m,m,c);h.plane.fromPositionAndNormal(d,m,b)}Object.defineProperty(q,"__esModule",{value:!0});var C=g.vec3f64.create(),D=n.vec4f64.create(),E={glowColor:[1,.5,0],glowWidth:8,glowFalloff:8,innerColor:[1,1,1],innerWidth:1,globalAlpha:.75,angleCutoff:y.deg2rad(6),globalAlphaContrastBoost:2};p=function(){function b(a,e,c){void 0===e&&(e={});void 0===c&&(c=
{contrastControlEnabled:!1});this._technique=null;this._projInfo=n.vec4f64.create();this._zScale=z.vec2f64.create();this._heightPlaneEnabled=!1;this._heightPlanePosition=g.vec3f64.create();this._heightPlaneHeight=0;this._pointDistanceEnabled=!1;this._pointDistanceOrigin=g.vec3f64.create();this._pointDistanceTarget=g.vec3f64.create();this._lineVerticalPlaneEnabled=!1;this._lineVerticalPlaneSegment=h.lineSegment.create();this._intersectsLineEnabled=!1;this._intersectsLineSegment=h.lineSegment.create();
this._intersectsLineRadius=3;this._pathVerticalPlaneEnabled=this._intersectsLineInfinite=!1;this._pathTechnique=this._pathVerticalPlaneData=null;this.canRender=!0;this._tempNormal=g.vec3f64.create();this._tempDir=g.vec3f64.create();this._tempUp=g.vec3f64.create();this._tempVec3A=g.vec3f64.create();this._tempVec3B=g.vec3f64.create();this._tempVec4=n.vec4f64.create();this._tempPlane=h.plane.create();this._tempSphere=h.sphere.create();this._renderCoordsHelper=a;this._params=u.copyParameters(e,E);this._config=
c}Object.defineProperty(b.prototype,"renderSlots",{get:function(){return[this._config.contrastControlEnabled?17:16]},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"needsLinearDepth",{get:function(){return!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"heightPlaneEnabled",{get:function(){return this._heightPlaneEnabled},set:function(a){a!==this._heightPlaneEnabled&&(this._heightPlaneEnabled=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"heightPlanePosition",{get:function(){return this._heightPlanePosition},set:function(a){f.vec3.copy(this._heightPlanePosition,a);this._requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"heightPlaneHeight",{get:function(){return this._heightPlaneHeight},set:function(a){this._heightPlaneHeight!==a&&(this._heightPlaneHeight=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pointDistanceEnabled",{get:function(){return this._pointDistanceEnabled},
set:function(a){a!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pointDistanceTarget",{get:function(){return this._pointDistanceTarget},set:function(a){f.vec3.copy(this._pointDistanceTarget,a);this._requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pointDistanceOrigin",{get:function(){return this._pointDistanceOrigin},set:function(a){f.vec3.copy(this._pointDistanceOrigin,
a);this._requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"lineVerticalPlaneEnabled",{get:function(){return this._lineVerticalPlaneEnabled},set:function(a){a!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"lineVerticalPlaneSegment",{get:function(){return this._lineVerticalPlaneSegment},set:function(a){h.lineSegment.copy(a,this._lineVerticalPlaneSegment);
this._requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectsLineEnabled",{get:function(){return this._intersectsLineEnabled},set:function(a){a!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectsLineSegment",{get:function(){return this._intersectsLineSegment},set:function(a){h.lineSegment.copy(a,this._intersectsLineSegment);this._requestRender()},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"intersectsLineRadius",{get:function(){return this._intersectsLineRadius},set:function(a){a!==this._intersectsLineRadius&&(this._intersectsLineRadius=a,this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"intersectsLineInfinite",{get:function(){return this._intersectsLineInfinite},set:function(a){a!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=a,this._requestRender())},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"pathVerticalPlaneEnabled",{get:function(){return this._pathVerticalPlaneEnabled},set:function(a){a!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=a,k.isSome(this._pathVerticalPlaneData)&&this._requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pathVerticalPlaneVertices",{set:function(a){k.isNone(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new t.LaserlinePathData(this._renderCoordsHelper));this._pathVerticalPlaneData.vertices=
a;this.pathVerticalPlaneEnabled&&this._requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pathVerticalPlaneBuffers",{set:function(a){k.isNone(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new t.LaserlinePathData(this._renderCoordsHelper));this._pathVerticalPlaneData.buffers=a;this.pathVerticalPlaneEnabled&&this._requestRender()},enumerable:!0,configurable:!0});b.prototype.setParameterValues=function(a){u.updateParameters(this._params,a)&&this._requestRender()};
b.prototype.initializeRenderContext=function(a){this._initContext=a;this._quadVAO=A.createQuadVAO(a.rctx);this._techniqueRepository=a.shaderTechniqueRep;this._techniqueConfig=new w.LaserlineTechniqueConfiguration;this._pathTechniqueConfig=new v.LaserlinePathTechniqueConfiguration};b.prototype.uninitializeRenderContext=function(){this._quadVAO.dispose();this._quadVAO=null;k.isSome(this._technique)&&this._techniqueRepository.release(this._technique);k.isSome(this._pathVerticalPlaneData)&&this._pathVerticalPlaneData.dispose();
k.isSome(this._pathTechnique)&&this._techniqueRepository.release(this._pathTechnique)};b.prototype.render=function(a){var e=this.heightPlaneEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled,c=this.pathVerticalPlaneEnabled;if(!e&&!c)return!0;var d=a.camera;B.inverseProjectionInfo(d.projectionMatrix,d.fullWidth,d.fullHeight,this._projInfo,this._zScale);e&&this.renderUnified(a);c&&this.renderPath(a);return!0};b.prototype.renderUnified=function(a){var e=a.rctx,
c=this._selectTechnique(),d=c.program;e.bindProgram(d);c.bindPipelineState(e);this.bindGlobalUniforms(a,d);this.bindHeightPlaneUniforms(a,d);this.bindPointDistanceUniforms(a,d);this.bindLineVerticalPlaneUniforms(a,d);this.bindIntersectsLineUniforms(a,d);c.bind(this._params,a.camera);e.bindVAO(this._quadVAO);e.drawArrays(5,0,4)};b.prototype.renderPath=function(a){if(!k.isNone(this._pathVerticalPlaneData)){this._pathTechniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled;this._pathTechnique=
this._techniqueRepository.acquireAndReleaseExisting(v.LaserlinePathTechnique,this._pathTechniqueConfig,this._pathTechnique);var e=a.rctx,c=this._pathTechnique,d=c.program;e.bindProgram(d);c.bindPipelineState(e);this.bindGlobalUniforms(a,d);c.bind(this._params,this._pathVerticalPlaneData.origin,a.camera);this._pathVerticalPlaneData.draw(a.rctx)}};b.prototype.bindHeightPlaneUniforms=function(a,e){if(this._heightPlaneEnabled){var c=this._heightPlanePosition,d=this._tempVec3A,b=this._tempPlane;this._renderCoordsHelper.worldUpAtPosition(c,
d);x(b,c,d,a.camera.viewMatrix);e.setUniform4fv("heightPlane",b);e.setUniform1f("heightPlaneHeight",this._heightPlaneHeight)}};b.prototype.bindPointDistanceUniforms=function(a,e){if(this._pointDistanceEnabled){a=a.camera;var c=this._tempSphere;f.vec3.copy(c.center,this._pointDistanceOrigin);f.vec3.transformMat4(c.center,c.center,a.viewMatrix);c.radius=f.vec3.distance(this._pointDistanceOrigin,this._pointDistanceTarget);e.setUniform4f("pointDistanceSphere",c.center[0],c.center[1],c.center[2],c.radius)}};
b.prototype.bindLineVerticalPlaneUniforms=function(a,e){if(this._lineVerticalPlaneEnabled){var c=this._renderCoordsHelper;a=a.camera;var d=this._tempPlane,b=this._tempVec3A,g=this._tempUp,k=this._tempDir,l=this._tempNormal;h.lineSegment.pointAt(this._lineVerticalPlaneSegment,.5,b);c.worldUpAtPosition(b,g);f.vec3.normalize(k,this._lineVerticalPlaneSegment.vector);f.vec3.cross(l,g,k);f.vec3.normalize(l,l);x(d,this._lineVerticalPlaneSegment.origin,l,a.viewMatrix);e.setUniform4fv("lineVerticalPlane",
d);d=this._tempVec3A;f.vec3.copy(d,this._lineVerticalPlaneSegment.origin);c.setAltitude(0,d);f.vec3.transformMat4(d,d,a.viewMatrix);e.setUniform3fv("lineVerticalStart",d);d=this._tempVec3B;f.vec3.add(d,this._lineVerticalPlaneSegment.origin,this._lineVerticalPlaneSegment.vector);c.setAltitude(0,d);f.vec3.transformMat4(d,d,a.viewMatrix);e.setUniform3fv("lineVerticalEnd",d)}};b.prototype.bindIntersectsLineUniforms=function(a,b){if(this._intersectsLineEnabled){var c=F,d=G;if(this._intersectsLineInfinite){var e=
a.camera;h.clipRay.fromRay(h.ray.wrap(this._intersectsLineSegment.origin,this._intersectsLineSegment.vector),l);l.c0=-Number.MAX_VALUE;if(!h.frustum.intersectClipRay(e.frustum.planes,l))return;h.clipRay.getStart(l,c);h.clipRay.getEnd(l,d)}else f.vec3.copy(c,this._intersectsLineSegment.origin),f.vec3.add(d,this._intersectsLineSegment.origin,this._intersectsLineSegment.vector);e=this._tempVec3A;f.vec3.transformMat4(e,c,a.camera.viewMatrix);b.setUniform3fv("intersectsLineStart",e);c=this._tempVec4;f.vec3.copy(c,
this._intersectsLineSegment.vector);this._tempVec4[3]=0;r.vec4.transformMat4(this._tempVec4,this._tempVec4,a.camera.viewMatrix);f.vec3.transformMat4(d,d,a.camera.viewMatrix);b.setUniform3fv("intersectsLineEnd",d);f.vec3.normalize(c,c);b.setUniform3f("intersectsLineDirection",c[0],c[1],c[2]);b.setUniform1f("intersectsLineRadius",this._intersectsLineRadius)}};b.prototype.bindGlobalUniforms=function(a,b){var c=a.camera;b.setUniform4fv("projInfo",this._projInfo);b.setUniform2fv("zScale",this._zScale);
b.setUniform2f("nearFar",c.near,c.far);this._heightPlaneEnabled?b.setUniform1f("maxPixelDistance",2*c.computeScreenPixelSizeAt(this._heightPlanePosition)):this._pointDistanceEnabled?b.setUniform1f("maxPixelDistance",2*c.computeScreenPixelSizeAt(this._pointDistanceTarget)):this._lineVerticalPlaneEnabled&&b.setUniform1f("maxPixelDistance",2*c.computeScreenPixelSizeAt(this._lineVerticalPlaneSegment.origin));b.setUniform1i("depthMap",0);a.rctx.bindTexture(a.offscreenRenderingHelper.linearDepthTexture,
0);b.setUniform1i("frameColor",1);a.rctx.bindTexture(a.offscreenRenderingHelper.mainColorTexture,1)};b.prototype._requestRender=function(){this._initContext&&this._initContext.requestRender()};b.prototype._selectTechnique=function(){this._techniqueConfig.heightPlaneEnabled=this.heightPlaneEnabled;this._techniqueConfig.heightPlaneHeightEnabled=0!==this.heightPlaneHeight;this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled;this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled;
this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled;this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled;return this._technique=this._techniqueRepository.acquireAndReleaseExisting(w.LaserlineTechnique,this._techniqueConfig,this._technique)};return b}();q.LaserLineRenderer=p;var l=h.clipRay.create(),F=g.vec3f64.create(),G=g.vec3f64.create()});