// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ./Object3DVisualElement ../../webgl-engine/lib/Attribute ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Material ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/CheckerBoardMaterial".split(" "),
function(f,r,t,u,v,g,c,h,w,k,x,l,m,y){class z extends w.Object3DVisualElement{constructor(a){super(a);this._checkerBoardMaterial=null;this._renderOccluded=l.RenderOccludedFlag.OccludeAndTransparent;this._geometry=null;this._size=u.fromValues(1,1);this._color1=h.fromValues(1,.5,0,.5);this._color2=h.fromValues(1,1,1,.5);this.applyProperties(a)}get renderOccluded(){return this._renderOccluded}set renderOccluded(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}get geometry(){return this._geometry}set geometry(a){this._geometry=
a;this.recreateGeometry()}get size(){return this._size}set size(a){t.copy(this._size,a);this._updateMaterial()}get color1(){return this._color1}set color1(a){c.exactEquals(a,this._color1)||(c.copy(this._color1,a),this._updateMaterial())}get color2(){return this._color2}set color2(a){c.exactEquals(a,this._color2)||(c.copy(this._color2,a),this._updateMaterial())}_updateMaterial(){null!=this._checkerBoardMaterial&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,
renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new y.CheckerBoardMaterial({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:l.RenderOccludedFlag.OccludeAndTransparent,isDecoration:this.isDecoration})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(a){null!=this._checkerBoardMaterial&&a(this._checkerBoardMaterial)}createGeometries(a){if(null!=this._geometry&&
null!=this._checkerBoardMaterial){var n=A;r.getTranslation(n,this.transform);var b=this._geometry,p=[],d=g.create();b.position.forEach(e=>{v.subtract(d,e,n);p.push(d[0],d[1],d[2])});var q=[];b.uv.forEach(e=>{q.push(e[0],e[1])});b=new x.Geometry(this._checkerBoardMaterial,[[m.VertexAttribute.POSITION,new k.Attribute(p,b.triangleIndices,3,!0)],[m.VertexAttribute.UV0,new k.Attribute(q,b.triangleIndices,2,!0)]]);a.addGeometry(b)}}}const A=g.create();f.MeasurementAreaVisualElement=z;Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});