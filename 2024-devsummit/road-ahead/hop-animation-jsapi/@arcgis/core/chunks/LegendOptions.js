/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{JSONSupport as t}from"../core/JSONSupport.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";var s;let p=s=class extends t{constructor(){super(...arguments),this.title=null}clone(){return new s({title:this.title})}};r([o({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=r([e("esri.renderers.support.LegendOptions")],p);export{p as L};
