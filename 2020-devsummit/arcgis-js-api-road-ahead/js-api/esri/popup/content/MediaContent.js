// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/lang ../../core/accessorSupport/decorators ./BarChartMediaInfo ./ColumnChartMediaInfo ./Content ./ImageMediaInfo ./LineChartMediaInfo ./PieChartMediaInfo ./support/mediaInfoTypes".split(" "),function(r,t,f,c,g,b,h,k,l,m,n,p,q){return function(e){function a(a){a=e.call(this,a)||this;a.mediaInfos=null;a.type="media";return a}f(a,e);d=a;a.prototype.readMediaInfos=function(a){return a&&a.map(function(a){if("image"===
a.type)return m.fromJSON(a);if("barchart"===a.type)return h.fromJSON(a);if("columnchart"===a.type)return k.fromJSON(a);if("linechart"===a.type)return n.fromJSON(a);if("piechart"===a.type)return p.fromJSON(a)}).filter(Boolean)};a.prototype.writeMediaInfos=function(a,b){b.mediaInfos=a&&a.map(function(a){return a.toJSON()})};a.prototype.clone=function(){return new d({mediaInfos:this.mediaInfos?g.clone(this.mediaInfos):null})};var d;c([b.property({types:[q.types]})],a.prototype,"mediaInfos",void 0);c([b.reader("mediaInfos")],
a.prototype,"readMediaInfos",null);c([b.writer("mediaInfos")],a.prototype,"writeMediaInfos",null);c([b.property({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d=c([b.subclass("esri.popup.content.MediaContent")],a)}(b.declared(l))});