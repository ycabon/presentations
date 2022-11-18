import { u as e$1, y as y$2, z as n, A as m$5, fs as e$2, ft as M, fu as ue, fv as m$6, d8 as i, fw as n$1, m as r$1, t as t$1, b7 as l$8, eX as w, d3 as o$1, es as s, fx as f, fy as o$2, fz as M$1, fA as k$2, fB as b, fC as wn, aK as n$2, fD as E, fE as y$3, fF as hn, fG as v } from './_virtual_index-1ea2035a.js';
import { x as x$2, F, S, k as k$1, z as z$1, b as U$1, q, a as a$c } from './quantityFormatUtils-d7b5c624.js';
import { h as h$3, p as p$g, R as R$1, d as d$2, j as j$1 } from './euclideanLengthMeasurementUtils-93ea014d.js';
import { geodesicLength as q$1 } from './geometryEngine-d05be472.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let e=class extends m$5{constructor(o){super(o);}};e$1([y$2()],e.prototype,"tooltipOptions",void 0),e=e$1([n("esri.views.interactive.tooltip.SketchTooltipInfo")],e);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t="esri-tooltip",o=`${t}-content`;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let g$2=class extends M{get _units(){const t=ue(this.tooltip.view);return {length:t,verticalLength:t,area:t}}_formatScale(t){return m$6(t,{style:"percent",maximumFractionDigits:0})}_formatRelativeOrientation(t){return m$6(t,{maximumFractionDigits:2,minimumFractionDigits:2,signDisplay:"exceptZero"})}_formatLength(t,r,i$1){return x$2(this._messagesUnits,t,i(r,this._units.length),i$1)}_formatRelativeLength(t){return F(this._messagesUnits,t,this._units.length)}_formatVerticalLength(t){return S(this._messagesUnits,t,this._units.verticalLength)}_formatRelativeVerticalLength(t){return k$1(this._messagesUnits,t,this._units.verticalLength)}_formatTotalLength(t){return x$2(this._messagesUnits,t,this._units.length)}_formatArea(t){return z$1(this._messagesUnits,t,this._units.area)}_formatPercentage(t){return m$6(t.value,{style:"percent"})}};e$1([y$2()],g$2.prototype,"info",void 0),e$1([y$2()],g$2.prototype,"tooltip",void 0),e$1([y$2()],g$2.prototype,"_units",null),e$1([e$2("esri/core/t9n/Units"),y$2()],g$2.prototype,"_messagesUnits",void 0),e$1([e$2("esri/views/interactive/tooltip/t9n/Tooltip"),y$2()],g$2.prototype,"_messagesTooltip",void 0),g$2=e$1([n("esri.views.interactive.tooltip.content.TooltipContent")],g$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$f=`${t}-field`,a$b={base:p$f,title:`${p$f}__title`,value:`${p$f}__value`};let l$7=class extends M{render(){return n$1("div",{class:a$b.base},n$1("div",{class:a$b.title},this.title),n$1("div",{class:a$b.value},this.value))}};e$1([y$2()],l$7.prototype,"title",void 0),e$1([y$2()],l$7.prototype,"value",void 0),l$7=e$1([n("esri.views.interactive.tooltip.support.TooltipField")],l$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$e={base:`${t}-value-by-value`};let a$a=class extends M{constructor(){super(...arguments),this.divider="×";}render(){return n$1("div",{class:p$e.base},n$1("span",null,this.left),n$1("span",null,this.divider),n$1("span",null,this.right))}};e$1([y$2()],a$a.prototype,"left",void 0),e$1([y$2()],a$a.prototype,"divider",void 0),e$1([y$2()],a$a.prototype,"right",void 0),a$a=e$1([n("esri.views.interactive.tooltip.support.ValueByValue")],a$a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m$4={base:`${o} ${`${o}--draw-rectangle`}`};let l$6=class extends g$2{render(){const{area:t,radius:s,xSize:o,ySize:e,tooltipOptions:l}=this.info,{visibleElements:c}=l,n=this._messagesTooltip.sketch;return n$1("div",{class:m$4.base},c.radius&&r$1(s)&&n$1(l$7,{title:n.radius,value:this._formatLength(s)}),c.size&&r$1(o)&&r$1(e)&&n$1(l$7,{title:n.size,value:n$1(a$a,{left:this._formatLength(o),right:this._formatLength(e)})}),c.area&&n$1(l$7,{title:n.area,value:this._formatArea(t)}))}};l$6=e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],l$6);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$d={base:`${o} ${`${o}--draw-point`}`};let a$9=class extends g$2{render(){const{elevation:t,tooltipOptions:o}=this.info,{visibleElements:s}=o,r=this._messagesTooltip.sketch;return n$1("div",{class:p$d.base},s.elevation&&n$1(l$7,{title:r.elevation,value:this._formatVerticalLength(t)}))}};a$9=e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],a$9);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$c={base:`${o} ${`${o}--draw-polygon`}`};let a$8=class extends g$2{render(){const{area:o,elevation:t,tooltipOptions:e,viewType:s}=this.info,{visibleElements:a}=e,l=this._messagesTooltip.sketch;return n$1("div",{class:p$c.base},a.elevation&&"2d"!==s&&n$1(l$7,{title:l.elevation,value:this._formatVerticalLength(t)}),a.area&&n$1(l$7,{title:l.area,value:this._formatArea(o)}))}};a$8=e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],a$8);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$b={base:`${o} ${`${o}--draw-polyline`}`};let l$5=class extends g$2{render(){const{elevation:t,totalLength:o,tooltipOptions:e,viewType:s}=this.info,{visibleElements:l}=e,a=this._messagesTooltip.sketch;return n$1("div",{class:p$b.base},l.elevation&&"2d"!==s&&n$1(l$7,{title:a.elevation,value:this._formatVerticalLength(t)}),l.totalLength&&n$1(l$7,{title:a.totalLength,value:this._formatLength(o)}))}};l$5=e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],l$5);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m$3={base:`${o} ${`${o}--draw-rectangle`}`};let c$5=class extends g$2{render(){const{area:t,xSize:r,ySize:s,tooltipOptions:e}=this.info,{visibleElements:c}=e,l=this._messagesTooltip.sketch;return n$1("div",{class:m$3.base},c.size&&r$1(r)&&r$1(s)&&n$1(l$7,{title:l.size,value:n$1(a$a,{left:this._formatLength(r),right:this._formatLength(s)})}),c.area&&n$1(l$7,{title:l.area,value:this._formatArea(t)}))}};c$5=e$1([n("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],c$5);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$a={base:`${o} ${`${o}--extent-rotate`}`};let a$7=class extends g$2{render(){const{angle:t,tooltipOptions:o}=this.info,{visibleElements:s}=o,r=this._messagesTooltip.sketch;return n$1("div",{class:p$a.base},s.rotation&&n$1(l$7,{title:r.rotation,value:this._formatRelativeOrientation(t)}))}};a$7=e$1([n("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],a$7);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l$4={base:`${o} ${`${o}--extent-scale`}`};let a$6=class extends g$2{render(){const t=this.info,{visibleElements:s}=t.tooltipOptions,e=this._messagesTooltip.sketch;return n$1("div",{class:l$4.base},s.size&&n$1(l$7,{title:e.size,value:n$1(a$a,{left:this._formatLength(t.xSize),right:this._formatLength(t.ySize)})}),s.scale&&n$1(l$7,{title:e.scale,value:n$1(a$a,{left:this._formatScale(t.xScale),right:this._formatScale(t.yScale)})}))}};a$6=e$1([n("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],a$6);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$9={base:`${o} ${`${o}--reshape-edge-offset`}`};let c$4=class extends g$2{render(){const{area:t,distance:s,totalLength:o,tooltipOptions:r}=this.info,{visibleElements:c}=r,l=this._messagesTooltip.sketch;return n$1("div",{class:p$9.base},c.distance&&n$1(l$7,{title:l.distance,value:this._formatRelativeLength(s)}),c.area&&r$1(t)&&n$1(l$7,{title:l.area,value:this._formatArea(t)}),c.totalLength&&r$1(o)&&n$1(l$7,{title:l.totalLength,value:this._formatLength(o)}))}};c$4=e$1([n("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],c$4);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$8={base:`${o} ${`${o}--transform-absolute`}`};let a$5=class extends g$2{render(){const{info:t}=this,{visibleElements:s}=t.tooltipOptions,r=this._messagesTooltip.sketch;return n$1("div",{class:p$8.base},s.orientation&&t.orientationEnabled&&n$1(l$7,{title:r.orientation,value:U$1(t.orientation,t.rotationType,t.orientationPrecision)}),s.size&&t.sizeEnabled&&n$1(l$7,{title:r.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}))}};a$5=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],a$5);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a$4={base:`${o} ${`${o}--transform-rotate`}`};let c$3=class extends g$2{render(){const{info:o}=this,{visibleElements:s}=o.tooltipOptions,i=this._messagesTooltip.sketch;return n$1("div",{class:a$4.base},s.rotation&&n$1(l$7,{title:i.rotation,value:q(o.rotation,o.rotationType,o.rotationPrecision)}),s.orientation&&n$1(l$7,{title:i.orientation,value:U$1(o.orientation,o.rotationType,o.orientationPrecision)}))}};c$3=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],c$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$7={base:`${o} ${`${o}--transform-scale`}`};let c$2=class extends g$2{render(){const{scale:s,size:t,sizePrecision:o,sizeUnit:e,tooltipOptions:c}=this.info,{visibleElements:a}=c,l=this._messagesTooltip.sketch;return n$1("div",{class:p$7.base},a.scale&&n$1(l$7,{title:l.scale,value:this._formatPercentage(s)}),a.size&&n$1(l$7,{title:l.size,value:this._formatLength(t,e,o)}))}};c$2=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],c$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$6={base:`${o} ${`${o}--translate-graphic`}`};let c$1=class extends g$2{render(){const{info:t}=this,{visibleElements:s}=t.tooltipOptions,o=this._messagesTooltip.sketch;return n$1("div",{class:p$6.base},s.distance&&n$1(l$7,{title:o.distance,value:this._formatLength(t.distance)}))}};c$1=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],c$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$5={base:`${o} ${`${o}--translate-graphic-xy`}`};let a$3=class extends g$2{render(){const{info:t}=this,{visibleElements:s}=t.tooltipOptions,o=this._messagesTooltip.sketch;return n$1("div",{class:p$5.base},s.distance&&n$1(l$7,{title:o.distance,value:this._formatRelativeLength(t.distance)}))}};a$3=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],a$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$4={base:`${o} ${`${o}--translate-graphic-z`}`};let a$2=class extends g$2{render(){const{info:t}=this,{visibleElements:s}=t.tooltipOptions,o=this._messagesTooltip.sketch;return n$1("div",{class:p$4.base},s.distance&&n$1(l$7,{title:o.distance,value:this._formatRelativeVerticalLength(t.distance)}))}};a$2=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],a$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l$3={base:`${o} ${`${o}--translate-vertex`}`};let p$3=class extends g$2{render(){const{distance:t,elevation:o,area:s,totalLength:r,tooltipOptions:p}=this.info,{visibleElements:n}=p,c=this._messagesTooltip.sketch;return n$1("div",{class:l$3.base},n.distance&&n$1(l$7,{title:c.distance,value:this._formatLength(t)}),n.elevation&&r$1(o)&&n$1(l$7,{title:c.elevation,value:this._formatVerticalLength(o)}),n.area&&r$1(s)&&n$1(l$7,{title:c.area,value:this._formatArea(s)}),n.totalLength&&r$1(r)&&n$1(l$7,{title:c.totalLength,value:this._formatLength(r)}))}};p$3=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],p$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l$2={base:`${o} ${`${o}--translate-vertex`}`};let p$2=class extends g$2{render(){const{area:t,distance:o,elevation:s,totalLength:r,tooltipOptions:p}=this.info,{visibleElements:n}=p,c=this._messagesTooltip.sketch;return n$1("div",{class:l$2.base},n.distance&&n$1(l$7,{title:c.distance,value:this._formatRelativeLength(o)}),n.elevation&&r$1(s)&&n$1(l$7,{title:c.elevation,value:this._formatVerticalLength(s)}),n.area&&r$1(t)&&n$1(l$7,{title:c.area,value:this._formatArea(t)}),n.totalLength&&r$1(r)&&n$1(l$7,{title:c.totalLength,value:this._formatLength(r)}))}};p$2=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],p$2);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$1={base:`${o} ${`${o}--translate-vertex`}`};let c=class extends g$2{render(){const{distance:t,elevation:o,tooltipOptions:s}=this.info,{visibleElements:r}=s,c=this._messagesTooltip.sketch;return n$1("div",{class:p$1.base},r.distance&&n$1(l$7,{title:c.distance,value:this._formatRelativeVerticalLength(t)}),r.elevation&&r$1(o)&&n$1(l$7,{title:c.elevation,value:this._formatVerticalLength(o)}))}};c=e$1([n("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],c);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function x$1(x,d){if(t$1(d))return null;const g=document.createElement("div");switch(d.type){case"draw-point":return new a$9({tooltip:x,info:d,container:g});case"draw-polygon":return new a$8({tooltip:x,info:d,container:g});case"draw-polyline":return new l$5({tooltip:x,info:d,container:g});case"draw-rectangle":return new c$5({tooltip:x,info:d,container:g});case"draw-circle":return new l$6({tooltip:x,info:d,container:g});case"extent-rotate":return new a$7({tooltip:x,info:d,container:g});case"extent-scale":return new a$6({tooltip:x,info:d,container:g});case"transform-absolute":return new a$5({tooltip:x,info:d,container:g});case"transform-rotate":return new c$3({tooltip:x,info:d,container:g});case"transform-scale":return new c$2({tooltip:x,info:d,container:g});case"translate-graphic":return new c$1({tooltip:x,info:d,container:g});case"translate-graphic-z":return new a$2({tooltip:x,info:d,container:g});case"translate-graphic-xy":return new a$3({tooltip:x,info:d,container:g});case"translate-vertex":return new p$3({tooltip:x,info:d,container:g});case"translate-vertex-z":return new c({tooltip:x,info:d,container:g});case"translate-vertex-xy":return new p$2({tooltip:x,info:d,container:g});case"reshape-edge-offset":return new c$4({tooltip:x,info:d,container:g})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const h$2={base:`${t}`};let m$2=class extends m$5{constructor(t){super(t),this.info=null,this._contentContainer=(()=>{const t=document.createElement("div");return t.classList.add(h$2.base),t})(),this._contentWidget=null;}initialize(){const t=this._contentContainer;this.addHandles([l$8((()=>this.view.overlay?.surface),(e=>{t.remove(),o$1(e,(e=>e.appendChild(t)));}),w),l$8((()=>this.info),((e,s$1)=>{r$1(this._contentWidget)&&r$1(e)&&r$1(s$1)&&e.type===s$1.type?this._contentWidget.info=e:(this._contentWidget=s(this._contentWidget),o$1(x$1(this,e),(e=>{this._contentWidget=e,e.container&&t.appendChild(e.container);})));}),w),l$8((()=>({container:this._contentContainer,contentWidget:this._contentWidget,screenPoint:this._screenPoint})),u,w)]);}destroy(){this._contentWidget=s(this._contentWidget),this._contentContainer.remove();}clear(){this.info=null;}get _screenPoint(){const t=this.view.inputManager;return t?.multiTouchActive?null:t?.latestPointerLocation}get test(){return {contentContainer:this._contentContainer,visible:"none"!==this._contentContainer?.style.display}}};function u({container:t,contentWidget:e,screenPoint:o}){const{style:i}=t;if(r$1(o)&&r$1(e)){i.display="block";const e=f(t),n=`translate(${Math.round(o.x)+_[0]*(e?-1:1)}px, ${Math.round(o.y)+_[1]}px)`;i.transform=e?`translate(-100%, 0) ${n}`:n;}else i.display="none";}e$1([y$2({nonNullable:!0})],m$2.prototype,"view",void 0),e$1([y$2()],m$2.prototype,"info",void 0),e$1([y$2()],m$2.prototype,"_contentContainer",void 0),e$1([y$2()],m$2.prototype,"_contentWidget",void 0),e$1([y$2()],m$2.prototype,"_screenPoint",null),m$2=e$1([n("esri.views.interactive.tooltip.Tooltip")],m$2);const _=[20,20];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r(r,t,i,s,...l){return o$2(r)&&M$1(r)?t.apply(void 0,l):k$2(r)?i.apply(void 0,l):s.apply(void 0,l)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function m$1(e){const{spatialReference:t}=e;return r(t,j,d$1,h$1,e)}function a$1(e,t){if(!E(e.spatialReference,t.spatialReference))return null;const{spatialReference:r}=e;return x[0]=e.x,x[1]=e.y,x[2]=e.hasZ?e.z:0,z[0]=t.x,z[1]=t.y,z[2]=t.hasZ?t.z:0,l$1(x,z,r)}function l$1(e,t,r$1){return r(r$1,p,g$1,y$1,e,t,r$1)}function p(t,r,n){return a$c(b(U,t,r,n).distance,"meters")}function g$1(t,n,o){return a$c(q$1(R(t,n,o),"meters"),"meters")}function y$1(t,r,o){return wn(t,o,Z)&&wn(r,o,k)?a$c(b(U,Z,k).distance,"meters"):null}function j(t){return a$c(y$3([t],"meters")[0],"meters")}function d$1(t){return a$c(q$1(t,"meters"),"meters")}function h$1(t){const r=[];if(!hn(t,r))return null;let n=0;for(const e of r){let t=0;for(let r=1;r<e.length;++r)t+=b(U,e[r-1],e[r]).distance;n+=t;}return a$c(n,"meters")}function R(e,t,r){return {type:"polyline",spatialReference:r,paths:[[[...e],[...t]]]}}const U=new v,x=n$2(),z=n$2(),Z=n$2(),k=n$2();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function m(n,e){return y(p$g,m$1,h$3,e,n)}function d(n,r,t,e){return y(j$1,l$1,d$2,e,n,r,t)}function a(n,r,t){return y(R$1,a$1,R$1,t,n,r)}function g(n,r,t,e){return y(d$2,l$1,d$2,e,n,r,t)}function l(n){return y(p$g,m$1,h$3,"on-the-ground",n)}function h(n,r){return y(R$1,a$1,R$1,"on-the-ground",n,r)}function y(r,t,e,o,...u){if("on-the-ground"===o){const r=t.apply(void 0,u);return r$1(r)?r:e.apply(void 0,u)}return r.apply(void 0,u)}

export { a, m$2 as b, l as c, d, e, g, h, l$1 as l, m, r };
