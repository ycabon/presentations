// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../components/TooltipField ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(b,h,m,n,p,q,k,d,l,r,c){b.TooltipContentTransformScale=class extends l.TooltipContent{_renderContent(){const {info:a}=this,{visibleElements:e}=a,f=this._messagesTooltip.sketch,
g=this._formatters;return c.tsx(c.tsxFragment,null,e.scale&&null!=a.scale?c.tsx(d.TooltipField,{key:"scale",title:f.scale,value:g.percentage(a.scale)}):null,e.size&&null!=a.size?c.tsx(d.TooltipField,{key:"size",title:f.size,value:g.length(a.size,a.sizeUnit,a.sizePrecision)}):null)}};b.TooltipContentTransformScale=h.__decorate([k.subclass("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],b.TooltipContentTransformScale);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});