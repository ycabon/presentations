// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../chunks/tslib.es6","../../GraphShaderModule","../../graph/glsl","./constants"],function(f,g,d,a,l){class e extends d.UniformGroup{getPatternOffsetAtTileOrigin(c,h=new a.Float(0),k=new a.Float(1)){var b=(new a.Vec2(l.maxRepresentableInt)).divide(c);b=c.multiply(a.fract(this.maxIntsToLocalOrigin.multiply(b))).add(this.tileOffsetFromLocalOrigin).subtract((new a.Float(.5)).multiply(c));b=new a.Vec2(b.x.multiply(k).subtract(b.y.multiply(h)),b.x.multiply(h).add(b.y.multiply(k)));
return a.mod(b,c)}}g.__decorate([d.uniform(a.Vec2)],e.prototype,"tileOffsetFromLocalOrigin",void 0);g.__decorate([d.uniform(a.Vec2)],e.prototype,"maxIntsToLocalOrigin",void 0);f.LocalTileOffset=e;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});