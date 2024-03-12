/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{w as t}from"../chunks/writer.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/ensureType.js";let i=class extends e{constructor(r){super(r),this.enabled=!0,this.type=null,this.ignoreDrivers=!1}writeEnabled(r,e,o){r||(e[o]=r)}};r([o({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],i.prototype,"enabled",void 0),r([t("enabled")],i.prototype,"writeEnabled",null),r([o({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],i.prototype,"type",void 0),i=r([s("esri.symbols.Symbol3DLayer")],i);const p=i;export{p as default};
