/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r from"../Color.js";import{J as o}from"../chunks/jsonMap.js";import{clone as t}from"../core/lang.js";import{t as e}from"../chunks/screenUtils.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{e as l}from"../chunks/enumeration.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{w as n}from"../chunks/writer.js";import m from"./MarkerSymbol.js";import c from"./SimpleLineSymbol.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/ensureType.js";import"../config.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"./Symbol.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"./LineSymbol.js";import"./LineSymbolMarker.js";import"../chunks/lineMarkers.js";var a;const h=new o({esriSMSCircle:"circle",esriSMSSquare:"square",esriSMSCross:"cross",esriSMSX:"x",esriSMSDiamond:"diamond",esriSMSTriangle:"triangle",esriSMSPath:"path"});let u=a=class extends m{constructor(...s){super(...s),this.color=new r([255,255,255,.25]),this.type="simple-marker",this.size=12,this.style="circle",this.outline=new c}normalizeCtorArgs(s,r,o,t){if(s&&"string"!=typeof s)return s;const i={};return s&&(i.style=s),null!=r&&(i.size=e(r)),o&&(i.outline=o),t&&(i.color=t),i}writeColor(s,r){s&&"x"!==this.style&&"cross"!==this.style&&(r.color=s.toJSON()),null===s&&(r.color=null)}set path(s){this.style="path",this._set("path",s)}clone(){return new a({angle:this.angle,color:t(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})}hash(){return`${super.hash()}.${this.color&&this.color.hash()}.${this.path}.${this.style}.${this.outline?.hash()}`}};s([i()],u.prototype,"color",void 0),s([n("color")],u.prototype,"writeColor",null),s([l({esriSMS:"simple-marker"},{readOnly:!0})],u.prototype,"type",void 0),s([i()],u.prototype,"size",void 0),s([i({type:h.apiValues,json:{read:h.read,write:h.write}})],u.prototype,"style",void 0),s([i({type:String,json:{write:!0}})],u.prototype,"path",null),s([i({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":c}},json:{default:null,write:!0}})],u.prototype,"outline",void 0),u=a=s([p("esri.symbols.SimpleMarkerSymbol")],u);const j=u;export{j as default};