// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./BuildingFilterMode".split(" "),function(h,k,f,c,b,g){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.type="x-ray";a.opacity=.5;return a}f(a,d);e=a;a.prototype.clone=function(){return new e({opacity:this.opacity})};var e;c([b.enumeration.serializable()({xRay:"x-ray"})],a.prototype,"type",void 0);c([b.property({type:Number,json:{write:!0}})],
a.prototype,"opacity",void 0);return a=e=c([b.subclass("esri.layers.support.BuildingFilterModeXRay")],a)}(b.declared(g))});