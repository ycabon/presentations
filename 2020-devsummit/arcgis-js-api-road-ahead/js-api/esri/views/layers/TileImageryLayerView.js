// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/Error ../../core/accessorSupport/decorators".split(" "),function(k,b,e,d,f,g,h,c){Object.defineProperty(b,"__esModule",{value:!0});b.TileImageryLayerView=function(b){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.layer=null;a.view=null;a.datumTransformation=null;return a}e(a,b);Object.defineProperty(a.prototype,
"hasTilingEffects",{get:function(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment},enumerable:!0,configurable:!0});a.prototype.fetchPopupFeatures=function(a,b){return g(this,void 0,void 0,function(){return f(this,function(a){throw new h("rasterlayerview:fetchpopupfeatures","not implemented");})})};d([c.property()],a.prototype,"layer",void 0);d([c.property()],a.prototype,"view",void 0);d([c.property({readOnly:!0,dependsOn:["layer.renderer"]})],
a.prototype,"hasTilingEffects",null);return a=d([c.subclass("esri.views.layers.TileImageryLayerView")],a)}(c.declared(b))}});