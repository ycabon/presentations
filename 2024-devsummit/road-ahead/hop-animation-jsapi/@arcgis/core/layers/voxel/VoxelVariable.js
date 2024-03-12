/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let s=class extends e{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};t([o({type:["discrete","continuous"],json:{write:!0}})],s.prototype,"continuity",void 0),t([o({type:Boolean,json:{write:!0}})],s.prototype,"hasNoData",void 0),t([o({type:Number,json:{write:!0}})],s.prototype,"noData",void 0),t([o({type:Number,json:{write:!0}})],s.prototype,"offset",void 0),t([o({type:Number,json:{write:!0}})],s.prototype,"scale",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"type",void 0),s=t([r("esri.layers.voxel.VoxelFormat")],s);const i=s;let p=class extends e{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],p.prototype,"description",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"name",void 0),t([o({type:i,json:{write:!0}})],p.prototype,"originalFormat",void 0),t([o({type:i,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"renderingFormat",void 0),t([o({type:String,json:{write:!0}})],p.prototype,"unit",void 0),t([o({type:Number,json:{write:!0}})],p.prototype,"volumeId",void 0),t([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],p.prototype,"type",void 0),p=t([r("esri.layers.voxel.VoxelVariable")],p);const n=p;export{n as default};
