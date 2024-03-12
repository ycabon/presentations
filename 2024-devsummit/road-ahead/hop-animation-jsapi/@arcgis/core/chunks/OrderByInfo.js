/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{J as e}from"./jsonMap.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";var i;const p=new e({asc:"ascending",desc:"descending"});let n=i=class extends o{constructor(r){super(r),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};r([s({type:String,json:{write:!0}})],n.prototype,"field",void 0),r([s({type:String,json:{write:!0}})],n.prototype,"valueExpression",void 0),r([s({type:p.apiValues,json:{read:p.read,write:p.write}})],n.prototype,"order",void 0),n=i=r([t("esri.layers.support.OrderByInfo")],n);const a=n;export{a as O};
