// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!./Slider/nls/Slider ../intl ../core/deprecate ../core/events ../core/Logger ../core/maybe ../core/accessorSupport/decorators ../core/libs/pep/pep ../libs/resize-observer/ResizeObserver ./Widget ./Slider/SliderViewModel ./support/widget".split(" "),function(H,I,q,C,k,t,x,y,v,D,n,g,w,E,F,G,l){var z=D.getLogger("esri.widgets.Slider"),A={labels:!1,rangeLabels:!1};return function(B){function c(a){var b=
B.call(this,a)||this;b._activeLabelInputIndex=null;b._anchorElements=null;b._baseNode=null;b._dragged=!1;b._dragStartInfo=null;b._focusedAnchorIndex=null;b._isMinInputActive=!1;b._isMaxInputActive=!1;b._labelElements=[];b._lastMovedHandleIndex=null;b._observer=null;b._positionPrecision=5;b._segmentDragStartInfo=null;b._segmentElements=null;b._thumbElements=[];b._tickElements=[];b._trackHeight=null;b._trackWidth=null;b._zIndices=null;b._zIndexOffset=3;b.disabled=!1;b.extraNodes=[];b.draggableSegmentsEnabled=
!0;b.label=t.widgetLabel;b.labelFormatFunction=null;b.inputFormatFunction=null;b.inputParseFunction=null;b.labelInputsEnabled=!1;b.labels=null;b.max=null;b.min=null;b.precision=4;b.rangeLabelInputsEnabled=!1;b.snapOnClickEnabled=!0;b.steps=null;b.thumbsConstrained=!0;b.thumbCreatedFunction=null;b.tickConfigs=null;b.trackElement=null;b.values=null;b.viewModel=new G;b.visibleElements=q({},A);b._observer=new E(function(){return b.scheduleRender()});b._onAnchorPointerDown=b._onAnchorPointerDown.bind(b);
b._onAnchorPointerMove=b._onAnchorPointerMove.bind(b);b._onAnchorPointerUp=b._onAnchorPointerUp.bind(b);b._onLabelPointerDown=b._onLabelPointerDown.bind(b);b._onLabelPointerUp=b._onLabelPointerUp.bind(b);b._onSegmentPointerDown=b._onSegmentPointerDown.bind(b);b._onSegmentPointerMove=b._onSegmentPointerMove.bind(b);b._onSegmentPointerUp=b._onSegmentPointerUp.bind(b);b._onTrackPointerDown=b._onTrackPointerDown.bind(b);return b}C(c,B);Object.defineProperty(c.prototype,"labelsVisible",{set:function(a){y.deprecatedProperty(z,
"labelsVisible",{replacement:"visibleElements.labels",version:"4.15"});this.visibleElements=q({},this.visibleElements,{labels:a})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"layout",{set:function(a){-1===["vertical","vertical-reversed","horizontal","horizontal-reversed"].indexOf(a)&&(a="horizontal");this._set("layout",a)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"rangeLabelsVisible",{set:function(a){y.deprecatedProperty(z,"rangeLabelsVisible",{replacement:"visibleElements.rangeLabels",
version:"4.15"});this.visibleElements=q({},this.visibleElements,{rangeLabels:a})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"state",{get:function(){var a=this._activeLabelInputIndex,b=this._isMaxInputActive,h=this._isMinInputActive,d=this._segmentDragStartInfo,c=this.viewModel,d=n.isSome(this._dragStartInfo)||n.isSome(d);return null!==a||b||h?"editing":d?"dragging":c.state},enumerable:!0,configurable:!0});c.prototype.castVisibleElements=function(a){return q({},A,a)};c.prototype.render=
function(){var a=this.label,b=this.classes("esri-slider","esri-widget",this._isHorizontalLayout()?"esri-slider--horizontal":"esri-slider--vertical",this._isReversedLayout()?"esri-slider--reversed":null,this._isDisabled()?"esri-disabled":null);this._storeTrackDimensions();return l.tsx("div",{afterCreate:this._afterBaseNodeCreate,bind:this,"aria-label":a,class:b,"touch-action":"none"},this.renderContent())};c.prototype.toNextStep=function(a){this._toStep(a,1)};c.prototype.toPreviousStep=function(a){this._toStep(a,
-1)};c.prototype.renderContent=function(){return[this.renderMin(),this.renderSliderContainer(),this.renderMax()]};c.prototype.renderSliderContainer=function(){if(n.isSome(this.min)&&n.isSome(this.max))return l.tsx("div",{key:"slider-container",bind:this,class:"esri-slider__content"},this.renderTrackElement(),this.renderTicksContainer(),this.renderExtraContentElements())};c.prototype.renderTrackElement=function(){return l.tsx("div",{afterCreate:this._afterTrackCreate,bind:this,class:"esri-slider__track",
"data-node-ref":"trackElement","touch-action":"none"},this.renderSegmentElements(),this.renderAnchorElements())};c.prototype.renderSegmentElements=function(){if(this.trackElement&&this.values&&this.values.length){this._segmentElements=[];for(var a=this.values.length+1,b=[],h=0;h<a;h++)b.push(this.renderSegmentElement(h));return b}};c.prototype.renderSegmentElement=function(a){var b=this._trackHeight,h=this._trackWidth,d=this.draggableSegmentsEnabled,c=this.state,f=this.values,m=this._isHorizontalLayout(),
p=m?h:b,b=a===f.length?null:a,h=0===a?null:a-1,g=n.isSome(b),k=n.isSome(h),u,r=f.slice().sort(function(a,b){return a-b});this._isReversedLayout()?(f=k?this._positionFromValue(r[h]):m?p:0,u=g?this._positionFromValue(r[b]):m?0:p):(f=g?this._positionFromValue(r[b]):m?p:0,u=k?this._positionFromValue(r[h]):m?0:p);r=this._applyPrecisionToPosition(100*u/p);p=(f-u)/p;m=m?"transform: translate("+r+"%, 0px) scale("+p+", 1);":"transform: translate(0px, "+r+"%) scale(1, "+p+");";d=this.classes("esri-slider__segment",
"esri-slider__segment-"+a,d&&g&&k&&"disabled"!==c?"esri-slider__segment--interactive":null);return l.tsx("div",{afterCreate:this._afterSegmentCreate,bind:this,class:d,"data-max-thumb-index":b,"data-min-thumb-index":h,"data-segment-index":a,style:m,"touch-action":"none"})};c.prototype.renderAnchorElements=function(){var a=this,b=this.trackElement,h=this.values;if(h&&h.length)return this._anchorElements=[],this._thumbElements=[],this._labelElements=[],this._zIndices=h.map(function(b,c){b=a._positionFromValue(b);
b=a._positionToPercent(b);b=a._isHorizontalLayout()?50<b:50>b;return a._zIndexOffset+(h.length+(b?-1:1)*c)}),b&&h&&h.length?h.map(function(b,h){return a.renderAnchorElement(b,h)}):null};c.prototype.renderAnchorElement=function(a,b){var h=this._positionFromValue(a),h=this._valueFromPosition(h);if(n.isSome(h)&&!isNaN(h)){var d=this._dragStartInfo,h=this.id,c=this.layout,f=this.values,m=this.visibleElements.labels,p=d&&d.index===b,g=this._lastMovedHandleIndex===b,d=this.classes("esri-slider__anchor",
"esri-slider__anchor-"+b,p?"esri-slider__anchor--moving":null,g?"esri-slider__anchor--moved":null),k=this.labels.values[b],p=this._getStyleForAnchor(a,b,p||g),u=this.viewModel.getBoundsForValueAtIndex(b),g=u.min,u=u.max,k=2===f.length?0===b?x.substitute(t.rangeMinimum,{value:a}):x.substitute(t.rangeMaximum,{value:a}):k;return l.tsx("div",{afterCreate:this._afterAnchorCreate,afterUpdate:this._afterAnchorUpdate,"aria-controls":1===f.length?null:0===b?h+"-handle-"+(b+1):b===f.length-1?h+"-handle-"+(b-
1):h+"-handle-"+(b-1)+" "+h+"-handle-"+(b+1),"aria-label":t.sliderValue,"aria-labelledby":m?h+"-label-"+b:null,"aria-orientation":c,"aria-valuemax":u.toString(),"aria-valuemin":g.toString(),"aria-valuenow":a.toString(),"aria-valuetext":k,bind:this,class:d,"data-thumb-index":b,"data-value":a,id:h+"-handle-"+b,onkeydown:this._onAnchorKeyDown,"touch-action":"none",role:"slider",style:p,tabIndex:0},l.tsx("span",{afterCreate:this._afterThumbCreate,bind:this,class:"esri-slider__thumb","data-thumb-index":b,
"touch-action":"none"}),this.renderThumbLabel(b))}};c.prototype.renderThumbLabel=function(a){var b=this.id,h=this.labelInputsEnabled,c=this.state,e=this.visibleElements.labels,f=this.labels.values[a],c=this.classes("esri-slider__label",e?null:"esri-hidden",h&&"disabled"!==c?"esri-slider__label--interactive":null);return l.tsx("span",{afterCreate:this._afterLabelCreate,"aria-hidden":!e,bind:this,class:c,"data-thumb-index":a,id:b+"-label-"+a,role:h?"button":null,"touch-action":"none"},this._activeLabelInputIndex===
a?this.renderValueInput(a):f)};c.prototype.renderValueInput=function(a){return l.tsx("input",{afterCreate:this._afterInputCreate,"aria-label":t.sliderValue,bind:this,class:"esri-slider__label-input",required:!0,tabIndex:0,type:"text",value:this._formatInputValue(this.values[a],"value",a),onblur:this._onLabelInputBlur,onkeydown:this._onInputKeyDown})};c.prototype.renderMax=function(){var a=this._isMaxInputActive,b=this.labels,h=this.rangeLabelInputsEnabled,c=this.state,e=this.visibleElements.rangeLabels,
c=this.classes("esri-slider__max",e?null:"esri-hidden",h&&"disabled"!==c?"esri-slider__max--interactive":null);return l.tsx("div",{"aria-hidden":!e,bind:this,class:c,onclick:this._onMaxLabelClick,onkeydown:this._onMaxLabelKeyDown,role:h?"button":null,tabIndex:h?0:null},a?this.renderMaxInput():b.max)};c.prototype.renderMin=function(){var a=this._isMinInputActive,b=this.labels,h=this.rangeLabelInputsEnabled,c=this.state,e=this.visibleElements.rangeLabels,c=this.classes("esri-slider__min",e?null:"esri-hidden",
h&&"disabled"!==c?"esri-slider__min--interactive":null);return l.tsx("div",{"aria-hidden":!e,bind:this,class:c,onclick:this._onMinLabelClick,onkeydown:this._onMinLabelKeyDown,role:h?"button":null,tabIndex:h?0:null},a?this.renderMinInput():b.min)};c.prototype.renderMaxInput=function(){return l.tsx("input",{afterCreate:this._afterInputCreate,"aria-label":t.maximumValue,bind:this,class:"esri-slider__range-input",required:!0,tabIndex:0,type:"text",value:this._formatInputValue(this.max,"max"),onblur:this._onMaxInputBlur,
onkeydown:this._onInputKeyDown})};c.prototype.renderMinInput=function(){return l.tsx("input",{afterCreate:this._afterInputCreate,"aria-label":t.minimumValue,bind:this,class:"esri-slider__range-input",required:!0,tabIndex:0,type:"text",value:this._formatInputValue(this.min,"min"),onblur:this._onMinInputBlur,onkeydown:this._onInputKeyDown})};c.prototype.renderExtraContentElements=function(){return l.tsx("div",{bind:this,class:"esri-slider__extra-content"},this.extraNodes)};c.prototype.renderTicksContainer=
function(){var a=this;if(this.tickConfigs&&this.trackElement&&(0!==this._trackHeight||0!==this._trackWidth))return this.tickConfigs.map(function(b,h){return l.tsx("div",{key:"ticks-container",class:a.classes("esri-slider__ticks")},a.renderTicks(b,h))})};c.prototype.renderTicks=function(a,b){var h=this,c=a.mode,e=a.values;this._tickElements[b]=[];if("position"===c)return c=Array.isArray(e)?e:[e],this._calculateTickPositions(c).map(function(c,d){return h.renderTickGroup(a,d,b,c)});if("percent"===c&&
Array.isArray(e)){var f=this.min,m=this.max-f,c=e.map(function(a){return h._applyPrecisionToPosition(a/100*m+f)});return this._calculateTickPositions(c).map(function(c,d){return h.renderTickGroup(a,d,b,c)})}c=Array.isArray(e)&&e.length?e[0]:isNaN(e)?null:e;c=this._getTickCounts(c,a);return this._calculateEquidistantTickPositions(c).map(function(c,d){return h.renderTickGroup(a,d,b,c)})};c.prototype.renderTickGroup=function(a,b,h,c){var d="position"===a.mode?Array.isArray(a.values)?a.values[b]:a.values:
this._valueFromPosition(c);if(n.isSome(d)&&!isNaN(d))return l.tsx("div",{afterCreate:this._afterTickGroupCreate,bind:this,"data-config":a,"data-position":c,"data-tick-config-index":h,"data-tick-group-index":b,"data-value":d,key:"tick-group-"+b},this.renderTickLine(a,b,h,d),a.labelsVisible?this.renderTickLabel(a,b,h,d):null)};c.prototype.renderTickLine=function(a,b,h,c){return l.tsx("div",{afterCreate:this._afterTickLineCreate,"aria-valuenow":c.toString(),bind:this,class:"esri-slider__tick","data-tick-config-index":h,
"data-tick-group-index":b,"data-value":c,key:"tick-label-"+b,style:this._getPositionStyleForElement(c)})};c.prototype.renderTickLabel=function(a,b,h,c){a=a.labelFormatFunction?a.labelFormatFunction(c,"tick",b):this.viewModel.getLabelForValue(c,"tick",b);return l.tsx("div",{afterCreate:this._afterTickLabelCreate,"aria-label":a,"aria-valuenow":c.toString(),"aria-valuetext":a,bind:this,class:"esri-slider__tick-label","data-tick-config-index":h,"data-tick-group-index":b,"data-value":c,key:"tick-label-"+
b,style:"transform: translate(-50%); "+this._getPositionStyleForElement(c)},a)};c.prototype._afterBaseNodeCreate=function(a){this._baseNode&&this._observer.unobserve(this._baseNode);this._baseNode=a;this._observer.observe(this._baseNode)};c.prototype._afterTrackCreate=function(a){l.storeNode.call(this,a);w.applyLocal(a);a.addEventListener("pointerdown",this._onTrackPointerDown);this.scheduleRender()};c.prototype._afterSegmentCreate=function(a){this._segmentElements.push(a);w.applyLocal(a);a.addEventListener("pointerdown",
this._onSegmentPointerDown)};c.prototype._afterAnchorCreate=function(a){this._anchorElements.push(a);w.applyLocal(a);a.addEventListener("pointerdown",this._onAnchorPointerDown);if(this.thumbCreatedFunction){var b=a["data-thumb-index"];this.thumbCreatedFunction(b,a["data-value"],this._thumbElements[b]||null,this._labelElements[b]||null)}};c.prototype._afterAnchorUpdate=function(a){this._anchorElements.push(a);n.isSome(this._focusedAnchorIndex)&&a["data-thumb-index"]===this._focusedAnchorIndex&&(a.focus(),
this._focusedAnchorIndex=null)};c.prototype._afterThumbCreate=function(a){this._thumbElements.push(a)};c.prototype._afterLabelCreate=function(a){this._labelElements.push(a);w.applyLocal(a);a.addEventListener("pointerdown",this._onLabelPointerDown);a.addEventListener("pointerup",this._onLabelPointerUp)};c.prototype._afterInputCreate=function(a){a.focus();a.select()};c.prototype._afterTickLineCreate=function(a){var b=a["data-tick-group-index"],c=this._tickElements[a["data-tick-config-index"]];c[b]?
c[b].line=a:c[b]={line:a,label:null}};c.prototype._afterTickLabelCreate=function(a){var b=a["data-tick-group-index"],c=this._tickElements[a["data-tick-config-index"]];c[b]?c[b].label=a:c[b]={label:a,line:null}};c.prototype._afterTickGroupCreate=function(a){var b=a["data-config"];if(b&&b.tickCreatedFunction){var c=a["data-value"];(a=this._tickElements[a["data-tick-config-index"]][a["data-tick-group-index"]])&&b.tickCreatedFunction(c,a.line||null,a.label||null)}};c.prototype._onAnchorKeyDown=function(a){if(!this._isDisabled()&&
"editing"!==this.state){var b=a.target,c=v.eventKey(a),b=b["data-thumb-index"],d=this._anchorElements[b],e=this.values[b],f=this._isHorizontalLayout(),m=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];if("Enter"===c&&this.labelInputsEnabled)this._activeLabelInputIndex=b,this.notifyChange("state");else if(-1<m.indexOf(c))a.preventDefault(),c="ArrowUp"===c||"ArrowRight"===c?1:-1,n.isSome(this.steps)?this._toStep(b,this._isReversedLayout()?-1*c:c):(f=this._getPositionOfElement(d),c=this._isHorizontalLayout()?
c:-1*c,f+=c,c=0===this.precision?this._positionFromValue(this._valueFromPosition(f)+c):f,this._toPosition(b,c)),c=this.values[b],e!==c&&this._emitThumbChangeEvent({index:b,oldValue:e,value:c});else if("End"===c||"Home"===c)a.preventDefault(),d=this._getAnchorBoundsInPixels(b),a=d.min,d=d.max,this._toPosition(b,f?"End"===c?d:a:"Home"===c?d:a),c=this.values[b],e!==c&&this._emitThumbChangeEvent({index:b,oldValue:e,value:c})}};c.prototype._onAnchorPointerDown=function(a){a.preventDefault();if(!this._isDisabled()){var b=
a.clientX,c=a.clientY;a=a.target["data-thumb-index"];void 0!==a&&(this._anchorElements[a]&&this._anchorElements[a].focus(),this._storeTrackDimensions(),this._dragStartInfo={clientX:b,clientY:c,index:a,position:this._getPositionOfElement(this._anchorElements[a])},this.notifyChange("state"),document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))}};c.prototype._onAnchorPointerMove=function(a){a.preventDefault();if("editing"!==
this.state&&this._dragStartInfo){var b=this.values,c=this._dragged,d=this._dragStartInfo,e=this._dragStartInfo,f=e.index,e=e.position,m=a.clientX,g=a.clientY;a=c?"drag":"start";var k=this._getPositionOfElement(this._anchorElements[f]),d=this._applyPrecisionToPosition(this._isHorizontalLayout()?e+m-d.clientX:e+g-d.clientY);k!==d&&(b=b[f],this._dragged=!0,this._toPosition(f,d),d=this.values[f],c?b!==d&&this._emitThumbDragEvent({index:f,state:a,value:d}):this._emitThumbDragEvent({index:f,state:a,value:b}))}};
c.prototype._onAnchorPointerUp=function(a){a.preventDefault();document.removeEventListener("pointerup",this._onAnchorPointerUp);document.removeEventListener("pointermove",this._onAnchorPointerMove);if(this._dragStartInfo){a=this._dragStartInfo.index;var b=this._dragged;this._dragged=!1;this._dragStartInfo=null;this._lastMovedHandleIndex=a;b?(this.notifyChange("state"),this._emitThumbDragEvent({index:a,state:"stop",value:this.values[a]})):this.scheduleRender()}};c.prototype._onTrackPointerDown=function(a){var b=
this._dragStartInfo,c=this.snapOnClickEnabled,d=this.state,e=this.values;if(!this._isDisabled()&&"editing"!==d&&!b&&c&&e.length){var d=this.steps,b=a.clientX,c=a.clientY,f=this._getCursorPositionFromEvent(a);a=this._valueFromPosition(f);a=this._getIndexOfNearestValue(a);n.isSome(a)&&(e=e[a],d=n.isSome(d)?this._calculateNearestStepPosition(f):f,this._toPosition(a,d),this._dragged=!0,this._dragStartInfo={clientX:b,clientY:c,index:a,position:d},this._focusedAnchorIndex=a,this.notifyChange("state"),this._emitThumbDragEvent({index:a,
state:"start",value:e}),b=this.values[a],e!==b&&this._emitThumbDragEvent({index:a,state:"drag",value:b}),document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))}};c.prototype._onSegmentPointerDown=function(a){a.preventDefault();var b=this.draggableSegmentsEnabled,c=a.target,d=c["data-segment-index"],e=c["data-min-thumb-index"],c=c["data-max-thumb-index"];!this._isDisabled()&&b&&n.isSome(e)&&n.isSome(c)&&(a.stopPropagation(),
this._storeTrackDimensions(),this._segmentDragStartInfo={cursorPosition:this._getCursorPositionFromEvent(a),index:d,details:this._normalizeSegmentDetails({min:this._getAnchorDetails(e),max:this._getAnchorDetails(c)})},this.notifyChange("state"),this._emitSegmentDragEvent({index:d,state:"start",thumbIndices:[e,c]}),document.addEventListener("pointerup",this._onSegmentPointerUp),document.addEventListener("pointermove",this._onSegmentPointerMove))};c.prototype._onSegmentPointerMove=function(a){if(this._segmentDragStartInfo){a.preventDefault();
var b=this._trackHeight,c=this._trackWidth,d=this._segmentDragStartInfo,e=d.index,f=d.cursorPosition,d=d.details,m=d.min,g=d.max,d=m.index,k=m.position,l=m.value,m=g.index,n=g.position,g=g.value;this._dragged=!0;a=this._getCursorPositionFromEvent(a);if(a!==f){f=this._positionToPercent(f);a=this._positionToPercent(a)-f;f=this._positionToPercent(k)+a;k=this._positionToPercent(n)+a;n=this._getAnchorBoundsAsPercents(d).min;a=this._getAnchorBoundsAsPercents(m).max;var r=!1,q=!1;f<n?r=!0:k>a&&(q=!0);if(r)b=
this.viewModel.getBoundsForValueAtIndex(d),e=b.min,b=b.max,e=this._isPositionInverted()?b:e,this._updateAnchorValues([d,m],[e,g+(e-l)]);else if(q)b=this.viewModel.getBoundsForValueAtIndex(m),e=b.min,b=b.max,e=this._isPositionInverted()?e:b,this._updateAnchorValues([d,m],[l+(e-g),e]);else{var l=this._isHorizontalLayout()?c:b,g=k/100*l,b=this.values,t=[b[d],b[m]],l=this._getValueForAnchorAtPosition(d,f/100*l),g=this._getValueForAnchorAtPosition(m,g);this._updateAnchorValues([d,m],[l,g]);[this.values[d],
this.values[m]].every(function(a,b){return a===t[b]})||this._emitSegmentDragEvent({index:e,state:"drag",thumbIndices:[d,m]})}}}};c.prototype._onSegmentPointerUp=function(a){a.preventDefault();document.removeEventListener("pointerup",this._onSegmentPointerUp);document.removeEventListener("pointermove",this._onSegmentPointerMove);if(this._segmentDragStartInfo){a=this.values;var b=this._segmentDragStartInfo,c=b.index,d=b.details,b=d.min.index,d=d.max.index,e=this.max-this.min,f=a[b];this._lastMovedHandleIndex=
f===a[d]?f>e/2?b:d:null;this._dragged=!1;this._segmentDragStartInfo=null;this.notifyChange("state");this._emitSegmentDragEvent({index:c,state:"stop",thumbIndices:[b,d]})}};c.prototype._storeTrackDimensions=function(){if(this.trackElement){var a=this._getDimensions(this.trackElement);this._trackHeight=a.height;this._trackWidth=a.width}};c.prototype._onLabelPointerDown=function(){this._isDisabled()||(this._dragged=!1,document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",
this._onAnchorPointerMove))};c.prototype._onLabelPointerMove=function(){this._isDisabled()||(this._dragged=!0)};c.prototype._onLabelPointerUp=function(a){this._isDisabled()||(a=a.target["data-thumb-index"],this.labelInputsEnabled&&!this._dragged&&n.isSome(a)&&(this._activeLabelInputIndex=a),this._dragged=!1,this.notifyChange("state"),document.removeEventListener("pointerup",this._onLabelPointerUp),document.removeEventListener("pointermove",this._onLabelPointerMove))};c.prototype._onLabelInputBlur=
function(a){var b=this._activeLabelInputIndex,c=this.values,d=this.viewModel;a=a.target.value;this._activeLabelInputIndex=null;this.notifyChange("state");a&&(a=this._parseInputValue(a,"value",b),c=c[b],d.setValue(b,a),d=this.values[b],c!==d&&this._emitThumbChangeEvent({index:b,oldValue:c,value:d}))};c.prototype._onInputKeyDown=function(a){if(!this._isDisabled()){var b=a.target,c=v.eventKey(a),d=this._activeLabelInputIndex,e=this._anchorElements;if("Enter"===c||"Escape"===c||"Tab"===c)a.stopPropagation(),
b.blur(),n.isSome(d)?e[d].focus():b.parentElement.focus()}};c.prototype._onMaxLabelClick=function(){!this._isDisabled()&&this.rangeLabelInputsEnabled&&(this._isMaxInputActive=!0,this.notifyChange("state"))};c.prototype._onMaxLabelKeyDown=function(a){this._isDisabled()||"Enter"!==v.eventKey(a)||(this._isMaxInputActive=!0,this.notifyChange("state"))};c.prototype._onMaxInputBlur=function(a){a=a.target.value;this._isMaxInputActive=!1;this.notifyChange("state");if(a){var b=this.max;this.viewModel.set("max",
this._parseInputValue(a,"max"));this.max!==b&&this._emitMaxChangeEvent({oldValue:b,value:this.max})}};c.prototype._onMinLabelClick=function(){!this._isDisabled()&&this.rangeLabelInputsEnabled&&(this._isMinInputActive=!0,this.notifyChange("state"))};c.prototype._onMinLabelKeyDown=function(a){this._isDisabled()||"Enter"!==v.eventKey(a)||(this._isMinInputActive=!0,this.notifyChange("state"))};c.prototype._onMinInputBlur=function(){var a=event.target.value;this._isMinInputActive=!1;this.notifyChange("state");
if(a){var b=this.min;this.viewModel.set("min",this._parseInputValue(a,"min"));this.min!==b&&this._emitMinChangeEvent({oldValue:b,value:this.min})}};c.prototype._isDisabled=function(){return this.disabled||"disabled"===this.state};c.prototype._positionFromValue=function(a){var b=this.max,c=this.min,d=b-c;if(0===d)return 0;var e=this._trackHeight,f=this._trackWidth,g=this._isHorizontalLayout();a=g?parseFloat((f*(a-c)/d).toFixed(2)):parseFloat((e*(b-a)/d).toFixed(2));this._isReversedLayout()&&(a=g?f-
a:e-a);return a};c.prototype._valueFromPosition=function(a){var b=this._trackHeight,c=this._trackWidth,d=this.max,e=this.min,f=this.precision,g=d-e;a=this._isHorizontalLayout()?a*g/c+e:g*(1E3-a/b*1E3)/1E3+e;this._isReversedLayout()&&(a=d+e-a);return parseFloat(a.toFixed(f))};c.prototype._positionToPercent=function(a){var b=this._trackHeight,c=this._trackWidth,b=this._isHorizontalLayout()?c:b;return this._applyPrecisionToPosition(100*a/b)};c.prototype._applyPrecisionToPosition=function(a){return parseFloat(a.toFixed(this._positionPrecision))};
c.prototype._isPositionInverted=function(){var a=this.layout;return"horizontal-reversed"===a||"vertical"===a};c.prototype._isHorizontalLayout=function(){return-1<this.layout.indexOf("horizontal")};c.prototype._isReversedLayout=function(){return-1<this.layout.indexOf("reversed")};c.prototype._normalizeSegmentDetails=function(a){return this._isPositionInverted()?{min:a.max,max:a.min}:a};c.prototype._parseInputValue=function(a,b,c){return this.inputParseFunction?this.inputParseFunction(a,b,c):this.viewModel.defaultInputParseFunction(a)};
c.prototype._formatInputValue=function(a,b,c){return this.inputFormatFunction?this.inputFormatFunction(a,b,c):this.viewModel.defaultInputFormatFunction(a)};c.prototype._getAnchorDetails=function(a){var b=this._getPositionOfElement(this._anchorElements[a]);return{index:a,position:b,value:this.values[a]}};c.prototype._updateAnchorStyle=function(a,b){if(a=this._anchorElements[a])this._isHorizontalLayout()?a.style.left=""+b:a.style.top=""+b};c.prototype._getStyleForAnchor=function(a,b,c){b=this._zIndices[b];
c=c?this._zIndexOffset+b:b;return this._getPositionStyleForElement(a)+"; z-index: "+c};c.prototype._getPositionStyleForElement=function(a){a=this._positionFromValue(a);a=this._positionToPercent(a);return(this._isHorizontalLayout()?"left":"top")+": "+(a+"%")};c.prototype._getPositionOfElement=function(a){var b=this._getDimensions(a.offsetParent);a=this._getDimensions(a);return this._isHorizontalLayout()?this._applyPrecisionToPosition(a.left-b.left):this._applyPrecisionToPosition(a.top-b.top)};c.prototype._updateAnchorValues=
function(a,b){var c=this;a.forEach(function(a,h){return c._toValue(a,b[h])})};c.prototype._toValue=function(a,b){if(n.isSome(this.steps)){var c=this._getStepValues();b=this._getIndexOfNearestStepValue(b);b=c[b]}this._updateAnchorStyle(a,this._getPositionStyleForElement(b));this.viewModel.setValue(a,b)};c.prototype._toPosition=function(a,b){b=n.isSome(this.steps)?this._getStepValueForAnchorAtPosition(a,b):this._getValueForAnchorAtPosition(a,b);this._updateAnchorStyle(a,this._getPositionStyleForElement(b));
this.viewModel.setValue(a,b)};c.prototype._getValueForAnchorAtPosition=function(a,b){var c=this._getAnchorBoundsInPixels(a),d=c.min,c=c.max,e=this.viewModel.getBoundsForValueAtIndex(a);a=e.min;var e=e.max,f=null,g;this._isPositionInverted()?(f=a,g=e):(f=e,g=a);f=b>c?f:b<d?g:this._valueFromPosition(b);f>e?f=e:f<a&&(f=a);return f};c.prototype._getStepValueForAnchorAtPosition=function(a,b){var c=this._getStepValues();b=this._calculateNearestStepPosition(b);a=this._getValueForAnchorAtPosition(a,b);a=
this._getIndexOfNearestStepValue(a);return c[a]};c.prototype._getAnchorBoundsAsPercents=function(a){a=this._getAnchorBoundsInPixels(a);var b=a.max;return{min:this._positionToPercent(a.min),max:this._positionToPercent(b)}};c.prototype._getAnchorBoundsInPixels=function(a){var b=this._anchorElements,c=this._trackHeight,d=this._trackWidth,e=this.thumbsConstrained,f=b[a-1];a=b[a+1];c=this._isHorizontalLayout()?d:c;return e?this._isPositionInverted()?{max:f?this._getPositionOfElement(f):c,min:a?this._getPositionOfElement(a):
0}:{max:a?this._getPositionOfElement(a):c,min:f?this._getPositionOfElement(f):0}:{max:c,min:0}};c.prototype._getIndexOfNearestValue=function(a){return this.values.indexOf(this.values.reduce(function(b,c){return Math.abs(c-a)<Math.abs(b-a)?c:b}))};c.prototype._getCursorPositionFromEvent=function(a){var b=this._getDimensions(this.trackElement);return this._isHorizontalLayout()?a.clientX-b.left:a.clientY-b.top};c.prototype._getStepValues=function(){var a=this.steps;if(Array.isArray(a))return a;for(var b=
this.max,c=this.min,d=Math.ceil((b-c)/a),e=[],f=0;f<=d;f++){var g=c+a*f;e.push(g>b?b:g)}return e};c.prototype._toStep=function(a,b){var c=this.viewModel,d=this.values[a],e=this._getStepValues(),f=e.indexOf(d),g=null;-1<f?(b=this._positionFromValue(e[f+b]),g=this._getStepValueForAnchorAtPosition(a,b)):(d=this._getIndexOfNearestStepValue(d),g=e[d+b]);c.setValue(a,g)};c.prototype._getIndexOfNearestStepValue=function(a){if(!n.isSome(this.steps))return null;var b=this._getStepValues(),c=b.reduce(function(b,
c){return Math.abs(c-a)<Math.abs(b-a)?c:b});return b.indexOf(c)};c.prototype._calculateNearestStepPosition=function(a){a=this._valueFromPosition(a);a=this._getIndexOfNearestStepValue(a);var b=this._getStepValues();return this._positionFromValue(b[a])};c.prototype._getTickCounts=function(a,b){b=b.mode;return"count"===b||"position"===b?a||0:"percent"===b?100/a||0:0};c.prototype._calculateTickPositions=function(a){var b=this;return a.map(function(a){return b._positionFromValue(a)})};c.prototype._calculateEquidistantTickPositions=
function(a){var b=this._trackWidth,c=this._trackHeight,b=this._isHorizontalLayout()?b:c,c=b/(a-1),d=[];if(1===a)return[b/2];for(var e=0;e<a;e++){var f=e*c;f<=b&&d.push(f)}return d};c.prototype._getDimensions=function(a){try{return a.getBoundingClientRect()}catch(b){if("object"===typeof b&&null!==b)return{top:0,bottom:0,left:0,width:0,height:0,right:0};throw b;}};c.prototype._emitMaxChangeEvent=function(a){this.emit("max-change",q({},a,{type:"max-change"}))};c.prototype._emitMinChangeEvent=function(a){this.emit("min-change",
q({},a,{type:"min-change"}))};c.prototype._emitThumbChangeEvent=function(a){this.emit("thumb-change",q({},a,{type:"thumb-change"}))};c.prototype._emitThumbDragEvent=function(a){this.emit("thumb-drag",q({},a,{type:"thumb-drag"}))};c.prototype._emitSegmentDragEvent=function(a){this.emit("segment-drag",q({},a,{type:"segment-drag"}))};k([g.property(),l.renderable()],c.prototype,"disabled",void 0);k([g.property()],c.prototype,"extraNodes",void 0);k([g.property(),l.renderable()],c.prototype,"draggableSegmentsEnabled",
void 0);k([g.property()],c.prototype,"label",void 0);k([g.aliasOf("viewModel.labelFormatFunction")],c.prototype,"labelFormatFunction",void 0);k([g.aliasOf("viewModel.inputFormatFunction")],c.prototype,"inputFormatFunction",void 0);k([g.aliasOf("viewModel.inputParseFunction")],c.prototype,"inputParseFunction",void 0);k([g.property()],c.prototype,"labelInputsEnabled",void 0);k([g.aliasOf("viewModel.labels")],c.prototype,"labels",void 0);k([g.property(),l.renderable()],c.prototype,"labelsVisible",null);
k([g.property({value:"horizontal"}),l.renderable()],c.prototype,"layout",null);k([g.aliasOf("viewModel.max")],c.prototype,"max",void 0);k([g.aliasOf("viewModel.min")],c.prototype,"min",void 0);k([g.aliasOf("viewModel.precision")],c.prototype,"precision",void 0);k([g.property()],c.prototype,"rangeLabelInputsEnabled",void 0);k([g.property(),l.renderable()],c.prototype,"rangeLabelsVisible",null);k([g.property()],c.prototype,"snapOnClickEnabled",void 0);k([g.property({dependsOn:["viewModel.state"],readOnly:!0}),
l.renderable()],c.prototype,"state",null);k([g.property(),l.renderable()],c.prototype,"steps",void 0);k([g.aliasOf("viewModel.thumbsConstrained")],c.prototype,"thumbsConstrained",void 0);k([g.property()],c.prototype,"thumbCreatedFunction",void 0);k([g.property(),l.renderable()],c.prototype,"tickConfigs",void 0);k([g.property()],c.prototype,"trackElement",void 0);k([g.aliasOf("viewModel.values")],c.prototype,"values",void 0);k([g.property(),l.renderable("viewModel.thumbsConstrained viewModel.max viewModel.min viewModel.precision viewModel.labelFormatFunction viewModel.labels viewModel.values".split(" "))],
c.prototype,"viewModel",void 0);k([g.property(),l.renderable()],c.prototype,"visibleElements",void 0);k([g.cast("visibleElements")],c.prototype,"castVisibleElements",null);return c=k([g.subclass("esri.widgets.Slider")],c)}(g.declared(F))});