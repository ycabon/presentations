// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(m,n,h,d,k,l,c){var e=new k.default({slider:"slider",picker:"picker"});return function(g){function b(a){a=g.call(this,a)||this;a.interactionMode=null;a.numStops=null;a.stopInterval=null;return a}h(b,g);f=b;b.prototype.clone=function(){return new f({interactionMode:this.interactionMode,numStops:this.numStops,
stopInterval:this.stopInterval})};var f;d([c.property({type:e.apiValues,nonNullable:!0,json:{type:e.jsonValues,default:null,read:{reader:e.read},write:{isRequired:!0,writer:e.write}}})],b.prototype,"interactionMode",void 0);d([c.property({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy:function(){var a=null!=this.stopInterval;return{enabled:!a,isRequired:!a}}}}})],b.prototype,"numStops",void 0);d([c.property({type:Number,json:{write:{overridePolicy:function(){return{isRequired:null==
this.numStops}}}}})],b.prototype,"stopInterval",void 0);return b=f=d([c.subclass("esri.webdoc.widgets.Range")],b)}(c.declared(l.JSONSupport))});