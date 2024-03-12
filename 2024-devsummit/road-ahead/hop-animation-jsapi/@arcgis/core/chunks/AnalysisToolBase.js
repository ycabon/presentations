/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"./tslib.es6.js";import{watch as e,syncAndInitial as t}from"../core/reactiveUtils.js";import"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{I as r}from"./InteractiveToolBase.js";let a=class extends r{constructor(s){super(s)}initialize(){this.addHandles(e((()=>this.analysisViewData.visible),(s=>this.visible=s),t))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};a=s([i("esri.views.interactive.AnalysisToolBase")],a);export{a as A};
