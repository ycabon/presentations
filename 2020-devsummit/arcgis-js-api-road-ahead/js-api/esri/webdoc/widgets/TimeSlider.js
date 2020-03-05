// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../TimeExtent ../../TimeInterval ../../core/JSONSupport ../../core/lang ../../core/object ../../core/accessorSupport/decorators".split(" "),function(p,q,l,d,e,g,m,n,h,c){return function(k){function b(a){a=k.call(this,a)||this;a.currentTimeExtent=null;a.fullTimeExtent=null;a.numStops=null;a.numThumbs=null;a.stopDelay=null;a.stopInterval=null;return a}l(b,k);f=b;b.prototype.readCurrentTimeExtent=
function(a){if(a)return new e({start:null!=a[0]?new Date(a[0]):null,end:null!=a[1]?new Date(a[1]):null})};b.prototype.writeCurrentTimeExtent=function(a,b,c){a&&h.setDeepValue(c,[a.start?a.start.getTime():null,a.end?a.end.getTime():null],b)};b.prototype.readFullTimeExtent=function(a,b){if(a=b.properties)return new e({start:null!=a.startTime?new Date(a.startTime):null,end:null!=a.endTime?new Date(a.endTime):null})};b.prototype.writeFullTimeExtent=function(a,b){if(a){b=b.properties=b.properties||{};
var c=a.end;a=a.start;c&&(b.endTime=c?c.getTime():null);a&&(b.startTime=a?a.getTime():null)}};b.prototype.readStopInterval=function(a,b,c){return a?g.fromJSON({value:a.interval,unit:a.units},c):null};b.prototype.writeStopInterval=function(a,b,c,d){a&&(a=a.toJSON(d),h.setDeepValue(c,{interval:a.value,units:a.unit},b))};b.prototype.clone=function(){return new f(n.clone({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,
stopInterval:this.stopInterval}))};var f;d([c.property({type:e,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],b.prototype,"currentTimeExtent",void 0);d([c.reader("currentTimeExtent")],b.prototype,"readCurrentTimeExtent",null);d([c.writer("currentTimeExtent")],b.prototype,"writeCurrentTimeExtent",null);d([c.property({type:e,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],
b.prototype,"fullTimeExtent",void 0);d([c.reader("fullTimeExtent")],b.prototype,"readFullTimeExtent",null);d([c.writer("fullTimeExtent")],b.prototype,"writeFullTimeExtent",null);d([c.property({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy:function(){var a=!!this.stopInterval;return{enabled:!a,isRequired:!a}}}}})],b.prototype,"numStops",void 0);d([c.property({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",
isRequired:!0}}})],b.prototype,"numThumbs",void 0);d([c.property({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],b.prototype,"stopDelay",void 0);d([c.property({type:g,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy:function(){return{isRequired:null==this.numStops}}}}})],b.prototype,"stopInterval",void 0);d([c.reader("stopInterval")],b.prototype,"readStopInterval",
null);d([c.writer("stopInterval")],b.prototype,"writeStopInterval",null);return b=f=d([c.subclass("esri.webdoc.widgets.TimeSlider")],b)}(c.declared(m.JSONSupport))});