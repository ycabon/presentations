// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./enums"],function(a,b){class c{constructor(d){this._context=d;this.type="transform-feedback";this._glName=this._gl.createTransformFeedback();this._context.instanceCounter.increment(b.ResourceType.TransformFeedback,this)}dispose(){this._context.gl&&this._glName&&(this._gl.deleteTransformFeedback(this._glName),this._glName=null,this._context.instanceCounter.decrement(b.ResourceType.TransformFeedback,this))}get _gl(){return this._context.gl}get glName(){return this._glName}}a.TransformFeedback=
c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});