// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/quantityUtils ../../../../../core/libs/gl-matrix-2/math/mat4 ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../geometry/support/vectorStacks ../../../analysis/Slice/ShiftManipulator ../../../analysis/Slice/sliceToolUtils ../dragEventPipeline3D ../ManipulatorType ../manipulations/MoveXYGraphicManipulation ../../../../interactive/dragEventPipeline ../../../../interactive/editGeometry/interfaces ../../../../interactive/editGeometry/support/editPlaneUtils ../../../../interactive/tooltip/TranslateTooltipInfos ../../../../support/automaticLengthMeasurementUtils ../../../../support/euclideanLengthMeasurementUtils".split(" "),
function(g,h,q,r,t,k,l,u,v,w,x,f,m,y,n,z,A){class B{constructor(a,c,b,d){this._tool=a;this._graphicState=c;this._editGeometryOperations=b;this._bounds=d;this._moveZTooltipInfo=this._moveXYTooltipInfo=null;a=this._tool;c=a.view;this.moveXYGraphicManipulation=new x.MoveXYGraphicManipulation({view:c,tool:a,graphicState:this._graphicState});a.addHandles(this._createMoveXYGraphicDragPipeline());this.moveZManipulator=new l.ShiftManipulator(c,l.OffsetMode.CENTER_ON_CALLOUT);this.moveZManipulator.state|=
u.IsShiftEdgeOnScreenFlag;a.manipulators.add(this.moveZManipulator);a.addHandles([this._createMoveZDragPipeline()]);a.addHandles([a.on("graphic-translate-stop",()=>{this._moveZTooltipInfo=this._moveXYTooltipInfo=null})])}destroy(){this.moveXYGraphicManipulation.destroy();this._tool.manipulators.remove(this.moveZManipulator);this.moveZManipulator.destroy()}forEachManipulator(a){this.moveXYGraphicManipulation.forEachManipulator(a);a(this.moveZManipulator,w.ManipulatorType.TRANSLATE_Z)}updateManipulators(a,
c){const b=this.moveZManipulator;a=q.rotateZ(k.sm4d.get(),a,Math.PI);a[12]=0;a[13]=0;a[14]=0;b.modelTransform=a;b.renderLocation=r.subtract(k.sv3d.get(),c.origin,c.basis1)}getUpdatedTooltipInfo(){return this.moveXYGraphicManipulation.grabbing||this.moveXYGraphicManipulation.dragging?this._computeMoveXYTooltipInfo():this.moveZManipulator.focused?this._computeMoveZTooltipInfo():null}_computeMoveXYTooltipInfo(){var a=this._tool;const c=this._moveXYTooltipInfo??(this._moveXYTooltipInfo=new n.TranslateGraphicTooltipInfo({sketchOptions:a.sketchOptions}));
if(this.moveXYGraphicManipulation.dragging){var b=this._bounds,d=b.mapBoundsStart.origin;b=b.mapBounds.origin;({renderSpatialReference:a}=a.view);if(!a)return null;d=z.autoDistance2D(d,b,a);if(null==d)return null;c.distance=d}else c.distance=h.zeroMeters;return c}_computeMoveZTooltipInfo(){var a=this._tool;const c=this._moveZTooltipInfo??(this._moveZTooltipInfo=new n.TranslateGraphicZTooltipInfo({sketchOptions:a.sketchOptions}));if(this.moveZManipulator.dragging){var b=this._bounds,d=b.mapBoundsStart.origin;
b=b.mapBounds.origin;({renderSpatialReference:a}=a.view);if(!a)return null;d=A.verticalSignedDistance(d,b,a);if(null==d)return null;c.distance=d}else c.distance=h.zeroMeters;return c}_createMoveXYGraphicDragPipeline(){return this.moveXYGraphicManipulation.createDragPipeline((a,c,b)=>this._applyGraphicMoveSteps(c,b))}_createMoveZDragPipeline(){const a=this._editGeometryOperations.data.spatialReference;return f.createManipulatorDragEventPipeline(this.moveZManipulator,(c,b,d)=>{c=t.clone(c.renderLocation);
b=b.next(v.screenToZConstrained(this._tool.view,c,a)).next(f.addScreenDelta());this._applyGraphicMoveSteps(b,d)})}_applyGraphicMoveSteps(a,c){const b=this._tool,d=b.graphic;a=a.next(e=>{"start"===e.action&&(b.inputState={type:"move"},this._bounds.backupMapBounds(),b.emit("graphic-translate-start",{graphic:d,dxScreen:e.screenDeltaX,dyScreen:e.screenDeltaY}));return e}).next(f.addMapDelta()).next(this._moveDragUpdateGeometry()).next(e=>{const p={graphic:d,dxScreen:e.screenDeltaX,dyScreen:e.screenDeltaY};
switch(e.action){case "start":case "update":(e.mapEnd.x-e.mapStart.x||e.mapEnd.y-e.mapStart.y||(e.mapEnd.z??0)-(e.mapStart.z??0))&&b.emit("graphic-translate",p);break;case "end":b.inputState=null,b.emit("graphic-translate-stop",p)}return e});c.next(()=>{null!=b.inputState&&b.emit("graphic-translate-stop",{graphic:d,dxScreen:0,dyScreen:0});b.cancel()});return a}_moveDragUpdateGeometry(){const a=this._tool;return c=>{if(null==a.inputState||"move"!==a.inputState.type)return c;var b=[];for(const d of this._editGeometryOperations.data.components)b.push(...d.vertices);
b=this._editGeometryOperations.moveVertices(b,c.mapDeltaX,c.mapDeltaY,c.mapDeltaZ,"start"===c.action?m.AccumulationBehavior.NEW_STEP:m.AccumulationBehavior.ACCUMULATE_STEPS);y.apply(b,this._bounds.mapBounds);a.graphic.geometry=this._editGeometryOperations.data.geometry;return c}}}g.ExtentMove=B;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});