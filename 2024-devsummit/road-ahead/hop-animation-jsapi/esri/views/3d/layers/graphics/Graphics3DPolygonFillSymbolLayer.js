// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/screenUtils ../../../../chunks/earcut ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/DoubleArray ../../../../geometry/support/FloatArray ./elevationAlignmentUtils ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./graphicUtils ./interfaces ./lineUtils ./polygonUtils ../support/FastSymbolUpdates ../support/patternUtils ../support/uvUtils ../../support/engineContent/line ../../support/renderInfoUtils/polygon ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/lineStippleUtils ../../webgl-engine/materials/PatternMaterial ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(w,E,F,G,f,x,n,k,H,I,J,K,r,L,l,m,y,z,A,B,M,C,N,O,P){const Q=["polyline","polygon","extent"],D=new m.ConvertOptions({size:!1,color:!0,rotation:!1,opacity:!1});class t extends J.Graphics3DSymbolLayer{constructor(a,b,c,d){super(a,b,c,d);this._needsUV=!1}async doLoad(){this._fastUpdates=m.initFastSymbolUpdatesState(this._context.renderer,D)}_createMaterials(){if(!(0<this._materials.length)){var a=this._getCombinedOpacityAndColor(this.symbolLayer?.material?.color);this._materials[e.Fill]=y.createMaterial(this.symbolLayer,
{color:a,forceTransparentMode:this.needsDrivenTransparentPass,polygonOffset:!1,hasVertexColors:!0,writeLinearDepth:!0,draped:this.draped,hasSlicePlane:this._context.slicePlaneEnabled,...this._fastUpdates?.materialParameters});this._needsUV=this._materials[e.Fill]instanceof O.PatternMaterial;a=this.symbolLayer.outline;if(this._isValidOutline(a)){const b=N.getStipplePatternForLinePattern(a.pattern);this._materials[e.Outline]=new P.RibbonLineMaterial({width:F.pt2px(a.size),color:this._getOutlineColor(),
hasPolygonOffset:!0,hasSlicePlane:this._context.slicePlaneEnabled,isClosed:!0,stipplePattern:b,cap:L.parseCapType(a.patternCap||"butt")})}this._context.stage.addMany(this._materials)}}_isValidOutline(a){return null!=a?.size&&0<a.size&&null!=a.color&&(null==a.pattern||"style"!==a.pattern.type||"none"!==a.pattern.style)}destroy(){super.destroy();this._context.stage.removeMany(this._materials);this._materials.length=0}createGraphics3DGraphic(a){const b=a.graphic;if(!this._validateGeometry(b.geometry,
Q,this.symbolLayer.type))return null;a=this._getVertexOpacityAndColor(a.renderingInfo,255);const c=this.setGraphicElevationContext(b);this.ensureDrapedStatus("on-the-ground"===c.mode);this._createMaterials();return this.draped?this._createAsOverlay(b,a):this._createAs3DShape(b,a,c)}applyRendererDiff(a,b){for(const c in a.diff)switch(c){case "visualVariables":if(m.updateFastSymbolUpdatesState(this._fastUpdates,b,D))this._materials[e.Fill]?.setParameters(this._fastUpdates.materialParameters);else return r.ApplyRendererDiffResult.RecreateSymbol;
break;default:return r.ApplyRendererDiffResult.RecreateSymbol}return r.ApplyRendererDiffResult.FastUpdate}layerOpacityChanged(){if(null!=this._materials[e.Fill]){var a=this._materials[e.Fill].parameters.color;const b=this._getCombinedOpacity(this.symbolLayer?.material?.color);this._materials[e.Fill].setParameters({color:[a[0],a[1],a[2],b],forceTransparentMode:this.needsDrivenTransparentPass})}null!=this._materials[e.Outline]&&(a=this._materials[e.Outline].parameters.color,this._materials[e.Outline].setParameters({color:[a[0],
a[1],a[2],this._getOutlineOpacity()]}))}layerElevationInfoChanged(a,b,c){const d=this._elevationContext.mode;c=k.elevationModeChangeUpdateType(t.elevationModeChangeTypes,c,d);if(c!==k.SymbolUpdateType.UPDATE)return c;const g=k.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,b,()=>g)}slicePlaneEnabledChanged(){this._materials[e.Fill]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});this._materials[e.Outline]&&this._materials[e.Outline].setParameters({hasSlicePlane:this._context.slicePlaneEnabled});
return!0}physicalBasedRenderingChanged(){return!0}_createAs3DShape(a,b,c){const d=l.geometryAsPolygon(a.geometry);if(!d)return null;var g=B.geometryToRenderInfo(d,this._context.elevationProvider,this._context.renderCoordsHelper,c);b=new R(g,b,this._context.layer.uid,a.uid);g=b.renderData.position.length/3;this._needsUV&&(b.uvMapSpace=n.newFloatArray(4*g,!0),b.boundingRect=x.newDoubleArray(9*g,!0),z.createMapSpaceUVCoords(b.uvMapSpace,b.boundingRect,b.renderData.position,this._context.renderCoordsHelper));
b.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(b);this._createAs3DShapeFill(a,b);this._materials[e.Outline]&&this._createAs3DShapeOutline(b);this._logGeometryCreationWarnings(b.renderData,d.rings,"rings","FillSymbol3DLayer");if(0===b.outGeometries.length)return null;a=new M.Object3D({geometries:b.outGeometries,castShadow:!1,layerUid:this._context.layer.uid,graphicUid:a.uid});a=new I.Graphics3DObject3DGraphicLayer(this,a,b.outGeometries,null,null,y.uvElevationAligner,
c);a.alignedSampledElevation=b.renderData.sampledElevation;a.needsElevationUpdates=k.needsElevationUpdates2D(c.mode);return a}_createAs3DShapeFill(a,b){var c=b.renderData.polygons;for(const {position:d,mapPositions:g,holeIndices:u,index:p,count:q}of c){if(null!=this._context.clippingExtent&&(f.empty(h),f.expandWithBuffer(h,g),!f.intersectsClippingArea(h,this._context.clippingExtent)))continue;c=l.createIndices3D(g,u,this._context.elevationProvider.spatialReference);if(0===c.length)continue;const v=
this._fastUpdates?.visualVariables.color;c=l.createColorGeometry({material:this._materials[e.Fill],indices:c,mapPositions:g,attributeData:{position:d,color:v?null:b.color,colorFeature:v?m.getAttributeValue(v.field,a):null,uvMapSpace:this._needsUV?n.floatSubArray(b.uvMapSpace,4*p,4*q):null,boundingRect:this._needsUV?x.doubleSubArray(b.boundingRect,9*p,9*q):null,objectAndLayerIdColor:b.objectAndLayerIdColor}});b.outGeometries.push(c)}}_createAs3DShapeOutline(a){if(null!=this._materials[e.Outline]){var b=
a.renderData.outlines;for(const {mapPositions:c,position:d}of b){if(null!=this._context.clippingExtent&&(f.empty(h),f.expandWithBuffer(h,c),!f.intersectsClippingArea(h,this._context.clippingExtent)))continue;b=A.createGeometry(this._materials[e.Outline],{overlayInfo:null,removeDuplicateStartEnd:!0,mapPositions:c,attributeData:{position:d}},a.objectAndLayerIdColor);a.outGeometries.push(b)}}}_createAsOverlay(a,b){const c=l.geometryAsPolygon(a.geometry);if(null==c)return null;this._materials[e.Fill].renderPriority=
this._renderPriority+this._renderPriorityStep/2;null!=this._materials[e.Outline]&&(this._materials[e.Outline].renderPriority=this._renderPriority);var d=B.geometryToRenderInfoDraped(c,this._context.overlaySR);b=new S(d,b,this._context.layer.uid,a.uid);d=b.renderData.position.length/3;this._needsUV&&(b.uvMapSpace=n.newFloatArray(4*d,!0),z.createMapSpaceUVCoordsDraped(b.uvMapSpace,b.renderData.position,this._context.overlaySR,this._context.graphicsCoreOwner.view.state.viewingMode));b.outBoundingBox=
f.empty();b.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(b);this._createAsOverlayFill(a,b);this._materials[e.Outline]&&this._createAsOverlayOutline(b);this._logGeometryCreationWarnings(b.renderData,c.rings,"rings","FillSymbol3DLayer");return 0===b.outGeometries.length?null:new H.Graphics3DDrapedGraphicLayer(this,b.outGeometries,b.outBoundingBox,this._context.drapeSourceRenderer)}_createAsOverlayFill(a,b){var c=b.renderData.polygons;for(const {position:g,holeIndices:u,
index:p,count:q}of c){var d=f.empty(h);f.expandWithBuffer(d,g);f.intersectsClippingArea(d,this._context.clippingExtent)&&(c=G.earcut(g,u,3),0!==c.length&&(f.expandWithAABB(b.outBoundingBox,d),d=this._fastUpdates?.visualVariables.color,c=l.createColorGeometry({material:this._materials[e.Fill],indices:c,attributeData:{position:g,color:d?null:b.color,colorFeature:d?m.getAttributeValue(d.field,a):null,uvMapSpace:this._needsUV?n.floatSubArray(b.uvMapSpace,4*p,4*q):null,objectAndLayerIdColor:b.objectAndLayerIdColor}}),
b.outGeometries.push(new C.RenderGeometry(c,b))))}}_createAsOverlayOutline(a){if(null!=this._materials[e.Outline]){var b=a.renderData.outlines;for(let d=0;d<b.length;++d){var {position:c}=b[d];f.empty(h);f.expandWithBuffer(h,c);f.intersectsClippingArea(h,this._context.clippingExtent)&&(f.expandWithAABB(a.outBoundingBox,h),c=A.createGeometry(this._materials[e.Outline],{overlayInfo:{spatialReference:this._context.overlaySR,renderCoordsHelper:this._context.renderCoordsHelper},removeDuplicateStartEnd:!0,
attributeData:{position:c}},a.objectAndLayerIdColor),a.outGeometries.push(new C.RenderGeometry(c,a)))}}}_getOutlineOpacity(){const a=this.symbolLayer?.outline?.color;return(this.draped?1:this._getLayerOpacity())*(null!=a?a.a:0)}_getOutlineColor(){const a=this.symbolLayer?.outline?.color,b=this._getOutlineOpacity();return K.mixinColorAndOpacity(null!=a?E.toUnitRGB(a):null,b)}test(){return{...super.test(),createAsOverlay:(a,b)=>this._createAsOverlay(a,b),createAs3DShape:(a,b,c)=>this._createAs3DShape(a,
b,c)}}}t.elevationModeChangeTypes={definedChanged:k.SymbolUpdateType.RECREATE,staysOnTheGround:k.SymbolUpdateType.NONE,onTheGroundChanged:k.SymbolUpdateType.RECREATE};const h=f.create();class R extends l.PolygonCreationDataBase{constructor(a,b,c,d){super(a,c,d);this.color=b}}class S extends l.PolygonCreationDataBase{constructor(a,b,c,d){super(a,c,d);this.color=b}}var e;(function(a){a[a.Fill=0]="Fill";a[a.Outline=1]="Outline"})(e||={});w.Graphics3DPolygonFillSymbolLayer=t;Object.defineProperty(w,Symbol.toStringTag,
{value:"Module"})});