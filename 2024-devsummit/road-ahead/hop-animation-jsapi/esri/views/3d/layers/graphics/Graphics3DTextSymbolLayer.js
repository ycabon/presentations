// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Error ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../symbols/callouts/calloutUtils ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DObject3DGraphicLayer ./Graphics3DObjectMetadata ./Graphics3DSymbolLayer ./graphicUtils ./LabelParameters ./placementUtils ./pointUtils ../../webgl-engine/lib/FontMetrics ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/TextRenderParameters ../../webgl-engine/lib/TextTextureFactory ../../webgl-engine/materials/HUDMaterial".split(" "),
function(z,E,F,G,t,H,A,I,y,J,K,L,M,N,B,p,w,O,P,Q,R,C){function D(a,c,d){a&&a.forEach(b=>{const e=c(b);null!=e&&d(e,b.graphic)})}function S(a,c){if("baseline"===c.verticalPlacement)return t.fromValues(p.horizontalPlacementToAnchorX[c.horizontalPlacement],null!=a?a.baselineAnchorY:0);a=p.anchorFromPlacements(c.horizontalPlacement,c.verticalPlacement);return p.namedAnchorToHUDMaterialAnchorPos[a]}const T=H.fromValues(0,0,1);class U extends M.Graphics3DSymbolLayer{constructor(a,c,d,b){super(a,c,d,b);
this._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1};this.ensureDrapedStatus(!1)}async doLoad(){if(!this._drivenProperties.size){const a=N.validateSymbolLayerSize(this.symbolLayer.size);if(a)throw new E("graphics3dtextsymbollayer:invalid-size",a);}await this._createTextRenderParameters()}async _createTextRenderParameters(){this._textRenderParameters=await Q.TextRenderParameters.fromSymbol(this.symbolLayer,this._context.graphicsCoreOwner.view.state.rasterPixelRatio)}destroy(){super.destroy()}createGraphics3DGraphic(a){a=
a.graphic;const c=w.placePointOnGeometry(a.geometry);if(null==c)return this.logger.warn(`unsupported geometry type for text symbol: ${a.geometry.type}`),null;const d=this.symbolLayer.text;if(null==d||""===d)return null;var b=A.hasCalloutSupport(this.symbol)&&this.symbol.hasVisibleVerticalOffset()?this.symbol.verticalOffset:null;if(null!=b&&!A.textSymbolLayerSupportsVerticalOffset(this.symbolLayer))return this.logger.errorOncePerTick("Callouts and vertical offset on text symbols are currently only supported with 'center' "+
`horizontal alignment (not with '${this.symbolLayer.horizontalAlignment}' alignment)`),null;var {verticalAlignment:e}=this.symbolLayer;b=new B.LabelPlacement(b);p.verticalScreenOffsetFromAlignment(e,b.screenOffset);e=new B.LabelParameters(b,this.symbolLayer.horizontalAlignment,p.verticalPlacementFromAlignment(e));return this._createAs3DShape(a,c,d,e)}createLabel(a,c,d,b,e){a=a.graphic;const h=w.placePointOnGeometry(a.geometry);if(null==h)return this.logger.warn(`unsupported geometry type for label: ${a.geometry.type}`),
null;const u=c.text;return!u||/^\s+$/.test(u)?null:this._createAs3DShape(a,h,u,c,d,b,e)}setGraphicElevationContext(a,c,d=0){super.setGraphicElevationContext(a,c);c.addOffsetRenderUnits(d);return c}layerOpacityChanged(){this.logger.warn("layer opacity change not yet implemented in Graphics3DTextSymbolLayer");return!1}layerElevationInfoChanged(a,c){D(a,c,(d,b)=>{this.updateGraphicElevationContext(b,d)});return y.SymbolUpdateType.UPDATE}slicePlaneEnabledChanged(a,c){D(a,c,d=>{for(const b of d.stageObject.geometries)b.material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})});
return!0}physicalBasedRenderingChanged(){return!0}get pixelRatioChanged(){return!1}updateGraphicElevationContext(a,c){const d=c.elevationContext;this.setGraphicElevationContext(a,d,null!=c.metadata?c.metadata.elevationOffset:0);c.needsElevationUpdates=y.needsElevationUpdates2D(d.mode)||"absolute-height"===d.mode}_defaultElevationInfoNoZ(){return V}_createAs3DShape(a,c,d,b,e=null,h=null,u=()=>b.placement.elevationOffset){const x=this.setGraphicElevationContext(a,new J.ElevationContext,b.placement.elevationOffset);
var q="polyline"===a.geometry?.type,v=a.uid;let k=null,m=null;if(null==h){var f=p.textRenderAlignmentFromHorizontalPlacement(b.horizontalPlacement);k=new R(d,f,this._textRenderParameters);let g=null;if(null!=this._context.sharedResources.textures){m=this._context.sharedResources.textures.fromData(k.key,()=>k.create());m.texture.events.on("unloaded",()=>g?.release());f=this._context.stage.renderView.textureRepository.acquire(m.texture.id);if(null==f||F.isPromiseLike(f))return m.release(),null;g=f}}f=
S(k,b);f={occlusionTest:!0,screenOffset:b.placement.screenOffset,anchorPosition:f,polygonOffset:!0,color:[1,1,1,1],centerOffsetUnits:b.placement.centerOffsetUnits,drawInSecondSlot:!0};h?f.textureId=h.id:m&&(f.textureId=m.texture.id);if(null!=b.placement.verticalOffset){const {screenLength:g,minWorldLength:l,maxWorldLength:n}=b.placement.verticalOffset;f.verticalOffset={screenLength:G.pt2px(g),minWorldLength:l||0,maxWorldLength:null!=n?n:Infinity}}if(this._context.screenSizePerspectiveEnabled){const {screenSizePerspectiveSettings:g,
screenSizePerspectiveSettingsLabels:l}=this._context.sharedResources;h=O.getFontMetrics(this._textRenderParameters);f.screenSizePerspective=l.overrideFontHeight(h.maxHeight);f.screenSizePerspectiveAlignment=g}q&&(f.shaderPolygonOffset=1E-4);f.hasSlicePlane=this._context.slicePlaneEnabled;q=(g,l)=>{const n=JSON.stringify(l);let r=g.get(n);null==r&&(r=new C.HUDMaterial(l),g.add(n,r));return r};q=e?q(e,f):new C.HUDMaterial(f);h=b.placement.translation;f=k?t.fromValues(k.displayWidth,k.displayHeight):
t.ZEROS;const W=b.placement.centerOffset,X=t.create();h=P.createPointGeometry(q,T,h,null,f,W,X,null);v=w.createStageObject(this._context,c,h,x,v);if(null==v)return null;e=new K.Graphics3DObject3DGraphicLayer(this,v.object,[h],null==e?[q]:null,m,(g,l,n,r,Y,Z)=>{const aa=u()||b.placement.elevationOffset;l=this.setGraphicElevationContext(a,l,aa);return I.perObjectElevationAligner(g,l,n,r,Y,Z)},x);e.alignedSampledElevation=v.sampledElevation;e.needsElevationUpdates=y.needsElevationUpdates2D(x.mode)||
"absolute-height"===x.mode;e.getScreenSize=(g=t.create())=>{g[0]=k?k.displayWidth:b.displaySize[0];g[1]=k?k.displayHeight:b.displaySize[1];return g};d=new L.Graphics3DObjectMetadata(b.placement.elevationOffset,d);e.metadata=d;w.extendPointGraphicElevationContext(e,c,this._context.elevationProvider);return e}}const V={mode:"relative-to-ground",offset:0};z.Graphics3DTextSymbolLayer=U;Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});