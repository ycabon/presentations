/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{t as o}from"../chunks/screenUtils.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import e from"./Symbol.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/tracking.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/jsonMap.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/reader.js";let i=class extends e{constructor(s){super(s),this.angle=0,this.type=null,this.xoffset=0,this.yoffset=0,this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};s([t({type:Number,json:{read:s=>s&&-1*s,write:(s,o)=>o.angle=s&&-1*s}})],i.prototype,"angle",void 0),s([t({type:["simple-marker","picture-marker"],readOnly:!0})],i.prototype,"type",void 0),s([t({type:Number,cast:o,json:{write:!0}})],i.prototype,"xoffset",void 0),s([t({type:Number,cast:o,json:{write:!0}})],i.prototype,"yoffset",void 0),s([t({type:Number,cast:s=>"auto"===s?s:o(s),json:{write:!0}})],i.prototype,"size",void 0),i=s([r("esri.symbols.MarkerSymbol")],i);const p=i;export{p as default};
