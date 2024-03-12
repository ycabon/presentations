// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../chunks/tslib.es6","../../GraphShaderModule","../../graph/glsl","./utils"],function(e,k,f,a,l){class g extends f.UniformGroup{getSize(h,m){const b=this.minMaxValueAndSize.xy,c=this.minMaxValueAndSize.zw;return a.ifElse(l.isNan(h),m,()=>{var d=h.subtract(b.x).divide(b.y.subtract(b.x));d=a.clamp(d,new a.Float(0),new a.Float(1));return c.x.add(d.multiply(c.y.subtract(c.x)))})}}k.__decorate([f.uniform(a.Vec4)],g.prototype,"minMaxValueAndSize",void 0);e.VisualVariableSizeMinMaxValue=
g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});