// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./Uniform","../shaderTechnique/BindType"],function(a,c,d){class e extends c.Uniform{constructor(b,f){super(b,"vec3",d.BindType.Draw,(g,h,k,l)=>g.setUniform3fv(b,f(h,k,l)))}}a.Float3DrawUniform=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});