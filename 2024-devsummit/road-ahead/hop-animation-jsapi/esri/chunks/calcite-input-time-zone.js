// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ./componentsUtils ./label2 ./interactive ./locale ./t9n ./loadable ./form ./chip ./combobox ./combobox-item ./icon ./input-message".split(" "),function(w,r,e,x,y,t,p,u,q,F,G,H,I,J){function z(a){return a.replace(":15",".25").replace(":30",".5").replace(":45",".75").replace("\u2212","-")}function K(a,b){a=A(a,"en-US",b).replace("GMT","");return""===a?0:60*Number(z(a))}async function L(a,b,g,l){const v=l.getTime();l=Intl.supportedValuesOf("timeZone");return"offset"===g?(B||=
Promise.all([new Promise((c,n)=>w(["./index3"],c,n)),new Promise((c,n)=>w(["./index4"],c,n))]),B.then(async([{groupTimeZones:c},{DateEngine:n}])=>{c=await c({dateEngine:new n,groupDateRange:1,startDate:(new Date(v)).toISOString()});const M=new Intl.ListFormat(a,{style:"long",type:"conjunction"});c.forEach(d=>{const h=[];let m=0;d.tzs.forEach((f,k)=>{C.includes(f)&&m++;h[k]=m});d.tzs=d.tzs.filter(f=>!C.includes(f));d.labelTzIndices=d.labelTzIndices.map(f=>f-h[f]).filter(f=>0<=f&&f<d.tzs.length)});
return c.map(({labelTzIndices:d,tzs:h})=>{var m=h[0];const f=z(A(m,a,v));m=K(m,v);d=d.map(k=>{k=h[k];return b[k]||k.split("/").pop()});return{label:N(b,f,M.format(d)),value:m,filterValue:h.map(k=>k.replace(/_/g," "))}}).filter(d=>!!d).sort((d,h)=>d.value-h.value)})):l.map(c=>({label:c.replace(/_/g," "),value:c,filterValue:c})).filter(c=>!!c).sort()}function N(a,b,g){return a.timeZoneLabel.replace("{offset}",b).replace("{cities}",g)}function A(a,b,g=Date.now()){return t.getDateTimeFormat(b,{timeZone:a,
timeZoneName:"shortOffset"}).formatToParts(g).find(({type:l})=>"timeZoneName"===l).value}function D(){"undefined"!==typeof customElements&&"calcite-input-time-zone calcite-chip calcite-combobox calcite-combobox-item calcite-icon calcite-input-message".split(" ").forEach(a=>{switch(a){case "calcite-input-time-zone":customElements.get(a)||customElements.define(a,E);break;case "calcite-chip":customElements.get(a)||F.defineCustomElement();break;case "calcite-combobox":customElements.get(a)||G.defineCustomElement();
break;case "calcite-combobox-item":customElements.get(a)||H.defineCustomElement();break;case "calcite-icon":customElements.get(a)||I.defineCustomElement();break;case "calcite-input-message":customElements.get(a)||J.defineCustomElement()}})}const C="CET CST6CDT EET EST EST5EDT Factory HST MET MST MST7MDT PST8PDT UTC WET".split(" ");let B;const E=e.proxyCustomElement(class extends e.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInputTimeZoneBeforeClose=e.createEvent(this,
"calciteInputTimeZoneBeforeClose",6);this.calciteInputTimeZoneBeforeOpen=e.createEvent(this,"calciteInputTimeZoneBeforeOpen",6);this.calciteInputTimeZoneChange=e.createEvent(this,"calciteInputTimeZoneChange",6);this.calciteInputTimeZoneClose=e.createEvent(this,"calciteInputTimeZoneClose",6);this.calciteInputTimeZoneOpen=e.createEvent(this,"calciteInputTimeZoneOpen",6);this.setComboboxRef=a=>{this.comboboxEl=a};this.onComboboxBeforeClose=a=>{a.stopPropagation();this.calciteInputTimeZoneBeforeClose.emit()};
this.onComboboxBeforeOpen=a=>{a.stopPropagation();this.calciteInputTimeZoneBeforeOpen.emit()};this.onComboboxChange=a=>{a.stopPropagation();a=this.findTimeZoneItem(a.target.selectedItems[0].getAttribute("data-value"));const b=`${a.value}`;this.value!==b&&(this.value=b,this.selectedTimeZoneItem=a,this.calciteInputTimeZoneChange.emit())};this.onComboboxClose=a=>{a.stopPropagation();this.open=!1;this.calciteInputTimeZoneClose.emit()};this.onComboboxOpen=a=>{this.open=!0;a.stopPropagation();this.calciteInputTimeZoneOpen.emit()};
this.disabled=!1;this.form=void 0;this.maxItems=0;this.messageOverrides=this.messages=void 0;this.mode="offset";this.name=this.validationIcon=this.validationMessage=void 0;this.open=!1;this.overlayPositioning="absolute";this.referenceDate=void 0;this.required=!1;this.scale="m";this.status="idle";this.defaultMessages=this.value=void 0;this.effectiveLocale=""}onMessagesChange(){}handleTimeZoneItemPropsChange(){this.updateTimeZoneItemsAndSelection()}handleValueChange(a,b){(a=this.findTimeZoneItem(a))?
this.selectedTimeZoneItem=a:this.value=b}async setFocus(){await u.componentFocusable(this);await this.comboboxEl.setFocus()}effectiveLocaleWatcher(){p.updateMessages(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}findTimeZoneItem(a){return this.timeZoneItems.find(({value:b})=>b==a)}async updateTimeZoneItemsAndSelection(){this.timeZoneItems=await this.createTimeZoneItems();const a="offset"===this.mode?-1*(new Date).getTimezoneOffset():(new Intl.DateTimeFormat).resolvedOptions().timeZone;
this.selectedTimeZoneItem=this.findTimeZoneItem(this.value??a);this.selectedTimeZoneItem||(this.selectedTimeZoneItem=this.findTimeZoneItem(a))}async createTimeZoneItems(){return this.effectiveLocale&&this.messages?L(this.effectiveLocale,this.messages,this.mode,this.referenceDate instanceof Date?this.referenceDate:new Date(this.referenceDate??Date.now())):[]}connectedCallback(){q.connectForm(this);x.connectLabel(this);t.connectLocalized(this);p.connectMessages(this)}disconnectedCallback(){q.disconnectForm(this);
x.disconnectLabel(this);t.disconnectLocalized(this);p.disconnectMessages(this)}async componentWillLoad(){u.setUpLoadableComponent(this);await p.setUpMessages(this);await this.updateTimeZoneItemsAndSelection();const a=`${this.selectedTimeZoneItem.value}`;q.afterConnectDefaultValueSet(this,a);this.value=a}componentDidLoad(){u.setComponentLoaded(this)}componentDidRender(){y.updateHostInteraction(this)}render(){return e.h(e.Host,null,e.h(y.InteractiveContainer,{disabled:this.disabled},e.h("calcite-combobox",
{clearDisabled:!0,disabled:this.disabled,label:this.messages.chooseTimeZone,lang:this.effectiveLocale,maxItems:this.maxItems,onCalciteComboboxBeforeClose:this.onComboboxBeforeClose,onCalciteComboboxBeforeOpen:this.onComboboxBeforeOpen,onCalciteComboboxChange:this.onComboboxChange,onCalciteComboboxClose:this.onComboboxClose,onCalciteComboboxOpen:this.onComboboxOpen,open:this.open,overlayPositioning:this.overlayPositioning,scale:this.scale,selectionMode:"single-persist",status:this.status,"validation-icon":this.validationIcon,
"validation-message":this.validationMessage,ref:this.setComboboxRef},this.timeZoneItems.map(a=>{const b=this.selectedTimeZoneItem===a,{label:g,value:l}=a;return e.h("calcite-combobox-item",{"data-value":l,key:g,selected:b,textLabel:g,value:`${a.filterValue}`})})),e.h(q.HiddenFormInputSlot,{component:this})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],
mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot\x3dhidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},
[17,"calcite-input-time-zone",{disabled:[516],form:[513],maxItems:[514,"max-items"],messages:[1040],messageOverrides:[1040],mode:[513],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],name:[513],open:[1540],overlayPositioning:[513,"overlay-positioning"],referenceDate:[1,"reference-date"],required:[516],scale:[513],status:[513],value:[1025],defaultMessages:[32],effectiveLocale:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],
mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}]);D();r.CalciteInputTimeZone=E;r.defineCustomElement=D;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});