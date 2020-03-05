// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/SetUtils ../../core/accessorSupport/decorators".split(" "),function(v,w,r,d,t,u,l,e){var m=l.createSetFromValues(["Raster","Raster2","DEM","FillRaster"]),n=l.createSetFromValues(["Rasters"]),p=function(b){return b&&b.rasterFunction?g.fromJSON(b):b},k=function(b){return b&&b instanceof g?b.toJSON():b},h;(function(b){b[b.MOSAIC=0]="MOSAIC";b[b.GROUP=
1]="GROUP";b[b.ITEM=2]="ITEM"})(h||(h={}));var g=function(b){function a(c){c=b.call(this,c)||this;c.functionArguments=null;c.functionName=null;c.outputPixelType="unknown";c.variableName=null;c.description=null;c.functionDefinition=null;c.thumbnail=null;return c}r(a,b);g=a;a.prototype.readFunctionArguments=function(c,a){c=a.arguments||a.rasterFunctionArguments;if(null==c)c=null;else{a={};for(var b=0,e=Object.keys(c);b<e.length;b++){var d=e[b];m.has(d)?a[d]=p(c[d]):n.has(d)&&Array.isArray(c[d])?a[d]=
c[d].map(p):a[d]=c[d]}c=a}return c};a.prototype.writeFunctionArguments=function(c,a,d){for(var b={},e=0,q=Object.keys(c);e<q.length;e++){var f=q[e];m.has(f)?b[f]=k(c[f]):n.has(f)&&Array.isArray(c[f])?b[f]=c[f].map(k):b[f]=k(c[f])}this.functionDefinition?a.arguments=b:a[d]=b};a.prototype.readFunctionName=function(c,a){c=a.rasterFunctionInfos;var b=a.name;return b?b:c&&c.length&&"None"!==c[0].name?c[0].name:a.rasterFunction};a.prototype.writeFunctionName=function(a,b,d){this.functionDefinition?b.name=
a:b[d]=a};a.prototype.readFunctionType=function(a){return h[a]};a.prototype.writeFunctionType=function(a,b,d){b[d]=h[a]};a.prototype.clone=function(){return new g({functionName:this.functionName,functionArguments:u.clone(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,name:this.functionName,description:this.description,functionType:this.functionType,functionDefinition:this.functionDefinition,thumbnail:this.thumbnail})};var g;d([e.property({json:{type:Object,
write:{target:"rasterFunctionArguments"}}})],a.prototype,"functionArguments",void 0);d([e.reader("functionArguments",["rasterFunctionArguments","arguments"])],a.prototype,"readFunctionArguments",null);d([e.writer("functionArguments")],a.prototype,"writeFunctionArguments",null);d([e.property({json:{type:String,write:{target:"rasterFunction"}}})],a.prototype,"functionName",void 0);d([e.reader("functionName",["rasterFunction","rasterFunctionInfos","name"])],a.prototype,"readFunctionName",null);d([e.writer("functionName")],
a.prototype,"writeFunctionName",null);d([e.enumeration.serializable()({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),e.property({json:{default:"unknown"}})],a.prototype,"outputPixelType",void 0);d([e.property({type:String,json:{read:!0,write:!0}})],a.prototype,"variableName",void 0);d([e.property({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,
"description",void 0);d([e.property({json:{origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"functionType",void 0);d([e.reader("functionType")],a.prototype,"readFunctionType",null);d([e.writer("functionType")],a.prototype,"writeFunctionType",null);d([e.property({type:Object,json:{read:{source:"function"},write:{target:"function"},origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"functionDefinition",void 0);d([e.property({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,
write:!1}}}})],a.prototype,"thumbnail",void 0);return a=g=d([e.subclass("esri.layers.support.RasterFunction")],a)}(e.declared(t.JSONSupport));return g});