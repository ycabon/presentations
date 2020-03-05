// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/decorateHelper ../../../../core/tsSupport/declareExtendsHelper ../../../../core/Evented ../../../../core/HandleOwner ../../../../core/accessorSupport/decorators".split(" "),function(c,d,f,g,h,k,e){Object.defineProperty(d,"__esModule",{value:!0});c=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}g(a,b);a.prototype.onFeature=function(a){this.emit("feature",a)};return a=f([e.subclass("esri.layers.graphics.sources.connections.StreamConnection")],
a)}(e.declared(h.EventedMixin(k.HandleOwner)));d.default=c});