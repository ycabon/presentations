// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/has ../../../../core/RandomLCG ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../components/DrawHeaderActions ./Fields ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,d,t,u,v,w,e,f,g,h,x,c){a.TooltipContentDrawPolyline=class extends h.TooltipContent{_renderContent(){const {fieldContext:k,info:l,mode:m}=this,{distance:n,
elevation:p,direction:q,totalLength:r,visibleElements:b}=l;return c.tsx(g.Fields,{context:k,fields:[b.direction?q:void 0,b.distance?n:void 0,b.elevation?p:void 0,b.totalLength?r:void 0],mode:m})}_renderActions(){return c.tsx(f.DrawHeaderActions,{sketchOptions:this.info.sketchOptions})}};a.TooltipContentDrawPolyline=d.__decorate([e.subclass("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],a.TooltipContentDrawPolyline);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});