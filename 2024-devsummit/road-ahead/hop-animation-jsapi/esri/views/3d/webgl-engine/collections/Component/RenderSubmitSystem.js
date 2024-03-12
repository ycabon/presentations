// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./DepthRange"],function(b,e){class f{constructor(a){this._objects=a}submit(a,c){this._objects.preSubmit(c);this._objects.visibleObjects.forAll(d=>d.renderable.material.submit(a,c,d))}queryShadowCasterDepthRange(a){return this._objects.visibleObjects.length?e.computeDepthRange(a,this._objects.visibleObjects):null}}b.RenderSubmitSystem=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});