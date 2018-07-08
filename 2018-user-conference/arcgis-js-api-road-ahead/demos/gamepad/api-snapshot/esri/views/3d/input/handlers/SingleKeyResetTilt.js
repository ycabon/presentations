// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","./SingleKey"],function(a,b,e,f){Object.defineProperty(b,"__esModule",{value:!0});a=function(a){function c(c,b,d){d=a.call(this,"esri.views.3d.input.handlers.SingleKeyResetTilt",b,d)||this;d.view=c;d.key=b;return d}e(c,a);c.prototype.activate=function(){this.view.goTo({tilt:0})};return c}(f.SingleKey);b.SingleKeyResetTilt=a});