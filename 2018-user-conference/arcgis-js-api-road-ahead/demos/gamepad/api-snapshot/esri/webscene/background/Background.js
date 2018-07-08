// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(k,l,f,d,g,h,c){return function(e){function b(a){return e.call(this)||this}f(b,e);b.prototype.normalizeCtorArgs=function(a){a&&a.type&&(a=g({},a),delete a.type);return a};b.prototype.clone=function(){};d([c.property({type:String,readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",
void 0);return b=d([c.subclass("esri.webscene.background.Background")],b)}(c.declared(h))});