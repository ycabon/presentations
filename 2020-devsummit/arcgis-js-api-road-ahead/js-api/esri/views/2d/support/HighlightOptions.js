// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Color ../../../core/Accessor ../../../core/accessorSupport/decorators".split(" "),function(k,l,f,c,d,g,b){var h=0;return function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.color=new d([0,255,255]);a.haloOpacity=1;a.fillOpacity=.25;return a}f(a,e);Object.defineProperty(a.prototype,"version",{get:function(){return h++},enumerable:!0,configurable:!0});c([b.property({readOnly:!0,
dependsOn:["color","haloColor","haloOpacity","fillOpacity"]})],a.prototype,"version",null);c([b.property({type:d})],a.prototype,"color",void 0);c([b.property({type:d})],a.prototype,"haloColor",void 0);c([b.property()],a.prototype,"haloOpacity",void 0);c([b.property()],a.prototype,"fillOpacity",void 0);return a=c([b.subclass("esri.views.2d.support.HighlightOptions")],a)}(b.declared(g))});