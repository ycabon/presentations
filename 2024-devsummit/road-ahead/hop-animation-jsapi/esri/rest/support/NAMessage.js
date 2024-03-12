// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./GPMessage".split(" "),function(c,b,d,g,h,k,e,a){b=new b.JSONMap({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});a=class extends a{constructor(f){super(f);this.type=null}};c.__decorate([d.property({type:String,json:{read:b.read,
write:b.write}})],a.prototype,"type",void 0);return a=c.__decorate([e.subclass("esri.rest.support.NAMessage")],a)});