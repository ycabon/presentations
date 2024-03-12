// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./MomentumEstimator"],function(d,e){class f extends e.MomentumEstimator{constructor(a=3,c=.01,b=.95,g=12){super(a,c,b,g)}add(a,c){const b=this.value.lastValue;if(null!=b){for(a-=b;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;a=b+a}super.add(a,c)}}d.RotationMomentumEstimator=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});