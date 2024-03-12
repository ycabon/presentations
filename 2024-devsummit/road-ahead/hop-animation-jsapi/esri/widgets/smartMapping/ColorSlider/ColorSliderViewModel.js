// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Logger ../../../core/has ../../../core/RandomLCG ../../../core/Error ../../../core/accessorSupport/decorators/subclass ../SmartMappingPrimaryHandleSliderViewModel".split(" "),function(f,a,k,l,m,g,h){a=class extends h{constructor(b){super(b)}getStopInfo(){const {min:b,max:c,stops:d}=this;return d?.length?d.map(e=>({color:e.color,offset:(c-e.value)/(c-b)})):[]}};return a=f.__decorate([g.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],
a)});