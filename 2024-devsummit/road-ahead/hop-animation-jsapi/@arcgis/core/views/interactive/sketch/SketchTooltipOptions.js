/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/ensureType.js";let i=class extends t{constructor(e){super(e),this.mode="absolute-height"}toJSON(){return{mode:this.mode}}};e([o({type:String,nonNullable:!0})],i.prototype,"mode",void 0),i=e([s("esri.widgets.Sketch.SketchTooltipOptions.ElevationOptions")],i);let n=class extends t{constructor(e){super(e),this.area=!0,this.direction=!0,this.distance=!0,this.elevation=!0,this.header=!0,this.helpMessage=!1,this.orientation=!0,this.radius=!0,this.rotation=!0,this.scale=!0,this.size=!0,this.totalLength=!0}toJSON(){return{area:this.area,direction:this.direction,distance:this.distance,elevation:this.elevation,header:this.header,helpMessage:this.helpMessage,orientation:this.orientation,radius:this.radius,rotation:this.rotation,scale:this.scale,size:this.size,totalLength:this.totalLength}}};e([o({type:Boolean,nonNullable:!0})],n.prototype,"area",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"direction",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"distance",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"elevation",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"header",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"helpMessage",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"orientation",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"radius",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"rotation",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"scale",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"size",void 0),e([o({type:Boolean,nonNullable:!0})],n.prototype,"totalLength",void 0),n=e([s("esri.widgets.Sketch.SketchTooltipOptions.VisibleElements")],n);const l=n;let r=class extends t{constructor(e){super(e),this.enabled=!1,this.forceEnabled=!1,this.inputEnabled=!0,this.elevation=new i,this.visibleElements=new l,this.visualVariables=null}get effectiveEnabled(){return this.forceEnabled||this.enabled}};e([o({type:Boolean,nonNullable:!0})],r.prototype,"enabled",void 0),e([o()],r.prototype,"forceEnabled",void 0),e([o()],r.prototype,"effectiveEnabled",null),e([o({type:Boolean,nonNullable:!0})],r.prototype,"inputEnabled",void 0),e([o({type:i,nonNullable:!0})],r.prototype,"elevation",void 0),e([o({type:l,nonNullable:!0})],r.prototype,"visibleElements",void 0),e([o()],r.prototype,"visualVariables",void 0),r=e([s("esri.widgets.sketch.SketchTooltipOptions")],r);const a=r;export{a as default};