// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/ClassedColorSlider/templates/ClassedColorSlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("./Widgette ./RendererSlider ./RendererSlider/sliderUtils ../core/lang ../core/numberUtils ../renderers/support/utils dijit/_TemplatedMixin dojo/_base/lang dojo/dom-style dojox/gfx dojo/text!./ClassedColorSlider/templates/ClassedColorSlider.html".split(" "),function(m,n,e,g,p,l,q,h,k,r,t){return m.createSubclass([q],{_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,_css:null,declaredClass:"esri.widgets.ClassedColorSlider",
templateString:t,properties:{breakInfos:null,histogram:null,handles:[],statistics:null,showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,classificationMethod:null,normalizationType:null,histogramWidth:100,rampWidth:26},constructor:function(a,b){b&&(this.breakInfos=g.clone(a.breakInfos),this.set("values",this._getHandleInfo(this.breakInfos)),this._css={container:"esri-classed-color-slider",rampSurface:"esri-slider-ramp-surface"})},postCreate:function(){this.inherited(arguments);
this._setupDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new n({type:"ClassedColorSlider",values:this.values,minimum:this.minValue,maximum:this.maxValue,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,classificationMethod:this.classificationMethod,normalizationType:this.normalizationType},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=k.get(this._rampNode,"height")||155;this._createSVGSurfaces();
this._slider.on("slide",h.hitch(this,function(a){this._updateBreakInfos(a.values);this._updateBreakInfoLabels();this._fillRamp()}));this._slider.on("data-change",h.hitch(this,function(a){a.values&&(this.set("values",a.values),this._updateBreakInfos(a.values),this._updateBreakInfoLabels());this._fillRamp();this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:g.clone(this.breakInfos)})}));this._slider.on("handle-value-change",h.hitch(this,function(a){this._updateBreakInfos(a.values);
this._updateBreakInfoLabels();this._fillRamp();this.emit("handle-value-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:g.clone(this.breakInfos)})}));this._slider.on("data-value-change",h.hitch(this,function(a){this.set("minValue",a.min);this.breakInfos[0].minValue=a.min;this.set("maxValue",a.max);this.breakInfos[this.breakInfos.length-1].maxValue=a.max;this._updateBreakInfoLabels();this._updateRendererSlider();this.emit("data-value-change",{minValue:this.minValue,maxValue:this.maxValue,
breakInfos:g.clone(this.breakInfos)})}));this._slider.on("stop",h.hitch(this,function(a){this.emit("handle-value-change",{minValue:this.minValue,maxValue:this.maxValue,breakInfos:g.clone(this.breakInfos)})}));this.histogram&&this.showHistogram&&this._generateHistogram();this.statistics&&this.showStatistics&&this._generateStatistics();this.watch("breakInfos, handles, statistics, showHandles, showLabels, showTicks",this._updateTimeout);this.watch("histogram",this._showHistogram);this.watch("showHistogram",
this._toggleHistogram)},destroy:function(){this.inherited(arguments);this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&this.countTooltips.forEach(function(a){a.destroy()})},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-1].maxValue});this._slider.set({minimum:this.minValue,
maximum:this.maxValue,values:this._getHandleInfo(this.breakInfos),handles:this.handles});this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.histogram&&this.showHistogram&&this._generateHistogram();this.statistics&&this.showStatistics&&this._generateStatistics()},_getHandleInfo:function(a){a=(a||[]).map(function(a,f){return a.maxValue});a.pop();return a},_updateBreakInfos:function(a){var b=this.breakInfos;l.updateClassBreak({classBreaks:b,
normalizationType:this.normalizationType,classificationMethod:this.classificationMethod,change:a});(a||[]).forEach(function(a,c){b[c].maxValue=a;b[c+1]&&(b[c+1].minValue=a)})},_updateBreakInfoLabels:function(){l.setLabelsForClassBreaks({classBreaks:this.breakInfos,normalizationType:this.normalizationType,classificationMethod:this.classificationMethod,round:!0})},_setupDataDefaults:function(){var a=this.breakInfos;null!==a&&1<a.length?this.set({minValue:this.breakInfos[0].minValue,maxValue:this.breakInfos[this.breakInfos.length-
1].maxValue}):null!==a&&1===a.length?this.set({minValue:a[0].minValue,maxValue:a[0].maxValue}):(this.set({minValue:0,maxValue:100,breakInfos:[{minValue:0,maxValue:20},{minValue:20,maxValue:80},{minValue:80,maxValue:100}]}),this.set("values",this._getHandleInfo(a)),this._updateBreakInfoLabels())},_createSVGSurfaces:function(){this._colorRampSurface=r.createSurface(this._rampNode,this.rampWidth,this._sliderHeight);this._colorRampSurface.rawNode.setAttribute("class",this._css.rampSurface);this._surfaceRect=
this._colorRampSurface.createRect({width:this.rampWidth+2,height:this._sliderHeight+2});this._histogramSurface=e.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp()},_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},_fillRamp:function(){var a=this.maxValue,b=this.minValue,f=[];this.breakInfos.forEach(function(c){var d,e;a===b?d=e=0:(d=(a-c.minValue)/(a-b),e=(a-c.maxValue)/(a-b));f.push({offset:d,color:c.symbol?
c.symbol.color:"#5daddd"});f.push({offset:e,color:c.symbol?c.symbol.color:"#5daddd"})});f.reverse();this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:f})},_showHistogram:function(){this.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(k.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):k.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){this._barsGroup=
e.generateHistogram(this._histogramSurface,this.histogram,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=e.generateCountTooltips(this.histogram,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a=this.statistics,b=this._slider,f=e.getPrecision(this.maxValue),c,d;a.min===a.max&&a.min===a.avg?(c=0,d=2*a.avg):(c=a.min,d=a.max);if(c!==b.minimum||d!==b.maximum)c=b.minimum,d=b.maximum;b=this._sliderHeight*(d-a.avg)/
(d-c);a=p.round([a.avg,d,c])[0];this._avgHandleObjs=e.generateAvgLine(this._histogramSurface,a,b,f,!1,this.isLeftToRight())}}})});