// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/jsonMap ../core/screenUtils ../core/accessorSupport/decorators ./Symbol".split(" "),function(m,n,h,d,k,e,c,l){var f=new k.default({esriSMS:"simple-marker",esriPMS:"picture-marker"});return function(g){function b(a){a=g.call(this,a)||this;a.angle=0;a.type=null;a.xoffset=0;a.yoffset=0;a.size=9;return a}h(b,g);b.prototype.hash=function(){return this.type+"."+this.angle+"."+this.size+"."+this.xoffset+
"."+this.yoffset};d([c.property({type:Number,json:{read:function(a){return a&&-1*a},write:function(a,b){return b.angle=a&&-1*a}}})],b.prototype,"angle",void 0);d([c.property({type:f.apiValues,readOnly:!0,json:{type:f.jsonValues}})],b.prototype,"type",void 0);d([c.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"xoffset",void 0);d([c.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"yoffset",void 0);d([c.property({type:Number,cast:function(a){return"auto"===a?a:e.toPt(a)},
json:{write:!0}})],b.prototype,"size",void 0);return b=d([c.subclass("esri.symbols.MarkerSymbol")],b)}(c.declared(l))});