// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../renderers/visualVariables/support/SizeStop ../../symbols/support/cimSymbolUtils ./SmartMappingSliderBase ./BinaryColorSizeSlider/BinaryColorSizeSliderViewModel ./support/utils ../support/globalCss ../support/legacyIcon ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),
function(k,d,m,C,I,J,D,z,A,E,F,v,w,K,G,H,q){var x;const B={trackBackgroundColor:new d([224,224,224]),trackAboveFillColor:new d([149,149,149]),trackBelowFillColor:new d([149,149,149])};d=x=class extends E.SmartMappingSliderBase{constructor(a,b){super(a,b);this._minRampFillWidth=.2;this.messages=this._rampNode=null;this.style={...B};this.viewModel=new F;this._rampFillId=`${this.id}-linear-gradient`}get handlesSyncedToPrimary(){return this.viewModel.handlesSyncedToPrimary}set handlesSyncedToPrimary(a){this.viewModel.handlesSyncedToPrimary=
a}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get persistSizeRangeEnabled(){return this.viewModel.persistSizeRangeEnabled}set persistSizeRangeEnabled(a){this.viewModel.persistSizeRangeEnabled=a}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=a}castStyle(a){return{...B,...a}}static fromRendererResult(a,b){const {size:{visualVariables:c},statistics:e}=a,{avg:f,stddev:l}=e,r=c[0].stops;var g=a.renderer.authoringInfo.visualVariables[0];
const y=g.minSliderValue;g=g.maxSliderValue;a=a.renderer.classBreakInfos;let t,u=null;const n=h=>"cim"===h.type?A.getCIMSymbolColor(h):h.symbolLayers?(h.symbolLayers?.at(0)).material?.color:h.color;if(1<a.length){var p=a[1].symbol;t=n(a[0].symbol);p=n(p)}1===a.length&&(u=n(a[0].symbol));return new x({max:g,min:y,stops:r,histogramConfig:{average:f,standardDeviation:l,bins:b?b.bins:[]},style:{trackAboveFillColor:p,trackBelowFillColor:t,trackFillColor:u},handlesSyncedToPrimary:!0,persistSizeRangeEnabled:!0})}updateFromRendererResult(a,
b){const {size:{visualVariables:c},statistics:e}=a,{avg:f,stddev:l}=e,r=c[0].stops;var g=a.renderer.authoringInfo.visualVariables[0];const y=g.minSliderValue;g=g.maxSliderValue;a=a.renderer.classBreakInfos;let t,u=null;const n=h=>"cim"===h.type?A.getCIMSymbolColor(h):h.symbolLayers?(h.symbolLayers?.at(0)).material?.color:h.color;if(1<a.length){var p=a[1].symbol;t=n(a[0].symbol);p=n(p)}1===a.length&&(u=n(a[0].symbol));this.set({max:g,min:y,stops:r,histogramConfig:{average:f,standardDeviation:l,bins:b?
b.bins:[]},style:{trackAboveFillColor:p,trackBelowFillColor:t,trackFillColor:u},handlesSyncedToPrimary:!0,persistSizeRangeEnabled:!0})}updateRenderer(a){if("univariate-color-size"!==a.authoringInfo?.type||"above-and-below"!==a.authoringInfo?.univariateTheme)return console.error("Input renderer must be a univariate renderer with an above-and-below theme."),null;a=a.clone();var b=a.visualVariables.find(f=>"size"===f.type&&"outline"!==f.target&&f.stops);const {stops:c}=this;if(!b||!c)return console.error("No size stops available."),
null;const e=a.visualVariables.indexOf(b);a.visualVariables.splice(e,1);b.stops=c;a.visualVariables.push(b);b=c[5===c.length?2:1].value;a.classBreakInfos[0].maxValue=b;a.classBreakInfos[1].minValue=b;return a}updateFromVisualVariable(a){if(a){var {maxDataValue:b,minDataValue:c,stops:e}=a;if(e)this.stops=e;else{const [f,l]=v.getSizesFromVariable(a);this.stops=[new z({value:c,size:l}),new z({value:b,size:f})]}}}render(){const {label:a,state:b,viewModel:{primaryHandleEnabled:c},visibleElements:e}=this,
f="disabled"===b,l=this.classes("esri-binary-color-size-slider",w.globalCss.widget,w.globalCss.panel,{[w.globalCss.disabled]:f,["esri-binary-color-size-slider--primary-handle"]:c,["esri-binary-color-size-slider--interactive-track"]:!!e.interactiveTrack});return q.tsx("div",{"aria-label":a,class:l},f?null:this.renderContent(this._renderRamp(),"esri-binary-color-size-slider__slider-container","esri-binary-color-size-slider__histogram-container"))}_renderRamp(){const {style:{trackBackgroundColor:a},
zoomOptions:b}=this;return q.tsx("div",{afterCreate:G.storeNode,bind:this,class:"esri-binary-color-size-slider__ramp","data-node-ref":"_rampNode"},q.tsx("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},q.tsx("rect",{fill:v.getFillFromColor(a),height:"100%",width:"100%",x:"0",y:"0"}),this._renderPrimaryRamp(),this._renderPath()),b?this.renderZoomCaps():null)}_renderPrimaryRamp(){const {_rampFillId:a,style:{trackAboveFillColor:b,trackBelowFillColor:c},viewModel:e}=this;return[q.tsx("defs",
null,this.renderRampFillDefinition(a,e.getGradientStopInfo(b,c)))]}_renderPath(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:b=0}=this._rampNode;if(null!=a&&null!=b){var {stops:c,viewModel:{max:e,min:f},_rampFillId:l,_minRampFillWidth:r}=this,g=v.getDynamicPathForSizeStops({max:e,min:f,pathHeight:a,pathWidth:b,stops:c,padding:r});return q.tsx("path",{d:g,fill:`url(#${l})`})}}}};k.__decorate([m.property()],d.prototype,"handlesSyncedToPrimary",null);k.__decorate([m.property()],d.prototype,
"label",null);k.__decorate([m.property(),H.messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],d.prototype,"messages",void 0);k.__decorate([m.property()],d.prototype,"persistSizeRangeEnabled",null);k.__decorate([m.property()],d.prototype,"stops",null);k.__decorate([m.property()],d.prototype,"style",void 0);k.__decorate([C.cast("style")],d.prototype,"castStyle",null);k.__decorate([m.property()],d.prototype,"viewModel",void 0);return d=x=k.__decorate([D.subclass("esri.widgets.smartMapping.BinaryColorSizeSlider")],
d)});