// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./mesh/instanceIdUtils"],function(b,c){class d{constructor(a,e,f,g,h){this._instanceId=a;this.techniqueRef=e;this._meshWriterName=f;this._input=g;this.optionalAttributes=h}get instanceId(){return c.castStrictInstanceId(this._instanceId)}createMeshInfo(a){return{id:this._instanceId,meshWriterName:this._meshWriterName,options:a,optionalAttributes:this.optionalAttributes}}getInput(){return this._input}setInput(a){this._input=a}}b.TechniqueInstance=d;Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});