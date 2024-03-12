// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe"],function(a,b){class c{constructor(){this._result=!1}dispose(){this._program=b.disposeMaybe(this._program)}get result(){null!=this._program&&(this._result=this._test(this._program),this.dispose());return this._result}}a.WebGLDriverTestModule=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});