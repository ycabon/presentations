/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import{b as s}from"./ensureType.js";import"../core/lang.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"./Logger.js";import"../config.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";var i;let p=i=class extends o{static from(r){return s(i,r)}constructor(r){super(r),this.globalIds=[],this.creators=[],this.tags=[],this.names=[]}};r([t({type:[String],json:{write:!0}})],p.prototype,"globalIds",void 0),r([t({type:[String],json:{write:!0}})],p.prototype,"creators",void 0),r([t({type:[String],json:{write:!0}})],p.prototype,"tags",void 0),r([t({type:[String],json:{write:!0}})],p.prototype,"names",void 0),p=i=r([e("esri.rest.networks.support.QueryNamedTraceConfigurationsParameters")],p);const a=p;export{a as default};