// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./BuildingFilterMode ./BuildingFilterModeSolid ./BuildingFilterModeWireFrame ./BuildingFilterModeXRay".split(" "),function(q,r,k,d,l,m,c,n,e,g,h){var p={types:{key:"type",base:n,typeMap:{solid:e,"wire-frame":g,"x-ray":h}},json:{read:function(b){switch(b&&b.type){case "solid":return e.fromJSON(b);case "wireFrame":return g.fromJSON(b);
case "xRay":return h.fromJSON(b);default:return null}},write:{enabled:!0,isRequired:!0}}};return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.filterExpression=null;a.filterMode=new e;a.title="";return a}k(a,b);f=a;a.prototype.clone=function(){return new f({filterExpression:this.filterExpression,filterMode:m.clone(this.filterMode),title:this.title})};var f;d([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"filterExpression",void 0);d([c.property(p)],
a.prototype,"filterMode",void 0);d([c.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"title",void 0);return a=f=d([c.subclass("esri.layers.support.BuildingFilterBlock")],a)}(c.declared(l.JSONSupport))});