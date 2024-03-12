// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../input/InputHandler","../../../input/handlers/support"],function(c,d,e){class f extends d.InputHandler{constructor(a,b){super(!0);this._view=a;this.registerIncoming("double-click",b,g=>this._handleDoubleClick(g,b))}_handleDoubleClick(a,b){e.eventMatchesPointerAction(a.data,"primary")&&(a.stopPropagation(),b?this._view.mapViewNavigation.zoomOut([a.data.x,a.data.y]):this._view.mapViewNavigation.zoomIn([a.data.x,a.data.y]))}}c.DoubleClickZoom=f;Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});