// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/compilerUtils ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/watchUtils ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../layers/graphics/dehydratedFeatures ../../../../../support/elevationInfoUtils ../../Manipulator3D ../../manipulatorUtils ../manipulatorDragUtils ../manipulatorUtils ../settings ../visualElementUtils ./reshapeUtils ../manipulations/MoveManipulation ../manipulations/moveUtils ../manipulations/MoveXYGraphicManipulation ../../../layers/graphics/GraphicState ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil".split(" "),
function(y,z,r,G,S,H,I,A,J,l,K,q,x,B,C,L,p,t,D,d,M,N,E,O,P,Q,R,u,v){Object.defineProperty(z,"__esModule",{value:!0});y=function(F){function f(a){a=F.call(this,a)||this;a._vertexManipulatorMaterial=p.createManipulatorMaterial(d.settings.colorToVec4(d.settings.reshapeManipulators.vertex.color),d.settings.reshapeManipulators.vertex.renderOccludedFlag);a._vertexManipulatorOutlineMaterial=p.createManipulatorOutlineMaterial(d.settings.colorToVec4(d.settings.reshapeManipulators.vertex.outlineColor),d.settings.reshapeManipulators.vertex.renderOccludedFlag);
a._vertexManipulatorHoverOutlineMaterial=p.createManipulatorOutlineMaterial(d.settings.colorToVec4(d.settings.reshapeManipulators.vertex.hoverOutlineColor),d.settings.reshapeManipulators.vertex.renderOccludedFlag);a._edgeManipulatorMaterial=p.createManipulatorMaterial(d.settings.colorToVec4(d.settings.reshapeManipulators.edge.color),d.settings.reshapeManipulators.edge.renderOccludedFlag);a._edgeManipulatorOutlineMaterial=p.createManipulatorOutlineMaterial(d.settings.colorToVec4(d.settings.reshapeManipulators.edge.outlineColor),
d.settings.reshapeManipulators.edge.renderOccludedFlag);a._selectedManipulatorMaterial=p.createManipulatorMaterial(d.settings.colorToVec4(d.settings.reshapeManipulators.selected.color),d.settings.reshapeManipulators.selected.renderOccludedFlag);a._selectedManipulatorOutlineMaterial=p.createManipulatorOutlineMaterial(d.settings.colorToVec4(d.settings.reshapeManipulators.selected.outlineColor),d.settings.reshapeManipulators.selected.renderOccludedFlag);a._selectedManipulatorHoverOutlineMaterial=p.createManipulatorOutlineMaterial(d.settings.colorToVec4(d.settings.reshapeManipulators.selected.hoverOutlineColor),
d.settings.reshapeManipulators.selected.renderOccludedFlag);a._selectedIndex=0;a._vertexManipulatorGeometry=null;a._vertexManipulatorOutlineGeometry=null;a._edgeManipulatorGeometry=null;a._edgeManipulatorOutlineGeometry=null;a._handles=new A;a._manipulatorHandles=new A;a._manipulatorInfos=[];a._reshapeHelper=null;a._graphicMoveManipulation=null;a._moveManipulation=null;a._numGrabbing=0;a._numDragging=0;a._reshapeEventState=0;a.tool=null;a.outputGeometry=null;a._vertexLaserLineVisualElement=null;a._emitter.target=
null;return a}G(f,F);f.prototype.initialize=function(){var a=this,b=new Q.GraphicState({graphic:this.graphic});this._graphicState=b;this._handles.add([b.watch("displaying",function(b){for(var c=0,e=a._manipulatorInfos;c<e.length;c++)e[c].manipulator.available=b}),d.settings.zManipulator.watch(d.settings.zManipulator.keys(),function(){return a._recreateManipulators()}),d.settings.reshapeManipulators.vertex.watch(["size","outlineSize","collisionPadding"],function(){a._vertexManipulatorGeometry=null;
a._vertexManipulatorOutlineGeometry=null;a._recreateManipulators()}),d.settings.reshapeManipulators.edge.watch(["size","outlineSize","collisionPadding"],function(){a._edgeManipulatorGeometry=null;a._edgeManipulatorOutlineGeometry=null;a._recreateManipulators()}),d.settings.reshapeManipulators.watch("hoverSize",function(){return a._recreateManipulators()}),d.settings.reshapeManipulators.vertex.bindColorMaterial("color",this._vertexManipulatorMaterial),d.settings.reshapeManipulators.vertex.bindColorMaterial("outlineColor",
this._vertexManipulatorOutlineMaterial),d.settings.reshapeManipulators.vertex.bindColorMaterial("hoverOutlineColor",this._vertexManipulatorHoverOutlineMaterial),d.settings.reshapeManipulators.edge.bindColorMaterial("color",this._edgeManipulatorMaterial),d.settings.reshapeManipulators.edge.bindColorMaterial("outlineColor",this._edgeManipulatorOutlineMaterial),d.settings.reshapeManipulators.selected.bindColorMaterial("color",this._selectedManipulatorMaterial),d.settings.reshapeManipulators.selected.bindColorMaterial("outlineColor",
this._selectedManipulatorOutlineMaterial),d.settings.reshapeManipulators.selected.bindColorMaterial("hoverOutlineColor",this._selectedManipulatorHoverOutlineMaterial),this.view.trackGraphicState(b)])};f.prototype.destroy=function(){this._clear();this._handles.destroy()};Object.defineProperty(f.prototype,"inputGeometry",{get:function(){return l.isSome(this._reshapeHelper)?this._reshapeHelper.geometry:null},set:function(a){this._recreateManipulators(a)},enumerable:!0,configurable:!0});Object.defineProperty(f.prototype,
"manipulators",{get:function(){return this.tool.manipulators},enumerable:!0,configurable:!0});Object.defineProperty(f.prototype,"view",{get:function(){return this.tool.view},enumerable:!0,configurable:!0});Object.defineProperty(f.prototype,"graphic",{get:function(){return this.tool.graphic},enumerable:!0,configurable:!0});Object.defineProperty(f.prototype,"enableZ",{get:function(){return this.tool.enableZ},enumerable:!0,configurable:!0});f.prototype.removeSelectedVertices=function(){var a=this._manipulatorInfos.filter(function(a){return a.manipulator.selected&&
"vertex"===a.handle.type});this._removeVertices(a)};f.prototype.manipulatorSelectionChanged=function(){this.emit("manipulators-changed")};f.prototype._clear=function(){this._moveManipulation&&this._moveManipulation.destroy();this._graphicMoveManipulation&&this._graphicMoveManipulation.destroy();this._manipulatorHandles.removeAll();this.manipulators.removeAll();this._manipulatorInfos=[];this._reshapeHelper=this._moveManipulation=this._graphicMoveManipulation=null;this._numDragging=this._numGrabbing=
0};f.prototype._recreateManipulators=function(a){void 0===a&&(a=this.inputGeometry);this._clear();this._reshapeHelper=N.createReshapeHelper(a,"global"===this.view.viewingMode);if(!l.isNone(this._reshapeHelper)){a=C.getGraphicEffectiveElevationInfo(this.graphic);for(var b=0,c=this._reshapeHelper.components;b<c.length;b++){for(var k=c[b],e=0,h=k.vertices;e<h.length;e++)this._createPerVertexManipulator(h[e],a);e=0;for(k=k.edges;e<k.length;e++)this._createPerVertexManipulator(k[e],a)}this._createGraphicMoveManipulators(a)}};
f.prototype._perGraphicManipulatorDragAction=function(a,b){if("end"!==b.action){var c=[],k=this._manipulatorInfos.some(function(a){return"vertex"===a.handle.type&&a.manipulator.selected}),e=1===a&&k;a=l.expect(this._reshapeHelper);for(var h=0,g=this._manipulatorInfos;h<g.length;h++)k=g[h],"vertex"!==k.handle.type||k.manipulator.grabbing||e&&!k.manipulator.selected||(l.expect(a).addDelta(k.handle,b.mapDeltaX,b.mapDeltaY,b.mapDeltaZ),c.push(k.handle.pos),this._updateManipulatorPosition(k));if(0!==c.length){h=
e=0;for(g=this._manipulatorInfos;h<g.length;h++)k=g[h],"vertex"===k.handle.type&&e++;this.outputGeometry=a.commit();c.length===e?(this._updateEventState(1),this.emit("move",{type:"move",dx:b.screenDeltaX,dy:b.screenDeltaY,mover:this.graphic})):(this._updateEventState(2),this.emit("reshape",{type:"reshape",mover:this.graphic}))}}};f.prototype._perVertexManipulatorDragAction=function(a,b){this._updateEventState(2);var c=b.mapDeltaX,k=b.mapDeltaY,e=b.mapDeltaZ;if(c||k||e){b=[];for(var h=0,g=this._manipulatorInfos;h<
g.length;h++){var d=g[h];"vertex"===d.handle.type&&(d.manipulator.selected&&!d.manipulator.grabbing||d===a)&&b.push(d)}h=l.expect(this._reshapeHelper);for(g=0;g<b.length;g++)a=b[g],h.addDelta(a.handle,c,k,e);this.outputGeometry=h.commit();for(c=0;c<b.length;c++)a=b[c],this._updateManipulatorPosition(a);this.emit("reshape",{type:"reshape",mover:this.graphic})}};f.prototype._updateEventState=function(a){if(a===this._reshapeEventState)return!1;switch(a){case 0:if(0!==this._numGrabbing||0!==this._numDragging)return!1;
switch(this._reshapeEventState){case 1:this.emit("move",{type:"move-stop",dx:0,dy:0,mover:this.graphic});break;case 2:this.emit("reshape",{type:"reshape-stop",mover:this.graphic})}break;case 1:switch(this._reshapeEventState){case 0:this.emit("move",{type:"move-start",dx:0,dy:0,mover:this.graphic});break;case 2:this.emit("reshape",{type:"reshape-stop",mover:this.graphic}),this.emit("move",{type:"move-start",dx:0,dy:0,mover:this.graphic})}break;case 2:switch(this._reshapeEventState){case 0:this.emit("reshape",
{type:"reshape-start",mover:this.graphic});break;case 1:this.emit("move",{type:"move-stop",dx:0,dy:0,mover:this.graphic}),this.emit("reshape",{type:"reshape-start",mover:this.graphic})}}var b=this._reshapeEventState!==a;this._reshapeEventState=a;return b};f.prototype._createGraphicMoveManipulators=function(a){var b=this;this._graphicMoveManipulation=new P.MoveXYGraphicManipulation({tool:this.tool,view:this.view,graphicState:this._graphicState});this._manipulatorHandles.add(this._graphicMoveManipulation.createDragPipeline(function(a,
e,c){e.next(function(a){return b._trackNumDragging(a)}).next(function(a){b._perGraphicManipulatorDragAction(0,a)});c.next(b._cancelDragOperation())}));this._graphicMoveManipulation.forEachManipulator(function(a){return b._manipulatorHandles.add([b._watchAndUpdateGrabState(a,!1),a.events.on("immediate-click",function(a){b._manipulatorInfos.some(function(a){return a.manipulator.selected})?b._clearSelection():b.emit("immediate-click");a.stopPropagation()})])});this._moveManipulation=new E.MoveManipulation({tool:this.tool,
view:this.view,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:this.enableZ&&D.canMoveZ(this.graphic),snapToScene:!1,radius:E.MoveManipulation.radiusForSymbol(this.graphic.symbol)});this._moveManipulation.forEachManipulator(function(a){b._handles.add([b._watchAndUpdateGrabState(a,!1),a.events.on("immediate-click",function(c){b._moveManipulation.zManipulation.hasManipulator(a)||b._manipulatorInfos.some(function(a){return a.manipulator.selected})||b.emit("immediate-click");c.stopPropagation()})])});this._moveManipulation.elevationInfo=
{mode:"absolute-height",offset:0};var c=l.expect(this.graphic.geometry).spatialReference;this._handles.add([this._moveManipulation.createDragPipeline(function(a,c,d){c.next(function(a){return b._trackNumDragging(a)}).next(t.addMapDelta()).next(function(a){b._perGraphicManipulatorDragAction(1,a)});d.next(b._cancelDragOperation())},a,c),K.init(this._graphicState,"displaying",function(a){b._moveManipulation.xyManipulation.available=a;b._moveManipulation.xyAxisManipulation.available=!0;b._moveManipulation.zManipulation.available=
a&&b.enableZ&&D.canMoveZ(b.graphic);b._updateMoveManipulationPosition()}),this._graphicState.on("changed",function(){return b._updateMoveManipulationPosition()})]);this._updateMoveManipulationPosition();this._manipulatorHandles.add(M.createVisualElements({view:this.view,graphic:this.graphic,forEachManipulator:function(a){b._graphicMoveManipulation.forEachManipulator(a);for(var c=0,d=b._manipulatorInfos;c<d.length;c++)a(d[c].manipulator,1);b._moveManipulation.forEachManipulator(a)},onManipulatorsChanged:function(a){return b.on("manipulators-changed",
a)}}))};f.prototype._createPerVertexManipulator=function(a,b){var c=this;void 0===b&&(b=C.getGraphicEffectiveElevationInfo(this.graphic));if(l.isNone(this._vertexManipulatorGeometry)||l.isNone(this._vertexManipulatorOutlineGeometry)){var k=d.settings.reshapeManipulators.vertex,e=k.size/2,h=e+k.collisionPadding;this._vertexManipulatorGeometry=new u(v.createSphereGeometry(e/h,16,16),"reshape-manipulator");e=(e+k.outlineSize)/h;this._vertexManipulatorOutlineGeometry=new u(v.createSphereGeometry(e,16,
16),"reshape-manipulator-outline")}if(l.isNone(this._edgeManipulatorGeometry)||l.isNone(this._edgeManipulatorOutlineGeometry))k=d.settings.reshapeManipulators.edge,e=k.size/2,h=e+k.collisionPadding,this._edgeManipulatorGeometry=new u(v.createSphereGeometry(e/h,16,16),"reshape-manipulator"),e=(e+k.outlineSize)/h,this._edgeManipulatorOutlineGeometry=new u(v.createSphereGeometry(e,16,16),"reshape-manipulator-outline");b=new L.Manipulator3D({view:this.view,renderObjects:[{geometry:this._vertexManipulatorGeometry,
material:this._vertexManipulatorMaterial,stateMask:n.Vertex|4},{geometry:this._vertexManipulatorOutlineGeometry,material:this._vertexManipulatorOutlineMaterial,stateMask:n.Vertex|5},{geometry:this._vertexManipulatorOutlineGeometry,material:this._vertexManipulatorHoverOutlineMaterial,stateMask:n.Vertex|6},{geometry:this._edgeManipulatorGeometry,material:this._vertexManipulatorMaterial,stateMask:n.Edge|6},{geometry:this._vertexManipulatorOutlineGeometry,material:this._vertexManipulatorHoverOutlineMaterial,
stateMask:n.Edge|6},{geometry:this._edgeManipulatorGeometry,material:this._edgeManipulatorMaterial,stateMask:n.Edge|5},{geometry:this._edgeManipulatorOutlineGeometry,material:this._edgeManipulatorOutlineMaterial,stateMask:n.Edge|5},{geometry:this._vertexManipulatorGeometry,material:this._selectedManipulatorMaterial,stateMask:8},{geometry:this._vertexManipulatorOutlineGeometry,material:this._selectedManipulatorOutlineMaterial,stateMask:9},{geometry:this._vertexManipulatorOutlineGeometry,material:this._selectedManipulatorHoverOutlineMaterial,
stateMask:10}],elevationInfo:b,focusMultiplier:1,touchMultiplier:1,available:!(!this.graphic.visible||!this.graphic.layer.visible)});this._setTypeSpecificManipulatorSettings(b,a);var g="edge"===a.type?{manipulator:b,handle:a,locationUpdateHandle:null,type:"edge",selectedIndex:0}:{manipulator:b,handle:a,type:"vertex",selectedIndex:0};this._manipulatorInfos.push(g);this.manipulators.add(b);this._updateManipulatorPosition(g);"edge"===g.type&&(a=this._getManipulatorInfoFromHandle(g.handle.v0).manipulator.events.on("location-update",
function(){return c._updateManipulatorPosition(g)}),e=this._getManipulatorInfoFromHandle(g.handle.v1).manipulator.events.on("location-update",function(){return c._updateManipulatorPosition(g)}),g.locationUpdateHandle=J.handlesGroup([a,e]),this._manipulatorHandles.add(g.locationUpdateHandle,b));this._manipulatorHandles.add(this._watchAndUpdateGrabState(b,!0),b);a=t.createManipulatorDragEventPipeline(b,function(a,b,e){b.next(function(a){return c._trackNumDragging(a)}).next(function(a){"edge"===g.handle.type&&
c._splitEdgeManipulator(g);return a}).next(t.screenToMapXYForGraphicAtLocation(c.view,c.graphic,a.elevationAlignedLocation,a.location.spatialReference)).next(t.addMapDelta()).next(function(a){"vertex"===g.type?c._perVertexManipulatorDragAction(g,a):console.error("drag operation on non-vertex manipulator not allowed")});e.next(c._cancelDragOperation())});this._manipulatorHandles.add(a,b);this._manipulatorHandles.add([b.events.on("immediate-click",function(a){return c._manipulatorClickCallback(a,g)}),
b.events.on("select-changed",function(){g.selectedIndex=++c._selectedIndex;c._updateMoveManipulationPosition()})]);this.emit("manipulators-changed");return b};f.prototype._trackNumDragging=function(a){switch(a.action){case "start":this._numDragging++;break;case "end":this._numDragging--}return a};f.prototype._cancelDragOperation=function(){var a=this,b=l.isSome(this._reshapeHelper)?this._reshapeHelper.geometry.clone():null;return function(){a._numDragging--;a.inputGeometry=b;a.outputGeometry=b;switch(a._reshapeEventState){case 1:a.emit("move",
{type:"move",dx:0,dy:0,mover:a.graphic});break;case 2:a.emit("reshape",{type:"reshape",mover:a.graphic})}a._updateEventState(0)}};f.prototype._setTypeSpecificManipulatorSettings=function(a,b){switch(b.type){case "vertex":a.state=n.Vertex;a.selectable=!0;a.cursor="move";a.collisionPriority=2;a.radius=d.settings.reshapeManipulators.vertex.size/2+d.settings.reshapeManipulators.vertex.collisionPadding;break;case "edge":a.state=n.Edge;a.selectable=!1;a.cursor="copy";a.collisionPriority=-1;a.radius=d.settings.reshapeManipulators.edge.size/
2+d.settings.reshapeManipulators.edge.collisionPadding;break;default:H.neverReached(b)}};f.prototype._watchAndUpdateGrabState=function(a,b){var c=this;return a.events.on("grab-changed",function(d){"start"===d.action?(b&&c._updateSelection(a),c._numGrabbing++):(c._numGrabbing--,c._updateEventState(0));c._moveManipulation.interactive=!c._numGrabbing})};f.prototype._clearSelection=function(){for(var a=0,b=this._manipulatorInfos;a<b.length;a++){var c=b[a];c.manipulator.grabbing||(c.manipulator.selected=
!1)}};f.prototype._updateSelection=function(a){a.grabbing&&!a.selected&&a.selectable&&(this._clearSelection(),a.selected=!0,this.emit("manipulators-changed"))};f.prototype._removeManipulator=function(a){a&&(this._manipulatorHandles.remove(a.manipulator),this._manipulatorInfos.splice(this._manipulatorInfos.indexOf(a),1),this.manipulators.remove(a.manipulator),this.emit("manipulators-changed"))};f.prototype._getManipulatorInfoFromHandle=function(a){if(a)for(var b=0,c=this._manipulatorInfos;b<c.length;b++){var d=
c[b];if(a===d.handle)return d}return null};f.prototype._updateManipulatorPosition=function(a){if(a){var b=l.expect(this._reshapeHelper);if("vertex"===a.handle.type)a.manipulator.location=b.getVertexPositionAsPoint(a.handle,w),a.manipulator.grabbing&&l.isSome(this._vertexLaserLineVisualElement)&&(this._vertexLaserLineVisualElement.visualElement.intersectsWorldUpAtLocation=a.manipulator.renderLocation);else if("edge"===a.handle.type){var c=this._getManipulatorInfoFromHandle(a.handle.v0).manipulator.elevationAlignedLocation,
d=this._getManipulatorInfoFromHandle(a.handle.v1).manipulator.elevationAlignedLocation;a.manipulator.elevationAlignedLocation=B.makeDehydratedPoint(c.x+.5*(d.x-c.x),c.y+.5*(d.y-c.y),c.hasZ&&d.hasZ?c.z+.5*(d.z-c.z):void 0,b.geometry.spatialReference)}}};f.prototype._splitEdgeManipulator=function(a){var b=l.expect(this._reshapeHelper),c=b.splitEdge(a.handle,.5);a.locationUpdateHandle.remove();a.locationUpdateHandle=void 0;a.handle=c;a.type="vertex";this._setTypeSpecificManipulatorSettings(a.manipulator,
a.handle);c.left&&this._createPerVertexManipulator(c.left);c.right&&this._createPerVertexManipulator(c.right);this.outputGeometry=b.commit();this._updateManipulatorPosition(a);this._updateSelection(a.manipulator);a=b.coordinateHelper.toArray(a.handle.unnormalizedPos);this.emit("vertex-add",{type:"vertex-add",vertices:[{coordinates:a,componentIndex:l.expect(c.component.index),vertexIndex:l.expect(c.index)}],added:a})};f.prototype._updateMoveManipulationPosition=function(){var a=this,b=R.sv3d.get();
x.vec3.set(b,0,0,0);for(var c=0,d=!1,e=null,h=null,g=0,f=this._manipulatorInfos;g<f.length;g++){var m=f[g];if("vertex"===m.handle.type)if(m.manipulator.selected)if(c++,x.vec3.add(b,b,m.manipulator.renderLocation),l.isNone(e)||m.selectedIndex>e.selectedIndex)h=e,e=m;else{if(l.isNone(h)||m.selectedIndex>h.selectedIndex)h=m}else d=!0}this._moveManipulation.xyAxisManipulation.orthogonalAvailable=!0;this._moveManipulation.xyAxisManipulation.available=!0;0!==c?(g=0,l.isSome(e)&&(f=e.handle.unnormalizedPos,
m=l.isSome(h)?h.handle.unnormalizedPos:e.handle.left&&e.handle.left.v0?e.handle.left.v0.unnormalizedPos:null,e=!l.isSome(h)&&e.handle.right&&e.handle.right.v1?e.handle.right.v1.unnormalizedPos:null,m&&e?this._moveManipulation.xyAxisManipulation.available=!1:m?g=Math.atan2(f[1]-m[1],f[0]-m[0])+Math.PI/2:e&&(g=Math.atan2(e[1]-f[1],e[0]-f[0])+Math.PI/2)),this._moveManipulation.xyAxisManipulation.orthogonalAvailable=1!==c,this._moveManipulation.angle=g):this._moveManipulation.angleDeferred=function(){return O.primaryShapeOrientation(l.expect(a.graphic.geometry))};
0!==c&&d?(x.vec3.scale(b,b,1/c),w.spatialReference=l.expect(this._reshapeHelper).geometry.spatialReference,this.view.renderCoordsHelper.fromRenderCoords(b,w),this._moveManipulation.elevationAlignedLocation=w):p.placeAtGraphic(this.view,this._moveManipulation,this.graphic)};f.prototype._removeVertices=function(a){for(var b=[],c=l.expect(this._reshapeHelper),d=0;d<a.length;d++){var e=a[d];"vertex"===e.handle.type&&c.canRemoveVertex(e.handle)&&(b.push(e.handle),this._removeManipulator(e),this._removeManipulator(this._getManipulatorInfoFromHandle(e.handle.left)),
this._removeManipulator(this._getManipulatorInfoFromHandle(e.handle.right)),(e=c.removeVertex(e.handle))&&this._createPerVertexManipulator(e))}0<b.length&&(a=b.map(function(a){return{coordinates:c.coordinateHelper.toArray(a.unnormalizedPos),componentIndex:l.expect(a.component.index),vertexIndex:l.expect(a.index)}}),this.outputGeometry=c.commit(),b=this._updateEventState(2),this.emit("vertex-remove",{type:"vertex-remove",removed:a.map(function(a){return a.coordinates}),vertices:a}),b&&this._updateEventState(0),
this._updateMoveManipulationPosition())};f.prototype._manipulatorClickCallback=function(a,b){a.shiftKey||this._clearSelection();"vertex"===b.handle.type&&(b.manipulator.selected=!b.manipulator.selected);"vertex"===b.handle.type&&2===a.button&&this._removeVertices([b]);"edge"===b.handle.type&&0===a.button&&this._splitEdgeManipulator(b);a.stopPropagation()};r([q.property({constructOnly:!0})],f.prototype,"tool",void 0);r([q.property()],f.prototype,"inputGeometry",null);r([q.property()],f.prototype,"outputGeometry",
void 0);return f=r([q.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.ReshapeOperation")],f)}(q.declared(I.EventedAccessor));z.ReshapeOperation=y;var w=B.makeDehydratedPoint(0,0,null,null),n;(function(d){d.Vertex=16;d.Edge=32})(n||(n={}))});