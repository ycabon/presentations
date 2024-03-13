// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./SmartMappingSliderBase ./ColorSlider/ColorSliderViewModel ../support/globalCss ../support/legacyIcon ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),function(e,h,c,v,w,q,r,t,m,x,y,u,k){var n;c=n=class extends r.SmartMappingSliderBase{constructor(a,b){super(a,b);this.messages=
null;this.viewModel=new t;this._bgFillId=`${this.id}-bg-fill`;this._rampFillId=`${this.id}-linear-gradient`}get handlesSyncedToPrimary(){return this.viewModel.handlesSyncedToPrimary}set handlesSyncedToPrimary(a){this.viewModel.handlesSyncedToPrimary=a}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get primaryHandleEnabled(){return this.viewModel.primaryHandleEnabled}set primaryHandleEnabled(a){this.viewModel.primaryHandleEnabled=a}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=
a}static fromRendererResult(a,b){const {visualVariable:{stops:f},statistics:g}=a,{avg:d,stddev:l}=g;a=a.renderer.authoringInfo.visualVariables.find(p=>"color"===p.type);return new n({max:a.maxSliderValue,min:a.minSliderValue,stops:f,histogramConfig:{average:d,standardDeviation:l,bins:b?b.bins:[]},primaryHandleEnabled:"high-to-low"!==a.theme})}updateFromRendererResult(a,b){const {visualVariable:{stops:f},statistics:g}=a,{avg:d,stddev:l}=g;a=a.renderer.authoringInfo.visualVariables.find(p=>"color"===
p.type);this.set({max:a.maxSliderValue,min:a.minSliderValue,stops:f,histogramConfig:{average:d,standardDeviation:l,bins:b?b.bins:[]},primaryHandleEnabled:"high-to-low"!==a.theme})}render(){const {label:a,primaryHandleEnabled:b,state:f,visibleElements:g}=this,d="disabled"===f,l=this.classes("esri-color-slider",m.globalCss.widget,m.globalCss.panel,{[m.globalCss.disabled]:d,["esri-color-slider--primary-handle"]:b,["esri-color-slider--interactive-track"]:!!g.interactiveTrack});return k.tsx("div",{"aria-label":a,
class:l},d?null:this.renderContent(this._renderRamp(),"esri-color-slider__slider-container","esri-color-slider__histogram-container"))}_renderRamp(){const {_bgFillId:a,_rampFillId:b,viewModel:f,zoomOptions:g}=this,d=f.getStopInfo();return k.tsx("div",{class:"esri-color-slider__ramp"},k.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},k.tsx("defs",null,this.renderRampFillDefinition(b,d),this.renderBackgroundFillDefinition(a)),k.tsx("rect",{fill:`url(#${a})`,height:"100%",width:"100%",x:"0",y:"0"}),k.tsx("rect",
{fill:`url(#${b})`,height:"100%",width:"100%",x:"0",y:"0"})),g?this.renderZoomCaps():null)}};e.__decorate([h.property()],c.prototype,"handlesSyncedToPrimary",null);e.__decorate([h.property()],c.prototype,"label",null);e.__decorate([h.property(),u.messageBundle("esri/widgets/smartMapping/ColorSlider/t9n/ColorSlider")],c.prototype,"messages",void 0);e.__decorate([h.property()],c.prototype,"primaryHandleEnabled",null);e.__decorate([h.property()],c.prototype,"stops",null);e.__decorate([h.property()],
c.prototype,"viewModel",void 0);return c=n=e.__decorate([q.subclass("esri.widgets.smartMapping.ColorSlider")],c)});