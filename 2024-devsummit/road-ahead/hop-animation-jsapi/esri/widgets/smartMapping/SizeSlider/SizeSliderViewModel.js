// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../SmartMappingPrimaryHandleSliderViewModel".split(" "),function(l,n,f,w,x,p,q){f=class extends q{constructor(a){super(a);this.persistSizeRangeEnabled=!1}updateStops(a){const {primaryHandleEnabled:r,persistSizeRangeEnabled:t,stops:u}=this,h=this.getValuesFromStops();if(h?.length&&(a.sort((b,e)=>b.value>
e.value?1:-1).forEach(b=>{h[b.index]=b.value}),u.forEach((b,e)=>b.value=h[e]),r&&t)){({stops:a}=this);var c=this.getValuesFromStops(),d=a.map(g=>g.size);const b=Math.max(...d),e=Math.min(...d);d=Math.max(...c);c=Math.min(...c);const k=a[5===a.length?2:1].value;d=Math.abs(d-k);c=Math.abs(c-k);const m=d>c?d:c,v=b-e;0!==m&&a.forEach(g=>{g.size=Math.abs(g.value-k)/m*v+e})}}};l.__decorate([n.property()],f.prototype,"persistSizeRangeEnabled",void 0);return f=l.__decorate([p.subclass("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],
f)});