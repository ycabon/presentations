// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../components/TooltipField ../components/ValueByValue ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(c,k,n,p,q,r,l,e,f,m,t,a){c.TooltipContentExtentScale=class extends m.TooltipContent{_renderContent(){const b=this.info,{visibleElements:g}=
b,h=this._messagesTooltip.sketch,d=this._formatters;return a.tsx(a.tsxFragment,null,g.size?a.tsx(e.TooltipField,{title:h.size,value:a.tsx(f.ValueByValue,{left:d.length(b.xSize),right:d.length(b.ySize)})}):null,g.scale?a.tsx(e.TooltipField,{title:h.scale,value:a.tsx(f.ValueByValue,{left:d.scale(b.xScale),right:d.scale(b.yScale)})}):null)}};c.TooltipContentExtentScale=k.__decorate([l.subclass("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],c.TooltipContentExtentScale);Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});