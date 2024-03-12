// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f32 ../../../../layers/graphics/dehydratedPoint ./EngineVisualElement ../../terrain/OverlayRenderer ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Material ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(y,F,t,k,w,n,p,z,G,H,I,A,B,J,K,x,C){class L extends I.EngineVisualElement{constructor(a){super(a);this._location=p.create();this._direction=p.fromValues(1,0,0);this._offset=this._width=1;this._length=18;this._color=G.fromValues(1,0,1,1);this._renderOccluded=J.RenderOccludedFlag.OccludeAndTransparent;this.applyProperties(a)}createObject3DResourceFactory(a){return{view:a,createResources:b=>this._createObject3DResources(b),destroyResources:b=>this._destroyObject3DResources(b),recreateGeometry:(b,
c)=>this._recreateObject3DGeometry(b,c),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(a){return{view:a,createResources:()=>this._createDrapedResources(),destroyResources:b=>this._destroyDrapedResources(b),recreateGeometry:b=>this._recreateDrapedGeometry(b)}}get location(){return this._location}set location(a){n.exactEquals(this._location,a)||(n.copy(this._location,a),this._updateGeometry())}get direction(){return this._direction}set direction(a){n.exactEquals(this._direction,
a)||(n.copy(this._direction,a),this._updateGeometry())}setDirectionFromPoints(a,b){n.normalize(this._direction,n.subtract(this._direction,b,a));this._updateGeometry()}get width(){return this._width}set width(a){a!==this._width&&(this._width=a,this._updateMaterial())}get offset(){return this._offset}set offset(a){a!==this._offset&&(this._offset=a,this._updateGeometry())}get length(){return this._length}set length(a){a!==this._length&&(this._length=a,this._updateGeometry())}get color(){return this._color}set color(a){z.exactEquals(a,
this._color)||(z.copy(this._color,a),this._updateMaterial())}get renderOccluded(){return this._renderOccluded}set renderOccluded(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}_createObject3DResources(a){const b=new C.RibbonLineMaterial(this.materialParameters),c=[];this._createObject3DGeometry(b,a,c);return{material:b,geometries:c,forEach:d=>{d(b);c.forEach(d)}}}_destroyObject3DResources(a){a.geometries.length=0}_recreateObject3DGeometry(a,b){a.geometries.length=0;this._createObject3DGeometry(a.material,
b,a.geometries)}_createObject3DGeometry(a,b,c){const [d,l]=this._createGeometries(a);b.addGeometry(d);b.addGeometry(l);c.push(d);c.push(l);this._updateVerticesObject3D(b)}_createDrapedResources(){const a=new C.RibbonLineMaterial(this.materialParameters),b=F.watch(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()});return{material:a,geometries:this._createDrapedGeometry(a),pixelRatioHandle:b}}_destroyDrapedResources(a){a.pixelRatioHandle.remove();a.geometries=[]}_recreateDrapedGeometry(a){a.geometries=
this._createDrapedGeometry(a.material)}_createDrapedGeometry(a){a=this._createGeometries(a);this._updateVerticesDraped(a);return a.map(b=>new K.RenderGeometry(b))}_createGeometries(a){return[B.createPolylineGeometry(a,[p.create(),p.create()]),B.createPolylineGeometry(a,[p.create(),p.create()])]}_updateMaterial(){const {materialParameters:a}=this;this.object3dResources.resources?.material.setParameters(a);this.drapedResources.resources?.material.setParameters(a)}get materialParameters(){return{width:this._width,
color:this._color,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const a=this.object3dResources.object;a&&this._updateVerticesObject3D(a)}}_updateVerticesObject3D(a){const b=this.view.state.camera;b.projectToScreen(this.location,u);n.add(m,this.location,this.direction);b.projectToScreen(m,q);k.normalize(q,k.subtract(q,q,u));this._updateVertexAttributesObject3D(b,a,0,u,q,1);this._updateVertexAttributesObject3D(b,
a,1,u,q,-1)}_updateVertexAttributesObject3D(a,b,c,d,l,e){c=b.geometries[c];const f=c.getMutableAttribute(x.VertexAttribute.POSITION)?.data;if(f){var {start:g,end:h}=this._computeStartEnd(l,d,e,this.offset,this.width,this.length);a.unprojectFromScreen(t.castScreenPointArray(g),m);f[0]=m[0];f[1]=m[1];f[2]=m[2];a.unprojectFromScreen(t.castScreenPointArray(h),m);f[3]=m[0];f[4]=m[1];f[5]=m[2];b.geometryVertexAttributeUpdated(c,x.VertexAttribute.POSITION)}}_updateVerticesDraped(a){const {view:{basemapTerrain:{overlayManager:b},
state:{contentPixelRatio:c}}}=this,{location:d,width:l,length:e,offset:f}=this;var g=M;g.spatialReference=b.renderer.spatialReference;g.x=d[0];g.y=d[1];var h=this.view.overlayPixelSizeInMapUnits(g)*c;g=l*h;const r=e*h;h*=f;this._updateVertexAttributesDraped(a[0],g,r,h,-1);this._updateVertexAttributesDraped(a[1],g,r,h,1)}_updateVertexAttributesDraped(a,b,c,d,l){const e=a.getMutableAttribute(x.VertexAttribute.POSITION)?.data;if(e){var {location:f,direction:g}=this,{start:h,end:r}=this._computeStartEnd(g,
f,l,d,b,c);e[0]=h[0];e[1]=h[1];e[2]=A.drapedZ;e[3]=r[0];e[4]=r[1];e[5]=A.drapedZ;a.invalidateBoundingInfo()}}_computeStartEnd(a,b,c,d,l,e){c=k.scale(D,k.set(D,a[1]*c,a[0]*-c),d+l/2);b=k.add(v,k.add(v,k.add(v,b,k.scale(v,a,e/2)),c),c);a=k.add(E,b,k.scale(E,a,-e));return{start:b,end:a}}}const m=p.create(),D=w.create(),v=w.create(),E=w.create(),u=t.createScreenPointArray(),q=t.createScreenPointArray(),M=H.makeDehydratedPoint(0,0,void 0,null);y.ParallelLineVisualElement=L;Object.defineProperty(y,Symbol.toStringTag,
{value:"Module"})});