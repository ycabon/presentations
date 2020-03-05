// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/assignHelper ../../../../Color ../../../../geometry ../../../../core/Error ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingBox ../../../../renderers/support/renderingInfoUtils ./ElevationAligners ./elevationAlignmentUtils ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./lineUtils ../support/FastSymbolUpdates ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/lineStippleUtils ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(m,v,A,B,C,D,E,x,F,g,k,G,H,n,I,J,r,K,L,u,w,y,M,N,O,P,z){Object.defineProperty(v,"__esModule",{value:!0});m=function(m){function b(a,c,b,d){a=m.call(this,a,c,b,d)||this;a._uniformSize=1;return a}A(b,m);b.prototype.doLoad=function(){return C(this,void 0,void 0,function(){var a;return B(this,function(c){this._vvConvertOptions={modelSize:[1,1,1],symbolSize:[1,1,1],unitInMeters:1,transformation:{anchor:[0,0,0],scale:[1,1,1],rotation:[0,0,0]},supportedTypes:{size:!0,color:!0,opacity:!0,rotation:!1}};
this._fastUpdates=this._context.renderer&&this._context.renderer.visualVariables&&0<this._context.renderer.visualVariables.length?y.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):{enabled:!1};if(!this._drivenProperties.size){a=null!=this.symbolLayer.size?this.symbolLayer.size:k.px2pt(1);if(0>a)throw new F("graphics3dlinesymbollayer:invalid-size","Symbol sizes may not be negative values");this._uniformSize=a}return[2]})})};b.prototype.getMaterialParameters=function(a){var c=
g.get(this.symbolLayer,"material","color"),c=this._getCombinedOpacityAndColor(c);a={width:1,color:c,polygonOffset:!0,join:this.symbolLayer.join||"miter",cap:this.symbolLayer.cap||"butt",transparent:1>c[3]||this.needsDrivenTransparentPass,slicePlaneEnabled:this._context.slicePlaneEnabled,isClosed:a,stipplePattern:this.symbolLayer.stipplePattern?P.createStipplePattern(this.symbolLayer.stipplePattern.map(k.pt2px)):null,stippleOffColor:this.symbolLayer.stippleOffColor?E.toUnitRGBA(this.symbolLayer.stippleOffColor):
null,stippleIntegerRepeats:!0};this._drivenProperties.size?this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size&&(a.width=k.pt2px(1)):(c=null!=this.symbolLayer.size?this.symbolLayer.size:k.px2pt(1),a.width=k.pt2px(c));return this._fastUpdates&&this._fastUpdates.visualVariables?D({},a,this._fastUpdates.materialParameters):a};Object.defineProperty(b.prototype,"lineMaterial",{get:function(){g.isNone(this._lineMaterial)&&(this._lineMaterial=new z(this.getMaterialParameters(!1),this._getIdHint("_ribbonlinemat")),
this._context.stage.add(3,this._lineMaterial));return this._lineMaterial},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"ringMaterial",{get:function(){g.isNone(this._ringMaterial)&&(this._ringMaterial=new z(this.getMaterialParameters(!0),this._getIdHint("_ribbonlinemat")),this._context.stage.add(3,this._ringMaterial));return this._ringMaterial},enumerable:!0,configurable:!0});b.prototype.destroy=function(){m.prototype.destroy.call(this);g.isSome(this._lineMaterial)&&(this._context.stage.remove(3,
this._lineMaterial.id),this._lineMaterial=null);g.isSome(this._ringMaterial)&&(this._context.stage.remove(3,this._ringMaterial.id),this._ringMaterial=null)};b.prototype.getDrivenSize=function(a){return this._drivenProperties.size&&a.size?k.pt2px(I.getDriverAxisSizeValue(a.size)):1};b.prototype.getSizeFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?u.getAttributeValue(this._fastUpdates.visualVariables.size.field,a):null};b.prototype.getDrivenColor=
function(a){var c=H.vec4f64.fromValues(1,1,1,1);this._drivenProperties.color&&a.color&&(c[0]=a.color[0],c[1]=a.color[1],c[2]=a.color[2],0<a.color.length&&(c[3]=a.color[3]));this._drivenProperties.opacity&&a.opacity&&(c[3]=a.opacity);return c};b.prototype.getColorFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color?u.getAttributeValue(this._fastUpdates.visualVariables.color.field,a):null};b.prototype.getOpacityFeatureAttributeData=function(a){return this._fastUpdates.enabled&&
this._fastUpdates.visualVariables.opacity?u.getAttributeValue(this._fastUpdates.visualVariables.opacity.field,a):null};b.prototype.createGraphics3DGraphic=function(a){var c=a.graphic,f=c.geometry;if(!this._validateGeometryType(c.geometry,b.validGeometryTypes,this.symbolLayer.type)||!this._validateGeometry(f))return null;var f="graphic"+c.uid,d=this.getGraphicElevationContext(c);this.ensureDrapedStatus("on-the-ground"===d.mode);return this.draped?this._createAsOverlay(a,this._context.layer.uid):this._createAs3DShape(a,
d,f,c.uid)};b.prototype.applyRendererDiff=function(a,c){for(var b in a.diff)switch(b){case "visualVariables":if(y.updateFastSymbolUpdatesState(this._fastUpdates,c,this._vvConvertOptions))g.isSome(this._lineMaterial)&&this._lineMaterial.setParameterValues(this._fastUpdates.materialParameters),g.isSome(this._ringMaterial)&&this._ringMaterial.setParameterValues(this._fastUpdates.materialParameters);else return!1;break;default:return!1}return!0};b.prototype.layerOpacityChanged=function(){g.isSome(this._lineMaterial)&&
this.updateMaterialLayerOpacity(this._lineMaterial);g.isSome(this._ringMaterial)&&this.updateMaterialLayerOpacity(this._ringMaterial);return!0};b.prototype.updateMaterialLayerOpacity=function(a){var c=a.getParameters().color,b=g.get(this.symbolLayer,"material","color"),b=this._getCombinedOpacity(b);a.setParameterValues({color:[c[0],c[1],c[2],b],transparent:1>b||this.needsDrivenTransparentPass})};b.prototype.layerElevationInfoChanged=function(a,c,f){var d=this._elevationContext.mode;f=r.elevationModeChangeUpdateType(b.elevationModeChangeTypes,
f,d);if(f!==r.SymbolUpdateType.UPDATE)return f;var l=r.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,c,function(){return l})};b.prototype.slicePlaneEnabledChanged=function(){g.isSome(this._lineMaterial)&&this._lineMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});g.isSome(this._ringMaterial)&&this._ringMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};b.prototype.physicalBasedRenderingChanged=function(){return!0};
b.prototype.pixelRatioChanged=function(){return!0};b.prototype._getGeometryAsPolygonOrPolyline=function(a){switch(a.type){case "extent":if(a instanceof x.Extent)return x.Polygon.fromExtent(a);break;case "polygon":case "polyline":return a}return null};b.prototype._createAs3DShape=function(a,c,b,d){var l=this._getGeometryAsPolygonOrPolyline(a.graphic.geometry),f="polygon"===l.type?l.rings:l.paths,q=[],e=[],m=[],p=n.create(),h=w.geometryToRenderInfo(l,this._context.elevationProvider,this._context.renderCoordsHelper,
c);this._logGeometryCreationWarnings(h,f,"polygon"===l.type?"rings":"paths","LineSymbol3DLayer");for(f=0;f<h.lines.length;f++){var k=h.lines[f],t=k.position,k=k.mapPosition;if(g.isSome(this._context.clippingExtent)&&(n.empty(p),n.expandWithBuffer(p,k),!n.intersectsClippingArea(p,this._context.clippingExtent)))continue;t=this._createGeometryData(a,t,k,l.type);t=new M(t,b+"path"+f);q.push(t);e.push("polygon"===l.type?this.ringMaterial:this.lineMaterial);m.push(G.mat4f64.IDENTITY)}if(0===q.length)return null;
a=new N({geometries:q,materials:e,transformations:m,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:d},idHint:b});q=new L(this,a,q,null,null,J.perVertexElevationAligner,c);q.alignedSampledElevation=h.sampledElevation;q.needsElevationUpdates=r.needsElevationUpdates2D(c.mode);return q};b.prototype._createGeometryData=function(a,b,f,d){var c=this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color;return w.createGeometryData({removeDuplicateStartEnd:"polygon"===d?1:0,uniformSize:this._uniformSize,
attributeData:{position:b,mapPosition:f,size:this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?null:this.getDrivenSize(a.renderingInfo),color:c?null:this.getDrivenColor(a.renderingInfo),sizeFeature:this.getSizeFeatureAttributeData(a.graphic),colorFeature:this.getColorFeatureAttributeData(a.graphic),opacityFeature:this.getOpacityFeatureAttributeData(a.graphic)}})};b.prototype._createAsOverlay=function(a,b){var c=a.graphic,d=this._getGeometryAsPolygonOrPolyline(c.geometry),l="polygon"===
d.type?d.rings:d.paths,g="polygon"===d.type?this.ringMaterial:this.lineMaterial;g.renderPriority=this._renderPriority;var k=[],e=n.create(),m=n.empty(),p=w.geometryToRenderInfoDraped(d,this._context.overlaySR);this._logGeometryCreationWarnings(p,l,"polygon"===d.type?"rings":"paths","LineSymbol3DLayer");if(0<l.length){l=p.lines;for(p=0;p<l.length;++p){var h=l[p];n.empty(e);n.expandWithBuffer(e,h.position);n.intersectsClippingArea(e,this._context.clippingExtent)&&(n.expand(m,e),h=this._createGeometryData(a,
h.position,null,d.type),h=new O(h),h.data.layerUid=b,h.data.graphicUid=c.uid,h.material=g,h.center=[.5*(e[0]+e[3]),.5*(e[1]+e[4]),0],h.bsRadius=.5*Math.sqrt((e[3]-e[0])*(e[3]-e[0])+(e[4]-e[1])*(e[4]-e[1])),k.push(h))}return new K(this,k,m)}return null};b.validGeometryTypes=["polyline","polygon","extent"];b.elevationModeChangeTypes={definedChanged:r.SymbolUpdateType.RECREATE,staysOnTheGround:r.SymbolUpdateType.NONE,onTheGroundChanged:r.SymbolUpdateType.RECREATE};return b}(u.Graphics3DSymbolLayer);
v.Graphics3DLineSymbolLayer=m;v.default=m});