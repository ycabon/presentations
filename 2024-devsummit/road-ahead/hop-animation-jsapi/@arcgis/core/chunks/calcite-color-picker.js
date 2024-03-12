/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,h as o}from"../widgets/Widget.js";import{c as a,i as s,a as n,r as l,n as r,o as c,h,b as d,e as p,f as u,g as m,p as g,j as C,k as v,t as f,l as b,m as y,d as x}from"./color-picker-swatch.js";import{j as w,d as S,g as k}from"./dom.js";import{s as j,a as I,c as F}from"./loadable.js";import{d as D}from"./icon.js";import{d as E}from"./input-message.js";import{d as P}from"./input-number.js";import{d as A}from"./input-text.js";import{d as H}from"./progress.js";import{c as O,d as L,u as R,I as T}from"./interactive.js";import{i as K}from"./key.js";import{c as N,d as z}from"./locale2.js";import{r as U,c as M,a as $}from"./math.js";import{u as V,s as B,c as W,d as X}from"./t9n.js";import{d as q}from"./button.js";import{d as _}from"./loader.js";import{d as G}from"./tab.js";import{d as J}from"./tab-nav.js";import{d as Y}from"./tab-title.js";import{d as Z}from"./tabs.js";import{t as Q}from"./throttle2.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./guid.js";import"./observers.js";import"./form.js";import"./label2.js";import"./component.js";import"./Validation.js";import"./debounce.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const ee="channel",te="control",ie="control-and-scope",oe="scope",ae="section",se="slider",ne=a("#007AC2"),le="calcite-color-",re={r:255,g:255,b:255},ce={h:360,s:100,v:100},he=ce.h-1,de=100,pe={s:{slider:{height:12,width:104},colorField:{height:80,width:160},thumb:{radius:10}},m:{slider:{height:12,width:204},colorField:{height:150,width:272},thumb:{radius:10}},l:{slider:{height:12,width:384},colorField:{height:200,width:464},thumb:{radius:10}}},ue=a(),me=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerHexInputChange=i(this,"calciteColorPickerHexInputChange",6),this.onHexInputBlur=()=>{const e=this.hexInputNode,t=e.value,i=`#${t}`,{allowEmpty:o,internalColor:a}=this,r=o&&!t,c=s(i);this.onHexInputChange(),r||n(i)&&c||(e.value=o&&!a?"":this.formatHexForInternalInput(l(a.object())))},this.onOpacityInputBlur=()=>{const e=this.opacityInputNode,t=e.value,{allowEmpty:i,internalColor:o}=this;i&&!t||(e.value=i&&!o?"":this.formatOpacityForInternalInput(o))},this.onHexInputChange=()=>{let e=this.hexInputNode.value;if(e){const t=r(e,!1);n(t)&&this.alphaChannel&&this.internalColor&&(e=`${t+r(this.internalColor.hexa(),!0).slice(-2)}`)}this.internalSetValue(e,this.value)},this.onOpacityInputChange=()=>{const e=this.opacityInputNode;let t;if(e.value){const i=c(Number(e.value));t=this.internalColor?.alpha(i).hexa()}else t=e.value;this.internalSetValue(t,this.value)},this.onInputKeyDown=e=>{const{altKey:t,ctrlKey:i,metaKey:o,shiftKey:a}=e,{alphaChannel:s,hexInputNode:n,internalColor:l,value:r}=this,{key:c}=e,d=e.composedPath();if("Tab"===c||"Enter"===c)return d.includes(n)?this.onHexInputChange():this.onOpacityInputChange(),void("Enter"===c&&e.preventDefault());const u="ArrowDown"===c||"ArrowUp"===c,m=this.value;if(u){if(!r)return this.internalSetValue(this.previousNonNullValue,m),void e.preventDefault();const t="ArrowUp"===c?1:-1,i=a?10:1;return this.internalSetValue(h(this.nudgeRGBChannels(l,i*t,d.includes(n)?"rgb":"a"),s),m),void e.preventDefault()}const g=t||i||o,C=1===c.length,v=p.test(c);!C||g||v||e.preventDefault()},this.onHexInputPaste=e=>{const t=e.clipboardData.getData("text");n(t)&&(e.preventDefault(),this.hexInputNode.value=t.slice(1))},this.previousNonNullValue=this.value,this.storeHexInputRef=e=>{this.hexInputNode=e},this.storeOpacityInputRef=e=>{this.opacityInputNode=e},this.allowEmpty=!1,this.alphaChannel=!1,this.hexLabel="Hex",this.messages=void 0,this.numberingSystem=void 0,this.scale="m",this.value=r(h(ue,this.alphaChannel),this.alphaChannel,!0),this.internalColor=ue}connectedCallback(){const{allowEmpty:e,alphaChannel:t,value:i}=this;if(i){const e=r(i,t);n(e,t)&&this.internalSetValue(e,e,!1)}else e&&this.internalSetValue(null,null,!1)}componentWillLoad(){j(this)}componentDidLoad(){I(this)}handleValueChange(e,t){this.internalSetValue(e,t,!1)}render(){const{alphaChannel:e,hexLabel:t,internalColor:i,messages:a,scale:s,value:n}=this,l=this.formatHexForInternalInput(n),r=this.formatOpacityForInternalInput(i),c="l"===s?"m":"s";return o("div",{class:"container"},o("calcite-input-text",{class:"hex-input",label:a?.hex||t,maxLength:6,onCalciteInputTextChange:this.onHexInputChange,onCalciteInternalInputTextBlur:this.onHexInputBlur,onKeyDown:this.onInputKeyDown,onPaste:this.onHexInputPaste,prefixText:"#",scale:c,value:l,ref:this.storeHexInputRef}),e?o("calcite-input-number",{class:"opacity-input",key:"opacity-input",label:a?.opacity,max:de,maxLength:3,min:0,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.onOpacityInputChange,onCalciteInternalInputNumberBlur:this.onOpacityInputBlur,onKeyDown:this.onInputKeyDown,scale:c,suffixText:"%",value:r,ref:this.storeOpacityInputRef}):null)}async setFocus(){return await F(this),w(this.hexInputNode)}internalSetValue(e,t,i=!0){if(e){const{alphaChannel:t}=this,o=r(e,t,t);if(n(o,t)){const{internalColor:e}=this,s=a(o),n=r(h(s,t),t),l=!e||n!==r(h(e,t),t);return this.internalColor=s,this.previousNonNullValue=n,this.value=n,void(l&&i&&this.calciteColorPickerHexInputChange.emit())}}else if(this.allowEmpty)return this.internalColor=null,this.value=null,void(i&&this.calciteColorPickerHexInputChange.emit());this.value=t}formatHexForInternalInput(e){return e?e.replace("#","").slice(0,6):""}formatOpacityForInternalInput(e){return e?`${d(e.alpha())}`:""}nudgeRGBChannels(e,t,i){let o;const s=e.array(),n=s.slice(0,3);if("rgb"===i)o=[...n.map((e=>e+t)),this.alphaChannel?s[3]:void 0];else{const i=c(d(e.alpha())+t);o=[...n,i]}return a(o)}get el(){return this}static get watchers(){return{value:["handleValueChange"]}}static get style(){return":host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:68px;margin-inline-start:-1px}:host([scale=s]) .container{flex-wrap:wrap;row-gap:0.125rem}:host([scale=s]) .opacity-input{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .opacity-input{inline-size:88px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-color-picker-hex-input",{allowEmpty:[4,"allow-empty"],alphaChannel:[4,"alpha-channel"],hexLabel:[1,"hex-label"],messages:[16],numberingSystem:[1,"numbering-system"],scale:[513],value:[1537],internalColor:[32],setFocus:[64]},void 0,{value:["handleValueChange"]}]);function ge(){"undefined"!=typeof customElements&&["calcite-color-picker-hex-input","calcite-icon","calcite-input-message","calcite-input-number","calcite-input-text","calcite-progress"].forEach((e=>{switch(e){case"calcite-color-picker-hex-input":customElements.get(e)||customElements.define(e,me);break;case"calcite-icon":customElements.get(e)||D();break;case"calcite-input-message":customElements.get(e)||E();break;case"calcite-input-number":customElements.get(e)||P();break;case"calcite-input-text":customElements.get(e)||A();break;case"calcite-progress":customElements.get(e)||H()}}))}ge();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */
const Ce=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerChange=i(this,"calciteColorPickerChange",6),this.calciteColorPickerInput=i(this,"calciteColorPickerInput",6),this.internalColorUpdateContext=null,this.mode=u.HEX,this.shiftKeyChannelAdjustment=0,this.handleTabActivate=e=>{this.channelMode=e.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)},this.handleColorFieldScopeKeyDown=e=>{const{key:t}=e,i={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};i[t]&&(e.preventDefault(),this.scopeOrientation="ArrowDown"===t||"ArrowUp"===t?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+i[t].x||0,this.colorFieldScopeTop+i[t].y||0,!1))},this.handleHueScopeKeyDown=e=>{const t=e.shiftKey?10:1,{key:i}=e,o={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(o[i]){e.preventDefault();const a=o[i]*t,s=this.baseColorFieldColor.hue(),n=this.baseColorFieldColor.hue(s+a);this.internalColorSet(n,!1)}},this.handleHexInputChange=e=>{e.stopPropagation();const{allowEmpty:t,color:i}=this,o=e.target.value;!t||o?o!==(i&&r(h(i,m(this.mode))))&&this.internalColorSet(a(o)):this.internalColorSet(null)},this.handleSavedColorSelect=e=>{const t=e.currentTarget;this.internalColorSet(a(t.color))},this.handleChannelInput=e=>{const t=e.currentTarget,i=Number(t.getAttribute("data-channel-index")),o=3===i?de:"rgb"===this.channelMode?re[Object.keys(re)[i]]:ce[Object.keys(ce)[i]];let a;if(this.allowEmpty&&!t.value)a="";else{const e=Number(t.value)+this.shiftKeyChannelAdjustment;a=M(e,0,o).toString()}t.value=a,""!==a&&0!==this.shiftKeyChannelAdjustment&&this.handleChannelChange(e)},this.handleChannelChange=e=>{const t=e.currentTarget,i=Number(t.getAttribute("data-channel-index")),o=[...this.channels];if(this.allowEmpty&&!t.value)return this.channels=[null,null,null,null],void this.internalColorSet(null);const a=3===i,s=Number(t.value);o[i]=a?c(s):s,this.updateColorFromChannels(o)},this.handleSavedColorKeyDown=e=>{K(e.key)&&(e.preventDefault(),this.handleSavedColorSelect(e))},this.handleColorFieldPointerDown=e=>{if(!S(e))return;const{offsetX:t,offsetY:i}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.colorFieldRenderingContext,bounds:this.colorFieldRenderingContext.canvas.getBoundingClientRect()},this.captureColorFieldColor(t,i),this.colorFieldScopeNode.focus()},this.handleHueSliderPointerDown=e=>{if(!S(e))return;const{offsetX:t}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.hueSliderRenderingContext,bounds:this.hueSliderRenderingContext.canvas.getBoundingClientRect()},this.captureHueSliderColor(t),this.hueScopeNode.focus()},this.handleOpacitySliderPointerDown=e=>{if(!S(e))return;const{offsetX:t}=e;window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:this.opacitySliderRenderingContext,bounds:this.opacitySliderRenderingContext.canvas.getBoundingClientRect()},this.captureOpacitySliderValue(t),this.opacityScopeNode.focus()},this.globalPointerUpHandler=e=>{if(!S(e))return;const t=this.activeCanvasInfo;this.activeCanvasInfo=null,this.drawColorControls(),t&&this.calciteColorPickerChange.emit()},this.globalPointerMoveHandler=e=>{const{activeCanvasInfo:t,el:i}=this;if(!i.isConnected||!t)return;const{context:o,bounds:a}=t;let s,n;const{clientX:l,clientY:r}=e;o.canvas.matches(":hover")?(s=l-a.x,n=r-a.y):(s=l<a.x+a.width&&l>a.x?l-a.x:l<a.x?0:a.width,n=r<a.y+a.height&&r>a.y?r-a.y:r<a.y?0:a.height),o===this.colorFieldRenderingContext?this.captureColorFieldColor(s,n,!1):o===this.hueSliderRenderingContext?this.captureHueSliderColor(s):o===this.opacitySliderRenderingContext&&this.captureOpacitySliderValue(s)},this.storeColorFieldScope=e=>{this.colorFieldScopeNode=e},this.storeHueScope=e=>{this.hueScopeNode=e},this.renderChannelsTabTitle=e=>{const{channelMode:t,messages:i}=this,a=e===t,s="rgb"===e?i.rgb:i.hsv;return o("calcite-tab-title",{class:"color-mode","data-color-mode":e,key:e,onCalciteTabsActivate:this.handleTabActivate,selected:a},s)},this.renderChannelsTab=e=>{const{allowEmpty:t,channelMode:i,channels:a,messages:s,alphaChannel:n}=this,l=e===i,r="rgb"===e?[s.red,s.green,s.blue]:[s.hue,s.saturation,s.value],c=k(this.el),h=n?a:a.slice(0,3);return o("calcite-tab",{class:te,key:e,selected:l},o("div",{class:"channels",dir:"ltr"},h.map(((e,i)=>{const o=3===i;return o&&(e=t&&!e?e:d(e)),this.renderChannel(e,i,r[i],c,o?"%":"")}))))},this.renderChannel=(e,t,i,a,s)=>o("calcite-input-number",{class:ee,"data-channel-index":t,dir:a,key:t,label:i,lang:this.effectiveLocale,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputNumberChange:this.handleChannelChange,onCalciteInputNumberInput:this.handleChannelInput,onKeyDown:this.handleKeyDown,scale:"l"===this.scale?"m":"s",style:{marginLeft:t>0&&("s"!==this.scale||!this.alphaChannel||3!==t)?"-1px":""},suffixText:s,value:e?.toString()}),this.deleteColor=()=>{const e=h(this.color,this.alphaChannel);if(!(this.savedColors.indexOf(e)>-1))return;const t=this.savedColors.filter((t=>t!==e));this.savedColors=t;const i=`${le}${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(t))},this.saveColor=()=>{const e=h(this.color,this.alphaChannel);if(this.savedColors.indexOf(e)>-1)return;const t=[...this.savedColors,e];this.savedColors=t;const i=`${le}${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(t))},this.drawColorControls=Q(((e="all")=>{"all"!==e&&"color-field"!==e||!this.colorFieldRenderingContext||this.drawColorField(),"all"!==e&&"hue-slider"!==e||!this.hueSliderRenderingContext||this.drawHueSlider(),this.alphaChannel&&("all"===e||"opacity-slider"===e)&&this.opacitySliderRenderingContext&&this.drawOpacitySlider()}),16),this.captureColorFieldColor=(e,t,i=!0)=>{const{dimensions:{colorField:{height:o,width:a}}}=this,s=Math.round(ce.s/a*e),n=Math.round(ce.v/o*(o-t));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(s).value(n),i)},this.initColorField=e=>{this.colorFieldRenderingContext=e.getContext("2d"),this.updateCanvasSize("color-field"),this.drawColorControls()},this.initHueSlider=e=>{this.hueSliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("hue-slider"),this.drawHueSlider()},this.initOpacitySlider=e=>{e&&(this.opacitySliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("opacity-slider"),this.drawOpacitySlider())},this.storeOpacityScope=e=>{this.opacityScopeNode=e},this.handleOpacityScopeKeyDown=e=>{const t=e.shiftKey?10:1,{key:i}=e,o={ArrowUp:.01,ArrowRight:.01,ArrowDown:-.01,ArrowLeft:-.01};if(o[i]){e.preventDefault();const a=o[i]*t,s=this.baseColorFieldColor.alpha(),n=this.baseColorFieldColor.alpha(s+a);this.internalColorSet(n,!1)}},this.allowEmpty=!1,this.alphaChannel=!1,this.channelsDisabled=!1,this.color=ne,this.disabled=!1,this.format="auto",this.hideChannels=!1,this.hexDisabled=!1,this.hideHex=!1,this.hideSaved=!1,this.savedDisabled=!1,this.scale="m",this.storageId=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.value=r(h(ne,this.alphaChannel)),this.defaultMessages=void 0,this.channelMode="rgb",this.channels=this.toChannels(ne),this.dimensions=pe.m,this.effectiveLocale="",this.messages=void 0,this.savedColors=[],this.colorFieldScopeTop=void 0,this.colorFieldScopeLeft=void 0,this.hueScopeLeft=void 0,this.opacityScopeLeft=void 0,this.scopeOrientation=void 0}handleAlphaChannelChange(e){const{format:t}=this;e&&"auto"!==t&&!m(t)&&(console.warn(`ignoring alphaChannel as the current format (${t}) does not support alpha`),this.alphaChannel=!1)}handleColorChange(e,t){this.drawColorControls(),this.updateChannelsFromColor(e),this.previousColor=t}handleFormatOrAlphaChannelChange(){this.setMode(this.format),this.internalColorSet(this.color,!1,"internal")}handleScaleChange(e="m"){this.updateDimensions(e),this.updateCanvasSize("all"),this.drawColorControls()}onMessagesChange(){}handleValueChange(e,t){const{allowEmpty:i,format:o}=this;let s=!1;if(!i||e){const i=g(e);if(!i||"auto"!==o&&i!==o)return this.showIncompatibleColorWarning(e,o),void(this.value=t);s=this.mode!==i,this.setMode(i,null===this.internalColorUpdateContext)}const n=this.activeCanvasInfo;if("initial"===this.internalColorUpdateContext)return;if("user-interaction"===this.internalColorUpdateContext)return this.calciteColorPickerInput.emit(),void(n||this.calciteColorPickerChange.emit());const l=i&&!e?null:a(null!=e&&"object"==typeof e&&m(this.mode)?C(e):e),r=!v(l,this.color);(s||r)&&this.internalColorSet(l,this.alphaChannel&&!(this.mode.endsWith("a")||this.mode.endsWith("a-css")),"internal")}get baseColorFieldColor(){return this.color||this.previousColor||ne}effectiveLocaleChange(){V(this,this.effectiveLocale)}handleChannelKeyUpOrDown(e){this.shiftKeyChannelAdjustment=0;const{key:t}=e;if("ArrowUp"!==t&&"ArrowDown"!==t||!e.composedPath().some((e=>e.classList?.contains(ee))))return;const{shiftKey:i}=e;if(e.preventDefault(),!this.color)return this.internalColorSet(this.previousColor),void e.stopPropagation();this.shiftKeyChannelAdjustment="ArrowUp"===t&&i?9:"ArrowDown"===t&&i?-9:0}async setFocus(){await F(this),this.el.focus()}async componentWillLoad(){j(this);const{allowEmpty:e,color:t,format:i,value:o}=this,s=e&&!o,n=g(o),l=s||"auto"===i&&n||i===n,r=s?null:l?a(o):t;l||this.showIncompatibleColorWarning(o,i),this.setMode(i,!1),this.internalColorSet(r,!1,"initial"),this.updateDimensions(this.scale);const c=`${le}${this.storageId}`;this.storageId&&localStorage.getItem(c)&&(this.savedColors=JSON.parse(localStorage.getItem(c))),await B(this)}connectedCallback(){O(this),N(this),W(this)}componentDidLoad(){I(this)}disconnectedCallback(){window.removeEventListener("pointermove",this.globalPointerMoveHandler),window.removeEventListener("pointerup",this.globalPointerUpHandler),L(this),z(this),X(this)}componentDidRender(){R(this)}render(){const{allowEmpty:e,channelsDisabled:t,color:i,colorFieldScopeLeft:a,colorFieldScopeTop:s,dimensions:{slider:{width:n},thumb:{radius:l}},hexDisabled:r,hideChannels:c,hideHex:p,hideSaved:u,hueScopeLeft:m,messages:g,alphaChannel:C,opacityScopeLeft:v,savedColors:f,savedDisabled:b,scale:y,scopeOrientation:x}=this,w=i?h(i,C):null,S=l,k=m??n*ne.hue()/ce.h,j=l,I=v??n*d(ne.alpha())/de,F=null===i,D="vertical"===x,E=r||p,P=t||c,A=b||u,[H,O]=this.getAdjustedScopePosition(a,s),[L,R]=this.getAdjustedScopePosition(k,S),[K,N]=this.getAdjustedScopePosition(I,j);return o(T,{disabled:this.disabled},o("div",{class:"container"},o("div",{class:ie},o("canvas",{class:"color-field",onPointerDown:this.handleColorFieldPointerDown,ref:this.initColorField}),o("div",{"aria-label":D?g.value:g.saturation,"aria-valuemax":D?ce.v:ce.s,"aria-valuemin":"0","aria-valuenow":(D?i?.saturationv():i?.value())||"0",class:{[oe]:!0,"scope--color-field":!0},onKeyDown:this.handleColorFieldScopeKeyDown,role:"slider",style:{top:`${O||0}px`,left:`${H||0}px`},tabindex:"0",ref:this.storeColorFieldScope})),o("div",{class:"preview-and-sliders"},o("calcite-color-picker-swatch",{class:"preview",color:w,scale:"l"}),o("div",{class:"sliders"},o("div",{class:ie},o("canvas",{class:{[se]:!0,"hue-slider":!0},onPointerDown:this.handleHueSliderPointerDown,ref:this.initHueSlider}),o("div",{"aria-label":g.hue,"aria-valuemax":ce.h,"aria-valuemin":"0","aria-valuenow":i?.round().hue()||ne.round().hue(),class:{[oe]:!0,"scope--hue":!0},onKeyDown:this.handleHueScopeKeyDown,role:"slider",style:{top:`${R}px`,left:`${L}px`},tabindex:"0",ref:this.storeHueScope})),C?o("div",{class:ie},o("canvas",{class:{[se]:!0,"opacity-slider":!0},onPointerDown:this.handleOpacitySliderPointerDown,ref:this.initOpacitySlider}),o("div",{"aria-label":g.opacity,"aria-valuemax":de,"aria-valuemin":0,"aria-valuenow":(i||ne).round().alpha(),class:{[oe]:!0,"scope--opacity":!0},onKeyDown:this.handleOpacityScopeKeyDown,role:"slider",style:{top:`${N}px`,left:`${K}px`},tabindex:"0",ref:this.storeOpacityScope})):null)),E&&P?null:o("div",{class:{"control-section":!0,[ae]:!0}},o("div",{class:"hex-and-channels-group"},E?null:o("div",{class:"color-hex-options"},o("calcite-color-picker-hex-input",{allowEmpty:e,alphaChannel:C,class:te,messages:g,numberingSystem:this.numberingSystem,onCalciteColorPickerHexInputChange:this.handleHexInputChange,scale:y,value:w})),P?null:o("calcite-tabs",{class:{"color-mode-container":!0,"section--split":!0},scale:"l"===y?"m":"s"},o("calcite-tab-nav",{slot:"title-group"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv")))),A?null:o("div",{class:{"saved-colors-section":!0,[ae]:!0}},o("div",{class:"header"},o("label",null,g.saved),o("div",{class:"saved-colors-buttons"},o("calcite-button",{appearance:"transparent",class:"delete-color",disabled:F,iconStart:"minus",kind:"neutral",label:g.deleteColor,onClick:this.deleteColor,scale:y,type:"button"}),o("calcite-button",{appearance:"transparent",class:"save-color",disabled:F,iconStart:"plus",kind:"neutral",label:g.saveColor,onClick:this.saveColor,scale:y,type:"button"}))),f.length>0?o("div",{class:"saved-colors"},[...f.map((e=>o("calcite-color-picker-swatch",{class:"saved-color",color:e,key:e,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:y,tabIndex:0})))]):null)))}handleKeyDown(e){"Enter"===e.key&&e.preventDefault()}showIncompatibleColorWarning(e,t){console.warn(`ignoring color value (${e}) as it is not compatible with the current format (${t})`)}setMode(e,t=!0){const i="auto"===e?this.mode:e;this.mode=this.ensureCompatibleMode(i,t)}ensureCompatibleMode(e,t){const{alphaChannel:i}=this,o=m(e);if(i&&!o){const i=f(e);return t&&console.warn(`setting format to (${i}) as the provided one (${e}) does not support alpha`),i}if(!i&&o){const i=b(e);return t&&console.warn(`setting format to (${i}) as the provided one (${e}) does not support alpha`),i}return e}captureHueSliderColor(e){const{dimensions:{slider:{width:t}}}=this,i=he/t*e;this.internalColorSet(this.baseColorFieldColor.hue(i),!1)}captureOpacitySliderValue(e){const{dimensions:{slider:{width:t}}}=this,i=c(de/t*e);this.internalColorSet(this.baseColorFieldColor.alpha(i),!1)}internalColorSet(e,t=!0,i="user-interaction"){t&&v(e,this.color)||(this.internalColorUpdateContext=i,this.color=e,this.value=this.toValue(e),this.internalColorUpdateContext=null)}toValue(e,t=this.mode){if(!e)return null;if(t.includes("hex")){const i=t===u.HEXA;return r(h(e.round(),i),i)}if(t.includes("-css")){const i=e[t.replace("-css","").replace("a","")]().round().string();return(t.endsWith("a")||t.endsWith("a-css"))&&1===e.alpha()?`${i.slice(0,3)}a(${i.slice(4,-1)}, ${e.alpha()})`:i}const i=e[b(t)]().round().object();return t.endsWith("a")?y(i):i}getSliderCapSpacing(){const{dimensions:{slider:{height:e},thumb:{radius:t}}}=this;return 2*t-e}updateDimensions(e="m"){this.dimensions=pe[e]}drawColorField(){const e=this.colorFieldRenderingContext,{dimensions:{colorField:{height:t,width:i}}}=this;e.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string(),e.fillRect(0,0,i,t);const o=e.createLinearGradient(0,0,i,0);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,i,t);const a=e.createLinearGradient(0,0,0,t);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=a,e.fillRect(0,0,i,t),this.drawActiveColorFieldColor()}setCanvasContextSize(e,{height:t,width:i}){if(!e)return;const o=window.devicePixelRatio||1;e.width=i*o,e.height=t*o,e.style.height=`${t}px`,e.style.width=`${i}px`,e.getContext("2d").scale(o,o)}updateCanvasSize(e="all"){const{dimensions:t}=this;"all"!==e&&"color-field"!==e||this.setCanvasContextSize(this.colorFieldRenderingContext?.canvas,t.colorField);const i={width:t.slider.width,height:t.slider.height+2*(t.thumb.radius-t.slider.height/2)};"all"!==e&&"hue-slider"!==e||this.setCanvasContextSize(this.hueSliderRenderingContext?.canvas,i),"all"!==e&&"opacity-slider"!==e||this.setCanvasContextSize(this.opacitySliderRenderingContext?.canvas,i)}drawActiveColorFieldColor(){const{color:e}=this;if(!e)return;const t=e.hsv(),{dimensions:{colorField:{height:i,width:o},thumb:{radius:a}}}=this,s=t.saturationv()/(ce.s/o),n=i-t.value()/(ce.v/i);requestAnimationFrame((()=>{this.colorFieldScopeLeft=s,this.colorFieldScopeTop=n})),this.drawThumb(this.colorFieldRenderingContext,a,s,n,t)}drawThumb(e,t,i,o,a){const s=2*Math.PI;e.beginPath(),e.arc(i,o,t,0,s),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),e.beginPath(),e.arc(i,o,t-3,0,s),e.fillStyle=a.rgb().alpha(1).string(),e.fill()}drawActiveHueSliderColor(){const{color:e}=this;if(!e)return;const t=e.hsv().saturationv(100).value(100),{dimensions:{slider:{width:i},thumb:{radius:o}}}=this,a=t.hue()/(he/i),s=o,n=this.getSliderBoundX(a,i,o);requestAnimationFrame((()=>{this.hueScopeLeft=n})),this.drawThumb(this.hueSliderRenderingContext,o,n,s,t)}drawHueSlider(){const e=this.hueSliderRenderingContext,{dimensions:{slider:{height:t,width:i},thumb:{radius:o}}}=this,s=o-t/2,n=e.createLinearGradient(0,0,i,0),l=["red","yellow","lime","cyan","blue","magenta","#ff0004"],r=1/(l.length-1);let c=0;l.forEach((e=>{n.addColorStop(c,a(e).string()),c+=r})),e.clearRect(0,0,i,t+2*this.getSliderCapSpacing()),this.drawSliderPath(e,t,i,0,s),e.fillStyle=n,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveHueSliderColor()}drawOpacitySlider(){const e=this.opacitySliderRenderingContext,{baseColorFieldColor:t,dimensions:{slider:{height:i,width:o},thumb:{radius:a}}}=this,s=a-i/2;e.clearRect(0,0,o,i+2*this.getSliderCapSpacing());const n=e.createLinearGradient(0,s,o,0),l=t.rgb().alpha(0),r=t.rgb().alpha(.5),c=t.rgb().alpha(1);n.addColorStop(0,l.string()),n.addColorStop(.5,r.string()),n.addColorStop(1,c.string()),this.drawSliderPath(e,i,o,0,s);const h=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.fillStyle=h,e.fill(),e.fillStyle=n,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveOpacitySliderColor()}drawSliderPath(e,t,i,o,a){const s=t/2+1;e.beginPath(),e.moveTo(o+s,a),e.lineTo(o+i-s,a),e.quadraticCurveTo(o+i,a,o+i,a+s),e.lineTo(o+i,a+t-s),e.quadraticCurveTo(o+i,a+t,o+i-s,a+t),e.lineTo(o+s,a+t),e.quadraticCurveTo(o,a+t,o,a+t-s),e.lineTo(o,a+s),e.quadraticCurveTo(o,a,o+s,a),e.closePath()}getCheckeredBackgroundPattern(){if(this.checkerPattern)return this.checkerPattern;const e=document.createElement("canvas");e.width=10,e.height=10;const t=e.getContext("2d");return t.fillStyle="#ccc",t.fillRect(0,0,10,10),t.fillStyle="#fff",t.fillRect(0,0,5,5),t.fillRect(5,5,5,5),this.checkerPattern=e,e}drawActiveOpacitySliderColor(){const{color:e}=this;if(!e)return;const t=e,{dimensions:{slider:{width:i},thumb:{radius:o}}}=this,a=d(t.alpha())/(de/i),s=o,n=this.getSliderBoundX(a,i,o);requestAnimationFrame((()=>{this.opacityScopeLeft=n})),this.drawThumb(this.opacitySliderRenderingContext,o,n,s,t)}getSliderBoundX(e,t,i){const o=$(e,t,i);return 0===o?e:-1===o?U(e,0,t,i,2*i):U(e,0,t,t-2*i,t-i)}updateColorFromChannels(e){this.internalColorSet(a(e,this.channelMode))}updateChannelsFromColor(e){this.channels=e?this.toChannels(e):[null,null,null,null]}toChannels(e){const{channelMode:t}=this,i=e[t]().array().map(((e,t)=>3===t?e:Math.floor(e)));return 3===i.length&&i.push(1),i}getAdjustedScopePosition(e,t){return[e-.5,t-.5]}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{alphaChannel:["handleAlphaChannelChange","handleFormatOrAlphaChannelChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-color-picker-spacing:8px}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{gap:0.25rem;grid-template-columns:repeat(auto-fill, 20px)}:host([scale=m]){--calcite-color-picker-spacing:12px}:host([scale=m]) .container{inline-size:272px}:host([scale=l]){--calcite-color-picker-spacing:16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, 32px)}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline;flex-wrap:wrap}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:inline-block;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          );outline-offset:11px}.hex-and-channels-group{inline-size:100%}.hex-and-channels-group,.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex;row-gap:0.125rem}.channel[data-channel-index="3"]{inline-size:159px}:host([scale=s]) .channels{flex-wrap:wrap}:host([scale=s]) .channel{flex-basis:30%;flex-grow:1}:host([scale=s]) .channel[data-channel-index="3"]{inline-size:unset;margin-inline-start:unset}:host([scale=l]) .channel[data-channel-index="3"]{inline-size:131px}.saved-colors{display:grid;gap:0.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill, 24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}'}},[17,"calcite-color-picker",{allowEmpty:[516,"allow-empty"],alphaChannel:[4,"alpha-channel"],channelsDisabled:[4,"channels-disabled"],color:[1040],disabled:[516],format:[513],hideChannels:[516,"hide-channels"],hexDisabled:[4,"hex-disabled"],hideHex:[516,"hide-hex"],hideSaved:[516,"hide-saved"],savedDisabled:[516,"saved-disabled"],scale:[513],storageId:[513,"storage-id"],messageOverrides:[1040],numberingSystem:[513,"numbering-system"],value:[1025],messages:[1040],defaultMessages:[32],channelMode:[32],channels:[32],dimensions:[32],effectiveLocale:[32],savedColors:[32],colorFieldScopeTop:[32],colorFieldScopeLeft:[32],hueScopeLeft:[32],opacityScopeLeft:[32],scopeOrientation:[32],setFocus:[64]},[[2,"keydown","handleChannelKeyUpOrDown"],[2,"keyup","handleChannelKeyUpOrDown"]],{alphaChannel:["handleAlphaChannelChange","handleFormatOrAlphaChannelChange"],color:["handleColorChange"],format:["handleFormatOrAlphaChannelChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}]);function ve(){"undefined"!=typeof customElements&&["calcite-color-picker","calcite-button","calcite-color-picker-hex-input","calcite-color-picker-swatch","calcite-icon","calcite-input-message","calcite-input-number","calcite-input-text","calcite-loader","calcite-progress","calcite-tab","calcite-tab-nav","calcite-tab-title","calcite-tabs"].forEach((e=>{switch(e){case"calcite-color-picker":customElements.get(e)||customElements.define(e,Ce);break;case"calcite-button":customElements.get(e)||q();break;case"calcite-color-picker-hex-input":customElements.get(e)||ge();break;case"calcite-color-picker-swatch":customElements.get(e)||x();break;case"calcite-icon":customElements.get(e)||D();break;case"calcite-input-message":customElements.get(e)||E();break;case"calcite-input-number":customElements.get(e)||P();break;case"calcite-input-text":customElements.get(e)||A();break;case"calcite-loader":customElements.get(e)||_();break;case"calcite-progress":customElements.get(e)||H();break;case"calcite-tab":customElements.get(e)||G();break;case"calcite-tab-nav":customElements.get(e)||J();break;case"calcite-tab-title":customElements.get(e)||Y();break;case"calcite-tabs":customElements.get(e)||Z()}}))}ve();const fe=Ce,be=ve;export{fe as CalciteColorPicker,be as defineCustomElement};
