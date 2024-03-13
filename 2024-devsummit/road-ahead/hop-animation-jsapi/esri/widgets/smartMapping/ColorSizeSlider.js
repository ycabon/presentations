// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Error ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../renderers/visualVariables/support/ColorSizeStop ../../renderers/visualVariables/support/ColorStop ../../renderers/visualVariables/support/SizeStop ./SmartMappingSliderBase ./ColorSizeSlider/ColorSizeSliderViewModel ./support/utils ../support/globalCss ../support/legacyIcon ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),
function(q,z,t,p,N,O,E,A,B,C,F,G,D,x,P,H,I,r){var y;p=y=class extends F.SmartMappingSliderBase{constructor(a,b){super(a,b);this._backgroundFillColor="#e0e0e0";this._minRampFillWidth=.2;this._rampNode=null;this._maxRampFillWidth=1;this.messages=null;this.viewModel=new G;this._bgFillId=`${this.id}-bg-fill`;this._rampFillId=`${this.id}-linear-gradient`}get handlesSyncedToPrimary(){return this.viewModel.handlesSyncedToPrimary}set handlesSyncedToPrimary(a){this.viewModel.handlesSyncedToPrimary=a}get label(){return this.messages?.widgetLabel??
""}set label(a){this._overrideIfSome("label",a)}get persistSizeRangeEnabled(){return this.viewModel.persistSizeRangeEnabled}set persistSizeRangeEnabled(a){this.viewModel.persistSizeRangeEnabled=a}get primaryHandleEnabled(){return this.viewModel.primaryHandleEnabled}set primaryHandleEnabled(a){this.viewModel.primaryHandleEnabled=a}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=a}static fromRendererResult(a,b){var h=a.size.visualVariables,c=a.renderer.authoringInfo.univariateTheme;
const f=a.color?.visualVariable.stops;var {statistics:e}=a;const {avg:d,stddev:l}=e;if(!f)throw new z("ColorSizeSlider-fromRendererResult:invalid-renderer-result","'result' must include 'color' variable.");c="above-and-below"===c;e=a.renderer.authoringInfo.visualVariables[0];a=e.minSliderValue;e=e.maxSliderValue;const m=h.find(g=>"outline"!==g?.target&&!(g?.axis&&!g?.field&&!g?.valueExpression)&&(g?.field||g?.valueExpression)),k=m.stops;h=f.map((g,n)=>{const {color:u,label:v,value:w}=g;return new A({color:u,
label:v,value:w,size:k&&0<k.length?k[n].size:0===n?m.minSize:n===f.length-1?m.maxSize:null})});return new y({max:e,min:a,stops:h,primaryHandleEnabled:c,handlesSyncedToPrimary:c,persistSizeRangeEnabled:c,histogramConfig:{average:d,standardDeviation:l,bins:b?b.bins:[]}})}updateFromRendererResult(a,b){var h=a.size.visualVariables,c=a.renderer.authoringInfo.univariateTheme;const f=a.color?.visualVariable.stops;var {statistics:e}=a;const {avg:d,stddev:l}=e;if(!f)throw new z("ColorSizeSlider-fromRendererResult:invalid-renderer-result",
"'result' must include 'color' variable.");c="above-and-below"===c;e=a.renderer.authoringInfo.visualVariables[0];a=e.minSliderValue;e=e.maxSliderValue;const m=h.find(g=>"outline"!==g?.target&&!(g?.axis&&!g?.field&&!g?.valueExpression)&&(g?.field||g?.valueExpression)),k=m.stops;h=f.map((g,n)=>{const {color:u,label:v,value:w}=g;return new A({color:u,label:v,value:w,size:k&&0<k.length?k[n].size:0===n?m.minSize:n===f.length-1?m.maxSize:null})});this.set({max:e,min:a,stops:h,primaryHandleEnabled:c,handlesSyncedToPrimary:c,
persistSizeRangeEnabled:c,histogramConfig:{average:d,standardDeviation:l,bins:b?b.bins:[]}})}updateRenderer(a){const {stops:b}=this,h=b[0],c=b[b.length-1];var f=b[Math.floor(b.length/2)];a=a.clone();const e=a.visualVariables.map(d=>{if("size"===d.type){if("outline"===d?.target||d?.axis&&!d?.field&&!d?.valueExpression)return d;null!=d.minSize&&null!=d.maxSize?d.set({maxDataValue:c.value,minDataValue:h.value,maxSize:c.size,minSize:h.size}):d.stops&&d.set({stops:b.map(l=>{const {label:m,size:k,value:g}=
l;return new C({label:m,size:k,value:g})})})}else"color"===d.type&&d.set({stops:this.stops.map(l=>{const {color:m,label:k,value:g}=l;return new B({color:m,label:k,value:g})})});return d});a.visualVariables=e;1<a.classBreakInfos.length&&(f=f.value,a.classBreakInfos[0].maxValue=f,a.classBreakInfos[1].minValue=f);return a}updateVisualVariables(a){return a.map(b=>{const h=b.clone();if("size"===b.type){if("outline"===b?.target||b?.axis&&!b?.field&&!b?.valueExpression)return h;if(null!=b.minSize&&null!=
b.maxSize){var {stops:c}=this;b=c[0];c=c[c.length-1];h.set({maxDataValue:c.value,minDataValue:b.value,maxSize:c.size,minSize:b.size})}else b.stops&&h.set({stops:this.stops.map(f=>{const {label:e,size:d,value:l}=f;return new C({label:e,size:d,value:l})})})}else"color"===b.type&&h.set({stops:this.stops.map(f=>{const {color:e,label:d,value:l}=f;return new B({color:e,label:d,value:l})})});return h})}render(){const {label:a,primaryHandleEnabled:b,state:h,visibleElements:c}=this,f="disabled"===h,e=this.classes("esri-color-size-slider",
x.globalCss.widget,x.globalCss.panel,{[x.globalCss.disabled]:f,["esri-color-size-slider--primary-handle"]:b,["esri-color-size-slider--interactive-track"]:!!c.interactiveTrack});return r.tsx("div",{"aria-label":a,class:e},f?null:this.renderContent(this._renderRamp(),"esri-color-size-slider__slider-container","esri-color-size-slider__histogram-container"))}_renderRamp(){const {_bgFillId:a,_rampFillId:b,viewModel:h,zoomOptions:c}=this,f=h.getStopInfo();return r.tsx("div",{afterCreate:H.storeNode,bind:this,
class:"esri-color-size-slider__ramp","data-node-ref":"_rampNode"},r.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},r.tsx("defs",null,this.renderRampFillDefinition(b,f),this.renderBackgroundFillDefinition(a)),r.tsx("rect",{fill:this._backgroundFillColor,height:"100%",width:"100%",x:"0",y:"0"}),this._renderPaths()),c?this.renderZoomCaps():null)}_renderPaths(){if(this._rampNode){var {offsetHeight:a=0,offsetWidth:b=0}=this._rampNode;if(null!=a&&null!=b){var {primaryHandleEnabled:h,stops:c,values:f,viewModel:{max:e,
min:d},_bgFillId:l,_maxRampFillWidth:m,_minRampFillWidth:k,_rampFillId:g}=this,n=[m,k];c[0].size<c[c.length-1].size&&n.reverse();var u=f.slice().sort((J,K)=>J>K?1:-1),[v,w]=n,[L,M]=u;n=h?D.getDynamicPathForSizeStops({max:e,min:d,pathHeight:a,pathWidth:b,stops:c,padding:k}):D.getPathForSizeStops({bottomValue:L,bottomWidth:v,max:e,min:d,pathHeight:a,pathWidth:b,topValue:M,topWidth:w});return[r.tsx("path",{d:n,fill:`url(#${l})`,key:"background"}),r.tsx("path",{d:n,fill:`url(#${g})`,key:"fill"})]}}}};
q.__decorate([t.property()],p.prototype,"label",null);q.__decorate([t.property(),I.messageBundle("esri/widgets/smartMapping/ColorSizeSlider/t9n/ColorSizeSlider")],p.prototype,"messages",void 0);q.__decorate([t.property()],p.prototype,"persistSizeRangeEnabled",null);q.__decorate([t.property()],p.prototype,"primaryHandleEnabled",null);q.__decorate([t.property()],p.prototype,"stops",null);q.__decorate([t.property()],p.prototype,"viewModel",void 0);return p=y=q.__decorate([E.subclass("esri.widgets.smartMapping.ColorSizeSlider")],
p)});