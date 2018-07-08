// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/Accessor ../../../../core/accessorSupport/decorators ../../viewpointUtils ../../libs/gl-matrix/vec2 ../../../navigation/RotationMomentumEstimator ../../../navigation/ZoomMomentumEstimator".split(" "),function(u,v,p,h,q,d,l,k,r,t){return function(m){function c(b){var a=m.call(this,b)||this;a._animationTime=0;a._momentumFinished=!1;a._rotateMomentumEstimator=new r.RotationMomentumEstimator(.6,
.15,.95);a._rotationDirection=1;a._zoomDirection=1;a._zoomFirst=null;a._zoomMomentumEstimator=new t.ZoomMomentumEstimator;a.zoomMomentum=null;a.rotateMomentum=null;a.viewpoint=l.create();a.watch("_momentumFinished",function(b){b&&a.navigation.stop()});return a}p(c,m);c.prototype.begin=function(b,a){this.navigation.begin();this._rotateMomentumEstimator.reset();this._zoomMomentumEstimator.reset();this._previousAngle=this._startAngle=a.angle;this._previousRadius=this._startRadius=a.radius;this._startTimestamp=
a.timestamp;b.constraints.rotationEnabled&&this.addToRotateEstimator(0,a.timestamp);this.addToZoomEstimator(a,1)};c.prototype.update=function(b,a){if(!(100>a.timestamp-this._startTimestamp)){var c=a.angle,e=a.radius,f=a.center,g=180*Math.abs(c-this._startAngle)/Math.PI,n=Math.abs(e-this._startRadius);if(!(1>=g&&1>=n)){var d=this._startRadius/e;this._previousRadius&&(e/=this._previousRadius,c=180*(c-this._previousAngle)/Math.PI,this._rotationDirection=0<=c?1:-1,this._zoomDirection=1<=e?1:-1,g=n-g,
null==this._zoomFirst&&(this._zoomFirst=0<g?!0:!1),this._zoomFirst?c=0:null!=this._zoomFirst&&b.constraints.rotationEnabled&&.5<Math.abs(c)&&this.addToRotateEstimator(a.angle-this._startAngle,a.timestamp),this.addToZoomEstimator(a,d),this._center=f,this.navigation.setViewpoint([f.x,f.y],1/e,c));this._previousAngle=a.angle;this._previousRadius=a.radius}}};c.prototype.end=function(b,a){this._zoomFirst=null;this.rotateMomentum=this._rotateMomentumEstimator.evaluateMomentum();this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum();
this._animationTime=0;if(this.rotateMomentum||this.zoomMomentum)this.onAnimationUpdate(b);this.navigation.end()};c.prototype.addToRotateEstimator=function(b,a){this._rotateMomentumEstimator.add(b,.001*a)};c.prototype.addToZoomEstimator=function(b,a){this._zoomMomentumEstimator.add(a,.001*b.timestamp)};c.prototype.canZoomIn=function(b){var a=b.scale;b=b.constraints.effectiveMaxScale;return 0===b||a>b};c.prototype.canZoomOut=function(b){var a=b.scale;b=b.constraints.effectiveMinScale;return 0===b||
a<b};c.prototype.onAnimationUpdate=function(b){var a=this;this.navigation.animationManager.animateContinous(b.viewpoint,function(c,e){var f=!a.canZoomIn(b)&&1<a._zoomDirection||!a.canZoomOut(b)&&1>a._zoomDirection,g=!a.rotateMomentum||a.rotateMomentum.isFinished(a._animationTime),f=f||!a.zoomMomentum||a.zoomMomentum.isFinished(a._animationTime);e*=.001;a._momentumFinished=g&&f;if(!a._momentumFinished){var g=a.rotateMomentum?Math.abs(a.rotateMomentum.valueDelta(a._animationTime,e))*a._rotationDirection*
180/Math.PI:0,f=a.zoomMomentum?Math.abs(a.zoomMomentum.valueDelta(a._animationTime,e)):1,d=k.create(),h=k.create();a._center&&(k.set(d,a._center.x,a._center.y),l.getPaddingScreenTranslation(h,b.size,b.padding),k.add(d,d,h),l.scaleAndRotateBy(c,b.viewpoint,f,g,d,b.size))}a._animationTime+=e})};c.prototype.stopMomentumNavigation=function(){if(this.rotateMomentum||this.zoomMomentum)this.rotateMomentum&&(this._rotateMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),
this.zoomMomentum=null),this.navigation.stop()};h([d.property()],c.prototype,"_momentumFinished",void 0);h([d.property()],c.prototype,"viewpoint",void 0);h([d.property()],c.prototype,"navigation",void 0);return c=h([d.subclass("esri.views.2d.navigation.actions.Pinch")],c)}(d.declared(q))});