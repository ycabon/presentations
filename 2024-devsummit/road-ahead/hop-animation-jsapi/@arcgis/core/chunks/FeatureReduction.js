/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";let t=class extends o{constructor(){super(...arguments),this.type=null}};r([e({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=r([s("esri.layers.support.FeatureReduction")],t);export{t as F};
