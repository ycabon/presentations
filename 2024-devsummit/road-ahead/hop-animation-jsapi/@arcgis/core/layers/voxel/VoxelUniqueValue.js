/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{ClonableMixin as s}from"../../core/Clonable.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import{I as i}from"../../chunks/ensureType.js";import"../../core/lang.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";let c=class extends(s(e)){constructor(){super(...arguments),this.color=r.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};o([t({type:r,json:{type:[i],write:{enabled:!0,isRequired:!0}}})],c.prototype,"color",void 0),o([t({type:i,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"value",void 0),o([t({type:Boolean,json:{default:!0,write:!0}})],c.prototype,"enabled",void 0),o([t({type:String,json:{write:!0}})],c.prototype,"label",void 0),c=o([p("esri.layers.voxel.VoxelUniqueValue")],c);const m=c;export{m as default};
