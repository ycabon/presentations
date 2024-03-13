// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/mathUtils ../../../../../core/libs/gl-matrix-2/math/mat4 ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../chunks/boundedPlane ../../../../../geometry/support/plane ../../../../../geometry/support/vectorStacks ../../../analysis/images/Factory ../../../analysis/Slice/RotateManipulator ../../../analysis/Slice/sliceToolUtils ../../manipulatorUtils ../dragEventPipeline3D ../ManipulatorType ../../../support/geometryUtils/ray ../../../../interactive/dragEventPipeline ../../../../interactive/editGeometry/interfaces ../../../../interactive/editGeometry/operations/UpdateVertices ../../../../interactive/editGeometry/support/editPlaneUtils ../../../../interactive/tooltip/ExtentTooltipInfos".split(" "),
function(l,r,t,m,u,v,h,k,w,x,n,y,z,A,B,C,p,D,E,F){class G{constructor(a,b,c){this._tool=a;this._editGeometryOperations=b;this._bounds=c;this._rotateTooltipInfo=null;this._endAngle=this._startAngle=0;a=this._tool;const d=a.view,g=!d._stage?.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result;this.rotateManipulator=new x.RotateManipulator(d,(e,f)=>w.getRotateHeadingTexture(d.textures,{accentColor:e,contrastColor:f,preMultiplyAlpha:g}));a.addHandles([this.rotateManipulator.events.on("grab-changed",
e=>this._onRotateGrab(e)),this._createRotateDragPipeline(this.rotateManipulator)]);a.manipulators.add(this.rotateManipulator);a.addHandles([a.on("graphic-rotate-start",e=>{this._startAngle=e.angle}),a.on("graphic-rotate",e=>{this._endAngle=e.angle}),a.on("graphic-rotate-stop",()=>{this._endAngle=this._startAngle=0})])}destroy(){this._tool.manipulators.remove(this.rotateManipulator);this.rotateManipulator.destroy()}forEachManipulator(a){a(this.rotateManipulator,A.ManipulatorType.ROTATE)}updateManipulators(a,
b){const c=0>this._bounds.mapBounds.plane[2]?Math.PI:0;a=t.rotateX(k.sm4d.get(),a,c);a[12]=0;a[13]=0;a[14]=0;this.rotateManipulator.modelTransform=a;this.rotateManipulator.renderLocation=m.add(k.sv3d.get(),b.origin,b.basis1)}getUpdatedTooltipInfo(){return this.rotateManipulator.focused?this._computeRotateTooltipInfo():null}_computeRotateTooltipInfo(){const a=this._rotateTooltipInfo??(this._rotateTooltipInfo=new F.ExtentRotateTooltipInfo({sketchOptions:this._tool.sketchOptions}));a.angle=this._startAngle-
this._endAngle;return a}_onRotateGrab({action:a,screenPoint:b}){const c=this._tool,d=this._bounds;"start"===a&&b&&(a=n.createRotatePlane(d.displayBounds,c.view.renderCoordsHelper,n.RotationAxis.HEADING,h.create()),b=B.fromScreenNormalized(c.view.state.camera,b),h.intersectRay(a,b,k.sv3d.get())&&(d.backupMapBounds(),c.inputState={type:"rotate",rotatePlane:a}))}_createRotateDragPipeline(a){const b=this._tool,c=b.graphic;return C.createManipulatorDragEventPipeline(a,(d,g,e)=>{d=b.inputState;null!=d&&
(g.next(f=>{"start"===f.action&&b.emit("graphic-rotate-start",{graphic:c,angle:0});return f}).next(z.screenToRenderPlane(b.view,d.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(d)).next(this._rotateDragUpdateGeometry()).next(f=>{const q={graphic:c,angle:r.rad2deg(f.rotateAngle)};switch(f.action){case "start":case "update":b.emit("graphic-rotate",q);break;case "end":b.inputState=null,b.emit("graphic-rotate-stop",q)}return f}),e.next(()=>{null!=b.inputState&&b.emit("graphic-rotate-stop",{graphic:c,
angle:0});b.cancel()}))})}_rotateDragRenderPlaneToRotate(a){return b=>{const c=h.getNormal(a.rotatePlane),d=y.calculateInputRotationTransform(b.renderStart,b.renderEnd,this._bounds.displayBounds.origin,c);return{...b,rotateAxis:c,rotateAngle:d}}}_rotateDragUpdateGeometry(){const a=this._tool,b=this._bounds;return c=>{var d=m.copy(u.create(),b.mapBoundsStart.origin);const g=[];for(const e of this._editGeometryOperations.data.components)g.push(...e.vertices);d=this._editGeometryOperations.rotateVertices(g,
d,c.rotateAngle,"start"===c.action?p.AccumulationBehavior.NEW_STEP:p.AccumulationBehavior.ACCUMULATE_STEPS,D.AccumulationType.REPLACE);v.copy(b.mapBoundsStart,b.mapBounds);E.apply(d,b.mapBounds);a.graphic.geometry=this._editGeometryOperations.data.geometry;return c}}}l.ExtentRotate=G;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});