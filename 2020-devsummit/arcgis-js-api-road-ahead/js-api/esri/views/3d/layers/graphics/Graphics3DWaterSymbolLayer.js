// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../Color ../../../../core/maybe ../../../../core/unitUtils ../../../../core/libs/earcut/earcut ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/math/common ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ./ElevationAligners ./elevationAlignmentUtils ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./polygonUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/WaterMaterial ../../webgl-engine/materials/internal/waterMaterialUtils".split(" "),
function(p,v,A,B,C,D,E,l,F,x,G,H,t,I,J,m,w,K,q,L,M,N,r,O,P,Q,R,y){Object.defineProperty(v,"__esModule",{value:!0});p=function(p){function c(a,b,g,c){return p.call(this,a,b,g,c)||this}B(c,p);c.prototype.doLoad=function(){return D(this,void 0,void 0,function(){return C(this,function(a){return[2]})})};c.prototype.destroy=function(){p.prototype.destroy.call(this);l.isSome(this._material)&&(this._context.stage.remove(3,this._material.id),this._material=null)};c.prototype.createGraphics3DGraphic=function(a){a=
a.graphic;if(!this._validateGeometryType(a.geometry,c.validGeometryTypes,this.symbolLayer.type)||!this._validateGeometry(a.geometry))return null;var b="graphic"+a.uid,g=this.getGraphicElevationContext(a);this.ensureDrapedStatus("on-the-ground"===g.mode);this.ensureMaterial();return this.draped?this._createAsOverlay(a,b):this._createAs3DShape(a,g,b,a.uid)};c.prototype.ensureMaterial=function(){if(!l.isSome(this._material)){var a=A({},y.defaultWaterMaterialParameters),b=this.symbolLayer.color;l.isSome(b)&&
(a.color=E.toUnitRGBA(b));b=this._getCombinedOpacity(b,{hasIntrinsicColor:!0});a.color=[a.color[0],a.color[1],a.color[2],b];a.transparent=1>b||this.needsDrivenTransparentPass;a.waveDirection=l.isSome(this.symbolLayer.waveDirection)?c.headingVectorFromAngle(this.symbolLayer.waveDirection):t.vec2f64.fromValues(0,0);b=y.wavePresets[this.symbolLayer.waveStrength+"-"+this.symbolLayer.waterbodySize];a.waveStrength=b.waveStrength;a.waveTextureRepeat=b.textureRepeat;a.waveVelocity=b.waveVelocity;a.flowStrength=
b.perturbationStrength;a.slicePlaneEnabled=this._context.slicePlaneEnabled;a.isDraped=this.draped;this._material=new R.WaterMaterial(a,"water");this._context.stage.add(3,this._material)}};c.prototype.layerOpacityChanged=function(){if(l.isNone(this._material))return!0;var a=this._material.getParameters().color,b=this._getCombinedOpacity(this.symbolLayer.color,{hasIntrinsicColor:!0});this._material.setParameterValues({color:[a[0],a[1],a[2],b],transparent:1>b||this.needsDrivenTransparentPass});return!0};
c.prototype.layerElevationInfoChanged=function(a,b,g){var e=this._elevationContext.mode;g=q.elevationModeChangeUpdateType(c.elevationModeChangeTypes,g,e);if(g!==q.SymbolUpdateType.UPDATE)return g;var d=q.needsElevationUpdates2D(e);return this.updateGraphics3DGraphicElevationInfo(a,b,function(){return d})};c.prototype.slicePlaneEnabledChanged=function(){l.isSome(this._material)&&this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};c.prototype.physicalBasedRenderingChanged=
function(){return!0};c.prototype.pixelRatioChanged=function(){return!0};c.prototype._createAs3DShape=function(a,b,g,c){a=r.geometryAsPolygon(a.geometry);if(l.isNone(a))return null;e.renderData=r.geometryToRenderInfo(a,this._context.elevationProvider,this._context.renderCoordsHelper,b);var d=e.renderData.position.length/3;e.uvCoords=new Float64Array(2*d);e.idHint=g;e.outNum=0;e.outGeometries=[];e.outTransforms=[];e.outMaterials=[];this._create3DShapeGeometries(e);this._logGeometryCreationWarnings(e.renderData,
a.rings,"rings","WaterSymbol3DLayer");if(0===e.outNum)return null;this._createUVCoordsFromVertices(e.uvCoords,e.renderData.mapPosition,d,this._context.elevationProvider.spatialReference);g=new P({geometries:e.outGeometries,materials:e.outMaterials,transformations:e.outTransforms,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:c},idHint:g});g=new M(this,g,e.outGeometries,null,null,K.perVertexElevationAligner,b);g.alignedSampledElevation=e.renderData.sampledElevation;g.needsElevationUpdates=
q.needsElevationUpdates2D(b.mode);return g};c.prototype._createUVCoordsFromVertices=function(a,b,g,e){e=F.getMetersPerUnitForSR(e);w.empty(k);for(var d=0;d<g;d++)H.vec2.set(z,b[3*d+0],b[3*d+1]),w.expandPointInPlace(k,z);I.vec4.scale(k,k,e);d=k[1]%c.unitSizeOfTexture;u[0]=k[0]-k[0]%c.unitSizeOfTexture;u[1]=k[1]-d;for(d=0;d<g;d++)a[2*d+0]=(b[3*d+0]*e-u[0])/c.unitSizeOfTexture,a[2*d+1]=(b[3*d+1]*e-u[1])/c.unitSizeOfTexture};c.prototype._create3DShapeGeometries=function(a){for(var b=a.uvCoords,g=0,c=
a.renderData.polygons;g<c.length;g++){var d=c[g],e=d.count,f=d.index,h=d.position,k=d.mapPosition,d=d.holeIndices;if(l.isSome(this._context.clippingExtent)&&(m.empty(n),m.expandWithBuffer(n,k),!m.intersectsClippingArea(n,this._context.clippingExtent)))continue;d=x(k,d,3);0!==d.length&&(d=new Uint32Array(d),e=new Float64Array(b.buffer,2*f*b.BYTES_PER_ELEMENT,2*e),h=r.createWaterGeometryData({indices:d,attributeData:{position:h,uv0:e,mapPosition:k}}),h=new O(h,a.idHint),a.outGeometries.push(h),a.outMaterials.push(l.expect(this._material)),
a.outTransforms.push(G.mat4f64.IDENTITY),a.outNum++)}};c.prototype._createAsOverlay=function(a,b){var c=r.geometryAsPolygon(a.geometry);if(l.isNone(c))return null;l.expect(this._material).renderPriority=this._renderPriority+this._renderPriorityDelta/2;f.renderData=r.geometryToRenderInfoDraped(c,this._context.overlaySR);f.idHint=b;b=f.renderData.position.length/3;f.uvCoords=new Float64Array(2*b);f.outNum=0;f.outGeometries=[];f.outBoundingBox=m.empty();f.layerUid=this._context.layer.uid;f.graphicsUid=
a.uid;this._createAsOverlayWater(f);this._logGeometryCreationWarnings(f.renderData,c.rings,"rings","WaterSymbol3DLayer");if(0===f.outNum)return null;this._createUVCoordsFromVertices(f.uvCoords,f.renderData.position,b,c.spatialReference);return 0<f.outNum?new L(this,f.outGeometries,f.outBoundingBox):null};c.prototype._createAsOverlayWater=function(a){for(var b=a.uvCoords,c=0,e=a.renderData.polygons;c<e.length;c++){var d=e[c],f=d.position,k=d.holeIndices,h=d.index,d=d.count;m.empty(n);m.expandWithBuffer(n,
f);m.intersectsClippingArea(n,this._context.clippingExtent)&&(m.expand(a.outBoundingBox,n),k=x(f,k,3),0!==k.length&&(k=new Uint32Array(k),h=new Float64Array(b.buffer,2*h*b.BYTES_PER_ELEMENT,2*d),f=r.createWaterGeometryData({indices:k,attributeData:{position:f,uv0:h}}),f=new Q(f),f.data.layerUid=a.layerUid,f.data.graphicUid=a.graphicsUid,f.material=l.expect(this._material),h=n,f.center=[.5*(h[0]+h[3]),.5*(h[1]+h[4]),0],f.bsRadius=.5*Math.sqrt((h[3]-h[0])*(h[3]-h[0])+(h[4]-h[1])*(h[4]-h[1])),a.outGeometries.push(f),
a.outNum++))}};c.headingVectorFromAngle=function(a){var b=t.vec2f64.create();a=J.toRadian(a);b[0]=Math.sin(a);b[1]=Math.cos(a);return b};Object.defineProperty(c.prototype,"test",{get:function(){var a=this;return{create3DShape:function(b){return a._createAs3DShape(b.graphic,b.elevationContext,b.idHint,b.graphicUid)},ensureMaterial:function(){return a.ensureMaterial()}}},enumerable:!0,configurable:!0});c.validGeometryTypes=["polyline","polygon","extent"];c.unitSizeOfTexture=100;c.elevationModeChangeTypes=
{definedChanged:q.SymbolUpdateType.RECREATE,staysOnTheGround:q.SymbolUpdateType.NONE,onTheGroundChanged:q.SymbolUpdateType.RECREATE};return c}(N.default);v.Graphics3DWaterSymbolLayer=p;var u=t.vec2f64.create(),k=w.create(),z=t.vec2f64.create(),n=m.create(),e={idHint:null,renderData:null,uvCoords:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null},f={idHint:null,renderData:null,uvCoords:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null};
v.default=p});