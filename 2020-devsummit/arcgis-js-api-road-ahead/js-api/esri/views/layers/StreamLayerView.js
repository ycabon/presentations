// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./support/FeatureFilter".split(" "),function(h,b,f,e,d,g){Object.defineProperty(b,"__esModule",{value:!0});b.StreamLayerView=function(b){return function(b){function a(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];c=b.apply(this,c)||this;c.connectionError=null;c.connectionStatus="disconnected";c.filter=null;return c}f(a,b);e([d.property({readOnly:!0})],
a.prototype,"connectionError",void 0);e([d.property({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],a.prototype,"connectionStatus",void 0);e([d.property({type:g})],a.prototype,"filter",void 0);return a=e([d.subclass("esri.layers.mixins.StreamLayerView")],a)}(d.declared(b))}});