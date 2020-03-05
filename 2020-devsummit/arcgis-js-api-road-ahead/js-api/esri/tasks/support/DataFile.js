// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(g,h,e,c,f,b){return function(d){function a(a){a=d.call(this,a)||this;a.itemId=null;a.url=null;return a}e(a,d);c([b.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],a.prototype,"itemId",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"url",void 0);return a=c([b.subclass("esri.tasks.support.DataFile")],
a)}(b.declared(f.JSONSupport))});