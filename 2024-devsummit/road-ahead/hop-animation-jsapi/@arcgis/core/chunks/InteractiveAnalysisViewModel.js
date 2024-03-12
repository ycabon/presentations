/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"./tslib.es6.js";import{c as t}from"./asyncUtils.js";import{a as i}from"./maybe.js";import{throwIfAborted as e,isAbortError as n,isAborted as a}from"../core/promiseUtils.js";import{watch as r,sync as o,syncAndInitial as l,whenOnce as c}from"../core/reactiveUtils.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as y}from"../core/accessorSupport/decorators/subclass.js";import{I as w}from"./InteractiveToolViewModel.js";var p;!function(s){s[s.PENDING=0]="PENDING",s[s.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",s[s.RUNNING=2]="RUNNING"}(p||(p={}));let _=class extends w{constructor(s={}){super(s),this.analysisView=null,this._reconnectViewTask=null,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const t=s?.analysis;null!=t?this.analysis=t:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(s){const{analysis:t,...i}=s;return i}initialize(){this.addHandles([r((()=>this.analysis?.parent),(s=>{this._parentChangeFromReconnect||s===this.view||this._set("isAnalysisOwner",!1);const t=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,t&&this._scheduleViewReconnect()}),o),r((()=>({view:this.view,ready:null!=this.view&&this.view.ready,supported:this.supported})),(({view:s},t)=>{const e=t?.view;s!==e&&(this._startUserOperation=i(this._startUserOperation),this._disconnectFromView(e)),this._scheduleViewReconnect()}),l),r((()=>this.analysis.isEditable),((s,t)=>{null!=this.analysisView&&(s&&!t&&null==this.tool?this.createTool():s||!t||null==this.tool||this.tool.active||this.removeTool())}))])}destroy(){this._reconnectViewTask=i(this._reconnectViewTask),this._startUserOperation=i(this._startUserOperation),null!=this.analysisView&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),null!=this.analysis&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(s){s!==this._get("analysis")&&(this._startUserOperation=i(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(s),this._scheduleViewReconnect())}get ready(){return null!=this.analysisView&&!this.connectingToView}get connectingToView(){return null!=this._reconnectViewTask}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(s){this._set("visible",s),null!=this.analysisView&&(this.analysisView.visible=s)}async start(){this.clear();const s={task:null,abort:null,state:p.PENDING},i=t((async t=>{s.state=p.WAIT_FOR_VIEW_READY,await c((()=>this.ready),t),s.state=p.RUNNING,this.createTool({interactive:!0})}));return s.task=i,s.abort=()=>i.abort(),this._startUserOperation=s,i.promise}clear(){this._startUserOperation=i(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(s){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=i(this._reconnectViewTask);const s=t((async t=>{try{await this._reconnectView(t)}catch(s){if(e(t),!n(s))return void this.logger.warn("Failed to use analysis in view model",s);throw s}finally{s===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=s}async _reconnectView(s){const{view:t}=this,i=null!=t&&t.ready&&this.supported,e=this.analysis;if(this._startUserOperation=u(this._startUserOperation),this._disconnectFromView(t),i&&null!=t&&null!=e){if(this.isAnalysisOwner){if(null!=e.parent)return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,t.analyses.add(e)}this.analysisView=await t.whenAnalysisView(e),a(s)?this._startUserOperation=u(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(s){this.removeTool(),null!=s&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,s.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(s){null==this.analysisView||this.isAnalysisOwner||(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",s),this._parentChangeFromReconnect=!1}get testInfo(){return{analysisView:this.analysisView}}};function u(s){return null!=s&&s.state>=p.RUNNING?(s.abort(),null):s}s([h({nonNullable:!0})],_.prototype,"analysis",null),s([h()],_.prototype,"analysisView",void 0),s([h()],_.prototype,"ready",null),s([h()],_.prototype,"connectingToView",null),s([h({readOnly:!0})],_.prototype,"isAnalysisOwner",null),s([h({type:Boolean,value:!0})],_.prototype,"visible",null),s([h()],_.prototype,"_reconnectViewTask",void 0),_=s([y("esri.widgets.support.InteractiveAnalysisViewModel")],_);export{_ as I};
