// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./HistogramRangeSlider/nls/HistogramRangeSlider ../Color ../core/watchUtils ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ./Histogram ./Slider ./Widget ./HistogramRangeSlider/HistogramRangeSliderViewModel ./smartMapping/support/utils ./support/widget".split(" "),function(w,x,y,n,e,p,h,k,d,l,q,r,t,u,v,f){return function(m){function a(b){b=
m.call(this,b)||this;b._barElements=[];b._histogram=null;b._slider=null;b.average=null;b.barCreatedFunction=null;b.bins=null;b.dataLines=null;b.dataLineCreatedFunction=null;b.excludedBarColor=new h("#d7e5f0");b.hasTimeData=null;b.includedBarColor=new h("#599dd4");b.label=p.widgetLabel;b.labelFormatFunction=null;b.max=null;b.min=null;b.precision=4;b.rangeType=null;b.standardDeviation=null;b.standardDeviationCount=1;b.values=null;b.viewModel=new u;return b}n(a,m);a.prototype.postInitialize=function(){var b=
this,a=this.average,d=this.bins,c=this.hasTimeData,e=this.max,f=this.min,h=this.viewModel;this._updateBarFill=this._updateBarFill.bind(this);this._histogram=new q({average:a,bins:d,barCreatedFunction:function(a,g){0===a&&(b._barElements=[]);b._barElements.push(g);b._updateBarFill(a,g);b.barCreatedFunction&&b.barCreatedFunction(a,g)},dataLines:this._getDataLines(),dataLineCreatedFunction:function(a,g){b.dataLineCreatedFunction&&b.dataLineCreatedFunction(a,g)},labelFormatFunction:this.labelFormatFunction,
layout:"horizontal",max:e,min:f});this._slider=new r({labelFormatFunction:this.labelFormatFunction,layout:"horizontal",visibleElements:{labels:!0,rangeLabels:!0},rangeLabelInputsEnabled:!c,viewModel:h});this.own(this._slider.on(["max-change","min-change"],function(a){return b.emit(a.type,a)}),this._slider.on(["segment-drag","thumb-change","thumb-drag"],function(a){b._updateBarFills();b.emit(a.type,a)}),k.watch(this,"bins",function(){var a=b._histogram,g=b.bins;if(g&&a.bins){var c=a.bins.length-g.length;
b._barElements.splice(-c,c)}else b._barElements=[];a.set({bins:g});b._updateBarFills();b.scheduleRender()}),k.watch(this,["max","min","rangeType","values"],function(){b._histogram.set({max:b.max,min:b.min});b._updateBarFills();b.scheduleRender()}),k.watch(this,["average","dataLines","standardDeviation","standardDeviationCount"],function(){b._histogram.set({average:b.average,dataLines:b._getDataLines()})}),k.watch(this,"labelFormatFunction",function(){b._histogram.set({labelFormatFunction:b.labelFormatFunction})}),
k.watch(this,"hasTimeData",function(){b._slider.set({rangeLabelInputsEnabled:!b.hasTimeData})}))};a.prototype.generateWhereClause=function(b){return this.viewModel.generateWhereClause(b)};a.prototype.render=function(){var b=this.viewModel,a=this.label,d=this.classes("esri-histogram-range-slider","esri-widget","esri-histogram-range-slider__range-type--"+this.rangeType,"disabled"===b.state?"esri-disabled":null);return f.tsx("div",{"aria-label":a,class:d},"disabled"===b.state?null:this.renderContent())};
a.prototype.renderContent=function(){return[this.renderHistogram(),this.renderSlider()]};a.prototype.renderSlider=function(){return f.tsx("div",{key:this.id+"-slider-container",class:"esri-histogram-range-slider__slider-container"},this._slider.render())};a.prototype.renderHistogram=function(){return f.tsx("div",{class:"esri-histogram-range-slider__histogram-container"},this._histogram.render())};a.prototype._getDataLines=function(){return this._getStandardDeviationDataLines().concat(this.dataLines||
[])};a.prototype._getStandardDeviationDataLines=function(){return v.getDeviationValues(this.standardDeviation,this.average,this.standardDeviationCount).map(function(b){return{value:b}})};a.prototype._updateBarFills=function(){var b=this;this._barElements.forEach(function(a,d){return b._updateBarFill(d,a)})};a.prototype._updateBarFill=function(b,a){a.setAttribute("fill",this._getFillForBar(b).toHex())};a.prototype._getFillForBar=function(b){var a=this.bins,d=this.rangeType,c=this.values;if(!(a&&a.length&&
d&&c.length))return null;a=a[b];if(!a)return null;b=a.maxValue;var a=a.minValue,e=b-a;switch(d){case "equal":case "not-equal":return this.includedBarColor;case "less-than":case "at-most":return c[0]>a&&c[0]<b?this._getBlendedColor((c[0]-a)/e):a<c[0]?this.includedBarColor:this.excludedBarColor;case "greater-than":case "at-least":return c[0]>a&&c[0]<b?this._getBlendedColor(1-(c[0]-a)/e):a>c[0]?this.includedBarColor:this.excludedBarColor;case "between":if(2===c.length)return c[0]>a&&c[0]<b?this._getBlendedColor(1-
(c[0]-a)/e):c[1]>a&&c[1]<b?this._getBlendedColor((c[1]-a)/e):a>=c[0]&&b<=c[1]?this.includedBarColor:this.excludedBarColor;case "not-between":if(2===c.length)return c[0]>a&&c[0]<b?this._getBlendedColor((c[0]-a)/e):c[1]>a&&c[1]<b?this._getBlendedColor(1-(c[1]-a)/e):a>c[0]&&b<c[1]?this.excludedBarColor:this.includedBarColor;default:return this.includedBarColor}};a.prototype._getBlendedColor=function(a){return h.blendColors(this.excludedBarColor,this.includedBarColor,a)};e([d.aliasOf("viewModel.average")],
a.prototype,"average",void 0);e([d.property(),f.renderable()],a.prototype,"barCreatedFunction",void 0);e([d.aliasOf("viewModel.bins")],a.prototype,"bins",void 0);e([d.property(),f.renderable()],a.prototype,"dataLines",void 0);e([d.property(),f.renderable()],a.prototype,"dataLineCreatedFunction",void 0);e([d.property({type:h,json:{type:[l.Integer],write:!0}})],a.prototype,"excludedBarColor",void 0);e([d.aliasOf("viewModel.hasTimeData")],a.prototype,"hasTimeData",void 0);e([d.property({type:h,json:{type:[l.Integer],
write:!0}})],a.prototype,"includedBarColor",void 0);e([d.property()],a.prototype,"label",void 0);e([d.aliasOf("viewModel.labelFormatFunction")],a.prototype,"labelFormatFunction",void 0);e([d.aliasOf("viewModel.max")],a.prototype,"max",void 0);e([d.aliasOf("viewModel.min")],a.prototype,"min",void 0);e([d.aliasOf("viewModel.precision")],a.prototype,"precision",void 0);e([d.aliasOf("viewModel.rangeType")],a.prototype,"rangeType",void 0);e([d.aliasOf("viewModel.standardDeviation")],a.prototype,"standardDeviation",
void 0);e([d.property(),f.renderable()],a.prototype,"standardDeviationCount",void 0);e([f.renderable(),d.aliasOf("viewModel.values")],a.prototype,"values",void 0);e([d.property(),f.renderable("viewModel.average viewModel.hasTimeData viewModel.labelFormatFunction viewModel.max viewModel.min viewModel.precision viewModel.rangeType viewModel.standardDeviation viewModel.values".split(" "))],a.prototype,"viewModel",void 0);return a=e([d.subclass("esri.widgets.HistogramRangeSlider")],a)}(d.declared(t))});