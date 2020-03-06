// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../HeatmapSlider/nls/HeatmapSlider ../../../core/accessorSupport/decorators ../SmartMappingSliderViewModel ../support/utils".split(" "),function(n,p,k,d,f,c,l,m){return function(h){function b(a){a=h.call(this,a)||this;a._initialRatios=[];a.hasTimeData=!1;a.labelFormatFunction=function(a,b){return"min"===b?f.bottomLabel:"max"===b?f.topLabel:a.toString()};a.max=1;a.min=0;a.zoomingEnabled=
!1;return a}k(b,h);Object.defineProperty(b.prototype,"stops",{set:function(a){this._initialRatios=a.map(function(a){return a.ratio});this._set("stops",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"values",{get:function(){var a=this.stops;return!a||!a.length||2>a.length?[]:[a[0].ratio,a[a.length-1].ratio]},enumerable:!0,configurable:!0});b.prototype.setValue=function(a,b){var c=this.max,d=this.min,e=this.stops;if(!(b>c||b<d)&&b!==e[a].ratio){var g=this.values,f=0===a?0:e.length-
1;a=Math.max(Math.min(b,a===g.length-1?c:g[a+1]),0===a?d:g[a-1]);m.getStopChanges(0===f?a:e[0].ratio,0===f?e[e.length-1].ratio:a,this._initialRatios).forEach(function(a,b){e[b].ratio=a.value});this.notifyChange("values");this.notifyChange("labels")}};b.prototype.getStopInfo=function(){var a=this.stops;return a&&a.length?a.map(function(a){return{color:a.color,offset:1-a.ratio}}):[]};d([c.property({readOnly:!0})],b.prototype,"hasTimeData",void 0);d([c.property({readOnly:!0})],b.prototype,"labelFormatFunction",
void 0);d([c.property({readOnly:!0})],b.prototype,"max",void 0);d([c.property({readOnly:!0})],b.prototype,"min",void 0);d([c.property()],b.prototype,"stops",null);d([c.property({dependsOn:["stops"],readOnly:!0})],b.prototype,"values",null);d([c.property({readOnly:!0})],b.prototype,"zoomingEnabled",void 0);return b=d([c.subclass("esri.widgets.smartMapping.HeatmapSlider.HeatmapSliderViewModel")],b)}(c.declared(l))});