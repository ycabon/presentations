// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/screenUtils ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ./MomentumController ../../utils/navigationUtils ../../../support/geometryUtils".split(" "),function(c,f,k,l,m,n,h,p,q,d,g){Object.defineProperty(f,"__esModule",{value:!0});c=function(c){function e(a,b,d,e,f){a=c.call(this,a,1)||this;a.momentum=
b;a.screenCenter=l.createScreenPointArray();a.sceneCenter=h.vec3f64.create();a.tmpSceneCenter=h.vec3f64.create();a.tmpZoomAxisAngle=g.axisAngle.create();a.sphere=g.sphere.create();m.vec2.copy(a.screenCenter,d);n.vec3.copy(a.sceneCenter,e);a.sphere.radius=f;return a}k(e,c);e.prototype.momentumStep=function(a,b){a=this.momentum.valueDelta(0,a);d.applyZoomOnSphere(this.sphere,b,a);this.constraintOptions.interactionType=1;p.applyAll(this.view,b,this.constraintOptions);d.sphereOrPlanePointFromScreenPoint(this.sphere,
b,this.screenCenter,this.tmpSceneCenter);g.axisAngle.fromPoints(this.sceneCenter,this.tmpSceneCenter,this.tmpZoomAxisAngle);d.applyRotation(b,this.sphere.center,this.tmpZoomAxisAngle);this.constraintOptions.interactionType=4};return e}(q.MomentumController);f.ZoomSphericalMomentumController=c});