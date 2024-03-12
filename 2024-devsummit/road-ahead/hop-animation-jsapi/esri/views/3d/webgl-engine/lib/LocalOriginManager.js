// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/math/mat4","../../../../core/libs/gl-matrix-2/factories/mat4f64","./localOriginHelper"],function(b,e,f,g){class h{constructor(a){this._factory=a;this._originData=new Map}acquire(a){return this.register(this._factory.getOrigin(a))}register(a){a=this._originData.get(a.id)||new d(a);a.refCount++;this._originData.has(a.origin.id)||this._originData.set(a.origin.id,a);return a}release(a){a.refCount--;0===a.refCount&&this._originData.delete(a.origin.id)}updateViewMatrices(a){this._originData.forEach(c=>
{e.copy(c.viewMatrix,a);g.applyToViewMatrix(c.origin.vec3,c.viewMatrix)})}}class d{constructor(a){this.origin=a;this.refCount=0;this.viewMatrix=f.create()}}b.LocalOriginManager=h;b.OriginData=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});