/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{L as r}from"./Logger.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{p as i,s as o}from"./arcgisLayerUrl.js";const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=i(this.url);if(null!=t&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",o(t,r.getLogger(this)))}};return t([e()],p.prototype,"title",null),t([e({type:String})],p.prototype,"url",null),p=t([s("esri.layers.mixins.ArcGISService")],p),p};export{l as A};
