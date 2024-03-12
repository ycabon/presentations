// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../camera/intersectionUtils ../../camera/constraintUtils/surfaceCollision ./CameraController".split(" "),function(b,d,f,k,l,m,g,h,e,c){b.SurfaceCollisionCorrectionController=class extends c.CameraController{set desiredCamera(a){this._set("desiredCamera",a.clone())}constructor(a){super(a)}get canStop(){return!0}get constraintEnabled(){return this.view.state.constraints.collision.enabled}onControllerStart(){this.state=
c.State.Running;this.addHandles(this.view.basemapTerrain.on("elevation-change",a=>this._handleElevationChangeEvent(a)));this._applyCorrection()}onControllerEnd(){this.removeAllHandles()}stepController(){}_handleElevationChangeEvent(a){(null==a.spatialReference||h.eyeWithinExtent(this.view,this.desiredCamera,a.extent,a.spatialReference))&&this._applyCorrection()}_applyCorrection(){this.view.state.updateCamera(a=>{a.copyViewFrom(this.desiredCamera);e.applySurfaceCollisionConstraint(this.view,a,e.Mode.EYE_AND_CENTER)||
this.constraintEnabled||(this.state=c.State.Stopped)})}};d.__decorate([f.property({constructOnly:!0})],b.SurfaceCollisionCorrectionController.prototype,"desiredCamera",null);b.SurfaceCollisionCorrectionController=d.__decorate([g.subclass("esri.views.3d.state.controllers.SurfaceCollisionCorrectionController")],b.SurfaceCollisionCorrectionController);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});