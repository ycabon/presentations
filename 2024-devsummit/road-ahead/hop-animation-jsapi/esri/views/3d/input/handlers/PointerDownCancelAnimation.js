// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../input/InputHandler"],function(a,b){class c extends b.InputHandler{constructor(d,e){super(!0);this.view=d;this.registerIncoming("pointer-down",e,()=>this.view.state.stopActiveCameraController())}}a.PointerDownCancelAnimation=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});