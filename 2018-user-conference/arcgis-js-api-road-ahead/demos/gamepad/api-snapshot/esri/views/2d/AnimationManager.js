// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("../../core/Accessor ../../core/scheduling ../../core/now ../ViewAnimation ./unitBezier ./viewpointUtils".split(" "),function(m,n,d,g,f,h){var l=function(a,b,c,e){var k=a.targetGeometry,d=b.targetGeometry;e?"string"===typeof e&&(e=f.parse(e)||f.ease):e=f.ease;this.easing=e;this.duration=c;this.sCenterX=k.x;this.sCenterY=k.y;this.sScale=a.scale;this.sRotation=a.rotation;this.tCenterX=d.x;this.tCenterY=d.y;this.tScale=b.scale;this.tRotation=b.rotation;this.dCenterX=this.tCenterX-this.sCenterX;
this.dCenterY=this.tCenterY-this.sCenterY;this.dScale=this.tScale-this.sScale;this.dRotation=this.tRotation-this.sRotation;180<this.dRotation?this.dRotation-=360:-180>this.dRotation&&(this.dRotation+=360)};l.prototype.applyRatio=function(a,b){var c=this.easing(b),e,d;1<=b?(b=this.tCenterX,e=this.tCenterY,d=this.tRotation,c=this.tScale):(b=this.sCenterX+c*this.dCenterX,e=this.sCenterY+c*this.dCenterY,d=this.sRotation+c*this.dRotation,c=this.sScale+c*this.dScale);a.targetGeometry.x=b;a.targetGeometry.y=
e;a.scale=c;a.rotation=d};return m.createSubclass({constructor:function(){this._updateTask=n.addFrameTask({postRender:this._postRender.bind(this)});this._updateTask.pause()},getDefaults:function(){return{viewpoint:h.create()}},properties:{animation:null,duration:{value:200},transition:{value:null},easing:{value:f.ease},viewpoint:null},animate:function(a,b,c){this.stop();h.copy(this.viewpoint,b);this.transition=new l(this.viewpoint,a.target,c&&c.duration||this.duration,c&&c.easing||this.easing);a.always(function(){this.animation===
a&&this._updateTask&&("finished"===a.state&&(this.transition.applyRatio(this.viewpoint,1),this.animation._dfd.progress(this.viewpoint)),this._updateTask.pause(),this.updateFunction=this.animation=null)}.bind(this));this._startTime=d();this._updateTask.resume();return this.animation=a},animateContinous:function(a,b){this.stop();this.updateFunction=b;this.viewpoint=a;var c=new g({target:a.clone()});c.always(function(){this.animation===c&&this._updateTask&&(this._updateTask.pause(),this.updateFunction=
this.animation=null)}.bind(this));this._startTime=d();this._updateTask.resume();return this.animation=c},stop:function(){this.animation&&(this.animation.stop(),this.updateFunction=this.animation=null)},_postRender:function(a){var b=this.animation;b&&b.state!==g.STOPPED?(this.updateFunction?this.updateFunction(this.viewpoint,a.deltaTime):(a=(d()-this._startTime)/this.transition.duration,b=1<=a,this.transition.applyRatio(this.viewpoint,a),b&&this.animation.finish()),this.animation._dfd.progress(this.viewpoint)):
this._updateTask.pause()}})});