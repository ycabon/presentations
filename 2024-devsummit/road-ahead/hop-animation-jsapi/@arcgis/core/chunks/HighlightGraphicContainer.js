/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import{W as e,r as t,F as o}from"./Container.js";import{A as i}from"./AGraphicContainer.js";let a=class extends i{get hasHighlight(){return this.children.some((r=>r.hasData))}renderChildren(r){r.drawPhase===e.HIGHLIGHT&&(this.attributeView.update(),this.children.some((r=>r.hasData))&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),t(r,!0,(r=>{this._renderChildren(r,o.All)}))))}};a=r([s("esri.views.2d.layers.support.HighlightGraphicContainer")],a);const h=a;export{h as H};
