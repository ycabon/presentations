// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(g,h,k,l){Object.defineProperty(h,"__esModule",{value:!0});g=function(g){function f(a,c,d){var e,b=g.call(this,!0)||this;b.view=a;b.keys=c;b._pressed=!1;b._keyToDirection=(e={},e[c.clockwiseOption1]="clockwise",e[c.clockwiseOption2]="clockwise",e[c.counterClockwiseOption1]="counterClockwise",e[c.counterClockwiseOption2]="counterClockwise",e[c.resetOption1]="reset",e[c.resetOption2]="reset",
e);b.registerIncoming("key-down",d,function(a){return b._handleKeyDown(a)});b.registerIncoming("key-up",d,function(a){return b._handleKeyUp(a)});b.registerIncoming("blur",d,function(){return b._handleBlur()});return b}k(f,g);f.prototype._handleKeyDown=function(a){a.data.repeat||this._handleKey(a,!0)};f.prototype._handleKeyUp=function(a){this._handleKey(a,!1)};f.prototype._handleBlur=function(){this._pressed&&(this._pressed=!1,this.view.mapViewNavigation.stop())};f.prototype._handleKey=function(a,
c){var d=a.modifiers;if(!(0<d.size&&!d.has("Shift")||!this.view.constraints.rotationEnabled)&&(d=this._keyToDirection[a.data.key],this._pressed=null!=d)){if(c)switch(this.view.mapViewNavigation.begin(),d){case "clockwise":this.view.mapViewNavigation.continousRotateClockwise();break;case "counterClockwise":this.view.mapViewNavigation.continousRotateCounterclockwise();break;case "reset":this.view.mapViewNavigation.resetRotation()}else this._pressed=!1,this.view.mapViewNavigation.stop();a.stopPropagation()}};
return f}(l.InputHandler);h.KeyRotate=g});