/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";var e;let p=e=class extends o{constructor(){super(...arguments),this.url=""}destroy(){this.url=""}clone(){return new e({url:this.url})}};r([s({type:String,json:{write:{isRequired:!0}}})],p.prototype,"url",void 0),p=e=r([t("esri.webdoc.support.SlideThumbnail")],p);export{p as S};
