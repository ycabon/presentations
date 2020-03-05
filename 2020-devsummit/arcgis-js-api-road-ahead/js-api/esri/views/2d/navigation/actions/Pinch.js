// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../geometry ../../../../Viewpoint ../../../../core/Accessor ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../viewpointUtils ../../../navigation/RotationMomentumEstimator ../../../navigation/ZoomMomentumEstimator".split(" "),function(z,A,t,m,u,v,w,e,n,p,q,x,y){return function(r){function c(b){var a=
r.call(this,b)||this;a._animationTime=0;a._momentumFinished=!1;a._rotationMomentumEstimator=new x.RotationMomentumEstimator(.6,.15,.95);a._rotationDirection=1;a._zoomDirection=1;a._zoomMomentumEstimator=new y.ZoomMomentumEstimator;a._zoomOnly=null;a.zoomMomentum=null;a.rotateMomentum=null;a.viewpoint=new v({targetGeometry:new u.Point,scale:0,rotation:0});a.watch("_momentumFinished",function(b){b&&a.navigation.stop()});return a}t(c,r);c.prototype.begin=function(b,a){this.navigation.begin();this._rotationMomentumEstimator.reset();
this._zoomMomentumEstimator.reset();this._zoomOnly=null;this._previousAngle=this._startAngle=a.angle;this._previousRadius=this._startRadius=a.radius;this._previousCenter=a.center;this._updateTimestamp=null;b.constraints.rotationEnabled&&this.addToRotateEstimator(0,a.timestamp);this.addToZoomEstimator(a,1)};c.prototype.update=function(b,a){null===this._updateTimestamp&&(this._updateTimestamp=a.timestamp);var c=a.angle,f=a.radius,d=a.center,e=Math.abs(180*(c-this._startAngle)/Math.PI),k=Math.abs(f-
this._startRadius),g=this._startRadius/f;if(this._previousRadius){var l=f/this._previousRadius,h=180*(c-this._previousAngle)/Math.PI;this._rotationDirection=0<=h?1:-1;this._zoomDirection=1<=l?1:-1;b.constraints.rotationEnabled?(null===this._zoomOnly&&200<a.timestamp-this._updateTimestamp&&(this._zoomOnly=0<k-e),null===this._zoomOnly||this._zoomOnly?h=0:this.addToRotateEstimator(c-this._startAngle,a.timestamp)):h=0;this.addToZoomEstimator(a,g);this.navigation.setViewpoint([d.x,d.y],1/l,h,[this._previousCenter.x-
d.x,d.y-this._previousCenter.y])}this._previousAngle=c;this._previousRadius=f;this._previousCenter=d};c.prototype.end=function(b){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum();this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum();this._animationTime=0;if(this.rotateMomentum||this.zoomMomentum)this.onAnimationUpdate(b);this.navigation.end()};c.prototype.addToRotateEstimator=function(b,a){this._rotationMomentumEstimator.add(b,.001*a)};c.prototype.addToZoomEstimator=
function(b,a){this._zoomMomentumEstimator.add(a,.001*b.timestamp)};c.prototype.canZoomIn=function(b){var a=b.scale;b=b.constraints.effectiveMaxScale;return 0===b||a>b};c.prototype.canZoomOut=function(b){var a=b.scale;b=b.constraints.effectiveMinScale;return 0===b||a<b};c.prototype.onAnimationUpdate=function(b){var a=this;this.navigation.animationManager.animateContinous(b.viewpoint,function(c,f){var d=!a.canZoomIn(b)&&1<a._zoomDirection||!a.canZoomOut(b)&&1>a._zoomDirection,e=!a.rotateMomentum||a.rotateMomentum.isFinished(a._animationTime),
d=d||!a.zoomMomentum||a.zoomMomentum.isFinished(a._animationTime);f*=.001;a._momentumFinished=e&&d;if(!a._momentumFinished){var e=a.rotateMomentum?Math.abs(a.rotateMomentum.valueDelta(a._animationTime,f))*a._rotationDirection*180/Math.PI:0,d=a.zoomMomentum?Math.abs(a.zoomMomentum.valueDelta(a._animationTime,f)):1,k=p.vec2f64.create(),g=p.vec2f64.create();if(a._previousCenter){n.vec2.set(k,a._previousCenter.x,a._previousCenter.y);q.getPaddingScreenTranslation(g,b.size,b.padding);n.vec2.add(k,k,g);
var g=b.constraints,l=b.scale,h=l*d;1>d&&!g.canZoomInTo(h)?(d=l/g.effectiveMaxScale,a.zoomMomentum=null,a.rotateMomentum=null):1<d&&!g.canZoomOutTo(h)&&(d=l/g.effectiveMinScale,a.zoomMomentum=null,a.rotateMomentum=null);q.scaleAndRotateBy(c,b.viewpoint,d,e,k,b.size)}}a._animationTime+=f})};c.prototype.stopMomentumNavigation=function(){if(this.rotateMomentum||this.zoomMomentum)this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),
this.zoomMomentum=null),this.navigation.stop()};m([e.property()],c.prototype,"_momentumFinished",void 0);m([e.property()],c.prototype,"viewpoint",void 0);m([e.property()],c.prototype,"navigation",void 0);return c=m([e.subclass("esri.views.2d.navigation.actions.Pinch")],c)}(e.declared(w))});