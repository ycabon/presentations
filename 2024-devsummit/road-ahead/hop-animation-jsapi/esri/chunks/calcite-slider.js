// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./guid ./dom ./form ./interactive ./key ./label2 ./loadable ./locale ./math ./observers".split(" "),function(C,l,F,w,z,A,L,D,E,B,x,M){function G(a,b,c){const d=b[0]-a[0];a=b[1]-a[1];return d?(3*a/d-c)/2:c}function H(a,b,c,d,k){const [e,g]=a,[h,f]=b;a=(h-e)/3;c=k([e+a,g+a*c]).join(",");d=k([h-a,f-a*d]).join(",");k=k([h,f]).join(",");return`C ${c} ${d} ${k}`}function N({width:a,height:b,min:c,max:d}){const k=d[0]-c[0],e=d[1]-c[1];return g=>[(g[0]-c[0])/k*a,b-g[1]/e*
b]}function O(a){const [b,c]=a[0];return a.reduce(({min:d,max:k},[e,g])=>({min:[Math.min(d[0],e),Math.min(d[1],g)],max:[Math.max(k[0],e),Math.max(k[1],g)]}),{min:[b,c],max:[b,c]})}function P({data:a,min:b,max:c,t:d}){if(0===a.length)return"";const [k,e]=d(a[0]),[g,h]=d(b);[b]=d(c);let f,m,n;c=a.reduce((t,q,p)=>{m=a[p-2];n=a[p-1];if(1<p){p=n[0]-m[0];const v=q[0]-n[0],y=(n[1]-m[1])/(p||0>v&&0);q=(q[1]-n[1])/(v||0>p&&0);q=(Math.sign(y)+Math.sign(q))*Math.min(Math.abs(y),Math.abs(q),.5*Math.abs((y*v+
q*p)/(p+v)))||0;p=void 0===f?G(m,n,q):f;p=H(m,n,p,q,d);f=q;return`${t} ${p}`}return t},`M ${g},${h} L ${g},${e} L ${k},${e}`);var r=a[a.length-1];r=H(n,r,f,G(n,r,f),d);return`${c} ${r} L ${b},${h} Z`}function I(){"undefined"!==typeof customElements&&["calcite-graph"].forEach(a=>{switch(a){case "calcite-graph":customElements.get(a)||customElements.define(a,Q)}})}function u(a){return Array.isArray(a)}function J(){"undefined"!==typeof customElements&&["calcite-slider","calcite-graph"].forEach(a=>{switch(a){case "calcite-slider":customElements.get(a)||
customElements.define(a,K);break;case "calcite-graph":customElements.get(a)||I()}})}const Q=l.proxyCustomElement(class extends l.H{constructor(){super();this.__registerHost();this.__attachShadow();this.graphId=`calcite-graph-${F.guid()}`;this.resizeObserver=M.createObserver("resize",()=>l.forceUpdate(this));this.data=[];this.max=this.min=this.highlightMax=this.highlightMin=this.colorStops=void 0}connectedCallback(){this.resizeObserver?.observe(this.el)}disconnectedCallback(){this.resizeObserver?.disconnect()}render(){const {data:a,
colorStops:b,el:c,highlightMax:d,highlightMin:k,min:e,max:g}=this,h=this.graphId,{clientHeight:f,clientWidth:m}=c;if(!a||0===a.length)return l.h("svg",{"aria-hidden":"true",class:"svg",height:f,preserveAspectRatio:"none",viewBox:`0 0 ${m} ${f}`,width:m});const {min:n,max:r}=O(a);var t=n,q=r;if(e<n[0]||e>n[0])t=[e,0];if(g>r[0]||g<r[0])q=[g,r[1]];var p=N({min:t,max:q,width:m,height:f});[t]=p([k,q[1]]);[q]=p([d,q[1]]);p=P({data:a,min:n,max:r,t:p});const v=b?`url(#linear-gradient-${h})`:void 0;return l.h("svg",
{"aria-hidden":"true",class:"svg",height:f,preserveAspectRatio:"none",viewBox:`0 0 ${m} ${f}`,width:m},b?l.h("defs",null,l.h("linearGradient",{id:`linear-gradient-${h}`,x1:"0",x2:"1",y1:"0",y2:"0"},b.map(({offset:y,color:R,opacity:S})=>l.h("stop",{offset:`${100*y}%`,"stop-color":R,"stop-opacity":S})))):null,void 0!==k?[l.h("mask",{height:"100%",id:`${h}1`,width:"100%",x:"0%",y:"0%"},l.h("path",{d:`\n            M 0,0\n            L ${t-1},0\n            L ${t-1},${f}\n            L 0,${f}\n            Z\n          `,
fill:"white"})),l.h("mask",{height:"100%",id:`${h}2`,width:"100%",x:"0%",y:"0%"},l.h("path",{d:`\n            M ${t+1},0\n            L ${q-1},0\n            L ${q-1},${f}\n            L ${t+1}, ${f}\n            Z\n          `,fill:"white"})),l.h("mask",{height:"100%",id:`${h}3`,width:"100%",x:"0%",y:"0%"},l.h("path",{d:`\n                M ${q+1},0\n                L ${m},0\n                L ${m},${f}\n                L ${q+1}, ${f}\n                Z\n              `,fill:"white"})),l.h("path",
{class:"graph-path",d:p,fill:v,mask:`url(#${h}1)`}),l.h("path",{class:"graph-path--highlight",d:p,fill:v,mask:`url(#${h}2)`}),l.h("path",{class:"graph-path",d:p,fill:v,mask:`url(#${h}3)`})]:l.h("path",{class:"graph-path",d:p,fill:v}))}get el(){return this}static get style(){return":host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-color-brand);opacity:0.5}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-graph",{data:[16],colorStops:[16],highlightMin:[2,"highlight-min"],highlightMax:[2,"highlight-max"],min:[514],max:[514]}]);I();const K=l.proxyCustomElement(class extends l.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteSliderInput=l.createEvent(this,"calciteSliderInput",6);this.calciteSliderChange=l.createEvent(this,"calciteSliderChange",6);this.activeProp="value";this.guid=`calcite-slider-${F.guid()}`;this.onThumbBlur=()=>{this.activeProp=null};this.onThumbFocus=
a=>{this.activeProp=a.currentTarget.getAttribute("data-value-prop")};this.onThumbPointerDown=a=>{this.pointerDownDragStart(a,a.currentTarget.getAttribute("data-value-prop"))};this.onTrackPointerDown=a=>{this.pointerDownDragStart(a,"minMaxValue")};this.dragUpdate=a=>{if(!this.disabled&&(a.preventDefault(),this.dragProp)){var b=this.translate(a.clientX||a.pageX);u(this.value)&&"minMaxValue"===this.dragProp?this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange?(a=b-this.minValueDragRange,
b+=this.maxValueDragRange,b<=this.max&&a>=this.min&&b-a===this.minMaxValueRange&&this.setValue({minValue:this.clamp(a,"minValue"),maxValue:this.clamp(b,"maxValue")})):(this.minValueDragRange=b-this.minValue,this.maxValueDragRange=this.maxValue-b,this.minMaxValueRange=this.maxValue-this.minValue):this.setValue({[this.dragProp]:this.clamp(b,this.dragProp)})}};this.pointerUpDragEnd=a=>{!this.disabled&&w.isPrimaryPointerButton(a)&&this.dragEnd(a)};this.dragEnd=a=>{this.disabled||(this.removeDragListeners(),
this.focusActiveHandle(a.clientX),this.lastDragPropValue!=this[this.dragProp]&&this.emitChange(),this.minMaxValueRange=this.maxValueDragRange=this.minValueDragRange=this.lastDragPropValue=this.dragProp=null)};this.storeTrackRef=a=>{this.trackEl=a};this.storeThumbRef=a=>{a&&("minValue"===a.getAttribute("data-value-prop")?this.minHandle=a:this.maxHandle=a)};this.formatValue=a=>{B.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};
return B.numberStringFormatter.localize(a.toString())};this.disabled=!1;this.form=void 0;this.hasHistogram=this.groupSeparator=!1;this.histogramStops=this.histogram=void 0;this.labelTicks=this.labelHandles=!1;this.max=100;this.maxValue=this.maxLabel=void 0;this.min=0;this.minValue=this.minLabel=void 0;this.mirrored=!1;this.pageStep=this.numberingSystem=this.name=void 0;this.snap=this.required=this.precise=!1;this.step=1;this.ticks=void 0;this.value=0;this.scale="m";this.effectiveLocale="";this.maxValueDragRange=
this.minValueDragRange=this.minMaxValueRange=null;this.tickValues=[]}histogramWatcher(a){this.hasHistogram=!!a}ticksWatcher(){this.tickValues=this.generateTickValues()}valueHandler(){this.setMinMaxFromValue()}minMaxValueHandler(){this.setValueFromMinMax()}connectedCallback(){A.connectInteractive(this);B.connectLocalized(this);this.setMinMaxFromValue();this.setValueFromMinMax();D.connectLabel(this);z.connectForm(this)}disconnectedCallback(){A.disconnectInteractive(this);D.disconnectLabel(this);z.disconnectForm(this);
B.disconnectLocalized(this);this.removeDragListeners()}componentWillLoad(){E.setUpLoadableComponent(this);u(this.value)||(this.value=this.snap?this.getClosestStep(this.value):this.clamp(this.value));this.ticksWatcher();this.histogramWatcher(this.histogram);z.afterConnectDefaultValueSet(this,this.value)}componentDidLoad(){E.setComponentLoaded(this)}componentDidRender(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),u(this.value)&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&
!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels()));this.hideObscuredBoundingTickLabels();A.updateHostInteraction(this)}render(){const a=this.el.id||this.guid,b=u(this.value)?this.maxValue:this.value,c=this.minValue||this.min,d=this.shouldUseMinValue(),k=100*this.getUnitInterval(d?this.minValue:c),e=100*this.getUnitInterval(b),g=this.shouldMirror(),h=u(this.value);var f=this.buildThumbType("max");f=this.renderThumb({type:f,thumbPlacement:f.includes("histogram")?"below":"above",maxInterval:e,
minInterval:k,mirror:g});var m=this.buildThumbType("min");m=h&&this.renderThumb({type:m,thumbPlacement:m.includes("histogram")||m.includes("precise")?"below":"above",maxInterval:e,minInterval:k,mirror:g});return l.h(l.Host,{id:a,onTouchStart:this.handleTouchStart},l.h(A.InteractiveContainer,{disabled:this.disabled},l.h("div",{"aria-label":D.getLabelText(this),class:{container:!0,["container--range"]:h,[`scale--${this.scale}`]:!0}},this.renderGraph(),l.h("div",{class:"track",ref:this.storeTrackRef},
l.h("div",{class:"track__range",onPointerDown:this.onTrackPointerDown,style:{left:`${g?100-e:k}%`,right:`${g?k:100-e}%`}}),l.h("div",{class:"ticks"},this.tickValues.map(n=>{const r=`${100*this.getUnitInterval(n)}%`;let t=n>=c&&n<=b;d&&(t=n>=this.minValue&&n<=this.maxValue);return l.h("span",{class:{tick:!0,["tick--active"]:t},style:{left:g?"":r,right:g?r:""}},this.renderTickLabel(n))}))),l.h("div",{class:"thumb-container"},m,f,l.h(z.HiddenFormInputSlot,{component:this})))))}renderThumb({type:a,mirror:b,
thumbPlacement:c,minInterval:d,maxInterval:k}){var e=a.includes("labeled");const g=a.includes("precise"),h=a.includes("min");var f=u(this.value),m=h?this.minValue:f?this.maxValue:this.value;const n=h?"minValue":f?"maxValue":"value";f=h?this.minLabel:f?this.maxLabel:this.minLabel;const r=h?this.minValue:m;m=h?this.formatValue(this.minValue):this.formatValue(m);b=h?{left:`${b?100-d:d}%`}:{right:`${b?k:100-k}%`};d=`${"handle__label"} ${h?"handle__label--minValue":"handle__label--value"}`;e=[...(e?[l.h("span",
{"aria-hidden":"true",class:d},m),l.h("span",{"aria-hidden":"true",class:`${d} ${"static"}`},m),l.h("span",{"aria-hidden":"true",class:`${d} ${"transformed"}`},m)]:[]),l.h("div",{class:"handle"}),g&&l.h("div",{class:"handle-extension"})];"below"===c&&e.reverse();return l.h("div",{"aria-disabled":this.disabled,"aria-label":f,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":r,class:{thumb:!0,["thumb--value"]:!h,["thumb--active"]:"minMaxValue"!==this.lastDragProp&&
this.dragProp===n,["thumb--precise"]:g,["thumb--minValue"]:h},"data-value-prop":n,key:a,onBlur:this.onThumbBlur,onFocus:this.onThumbFocus,onPointerDown:this.onThumbPointerDown,role:"slider",style:b,tabIndex:0,ref:this.storeThumbRef},e)}renderGraph(){return this.histogram?l.h("calcite-graph",{class:"graph",colorStops:this.histogramStops,data:this.histogram,highlightMax:u(this.value)?this.maxValue:this.value,highlightMin:u(this.value)?this.minValue:this.min,max:this.max,min:this.min}):null}renderTickLabel(a){const {hasHistogram:b,
labelHandles:c,labelTicks:d,max:k,min:e,precise:g,value:h}=this,f=u(h),m=a===e,n=a===k,r=m||n;return d&&(!(b||!r&&g&&f)||b&&(r||!g&&!c))?l.h("span",{class:{tick__label:!0,["tick__label--min"]:m,["tick__label--max"]:n}},this.formatValue(a)):null}keyDownHandler(a){const b=this.shouldMirror(),{activeProp:c,max:d,min:k,pageStep:e,step:g}=this,h=this[c],{key:f}=a;if(L.isActivationKey(f))a.preventDefault();else{var m;"ArrowUp"===f||"ArrowRight"===f?m=h+g*(b&&"ArrowRight"===f?-1:1):"ArrowDown"===f||"ArrowLeft"===
f?m=h-g*(b&&"ArrowLeft"===f?-1:1):"PageUp"===f?e&&(m=h+e):"PageDown"===f?e&&(m=h-e):"Home"===f?m=k:"End"===f&&(m=d);isNaN(m)||(a.preventDefault(),a=Number(m.toFixed(x.decimalPlaces(g))),this.setValue({[c]:this.clamp(a,c)}))}}pointerDownHandler(a){if(!this.disabled&&w.isPrimaryPointerButton(a)){a=a.clientX||a.pageX;var b=this.translate(a),c="value";u(this.value)&&(c=b>=this.minValue&&b<=this.maxValue&&"minMaxValue"===this.lastDragProp?"minMaxValue":Math.abs(this.maxValue-b)<Math.abs(this.minValue-
b)||b>this.maxValue?"maxValue":"minValue");this.lastDragPropValue=this[c];this.dragStart(c);this.el.shadowRoot.querySelector(".thumb:active")||this.setValue({[c]:this.clamp(b,c)});this.focusActiveHandle(a)}}handleTouchStart(a){a.preventDefault()}async setFocus(){await E.componentFocusable(this);(this.minHandle?this.minHandle:this.maxHandle)?.focus()}buildThumbType(a){a=[a];this.labelHandles&&a.push("labeled");this.precise&&a.push("precise");this.hasHistogram&&a.push("histogram");return a.join("-")}setValueFromMinMax(){const {minValue:a,
maxValue:b}=this;"number"===typeof a&&"number"===typeof b&&(this.value=[a,b])}setMinMaxFromValue(){const {value:a}=this;u(a)&&(this.minValue=a[0],this.maxValue=a[1])}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){return u(this.value)?this.hasHistogram&&0===this.maxValue||!this.hasHistogram&&0===this.minValue:!1}getTickDensity(){const a=(this.max-this.min)/this.ticks/250;return 1>a?1:a}generateTickValues(){var a=this.ticks??0;if(0>=a)return[];
const b=[this.min];var c=this.getTickDensity();a*=c;for(c=this.min;c<this.max;)c+=a,b.push(Math.min(c,this.max));b.includes(this.max)||b.push(this.max);return b}pointerDownDragStart(a,b){w.isPrimaryPointerButton(a)&&this.dragStart(b)}dragStart(a){this.activeProp=this.lastDragProp=this.dragProp=a;window.addEventListener("pointermove",this.dragUpdate);window.addEventListener("pointerup",this.pointerUpDragEnd);window.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(a){switch(this.dragProp){case "minValue":this.minHandle.focus();
break;case "maxValue":case "value":this.maxHandle.focus();break;case "minMaxValue":this.getClosestHandle(a).focus()}}emitInput(){this.calciteSliderInput.emit()}emitChange(){this.calciteSliderChange.emit()}removeDragListeners(){window.removeEventListener("pointermove",this.dragUpdate);window.removeEventListener("pointerup",this.pointerUpDragEnd);window.removeEventListener("pointercancel",this.dragEnd)}setValue(a){let b;Object.keys(a).forEach(c=>{const d=a[c];b||=this[c]!==d;this[c]=d});b&&(this.dragProp||
this.emitChange(),this.emitInput())}clamp(a,b){a=x.clamp(a,this.min,this.max);"maxValue"===b&&(a=Math.max(a,this.minValue));"minValue"===b&&(a=Math.min(a,this.maxValue));return a}translate(a){var b=this.max-this.min;const {left:c,width:d}=this.trackEl.getBoundingClientRect();a=(a-c)/d;const k=this.shouldMirror();b=this.clamp(this.min+b*(k?1-a:a));b=Number(b.toFixed(x.decimalPlaces(this.step)));this.snap&&this.step&&(b=this.getClosestStep(b));return b}getClosestStep(a){a=Number(this.clamp(a).toFixed(x.decimalPlaces(this.step)));
this.step&&(a=Number(this.clamp(Math.round(a/this.step)*this.step).toFixed(x.decimalPlaces(this.step))));return a}getClosestHandle(a){return this.getDistanceX(this.maxHandle,a)>this.getDistanceX(this.minHandle,a)?this.minHandle:this.maxHandle}getDistanceX(a,b){return Math.abs(a.getBoundingClientRect().left-b)}getFontSizeForElement(a){return Number(window.getComputedStyle(a).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(a){a=this.clamp(a);return(a-this.min)/(this.max-this.min)}adjustHostObscuredHandleLabel(a){const b=
this.el.shadowRoot.querySelector(`.handle__label--${a}`);var c=this.el.shadowRoot.querySelector(`.handle__label--${a}.static`);a=this.el.shadowRoot.querySelector(`.handle__label--${a}.transformed`);c=c.getBoundingClientRect();c=this.getHostOffset(c.left,c.right);b.style.transform=`translateX(${c}px)`;a.style.transform=`translateX(${c}px)`}hyphenateCollidingRangeHandleLabels(){var {shadowRoot:a}=this.el,b=this.shouldMirror(),c=b?"value":"minValue",d=b?"minValue":"value";b=a.querySelector(`.handle__label--${c}`);
var k=a.querySelector(`.handle__label--${c}.static`);c=a.querySelector(`.handle__label--${c}.transformed`);var e=this.getHostOffset(k.getBoundingClientRect().left,k.getBoundingClientRect().right);k=a.querySelector(`.handle__label--${d}`);var g=a.querySelector(`.handle__label--${d}.static`);a=a.querySelector(`.handle__label--${d}.transformed`);var h=this.getHostOffset(g.getBoundingClientRect().left,g.getBoundingClientRect().right);d=this.getFontSizeForElement(b);g=this.getRangeLabelOverlap(c,a);d/=
2;if(0<g)if(b.classList.add("hyphen","hyphen--wrap"),0===h&&0===e){e=g/2-d;e=-1===Math.sign(e)?Math.abs(e):-e;h=this.getHostOffset(c.getBoundingClientRect().left+e-d,c.getBoundingClientRect().right+e-d);g/=2;const f=this.getHostOffset(a.getBoundingClientRect().left+g,a.getBoundingClientRect().right+g);0!==h&&(e+=h,g+=h);0!==f&&(e+=f,g+=f);b.style.transform=`translateX(${e}px)`;c.style.transform=`translateX(${e-d}px)`;k.style.transform=`translateX(${g}px)`;a.style.transform=`translateX(${g}px)`}else if(0<
e||0<h)b.style.transform=`translateX(${e+d}px)`,k.style.transform=`translateX(${g+h}px)`,a.style.transform=`translateX(${g+h}px)`;else{if(0>e||0>h)k=Math.abs(e)+g-d,k=-1===Math.sign(k)?Math.abs(k):-k,b.style.transform=`translateX(${k}px)`,c.style.transform=`translateX(${k-d}px)`}else b.classList.remove("hyphen","hyphen--wrap"),b.style.transform=`translateX(${e}px)`,c.style.transform=`translateX(${e}px)`,k.style.transform=`translateX(${h}px)`,a.style.transform=`translateX(${h}px)`}hideObscuredBoundingTickLabels(){var a=
u(this.value);if(this.hasHistogram||a||this.labelHandles||this.precise)if(this.hasHistogram||a||!this.labelHandles||this.precise)if(this.hasHistogram||a||this.labelHandles||!this.precise)if(this.hasHistogram||a||!this.labelHandles||!this.precise)if(this.hasHistogram||!a||this.precise)if(!this.hasHistogram||this.precise||this.labelHandles){a=this.el.shadowRoot.querySelector(".thumb--minValue");var b=this.el.shadowRoot.querySelector(".thumb--value"),c=this.el.shadowRoot.querySelector(".tick__label--min"),
d=this.el.shadowRoot.querySelector(".tick__label--max");!a&&b&&c&&d&&(c.style.opacity=this.isMinTickLabelObscured(c,b)?"0":"1",d.style.opacity=this.isMaxTickLabelObscured(d,b)?"0":"1");a&&b&&c&&d&&(c.style.opacity=this.isMinTickLabelObscured(c,a)||this.isMinTickLabelObscured(c,b)?"0":"1",d.style.opacity=this.isMaxTickLabelObscured(d,a)||this.isMaxTickLabelObscured(d,b)&&this.hasHistogram?"0":"1")}}getHostOffset(a,b){const c=this.el.getBoundingClientRect();return a+7<c.left?c.left-a-7:b-7>c.right?
-(b-c.right)+7:0}getRangeLabelOverlap(a,b){const c=a.getBoundingClientRect();b=b.getBoundingClientRect();a=this.getFontSizeForElement(a);return Math.max(c.right+a-b.left,0)}isMinTickLabelObscured(a,b){a=a.getBoundingClientRect();b=b.getBoundingClientRect();return w.intersects(a,b)}isMaxTickLabelObscured(a,b){a=a.getBoundingClientRect();b=b.getBoundingClientRect();return w.intersects(a,b)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{histogram:["histogramWatcher"],
ticks:["ticksWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-color-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:"\u2014";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-color-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-color-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-color-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-color-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-color-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-color-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-color-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-color-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-color-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-color-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:"";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-color-border-input);border-color:var(--calcite-color-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-color-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}.graph{color:var(--calcite-color-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},
[17,"calcite-slider",{disabled:[516],form:[513],groupSeparator:[516,"group-separator"],hasHistogram:[1540,"has-histogram"],histogram:[16],histogramStops:[16],labelHandles:[516,"label-handles"],labelTicks:[516,"label-ticks"],max:[514],maxLabel:[1,"max-label"],maxValue:[1026,"max-value"],min:[514],minLabel:[1,"min-label"],minValue:[1026,"min-value"],mirrored:[516],name:[513],numberingSystem:[1,"numbering-system"],pageStep:[514,"page-step"],precise:[516],required:[516],snap:[516],step:[514],ticks:[514],
value:[1538],scale:[513],effectiveLocale:[32],minMaxValueRange:[32],minValueDragRange:[32],maxValueDragRange:[32],tickValues:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[1,"pointerdown","pointerDownHandler"]],{histogram:["histogramWatcher"],ticks:["ticksWatcher"],value:["valueHandler"],minValue:["minMaxValueHandler"],maxValue:["minMaxValueHandler"]}]);J();C.CalciteSlider=K;C.defineCustomElement=J;Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});