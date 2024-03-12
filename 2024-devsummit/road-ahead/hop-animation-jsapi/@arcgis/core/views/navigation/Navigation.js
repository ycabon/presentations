/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import e from"../../core/Accessor.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import t from"./gamepad/GamepadSettings.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../input/gamepad/GamepadInputDevice.js";let p=class extends e{constructor(o){super(o),this.browserTouchPanEnabled=!0,this.gamepad=new t,this.momentumEnabled=!0,this.mouseWheelZoomEnabled=!0}};o([s({type:Boolean})],p.prototype,"browserTouchPanEnabled",void 0),o([s({type:t,nonNullable:!0})],p.prototype,"gamepad",void 0),o([s({type:Boolean})],p.prototype,"momentumEnabled",void 0),o([s({type:Boolean})],p.prototype,"mouseWheelZoomEnabled",void 0),p=o([r("esri.views.navigation.Navigation")],p);const a=p;export{a as default};
