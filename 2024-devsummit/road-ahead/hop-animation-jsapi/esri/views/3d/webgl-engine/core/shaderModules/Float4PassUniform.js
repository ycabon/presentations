// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./Uniform","../shaderTechnique/BindType"],function(a,c,d){class e extends c.Uniform{constructor(b,f){super(b,"vec4",d.BindType.Pass,(g,h,k)=>g.setUniform4fv(b,f(h,k)))}}a.Float4PassUniform=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});