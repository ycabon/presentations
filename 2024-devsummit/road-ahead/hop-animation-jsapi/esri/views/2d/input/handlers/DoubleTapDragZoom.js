// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/has","../../../input/InputHandler"],function(f,m,g){class h extends g.InputHandler{constructor(b,a,c){super(!0);this.view=b;this.pointerType=a;this.registerIncoming("double-tap-drag",c,e=>this._handleDoubleTapDrag(e))}_handleDoubleTapDrag(b){var {data:a}=b,{pointerType:c}=a;if(c===this.pointerType){b.stopPropagation();var {action:e,delta:d}=a;({view:a}=this);({mapViewNavigation:b}=a);switch(e){case "begin":({scale:a}=a);this._currentScale=this._startScale=a;this._previousDelta=
d;b.begin();break;case "update":if(this._previousDelta.y===d.y)break;this._previousDelta=d;a=this._startScale*1.015**d.y;b.setViewpointImmediate(a/this._currentScale);this._currentScale=a;break;case "end":({constraints:c}=a);const {effectiveLODs:k,snapToZoom:l}=c;l&&k?(a=c.snapScale(this._currentScale),a=(0<d.y?Math.max(a,c.snapToPreviousScale(this._startScale)):Math.min(a,c.snapToNextScale(this._startScale)))/this._currentScale,b.zoom(a)):b.end()}}}}f.DoubleTapDragZoom=h;Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});