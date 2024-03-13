// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/has ../../../../core/Identifiable ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/jsonUtils ../../../../layers/support/FieldsIndex ../../../../symbols/cim/CIMSymbolHelper ../../../../symbols/cim/OverrideHelper ../../../../symbols/support/defaults ../../engine/webgl/definitions ../../engine/webgl/FeatureTile ../../engine/webgl/mesh/MeshData ../../engine/webgl/mesh/factories/ResourceProxy ../../engine/webgl/shaderGraph/techniques/createGraphicSymbolMeshSchemas ../../engine/webgl/shaderGraph/techniques/mesh/createMeshWriter ../../engine/webgl/shaderGraph/techniques/mesh/instanceIdUtils ../features/schema/processor/StorageSchema ../features/support/AttributeStore ../features/support/ComputedAttributeStorage ../features/support/FeatureMetadata ../features/support/GraphicsReader ./GraphicStore ../support/FeatureCommandQueue ../support/UpdateTracking2D".split(" "),
function(g,f,l,w,x,y,z,h,T,U,A,B,p,C,u,D,t,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){class m{static getOrCreate(a,b,c){let d=b.get(a.id);d||(d=new m(a,c),b.set(a.id,d));return d}static fromItems(a,b,c){a=new m(a,c);a.addedOrModified.push(...b);return a}constructor(a,b){this.tile=a;this.metadata=b;this.addedOrModified=[];this.removed=[]}get reader(){this._reader||(this._reader=P.GraphicsReader.from(this.addedOrModified,this.tile,this.metadata));return this._reader}}f=class extends w.IdentifiableMixin(f){constructor(a){super(a);
this._attached=!1;this._tiles=new Map;this._controller=new AbortController;this._hashToSymbolInfo=new Map;this._lastCleanup=performance.now();this._cleanupRequired=!0;this.lastUpdateId=-1;this.renderer=null;this._updateTracking=new S.UpdateTracking2D({debugName:"GraphicsView2D"});this.updateRequested=!1;this.defaultPointSymbolEnabled=!0;this._commandQueue=new R({process:b=>{switch(b.type){case "processed-edit":throw Error("InternalError: Unsupported command");case "update":return this._update()}}});
this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy();this.renderer=this.view=null;this._set("graphics",null);this._controller.abort();this._graphicStore.clear();this._attributeStore=null;this._hashToSymbolInfo.clear();this._updateTracking.destroy();this._commandQueue.destroy()}_initAttributeStore(){this._storage=new N.ComputedAttributeStorage({spatialReference:this.view.spatialReference,fields:new C});this._attributeStore=new M.AttributeStore({type:"local",
initialize:b=>Promise.resolve(this.container.attributeView.initialize(b)),update:async b=>{l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:b});const c=this.container.attributeView.requestUpdate(b);this.container.requestRender();await c;l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:b})},render:()=>this.container.requestRender()});const a=L.createStorageSchema(null,
[]);this._attributeStore.update(a,this._storage);this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore();this._metadata=O.GraphicsMetadata.create(this.view.spatialReference);this._resourceProxy=new H.ResourceProxy({fetch:a=>Promise.all(a.map(b=>this.view.stage.textureManager.rasterizeItem(b))),fetchDictionary:a=>{throw Error("InternalError: Graphics do not support Dictionary requests");}});this.addHandles([z.watch(()=>this._effectiveRenderer,()=>
this.requestUpdate()),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{this.addHandles([this.graphics.on("change",()=>this._commandQueue.push({type:"update"}))]);this._graphicStore=new Q(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore);this._attached=!0;this.requestUpdate();this._commandQueue.push({type:"update"})})]);this._updateTracking.addUpdateTracking("CommandQueue",
this._commandQueue.updateTracking);this._updateTracking.addUpdateTracking("AttributeStore",this._attributeStore.updateTracking);this._onTileUpdate({added:this.view.graphicsTileStore.tiles,removed:[]})}get _effectiveRenderer(){return"function"===typeof this.renderer?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const a=!this._attached||this._updateTracking.updating;l("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${a}\n  -> attaching ${!this._attached}\n  -> updateTracking ${this._updateTracking.updating}`);
return a}hitTest(a){if(!this.view||this.view.suspended)return[];const {resolution:b,rotation:c}=this.view.state,d=new Set(this._graphicStore.hitTest(a.x,a.y,2,b,c));return this.graphics.items.filter(e=>d.has(e.uid))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback());this.notifyChange("updating")}processUpdate(a){this.updateRequested&&(this.updateRequested=!1,this.update(a))}viewChange(){this.requestUpdate()}setHighlight(a){const b=[];for(const {objectId:c,
highlightFlags:d}of a)a=this._graphicStore.getItem(c)?.displayId,b.push({objectId:c,highlightFlags:d,displayId:a});this._attributeStore.setHighlight(b)}graphicUpdateHandler(a){this._commandQueue.push({type:"update"})}update(a){this.updateRequested=!1;this._attached&&this._graphicStore.updateLevel(a.state.resolution)}async _update(){try{l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);const a=await this._graphicStore.update(this.graphics,c=>this._getSymbolForGraphic(c),
c=>this._ensureSymbolResource(c));a.removed.length&&(this._cleanupRequired=!0);l("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,a);const b=this._createTileMessages(a);await this._fetchResources(b);this._write(b)}catch(a){}this._cleanupSharedResources()}_createTileMessages(a){const b=new Map;for(var c of a.added){var d=this.view.graphicsTileStore.getIntersectingTiles(c.bounds);for(const e of d)m.getOrCreate(e,b,this._metadata).addedOrModified.push(c)}for(const e of a.updated){c=
this.view.graphicsTileStore.getIntersectingTiles(e.prevBounds);d=this.view.graphicsTileStore.getIntersectingTiles(e.bounds);for(const k of c)m.getOrCreate(k,b,this._metadata).removed.push(e.displayId);for(const k of d)m.getOrCreate(k,b,this._metadata).addedOrModified.push(e)}for(const e of a.removed){a=this.view.graphicsTileStore.getIntersectingTiles(e.bounds);for(const k of a)m.getOrCreate(k,b,this._metadata).removed.push(e.displayId)}return Array.from(b.values())}async _fetchResources(a){for(const {tile:b,
reader:c}of a){l("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${b.id}] GraphicsView fetchResources`,a);const d=c.getCursor();for(;d.next();)for(const e of d.getMeshWriters())e.enqueueRequest(this._resourceProxy,d,b.arcadeEvaluationOptions)}await this._resourceProxy.fetchEnqueuedResources()}_write(a){for(const b of a){l("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${b.tile.id}] GraphicsView write`,b);a=this._writeMeshes(b);let c=this._tiles.get(b.tile.key);c||=
this._createFeatureTile(b.tile.key);l("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${b.tile.id}] GraphicsView onTileData`,b);this.container.onTileData(c,{type:"update",modify:a,remove:b.removed,end:!1});this.container.requestRender()}}_writeMeshes(a){const b=new G.MeshData(a.tile.id),c=a.reader.getCursor();for(;c.next();){b.entityStart(c.getDisplayId(),c.getZOrder());for(const d of c.getMeshWriters())d.write(b,this._resourceProxy,c,a.tile.arcadeEvaluationOptions,a.tile.level);
this._setFilterState(c.getItem());b.entityEnd()}this._attributeStore.sendUpdates();return{...b.serialize().message,tileId:a.tile.id}}_setFilterState(a){const b=a.displayId,c=this._attributeStore.getHighlightFlags(a.objectId);this._attributeStore.setData(b,0,0,c|(a.visible?E.filterFlag0:0))}_getSymbolForGraphic(a){return null!=a.symbol?a.symbol:null!=this._effectiveRenderer?this._effectiveRenderer.getSymbol(a):this._getNullSymbol(a)}async _ensureSymbolResource(a){if(a.symbol){var b=await this._getSymbolInfo(a.symbol);
if(b){var c=b.linearCIM.filter(d=>"text"===d.type);0<c.length?(c=await this._getTextResources(a,c),a.symbolResource={symbolInfo:b,textInfo:c}):a.symbolResource={symbolInfo:b}}}}_getSymbolInfo(a){const b=a.hash();this._hashToSymbolInfo.has(b)||this._hashToSymbolInfo.set(b,this._createSymbolInfo(b,a).catch(c=>null));return this._hashToSymbolInfo.get(b)}async _createSymbolInfo(a,b){const c=await this._convertToCIMSymbol(b),d=await this._createLinearCIM(c);if("text"===b.type)for(const e of d)"text"===
e.type&&(e.lineWidth=b.lineWidth);b=await this._createMeshWriters(c,d);return{hash:a,cimSymbol:c,linearCIM:d,meshWriters:b}}async _convertToCIMSymbol(a){a=u.symbolToCIM(a);return"web-style"===a.type?(await a.fetchCIMSymbol()).data:a}async _createLinearCIM(a){await Promise.all(u.CIMSymbolHelper.fetchResources(a.symbol,this._cimResourceManager,[]));return this.view.stage.cimAnalyzer.analyzeSymbolReference(a,!1)}async _createMeshWriters(a,b){y.throwIfAborted(this._controller.signal);a=await I.createGraphicSymbolMeshSchemas(a,
b,this.container.instanceStore);return Promise.all(a.map(c=>J.createMeshWriter(this._storage,this._resourceProxy,c.meshWriterName,K.castStrictInstanceId(c.id),c.options,{tileInfo:this.view.featuresTilingScheme.tileInfo},c.optionalAttributes)))}_onTileUpdate(a){if(a.added&&0<a.added.length)for(const b of a.added)this._updateTracking.addPromise(this._addTile(b));if(a.removed&&0<a.removed.length)for(const b of a.removed)this._removeTile(b.key)}_createFeatureTile(a){var b=this.view.featuresTilingScheme.getTileBounds(B.create(),
a);const c=this.view.featuresTilingScheme.getTileResolution(a.level);b=new F.FeatureTile(a,c,b[0],b[3]);this._tiles.set(a,b);this.container.addChild(b);return b}async _addTile(a){if(this._attached){var b=this._graphicStore.queryItems(a);if(b.length){var c=this._createFeatureTile(a.key);a=m.fromItems(a,b,this._metadata);await this._fetchResources([a]);a=this._writeMeshes(a);this._attributeStore.sendUpdates();c.onMessage({type:"append",append:a,clear:!1,end:!0})}}}_removeTile(a){if(this._tiles.has(a)){var b=
this._tiles.get(a);this.container.removeChild(b);b.destroy();this._tiles.delete(a)}}_getNullSymbol(a){a=a.geometry;return p.isPolyline(a)?t.errorPolylineSymbol2D:p.isPolygon(a)||p.isExtent(a)?t.errorPolygonSymbol2D:this.defaultPointSymbolEnabled?t.errorPointSymbol2D:null}async _getTextResources(a,b){var c=[];const d=[];for(var e=0;e<b.length;e++){const q=b[e],{resource:n,overrides:v}=q.textRasterizationParam;if(0<v?.length){var k=D.OverrideHelper.resolveSymbolOverrides({type:"CIMSymbolReference",
primitiveOverrides:v,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:n.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:n.symbol,textString:n.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},a,this.view.spatialReference,null,p.getJsonType(a.projectedGeometry),null,null);k.then(r=>{({textString:r}=r.symbolLayers[0].markerGraphics[0]);d.push({type:"cim-rasterization-info",
resource:{type:"text",textString:r||"",font:n.font}});q.text=n.textString=r||""});c.push(k)}else d.push({type:"cim-rasterization-info",resource:n})}0<c.length&&await Promise.all(c);a=d.map(q=>this.view.stage.textureManager.rasterizeItem(q));a=await Promise.all(a);x.assertIsSome(a);c=new Map;for(e=0;e<b.length;e++)k=b[e],c.set(k.textRasterizationParam.resource.symbol,{text:k.text,glyphMosaicItems:a[e]});return c}_cleanupSharedResources(){if(this._cleanupRequired){var a=performance.now();if(!(5E3>a-
this._lastCleanup)){this._cleanupRequired=!1;this._lastCleanup=a;a=new Set;for(var b of this._graphicStore.items())a.add(b.symbolResource?.symbolInfo.hash);b=new Set(this._hashToSymbolInfo.keys());for(const c of b.values())a.has(c)||this._hashToSymbolInfo.delete(c)}}}};g.__decorate([h.property()],f.prototype,"_effectiveRenderer",null);g.__decorate([h.property({constructOnly:!0})],f.prototype,"layerId",void 0);g.__decorate([h.property({constructOnly:!0})],f.prototype,"requestUpdateCallback",void 0);
g.__decorate([h.property()],f.prototype,"container",void 0);g.__decorate([h.property({constructOnly:!0})],f.prototype,"graphics",void 0);g.__decorate([h.property()],f.prototype,"renderer",void 0);g.__decorate([h.property()],f.prototype,"_updateTracking",void 0);g.__decorate([h.property()],f.prototype,"updating",null);g.__decorate([h.property()],f.prototype,"view",void 0);g.__decorate([h.property()],f.prototype,"updateRequested",void 0);g.__decorate([h.property()],f.prototype,"defaultPointSymbolEnabled",
void 0);return f=g.__decorate([A.subclass("esri.views.2d.layers.support.GraphicsView2D")],f)});