// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./mixins/MediaInfo ./support/ImageMediaInfoValue".split(" "),function(k,l,f,c,b,g,h){return function(e){function a(a){a=e.call(this,a)||this;a.refreshInterval=null;a.type="image";a.value=null;return a}f(a,e);d=a;a.prototype.clone=function(){return new d({title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?this.value.clone():
null})};var d;c([b.property({type:Number,json:{write:!0}})],a.prototype,"refreshInterval",void 0);c([b.property({type:["image"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);c([b.property({type:h,json:{write:!0}})],a.prototype,"value",void 0);return a=d=c([b.subclass("esri.popup.content.ImageMediaInfo")],a)}(b.declared(g))});