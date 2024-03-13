/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{d as o}from"./maybe.js";import{watch as s,syncAndInitial as l}from"../core/reactiveUtils.js";import{s as a}from"./themeUtils.js";import"../core/Error.js";import r,{l as c}from"../widgets/Widget.js";import{c as u,a as d}from"./widgetUtils.js";import{t as p,a as h}from"./jsxFactory.js";import{formatNumber as m}from"../intl.js";import{p as v}from"./a11yUtils.js";import{m as f}from"./memoize.js";import{throwIfNotAbortError as _,throwIfAborted as g,after as y}from"../core/promiseUtils.js";import{e as w,g as x,h as b,i as k,j as C,k as T,l as M}from"./quantityFormatUtils.js";import{waitTick as D,waitAnimationFrame as j}from"../core/scheduling.js";import{u as E}from"./unitFormatUtils.js";import{aj as V,ak as F,al as I}from"./unitUtils.js";import{g as S}from"./getDefaultUnitForView.js";import{t as z}from"./keybindings.js";import{g as L}from"./angularMeasurementUtils.js";import{m as $}from"./messageBundle.js";import{d as U}from"./directionModeIcons.js";let A=class extends e{constructor(t){super(t),this.helpMessage=void 0,this.viewType=void 0}get visibleElements(){return this.sketchOptions.tooltips.visibleElements}get allFields(){return[]}get editableFields(){return this.allFields.filter((t=>t.visible&&!t.readOnly))}};t([i()],A.prototype,"sketchOptions",void 0),t([i()],A.prototype,"visibleElements",null),t([i()],A.prototype,"helpMessage",void 0),t([i()],A.prototype,"viewType",void 0),t([i()],A.prototype,"allFields",null),t([i()],A.prototype,"editableFields",null),A=t([n("esri.views.interactive.tooltip.SketchTooltipInfo")],A);const R="esri-tooltip",O=`${R}-content`,P=`${R}-content--input`,N=`${R}-content__header`,q=`${R}-content__header__spacer`,K=`${R}-content__header__actions`,H=`${R}-draw-header-actions`,Z=`${R}-table`,B=`${R}-help-message`,G=`${R}-field`,W={base:G,inputMode:`${G}--input`,title:`${G}__title`,value:`${G}__value`};let X=class extends r{constructor(){super(...arguments),this.hidden=!1,this.mode="feedback"}render(){return p("div",{class:this.classes({[W.base]:!0,[W.inputMode]:"input"===this.mode})},p("div",{class:W.title},this.title),p("div",{class:W.value},this.value))}};t([i()],X.prototype,"hidden",void 0),t([i()],X.prototype,"mode",void 0),t([i()],X.prototype,"title",void 0),t([i()],X.prototype,"value",void 0),X=t([n("esri.views.interactive.tooltip.components.TooltipField")],X);const Y={base:`${R}-value-by-value`};let Q=class extends r{constructor(){super(...arguments),this.divider="×"}render(){return p("div",{class:Y.base},p("span",null,this.left),p("span",null,this.divider),p("span",null,this.right))}};t([i()],Q.prototype,"left",void 0),t([i()],Q.prototype,"divider",void 0),t([i()],Q.prototype,"right",void 0),Q=t([n("esri.views.interactive.tooltip.components.ValueByValue")],Q);let J=class extends r{constructor(){super(...arguments),this._focusAbortController=new AbortController,this._transition=null,this._mode="feedback",this._getFormatters=f(((t,e)=>({angleRelative:t=>m(t,{minimumFractionDigits:it,maximumFractionDigits:it,signDisplay:"exceptZero"}),direction:t=>w(t,t.rotationType,it),directionRelative:t=>{const e=L(t);return m(e,{style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:it,minimumFractionDigits:it,signDisplay:e>0?"never":"exceptZero"})},directionRelativeBilateral:t=>w(t,t.rotationType,it),area:(i,n)=>x(t,i,n??e.area),length:(i,n,o)=>b(t,i,n??e.length,o),lengthRelative:(i,n)=>k(t,i,n??e.length),totalLength:(i,n)=>b(t,i,n??e.length),verticalLength:(i,n)=>C(t,i,n??e.length),verticalLengthRelative:(i,n)=>T(t,i,n??e.verticalLength),percentage:t=>m(t.value,{style:"percent"}),scale:t=>m(t,{style:"percent",maximumFractionDigits:0})}))),this._onDiscard=()=>{this.exitInputMode()},this._onCommit=(t,e)=>{if("commit-and-exit"===e)return void this.exitInputMode();const i=this._getFocusableElements(),n=i.length,o=i.indexOf(t);if(-1===o)return void this.exitInputMode();const s=((o+("commit-and-next"===e?1:-1))%n+n)%n;tt(i.at(s))},this._handleTab=t=>{if(t.code!==z.next)return;const e=this._getFocusableElements(),i=e.at(0),n=e.at(-1);i&&n&&(t.shiftKey?document.activeElement===i&&(t.preventDefault(),tt(n)):document.activeElement===n&&(t.preventDefault(),tt(i)))}}get mode(){return this._mode}get _displayUnits(){const t=S(this.tooltip.view);return{length:t,verticalLength:t,area:t,angle:"degrees"}}get _inputUnitInfos(){const t=this._messagesUnits,e=e=>({unit:e,abbreviation:E(t,e,"abbr")}),i=S(this.tooltip.view),n=e(V(i)),o=e(F(i)),s=e(I(i)),l=e("degrees");return{length:n,lengthRelative:n,verticalLength:o,verticalLengthRelative:o,area:s,direction:l,orientation:l,rotation:l}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,sketchOptions:this.info.sketchOptions,onCommit:this._onCommit,onDiscard:this._onDiscard}}render(){const t=et(this._renderContent()),{visibleElements:e}=this.info.sketchOptions.tooltips,i=e.helpMessage?this._getHelpMessage():null,n=t.length>0,o=n||!!i,s="input"===this.mode,l=et(this._renderActions());return p("div",{class:u(O,s&&P),onkeydown:this._handleTab},s&&o&&e.header?p("div",{class:N,key:"header"},p("calcite-button",{appearance:"transparent",iconFlipRtl:"both",iconStart:"chevron-left",key:"discard-button",kind:"neutral",onclick:this._onDiscard,scale:"s",tabIndex:-1}),l.length>0?p(h,null,p("div",{class:q,key:"spacer"}),p("div",{class:K,key:"actions"},l)):null):null,n?p("div",{class:Z,key:"content"},...t):null,i?p("div",{class:B,key:"help-message"},i):null)}_renderActions(){return null}loadDependencies(){return c({button:()=>import("./calcite-button.js"),icon:()=>import("./calcite-icon.js"),input:()=>import("./calcite-input.js")})}async enterInputMode(t){try{await this._transitionTo("input"),await this._focusField(t)}catch(t){_(t)}}async exitInputMode(){try{await this._transitionTo("feedback"),document.querySelector(".esri-view-surface").focus()}catch(t){_(t)}}_getHelpMessage(t){const{info:e}=this,{helpMessage:i,viewType:n}=e,o=t??i,s="3d"===n?"helpMessages3d":"helpMessages2d";return o?this._messagesTooltip?.sketch?.[s]?.[o]:void 0}async _focusField(t){this._focusAbortController?.abort(),this._focusAbortController=new AbortController;const{signal:e}=this._focusAbortController;await this._waitForInputs(),g(e);const i=this._getFocusableInputs();tt(t?i.find((e=>e.getAttribute("data-field-name")===t)):i.at(0))}async _transitionTo(t){if(this._mode===t)return;const e=()=>{this._mode=t,this.tooltip.positionMode="input"===t?"fixed":"follow-cursor"};if(!this.domNode?.firstChild||!document.startViewTransition||v())return void e();this.autoRenderingEnabled=!1,this._transition?.skipTransition();const i=this._transition=document.startViewTransition((()=>{if(!this.destroyed)return this.autoRenderingEnabled=!0,e(),this.renderNow(),D()}));try{await this._transition.finished}finally{i===this._transition&&(this._transition=null)}}async _waitForInputs(){const t=Date.now(),e=()=>Array.from(this.domNode?.querySelectorAll("calcite-input")??[]);for(;0===e().length;)if(await y(nt),Date.now()-t>ot)return}_getFocusableInputs(){return Array.from(this.domNode?.querySelectorAll("calcite-input:not([read-only]):not([disabled])")??[])}_getFocusableElements(){const t=this.domNode?.querySelector(`.${H}`);return[...Array.from(t?.querySelectorAll("calcite-action:not([disabled])")??[]),...this._getFocusableInputs()]}};function tt(t){t?.setFocus()}function et(t){return(Array.isArray(t)?t:[t]).flat(10).filter((t=>!!t))}t([$("esri/core/t9n/Units"),i()],J.prototype,"_messagesUnits",void 0),t([$("esri/views/interactive/tooltip/t9n/Tooltip"),i()],J.prototype,"_messagesTooltip",void 0),t([i()],J.prototype,"info",void 0),t([i()],J.prototype,"tooltip",void 0),t([i()],J.prototype,"_mode",void 0),t([i()],J.prototype,"mode",null),t([i()],J.prototype,"_displayUnits",null),t([i()],J.prototype,"_inputUnitInfos",null),t([i()],J.prototype,"_formatters",null),t([i()],J.prototype,"fieldContext",null),J=t([n("esri.views.interactive.tooltip.content.TooltipContent")],J);const it=1,nt=50,ot=1e3;let st=class extends J{_renderContent(){const{area:t,radius:e,xSize:i,ySize:n,visibleElements:o}=this.info,s=this._messagesTooltip.sketch,l=this._formatters;return p(h,null,o.radius&&null!=e?p(X,{title:s.radius,value:l.length(e)}):null,o.size&&null!=i&&null!=n?p(X,{title:s.size,value:p(Q,{left:l.length(i),right:l.length(n)})}):null,o.area?p(X,{title:s.area,value:l.area(t)}):null)}};st=t([n("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],st);const lt=`${R}-editable-field`,at={base:lt,inputMode:`${lt}--input`,locked:`${lt}--locked`,title:`${lt}__title`,titleContent:`${lt}__title__content`,value:`${lt}__value`,valueContent:`${lt}__value__content`,valueContentReadOnly:`${lt}__value__content--read-only`,input:`${lt}__input`,inputSuffix:`${lt}__input-suffix`,button:`${lt}__button`};let rt=class extends r{constructor(){super(...arguments),this._input=null,this._selectText=()=>{const t=()=>{this._input===document.activeElement&&this._input?.selectText()};t(),j().then(t)},this._onKeyDown=t=>{t.key===z.discard&&this._discard()},this._onInputKeyDown=t=>{switch(t.key){case z.commit:return this._commit({type:"commit-and-exit",allowLockingCurrentValue:!0});case z.next:return t.preventDefault(),t.stopPropagation(),this._commit({type:t.shiftKey?"commit-and-previous":"commit-and-next",allowLockingCurrentValue:!1})}},this._onInput=t=>{this.field.inputValue=t.target.value},this._onLockClick=()=>{const{field:t}=this;t.locked?t.unlock():this._lock()}}initialize(){this.addHandles(s((()=>this._rawDisplayValue),(()=>{const{committed:t,inputValue:e}=this.field;t||e||this._input!==document.activeElement||this._selectText()})))}loadDependencies(){return c({action:()=>import("./calcite-action.js"),icon:()=>import("./calcite-icon.js"),input:()=>import("./calcite-input.js")})}render(){const{mode:t,field:e}=this,i="input"===t,{locked:n}=e;return p("div",{class:this.classes({[at.base]:!0,[at.inputMode]:"input"===t,[at.locked]:n})},p("div",{class:at.title,key:"title"},p("div",{class:at.titleContent,key:"title-content"},this._title,n&&!i?p("calcite-icon",{icon:"lock",key:"icon",scale:"s"}):null)),p("div",{class:at.value,key:"value"},i?this._renderInputModeValue():this._renderFeedbackModeValue()))}get _initialValue(){const{field:t}=this;return null!=t.actual?t.toInputUnits(t.actual,this.context).value:null}get _formattedValue(){const{context:t,field:e}=this,{actual:i,format:n}=e;return null!=i?n(i,t):ct}get _rawDisplayValue(){const{field:t}=this,{inputValue:e,committed:i}=t;return null!=e?e:null!=i?this._toString(t.toInputUnits(i,this.context).value):this._toString(this._initialValue)}get _suffix(){const{suffix:t}=this.field;return"string"==typeof t?t:t(this.context)}get _title(){const{title:t}=this.field;return"string"==typeof t?t:t(this.context)}_renderFeedbackModeValue(){return p("span",{key:"value-feedback"},this._formattedValue)}_renderInputModeValue(){return this.field.readOnly?this._renderValueReadOnly():this._renderValueWritable()}_renderValueReadOnly(){return p("span",{class:at.valueContentReadOnly,key:"value-readonly"},this._formattedValue)}_renderValueWritable(){const{locked:t,name:e}=this.field,i=this.context?.messages.sketch??{},n=t?i.unlockConstraint:i.lockConstraint;return p("div",{class:at.valueContent,key:"value-writable",onkeydown:this._onKeyDown},p("calcite-input",{afterCreate:t=>{this._input=t},class:at.input,"data-field-name":e,onfocus:this._selectText,onkeydown:this._onInputKeyDown,scale:"s",type:"text",value:this._rawDisplayValue,onCalciteInputInput:this._onInput}),p("div",{class:at.inputSuffix,key:"suffix"},this._suffix),p("calcite-action",{alignment:"center",appearance:"transparent",class:at.button,compact:!0,icon:t?"lock":"unlock",label:n,onclick:this._onLockClick,scale:"s",tabIndex:-1,text:"",title:n}))}_commit({type:t,allowLockingCurrentValue:e}){const{_input:i,field:n}=this;i&&(n.locked&&""===n.inputValue?n.unlock():(e||null!=n.inputValue)&&this._lock(),this.context.onCommit(i,t))}_discard(){this._input&&(this.field.inputValue=null,this.context.onDiscard(this._input))}_lock(){const{field:t}=this,e=this._parseNumber(t.inputValue),i=null!=e?t.createQuantity(e,this.context):null;t.lock(i)}_parseNumber(t){if(null==t)return null;const e=parseFloat(t);return isNaN(e)||!isFinite(e)?null:e}_toString(t){return null!=t?t.toFixed(2):ct}};t([i()],rt.prototype,"field",void 0),t([i()],rt.prototype,"context",void 0),t([i()],rt.prototype,"mode",void 0),t([i()],rt.prototype,"_initialValue",null),t([i()],rt.prototype,"_formattedValue",null),t([i()],rt.prototype,"_input",void 0),t([i()],rt.prototype,"_rawDisplayValue",null),t([i()],rt.prototype,"_suffix",null),t([i()],rt.prototype,"_title",null),rt=t([n("esri.views.interactive.tooltip.components.TooltipEditableField")],rt);const ct="—";function ut(t){const e=t.fields.filter((t=>!0===t?.visible));return 0===e.length?null:p(h,null,e.map((e=>p(rt,{context:t.context,field:e,key:e.id,mode:t.mode}))))}let dt=class extends J{_renderContent(){const{fieldContext:t,info:e,mode:i}=this,{elevation:n,visibleElements:o}=e;return p(ut,{context:t,fields:[o.elevation?n:void 0],mode:i})}};dt=t([n("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],dt);let pt=class extends J{_renderContent(){const{fieldContext:t,info:e,mode:i}=this,{elevation:n,visibleElements:o}=e;return p(ut,{context:t,fields:[o.elevation?n:void 0],mode:i})}};pt=t([n("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],pt);let ht=class extends r{constructor(t){super(t),this._onDirectionModeChange=t=>{const e=t.target.selectedItems?.[0]?.getAttribute("data-mode");this.sketchOptions.values.directionMode=e??"absolute"}}render(){const{directionMode:t}=this.sketchOptions.values,e=this.messages?.sketch,i="absolute",n="relative";return p("div",{class:H},p("calcite-dropdown",{key:"direction-mode",placement:"bottom-end",scale:"s",widthScale:"s",onCalciteDropdownSelect:this._onDirectionModeChange},p("calcite-action",{alignment:"end",appearance:"transparent",icon:U[t],scale:"s",slot:"trigger",text:"",textEnabled:!1,title:e?.directionModeSelect?.title}),p("calcite-dropdown-group",{selectionMode:"single"},p("calcite-dropdown-item",{"data-mode":n,"data-testid":"tooltip-direction-mode-relative",iconStart:U.relative,key:"relative",selected:t===n},e?.directionModeSelect?.relative),p("calcite-dropdown-item",{"data-mode":i,"data-testid":"tooltip-direction-mode-absolute",iconStart:U.absolute,key:"absolute",selected:t===i},e?.directionModeSelect?.absolute))))}loadDependencies(){return c({action:()=>import("./calcite-action.js"),dropdown:()=>import("./calcite-dropdown.js"),"dropdown-item":()=>import("./calcite-dropdown-item.js"),"dropdown-group":()=>import("./calcite-dropdown-group.js")})}};t([$("esri/views/interactive/tooltip/t9n/Tooltip"),i()],ht.prototype,"messages",void 0),t([i()],ht.prototype,"sketchOptions",void 0),ht=t([n("esri.views.interactive.tooltip.components.DrawHeaderActions")],ht);let mt=class extends J{_renderContent(){const{fieldContext:t,info:e,mode:i}=this,{area:n,distance:o,elevation:s,direction:l,visibleElements:a}=e;return p(ut,{context:t,fields:[a.direction?l:void 0,a.distance?o:void 0,a.elevation?s:void 0,a.area?n:void 0],mode:i})}_renderActions(){return p(ht,{sketchOptions:this.info.sketchOptions})}};mt=t([n("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],mt);let vt=class extends J{_renderContent(){const{fieldContext:t,info:e,mode:i}=this,{distance:n,elevation:o,direction:s,totalLength:l,visibleElements:a}=e;return p(ut,{context:t,fields:[a.direction?s:void 0,a.distance?n:void 0,a.elevation?o:void 0,a.totalLength?l:void 0],mode:i})}_renderActions(){return p(ht,{sketchOptions:this.info.sketchOptions})}};vt=t([n("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],vt);let ft=class extends J{_renderContent(){const{area:t,xSize:e,ySize:i,visibleElements:n}=this.info,o=this._messagesTooltip.sketch,s=this._formatters;return p(h,null,n.size&&null!=e&&null!=i?p(X,{title:o.size,value:p(Q,{left:s.length(e),right:s.length(i)})}):null,n.area?p(X,{title:o.area,value:s.area(t)}):null)}};ft=t([n("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],ft);let _t=class extends J{_renderContent(){const{angle:t,visibleElements:e}=this.info,i=this._messagesTooltip.sketch;return p(h,null,e.rotation?p(X,{title:i.rotation,value:this._formatters.angleRelative(t)}):null)}};_t=t([n("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],_t);let gt=class extends J{_renderContent(){const t=this.info,{visibleElements:e}=t,i=this._messagesTooltip.sketch,n=this._formatters;return p(h,null,e.size?p(X,{title:i.size,value:p(Q,{left:n.length(t.xSize),right:n.length(t.ySize)})}):null,e.scale?p(X,{title:i.scale,value:p(Q,{left:n.scale(t.xScale),right:n.scale(t.yScale)})}):null)}};gt=t([n("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],gt);let yt=class extends J{_renderContent(){const{area:t,distance:e,totalLength:i,visibleElements:n}=this.info,o=this._messagesTooltip.sketch,s=this._formatters;return p(h,null,n.distance?p(X,{title:o.distance,value:s.lengthRelative(e)}):null,n.area&&null!=t?p(X,{title:o.area,value:s.area(t)}):null,n.totalLength&&null!=i?p(X,{title:o.totalLength,value:s.length(i)}):null)}};yt=t([n("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],yt);let wt=class extends J{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch,n=this._formatters;return p(h,null,e.orientation&&null!=t.orientation?p(X,{key:"orientation",title:i.orientation,value:w(t.orientation,t.rotationType,t.orientationPrecision)}):null,e.size&&null!=t.size?p(X,{key:"size",title:i.size,value:n.length(t.size,t.sizeUnit,t.sizePrecision)}):null)}};wt=t([n("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],wt);let xt=class extends J{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch;return p(h,null,e.rotation&&null!=t.rotation?p(X,{key:"rotation",title:i.rotation,value:M(t.rotation,t.rotationType,t.rotationPrecision)}):null,e.orientation&&null!=t.orientation?p(X,{key:"orientation",title:i.orientation,value:w(t.orientation,t.rotationType,t.orientationPrecision)}):null)}};xt=t([n("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],xt);let bt=class extends J{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch,n=this._formatters;return p(h,null,e.scale&&null!=t.scale?p(X,{key:"scale",title:i.scale,value:n.percentage(t.scale)}):null,e.size&&null!=t.size?p(X,{key:"size",title:i.size,value:n.length(t.size,t.sizeUnit,t.sizePrecision)}):null)}};bt=t([n("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],bt);let kt=class extends J{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch,n=this._formatters;return p(h,null,e.distance?p(X,{title:i.distance,value:n.length(t.distance)}):null)}};kt=t([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],kt);let Ct=class extends J{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch,n=this._formatters;return p(h,null,e.distance?p(X,{title:i.distance,value:n.length(t.distance)}):null)}};Ct=t([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],Ct);let Tt=class extends J{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch;return p(h,null,e.distance?p(X,{title:i.distance,value:this._formatters.verticalLengthRelative(t.distance)}):null)}};Tt=t([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],Tt);let Mt=class extends J{_renderContent(){const{distance:t,elevation:e,area:i,totalLength:n,visibleElements:o}=this.info,s=this._messagesTooltip.sketch,l=this._formatters;return p(h,null,o.distance?p(X,{title:s.distance,value:l.length(t)}):null,o.elevation&&null!=e?.actual?p(X,{title:s.elevation,value:l.verticalLength(e.actual)}):null,o.area&&null!=i?p(X,{title:s.area,value:l.area(i)}):null,o.totalLength&&null!=n?p(X,{title:s.totalLength,value:l.length(n)}):null)}};Mt=t([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],Mt);let Dt=class extends J{_renderContent(){const{area:t,distance:e,elevation:i,totalLength:n,visibleElements:o}=this.info,s=this._messagesTooltip.sketch,l=this._formatters;return p(h,null,o.distance?p(X,{title:s.distance,value:l.lengthRelative(e)}):null,o.elevation&&null!=i?.actual?p(X,{title:s.elevation,value:l.verticalLength(i.actual)}):null,o.area&&null!=t?p(X,{title:s.area,value:l.area(t)}):null,o.totalLength&&null!=n?p(X,{title:s.totalLength,value:l.length(n)}):null)}};Dt=t([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],Dt);let jt=class extends J{_renderContent(){const{distance:t,elevation:e,visibleElements:i}=this.info,n=this._messagesTooltip.sketch,o=this._formatters;return p(h,null,i.distance?p(X,{title:n.distance,value:o.verticalLengthRelative(t)}):null,i.elevation&&null!=e?.actual?p(X,{title:n.elevation,value:o.verticalLength(e.actual)}):null)}};jt=t([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],jt);const Et={base:`${R}`};let Vt=class extends e{constructor(t){super(t),this.info=null,this.positionMode="follow-cursor",this.content=null,this.contentContainer=(()=>{const t=document.createElement("div");return t.classList.add(Et.base),a(t),t})()}initialize(){const{contentContainer:t}=this;this.addHandles([s((()=>this.view.overlay?.surface),(e=>{t.remove(),e?.appendChild(t)}),l),s((()=>this.info),((e,i)=>{if(null!=this.content&&null!=e&&null!=i&&e.type===i.type)this.content.info=e;else{this.content=o(this.content);const i=function(t,e){if(null==e)return null;const i=document.createElement("div");switch(e.type){case"draw-point":return new pt({tooltip:t,info:e,container:i});case"draw-polygon":return new mt({tooltip:t,info:e,container:i});case"draw-polyline":return new vt({tooltip:t,info:e,container:i});case"draw-mesh":return new dt({tooltip:t,info:e,container:i});case"draw-rectangle":return new ft({tooltip:t,info:e,container:i});case"draw-circle":return new st({tooltip:t,info:e,container:i});case"extent-rotate":return new _t({tooltip:t,info:e,container:i});case"extent-scale":return new gt({tooltip:t,info:e,container:i});case"transform-absolute":return new wt({tooltip:t,info:e,container:i});case"transform-rotate":return new xt({tooltip:t,info:e,container:i});case"transform-scale":return new bt({tooltip:t,info:e,container:i});case"translate-graphic":return new kt({tooltip:t,info:e,container:i});case"translate-graphic-z":return new Tt({tooltip:t,info:e,container:i});case"translate-graphic-xy":return new Ct({tooltip:t,info:e,container:i});case"translate-vertex":return new Mt({tooltip:t,info:e,container:i});case"translate-vertex-z":return new jt({tooltip:t,info:e,container:i});case"translate-vertex-xy":return new Dt({tooltip:t,info:e,container:i});case"reshape-edge-offset":return new yt({tooltip:t,info:e,container:i})}}(this,e);i&&(this.content=i,i.container&&t.appendChild(i.container))}}),l),s((()=>({container:this.contentContainer,content:this.content,screenPoint:this._screenPoint,positionMode:this.positionMode})),Ft,l)])}destroy(){this.info=null,this.content=o(this.content),this.contentContainer.remove()}get mode(){return this.content?.mode??"feedback"}get test(){return{visible:"none"!==this.contentContainer?.style.display}}get _screenPoint(){const t=this.view.inputManager;return t?.multiTouchActive?null:t?.latestPointerLocation}clear(){this.info=null}async enterInputMode(t){await(this.content?.enterInputMode(t))}async exitInputMode(){await(this.content?.exitInputMode())}};function Ft({container:t,content:e,screenPoint:i,positionMode:n}){const{style:o}=t;if("fixed"!==n)if(null!=i&&null!=e){o.display="block";const e=d(t),n=`translate(${Math.round(i.x)+It[0]*(e?-1:1)}px, ${Math.round(i.y)+It[1]}px)`;o.transform=e?`translate(-100%, 0) ${n}`:n}else o.display="none"}t([i({nonNullable:!0})],Vt.prototype,"view",void 0),t([i()],Vt.prototype,"info",void 0),t([i()],Vt.prototype,"positionMode",void 0),t([i()],Vt.prototype,"content",void 0),t([i()],Vt.prototype,"mode",null),t([i()],Vt.prototype,"contentContainer",void 0),t([i()],Vt.prototype,"_screenPoint",null),Vt=t([n("esri.views.interactive.tooltip.Tooltip")],Vt);const It=[20,20];export{A as S,Vt as T};