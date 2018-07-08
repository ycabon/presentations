// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","./MomentumController"],function(a,e,f,c,g){Object.defineProperty(e,"__esModule",{value:!0});a=function(a){function d(b,h){b=a.call(this,b,4)||this;b.momentum=h;b.tmpPan=c.vec3d.create();return b}f(d,a);d.prototype.momentumStep=function(b,a){b=this.momentum.value(b);c.vec3d.scale(this.momentum.direction,b,this.tmpPan);c.vec3d.subtract(a.eye,this.tmpPan);c.vec3d.subtract(a.center,this.tmpPan);a.markViewDirty();
this.constraintOptions.interactionDirection=this.tmpPan};return d}(g.MomentumController);e.PanPlanarMomentumController=a});