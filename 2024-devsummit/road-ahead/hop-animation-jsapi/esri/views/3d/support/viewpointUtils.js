// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../Camera ../../../geometry ../../../Graphic ../../../Viewpoint ../../../core/asyncUtils ../../../core/has ../../../core/Cyclical ../../../core/Error ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/math/mat3 ../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/projection ../../../geometry/projection/computeTranslationToOriginAndRotation ../../../geometry/projection/projectPointToVector ../../../geometry/projection/projectVectorToPoint ../../../geometry/projection/projectVectorToVector ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/frustum ../../../geometry/support/scaleUtils ../camera/intersectionUtils ./cameraUtils ./ElevationProvider ../../../geometry/Point ../../../geometry/Extent ../../../geometry/SpatialReference ../../../geometry/Geometry ../../../geometry/Multipoint".split(" "),
function(y,R,Aa,ea,I,S,Ba,w,J,T,U,fa,ha,n,C,u,ia,K,V,ja,q,W,ka,la,z,k,X,x,ma,Y,na,oa){async function Z(a,b,c,d){var e=b.camera;if(null!=e)return pa(e,k.getViewSR(a),d);({targetGeometry:e}=b);if(null==e)throw Error("Viewpoint has no targetGeometry!");const {camera:f,mode:g}=aa(a,b.rotation,c);if("point"===e.type)return qa(a,b,e,f,g,d);b=e.extent;if(null==b)throw Error("Target geometry has no extent!");return k.fromExtentAsync(a,b,f.heading,f.tilt,g,d)}async function pa(a,b,c){b=await u.projectWithZConversion(a.position,
b,{signal:c});T.throwIfAborted(c);a=a.clone();a.position=b.clone();return a}function aa(a,b,c){a=k.internalToExternal(a,a.state.camera);let d=k.OrientationMode.ADJUST;null!=b&&(a.heading=360-w.cyclicalDegrees.normalize(b),d=k.OrientationMode.LOCKED);null!=c&&(a.tilt=c);return{camera:a,mode:d}}async function qa(a,b,c,d,e,f){const g=a.spatialReference;c=await u.projectWithZConversion(c.clone(),g,{signal:f});T.throwIfAborted(f);b=null!=b.scale?k.scaleToDistance(a,b.scale,c.latitude):a.state.camera.distance;
return k.fromCenterDistanceAsync(a,c,b,d,e,f)}function L(a,b){return null==b.scale&&null!=b.zoom?k.zoomToScale(a,b.zoom):b.scale}function M(a,b){let c=!1;null!=b.heading?(a.heading=b.heading,c=!0):null!=b.rotation&&(a.heading=360-w.cyclicalDegrees.normalize(b.rotation),c=!0);null!=b.tilt&&(a.tilt=b.tilt,c=!0);null!=b.fov&&(a.fov=b.fov);return c}function N(a,b,c,d){var e=a.spatialReference||Y.WGS84;b=null!=b?b:k.externalToInternal(a,c);if(null==b)return d;e=new x({spatialReference:e});if(!V.projectVectorToPoint(b.center,
a.renderSpatialReference,e))return d;d.targetGeometry=e;d.scale=k.computeScale(a,b);d.rotation=w.cyclicalDegrees.normalize(360-c.heading);d.camera=c;return d}async function D(a,b,c,d){const e=()=>new J("viewpointutils:invalid-geometry","The target is missing a valid geometry");if(!b)throw e();"mesh"===b.type&&(b=b.extent);const f=b.spatialReference,g=a.spatialReference,h=a.basemapTerrain.spatialReference;if(!b.hasZ&&a.basemapTerrain){let l;switch(b.type){case "point":l=b;break;case "multipoint":case "polyline":l=
b.extent?.center;break;case "extent":l=b.center;break;case "polygon":l=b.centroid}null!=l&&null!=h&&null!=a.elevationProvider?(l=await u.projectWithZConversion(l,h,{signal:d}),m[2]=X.getElevationAtPoint(a.elevationProvider,l)??0):m[2]=0}const p=[];(0,ra[b.type])(b,b.hasZ?l=>{p.push([l[0],l[1],l[2]])}:l=>{p.push([l[0],l[1]])},m);if(0===p.length)throw e();a=await u.projectWithZConversion(new oa({spatialReference:f,hasZ:b.hasZ,hasM:!1,points:p}),g,{signal:d});b.hasZ&&(c.hasZ=!0);if(b.hasZ)for(const [l,
t,A]of a.points)m[0]=l,m[1]=t,m[2]=A,q.expandWithVec3(c.boundingBox,m);else for(const [l,t]of a.points)m[0]=l,m[1]=t,q.expandWithVec3(c.boundingBox,m)}async function sa(a,b,c,d,e){const f=await S.result(a.whenViewForGraphic(b));if(!1!==f.ok&&null!=f.value&&"whenGraphicBounds"in f.value)if(c=await S.result(f.value.whenGraphicBounds(b,{minDemResolution:c})),!1!==c.ok&&c.value){var {screenSpaceObjects:g,boundingBox:h}=c.value;q.expandWithAABB(d.boundingBox,h);g&&g.forEach(p=>{d.screenSpaceObjects.push(p)});
isFinite(h[2])&&(d.hasZ=!0)}else await D(a,b.geometry,d,e);else await D(a,b.geometry,d,e)}async function ba(a,b,c,d,e){if(Array.isArray(b)&&2===b.length){const f=b[0],g=b[1];if("number"===typeof f&&"number"===typeof g){r.x=f;r.y=g;r.z=void 0;r.spatialReference=a.spatialReference?.isGeographic?a.spatialReference:Y.WGS84;await D(a,r,d,e);return}}b&&"map"in b&&"function"===typeof b.map?await Promise.allSettled(b.map(f=>ba(a,f,c,d,e))):b instanceof na?await D(a,b,d,e):b instanceof ea&&await sa(a,b,c,
d,e)}async function ta(a,b,c,d,e){if(null!=b.camera)return ca(a,b.camera,d,e);e.scale=b.scale;e.rotation=b.rotation;e.targetGeometry=null!=b.targetGeometry?b.targetGeometry.clone():null;e.camera=null;null!=c.heading?e.rotation=w.cyclicalDegrees.normalize(360-c.heading):null!=c.rotation&&(e.rotation=c.rotation);b=L(a,c);null!=b&&(e.scale=b);e.camera=await Z(a,e,c.tilt,d);return e}async function ca(a,b,c,d){c=await u.projectWithZConversion(b.position,a.spatialReference,{signal:c});b=b.clone();b.fov=
a.camera.fov;b.position=c;return N(a,null,b,d)}async function ua(a,b,c,d,e,f,g){const h=a.renderSpatialReference;await K.projectPointToVectorAsync(b,O,h,0,{signal:g});await K.projectPointToVectorAsync(c,E,h,0,{signal:g});f.targetGeometry=new x(b);e.position=new x(c);n.subtract(F,O,E);k.directionToHeadingTilt(a,E,F,d.up,e);f.scale=k.distanceToScale(a,n.distance(E,O),f.targetGeometry.latitude);f.rotation=w.cyclicalDegrees.normalize(360-e.heading);f.camera=e;return f}async function G(a,b,c,d,e,f){if(null==
c)throw new J("createfromcenter","invalid point");f.targetGeometry=c.clone();const g=z.cameraOnContentAlongViewDirection(a);if(b.position)return ua(a,f.targetGeometry,b.position,g,d,f,e);if(b.zoomFactor){var h=g.distance/b.zoomFactor;const p=n.scale(m,g.viewForward,-h);g.eye=n.add(m,g.center,p);f.scale=k.distanceToScale(a,h,c.latitude)}k.internalToExternal(a,g,d);h=M(d,b)?k.OrientationMode.LOCKED:k.OrientationMode.ADJUST;b.zoomFactor||(b=L(a,b),null==b?({renderSpatialReference:b}=a,await K.projectPointToVectorAsync(c,
m,b,0,{signal:e}),ka.intersectsPoint(g.frustum,m)?f.scale=k.distanceToScale(a,n.distance(g.eye,m),c.latitude):f.scale=k.computeScale(a,g)):f.scale=b,f.camera=await k.fromCenterScale(a,f.targetGeometry,f.scale,d,h,e));return f}async function va(a,b,c,d,e){var f=z.cameraOnContentAlongViewDirection(a);n.copy(F,f.viewForward);k.directionToHeadingTilt(a,f.eye,F,f.up,P);f=a.spatialReference;const {position:g}=b;g?(e=await u.projectWithZConversion(g,f,{signal:e}),c.position=e):c.position=new x;c.heading=
null!=b.heading?b.heading:P.heading;c.tilt=null!=b.tilt?b.tilt:P.tilt;return N(a,null,c,d)}async function wa(a,b,c,d,e){const f=z.cameraOnContentAlongViewDirection(a),{spatialReference:g,renderSpatialReference:h}=a,p=new x({spatialReference:g});return V.projectVectorToPoint(f.center,h,p)?G(a,b,p,c,d,e):G(a,b,null,c,d,e)}async function xa(a,b,c,d,e,f){f.targetGeometry=c.clone();const g=z.cameraOnContentAlongViewDirection(a);k.internalToExternal(a,g,d);b=M(d,b)?k.OrientationMode.LOCKED:k.OrientationMode.ADJUST;
f.camera=await k.fromExtentAsync(a,c,d.heading,d.tilt,b,e);return f}async function ya(a,b,c,d,e,f,g,h){h.targetGeometry=c.clone();const p=z.cameraOnContentAlongViewDirection(a);var l=0;null!=c.z?l=c.z:a.basemapTerrain&&a.elevationProvider&&(l=X.getElevationAtPoint(a.elevationProvider,c));n.set(m,c.x,c.y,l);ia.computeTranslationToOriginAndRotation(a.spatialReference,m,da,a.renderSpatialReference);U.fromMat4(H,da);U.transpose(H,H);q.empty(B);c=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],
[3,4,5]];for(var t=0;t<c.length;t++){const A=c[t];let Q=d[A[2]];isFinite(Q)||(Q=l);n.set(m,d[A[0]],d[A[1]],Q);ja.projectVectorToVector(m,a.spatialReference,m,a.renderSpatialReference);q.expandWithVec3(B,n.transformMat3(m,m,H))}d=q.width(B);l=q.height(B);c=q.depth(B);t=1/Math.tan(p.fovY/2);e=Math.max(.5*Math.sqrt(d*d+c*c)*Math.max(t,1/Math.tan(p.fovX/2))+.5*l,.5*l*t+.5*Math.max(d,c))/e;k.internalToExternal(a,p,f);b=M(f,b)?k.OrientationMode.LOCKED:k.OrientationMode.ADJUST;h.scale=k.distanceToScale(a,
e,h.targetGeometry.latitude);h.camera=await k.fromCenterScale(a,h.targetGeometry,h.scale,f,b,g);return h}function v(a){null!=a?.camera&&(a.rotation=w.cyclicalDegrees.normalize(360-a.camera.heading));return a}const m=C.create(),da=ha.create(),H=fa.create(),B=q.create(),za=W.create(),F=C.create(),E=C.create(),O=C.create(),P={heading:0,tilt:0},r=new x,ra={point(a,b,c){c[0]=a.x;c[1]=a.y;null!=a.z&&(c[2]=a.z);b(c)},polygon(a,b,c){const d=a.hasZ;for(let e=0;e<a.rings.length;e++){const f=a.rings[e];for(let g=
0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],d&&(c[2]=f[g][2]),b(c)}},polyline(a,b,c){const d=a.hasZ;for(let e=0;e<a.paths.length;e++){const f=a.paths[e];for(let g=0;g<f.length;g++)c[0]=f[g][0],c[1]=f[g][1],d&&(c[2]=f[g][2]),b(c)}},multipoint(a,b,c){const d=a.points;a=a.hasZ;for(let e=0;e<d.length;e++)c[0]=d[e][0],c[1]=d[e][1],a&&(c[2]=d[e][2]),b(c)},extent(a,b,c){null!=a.zmin&&null!=a.zmax?(b(n.set(c,a.xmin,a.ymin,a.zmin)),b(n.set(c,a.xmax,a.ymin,a.zmin)),b(n.set(c,a.xmin,a.ymax,a.zmin)),b(n.set(c,
a.xmax,a.ymax,a.zmin)),b(n.set(c,a.xmin,a.ymin,a.zmax)),b(n.set(c,a.xmax,a.ymin,a.zmax)),b(n.set(c,a.xmin,a.ymax,a.zmax)),b(n.set(c,a.xmax,a.ymax,a.zmax))):(b(n.set(c,a.xmin,a.ymin,c[2])),b(n.set(c,a.xmax,a.ymin,c[2])),b(n.set(c,a.xmin,a.ymax,c[2])),b(n.set(c,a.xmax,a.ymax,c[2])))}};y.create=async function(a,b,c){if(b&&a.spatialReference){var d={target:void 0};"declaredClass"in b||Array.isArray(b)?d.target=b:(Object.assign(d,b),b.center&&!d.target&&(d.target=b.center));b=d}else b=null;if(!b)throw new J("viewpointutils-create:no-target",
"Missing target for creating viewpoint");d=new R({fov:a.camera.fov});const e=new I({camera:d});if(b.target instanceof I)return a=await ta(a,b.target,b,c,e),v(a);if(b.target instanceof R)return v(await ca(a,b.target,c,e));var f=null!=b.scale||null!=b.zoom;if(b.target instanceof ma){var g=b.target.xmin===b.target.xmax||b.target.ymin===b.target.ymax;return f||g?v(await G(a,b,b.target.center,d,c,e)):v(await xa(a,b,b.target,d,c,e))}g={boundingBox:q.empty(),hasZ:!1,screenSpaceObjects:[]};var h=f?(h=L(a,
b))?la.getResolutionInMetersForScale(h):void 0:void 0;await ba(a,b.target,h,g,c);if(isFinite(g.boundingBox[0])){q.center(g.boundingBox,m);r.x=m[0];r.y=m[1];r.z=m[2];r.spatialReference=a.spatialReference;isFinite(r.z)&&g.hasZ?h=q.isPoint(g.boundingBox):(r.z=void 0,h=W.isPoint(q.toRect(g.boundingBox,za)));if(f||h)return v(await G(a,b,r,d,c,e));f=g.screenSpaceObjects;if(f.length){h=Number.NEGATIVE_INFINITY;for(let p=0;p<f.length;p++){const l=f[p].screenSpaceBoundingRect;h=Math.max(h,Math.abs(l[0]),Math.abs(l[1]),
Math.abs(l[2]),Math.abs(l[3]))}f=.66-h/Math.min(a.width,a.height)*2}else f=.66;return v(await ya(a,b,r,g.boundingBox,f,d,c,e))}return b.position?v(await va(a,b,d,e,c)):v(await wa(a,b,d,c,e))};y.fromCamera=function(a,b,c=null){null==c&&(c=new I);return N(a,null,b.clone(),c)};y.toCameraAsync=Z;y.toCameraSync=function(a,b,c){var d=b.camera;if(null!=d){a:{a=k.getViewSR(a);var e=d.position;try{var f=u.tryProjectWithZConversion(e,a)}catch(p){a=null;break a}f?(a=d.clone(),a.position=f.clone()):a=null}return a}({targetGeometry:f}=
b);if(null==f)return null;const {camera:g,mode:h}=aa(a,b.rotation,c);if("point"===f.type){a:{d=a.spatialReference;try{e=u.tryProjectWithZConversion(f.clone(),d)}catch(p){a=null;break a}e?(f=null!=b.scale?k.scaleToDistance(a,b.scale,e.latitude):a.state.camera.distance,a=k.fromCenterDistanceSync(a,e,f,g,h)):a=null}return a}f=f.extent;return null==f?null:k.fromExtentSync(a,f,g.heading,g.tilt,h)};Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});