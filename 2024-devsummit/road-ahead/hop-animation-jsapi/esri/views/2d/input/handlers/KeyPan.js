// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../input/InputHandler","../../../input/VisibilityChange"],function(f,g,h){class k extends g.InputHandler{constructor(b,c,e){super(!0);this.view=b;this.keys=c;this._isSticky=!1;this._pressedKeys=new Set;this._currentDirection=this._timeout=void 0;this._stickyKeyDuration=200;this._handleKey=a=>{var d=this._keyMap[a.data.key];a.modifiers.has("Meta")||a.modifiers.has("Ctrl")?this._stopMovement():null!=d&&(a.stopPropagation(),a.preventDefault(),a="key-down"===a.type,this._pressedKeys[a?
"add":"delete"](d),a?this._direction!==d&&(this._direction=d,this._isSticky=!1,this._setTimeout(()=>{this._isSticky&&this._handlePopKey()})):(d=0<this._pressedKeys.size,void 0===this._timeout||d?this._handlePopKey():this._isSticky=!0))};this._handlePopKey=()=>{this._direction=Array.from(this._pressedKeys).pop();null==this._direction&&this._stopMovement()};this._stopMovement=()=>{this._isSticky=!1;this._direction=void 0;this._pressedKeys.clear();this._setTimeout(void 0)};this._keyMap={[c.left]:"left",
[c.right]:"right",[c.up]:"up",[c.down]:"down"};this.registerIncoming("key-down",e,this._handleKey);this.registerIncoming("key-up",e,this._handleKey);this.registerIncoming("blur",e,this._stopMovement);this._visibilityHandle=h.onVisibilityChange(a=>a?null:this._stopMovement())}onUninstall(){this._stopMovement();this._visibilityHandle?.remove()}get _direction(){return this._currentDirection}set _direction(b){const c=null!=this._currentDirection;if(null!=b){if(c||this.view.mapViewNavigation.begin(),this._currentDirection!==
b)switch(b){case "left":this.view.mapViewNavigation.continousPanLeft();break;case "right":this.view.mapViewNavigation.continousPanRight();break;case "up":this.view.mapViewNavigation.continousPanUp();break;case "down":this.view.mapViewNavigation.continousPanDown()}}else c&&this.view.mapViewNavigation.stop();this._currentDirection=b}_setTimeout(b){clearTimeout(this._timeout);this._timeout=void 0===b?void 0:setTimeout(()=>{this._timeout=void 0;b()},this._stickyKeyDuration)}}f.KeyPan=k;Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});