// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../renderers/visualVariables/SizeVariable ../../renderers/visualVariables/support/SizeStop ./SmartMappingSliderBase ./SizeSlider/SizeSliderViewModel ./support/utils ../support/globalCss ../support/legacyIcon ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),
function(l,g,m,z,M,N,A,v,w,B,C,n,t,O,D,E,p){var u;const x={trackFillColor:new g([149,149,149]),trackBackgroundColor:new g([224,224,224])};g=u=class extends B.SmartMappingSliderBase{constructor(a,b){super(a,b);this._maxRampFillWidth=1;this._minRampFillWidth=.2;this.messages=this._rampNode=null;this.style={...x};this.viewModel=new C}get handlesSyncedToPrimary(){return this.viewModel.handlesSyncedToPrimary}set handlesSyncedToPrimary(a){this.viewModel.handlesSyncedToPrimary=a}get label(){return this.messages?.widgetLabel??
""}set label(a){this._overrideIfSome("label",a)}get persistSizeRangeEnabled(){return this.viewModel.persistSizeRangeEnabled}set persistSizeRangeEnabled(a){this.viewModel.persistSizeRangeEnabled=a}get primaryHandleEnabled(){return this.viewModel.primaryHandleEnabled}set primaryHandleEnabled(a){this.viewModel.primaryHandleEnabled=a}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=a}castStyle(a){return{...x,...a}}static fromRendererResult(a,b){const {visualVariables:c,statistics:d}=
a,{avg:f,stddev:e}=d,h=c[0],[k,q]=n.getSizesFromVariable(h);a=a.renderer.authoringInfo.visualVariables[0];return new u({max:a.maxSliderValue,min:a.minSliderValue,stops:[{value:h.minDataValue,size:q},{value:h.maxDataValue,size:k}],histogramConfig:{average:f,standardDeviation:e,bins:b?b.bins:[]}})}updateFromRendererResult(a,b){const {visualVariables:c,statistics:d}=a,{avg:f,stddev:e}=d,h=c[0],[k,q]=n.getSizesFromVariable(h);a=a.renderer.authoringInfo.visualVariables[0];this.set({max:a.maxSliderValue,
min:a.minSliderValue,stops:[{value:h.minDataValue,size:q},{value:h.maxDataValue,size:k}],histogramConfig:{average:f,standardDeviation:e,bins:b?b.bins:[]}})}updateVisualVariable(a){const b=a.clone();var {stops:c}=this;if(!a||!c)return null;if(b.stops)return b.stops=c,b;a=c[0];c=c[c.length-1];let d=b.maxSize,f=b.minSize;if(d instanceof v){var e=d.stops;const h=c.size/e[0].size;e=e.map(k=>{k.size*=h;return k});d.stops=e}else d=c.size;if(f instanceof v){e=f.stops;const h=a.size/e[0].size;e=e.map(k=>{k.size*=
h;return k});f.stops=e}else f=a.size;b.set({maxDataValue:c.value,minDataValue:a.value,maxSize:d,minSize:f});return b}updateFromVisualVariable(a){if(a){var {maxDataValue:b,minDataValue:c,stops:d}=a;if(d)this.stops=d;else{const [f,e]=n.getSizesFromVariable(a);this.stops=[new w({value:c,size:e}),new w({value:b,size:f})]}}}render(){const {label:a,primaryHandleEnabled:b,state:c,visibleElements:d}=this,f="disabled"===c,e=this.classes("esri-size-slider",t.globalCss.widget,t.globalCss.panel,{[t.globalCss.disabled]:f,
["esri-size-slider--primary-handle"]:b,["esri-size-slider--interactive-track"]:!!d.interactiveTrack});return p.tsx("div",{"aria-label":a,class:e},f?null:this.renderContent(this._renderRamp(),"esri-size-slider__slider-container","esri-size-slider__histogram-container"))}_renderRamp(){const {style:{trackBackgroundColor:a},zoomOptions:b}=this;return p.tsx("div",{afterCreate:D.storeNode,bind:this,class:"esri-size-slider__ramp","data-node-ref":"_rampNode"},p.tsx("svg",{key:"ramp-svg",xmlns:"http://www.w3.org/2000/svg"},
p.tsx("rect",{fill:n.getFillFromColor(a),height:"100%",width:"100%",x:"0",y:"0"}),this._renderPath()),b?this.renderZoomCaps():null)}_renderPath(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:b=0}=this._rampNode;if(null!=a&&null!=b){var {primaryHandleEnabled:c,stops:d,style:{trackFillColor:f},values:e,viewModel:{max:h,min:k},_maxRampFillWidth:q,_minRampFillWidth:F}=this,r=[q,F];d[0].size<d[d.length-1].size&&r.reverse();var I=e.slice().sort((G,H)=>G>H?1:-1),[J,y]=r,[K,L]=I;r=c?n.getDynamicPathForSizeStops({max:h,
min:k,pathHeight:a,pathWidth:b,stops:d,padding:y}):n.getPathForSizeStops({bottomValue:K,bottomWidth:J,max:h,min:k,pathHeight:a,pathWidth:b,topValue:L,topWidth:y});return p.tsx("path",{d:r,fill:n.getFillFromColor(f)})}}}};l.__decorate([m.property()],g.prototype,"handlesSyncedToPrimary",null);l.__decorate([m.property()],g.prototype,"label",null);l.__decorate([m.property(),E.messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")],g.prototype,"messages",void 0);l.__decorate([m.property()],
g.prototype,"persistSizeRangeEnabled",null);l.__decorate([m.property()],g.prototype,"primaryHandleEnabled",null);l.__decorate([m.property()],g.prototype,"stops",null);l.__decorate([m.property()],g.prototype,"style",void 0);l.__decorate([z.cast("style")],g.prototype,"castStyle",null);l.__decorate([m.property()],g.prototype,"viewModel",void 0);return g=u=l.__decorate([A.subclass("esri.widgets.smartMapping.SizeSlider")],g)});