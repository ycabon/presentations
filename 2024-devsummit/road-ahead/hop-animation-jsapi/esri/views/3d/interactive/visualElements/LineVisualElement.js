// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ./Object3DVisualElement ../../support/engineContent/line ../../webgl-engine/lib/Material ../../webgl-engine/materials/RibbonLineMaterial".split(" "),function(n,p,t,g,f,m,u,q,v,w){class x extends u.Object3DVisualElement{constructor(a,b){super(a);this._hasExternalMaterial=
!1;this._hasExternalMaterial=null!=b;this._material=null!=b?b:new w.RibbonLineMaterial({width:1,color:m.fromValues(1,0,1,1),stippleOffColor:null,stipplePattern:null,stipplePreferContinuous:!0,isClosed:!1,falloff:0,innerColor:null,innerWidth:1,hasPolygonOffset:!1,renderOccluded:v.RenderOccludedFlag.OccludeAndTransparent,isDecoration:!!a.isDecoration,writeDepth:!0});this.applyProperties(a)}setGeometryFromRenderSpacePoint(a,b=1E3){this.geometry=[[[a[0]-b,a[1],a[2]],[a[0]+b,a[1],a[2]]],[[a[0],a[1]-b,
a[2]],[a[0],a[1]+b,a[2]]],[[a[0],a[1],a[2]-b],[a[0],a[1],a[2]+b]]]}setGeometryFromExtent(a){const b=this.view.spatialReference,d=f.create(),c=f.create(),e=[];g.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);g.set(d,a[2],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);g.set(d,a[2],a[3],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);g.set(d,a[0],a[3],100);this.view.renderCoordsHelper.toRenderCoords(d,
b,c);e.push([c[0],c[1],c[2]]);g.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);g.set(d,a[0],a[1],100);this.view.renderCoordsHelper.toRenderCoords(d,b,c);e.push([c[0],c[1],c[2]]);this.geometry=[e]}setGeometryFromFrustum(a){const b=[];a.lines.forEach(d=>{b.push([d.origin[0],d.origin[1],d.origin[2]]);b.push([d.endpoint[0],d.endpoint[1],d.endpoint[2]])});this.geometry=[b]}setGeometryFromBoundedPlane(a){const b=[],d=a.origin,c=a.basis1;a=a.basis2;const e=
f.create(),h=f.create(),k=f.create(),l=f.create();e[0]=d[0]-.5*c[0]-.5*a[0];e[1]=d[1]-.5*c[1]-.5*a[1];e[2]=d[2]-.5*c[2]-.5*a[2];h[0]=d[0]-.5*c[0]+.5*a[0];h[1]=d[1]-.5*c[1]+.5*a[1];h[2]=d[2]-.5*c[2]+.5*a[2];k[0]=d[0]+.5*c[0]+.5*a[0];k[1]=d[1]+.5*c[1]+.5*a[1];k[2]=d[2]+.5*c[2]+.5*a[2];l[0]=d[0]+.5*c[0]-.5*a[0];l[1]=d[1]+.5*c[1]-.5*a[1];l[2]=d[2]+.5*c[2]-.5*a[2];b.push([e[0],e[1],e[2]]);b.push([h[0],h[1],h[2]]);b.push([k[0],k[1],k[2]]);b.push([l[0],l[1],l[2]]);b.push([e[0],e[1],e[2]]);this.geometry=
[b]}setGeometryFromSegment(a){const b=a.endRenderSpace;this.transform=p.fromTranslation(r,b);({points:a}=a.createRenderGeometry(b,this.view.renderCoordsHelper));this.geometry=[a]}setGeometryFromSegments(a,b=f.ZEROS){this.transform=p.fromTranslation(r,b);this.geometry=a.map(d=>d.createRenderGeometry(b,this.view.renderCoordsHelper).points)}getTransformedGeometry(){return null==this._geometry?null:this._geometry.map(a=>a.map(b=>g.transformMat4(f.create(),b,this.transform)))}get renderOccluded(){return this._material.parameters.renderOccluded}set renderOccluded(a){this._material.setParameters({renderOccluded:a})}get geometry(){return this._geometry}set geometry(a){this._geometry=
a;this.recreateGeometry()}get width(){return this._material.parameters.width}set width(a){this._material.setParameters({width:a})}get color(){return this._material.parameters.color}set color(a){const b=1===a[3];this._material.setParameters({color:m.clone(a),writeDepth:b})}get innerWidth(){return this._material.parameters.innerWidth}set innerWidth(a){this._material.setParameters({innerWidth:a})}get innerColor(){return this._material.parameters.innerColor}set innerColor(a){this._material.setParameters({innerColor:null!=
a?m.clone(a):null})}get stipplePattern(){return this._material.parameters.stipplePattern}set stipplePattern(a){null!=this._material&&this._material.setParameters({stipplePattern:a})}get stippleOffColor(){return this._material.parameters.stippleOffColor}set stippleOffColor(a){this._material.setParameters({stippleOffColor:null!=a?m.clone(a):null})}get stipplePreferContinuous(){return this._material.parameters.stipplePreferContinuous}set stipplePreferContinuous(a){this._material.setParameters({stipplePreferContinuous:a})}get falloff(){return this._material.parameters.falloff}set falloff(a){this._material.setParameters({falloff:a})}get polygonOffset(){return this._material.parameters.hasPolygonOffset}set polygonOffset(a){this._material.setParameters({hasPolygonOffset:a})}createExternalResources(){}destroyExternalResources(){}createGeometries(a){for(const b of q.lineStripsToParameters(this.geometry)){const d=
q.createGeometry(this._material,b);a.addGeometry(d)}}forEachExternalMaterial(a){this._hasExternalMaterial||a(this._material)}}const r=t.create();n.LineVisualElement=x;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});