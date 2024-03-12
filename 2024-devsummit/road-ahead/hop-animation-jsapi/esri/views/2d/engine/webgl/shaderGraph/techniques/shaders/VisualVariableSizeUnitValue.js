// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../chunks/tslib.es6","../../GraphShaderModule","../../graph/glsl","./utils"],function(a,f,b,c,g){class d extends b.UniformGroup{getSize(e,h){return c.ifElse(g.isNan(e),h,e.multiply(this.unitValueToPixelsRatio))}}f.__decorate([b.uniform(c.Float)],d.prototype,"unitValueToPixelsRatio",void 0);a.VisualVariableSizeUnitValue=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});