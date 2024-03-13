// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../geometry/GeometryCursor ./FillMeshWriter ./meshWriterUtils ../line/LineMeshWriter ../shaders/constants ../../../../../../webgl/enums".split(" "),function(d,n,p,g,h,q,e){const k={createComputedParams:a=>a,attributes:{...h.LineVertexSpec.attributes,bitset:{type:e.DataType.UNSIGNED_BYTE,count:1,pack:a=>0},color:{type:e.DataType.UNSIGNED_BYTE,count:4,normalized:!0,pack:({color:a})=>g.processColorInput(a)}}},l={createComputedParams:a=>a,attributes:{...h.LineVertexSpec.attributes,
bitset:{type:e.DataType.UNSIGNED_BYTE,count:1,pack:a=>g.packBitset([[q.bitsetTypeFillOutline,!0]])},color:{type:e.DataType.UNSIGNED_BYTE,count:4,normalized:!0,pack:({outlineColor:a})=>g.processColorInput(a)}}};class m extends h.LineMeshWriter{constructor(){super(...arguments);this.vertexSpec=l}}class r extends p.FillMeshWriter{constructor(a,c,b,f){super(a,c,b,f);this.vertexSpec=k;this._lineMeshWriter=this._createOutlineWriter(a,c,b,f)}_createOutlineWriter(a,c,b,f){return new m(a,c,b,f)}_write(a,c,
b){b=b?.asOptimized()??c.readGeometryForDisplay();if(b=this._clip(b))a.recordStart(this.instanceId,this.attributeLayout),this._writeGeometry(a,c,b),this._lineMeshWriter.writeLineVertices(a,n.GeometryCursor.fromOptimizedCIM(b,"esriGeometryPolyline"),c),a.recordEnd()}ensurePacked(a,c,b){super.ensurePacked(a,c,b);this._lineMeshWriter.ensurePacked(a,c,b)}enqueueRequest(a,c,b){super.enqueueRequest(a,c,b);this._lineMeshWriter.enqueueRequest(a,c,b)}async loadDependencies(){await Promise.all([super.loadDependencies(),
this._lineMeshWriter.loadDependencies()])}}d.OutlineFillMeshWriter=r;d.OutlineFillOutlineMeshWriter=m;d.outlineFillVertexSpec_Fill=k;d.outlineFillVertexSpec_Outline=l;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});