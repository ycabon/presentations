// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(b,a,d,e){Object.defineProperty(a,"__esModule",{value:!0});b=function(b){function a(a,d){var c=b.call(this,!0)||this;c.view=a;c.registerIncoming("pointer-down",d,function(a){return c.view.state.stopActiveCameraController()});return c}d(a,b);return a}(e.InputHandler);a.PointerDownCancelAnimation=b});