// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/reactiveUtils ../../../core/timeUtils ../../../core/uuid ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../intl/number ../../Slider ../../Widget ../css ./Label ./LabeledColorPicker ../../../chunks/componentsUtils ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),
function(q,b,d,r,m,k,n,f,B,C,D,t,u,v,w,p,x,y,z,E,A,l){b.ThresholdConfigurator=class extends w{constructor(c){super(c);this.colorPickerVisible=!0;this._valueSliderId=`value-slider-${n.generateUUID()}`;this._colorPickerId=`color-picker-${n.generateUUID()}`;this._valueSlider=new v({visibleElements:{labels:!1,rangeLabels:!1},steps:k.convertTime(30,"minutes","milliseconds"),labelFormatFunction:(a,e)=>{a=k.convertTime(a,"milliseconds","hours");return"tick"===e?u.formatNumber(a,{maximumFractionDigits:0}):
""}});this._onColorChange=a=>{this.options.color=a}}initialize(){const c=({value:a})=>{this.options.value=a};this.addHandles([m.watch(()=>{const {value:a,minValue:e,maxValue:g}=this.options;return{value:a,minValue:e,maxValue:g}},({value:a,minValue:e,maxValue:g})=>{const h=this._valueSlider;h.min=e;h.max=g;h.values=[a];a=Math.floor(k.convertTime(g-e,"milliseconds","hours"));h.tickConfigs=[{mode:"count",values:2*a+1,labelsVisible:!1},{mode:"count",values:a+1,labelsVisible:!0}]},m.syncAndInitial),this._valueSlider.on("thumb-change",
c),this._valueSlider.on("thumb-drag",c)])}loadDependencies(){return z.loadCalciteComponents({label:()=>new Promise((c,a)=>q(["../../../chunks/calcite-label"],c,a))})}destroy(){this._valueSlider=r.destroyMaybe(this._valueSlider)}render(){const c=this._messages.threshold,{color:a}=this.options;return l.tsx("div",{class:p.thresholdConfiguratorCss.base},l.tsx(x.Label,{class:p.thresholdConfiguratorCss.valueLabel,for:this._valueSliderId,label:c.valueLabel},this._valueSlider.render()),this.colorPickerVisible?
l.tsx(y.LabeledColorPicker,{id:this._colorPickerId,label:c.colorLabel,value:a,onChange:this._onColorChange}):null)}get testData(){return{valueSlider:this._valueSlider}}};d.__decorate([f.property()],b.ThresholdConfigurator.prototype,"options",void 0);d.__decorate([f.property()],b.ThresholdConfigurator.prototype,"colorPickerVisible",void 0);d.__decorate([f.property()],b.ThresholdConfigurator.prototype,"testData",null);d.__decorate([f.property()],b.ThresholdConfigurator.prototype,"_valueSlider",void 0);
d.__decorate([f.property(),A.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],b.ThresholdConfigurator.prototype,"_messages",void 0);b.ThresholdConfigurator=d.__decorate([t.subclass("esri.widgets.ShadowCast.components.ThresholdConfigurator")],b.ThresholdConfigurator);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});