// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./AreaMeasurement2D/AreaMeasurement2DViewModel ./support/globalCss ./support/legacyIcon ./support/MeasurementWidgetContent ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(c,n,d,a,D,E,p,q,g,h,r,t,F,e,k){var u=r.legacyIcon.measureArea;a=class extends q{constructor(b,
f){super(b,f);this.iconClass=u;this.messagesCommon=this.messagesUnits=this.messages=this.icon=null;this.viewModel=new g}get active(){return this.viewModel.active}get label(){return this.messages?.widgetLabel??""}set label(b){this._overrideIfSome("label",b)}get unit(){return this.viewModel.unit}set unit(b){this.viewModel.unit=b}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(b){this.viewModel.unitOptions=b}get view(){return this.viewModel.view}set view(b){this.viewModel.view=b}get visible(){return this.viewModel.visible}set visible(b){this.viewModel.visible=
b}render(){const {messages:b,messagesCommon:f,messagesUnits:v,unit:w,unitOptions:x,viewModel:l,visible:y}=this,{active:z,measurementLabel:m,state:A,supported:B}=l;return k.tsx("div",{"aria-label":b.widgetLabel,class:this.classes("esri-area-measurement-2d",h.globalCss.widget,h.globalCss.panel),key:this,role:"presentation"},y?k.tsx(t.MeasurementWidgetContent,{active:z,measurementItems:[{key:"area",title:v?.measures.area,value:m?.area},{key:"perimeter",title:b.perimeter,value:m?.perimeter}],messages:{...b,
notApplicable:f.notApplicable},newMeasurementButtonClass:"esri-area-measurement-2d__clear-button",state:A,supported:B,unit:w,unitOptions:x,onNewMeasurementClick:()=>{n.ignoreAbortErrors(l.start())},onUnitChange:C=>{this.unit=C}}):null)}};c.__decorate([d.property({readOnly:!0})],a.prototype,"active",null);c.__decorate([d.property()],a.prototype,"iconClass",void 0);c.__decorate([d.property()],a.prototype,"icon",void 0);c.__decorate([d.property()],a.prototype,"label",null);c.__decorate([d.property(),
e.messageBundle("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")],a.prototype,"messages",void 0);c.__decorate([d.property(),e.messageBundle("esri/core/t9n/Units")],a.prototype,"messagesUnits",void 0);c.__decorate([d.property(),e.messageBundle("esri/t9n/common")],a.prototype,"messagesCommon",void 0);c.__decorate([d.property()],a.prototype,"uiStrings",void 0);c.__decorate([d.property()],a.prototype,"unit",null);c.__decorate([d.property()],a.prototype,"unitOptions",null);c.__decorate([d.property()],
a.prototype,"view",null);c.__decorate([d.property({type:g})],a.prototype,"viewModel",void 0);c.__decorate([d.property({type:Boolean})],a.prototype,"visible",null);return a=c.__decorate([p.subclass("esri.widgets.AreaMeasurement2D")],a)});