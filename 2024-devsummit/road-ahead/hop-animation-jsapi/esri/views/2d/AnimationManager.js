// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../Viewpoint ../../core/Accessor ../../core/maybe ../../core/scheduling ../../core/time ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../ViewAnimation ./unitBezier ./viewpointUtils ./pointToPoint/Camera ../animation/pointToPoint/Animation ../../geometry/Point".split(" "),function(e,d,p,q,r,t,h,g,z,A,B,u,k,l,f,m,v,w){class x{constructor(a){this._view=
a;this._animation=new v.Animation(()=>new m.Camera(this._view));this._current=new m.Camera(this._view)}get _source(){return this._animation.definition.source}get _target(){return this._animation.definition.target}get duration(){return this._animation.time}update(a,c,b={}){f.copy(this._current.viewpoint,a);f.copy(this._source.viewpoint,a);f.copy(this._target.viewpoint,c);this._animation.update(this._source,this._target,b)}applyRatio(a,c){this._animation.cameraAt(c,this._current);f.copy(a,this._current.viewpoint)}}
d=class extends q{constructor(a){super(a);this.updateFunction=this._animation=null;this.duration=200;this.easing=l.easingFunctions.ease;this.viewpoint=new p({targetGeometry:new w,scale:0,rotation:0});this._updateTask=t.addFrameTask({postRender:this._postRender.bind(this)});this._updateTask.pause();this._transition=new x(a.view)}destroy(){this._updateTask=r.removeMaybe(this._updateTask)}get animation(){return this._animation}set animation(a){this._animation=a;this.view.animation=a}animate(a,c,b){this.stop();
f.copy(this.viewpoint,c);const n=("string"===typeof b?.easing?l.parse(b.easing):b?.easing)||this.easing;this._transition.update(this.viewpoint,a.target,{apex:b?.enableHop?{maximumDistance:this.view.constraints.effectiveMinScale,desiredSlope:5E-8}:void 0,minDuration:h.Milliseconds(0),maxDuration:b?.enableHop?b?.duration??b?.maxDuration:h.Milliseconds(Infinity),speedFactor:b?.enableHop?b?.speedFactor:1,duration:b?.enableHop?b?.duration:b?.duration??h.Milliseconds(this.duration),easing:"function"===
typeof n?y=>n(y):void 0});c=()=>{this.animation===a&&this._updateTask&&("finished"===a.state&&(this._transition.applyRatio(this.viewpoint,1),this.view.state&&(this.view.state.viewpoint=this.viewpoint.clone())),this.updateFunction=this.animation=null)};a.when(c,c);this._startTime=performance.now();this._updateTask.resume();return this.animation=a}animateContinous(a,c){this.stop();this.updateFunction=c;this.viewpoint=a;const b=new k({target:a.clone()});a=()=>{this.animation===b&&this._updateTask&&(this.updateFunction=
this.animation=null)};b.when(a,a);this._startTime=performance.now();this._updateTask.resume();return this.animation=b}stop(){this.animation&&(this.animation.stop(),this.updateFunction=this.animation=null)}_postRender(a){var c=this.animation;c&&c.state!==k.State.STOPPED?(this.updateFunction?this.updateFunction(this.viewpoint,a.deltaTime):(a=(performance.now()-this._startTime)/this._transition.duration,c=1<=a,this._transition.applyRatio(this.viewpoint,a),c&&this.animation?.finish()),this.view.state&&
(this.view.state.viewpoint=this.viewpoint.clone())):this._updateTask.pause()}};e.__decorate([g.property()],d.prototype,"duration",void 0);e.__decorate([g.property()],d.prototype,"easing",void 0);e.__decorate([g.property()],d.prototype,"view",void 0);e.__decorate([g.property()],d.prototype,"viewpoint",void 0);return d=e.__decorate([u.subclass("esri.views.2d.AnimationManager")],d)});