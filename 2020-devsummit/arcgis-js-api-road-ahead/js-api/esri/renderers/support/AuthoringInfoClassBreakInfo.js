// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(c,a,f,e,g,d){Object.defineProperty(a,"__esModule",{value:!0});c=function(c){function b(a){a=c.call(this,a)||this;a.minValue=0;a.maxValue=0;return a}f(b,c);a=b;b.prototype.clone=function(){return new a({minValue:this.minValue,maxValue:this.maxValue})};var a;e([d.property({type:Number,json:{write:!0}})],b.prototype,"minValue",
void 0);e([d.property({type:Number,json:{write:!0}})],b.prototype,"maxValue",void 0);return b=a=e([d.subclass("esri.renderer.support.AuthoringInfoClassBreakInfo")],b)}(d.declared(g.JSONSupport));a.AuthoringInfoClassBreakInfo=c;a.default=c});