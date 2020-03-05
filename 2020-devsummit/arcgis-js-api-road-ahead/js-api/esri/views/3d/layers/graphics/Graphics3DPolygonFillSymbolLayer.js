// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../Color ../../../../Color ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/earcut/earcut ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../geometry/support/aaBoundingBox ./ElevationAligners ./elevationAlignmentUtils ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./lineUtils ./polygonUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/Util ../../webgl-engine/materials/ColorMaterial ../../webgl-engine/materials/lineStippleUtils ../../webgl-engine/materials/NativeLineMaterial ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(n,r,A,B,C,D,E,f,u,v,w,k,F,p,G,H,I,J,x,q,y,K,z,L,M,N,t,O){Object.defineProperty(r,"__esModule",{value:!0});n=function(n){function c(a,e,g,b){a=n.call(this,a,e,g,b)||this;a._hasOutline=!1;return a}A(c,n);c.prototype.doLoad=function(){return C(this,void 0,void 0,function(){return B(this,function(a){return[2]})})};c.prototype.ensureMaterials=function(){this.ensureFillMaterial();this.ensureOutlineMaterial()};c.prototype.ensureFillMaterial=function(){if(!f.isSome(this._material)){var a=f.get(this.symbolLayer,
"material","color"),a=this._getCombinedOpacityAndColor(a);this._material=new M({color:a,transparent:1>a[3]||this.needsDrivenTransparentPass,polygonOffset:!1,vertexColors:!0,slicePlaneEnabled:this._context.slicePlaneEnabled},this._getIdHint("_colormat"));this._context.stage.add(3,this._material)}};c.prototype.ensureOutlineMaterial=function(){var a=this.symbolLayer.outline;if(!f.isSome(this._outlineMaterial)&&this._isValidOutline(a)){this._hasOutline=!0;var e;e=u.pt2px(a.size);var g=a.stipplePattern?
N.createStipplePattern(a.stipplePattern.map(u.pt2px)):null,a=a.stippleOffColor?E.toUnitRGBA(a.stippleOffColor):null;e=1.5<e?new O({width:e,color:this._getOutlineColor(),polygonOffset:!0,slicePlaneEnabled:this._context.slicePlaneEnabled,isClosed:!0,stipplePattern:g,stippleIntegerRepeats:!0,stippleOffColor:a},this._getIdHint("_outline_ribbonlinemat")):new t({color:this._getOutlineColor(),slicePlaneEnabled:this._context.slicePlaneEnabled,width:e,stipplePattern:g,stippleIntegerRepeats:!0,stippleOffColor:a},
this._getIdHint("_outline_nativelinemat"));this._outlineMaterial=e;this._context.stage.add(3,this._outlineMaterial)}};c.prototype._isValidOutline=function(a){return f.isSome(a)&&a.size&&0<a.size&&f.isSome(a.color)};c.prototype.destroy=function(){n.prototype.destroy.call(this);f.isSome(this._material)&&(this._context.stage.remove(3,this._material.id),this._material=null);f.isSome(this._outlineMaterial)&&(this._context.stage.remove(3,this._outlineMaterial.id),this._outlineMaterial=null)};c.prototype.createGraphics3DGraphic=
function(a){var e=a.graphic;if(!this._validateGeometryType(e.geometry,c.validGeometryTypes,this.symbolLayer.type)||!this._validateGeometry(e.geometry))return null;var g="graphic"+e.uid;a=this._getVertexOpacityAndColor(a.renderingInfo,Uint8Array,255);var b=this.getGraphicElevationContext(e);this.ensureDrapedStatus("on-the-ground"===b.mode);this.ensureMaterials();return this.draped?this._createAsOverlay(e,a,g):this._createAs3DShape(e,a,b,g)};c.prototype.layerOpacityChanged=function(){if(f.isSome(this._material)){var a=
this._material.getParameters().color,e=f.get(this.symbolLayer,"material","color"),e=this._getCombinedOpacity(e);this._material.setParameterValues({color:[a[0],a[1],a[2],e],transparent:1>e||this.needsDrivenTransparentPass})}f.isSome(this._outlineMaterial)&&(a=this._outlineMaterial.getParameters().color,this._outlineMaterial.setParameterValues({color:[a[0],a[1],a[2],this._getOutlineOpacity()]}));return!0};c.prototype.layerElevationInfoChanged=function(a,e,g){var b=this._elevationContext.mode;g=p.elevationModeChangeUpdateType(c.elevationModeChangeTypes,
g,b);if(g!==p.SymbolUpdateType.UPDATE)return g;var d=p.needsElevationUpdates2D(b);return this.updateGraphics3DGraphicElevationInfo(a,e,function(){return d})};c.prototype.slicePlaneEnabledChanged=function(){f.isSome(this._material)&&this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});f.isSome(this._outlineMaterial)&&this._outlineMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};c.prototype.physicalBasedRenderingChanged=function(){return!0};
c.prototype.pixelRatioChanged=function(){return!0};c.prototype._createAs3DShape=function(a,e,g,b){var d=q.geometryAsPolygon(a.geometry);if(f.isNone(d))return null;h.renderData=q.geometryToRenderInfo(d,this._context.elevationProvider,this._context.renderCoordsHelper,g);h.idHint=b;h.color=e;h.outNum=0;h.outGeometries=[];h.outTransforms=[];h.outMaterials=[];this._createAs3DShapeFill(h);this._hasOutline&&this._createAs3DShapeOutline(h);this._logGeometryCreationWarnings(h.renderData,d.rings,"rings","FillSymbol3DLayer");
if(0===h.outNum)return null;a=new K({geometries:h.outGeometries,materials:h.outMaterials,transformations:h.outTransforms,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:a.uid},idHint:b});a=new H(this,a,h.outGeometries,null,null,F.perVertexElevationAligner,g);a.alignedSampledElevation=h.renderData.sampledElevation;a.needsElevationUpdates=p.needsElevationUpdates2D(g.mode);return a};c.prototype._createAs3DShapeFill=function(a){for(var e=a.renderData.polygons,g=0;g<e.length;++g){var b=
e[g],d=b.position,c=b.mapPosition,b=b.holeIndices;if(f.isSome(this._context.clippingExtent)&&(k.empty(l),k.expandWithBuffer(l,c),!k.intersectsClippingArea(l,this._context.clippingExtent)))continue;b=v(c,b,3);0!==b.length&&(b=new Uint32Array(b),d=q.createColorGeometryData({indices:b,attributeData:{position:d,color:a.color,mapPosition:c}}),d=new y(d,a.idHint),a.outGeometries.push(d),a.outMaterials.push(f.expect(this._material)),a.outTransforms.push(w.mat4f64.IDENTITY),a.outNum++)}};c.prototype._createAs3DShapeOutline=
function(a){if(this._hasOutline)for(var e=a.renderData.outlines,g=this._outlineMaterial instanceof t,b=0;b<e.length;++b){var d=e[b],c=d.mapPosition,d=d.position;if(f.isSome(this._context.clippingExtent)&&(k.empty(l),k.expandWithBuffer(l,c),!k.intersectsClippingArea(l,this._context.clippingExtent)))continue;var c=x.createGeometryData({removeDuplicateStartEnd:g?0:1,attributeData:{position:d,mapPosition:c}}),h=c.vertexAttributes[L.VertexAttrConstants.POSITION];h.data===d&&(h.data=new Float64Array(d));
d=new y(c,a.idHint+"outline"+b);a.outGeometries.push(d);a.outMaterials.push(f.expect(this._outlineMaterial));a.outTransforms.push(w.mat4f64.IDENTITY);a.outNum++}};c.prototype._createAsOverlay=function(a,e,c){var b=q.geometryAsPolygon(a.geometry);if(f.isNone(b))return null;f.expect(this._material).renderPriority=this._renderPriority+this._renderPriorityDelta/2;f.isSome(this._outlineMaterial)&&(this._outlineMaterial.renderPriority=this._renderPriority);m.renderData=q.geometryToRenderInfoDraped(b,this._context.overlaySR);
m.idHint=c;m.color=e;m.outNum=0;m.outGeometries=[];m.outBoundingBox=k.empty();m.layerUid=this._context.layer.uid;m.graphicsUid=a.uid;this._createAsOverlayFill(m);this._hasOutline&&this._createAsOverlayOutline(m);this._logGeometryCreationWarnings(m.renderData,b.rings,"rings","FillSymbol3DLayer");return 0<m.outNum?new G(this,m.outGeometries,m.outBoundingBox):null};c.prototype._createAsOverlayFill=function(a){for(var e=a.renderData.polygons,c=0;c<e.length;++c){var b=e[c],d=b.position,b=b.holeIndices;
k.empty(l);k.expandWithBuffer(l,d);k.intersectsClippingArea(l,this._context.clippingExtent)&&(b=v(d,b,3),0!==b.length&&(k.expand(a.outBoundingBox,l),b=new Uint32Array(b),d=q.createColorGeometryData({indices:b,attributeData:{position:d,color:a.color}}),d=new z(d),d.data.layerUid=a.layerUid,d.data.graphicUid=a.graphicsUid,d.material=f.expect(this._material),b=l,d.center=[.5*(b[0]+b[3]),.5*(b[1]+b[4]),0],d.bsRadius=.5*Math.sqrt((b[3]-b[0])*(b[3]-b[0])+(b[4]-b[1])*(b[4]-b[1])),a.outGeometries.push(d),
a.outNum++))}};c.prototype._createAsOverlayOutline=function(a){if(this._hasOutline)for(var e=a.renderData.outlines,c=0;c<e.length;++c){var b=e[c].position;k.empty(l);k.expandWithBuffer(l,b);if(k.intersectsClippingArea(l,this._context.clippingExtent)){k.expand(a.outBoundingBox,l);b=x.createGeometryData({removeDuplicateStartEnd:this._outlineMaterial instanceof t?0:1,attributeData:{position:b}});b=new z(b);b.data.layerUid=a.layerUid;b.data.graphicUid=a.graphicsUid;b.material=f.expect(this._outlineMaterial);
var d=l;b.center=[.5*(d[0]+d[3]),.5*(d[1]+d[4]),0];b.bsRadius=.5*Math.sqrt((d[3]-d[0])*(d[3]-d[0])+(d[4]-d[1])*(d[4]-d[1]));a.outGeometries.push(b);a.outNum++}}};c.prototype._getOutlineOpacity=function(){var a=f.get(this.symbolLayer,"outline","color");return(this.draped?1:this._getLayerOpacity())*(f.isSome(a)?a.a:0)};c.prototype._getOutlineColor=function(){var a=f.get(this.symbolLayer,"outline","color"),c=this._getOutlineOpacity();return J.mixinColorAndOpacity(f.isSome(a)?D.toUnitRGB(a):null,c)};
Object.defineProperty(c.prototype,"test",{get:function(){var a=this;return{createAsOverlay:function(c,f,b){return a._createAsOverlay(c,f,b)},createAs3DShape:function(c,f,b,d){return a._createAs3DShape(c,f,b,d)}}},enumerable:!0,configurable:!0});c.validGeometryTypes=["polyline","polygon","extent"];c.elevationModeChangeTypes={definedChanged:p.SymbolUpdateType.RECREATE,staysOnTheGround:p.SymbolUpdateType.NONE,onTheGroundChanged:p.SymbolUpdateType.RECREATE};return c}(I.default);r.Graphics3DPolygonFillSymbolLayer=
n;var l=k.create(),h={idHint:null,renderData:null,color:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null},m={idHint:null,renderData:null,color:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null};r.default=n});