// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/jsonMap ../../core/accessorSupport/decorators ./GPMessage".split(" "),function(k,l,f,c,g,b,h){var d=new g.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function a(a){a=e.call(this,a)||this;a.type=null;return a}f(a,e);c([b.property({type:String,json:{read:d.read,write:d.write}})],a.prototype,
"type",void 0);return a=c([b.subclass("esri.tasks.support.NAMessage")],a)}(b.declared(h))});