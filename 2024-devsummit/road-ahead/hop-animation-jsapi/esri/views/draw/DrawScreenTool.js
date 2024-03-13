// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Evented ../../core/handleUtils ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/libs/gl-matrix-2/factories/mat2df64 ./DrawOperation ./drawSurfaces ./support/createUtils ./support/surfaceCoordinateSystems ../interactive/InteractiveToolBase ../overlay/OutlineOverlayItem".split(" "),function(b,c,n,p,q,d,z,A,B,r,t,u,k,h,v,w,x){function l(a){switch(a){case "polygon":case "point":return a;
case "circle":case "rectangle":return"segment"}}b.DrawScreenTool=class extends n.EventedMixin(w.InteractiveToolBase){constructor(a){super(a);this._overlayItem=void 0;this.mode=this.geometryType=null;this.type="draw-screen"}initialize(){this.drawOperation=this._makeDrawOperation();const a=f=>this.drawOperation.on(f,g=>{this._updateVisuals();this.emit(f,g)});this.addHandles([a("vertex-add"),a("vertex-remove"),a("vertex-update"),a("cursor-update"),a("complete")]);this.finishToolCreation()}destroy(){this.drawOperation=
q.destroyMaybe(this.drawOperation);this._set("view",null)}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centeredToggled(a){this._set("centeredToggled",a);this._updateVisuals()}set enabled(a){this.drawOperation.interactive=a;this._set("enabled",a)}set uniformSizeToggled(a){this._set("uniformSizeToggled",a);this._updateVisuals()}get updating(){return this.drawOperation?.updating??!1}get cursor(){return"point"===this.geometryType?"default":"crosshair"}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(a){if(!this.destroyed)this.drawOperation.onInputEvent(a)}redo(){this.drawOperation.redo()}undo(){this.drawOperation.undo()}reset(){}_makeDrawOperation(){const {view:a}=
this;return new u.DrawOperation({view:a,manipulators:this.manipulators,geometryType:l(this.geometryType),drawingMode:this.mode,hasZ:!1,defaultZ:0,snapToSceneEnabled:!1,drawSurface:new k.ScreenDrawSurface,hasM:!1,snappingManager:null,snappingVisualizer:null,graphic:null,cursor:this.cursor})}get coordinates(){var {drawOperation:a}=this;if(!a?.geometryIncludingUncommittedVertices.length)return[];var {coordinateHelper:f}=a,g=a.committableVertex,e=a.committedVertices.slice();null!=g&&e.push(f.pointToArray(g));
const m=e.length;switch(this.geometryType){case "circle":case "rectangle":f=new v.AffineCoordinateSystem(t.IDENTITY,k.ScreenDrawSurface.spatialReference);g="circle"===this.geometryType?h.createCircle:h.createSquare;const y="circle"===this.geometryType?h.createEllipse:h.createRectangle;return 1===m&&a.isCompleted?(e=e[0],a=f.makeMapPoint(e[0]+48,e[1]),g([e,a],f,!0)?.geometry.rings[0]??[]):2===m?(a=this.centeredToggled!==("rectangle"!==this.geometryType),(this.uniformSizeToggled!==("rectangle"!==this.geometryType)?
g(e,f,a)?.geometry.rings[0]:y(e,f,a)?.geometry.rings[0])??[]):[]}return e}_updateVisuals(){if(!this._overlayItem){const a=new x({strokeDash:[5],strokeDashColor:[255,255,255,255]});this.view.overlay?.addItem(a);this.addHandles(p.makeHandle(()=>{this.view.overlay?.removeItem(a);a?.destroy();this._overlayItem=void 0}));this._overlayItem=a}this._overlayItem.coordinates=this.coordinates}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}};c.__decorate([d.property({value:!1})],b.DrawScreenTool.prototype,
"centeredToggled",null);c.__decorate([d.property()],b.DrawScreenTool.prototype,"drawOperation",void 0);c.__decorate([d.property({value:!0})],b.DrawScreenTool.prototype,"enabled",null);c.__decorate([d.property({value:!1})],b.DrawScreenTool.prototype,"uniformSizeToggled",null);c.__decorate([d.property({constructOnly:!0})],b.DrawScreenTool.prototype,"geometryType",void 0);c.__decorate([d.property({constructOnly:!0})],b.DrawScreenTool.prototype,"mode",void 0);c.__decorate([d.property({readOnly:!0})],
b.DrawScreenTool.prototype,"type",void 0);c.__decorate([d.property({readOnly:!0})],b.DrawScreenTool.prototype,"updating",null);c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],b.DrawScreenTool.prototype,"view",void 0);c.__decorate([d.property()],b.DrawScreenTool.prototype,"cursor",null);b.DrawScreenTool=c.__decorate([r.subclass("esri.views.draw.DrawScreenTool")],b.DrawScreenTool);b.geometryTypeToDrawOperationGeometryType=l;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});