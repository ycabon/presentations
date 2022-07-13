import { dd as y, aH as n, be as t, j, b2 as f, jF as P$1, df as l, t as t$1, bL as u, dj as m, es as l$1, en as h$2, r, ew as h$3, fn as t$2, g as g$1, b1 as b, h$ as m$1, jG as i, bf as j$1, jH as e$1, Z as s$1, s as s$2, B as e$2, C as d, D as n$1, jC as e$3, aY as _ } from './_virtual_index-a68dd1ed.js';
import { g } from './SnappingVisualizer2D-3ab2f790.js';
import { s } from './drawUtils-59f13a7a.js';
import { h as h$1, D as D$1 } from './GraphicMover-779cbc9d.js';
import { h } from './settings-765e4276.js';
import { S, e } from './SnappingContext-d087b90e.js';
import './enums-11126df6.js';
import './GraphicManipulator-6a493eda.js';
import './drapedUtils-99723f2e.js';
import './PointSnappingHint-44c7a14d.js';
import './plane-999ac6bd.js';
import './sphere-a826bb8b.js';
import './vectorStacks-5f70b87b.js';
import './mat4f64-2ebd3575.js';
import './quatf64-808fd6fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class A{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-start";}}class U{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape";}}class T{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-stop";}}class D{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-start";}}class F{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move";}}class z{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-stop";}}class L{constructor(e){this.added=e,this.type="vertex-select";}}class P{constructor(e){this.removed=e,this.type="vertex-deselect";}}class K{constructor(e,t,i,s){this.added=e,this.graphic=t,this.oldGraphic=i,this.vertices=s,this.type="vertex-add";}}class N{constructor(e,t,i,s){this.removed=e,this.graphic=t,this.oldGraphic=i,this.vertices=s,this.type="vertex-remove";}}const q=h.reshapeGraphics,B={vertices:{default:new y({style:"circle",size:q.vertex.size,color:q.vertex.color,outline:{color:q.vertex.outlineColor,width:1}}),hover:new y({style:"circle",size:q.vertex.hoverSize,color:q.vertex.hoverColor,outline:{color:q.vertex.hoverOutlineColor,width:1}}),selected:new y({style:"circle",size:q.selected.size,color:q.selected.color,outline:{color:q.selected.outlineColor,width:1}})},midpoints:{default:new y({style:"circle",size:q.midpoint.size,color:q.midpoint.color,outline:{color:q.midpoint.outlineColor,width:1}}),hover:new y({style:"circle",size:q.midpoint.size,color:q.midpoint.color,outline:{color:q.midpoint.outlineColor,width:1}})}};let J=class extends n.EventedAccessor{constructor(e){super(e),this._activeOperationInfo=null,this._editGeometryOperations=null,this._handles=new t,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingTask=null,this._stagedVertex=null,this._viewHandles=new t,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new j,this.midpointSymbol=new y({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.type="reshape",this.vertexGraphics=new j,this.view=null;}initialize(){this._highlightHelper=new h$1({view:this.view}),this._setup(),this._handles.add([f((()=>this.view?.ready),(()=>{const{layer:e,view:t}=this;e$3(t,e),this._viewHandles.add(t.on("key-down",(e=>this._keyDownHandler(e)),_.TOOL));}),{once:!0,initial:!0}),P$1((()=>this.graphic),(()=>this.refresh())),P$1((()=>this.layer),((e,t)=>{t&&(this._clearSelection(),this._resetGraphics(t)),this.refresh();})),P$1((()=>this.enableMidpoints),(()=>this.refresh()))]);}destroy(){this._reset(),this._mover?.destroy(),this._mover=null,this._handles=l(this._handles),this._viewHandles=l(this._viewHandles);}set highlightsEnabled(e){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",e),this._setUpHighlights();}get state(){const e=!!this.get("view.ready"),t=!(!this.get("graphic")||!this.get("layer"));return e&&t?"active":e?"ready":"disabled"}set symbols(e){const{midpoints:t=B.midpoints,vertices:i=B.vertices}=e||{};this._set("symbols",{midpoints:t,vertices:i});}isUIGraphic(e){const t=[];return this.graphic&&t.push(this.graphic),t.concat(this.vertexGraphics.items,this.midpointGraphics.items),t.length&&t.includes(e)}refresh(){this._reset(),this._setup();}reset(){this.graphic=null;}clearSelection(){this._clearSelection();}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices);}_setup(){const{graphic:e,layer:t}=this;if(!t||!e||t$1(e.geometry))return;const i=e.geometry;"mesh"!==i.type&&"extent"!==i.type?("polygon"===i.type&&u(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError();}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper.add(this.graphic);}_setUpGeometryHelper(){const e=this.graphic.geometry;if(t$1(e)||"mesh"===e.type||"extent"===e.type)return void this._logGeometryTypeError();const t="multipoint"===e.type?new m({paths:e.points,spatialReference:e.spatialReference}):e;this._editGeometryOperations=S.fromGeometry(t,l$1.Local);}_saveSnappingContextForHandle(e$1,t){this._snappingGraphicsLayer=new h$2({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new e({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:t.viewEvent?.pointerType||"mouse",excludeFeature:this.graphic,visualizer:new g(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(e$1)});}_reset(){this._clearSelection(),this._highlightHelper.removeAll(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default";}_resetSnappingStateVars(){r(this.snappingManager)&&this.snappingManager.doneSnapping(),r(this._snappingGraphicsLayer)&&(this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=l(this._editGeometryOperations),this._snappingTask=h$3(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null;}_resetGraphics(e){this._removeMidpointGraphics(e),this._removeVertexGraphics(e),this._set("selectedVertices",[]);}_removeMidpointGraphics(e){const t=e||this.layer;t&&t.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach((e=>e.destroy())),this.midpointGraphics.removeAll();}_removeVertexGraphics(e){const t=e||this.layer;t&&t.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach((e=>e.destroy())),this.vertexGraphics.removeAll();}_getCoordinatesForUI(e){const t=t$2(e.clone());if("polygon"===e.type)for(const i of t){const e=i[i.length-1];i[0][0]===e[0]&&i[0][1]===e[1]&&i.length>2&&i.pop();}return t}_setupGraphics(){const e=this.graphic.geometry;if(r(e)&&("polyline"===e.type||"polygon"===e.type)){const t=this._getCoordinatesForUI(e);this.enableMidpoints&&this._setUpMidpointGraphics(t),this.enableVertices&&this._setUpVertexGraphics(t);}}_setUpMidpointGraphics(e){this._removeMidpointGraphics();const t=this._createMidpointGraphics(e);this.midpointGraphics.addMany(t),this.layer.addMany(t);}_setUpVertexGraphics(e){this._removeVertexGraphics();const t=this._createVertexGraphics(e);this.vertexGraphics.addMany(t),this._storeRelatedVertexIndices(),this.layer.addMany(t);}_createVertexGraphics(e){const{_graphicAttributes:i,symbols:s,view:{spatialReference:r}}=this,o=[];return e?.forEach(((e,n)=>{e.forEach(((e,a)=>{const[h,c]=e;o.push(new g$1({geometry:new b({x:h,y:c,spatialReference:r}),symbol:s?.vertices?.default,attributes:{...i,pathIndex:n,pointIndex:a}}));}));})),o}_createMidpointGraphics(e){const{_graphicAttributes:i$1,symbols:s,view:{spatialReference:r}}=this,o=[];return e?.forEach(((e,n)=>{e.forEach(((a,h)=>{const[c,p]=a,l=e[h+1]?h+1:0;if("polygon"===m$1(this.graphic.geometry,"type")||0!==l){const[a,d]=e[l],[m,v]=i([c,p],[a,d]);o.push(new g$1({geometry:new b({x:m,y:v,spatialReference:r}),symbol:s.midpoints.default,attributes:{...i$1,pathIndex:n,pointIndexStart:h,pointIndexEnd:l}}));}}));})),o}_storeRelatedVertexIndices(){const e=this.vertexGraphics.items;if(!e)return;const t=e.map((({geometry:e})=>({x:e.x,y:e.y})));for(let i=0;i<t.length;i++){const s=[];for(let e=0;e<t.length;e++){if(i===e)continue;const r=t[i],o=t[e];r.x===o.x&&r.y===o.y&&s.push(e);}e[i].attributes.relatedGraphicIndices=s;}}_setupMover(){const{enableMovement:e,graphic:t,midpointGraphics:i,vertexGraphics:s,view:r}=this,o=s.concat(i).items;e&&o.push(t),this._mover=new D$1({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:o,view:r,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}});}_onGraphicClickCallback(e){e.viewEvent.stopPropagation();const t=e.graphic;if(t===this.graphic)this.clearSelection(),this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e);else if(this._isMidpoint(t)){if(2===e.viewEvent.button)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,s);}else if(this._isVertex(t))if(e.viewEvent.stopPropagation(),2===e.viewEvent.button)this._removeVertices(t);else {e.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(t)?this._removeFromSelection(t,!0):this._addToSelection(t);}}_setUpOperation(e){const{graphic:t,dx:i,dy:s}=e,r=t===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(t,e),this._activeOperationInfo={target:this.graphic,mover:t,operationType:r?"move":"reshape",totalDx:i,totalDy:s};}_onGraphicMoveStartCallback(e){const t=e.graphic,{dx:i,dy:s}=e;if(t===this.graphic)return this._clearSelection(),this._resetGraphics(),this._setUpOperation(e),this._emitMoveStartEvent(i,s),void("point"===this._editGeometryOperations.data.type&&this._onHandleMove(t,i,s,e,(()=>this._emitMoveEvent(i,s))));if(!this.selectedVertices.includes(t)){if(this._clearSelection(),this._isMidpoint(t)){const e=this.graphic.clone(),i=this._createVertexFromMidpoint(t);this._emitVertexAddEvent([t],e,i);}this._addToSelection(t);}this._setUpOperation(e),this._emitReshapeStartEvent(t),this._onHandleMove(t,i,s,e,(()=>this._emitReshapeEvent(t)));}_onGraphicMoveCallback(e){const{graphic:t,dx:i,dy:s}=e;this._activeOperationInfo.totalDx+=i,this._activeOperationInfo.totalDy+=s;const{operationType:r}=this._activeOperationInfo;"move"===r?"point"===this._editGeometryOperations.data.type?this._onHandleMove(t,i,s,e,(()=>this._emitMoveEvent(i,s))):this._emitMoveEvent(i,s):this._onHandleMove(t,i,s,e,(()=>this._emitReshapeEvent(t)));}_onGraphicMoveStopCallback(e){const{graphic:t,dx:i,dy:s}=e,r=t===this.graphic,o="point"!==this._editGeometryOperations.data.type;this._activeOperationInfo.totalDx+=i,this._activeOperationInfo.totalDy+=s,this._onHandleMove(t,i,s,e,(()=>r?this._emitMoveStopEvent():this._emitReshapeStopEvent(t))),r&&o||this._isMidpoint(t)?this.refresh():(this._resetSnappingStateVars(),this._activeOperationInfo=null);}_updateMidpointGraphicLocations(e){for(const t of this.midpointGraphics){const{pathIndex:i$1,pointIndexStart:s,pointIndexEnd:r}=t.attributes,[o,n]=e[i$1][s],[a,h]=e[i$1][r],[c,p]=i([o,n],[a,h]);t.geometry=new b({x:c,y:p,spatialReference:this.view.spatialReference});}}_getIndicesForVertexGraphic({attributes:e}){return [e?.pathIndex||0,e?.pointIndex||0]}_getVertexFromEditGeometry(e){const[t,i]=this._getIndicesForVertexGraphic(e);return this._editGeometryOperations.data.components[t].vertices[i]}_onHandleMove(e,t,s,r$1,o){if(h$3(this._snappingTask),!this._snappingContext)return;const n=e.geometry,a="graphic-move-stop"===r$1.type;if(r(this.snappingManager)&&this.selectedVertices.length<2&&!a){const r=this.snappingManager;this._stagedVertex=r.update(n,this._snappingContext),this._syncGeometryAfterVertexMove(e,new b(this._stagedVertex),t,s,a),o(),this._snappingTask=j$1((async i=>{const h=await r.snap(n,this._snappingContext,i);h.valid&&(this._stagedVertex=h.apply(),this._syncGeometryAfterVertexMove(e,new b(this._stagedVertex),t,s,a),o());}));}else {const i=r(this._stagedVertex)?new b(this._stagedVertex):n;this._syncGeometryAfterVertexMove(e,i,t,s,a),o();}}async _syncGeometryAfterVertexMove(e,t,i,s,r=!1){const o=this._editGeometryOperations.data.geometry;if("point"===o.type)e.geometry=t;else {const{x:n,y:a}=t,[h,c]=this._getIndicesForVertexGraphic(e);let p=t$2(o);const l=p[h].length-1;p[h][c]=[n,a],"polygon"===o.type&&(0===c?p[h][l]=[n,a]:c===l&&(p[h][0]=[n,a])),this._isVertex(e)&&(p=this._moveRelatedCoordinates(p,e,n,a),p=this._moveSelectedHandleCoordinates(p,e,i,s,"polygon"===o.type),this._updateMidpointGraphicLocations(p)),this.graphic.geometry=o.clone();const d=this._getVertexFromEditGeometry(e),m=n-d.pos[0],v=a-d.pos[1];this._editGeometryOperations.moveVertices([d],m,v,0),r&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(e),t):e.geometry=t);}}_moveRelatedCoordinates(e,t,i,s){const{relatedGraphicIndices:r}=t.attributes;for(const o of r){const r=this.vertexGraphics.getItemAt(o),{pathIndex:n,pointIndex:a}=r.attributes;e[n][a]=[i,s],r.geometry=t.geometry;}return e}_moveSelectedHandleCoordinates(e,t,i,s$1,r){for(const o of this.selectedVertices)if(o!==t){const{pathIndex:t,pointIndex:n,relatedGraphicIndices:a}=o.attributes,h=s(o.geometry,i,s$1,this.view),c=e[t].length-1;e[t][n]=[h.x,h.y],o.geometry=h,r&&(0===n?e[t][c]=[h.x,h.y]:n===c&&(e[t][0]=[h.x,h.y]));for(const i of a){const t=this.vertexGraphics.getItemAt(i),{pathIndex:s,pointIndex:r}=t.attributes;e[s][r]=[h.x,h.y],t.geometry=h;}}return e}_onGraphicPointerOverCallback(e){const t=e.graphic;this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.hover),this._updateHoverCursor(t);}_onGraphicPointerOutCallback(e){const t=e.graphic;this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.default),this.view.cursor="default";}_createVertexFromMidpoint(e){const{_graphicAttributes:t,graphic:i}=this,s=i.geometry;if(t$1(s)||"polygon"!==s.type&&"polyline"!==s.type)return [];const r=s.clone(),o=[],{pathIndex:n,pointIndexStart:a,pointIndexEnd:h}=e.attributes,{x:p,y:l}=e.geometry,d=0===h?a+1:h,m=t$2(r);return m[n].splice(d,0,[p,l]),e.attributes={...t,pathIndex:n,pointIndex:d,relatedGraphicIndices:[]},o.push({coordinates:m[n][d],componentIndex:n,vertexIndex:d}),this.graphic.geometry=r,o}_addToSelection(e){e instanceof g$1&&(e=[e]);for(const t of e)t.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(e)),this._emitSelectEvent(e);}_removeFromSelection(e,i){const{vertices:s}=this.symbols,r=i?s.hover:s.default;e instanceof g$1&&(e=[e]);for(const t of e)this.selectedVertices.splice(this.selectedVertices.indexOf(t),1),this._set("selectedVertices",this.selectedVertices),t.set("symbol",r);this._emitDeselectEvent(e);}_clearSelection(){if(this.selectedVertices.length){const e=this.selectedVertices;for(const t of this.selectedVertices)t.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(e);}}_keyDownHandler(e){e$1.delete.includes(e.key)&&!e.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices);}_removeVertices(e){const i=this.graphic.geometry;if(t$1(i)||"polygon"!==i.type&&"polyline"!==i.type)return;if("polygon"===i.type&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;e instanceof g$1&&(e=[e]);const s=this.graphic.clone(),r=i.clone();let o=t$2(r);const n=[];e instanceof g$1&&(e=[e]);for(const t of e){const{x:e,y:i}=t.geometry;for(let t=0;t<o.length;t++){const s=o[t];for(let r=0;r<s.length;r++){const[a,h]=s[r];e===a&&i===h&&(n.push({coordinates:o[t][r],componentIndex:t,vertexIndex:r}),o[t].splice(Number(r),1));}}}if("polygon"===r.type)o=o.filter((e=>{if(e.length<2)return !1;const[t,i]=e[0],[s,r]=e[e.length-1];return (2!==e.length||t!==s||i!==r)&&(t===s&&i===r||e.push(e[0]),!0)})),r.rings=o;else {for(const e of o)1===e.length&&o.splice(o.indexOf(e),1);r.paths=o;}this.graphic.geometry=r,this.refresh(),this._emitVertexRemoveEvent(e,s,n);}_isVertex(e){return this.vertexGraphics.includes(e)}_isSelected(e){return this._isVertex(e)&&this.selectedVertices.includes(e)}_isMidpoint(e){return this.midpointGraphics.includes(e)}_updateHoverCursor(e){this.view.cursor=this._isMidpoint(e)?"copy":"move";}_emitMoveStartEvent(e,t){const i=new D(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i);}_emitMoveEvent(e,t){const i=new F(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i);}_emitMoveStopEvent(){const{totalDx:e,totalDy:t}=this._activeOperationInfo,i=new z(this.graphic,e,t);this.emit("move-stop",i),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(i);}_emitReshapeStartEvent(e){const t=new A(this.graphic,e,this.selectedVertices);this.emit("reshape-start",t),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(t);}_emitReshapeEvent(e){const t=new U(this.graphic,e,this.selectedVertices);this.emit("reshape",t),this.callbacks.onReshape&&this.callbacks.onReshape(t);}_emitReshapeStopEvent(e){const t=new T(this.graphic,e,this.selectedVertices);this.emit("reshape-stop",t),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(t);}_emitSelectEvent(e){const t=new L(e);this.emit("select",t),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(t);}_emitDeselectEvent(e){const t=new P(e);this.emit("deselect",t),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(t);}_emitVertexAddEvent(e,t,i){const s=new K(e,this.graphic,t,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s);}_emitVertexRemoveEvent(e,t,i){const s=new N(e,this.graphic,t,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s);}_logGeometryTypeError(){s$1.getLogger(this.declaredClass).error(new s$2("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."));}};e$2([d()],J.prototype,"callbacks",void 0),e$2([d()],J.prototype,"enableMidpoints",void 0),e$2([d()],J.prototype,"enableMovement",void 0),e$2([d()],J.prototype,"enableVertices",void 0),e$2([d()],J.prototype,"graphic",void 0),e$2([d({value:!0})],J.prototype,"highlightsEnabled",null),e$2([d()],J.prototype,"layer",void 0),e$2([d({readOnly:!0})],J.prototype,"midpointGraphics",void 0),e$2([d()],J.prototype,"midpointSymbol",void 0),e$2([d({readOnly:!0})],J.prototype,"selectedVertices",void 0),e$2([d()],J.prototype,"snappingManager",void 0),e$2([d({readOnly:!0})],J.prototype,"state",null),e$2([d({value:B})],J.prototype,"symbols",null),e$2([d({readOnly:!0})],J.prototype,"type",void 0),e$2([d({readOnly:!0})],J.prototype,"vertexGraphics",void 0),e$2([d()],J.prototype,"view",void 0),J=e$2([n$1("esri.views.draw.support.Reshape")],J);const Q=J;

export { Q as default };