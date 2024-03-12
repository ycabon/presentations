/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{c as e}from"./materialUtils.js";var c;let l=c=class extends r{constructor(o){super(o),this.color=null}clone(){const o={color:null!=this.color?this.color.clone():null};return new c(o)}};o([s(e)],l.prototype,"color",void 0),l=c=o([t("esri.symbols.support.Symbol3DMaterial")],l);export{l as S};
