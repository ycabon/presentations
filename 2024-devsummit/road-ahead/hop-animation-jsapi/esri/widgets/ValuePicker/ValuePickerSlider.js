// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../Slider ../../chunks/componentsUtils ../support/widgetUtils ../support/jsxFactory ./ValuePickerBaseComponent ./ValuePickerSliderVisibleElements".split(" "),function(u,d,v,m,f,b,E,F,w,x,y,G,n,z,q){function p(a){return(e,c)=>{c?.classList.add(a)}}b=class extends z{constructor(a,
e){super(a,e);this._majorTickCreatedFunction=p("esri-value-picker__slider__tick-major");this._minorTickCreatedFunction=p("esri-value-picker__slider__tick-minor");this._stepsTickCreatedFunction=p("esri-value-picker__slider__tick-steps");this._tooltip=this._thumbNode=null;this._slider=new x({thumbCreatedFunction:(c,h,k)=>{this._thumbNode=k}});this.max=this.majorTicks=this.minorTicks=this.min=this.labels=this.labelFormatFunction=null;this.reversed=!1;this.steps=null;this.type="slider";this.visibleElements=
new q;this._thumbDragDebounced=v.debounce(async c=>{await this._tooltip?.reposition(!1)})}initialize(){this.addHandles([m.watch(()=>this.viewModel?.values,a=>{this._slider.values=a},m.initial),m.watch(()=>this._slider.values,a=>{this.viewModel&&this.viewModel.values!==a&&(this.viewModel.values=a)}),this._slider.on("thumb-drag",this._thumbDragDebounced)])}destroy(){this._slider.destroy()}loadDependencies(){return y.loadCalciteComponents({tooltip:()=>new Promise((a,e)=>u(["../../chunks/calcite-tooltip"],
a,e))})}get _ascending(){const {reversed:a,viewModel:e}=this;if(!e)return null;const {layout:c}=e;return"horizontal"===c&&!a||"vertical"===c&&a}get canNext(){const {_ascending:a,min:e,max:c,steps:h,viewModel:k}=this;if(null==a||null==e||null==c||!h?.length||!k)return!1;var {values:g}=k;g=g?.[0];return null==g?!0:a?g!==h[h.length-1]:g!==h[0]}get canPlay(){return null!=this.viewModel&&!!this.steps?.length&&null!=this.min&&null!=this.max}get canPrevious(){const {_ascending:a,min:e,max:c,steps:h,viewModel:k}=
this;if(null==a||null==e||null==c||!h?.length||!k)return!1;var {values:g}=k;g=g?.[0];return null==g?!0:a?g!==h[0]:g!==h[h.length-1]}render(){const {labels:a,labelFormatFunction:e,min:c,max:h,steps:k,minorTicks:g,majorTicks:r,reversed:A,viewModel:t}=this;if(!t)return n.tsx("div",null);const {disabled:B,layout:C}=t,D=`${C}${A?"-reversed":""}`,l=[];null!=c&&null!=h&&(g&&l.push({mode:"position",values:g,tickCreatedFunction:this._minorTickCreatedFunction}),r&&l.push({mode:"position",values:r,tickCreatedFunction:this._majorTickCreatedFunction}),
a&&l.push({mode:"position",values:a,labelsVisible:!0}),this.visibleElements.steps&&this.steps&&l.push({mode:"position",values:this.steps,tickCreatedFunction:this._stepsTickCreatedFunction}));this._slider.set({disabled:B,labelFormatFunction:e,layout:D,min:c,max:h,steps:k,tickConfigs:l});return n.tsx("div",{class:"esri-value-picker__slider"},this._slider.render(),this._renderToolTip())}animate(a){this._step(1,a)}next(){this._step(this._ascending?1:-1)}previous(){this._step(this._ascending?-1:1)}_onTooltipAfterCreate(a){this._tooltip=
a}_renderToolTip(){if(!this.visibleElements.thumbTooltip||!this._thumbNode||!this._slider.values)return null;const a=this._slider.viewModel.getLabelForValue(this._slider.values[0],"value");return a?n.tsx("calcite-tooltip",{afterCreate:this._onTooltipAfterCreate,class:"esri-value-picker__slider__tooltip",referenceElement:this._thumbNode},a):null}_step(a,e=!1){if(this.viewModel&&this.steps?.length)if(this.viewModel.values&&this.steps.includes(this.viewModel.values[0])){var c=this.steps.indexOf(this.viewModel.values[0])+
a;0>c||c>=this.steps.length?this.viewModel.loop||e?this.viewModel.values=[this.steps[1===a?0:this.steps.length-1]]:"playing"===this.viewModel.state&&this.viewModel.pause():this.viewModel.values=[this.steps[c]]}else this.viewModel.values=[this.steps[0]]}};d.__decorate([f.property()],b.prototype,"_ascending",null);d.__decorate([f.property()],b.prototype,"canNext",null);d.__decorate([f.property()],b.prototype,"canPlay",null);d.__decorate([f.property()],b.prototype,"canPrevious",null);d.__decorate([f.property()],
b.prototype,"labelFormatFunction",void 0);d.__decorate([f.property()],b.prototype,"labels",void 0);d.__decorate([f.property()],b.prototype,"min",void 0);d.__decorate([f.property()],b.prototype,"minorTicks",void 0);d.__decorate([f.property()],b.prototype,"majorTicks",void 0);d.__decorate([f.property()],b.prototype,"max",void 0);d.__decorate([f.property({nonNullable:!0})],b.prototype,"reversed",void 0);d.__decorate([f.property()],b.prototype,"steps",void 0);d.__decorate([f.property()],b.prototype,"type",
void 0);d.__decorate([f.property({type:q,nonNullable:!0})],b.prototype,"visibleElements",void 0);return b=d.__decorate([w.subclass("esri.widgets.ValuePicker.ValuePickerSlider")],b)});