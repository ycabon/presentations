// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ./MediaInfo ../support/ChartMediaInfoValue".split(" "),function(h,k,e,c,b,f,g){return function(d){function a(a){a=d.call(this,a)||this;a.type=null;a.value=null;return a}e(a,d);c([b.property({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);c([b.property({type:g,json:{write:!0}})],
a.prototype,"value",void 0);return a=c([b.subclass("esri.popup.content.mixins.ChartMediaInfo")],a)}(b.declared(f))});