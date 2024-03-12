// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../webgl/VertexArrayObject"],function(a,c){class d{constructor(...b){this.layout=null;this._vao=new c.VertexArrayObject(...b);this._context=b[0]}destroy(){this._vao.dispose()}bind(){this._context.bindVAO(this._vao)}}a.TypedVertexArrayObject=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});