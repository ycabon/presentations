// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../geometry ../../../../../Graphic ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../SnappingVisualizer2D ./symbols ../../../../draw/DrawGraphicTool ../../../../draw/DrawOperation ../../../../draw/drawSurfaces ../../../../../geometry/Point ../../../../../geometry/Multipoint".split(" "),
function(d,e,x,h,c,k,n,l,y,z,A,q,r,m,p,t,u,v,w){function f(a,b){return(a.attributes?.displayOrder??-Infinity)-(b.attributes?.displayOrder??-Infinity)}d.DrawGraphicTool2D=class extends p.DrawGraphicTool{constructor(a){super(a);this._visualElementGraphics={regularVertices:null,activeVertex:null,activeEdge:null};this.activeFillSymbol=null;this.type="draw-2d";this._visualElementSymbols={outline:a.activeLineSymbol??m.outline,regularVertices:a.regularVerticesSymbol??m.regularVertices,activeVertex:a.activeVertexSymbol??
m.activeVertex,fill:a.activeFillSymbol};a.activeVertexSymbol||this.addHandles(n.watch(()=>this.view?.effectiveTheme?.accentColor,b=>{b&&(b=this._visualElementSymbols.activeVertex.clone().set({color:b}),this._visualElementGraphics.activeVertex?.set("symbol",b),this._visualElementSymbols={...this._visualElementSymbols,activeVertex:b})},n.initial))}normalizeCtorArgs(a){a={...a};delete a.activeFillSymbol;delete a.activeVertexSymbol;delete a.regularVerticesSymbol;delete a.activeLineSymbol;return a}initializeGraphic(a){null!=
this._visualElementSymbols.fill&&(a.symbol=this._visualElementSymbols.fill);this.internalGraphicsLayer.graphics.sort(f);return c.makeHandle()}makeDrawOperation(){const {defaultZ:a,hasZ:b,view:g}=this;this._createOrUpdateGraphic(null);return new t.DrawOperation({view:g,manipulators:this.manipulators,geometryType:p.geometryTypeToDrawOperationGeometryType(this.geometryType),drawingMode:this.mode,hasZ:b,defaultZ:a,snapToSceneEnabled:this.snapToScene,drawSurface:new u.MapDrawSurface(g,b,a),hasM:!1,snappingManager:this.snappingManager,
snappingVisualizer:new r.SnappingVisualizer2D(this.internalGraphicsLayer),graphic:this.graphic,cursor:this.cursor,constraintsEnabled:!0})}onActiveVertexChanged(a){if("point"===this.geometryType)return c.makeHandle();const [b,g]=a;a=new v({x:b,y:g,spatialReference:this.view.spatialReference});if(null!=this._visualElementGraphics.activeVertex)return this._visualElementGraphics.activeVertex.geometry=a,c.makeHandle();this._visualElementGraphics.activeVertex=new h({geometry:a,symbol:this._visualElementSymbols.activeVertex,
attributes:{displayOrder:2}});this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex);this.internalGraphicsLayer.graphics.sort(f);return c.makeHandle(()=>{null!=this._visualElementGraphics.activeVertex&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=k.destroyMaybe(this._visualElementGraphics.activeVertex))})}onCursorEdgeChanged(a){if(null!=this._visualElementGraphics.activeEdge)return this._visualElementGraphics.activeEdge.geometry=
a,c.makeHandle();this._visualElementGraphics.activeEdge=new h({geometry:a,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}});this.internalGraphicsLayer.add(this._visualElementGraphics.activeEdge);this.internalGraphicsLayer.graphics.sort(f);return c.makeHandle(()=>{null!=this._visualElementGraphics.activeEdge&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeEdge),this._visualElementGraphics.activeEdge=k.destroyMaybe(this._visualElementGraphics.activeEdge))})}onRegularVerticesChanged(a){a=
new w({points:a,spatialReference:this.view.spatialReference});if(null!=this._visualElementGraphics.regularVertices)return this._visualElementGraphics.regularVertices.geometry=a,c.makeHandle();this._visualElementGraphics.regularVertices=new h({geometry:a,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}});this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices);this.internalGraphicsLayer.graphics.sort(f);return c.makeHandle(()=>{null!=this._visualElementGraphics.regularVertices&&
(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=k.destroyMaybe(this._visualElementGraphics.regularVertices))})}};e.__decorate([l.property()],d.DrawGraphicTool2D.prototype,"activeFillSymbol",void 0);e.__decorate([l.property({readOnly:!0})],d.DrawGraphicTool2D.prototype,"type",void 0);e.__decorate([l.property({constructOnly:!0,nonNullable:!0})],d.DrawGraphicTool2D.prototype,"view",void 0);d.DrawGraphicTool2D=e.__decorate([q.subclass("esri.views.2d.interactive.draw.DrawGraphicTool2D")],
d.DrawGraphicTool2D);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});