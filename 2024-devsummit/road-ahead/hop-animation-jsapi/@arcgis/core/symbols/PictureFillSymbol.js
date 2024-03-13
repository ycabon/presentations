/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{clone as t}from"../core/lang.js";import{t as o}from"../chunks/screenUtils.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import p from"./FillSymbol.js";import{u as c,s as l}from"../chunks/urlUtils.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"./SimpleLineSymbol.js";import"./LineSymbol.js";import"./Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"./LineSymbolMarker.js";import"../chunks/writer.js";import"../chunks/lineMarkers.js";import"../core/urlUtils.js";import"../chunks/persistableUrlUtils.js";import"../kernel.js";var h;let m=h=class extends p{constructor(...s){super(...s),this.type="picture-fill",this.url=null,this.xscale=1,this.yscale=1,this.width=12,this.height=12,this.xoffset=0,this.yoffset=0,this.source=null}normalizeCtorArgs(s,t,r,e){if(s&&"string"!=typeof s&&null==s.imageData)return s;const i={};return s&&(i.url=s),t&&(i.outline=t),null!=r&&(i.width=o(r)),null!=e&&(i.height=o(e)),i}clone(){const s=new h({color:t(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return s._set("source",t(this.source)),s}hash(){return`${super.hash()}.${this.color?.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}};s([e({esriPFS:"picture-fill"},{readOnly:!0})],m.prototype,"type",void 0),s([r(c)],m.prototype,"url",void 0),s([r({type:Number,json:{write:!0}})],m.prototype,"xscale",void 0),s([r({type:Number,json:{write:!0}})],m.prototype,"yscale",void 0),s([r({type:Number,cast:o,json:{write:!0}})],m.prototype,"width",void 0),s([r({type:Number,cast:o,json:{write:!0}})],m.prototype,"height",void 0),s([r({type:Number,cast:o,json:{write:!0}})],m.prototype,"xoffset",void 0),s([r({type:Number,cast:o,json:{write:!0}})],m.prototype,"yoffset",void 0),s([r(l)],m.prototype,"source",void 0),m=h=s([i("esri.symbols.PictureFillSymbol")],m);const n=m;export{n as default};