/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import s from"../../core/Collection.js";import{r as t}from"../../chunks/collectionUtils.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{clone as i}from"../../core/lang.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{I as c}from"../../chunks/ensureType.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import a from"./VoxelDynamicSection.js";import l from"./VoxelSlice.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/Clonable.js";import"../../chunks/Cyclical.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/voxelPlaneUtils.js";import"../../chunks/quat.js";import"../../chunks/vec4.js";import"../../chunks/quatf64.js";var p;let m=p=class extends o{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(s.ofType(l)),this.dynamicSections=new(s.ofType(a))}set slices(e){this._set("slices",t(e,this._get("slices"),s.ofType(l)))}set dynamicSections(e){this._set("dynamicSections",t(e,this._get("dynamicSections"),s.ofType(a)))}clone(){return new p({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:i(this.slices),dynamicSections:i(this.dynamicSections)})}};e([r({type:c,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"volumeId",void 0),e([r({type:Number,json:{default:1,write:!0}})],m.prototype,"verticalExaggeration",void 0),e([r({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],m.prototype,"exaggerationMode",void 0),e([r({type:Number,json:{default:0,write:!0}})],m.prototype,"verticalOffset",void 0),e([r({type:s.ofType(l),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],m.prototype,"slices",null),e([r({type:s.ofType(a),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],m.prototype,"dynamicSections",null),m=p=e([n("esri.layers.voxel.VoxelVolumeStyle")],m);const h=m;export{h as default};
