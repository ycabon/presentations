// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./Content".split(" "),function(h,k,f,c,b,g){return function(e){function a(a){a=e.call(this,a)||this;a.text=null;a.type="text";return a}f(a,e);d=a;a.prototype.clone=function(){return new d({text:this.text})};var d;c([b.property({type:String,json:{write:!0}})],a.prototype,"text",void 0);c([b.property({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,
"type",void 0);return a=d=c([b.subclass("esri.popup.content.TextContent")],a)}(b.declared(g))});