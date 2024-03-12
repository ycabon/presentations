// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../input/InputHandler"],function(b,c){class d extends c.InputHandler{constructor(a,e){super(!0);this.key=a;this.registerIncoming("key-down",e,f=>this._handleKeyDown(f))}_handleKeyDown(a){a.data.key===this.key&&(this.activate(),a.stopPropagation())}}b.SingleKey=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});