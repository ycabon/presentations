/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let p=class extends(r(s)){constructor(o){super(o),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};o([t({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"offset",void 0),o([t({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),o([t({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),p=o([e("esri.geometry.support.MeshTextureTransform")],p);const i=p;export{i as default};
