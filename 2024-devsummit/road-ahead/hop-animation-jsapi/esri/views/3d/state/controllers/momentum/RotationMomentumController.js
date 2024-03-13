// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../geometry/support/axisAngle ../../../camera/constraintUtils/InteractionType ./MomentumController ../../utils/navigationUtils".split(" "),function(b,c,d,n,p,q,f,e,g,h,k,l){b.RotationMomentumController=
class extends k.MomentumController{set center(a){this._set("center",e.clone(a))}set axis(a){this._set("axis",e.clone(a))}constructor(a){super(a);this.interactionType=h.InteractionType.TUMBLE}momentumStep(a,m){a=this.momentum.value(a);l.applyRotation(m,this.center,g.wrapAxisAngle(this.axis,a))}};c.__decorate([d.property({constructOnly:!0})],b.RotationMomentumController.prototype,"momentum",void 0);c.__decorate([d.property({constructOnly:!0})],b.RotationMomentumController.prototype,"center",null);c.__decorate([d.property({constructOnly:!0})],
b.RotationMomentumController.prototype,"axis",null);b.RotationMomentumController=c.__decorate([f.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],b.RotationMomentumController);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});