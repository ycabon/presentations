// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../shaderGraph/techniques/mesh/createMeshWriter"],function(c,f){class d{constructor(){this._backgroundFillResult=this._defaultResult=null}static async from(a,b,g,h){const e=new d;e.setDefault(await f.createMeshWriterGroupFromSchema(a,b,g.meshes,h));return e}size(){return 1}getDefault(){return this._defaultResult}setDefault(a){this._defaultResult=a}getBackgroundFill(){return this._backgroundFillResult}setBackgroundFill(a){this._backgroundFillResult=a}match(a,b){return(a=this.doMatch(a,
b)||this.getDefault())&&0<a.length&&(b=this.getBackgroundFill())?[...b,...a]:a}getSortKey(a,b){return 0}doMatch(a,b){return null}async fetchResources(a,b){}}c.FeatureMatcher=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});