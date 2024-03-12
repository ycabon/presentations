// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../Color","../../../core/colorUtils"],function(e,c,f){const a={main:new c([255,127,0]),selected:new c([255,255,255]),outline:new c([0,0,0,.5]),selectedOutline:new c([255,255,255]),hoverOutline:new c([255,255,255]),secondary:new c([255,255,255]),secondaryOutline:new c([100,100,100]),transparent:new c([0,0,0,0])};class d{constructor(b){this.size=8;this.hoverSize=10;this.hoverColor=this.color=a.main;this.outlineColor=a.outline;this.hoverOutlineColor=a.hoverOutline;Object.assign(this,
b)}}class g{constructor(b){this.color=a.secondary;this.hoverColor=a.main;Object.assign(this,b)}}class h{constructor(b){this.hoverColor=this.color=a.transparent;this.hoverOutlineColor=this.outlineColor=a.main;this.stagedColor=a.transparent;this.stagedOutlineColor=a.secondary;Object.assign(this,b)}}class k{constructor(b){this.vertex=new d;this.midpoint=new d({color:a.secondary,outlineColor:a.secondaryOutline,size:6});this.selected=new d({color:a.selected,hoverColor:a.selected,hoverOutlineColor:a.hoverOutline});
Object.assign(this,b)}}class l{constructor(b){this.center=new d({color:a.secondaryOutline});this.fill=new h;this.line=new g;this.vertex=new d({color:a.selected,outlineColor:a.main,hoverColor:a.selected,hoverOutlineColor:a.secondaryOutline});Object.assign(this,b)}}class m{constructor(b){this.reshapeGraphics=new k;this.transformGraphics=new l;Object.assign(this,b)}}c=new m;e.colors=a;e.getEdgeColor=function(b){return f.unitRGBAFromColor(f.desaturate(f.multiplyOpacity(b,2/3),.5))};e.settings=c;Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});