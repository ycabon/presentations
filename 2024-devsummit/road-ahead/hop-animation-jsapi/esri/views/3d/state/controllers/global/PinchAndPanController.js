// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/Cyclical ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../core/Logger ../../../../../core/has ../../../../../core/RandomLCG ../../../../../core/Error ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/libs/gl-matrix-2/math/vec2 ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../geometry/ellipsoidUtils ../../../../../geometry/support/axisAngle ../../../../../geometry/support/plane ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/ConstraintOptions ../../../camera/constraintUtils/ConstraintTypes ../../../camera/constraintUtils/InteractionType ../../../input/util ../InteractiveController ../momentum/PanPlanarMomentumController ../momentum/PanSphericalMomentumController ../momentum/RotationMomentumController ../momentum/ZoomPlanarMomentumController ../momentum/ZoomSphericalMomentumController ../../utils/navigationUtils ../../../webgl-engine/lib/Camera ../../../../navigation/PanPlanarMomentumEstimator ../../../../navigation/PanSphericalMomentumEstimator ../../../../navigation/RotationMomentumEstimator ../../../../navigation/ZoomMomentumEstimator".split(" "),
function(q,x,y,z,g,Q,R,S,T,A,r,e,h,B,u,t,n,f,C,D,l,v,E,F,G,H,I,J,c,K,L,M,N,O){q.PinchAndPanController=class extends E.InteractiveController{constructor(){super(...arguments);this._smoothRotation=new v.ExponentialFalloff(.05);this._rotationAxis=h.create();this._beginHeading=this._beginAngle=0;this._panningPlane=t.create();this._beginRadius=0;this._smoothScaling=new v.ExponentialFalloff(.05);this._zoomCenterScreen=g.createScreenPointArray();this._zoomMomentumEstimator=new O.ZoomMomentumEstimator;this._rotationMomentumEstimator=
new N.RotationMomentumEstimator;this._panSphericalMomentumEstimator=new M.PanSphericalMomentumEstimator;this._panPlanarMomentumEstimator=new L.PanPlanarMomentumEstimator;this._adjustedSphere=n.create();this._tmp3d=h.create();this._tmpScreenPointArray=g.createScreenPointArray();this._beginScreenPoint=g.createScreenPointArray();this._beginScenePoint=h.create();this._screenPickPoint=g.createScreenPointArray();this._scenePickPoint=h.create();this._mode=c.NavigationMode.Horizontal;this._sphere=n.create();
this._pointerCount=0;this._tmpInteractionDirection=h.create();this._beginCamera=new K.Camera;this._constraintOptions=new C.ConstraintOptions(D.ConstraintTypes.ALL,l.InteractionType.NONE,0,this._beginCamera)}get _intersectionHelper(){return this.view.sceneIntersectionHelper}begin(a){if(this.active){this._zoomMomentumEstimator.enabled=this._rotationMomentumEstimator.enabled=this._panPlanarMomentumEstimator.enabled=this._panSphericalMomentumEstimator.enabled=this.view.navigation.momentumEnabled;this._beginHeading=
-y.cyclicalPI.normalize(z.deg2rad(this.view.camera.heading));this._beginRadius=a.radius;this._pointerCount=a.pointers.size;this._beginAngle=a.angle;this._smoothRotation.reset();g.screenPointObjectToArray(a.center,this._screenPickPoint);r.copy(this._beginScreenPoint,this._screenPickPoint);var b=B.getReferenceEllipsoid(this.view.spatialReference),d=c.pickPointAndInitSphere(this._intersectionHelper,this.startCamera,this._screenPickPoint,b,c.SpherePickPointFallback.Silhouette,0===this.view.map.ground.opacity?
c.contentIntersectorOptions:{});null!=d.scenePickPoint&&(this._scenePickPoint=d.scenePickPoint,this._sphere=d.sphere,e.copy(this._beginScenePoint,this._scenePickPoint),this._mode=c.decideNavigationMode(this.startCamera,this._screenPickPoint,b),this._mode===c.NavigationMode.Vertical&&this._preparePlanarPanMode(a,d.hasGeometryIntersection),this._beginCamera.copyFrom(this.startCamera))}}update(a){if(this.active){this.currentCamera.copyFrom(this.startCamera);var b=1<a.pointers.size;this._mode===c.NavigationMode.Horizontal?
(b&&this._zoomSpherical(a),this._panningSpherical(a),b&&this._rotateSpherical(a)):(b&&this._zoomPlanar(a),this._panningPlanar(a),b&&this._rotatePlanar(a));this.commitCamera()}}end(a){a.pointers.size===this._pointerCount&&this.update(a);this.finishController();if(a=this._zoomMomentumEstimator.evaluateMomentum())return this._mode===c.NavigationMode.Horizontal?new J.ZoomSphericalMomentumController({view:this.view,momentum:a,screenCenter:this._zoomCenterScreen,sceneCenter:this._beginScenePoint,radius:this._sphere[3]}):
new I.ZoomPlanarMomentumController({view:this.view,momentum:a,zoomCenter:this._beginScenePoint});if(a=this._rotationMomentumEstimator.evaluateMomentum())return new H.RotationMomentumController({view:this.view,momentum:a,center:n.getCenter(this._sphere),axis:this._rotationAxis});if(this._mode===c.NavigationMode.Horizontal){if(a=this._panSphericalMomentumEstimator.evaluateMomentum())return new G.PanSphericalMomentumController({view:this.view,momentum:a})}else if(a=this._panPlanarMomentumEstimator.evaluateMomentum())return new F.PanPlanarMomentumController({view:this.view,
momentum:a});return null}_preparePlanarPanMode(a,b){var d=e.negate(this._tmp3d,this.startCamera.viewForward);t.fromPositionAndNormal(this._scenePickPoint,d,this._panningPlane);var k=g.createScreenPointArray(this._screenPickPoint[0],0);d=h.create();var p=e.length(this.startCamera.eye);this._adjustedSphere[3]=p<this._sphere[3]?p-100:this._sphere[3];c.sphereOrPlanePointFromScreenPoint(this._adjustedSphere,this.startCamera,k,d);k=g.createRenderScreenPointArray3();this.startCamera.projectToRenderScreen(d,
k);d=h.create();k=h.create();p=h.create();e.subtract(d,this._scenePickPoint,this.currentCamera.eye);const P=e.length(d);e.normalize(d,d);var m=c.panDistanceModifier*Math.max(Math.abs(this.view.camera.position.z),c.minHeightLimit);const w=this.view._stage.renderView.getMinimalDepthForArea(null,this._screenPickPoint[0],this._screenPickPoint[1],this.view.state.camera,c.screenPixelArea);m=null!=w?w:m;m=b?Math.min(m,P):m;e.copy(p,e.add(k,this.currentCamera.eye,e.scale(k,d,m)));this._panningPlane[3]=-e.dot(t.getNormal(this._panningPlane),
p);this.startCamera.center=e.add(k,this.startCamera.eye,e.scale(k,this.startCamera.viewForward,m));a=g.screenPointObjectToArray(a.center,this._tmpScreenPointArray);c.intersectPlaneFromScreenPointAtEye(this._panningPlane,this.startCamera,a,this._beginScenePoint)}_zoomSpherical(a){const b=this._beginRadius/a.radius;this._smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this._smoothScaling.update(b);c.applyZoomOnSphere(this._sphere,this.currentCamera,this._smoothScaling.value);g.screenPointObjectToArray(a.center,
this._zoomCenterScreen);this._zoomMomentumEstimator.add(this._smoothScaling.value,.001*a.timestamp);this._constraintOptions.interactionType=l.InteractionType.ZOOM;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius-this._beginRadius);f.applyAll(this.view,this.currentCamera,this._constraintOptions)}_panningSpherical(a){const b=g.screenPointObjectToArray(a.center,this._tmpScreenPointArray);c.sphereOrPlanePointFromScreenPoint(this._sphere,this.currentCamera,b,this._tmp3d);
c.preserveHeadingThreshold(this._beginScenePoint,e.dot(this.currentCamera.up,this._beginScenePoint),this._sphere[3],this._beginHeading,this.view.camera.tilt,this.startCamera)?(c.applyPanSphericalPreserveHeading(this._sphere,this.currentCamera,this._beginScenePoint,this._tmp3d,this._beginHeading,this.view.camera.tilt,!1),this._panSphericalMomentumEstimator.addMomentumPreserveHeading(b,this._tmp3d,.001*a.timestamp,this.startCamera,this._sphere,this._beginHeading,this.view.camera.tilt)):(c.applyPanSphericalDirectRotation(this._sphere,
this.currentCamera,this._beginScenePoint,this._tmp3d,this.view.camera.tilt,!1),this._panSphericalMomentumEstimator.addMomentumDirectRotation(b,this._tmp3d,.001*a.timestamp,this.startCamera,this._sphere[3],this.view.camera.tilt));this._constraintOptions.interactionType=l.InteractionType.PAN;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(r.distance(this._screenPickPoint,b));f.applyAll(this.view,this.currentCamera,this._constraintOptions)}_rotateSpherical(a){e.normalize(this._rotationAxis,
this._scenePickPoint);this.currentCamera.aboveGround||e.negate(this._rotationAxis,this._rotationAxis);var b=this._smoothRotation.value,d=c.normalizeRotationDelta(a.angle-b);b+=d;this._smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this._smoothRotation.update(b);d=this._smoothRotation.value-this._beginAngle;this._rotationMomentumEstimator.add(d,.001*a.timestamp);c.applyRotation(this.currentCamera,n.getCenter(this._sphere),u.wrapAxisAngle(this._rotationAxis,d));this._constraintOptions.interactionType=
l.InteractionType.TUMBLE;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius*b);f.applyAll(this.view,this.currentCamera,this._constraintOptions)}_panningPlanar(a){const b=g.screenPointObjectToArray(a.center,this._tmpScreenPointArray);c.intersectPlaneFromScreenPointAtEye(this._panningPlane,this.currentCamera,b,this._tmp3d)&&(c.applyPanPlanar(this.currentCamera,this._beginScenePoint,this._tmp3d),this._panPlanarMomentumEstimator.add(b,this._tmp3d,.001*a.timestamp),this._constraintOptions.interactionType=
l.InteractionType.PAN,this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(r.distance(this._beginScreenPoint,b)),this._constraintOptions.interactionDirection=this.view.renderCoordsHelper.worldUpAtPosition(this.currentCamera.eye,this._tmpInteractionDirection),f.applyAll(this.view,this.currentCamera,this._constraintOptions),this._constraintOptions.interactionDirection=null)}_zoomPlanar(a){const b=this._beginRadius/a.radius;this._smoothScaling.gain=.001875*Math.min(Math.max(a.radius,
40),120);this._smoothScaling.update(b);this._zoomMomentumEstimator.add(this._smoothScaling.value,.001*a.timestamp);c.applyZoomToPoint(this.currentCamera,this._beginScenePoint,this._smoothScaling.value,this.view.state.constraints.minimumPoiDistance);this._constraintOptions.interactionType=l.InteractionType.ZOOM;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius-this._beginRadius);f.applyAll(this.view,this.currentCamera,this._constraintOptions)}_rotatePlanar(a){e.copy(this._rotationAxis,
this._beginScenePoint);this.currentCamera.aboveGround||e.negate(this._rotationAxis,this._rotationAxis);var b=this._smoothRotation.value;let d=a.angle-b;d=c.normalizeRotationDelta(d);this._smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this._smoothRotation.update(b+d);b=this._smoothRotation.value-this._beginAngle;this._rotationMomentumEstimator.add(b,.001*a.timestamp);c.applyRotation(this.currentCamera,n.getCenter(this._sphere),u.wrapAxisAngle(this._rotationAxis,b));this._constraintOptions.interactionType=
l.InteractionType.TUMBLE;this._constraintOptions.interactionFactor=f.pixelDistanceToInteractionFactor(a.radius*b);f.applyAll(this.view,this.currentCamera,this._constraintOptions)}};q.PinchAndPanController=x.__decorate([A.subclass("esri.views.3d.state.controllers.global.PinchAndPanController")],q.PinchAndPanController);Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});