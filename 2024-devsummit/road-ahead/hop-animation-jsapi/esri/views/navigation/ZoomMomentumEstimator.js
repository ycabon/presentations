// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./Momentum","./MomentumEstimator"],function(d,f,g){class e extends f.Momentum{constructor(a,b,c){super(a,b,c)}value(a){a=super.value(a);return Math.exp(a)}valueDelta(a,b){const c=super.value(a);a=super.value(a+b);return Math.exp(a-c)}}class h extends g.MomentumEstimator{constructor(a=2.5,b=.01,c=.95,k=12){super(a,b,c,k)}add(a,b){super.add(Math.log(a),b)}createMomentum(a,b,c){return new e(a,b,c)}}d.ZoomMomentum=e;d.ZoomMomentumEstimator=h;Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});