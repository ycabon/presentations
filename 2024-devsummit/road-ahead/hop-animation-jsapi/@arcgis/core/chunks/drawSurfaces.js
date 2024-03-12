/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import n from"../core/Evented.js";import{clone as i}from"../core/lang.js";import{d as s,e as r}from"./maybe.js";import{ignoreAbortErrors as o}from"../core/promiseUtils.js";import{watch as a,syncAndInitial as p}from"../core/reactiveUtils.js";import{c as l,b as c}from"./screenUtils.js";import{property as u}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{d as h}from"./diffUtils.js";import{U as m}from"./UpdatingHandles.js";import{p as g,a as v}from"./dehydratedFeatureComparison.js";import{p as f,i as y,g as _,h as x}from"./elevationInfoUtils.js";import{V as S}from"./ViewingMode.js";import{c as b,E as w,a as T,C}from"./EditGeometryOperations.js";import{c as V,a as M}from"./InteractiveToolBase.js";import{V as P,c as O,H as I,d as D,G as E,P as j,b as H,i as Z}from"./snappingUtils.js";import R from"../views/interactive/sketch/SketchLabelOptions.js";import{S as G}from"./SnappingContext.js";import{c as k}from"./SnappingDragPipelineStep.js";import{S as z}from"./SnappingOperation.js";import{v as A,d as U,c as F}from"./quantityUtils.js";import{ad as L,ac as q}from"./unitUtils.js";import{c as B,p as W,h as N}from"./vec3.js";import{c as J}from"./vec3f64.js";import{p as K}from"./projectVectorToVector.js";import{geodesicCompatibleSpatialReference as Q}from"../geometry/support/geodesicUtils.js";import{g as X,h as Y,b as $}from"./normalizedPoint.js";import{g as ee,D as te,p as ne,d as ie}from"./angularMeasurementUtils.js";import"../geometry.js";import{m as se}from"./dehydratedPoint.js";import{c as re}from"./hydratedFeatures.js";import oe from"../geometry/SpatialReference.js";import ae from"../geometry/Point.js";const pe=["freehand","hybrid","click"],le="click";class ce{constructor({consumesClicks:e,grabbableForEvent:t}){this.events=new n,this.interactive=!0,this.selectable=!1,this.cursor=null,this.grabbable=!0,this.consumesClicks=e,this.grabbableForEvent=t}destroy(){}intersectionDistance(e,t){return 0}attach(){}detach(){}onElevationChange(){}onViewChange(){}}function ue(e,t,n,i,s,r){let o="geodesic",a=Q(n);const p=X(e,t,i);return p[2]=0,a&&K(p,n,p,a)||(o="euclidean",a=n),{mode:o,view:t,elevationInfo:i,hasZ:s,directionMode:r,spatialReference:e.spatialReference,measurementSR:a,origin:p}}function de(e,t,n){if(null==t||null==e)return;const i=L(n.measurementSR);if(null==i)return;const s=ye(e,n);if(null==s)return;const r=A(t,i);return new P($(s),r)}function he(e,t,n,i){if(null==n||null==e)return;const s=ye(e,i);if(null==s)return;const r=ee(n),o=e=>{if(null==e)return;const t=J(),n=F(e,"degrees","geographic");return ne(t,s,i.measurementSR,10,n,i.mode)?new D(s,t):void 0},a=()=>{if(null!=t&&null!=e)return ee(ie(t,e))};switch(i.directionMode){case te.Absolute:return o(r);case te.Relative:{const e=a();if(null==e)return;return o(e+r)}case te.RelativeBilateral:{const e=a();if(null==e)return;return O([o(e+r),o(e-r)])}}}function me(e,t){const n=function(e,t){return _e(e,t)?.value??void 0}(e,t);return null!=n?new I(n):void 0}function ge(e,t,n,i,s,r){if(null==n&&null==i&&null==s)return;if(null==t)return me(i,r);const{view:o,elevationInfo:a,measurementSR:p}=r,l=X(t,o,a);if(!p||!K(l,t.spatialReference,xe,p))return;const c=[xe[0],xe[1]],u=null!=n?A(n,"meters"):void 0,d=function(e,t){const n=_e(e,t);return null!=n?A(n,"meters"):void 0}(i,r),h=ee(s),m=e=>{const t=new E(c,p,u,d,e);return null==u||null==e||null==d&&r.hasZ?t:new j(t.closestTo(l))};if(null==h)return m(void 0);const g=()=>{if(null!=e&&null!=t)return ee(ie(e,t))};switch(r.directionMode){case te.Absolute:return m(h);case te.Relative:{const e=g();if(null==e)return;return m(e+h)}case te.RelativeBilateral:{const e=g();if(null==e)return;return O([m(e+h),m(e-h)])}}}function ve(e,t){return"geodesic"===t.mode?ge(null,null,null,e,null,t):me(e,t)}function fe(e,t,n,i,s,r){return"geodesic"===r.mode?ge(t,e,n,s,i,r):function(e){let t;for(const n of e)n&&(t=t?.intersect(n)??n);return t}([de(e,n,r),he(e,t,i,r),me(s,r)])}function ye(e,t){const{view:n,elevationInfo:i,measurementSR:s,origin:r,mode:o}=t,a=X(e,n,i);if(K(a,e.spatialReference,a,s))return"geodesic"!==o&&B(a,a,r),a}function _e(e,{view:t,origin:n,elevationInfo:i,hasZ:s,measurementSR:r}){if(null==e||!s)return;const o=q(r);if(null==o)return;const[a,p]=n,l=A(e,o),c="3d"===t?.type?f(t,a,p,l,r,i):l;return null!=c?U(c,o):void 0}const xe=J();let Se=class extends(n.EventedMixin(t)){constructor(e){super(e),this._createOperationCompleted=!1,this._hideDefaultCursor=!1,this._pointerDownStates=new Set,this._stagedScreenPoint=null,this._stagedPointerType=null,this._stagedPointerId=null,this._updatingHandles=new m,this.constraintsEnabled=!1,this.constraintInfo=void 0,this.constraintZ=null,this.defaultZ=null,this.isDraped=!0,this.labelOptions=new R,this.cursor=null,this.loading=!1,this.snapToSceneEnabled=null,this.firstVertex=null,this.lastVertex=null,this.secondToLastVertex=null,null==e.elevationInfo&&(this.elevationInfo=y(!!e.hasZ))}initialize(){const{geometryType:e,view:t}=this,n=t.spatialReference,i="viewingMode"in t.state?t.state.viewingMode:S.Local,s="segment"===e||"multipoint"===e?"polyline":e;this.coordinateHelper=b(this.hasZ,this.hasM,n),this._editGeometryOperations=new w(new T(s,this.coordinateHelper)),this._snappingOperation=new z({view:t}),this.addHandles([a((()=>this._snappingOperation.stagedPoint),(e=>this._processCursor(e)),{sync:!0,equals:g}),a((()=>this.constraintInfo?.constraint),(e=>{const{snappingOptions:t}=this;t&&(t.forceDisabled=null!=e&&Z(e)),this._processCursor(this._screenToMap(this._stagedScreenPoint))}),{sync:!0,equals:r}),a((()=>this.view.viewpoint),((e,t)=>{e&&t&&h(e,t)&&this._onViewpointChange()}))]),this._activeComponent=new C(n,i),this._editGeometryOperations.data.components.push(this._activeComponent);const l=this.segmentLabels;null!=l&&(l.context={view:t,editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,labelOptions:this.labelOptions},this.addHandles(a((()=>this.labelOptions.enabled),(e=>{l.visible=e}),p))),this.addHandles(this._editGeometryOperations.on(["vertex-add","vertex-update","vertex-remove"],(e=>{const t=e.vertices.map((e=>({componentIndex:0,vertexIndex:e.index,coordinates:this.coordinateHelper.vectorToArray(e.pos)}))),n=t.map((e=>e.coordinates)),i=this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.getFirstVertex()?.pos)??null;g(i,this.firstVertex)||(this.firstVertex=i);const s=this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.getLastVertex()?.pos)??null;g(s,this.lastVertex)||(this.lastVertex=s);const r=this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.edges.at(-1)?.leftVertex?.pos)??null;switch(g(r,this.secondToLastVertex)||(this.secondToLastVertex=r),this._processCursor(this.cursorVertex),e.type){case"vertex-add":this.emit(e.type,{...e,added:n,vertices:t});break;case"vertex-update":this.emit(e.type,{...e,updated:n,vertices:t});break;case"vertex-remove":this.emit(e.type,{...e,removed:n,vertices:t})}})));const c=this._manipulator=new ce({consumesClicks:!1,grabbableForEvent:e=>"click"!==this.drawingMode||"touch"===e.pointerType&&this._snappingEnabled&&1===this._pointerDownStates.size});this.manipulators.add(c),c.grabbable="point"!==e,this.addHandles([this._createManipulatorDragPipeline(c),c.events.on("immediate-click",(e=>this._onImmediateClick(e))),c.events.on("immediate-double-click",(e=>this._onImmediateDoubleClick(e))),a((()=>({effectiveCursor:this.effectiveCursor})),(({effectiveCursor:e})=>{c.cursor=e}),p)]),H(this,(()=>{const e=this.view.inputManager.latestPointerType??"mouse",t=this._getSnappingContext(e);null!=this.snappingManager&&this._updatingHandles.addPromise(o(this._snappingOperation.snapAgainNearPreviousMapPoint(this.snappingManager,t)))}))}destroy(){s(this.segmentLabels),s(this._snappingOperation),this._editGeometryOperations=s(this._editGeometryOperations),this._updatingHandles.destroy()}get _snappingEnabled(){return null!=this.snappingManager&&this.snappingManager.options.effectiveEnabled}get _requiresScenePoint(){const e=this._updateAndGetEffectiveDrawSurface();return"3d"===this.view.type&&this.drawSurface!==e}get canRedo(){return this._editGeometryOperations.canRedo}get canUndo(){return this._editGeometryOperations.canUndo}get committedVertices(){return this._activeComponent.vertices.map((e=>this.coordinateHelper.vectorToArray(e.pos)))}set drawingMode(e){this._set("drawingMode",e??le)}get effectiveCursor(){return this.loading?"progress":this._hideDefaultCursor?null:this.cursor||"crosshair"}get interactive(){return this._manipulator.interactive}set interactive(e){this._manipulator.interactive=e}get isCompleted(){return this._createOperationCompleted}get numCommittedVertices(){return this._activeComponent.vertices.length}get snappingOptions(){return null!=this.snappingManager?this.snappingManager.options:null}get cursorVertex(){return this._get("cursorVertex")}get visualizationCursorVertex(){return"mouse"===this._stagedPointerType?this.cursorVertex:null}get committableVertex(){const{cursorVertex:e,lastVertex:t,firstVertex:n,geometryType:i}=this;return"polygon"===i&&v(e,n)||v(e,t)?null:e}get updating(){return this._updatingHandles.updating}get geometryIncludingUncommittedVertices(){const{committedVertices:e,committableVertex:t,coordinateHelper:n}=this,i=e.slice();return null!=t&&i.push(n.pointToArray(t)),i}cancel(){this.complete({aborted:!0})}commitStagedVertex(){this._snappingOperation.abort();const{committableVertex:e}=this;null!=e&&this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(e))}complete(e){const t=e?.aborted||!1;this._snappingOperation.abort(),this.snappingManager?.doneSnapping();const{geometryType:n,numCommittedVertices:i}=this,s="multipoint"===n&&0===i||"polyline"===n&&i<2||"polygon"===n&&i<3;"segment"!==n&&"point"!==n||this.commitStagedVertex(),this._createOperationCompleted=!s,(this.isCompleted||t)&&(this._stagedScreenPoint=null,this._stagedPointerId=null,this._stagedPointerType=null,this._processCursor(null),this.emit("complete",{vertices:this.committedVertices.map(((e,t)=>({componentIndex:0,vertexIndex:t,coordinates:e}))),aborted:t,type:"complete"}))}onInputEvent(e){switch(e.type){case"pointer-down":this._pointerDownStates.add(e.pointerId);break;case"pointer-up":this._pointerDownStates.delete(e.pointerId)}switch(e.type){case"pointer-move":return this._onPointerMove(e);case"hold":return this._onHold(e)}}redo(){this._editGeometryOperations.redo()}undo(){null!=this.snappingManager&&this.snappingManager.doneSnapping(),this._editGeometryOperations.undo()}_processCursor(e){const t=i(this.cursorVertex),n=i(e),s=n&&(this._updateAndGetEffectiveDrawSurface()?.constrainZ(n)??n),r=this._snapToClosingVertex(s),o=this._applyConstraints(r);v(t,o)||(this._set("cursorVertex",o),this.segmentLabels?.set("stagedVertex",null!=o?this.coordinateHelper.pointToVector(o):null),null==o||"mouse"!==this._stagedPointerType?this.emit("cursor-remove"):this.emit("cursor-update",{updated:null,vertices:[{componentIndex:0,vertexIndex:this._activeComponent.vertices.length,coordinates:this.coordinateHelper.pointToArray(o)}],operation:"apply",type:"vertex-update"}))}_snapToClosingVertex(e){if(null==e||"polygon"!==this.geometryType||this.numCommittedVertices<=2)return e;const t=this._mapToScreen(e);if(!t)return e;const n=this._activeComponent;return this._vertexWithinPointerDistance(n.vertices[0].pos,t)?this.firstVertex:this._vertexWithinPointerDistance(n.vertices.at(-1).pos,t)?this.lastVertex:e}_createManipulatorDragPipeline(e){switch(this.drawingMode){case"click":return this._createManipulatorDragPipelineClick(e);case"freehand":return this._createManipulatorDragPipelineFreehand(e);case"hybrid":return this._createManipulatorDragPipelineHybrid(e)}}_createManipulatorDragPipelineClick(e){return V(e,((e,t,n,i)=>{const s="touch"===i&&this._snappingEnabled;if(this.isCompleted||!s)return;const{snappingStep:r,cancelSnapping:o}=k({predicate:()=>s,snappingManager:this.snappingManager,snappingContext:new G({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,feature:this.graphic,pointer:i,visualizer:this.snappingVisualizer}),updatingHandles:this._updatingHandles,useZ:!this._requiresScenePoint});n=n.next((e=>(s&&null!=this.snappingManager&&this.snappingManager.doneSnapping(),e))).next(o),t.next(this._screenToMapDragEventStep()).next((e=>("start"===e.action&&(this._processCursor(e.mapStart),("segment"===this.geometryType||s&&!this.numCommittedVertices)&&this.commitStagedVertex()),e))).next(M(this.view,this.elevationInfo)).next(...r).next((e=>(s&&(this._processCursor(e.mapEnd),"end"===e.action&&this.commitStagedVertex()),e))).next((e=>("end"===e.action&&("mouse"!==this._stagedPointerType&&this._snappingOperation.abort(),"segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()),e)))}))}_createManipulatorDragPipelineFreehand(e){return V(e,((e,t)=>{this.isCompleted||t.next(this._screenToMapDragEventStep()).next((e=>("start"===e.action&&(this._snappingOperation.abort(),null==this.committableVertex&&this._processCursor(e.mapStart),"segment"===this.geometryType&&this.commitStagedVertex()),e))).next((e=>{switch(e.action){case"start":case"update":this._processCursor(e.mapEnd),"polygon"!==this.geometryType&&"polyline"!==this.geometryType||this.commitStagedVertex();break;case"end":this.complete()}return e}))}))}_createManipulatorDragPipelineHybrid(e){return V(e,((e,t)=>{this.isCompleted||t.next(this._screenToMapDragEventStep()).next((e=>("start"===e.action&&(this._snappingOperation.abort(),this._processCursor(e.mapStart),this.commitStagedVertex()),e))).next((e=>{switch(e.action){case"start":case"update":this._processCursor(e.mapEnd),"polygon"!==this.geometryType&&"polyline"!==this.geometryType||this.commitStagedVertex();break;case"end":"mouse"!==this._stagedPointerType&&this._snappingOperation.abort(),"segment"!==this.geometryType&&"point"!==this.geometryType||this.complete()}return e}))}))}get _drawAtFixedElevation(){const{constraintsEnabled:e,constraintZ:t,geometryType:n,numCommittedVertices:i}=this;return e?null!=t||"segment"===n&&i>0:("segment"===n||"polygon"===n)&&i>0}_updateAndGetEffectiveDrawSurface(){const{constraintsEnabled:e,coordinateHelper:t,drawSurface:n,elevationDrawSurface:i,snapToSceneEnabled:s}=this;if(null==i)return n;if(!t.hasZ())return i.defaultZ=null,i;const r=this.elevationInfo?.mode;let o=this.defaultZ,a=e||"absolute-height"===r;return null!=s&&(a=s),"on-the-ground"===r&&(a=!1),this._drawAtFixedElevation&&(o=(e?this.constraintZ:null)??t.getZ(this._activeComponent.vertices[0].pos),a=!1),a?n:(i.defaultZ=o,i)}_mapToScreen(e){return this._updateAndGetEffectiveDrawSurface()?.mapToScreen(e)}_onHold(e){this._snappingOperation.abort(),"click"===this.drawingMode&&"touch"===e.pointerType&&this._snappingEnabled&&this._processCursor(e.mapPoint),e.stopPropagation()}_onImmediateClick(e){if(!("mouse"===e.pointerType&&2===e.button||this._manipulator.dragging))try{const{drawingMode:t,geometryType:n}=this;this._stagedPointerType=e.pointerType,this._stagedScreenPoint=e.screenPoint;const i=this._screenToMap(e.screenPoint);if(null==i)return;if(null==i||"freehand"===t&&"point"!==n)return;if(this._snappingEnabled&&null!=this.cursorVertex||this._processCursor(i),null==this.committableVertex)return void this.complete();this.commitStagedVertex(),"mouse"!==e.pointerType&&this._processCursor(null),("freehand"===t||"point"===n||"segment"===n&&2===this.numCommittedVertices||"segment"===n&&"hybrid"===t&&1===this.numCommittedVertices)&&this.complete()}finally{e.stopPropagation()}}_onImmediateDoubleClick(e){this._manipulator.dragging||"point"===this.geometryType||(this.complete(),e.stopPropagation())}_onPointerMove(e){const t=l(e.x,e.y);this._stagedScreenPoint=t,this._stagedPointerType=e.pointerType,this._stagedPointerId=e.pointerId;const n=this._snappingOperation,i=this._manipulator;this._pointerDownStates.has(e.pointerId)||i.grabbing||!i.interactive?n.abort():(e.stopPropagation(),this._processCursorMovementRelativeToSurface(t,e.pointerType))}_onViewpointChange(){const e=this._manipulator;"mouse"===this._stagedPointerType&&this._stagedScreenPoint&&null!=this._stagedPointerId&&!this._pointerDownStates.has(this._stagedPointerId)&&!e.grabbing&&e.interactive?this._processCursorMovementRelativeToSurface(this._stagedScreenPoint,this._stagedPointerType):this._snappingOperation.abort()}_processCursorMovementRelativeToSurface(e,t){const n=this._snappingOperation,i=this._screenToMap(e),s=this._requiresScenePoint?this.drawSurface?.screenToMap(e):null;if(null==i)return this._hideDefaultCursor=!0,void n.abort();this._hideDefaultCursor=!1;const r=this.snappingManager;if(null==r)return this._processCursor(i),void n.abort();const a=this._getSnappingContext(t);this._updatingHandles.addPromise(o(n.snap({point:i,scenePoint:s},r,a)))}_applyConstraints(e){const{constraintInfo:t,constraintsEnabled:n}=this;if(!e||!n||!t?.constraint)return e;const i=ye(e,t.context),s=i?t.constraint.closestTo(i):void 0;return s?function(e,t,n){const{view:i,measurementSR:s,spatialReference:r,origin:o,mode:a}=n,p=xe;if("geodesic"===a?W(p,e):N(p,e,o),K(p,s,p,r))return Y(p,i,t,n)}(s,e,t.context):e}_screenToMap(e){return e?this._updateAndGetEffectiveDrawSurface()?.screenToMap(e):null}_screenToMapDragEventStep(){let e=null;return t=>{if("start"===t.action&&(e=this._screenToMap(t.screenStart)),null==e)return null;const n=this._screenToMap(t.screenEnd);return null!=n?{...t,mapStart:e,mapEnd:n}:null}}_vertexWithinPointerDistance(e,t){const n=this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(e));return null!=n&&function(e,t,n){const i=e.x-t.x,s=e.y-t.y;return i*i+s*s<=25}(n,t)}_getSnappingContext(e){const t=this._drawAtFixedElevation?this.elevationDrawSurface?.defaultZ:null;return new G({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:e,feature:this.graphic,visualizer:this.snappingVisualizer,selfSnappingZ:null!=t?{value:t,elevationInfo:this.elevationInfo}:null})}};e([u()],Se.prototype,"_hideDefaultCursor",void 0),e([u()],Se.prototype,"_snappingOperation",void 0),e([u()],Se.prototype,"_snappingEnabled",null),e([u({constructOnly:!0})],Se.prototype,"graphic",void 0),e([u()],Se.prototype,"constraintsEnabled",void 0),e([u()],Se.prototype,"constraintInfo",void 0),e([u()],Se.prototype,"constraintZ",void 0),e([u()],Se.prototype,"defaultZ",void 0),e([u()],Se.prototype,"isDraped",void 0),e([u({value:le})],Se.prototype,"drawingMode",null),e([u({constructOnly:!0})],Se.prototype,"elevationDrawSurface",void 0),e([u({constructOnly:!0})],Se.prototype,"elevationInfo",void 0),e([u({constructOnly:!0,type:R})],Se.prototype,"labelOptions",void 0),e([u({constructOnly:!0})],Se.prototype,"geometryType",void 0),e([u({constructOnly:!0})],Se.prototype,"hasM",void 0),e([u({constructOnly:!0})],Se.prototype,"hasZ",void 0),e([u()],Se.prototype,"cursor",void 0),e([u()],Se.prototype,"effectiveCursor",null),e([u()],Se.prototype,"loading",void 0),e([u({constructOnly:!0})],Se.prototype,"manipulators",void 0),e([u({constructOnly:!0})],Se.prototype,"drawSurface",void 0),e([u({constructOnly:!0})],Se.prototype,"segmentLabels",void 0),e([u({constructOnly:!0})],Se.prototype,"snappingManager",void 0),e([u({constructOnly:!0})],Se.prototype,"snappingVisualizer",void 0),e([u()],Se.prototype,"snapToSceneEnabled",void 0),e([u({readOnly:!0})],Se.prototype,"cursorVertex",null),e([u({readOnly:!0})],Se.prototype,"visualizationCursorVertex",null),e([u()],Se.prototype,"committableVertex",null),e([u()],Se.prototype,"firstVertex",void 0),e([u()],Se.prototype,"lastVertex",void 0),e([u()],Se.prototype,"secondToLastVertex",void 0),e([u()],Se.prototype,"updating",null),e([u({constructOnly:!0})],Se.prototype,"view",void 0),Se=e([d("esri.views.draw.DrawOperation")],Se);class be{constructor(e,t,n,i=null){this._elevationInfo=e,this.defaultZ=t,this._view=n,this._excludeGraphics=i}screenToMap(e){if(null!=this.defaultZ)return this._view.sceneIntersectionHelper.intersectElevationFromScreen(c(e.x,e.y),this._elevationInfo,this.defaultZ,this._excludeGraphics);const t=this._view.sceneIntersectionHelper.intersectElevationFromScreen(c(e.x,e.y),this._elevationInfo,0,this._excludeGraphics);return null!=t&&(t.z=void 0),t}mapToScreen(e){const t=se(e.x,e.y,_(this._view,e,this._elevationInfo),e.spatialReference);return this._view.toScreen(t)}constrainZ(e){const{defaultZ:t}=this;return null!=t&&e.z!==t&&((e=re(e)).z=t),e}}class we{constructor(e,t,n=[]){this.view=e,this.elevationInfo=t,this.exclude=n}screenToMap(e){const t=this.view.toMap(e,{exclude:this.exclude,excludeHud:!0});return null!=t&&(t.z=x(t,this.view,this.elevationInfo)),t}mapToScreen(e){let t=e;return null!=this.elevationInfo&&(t=se(e.x,e.y,_(this.view,e,this.elevationInfo),e.spatialReference)),this.view.toScreen(t)}constrainZ(e){return e}}class Te{constructor(e,t=!1,n=0){this.view=e,this.hasZ=t,this.defaultZ=n,this.mapToScreen=t=>e.toScreen(t),this.screenToMap=t?t=>{const i=e.toMap(t);return i.z=n,i}:t=>e.toMap(t)}constrainZ(e){const{defaultZ:t}=this;return this.hasZ&&e.z!==t&&((e=re(e)).z=t),e}}class Ce{screenToMap(e){const{x:t,y:n}=e;return new ae({x:t,y:n,spatialReference:Ce.spatialReference})}mapToScreen(e){return l(e.x,e.y)}constrainZ(e){return e}}Ce.spatialReference=new oe;export{Se as D,be as E,Te as M,we as S,pe as a,Ce as b,ve as c,le as d,fe as e,ue as g};
