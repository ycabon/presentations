// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Evented ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f32 ../../../../geometry/projection/projectBuffer ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/DoubleArray ../../../../layers/graphics/dehydratedPoint ../../../../support/elevationInfoUtils ../../../../symbols/support/ElevationInfo ./EngineVisualElement ./LaserlineVisualElement ../../layers/graphics/ElevationContext ../../support/engineContent/line ../../support/renderInfoUtils/line ../../webgl-engine/lib/Material ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(m,u,h,n,g,k,v,w,x,y,z,A,B,C,D,p,q,l,E,F,r){class G extends B.EngineVisualElement{constructor(a){super(a);this._attachmentOrigin=y.makeDehydratedPoint(0,0,0,null);this._attachmentOriginDirty=!0;this.events=new u;this._geometry=null;this._width=1;this._color=k.fromValues(1,0,1,1);this._innerWidth=0;this._innerColor=k.fromValues(1,1,1,1);this._stippleOffColor=this._stipplePattern=null;this._falloff=0;this._laserlineStyle=this._elevationInfo=null;this._laserlineEnabled=!1;this._renderOccluded=
l.RenderOccludedFlag.OccludeAndTransparentStencil;this._attachmentOrigin.spatialReference=a.view.spatialReference;this._laserline=new C.LaserlineVisualElement({view:a.view,isDecoration:a.isDecoration});this.applyProperties(a);this.attached=a.attached??!0}destroy(){this._laserline.destroy();super.destroy()}createObject3DResourceFactory(a){return{view:a,createResources:b=>this._createObject3DResources(b),destroyResources:b=>this._destroyExternalResources(b),recreateGeometry:(b,c)=>{b.geometries.length=
0;this._recreateGeometry(c,b.material,b.geometries)}}}createDrapedResourceFactory(a){return{view:a,createResources:()=>this._createDrapedResources(),destroyResources:b=>this._destroyExternalResources(b),recreateGeometry:b=>{b.geometries=this._createRenderGeometriesDraped(b.material);this._attachmentOriginChanged()}}}get _laserlineAttached(){return this.attached&&this.visible&&null!=this._laserlineStyle&&!this.isDraped&&this.laserlineEnabled}onAttachedChange(a){this._laserline.attached=this._laserlineAttached;
a&&this._attachmentOriginChanged()}get geometry(){return this._geometry}set geometry(a){this._geometry=a;this.recreateGeometry()}get width(){return this._width}set width(a){a!==this._width&&(this._width=a,this._updateMaterial())}get color(){return this._color}set color(a){g.exactEquals(a,this._color)||(g.copy(this._color,a),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(a){a!==this._innerWidth&&(this._innerWidth=a,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(a){g.exactEquals(a,
this._innerColor)||(g.copy(this._innerColor,a),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(a){const b=null!=a!==(null!=this._stipplePattern);this._stipplePattern=a;b?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(a){a&&this._stippleOffColor&&g.exactEquals(a,this._stippleOffColor)||(this._stippleOffColor=a?k.clone(a):null,this._updateMaterial())}get falloff(){return this._falloff}set falloff(a){a!==
this._falloff&&(this._falloff=a,this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(a){this._elevationInfo=a;this.recreateGeometry()}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(a){this._laserlineStyle=a;this._laserline.attached=this._laserlineAttached;null!=a&&(this._laserline.style=a)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(a){this._laserlineEnabled!==a&&(this._laserlineEnabled=a,this._laserline.attached=
this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}get attachmentOrigin(){if(!this._attachmentOriginDirty)return this._attachmentOrigin;const a=this.object3dResources.resources?.geometries;if(!a||0===a.length)return null;h.set(f,0,0,0);let b=0;for(const c of a)c.computeAttachmentOrigin(t)&&(h.add(f,f,t),b++);if(0===b)return null;h.scale(f,f,1/b);this.view.renderCoordsHelper.fromRenderCoords(f,
this._attachmentOrigin);this._attachmentOriginDirty=!1;return this._attachmentOrigin}_updateMaterial(){null!=this.object3dResources.resources&&this.object3dResources.resources.material.setParameters(this._materialParameters);null!=this.drapedResources.resources&&this.drapedResources.resources.material.setParameters(this._materialParameters)}get _isClosed(){return null!=this.geometry&&"polygon"===this.geometry.type}get _materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,
stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,isClosed:this._isClosed,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,join:"round",hasPolygonOffset:!0,renderOccluded:this._normalizedRenderOccluded,isDecoration:this.isDecoration}}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===l.RenderOccludedFlag.OccludeAndTransparentStencil?l.RenderOccludedFlag.OccludeAndTransparent:this._renderOccluded}_recreateGeometry(a,b,c){this._createRenderGeometries(b,
c);for(const d of c)a.addGeometry(d);this._attachmentOriginChanged()}_attachmentOriginChanged(){this._attachmentOriginDirty=!0;this.events.emit("attachment-origin-changed")}_destroyExternalResources(a){a.geometries=[]}_createObject3DResources(a){const b=new r.RibbonLineMaterial(this._materialParameters),c=[];this._recreateGeometry(a,b,c);return{material:b,geometries:c,forEach:d=>{d(b);c.forEach(d)}}}_createDrapedResources(){const a=new r.RibbonLineMaterial(this._materialParameters),b=this._createRenderGeometriesDraped(a);
return{material:a,geometries:b}}_createRenderGeometriesDraped(a){const {geometry:b,view:c}=this,d=c.basemapTerrain.spatialReference;return null==b||null==d?[]:q.geometryToRenderInfoDraped(b,d).lines.map(({position:e})=>new E.RenderGeometry(p.createGeometry(a,{overlayInfo:{spatialReference:d,renderCoordsHelper:c.renderCoordsHelper},attributeData:{position:e},removeDuplicateStartEnd:this._isClosed})))}calculateMapBounds(a){if(null==this.object3dResources.resources)return!1;const b=this.view.renderCoordsHelper;
for(const c of this.object3dResources.resources.geometries){const d=c.attributes.get(F.VertexAttribute.POSITION),e=x.newDoubleArray(d.data.length);v.projectBuffer(d.data,b.spatialReference,0,e,this.view.spatialReference,0,d.data.length/3);w.expandWithBuffer(a,e)}return!0}_createRenderGeometries(a,b){var c=this.geometry;if(null!=c){c=q.geometryToRenderInfo(c,this.view.elevationProvider,this.view.renderCoordsHelper,D.ElevationContext.fromElevationInfo(this.elevationInfo??new A({mode:z.getGeometryEffectiveElevationMode(c,
null)})));var d=[];for(const {position:e,mapPositions:H}of c.lines)b.push(p.createGeometry(a,{mapPositions:H,attributeData:{position:e},removeDuplicateStartEnd:this._isClosed})),d.push(e);this._laserline.pathVerticalPlane=d}}}const t=n.create(),f=n.create();m.OutlineVisualElement=G;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});