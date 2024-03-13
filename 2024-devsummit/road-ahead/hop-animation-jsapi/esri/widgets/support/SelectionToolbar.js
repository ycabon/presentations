// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../core/deprecate ../../core/handleUtils ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ../../chunks/componentsUtils ./globalCss ./legacyIcon ./widgetUtils ./decorators/messageBundle ./jsxFactory ./SelectionToolbar/SelectionToolbarViewModel".split(" "),function(h,d,k,n,l,p,e,q,c,A,r,t,u,
v,B,C,w,f,x){const m={lassoTool:!0,rectangleTool:!0},y={createTool:"polygon",mode:"freehand"},z={createTool:"rectangle"};c=class extends t{constructor(a,b){super(a,b);this.messages=this.activeToolInfo=this._viewModelHandlesGroup=null;this.toolConfigs=[];this.viewModel=new x;this.visibleElements={...m};this._viewModelHandlesGroup=n.handlesGroup([this.viewModel.on("complete",g=>{this._set("activeToolInfo",null);this.emit("complete",g)})])}destroy(){this._viewModelHandlesGroup=p.removeMaybe(this._viewModelHandlesGroup)}loadDependencies(){return u.loadCalciteComponents({action:()=>
new Promise((a,b)=>h(["../../chunks/calcite-action"],a,b)),icon:()=>new Promise((a,b)=>h(["../../chunks/calcite-icon"],a,b))})}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get layers(){k.deprecatedProperty(l.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."});return this.viewModel.sources}set layers(a){k.deprecatedProperty(l.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."});this.viewModel.sources=
a}get sources(){return this.viewModel.sources}set sources(a){this.viewModel.sources=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}castVisibleElements(a){return{...m,...a}}get visibleToolCount(){const {view:a,toolConfigs:b,visibleElements:g}=this;return(b?.length??0)+("2d"===a?.type?(g.lassoTool?1:0)+(g.rectangleTool?1:0):0)}activate(a){this.cancel();if("disabled"!==this.viewModel.state)switch(a){case "lasso":this._activateTool("lasso");break;case "rectangle":this._activateTool("rectangle");
break;default:this._activateTool(a)}}cancel(){this.viewModel.cancel();this._set("activeToolInfo",null)}render(){return f.tsx("div",{"aria-label":this.label,class:this.classes("esri-selection-toolbar",v.globalCss.widget)},f.tsx("div",{class:"esri-selection-toolbar__container"},this._renderDefaultTools(),this._renderCustomTools()))}_renderDefaultTools(){if("2d"===this.view?.type)return[this._renderRectangleTool(),this._renderLassoTool()]}_renderCustomTools(){if(this.toolConfigs?.length)return this.toolConfigs.map(a=>
f.tsx("calcite-action",{active:this.activeToolInfo?.toolName===a.toolName,bind:this,class:"esri-selection-toolbar__tool-button",disabled:"disabled"===this.viewModel.state,label:a.toolName,onclick:()=>this._onCustomToolClick(a.toolName),scale:"s",text:a.toolName,title:a.toolName},f.tsx("calcite-icon",{icon:a.icon||"selection",scale:"s"})))}_renderLassoTool(){const {activeToolInfo:a,messages:b,visibleElements:g}=this;if(g.lassoTool)return f.tsx("calcite-action",{active:"lasso"===a?.toolName,bind:this,
disabled:"disabled"===this.viewModel.state,label:b.selectByLasso,onclick:this._onLassoToolClick,scale:"s",text:b.selectByLasso,title:b.selectByLasso},f.tsx("calcite-icon",{icon:"lasso-select",scale:"s"}))}_renderRectangleTool(){const {activeToolInfo:a,messages:b,visibleElements:g}=this;if(g.rectangleTool)return f.tsx("calcite-action",{active:"rectangle"===a?.toolName,bind:this,disabled:"disabled"===this.viewModel.state,label:b.selectByRectangle,onclick:this._onRectangleToolClick,scale:"s",text:b.selectByRectangle,
title:b.selectByRectangle},f.tsx("calcite-icon",{icon:"cursor-marquee",scale:"s"}))}_onCustomToolClick(a){this._toggleTool(a)}_onLassoToolClick(){this._toggleTool("lasso")}_onRectangleToolClick(){this._toggleTool("rectangle")}_activateTool(a){var b=this._getToolOptions(a);b&&(b=this.viewModel.activate(b))&&this._set("activeToolInfo",{toolName:a,operation:b})}_toggleTool(a){if(this.activeToolInfo){const b=this.activeToolInfo.toolName;this.cancel();if(b===a)return}this._activateTool(a)}_getToolOptions(a){return"lasso"===
a?y:"rectangle"===a?z:this.toolConfigs.find(b=>b.toolName===a)}};d.__decorate([e.property({readOnly:!0})],c.prototype,"activeToolInfo",void 0);d.__decorate([e.property()],c.prototype,"label",null);d.__decorate([e.property()],c.prototype,"layers",null);d.__decorate([e.property(),w.messageBundle("esri/widgets/support/SelectionToolbar/t9n/SelectionToolbar")],c.prototype,"messages",void 0);d.__decorate([e.property()],c.prototype,"sources",null);d.__decorate([e.property()],c.prototype,"toolConfigs",void 0);
d.__decorate([e.property()],c.prototype,"view",null);d.__decorate([e.property()],c.prototype,"viewModel",void 0);d.__decorate([e.property()],c.prototype,"visibleElements",void 0);d.__decorate([q.cast("visibleElements")],c.prototype,"castVisibleElements",null);d.__decorate([e.property()],c.prototype,"visibleToolCount",null);return c=d.__decorate([r.subclass("esri.widgets.support.SelectionToolbar")],c)});