/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{formatNumber as t,substitute as i}from"../intl.js";import{o as s}from"../core/promiseUtils.js";import{d as l}from"../chunks/maybe.js";import{watch as a,initial as n,when as r}from"../core/reactiveUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import{cast as c}from"../core/accessorSupport/decorators/cast.js";import"../core/lang.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import m from"./Slider.js";import d,{l as p}from"./Widget.js";import{g as h}from"../chunks/assets.js";import{g as v}from"../chunks/locale.js";import S from"./ScaleRangeSlider/ScaleRanges.js";import g from"./ScaleRangeSlider/ScaleRangeSliderViewModel.js";import{g as b}from"../chunks/globalCss.js";import{s as f}from"../chunks/widgetUtils.js";import{m as M}from"../chunks/messageBundle.js";import{t as _}from"../chunks/jsxFactory.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../config.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/Logger.js";import"../chunks/messages.js";import"../core/Error.js";import"../chunks/handleUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/ensureType.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/legacyIcon.js";import"./Slider/SliderViewModel.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";const w="esri-scale-range-slider",j=`${w}__scale-menu`,k={base:w,segmentElementActive:`${w}__segment-active`,scaleIndicatorWrapper:`${w}__scale-indicator-wrapper`,scaleIndicator:`${w}__scale-indicator`,scaleIndicatorIcon:`${w}__scale-indicator-icon`,scaleIndicatorContainer:`${w}__scale-indicator-container`,scaleMenuContainer:`${j}-container`,scaleMenuSeparator:`${j}-separator`,scaleMenuToggle:`${j}-toggle`,scaleMenuSubLabel:`${j}-sublabel`,scalePreview:`${w}__scale-preview`,scalePreviewThumbnail:`${w}__scale-preview-thumbnail`},y=v().substr(0,2);var x;!function(e){e.ar="ar",e.bg="bg",e.cs="cs",e.da="da",e.de="de",e.el="el",e.en="en",e.es="es",e.et="et",e.fi="fi",e.fr="fr",e.is="is",e.it="it",e.ja="ja",e.ko="ko",e.lt="lt",e.lv="lv",e.nl="nl",e.nn="nn",e.pl="pl",e.pt="pt",e.ro="ro",e.ru="ru",e.sk="sk",e.sv="sv",e.th="th",e.zh="zh"}(x||(x={}));const I={ae:x.en,ar:x.es,at:x.de,au:x.en,be:x.nl,bg:x.bg,bo:x.es,br:x.pt,ca:x.en,ch:x.de,ci:x.fr,cl:x.es,cn:x.zh,co:x.es,cr:x.es,cz:x.cs,de:x.de,dk:x.da,ee:x.et,eg:x.en,es:x.es,fi:x.fi,fr:x.fr,gb:x.en,gl:x.da,gr:x.el,gt:x.es,hk:x.en,id:x.en,ie:x.en,il:x.en,in:x.en,iq:x.ar,is:x.is,it:x.it,jp:x.ja,ke:x.en,kr:x.ko,kw:x.ar,li:x.de,lt:x.lt,lu:x.en,lv:x.lv,ma:x.fr,mg:x.fr,ml:x.fr,mo:x.en,mx:x.es,my:x.en,ni:x.es,nl:x.nl,no:x.nn,nz:x.en,pe:x.es,pl:x.pl,pr:x.es,pt:x.pt,ro:x.ro,ru:x.ru,rw:x.en,se:x.sv,sg:x.en,sk:x.sk,sr:x.nl,sv:x.es,th:x.th,tn:x.fr,tw:x.zh,us:x.en,ve:x.es,vi:x.en,wo:x.en,za:x.en},L=new Set(["ar-iq","ar-kw","bg-bg","cs-cz","da-dk","da-gl","de-at","de-ch","de-de","de-li","el-gr","en-ae","en-au","en-ca","en-eg","en-gb","en-hk","en-id","en-ie","en-il","en-in","en-iq","en-ke","en-lu","en-mo","en-my","en-nz","en-rw","en-sg","en-us","en-vi","en-wo","en-za","es-ar","es-bo","es-cl","es-co","es-cr","es-es","es-gt","es-mx","es-ni","es-pe","es-pr","es-sv","es-ve","et-ee","fi-fi","fr-ci","fr-fr","fr-ma","fr-mg","fr-ml","fr-tn","is-is","it-it","ja-jp","ko-kr","lt-lt","lv-lv","nl-be","nl-nl","nl-sr","nn-no","pl-pl","pt-br","pt-pt","ro-ro","ru-ru","sk-sk","sv-se","th-th","zh-cn","zh-tw"]);function C(e){e=function(e){return e.toLowerCase()}(e);const t=`${y}-${e}`,i=`${I[e]}-${e}`;return s=L.has(t)?t:L.has(i)?i:"en-wo",`url(${h(`esri/widgets/ScaleRangeSlider/images/scalePreview/${s}.jpg`)})`;var s}function T(e){if(!(e<0||e>=25))return`-${e%5*128}px -${128*Math.floor(e/5)}px`}const R={preview:!0,scaleMenus:{maxScaleMenu:!0,minScaleMenu:!0}},$={maximumFractionDigits:0};let E=class extends d{constructor(e,t){super(e,t),this._activeMenu=null,this._activeThumb=null,this._customInput=null,this._maxThumbNode=null,this._minThumbNode=null,this._previewAutoCloseTimeoutId=void 0,this._previewPopover=null,this._slider=new m({thumbCreatedFunction:(e,t,i)=>{0===e?this._minThumbNode=i:1===e&&(this._maxThumbNode=i),this.addHandles([s(i,"mouseenter",(()=>{this._activeThumb=e,this.scheduleRender()})),s(i,"mouseleave",(()=>{this._previewAutoCloseTimeoutId||(this._activeThumb=null,this.scheduleRender())}))])}}),this.disabled=!1,this.messages=null,this.region="US",this.viewModel=new g,this.visibleElements=R,this._afterInputNumberCreate=e=>{"value"in e&&null!=e.value&&"setNumberValue"in e&&e.setNumberValue({committing:!1,value:e.value,origin:"direct"}),this._customInput=e},this._handleCustomScaleInputChange=(e,t)=>{const{viewModel:{scaleRanges:i}}=this,s=Number.parseFloat(t.value);Number.isNaN(s)?t.value=e:this._setScale(i.clampScale(s))}}loadDependencies(){return p({button:()=>import("../chunks/calcite-button.js"),dropdown:()=>import("../chunks/calcite-dropdown.js"),"dropdown-group":()=>import("../chunks/calcite-dropdown-group.js"),"dropdown-item":()=>import("../chunks/calcite-dropdown-item.js"),icon:()=>import("../chunks/calcite-icon.js"),"input-number":()=>import("../chunks/calcite-input-number.js"),label:()=>import("../chunks/calcite-label.js"),popover:()=>import("../chunks/calcite-popover.js")})}initialize(){this.addHandles([a((()=>this.viewModel),(e=>this._slider.viewModel=e?.sliderViewModel??null),n),a((()=>this._interactive),(e=>{this._slider.disabled=!e,e||this._setActiveMenu(null)}),n),this._slider.on("thumb-drag",(({index:e})=>{this._activeThumb=e,clearTimeout(this._previewAutoCloseTimeoutId),this._previewAutoCloseTimeoutId=setTimeout((()=>{this._previewAutoCloseTimeoutId=void 0,this._activeThumb=null}),250)})),r((()=>!0===this.view?.stationary),(()=>this.scheduleRender()))])}destroy(){this._slider=l(this._slider)}get _maxScaleMenuEnabled(){const{scaleMenus:e}=this.visibleElements;return!0===e||"boolean"!=typeof e&&e.maxScaleMenu}get _minScaleMenuEnabled(){const{scaleMenus:e}=this.visibleElements;return!0===e||"boolean"!=typeof e&&e.minScaleMenu}get _interactive(){return"disabled"!==this.viewModel?.state&&!this.disabled}get effectiveMaxScale(){return this.viewModel.effectiveMaxScale}get effectiveMinScale(){return this.viewModel.effectiveMinScale}get effectiveMaxScaleLimit(){return this.viewModel.effectiveMaxScaleLimit}get effectiveMinScaleLimit(){return this.viewModel.effectiveMinScaleLimit}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get layer(){return this.viewModel.layer}set layer(e){this.viewModel.layer=e}get maxScale(){return this.viewModel.maxScale}set maxScale(e){this.viewModel.maxScale=e}get maxScaleLimit(){return this.viewModel.maxScaleLimit}set maxScaleLimit(e){this.viewModel.maxScaleLimit=e}get mode(){return this.viewModel.mode}set mode(e){this.viewModel.mode=e}get minScale(){return this.viewModel.minScale}set minScale(e){this.viewModel.minScale=e}get minScaleLimit(){return this.viewModel.minScaleLimit}set minScaleLimit(e){this.viewModel.minScaleLimit=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}castVisibleElements(e){return{...R,...e,scaleMenus:"boolean"==typeof e?.scaleMenus?e.scaleMenus:{...R.scaleMenus,...e?.scaleMenus}}}formatScale(e){return`1:${t(e,$)}`}render(){const{_interactive:e,_slider:t,label:i,view:s,viewModel:{state:l}}=this,a=this._getLabel("min"),n=this._getLabel("max"),{segmentElements:r}=t,o=r.at("min-scale-only"===this.mode?-1:-2);return o&&o.classList.add(k.segmentElementActive),_("div",{"aria-label":i,class:this.classes(k.base,b.widget,e?null:b.disabled)},_("div",{class:k.scaleIndicatorWrapper,dir:"ltr"},"ready"===l&&s?this._renderCurrentScaleIndicator():null,t.render(),this._renderPreviewPopover()),_("div",{class:k.scaleMenuContainer},this._minScaleMenuEnabled&&a?this._renderScaleMenuToggle("min",a):null,_("div",{class:k.scaleMenuSeparator}),this._maxScaleMenuEnabled&&n?this._renderScaleMenuToggle("max",n):null))}_renderPreviewPopover(){const{_activeThumb:e}=this,t=null!=e&&this.visibleElements.preview,i=t?0===e?this._minThumbNode:this._maxThumbNode:"";return _("calcite-popover",{afterCreate:f,afterUpdate:()=>this._previewPopover?.reposition(),bind:this,"data-node-ref":"_previewPopover",label:this.messages.preview,offsetDistance:16,open:t,overlayPositioning:"fixed",placement:"top",referenceElement:i,triggerDisabled:!0},this._renderScalePreview())}_renderScalePreview(){const{_activeThumb:e,_slider:t,region:i,viewModel:{scaleRanges:s}}=this,l=0===e||"range"!==this.mode?t.values[0]:t.values[1],a=Object.keys(S.RecommendedScales).indexOf(s.findScaleRangeByIndex(l).id),n={backgroundImage:C(i),backgroundPosition:T(a)};return _("div",{class:k.scalePreview},_("div",{class:k.scalePreviewThumbnail,styles:n}))}_getLabel(e){const{_slider:t,messages:i,mode:s,viewModel:{scaleRanges:l}}=this,[a,n]=t.values,r="min"===e||"range"!==s?a:n,o=i.scaleRangeLabels[l.findScaleRangeByIndex(r).id];switch(s){case"range":return o;case"max-scale-only":return"min"===e?null:o;case"min-scale-only":return"min"===e?o:null}}_renderScaleMenuToggle(e,t){const{_activeMenu:i,_interactive:s}=this,l=i===e;return[_("calcite-dropdown",{closeOnSelectDisabled:!0,"data-type":e,open:l,overlayPositioning:"fixed",placement:"max"===e?"bottom-end":"bottom-start",scale:"s",onCalciteDropdownClose:({target:t})=>{this._activeMenu===e&&this._setActiveMenu(null),t.setFocus()},onCalciteDropdownOpen:()=>this._setActiveMenu(e)},_("calcite-button",{appearance:l?"outline":"transparent","aria-pressed":l.toString(),class:k.scaleMenuToggle,disabled:!s,iconEnd:"chevron-down",scale:"s",slot:"trigger"},t),l&&"max"===e?this._renderMaxScaleMenu():null,l&&"min"===e?this._renderMinScaleMenu():null)]}_renderMinScaleMenu(){const{effectiveMaxScale:e,effectiveMinScaleLimit:t,view:i,viewModel:{scaleRanges:s}}=this,l=i?i.scale:void 0;return this._renderScaleMenu({type:"min",min:t,max:s.findScaleRange(e).minScale,viewScale:l})}_renderMaxScaleMenu(){const{effectiveMinScale:e,effectiveMaxScaleLimit:t,view:i,viewModel:{scaleRanges:s}}=this,l=i?i.scale:void 0;return this._renderScaleMenu({type:"max",min:s.findScaleRange(e).maxScale,max:t,viewScale:l})}_renderScaleMenu({viewScale:e,min:t,max:i,type:s}){const{effectiveMaxScale:l,effectiveMinScale:a,messages:n}=this,r="max"===s?l:a,o=S.fromScaleRange({minScale:t,maxScale:i}),c=this.messages.featuredScaleLabels,u=S.RecommendedScales,m=Object.keys(u).filter((e=>o.contains(u[e]))).map((e=>this._renderScaleMenuItem({scaleLabel:c[e],scaleValue:u[e],isSelected:r===u[e],valueVisible:"world"!==e})));return _("calcite-dropdown-group",{key:`${this.id}__scale-menu--${s}`},this._renderCustomScaleValue({currentScale:r}),null!=e?this._renderScaleMenuItem({scaleValue:e,scaleLabel:n.featuredScaleLabels.current,isSelected:r===e,valueVisible:!0}):null,m)}_renderCustomScaleValue({currentScale:e}){const{messages:t}=this,i=Math.round(e).toString();return _("calcite-dropdown-item",{afterCreate:e=>{e.setFocus()},key:"custom-scale",label:t.featuredScaleLabels.custom,onCalciteDropdownItemSelect:()=>{this._customInput?.setFocus()}},_("calcite-label",{scale:"s"},_("span",null,t.featuredScaleLabels.custom),_("calcite-input-number",{afterCreate:this._afterInputNumberCreate,groupSeparator:!0,inputMode:"numeric",max:S.RecommendedScales.world,min:0,numberButtonType:"none",placeholder:t.customScaleInputTooltip,prefixText:"1:",scale:"s",step:1,value:i,onCalciteInputNumberChange:({target:e})=>this._handleCustomScaleInputChange(i,e)})))}_renderScaleMenuItem(e){const{scaleValue:t,scaleLabel:i,valueVisible:s,isSelected:l}=e;return _("calcite-dropdown-item",{key:i,label:i,selected:l,onCalciteDropdownItemSelect:this._setScale.bind(this,t)},i,s?_("div",{class:k.scaleMenuSubLabel},this.formatScale(t)):void 0)}_renderCurrentScaleIndicator(){const{_slider:e,messages:t,view:s,viewModel:{scaleRanges:l}}=this,a=l.clampScale(s.scale),n=this.viewModel.mapScaleToSlider(a),r=n/e.max,o=t.scaleRangeLabels[l.findScaleRangeByIndex(n).id],c=i(t.currentScaleTooltip,{scaleLabel:o});return _("div",{class:k.scaleIndicatorContainer,key:"scale-indicator"},_("div",{"aria-label":c,class:k.scaleIndicator,styles:{left:100*r+"%"},title:c},this.renderCurrentScaleIndicatorIcon()))}renderCurrentScaleIndicatorIcon(){return _("calcite-icon",{class:k.scaleIndicatorIcon,icon:"caret-up",scale:"s"})}_setScale(e){"max"===this._activeMenu?this.maxScale=Math.min(e,this.effectiveMinScale-1):this.minScale=Math.max(e,this.effectiveMaxScale+1),this._setActiveMenu(null)}_setActiveMenu(e){this._activeMenu=e}};e([o()],E.prototype,"_activeMenu",void 0),e([o()],E.prototype,"_activeThumb",void 0),e([o()],E.prototype,"_customInput",void 0),e([o()],E.prototype,"_maxScaleMenuEnabled",null),e([o()],E.prototype,"_minScaleMenuEnabled",null),e([o()],E.prototype,"_slider",void 0),e([o({readOnly:!0})],E.prototype,"_interactive",null),e([o()],E.prototype,"disabled",void 0),e([o()],E.prototype,"effectiveMaxScale",null),e([o()],E.prototype,"effectiveMinScale",null),e([o()],E.prototype,"effectiveMaxScaleLimit",null),e([o()],E.prototype,"effectiveMinScaleLimit",null),e([o()],E.prototype,"label",null),e([o()],E.prototype,"layer",null),e([o()],E.prototype,"maxScale",null),e([o()],E.prototype,"maxScaleLimit",null),e([o(),M("esri/widgets/ScaleRangeSlider/t9n/ScaleRangeSlider")],E.prototype,"messages",void 0),e([o()],E.prototype,"mode",null),e([o()],E.prototype,"minScale",null),e([o()],E.prototype,"minScaleLimit",null),e([o()],E.prototype,"region",void 0),e([o()],E.prototype,"view",null),e([o()],E.prototype,"viewModel",void 0),e([o()],E.prototype,"visibleElements",void 0),e([c("visibleElements")],E.prototype,"castVisibleElements",null),E=e([u("esri.widgets.ScaleRangeSlider")],E);const P=E;export{P as default};
