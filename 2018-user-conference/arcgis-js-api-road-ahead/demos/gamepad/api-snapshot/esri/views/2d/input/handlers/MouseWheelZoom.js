// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(a,e,f,g){Object.defineProperty(e,"__esModule",{value:!0});a=function(a){function c(h,c){var b=a.call(this,!0)||this;b.view=h;b._canZoom=!0;b.registerIncoming("mouse-wheel",c,function(d){return b._handleMouseWheel(d)});return b}f(c,a);c.prototype._handleMouseWheel=function(a){var c=this;if(this._canZoom){var b=this.view.navigation,d=a.data;if(d=b.zoom(1/Math.pow(.6,1/60*d.deltaY),[d.x,d.y]))this._canZoom=
!1,d.always(function(){c._canZoom=!0;b.end()});a.stopPropagation()}};return c}(g.InputHandler);e.MouseWheelZoom=a});