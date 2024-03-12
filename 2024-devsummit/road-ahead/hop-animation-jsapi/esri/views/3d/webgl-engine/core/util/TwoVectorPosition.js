// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/vec32","../../../../../core/libs/gl-matrix-2/factories/vec3f32","../../../../../core/libs/gl-matrix-2/factories/vec3f64"],function(c,b,f,d){class g{constructor(a){this._low=d.create();this._high=d.create();a&&this.set(a)}get low(){return this._low}get high(){return this._high}set(a){b.copy(this._low,b.copy(e,a));a=b.sub(e,a,this._low);b.copy(this._high,a)}get(a){return b.add(a,this._low,this._high)}getLowScaled(a){return b.scale(a,this._low,1)}}const e=f.create();
c.TwoVectorPosition=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});