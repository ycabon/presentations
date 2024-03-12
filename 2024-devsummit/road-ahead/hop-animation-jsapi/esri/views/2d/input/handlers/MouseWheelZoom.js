// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../input/InputHandler"],function(d,e){class f extends e.InputHandler{constructor(a,b){super(!0);this._view=a;this._canZoom=!0;this.registerIncoming("mouse-wheel",b,c=>this._handleMouseWheel(c))}_handleMouseWheel(a){if(this._view.navigation.mouseWheelZoomEnabled&&(a.preventDefault(),a.stopPropagation(),this._canZoom)){var b=this._view.mapViewNavigation,{x:c,y:g,deltaY:h}=a.data;if(a=b.zoom(1/.6**(1/60*h),[c,g]))this._canZoom=!1,a.catch(()=>{}).then(()=>{this._canZoom=!0;b.end()})}}}
d.MouseWheelZoom=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});