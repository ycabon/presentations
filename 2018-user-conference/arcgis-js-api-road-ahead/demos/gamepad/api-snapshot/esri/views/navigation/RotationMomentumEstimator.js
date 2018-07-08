// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/extendsHelper","./MomentumEstimator"],function(f,g,h,k){Object.defineProperty(g,"__esModule",{value:!0});f=function(d){function b(a,e,c,b){void 0===a&&(a=3);void 0===e&&(e=.01);void 0===c&&(c=.95);void 0===b&&(b=12);return d.call(this,a,e,c,b)||this}h(b,d);b.prototype.add=function(a,b){if(this.value.hasLastValue){var c=this.value.lastValue;for(a-=c;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;a=c+a}d.prototype.add.call(this,a,b)};return b}(k.MomentumEstimator);
g.RotationMomentumEstimator=f});