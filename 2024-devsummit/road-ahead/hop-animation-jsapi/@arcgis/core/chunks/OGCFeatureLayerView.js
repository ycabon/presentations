/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([r()],t.prototype,"layer",void 0),e([r({readOnly:!0})],t.prototype,"availableFields",null),t=e([s("esri.views.layers.OGCFeatureLayerView")],t),t};export{o as O};
