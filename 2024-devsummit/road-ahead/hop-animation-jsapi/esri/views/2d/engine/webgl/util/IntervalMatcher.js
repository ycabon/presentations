// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../shaderGraph/techniques/mesh/createMeshWriter","./Matcher"],function(h,g,m){class k extends m.FeatureMatcher{constructor(a,b){super();this._intervals=[];this._isMaxInclusive=b;this._field=a}static async fromIntervalSchema(a,b,c,d){var e=await a.createComputedField(c);const f=new k(e,c.isMaxInclusive);await Promise.all(c.intervals.map(async l=>{const n=await g.createMeshWriterGroupFromSchema(a,b,l.meshes,d);f.add(l,n)}));e=await g.createMeshWriterGroupFromSchema(a,b,c.defaultSymbol,
d);f.setDefault(e);c=await g.createMeshWriterGroupFromSchema(a,b,c.backgroundFill,d);f.setBackgroundFill(c);return f}add(a,b){this._intervals.push({interval:a,result:b});this._intervals.sort((c,d)=>c.interval.min-d.interval.min)}size(){return super.size()+this._intervals.length}doMatch(a,b){a=this._field?.read(a,b);if(null==a||isNaN(a)||Infinity===a||-Infinity===a)return null;for(b=0;b<this._intervals.length;b++){const {interval:c,result:d}=this._intervals[b],e=this._isMaxInclusive?a<=c.max:a<c.max;
if(a>=c.min&&e)return d}return null}}h.IntervalMatcher=k;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});