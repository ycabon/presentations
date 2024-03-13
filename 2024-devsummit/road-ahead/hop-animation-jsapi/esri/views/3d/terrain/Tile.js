// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../core/maybe ../../../core/ObjectPool ../../../core/libs/gl-matrix-2/math/vec2 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../core/libs/gl-matrix-2/math/common ../../../geometry/ellipsoidUtils ../../../geometry/support/aaBoundingRect ../../../chunks/sphere ../../../layers/support/layerUtils ../../2d/engine/vectorTiles/VectorTile ../support/StreamDataLoader ./ElevationBounds ./ElevationTileAgent ./interfaces ./ITile ./LayerClass ./MapTileAgent ./RasterTile ./TerrainConst ./terrainUtils ./TileAgent ./TilePerLayerInfo ./TileTexture ./TileUpdate ./tileUtils".split(" "),
function(p,X,Y,N,C,Z,h,w,aa,ba,D,x,O,E,ca,P,Q,y,m,q,R,da,F,g,u,G,ea,k,H){function A(a){a.dispose();a instanceof Q.ElevationTileAgent?I.release(a):a instanceof R.MapTileAgent&&J.release(a)}function S(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]}function T(a,b,c){return null==a||null==b||b===a?!1:a.level>=b.level?U(a,b,c):U(b,a,g.oppositeCorner(c))}function U(a,b,c){g.internalAssert(a.level>=b.level);var d=g.isWestCorner(c),e=g.isNorthCorner(c),f=a.extent;c=b.extent;var r=[d?f[0]:f[2],e?f[3]:f[1]];
const n=[d?c[2]:c[0],e?c[1]:c[3]];d=1E-5*(f[2]-f[0]);e=g.almostEquals(r[0],n[0],d)||a.surface.isGlobal&&g.almostEquals(r[0],-n[0],d);r=g.almostEquals(r[1],n[1],d);if(e&&r)return!0;if(a.level===b.level||!e&&!r)return g.internalAssert(!1),!1;e?(a=f[1],f=f[3],c=c[1]-d<=a&&a<=f&&f<=c[3]+d):(a=f[0],f=f[2],c=c[0]-d<=a&&a<=f&&f<=c[2]+d);g.internalAssert(c);return c}class fa{constructor(){this._lij=[0,0,0];this._children=[null,null,null,null];this._pendingUpdates=0;this.renderData=null;this._dirty=!0;this._previouslyRendered=
!1;this.extent=D.create();this._elevationBounds=Z.create();this.layerInfo=[[],[]];this.extentInRadians=D.create();this.centerAtSeaLevel=w.create();this._center=[w.create(),x.create(),w.create()];this.up=w.unitZ();this._intersectsClippingArea=this._isWithinClippingArea=!0;this._maxTesselation=0;this._usedMemory=null;this.extentMidY=this.extentMidX=this._curvatureHeight=this._edgeLen2=this._edgeLen=this.renderOrder=this.screenDepth=this._mapDataRefCount=this._mapTileMemoryInternal=0;this.distanceToPOI=
-1;this._lastPOI=w.create();this.unmergableChildCount=this.maxLevelDeltaNeighborCount=0}get lij(){return this._lij}static prune(){J.prune(0);I.prune(0);G.TilePerLayerInfo.prune()}get _isCached(){return!this.isLeaf&&0>=this._mapDataRefCount}get maxTesselation(){return this._maxTesselation}get isWithinClippingArea(){return this._isWithinClippingArea}get intersectsClippingArea(){return this._intersectsClippingArea}get clippingArea(){return this._clippingArea}get parent(){return this._parent}get children(){return this._children}get surface(){return this._surface}get elevationBounds(){return this._elevationBounds}get level(){return this._lij[0]}get key(){return`${this._lij[0]}/${this._lij[1]}/${this._lij[2]}`}get edgeLen(){return this._edgeLen}get radius(){return this._center[p.CenterPosition.MIDDLE][3]}get visible(){this._dirty&&
this.computeVisibility();return this._visible}get frustumVisibility(){this._dirty&&this.computeVisibility();return this._frustumVisibility}computeVisibility(){this._dirty=!1;var a=this.parent?.frustumVisibility??m.TileFrustumVisibility.INTERSECTS;this._frustumVisibility=a===m.TileFrustumVisibility.INSIDE?m.TileFrustumVisibility.INSIDE:a===m.TileFrustumVisibility.OUTSIDE?m.TileFrustumVisibility.OUTSIDE:this._calculateFrustumVisibilityStatus(this.surface.frustum);a=this._frustumVisibility!==m.TileFrustumVisibility.OUTSIDE&&
this._intersectsClippingArea;a!==this._visible&&(this._visible=a,this._surface.emit("tiles-visibility-changed"),this._surface.renderer.setDirty(),this.updateAgentSuspension())}get loadable(){return this.visible||this._surface.view.state.fixedContentCamera}get rendered(){const a=!!this.renderData;a!==this._previouslyRendered&&(this._surface.emit("tiles-visibility-changed"),this._previouslyRendered=a,this._surface.renderer.setDirty());return a}init(a,b,c,d,e){this._lij[0]=a;this._lij[1]=b;this._lij[2]=
c;this.ellipsoid=ba.getReferenceEllipsoid(e.tilingScheme.spatialReference);e.tilingScheme.getExtent(a,b,c,this.extent);e.tilingScheme.convertExtentToRadians(this.extent,this.extentInRadians);this.extentMidX=.5*(this.extent[0]+this.extent[2]);this.extentMidY=.5*(this.extent[1]+this.extent[3]);this._intersectsClippingArea=this._isWithinClippingArea=!0;this._clippingArea=null;this._mapDataRefCount=0;e.upsampleMapCache.pop(this.key);this._edgeLen2=this._edgeLen=0;this._center[p.CenterPosition.MIDDLE][3]=
0;this.elevationLevel=a;d&&d.elevationBounds?C.copy(this._elevationBounds,d.elevationBounds):C.set(this._elevationBounds,0,0);this._pendingUpdates=0;this.renderData=null;this.screenDepth=0;this._previouslyRendered=this._visible=!1;this._parent=d;this.unsetChildren();this._surface=e;this.updateVisibility();this.unmergableChildCount=this.maxLevelDeltaNeighborCount=0;for(const f of q.LayerClasses){a=e.numLayers(f);b=this.layerInfo[f];for(const r of b)r.release();b.length=a;for(c=0;c<a;c++)b[c]=G.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool),
f===q.LayerClass.ELEVATION&&this.findElevationBoundsForLayer(c,-1)}this.computeElevationBounds();this._maxTesselation=Math.min(e.tilingScheme.pixelSize,F.maxPatchTesselation)}dispose(){g.weakAssert(!this.renderData,"tile.renderData was not unloaded");this._surface.upsampleMapCache.pop(this.key);for(var a of q.LayerClasses){for(const b of this.layerInfo[a])b.release();this.layerInfo[a].length=0}this._parent=null;for(a=0;4>a;++a)this._children[a]=null;this._surface=null;this.setMemoryDirty()}refMapData(){++this._mapDataRefCount;
this._isCached||this._surface.upsampleMapCache.pop(this.key)}unrefMapData(){--this._mapDataRefCount;if(this._isCached){this.setMemoryDirty();const a=this._cachedMemory;0<a&&this._surface.upsampleMapCache.put(this.key,this,a)}}setMemoryDirty(){this._usedMemory=null}get usedMemory(){return this._ensureUsedMemory()+(this._isCached?0:this._mapTileMemoryInternal)}get _cachedMemory(){return this._isCached?this._mapTileMemory:0}get _mapTileMemory(){this._ensureUsedMemory();return this.layerInfo[q.LayerClass.MAP].reduce((a,
b)=>a+(b instanceof E.VectorTile?b.usedMemory/b.referenced:0),this._mapTileMemoryInternal)}get _cpuImageMemorySize(){const a=this._surface.tilingScheme.pixelSize;return a*a*4}_ensureUsedMemory(){if(null!=this._usedMemory)return this._usedMemory;this._usedMemory=this._baseUsedMemory;let a=this._mapTileMemoryInternal=0;for(var {data:b}of this.layerInfo[q.LayerClass.MAP])b instanceof E.VectorTile?a+=this._getTerrainDataMemory(b):this._mapTileMemoryInternal+=this._getTerrainDataMemory(b);b=this._cpuImageMemorySize;
for(const c of this.layerInfo[q.LayerClass.ELEVATION])this._usedMemory+=c.data?b:0;this.renderData&&(this._usedMemory+=this.renderData.estimatedGeometryMemoryUsage,this._mapTileMemoryInternal+=this.renderData.texture?.usedMemory??0);this._isCached&&this._surface.upsampleMapCache.updateSize(this.key,this,this._mapTileMemoryInternal+a);return this._usedMemory}getUsedMemoryForLayer(a,b){b=this.layerInfo[a][b];return b?.data?a===q.LayerClass.MAP?this._isCached?0:this._getTerrainDataMemory(b.data):a===
q.LayerClass.ELEVATION?this._cpuImageMemorySize:0:0}_getTerrainDataMemory(a){return a instanceof ea?a.texture.usedMemory:a instanceof HTMLImageElement||a instanceof ca.ImageWithType?this._cpuImageMemorySize:a instanceof da.RasterTile?a.memoryUsage:a instanceof E.VectorTile?a.usedMemory/a.referenced:0}updateScreenDepth(a){var b=this._center[p.CenterPosition.MIDDLE];const c=b[0],d=b[1];b=b[2];const e=a[2]*c+a[6]*d+a[10]*b+a[14];this.screenDepth=0>e?0:e/(a[3]*c+a[7]*d+a[11]*b+a[15])}shouldSplit(a,b,
c){if(!this.visible||a.frustum&&(!this._intersectsClippingArea||this._calculateFrustumVisibilityStatus(a.frustum)===m.TileFrustumVisibility.OUTSIDE))return k.TileUpdate.NONE;const d=this.level;h.subtract(B,x.getCenter(this._center[p.CenterPosition.MIDDLE]),b);var e=h.squaredLength(B),f=B;let r=x.getCenter(this._center[p.CenterPosition.MIDDLE]);h.subtract(K,this._center[p.CenterPosition.TOP],b);var n=h.squaredLength(K);n<e&&(e=n,f=K,r=this._center[p.CenterPosition.TOP]);h.subtract(L,this._center[p.CenterPosition.BOTTOM],
b);n=h.squaredLength(L);n<e&&(e=n,f=L,r=this._center[p.CenterPosition.BOTTOM]);if(this._edgeLen2>e&&d<a.maxLod)return k.TileUpdate.SPLIT;e=Math.sqrt(e);const l=this._edgeLen/(a.fovX*e*2),v=()=>{if(d<a.maxLod)return this.elevationLevel=d,k.TileUpdate.NONE;const V=d+Math.ceil(-Math.log2(a.relativeWidthLimit/l));return V!==this.elevationLevel?(this.elevationLevel=V,k.TileUpdate.ELEVATION):k.TileUpdate.NONE},z=null!=c?c-d:Infinity;if(.5>=z)return v();const M=h.dot(this.up,B);n=this._elevationBounds[1]-
this._elevationBounds[0];const W=n/this.edgeLen;if(a.aboveGround&&0<M&&.001>W&&0<M/e-Math.sin(this._curvatureHeight/(this.edgeLen*Math.SQRT1_2)*Math.PI)-W)return k.TileUpdate.NONE;c=null!=c?3-Math.min(z,2):1;if(l*c<a.relativeWidthLimit||d>=a.maxLod)return v();if(7>d)return k.TileUpdate.SPLIT;h.scale(t,this.up,M);h.subtract(t,t,f);f=h.squaredLength(t);if(f<=this.radius*this.radius)return k.TileUpdate.SPLIT;h.scale(t,t,this.radius/Math.sqrt(f));h.add(t,t,r);h.subtract(t,b,t);return Math.min(1,(Math.abs(h.dot(t,
this.up))+.5*n+this._curvatureHeight)/h.length(t))*(this._edgeLen/(a.fovY*e*2))*c<.1/a.angledSplitBias*a.relativeHeightLimit?k.TileUpdate.NONE:k.TileUpdate.SPLIT}setChildren(a,b,c,d){g.weakAssert(!!(a&&b&&c&&d),"Null child passed");const e=this._children;e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e}unsetChildren(){this._children[0]=null;this._children[1]=null;this._children[2]=null;this._children[3]=null}get isLoaded(){return this.renderData?.hasGeometry??!1}load(){this.refMapData();for(const a of q.LayerClasses)this._createOrUpdateAgents(0,
a);this.surface.renderer.loadTile(this)}unload(a){a.unloadTile(this);for(const b of q.LayerClasses){a=this.layerInfo[b];for(const c of a)c.loadingAgent&&c.loadingAgent!==u.tileAgentDone&&(A(c.loadingAgent),c.loadingAgent=null),c.pendingUpdates=0}this.resetPendingUpdate(k.TileUpdate.GEOMETRY);this.resetPendingUpdate(k.TileUpdate.TEXTURE_NOFADING);this.resetPendingUpdate(k.TileUpdate.TEXTURE_FADING);this.unrefMapData()}unloadMapData(){const a=this.layerInfo[q.LayerClass.MAP];for(const b of a)b.loadingAgent&&
b.loadingAgent!==u.tileAgentDone&&(A(b.loadingAgent),b.loadingAgent=null),b.pendingUpdates=0;this.renderData&&this.renderData.releaseTexture();this.setMemoryDirty()}updateClippingStatus(a){if(D.equals(a,this._clippingArea))return!1;var b=this._intersectsClippingArea;const c=this._isWithinClippingArea;null!=a?(this._intersectsClippingArea=this.intersectsExtent(a),this._isWithinClippingArea=this._isWithinExtent(a)):this._isWithinClippingArea=this._intersectsClippingArea=!0;this._clippingArea=a;this.updateVisibility();
a=c&&this._isWithinClippingArea;b=!c&&!b&&!this._isWithinClippingArea&&!this._intersectsClippingArea;!this.renderData||a||b||this.setPendingUpdate(k.TileUpdate.GEOMETRY);return!0}updateVisibility(){this._dirty=!0;this._surface.setTileTreeDirty()}getLayerInfo(a,b){return this.layerInfo[b][a]}hasLayerData(a,b){a=this.layerInfo[b][a];return!(!a?.data||a.dataInvalidated)}get updating(){if(this.hasPendingUpdates)return!0;for(const a of q.LayerClasses){const b=this.layerInfo[a];for(const c of b)if(c.loadingAgent&&
c.loadingAgent!==u.tileAgentDone&&c.loadingAgent.updating)return!0}return!1}_isSuspended(a){return this.hasPendingUpdate(k.TileUpdate.SPLIT)?!0:a===q.LayerClass.ELEVATION?!1:!this.loadable}get hasPendingUpdates(){return 0!==this._pendingUpdates}hasPendingUpdate(a){return(this._pendingUpdates&a)===a}setPendingUpdate(a){const b=this._pendingUpdates;this._pendingUpdates|=a;a===k.TileUpdate.SPLIT||a===k.TileUpdate.MERGE?this._surface.setTileTreeDirty():this._surface.requestUpdate();return b!==this._pendingUpdates}resetPendingUpdate(a){return this.hasPendingUpdate(a)?
(this._pendingUpdates&=~a,!0):!1}requestLayerData(a,b,c){const d=this.layerInfo[b][a];if(d.waitingAgents.has(c))return console.warn("agent already requested this piece of map data (tile %s, agent tile %s, layer: %d/%d)",this._lij.toString(),c.tile.lij.toString(),b,a),!0;d.waitingAgents.push(c);if(d.data&&!d.dataInvalidated)return console.warn("agent requested existing data (tile %s, agent tile %s, layer: %d/%d)",this._lij.toString(),c.tile.lij.toString(),b,a),c.dataArrived(this,d.data&&"type"in d.data&&
"vector-tile"===d.data.type),!0;if(d.requestPromise)return!0;Y.abortMaybe(d.requestAbort);d.requestAbort=new AbortController;const e=this._surface.requestTileData(this,a,b,d.requestAbort);if(!e)return d.requestAbort=null,!1;a=()=>{d.requestPromise===e&&(d.requestPromise=null,d.requestAbort=null)};d.requestPromise=e;e.then(a,a);return!0}get isLeaf(){return null==this._children[0]}hasLij(a){return this._lij[0]===a[0]&&this._lij[1]===a[1]&&this._lij[2]===a[2]}findByLij(a){if(this.hasLij(a))return this;
const b=this._children;return b[0]?b[0].findByLij(a)||b[1].findByLij(a)||b[2].findByLij(a)||b[3].findByLij(a):null}distanceToSquared(a){return h.squaredLength(h.subtract(t,x.getCenter(this._center[p.CenterPosition.MIDDLE]),a))}containsPoint(a){const b=this.extent;return a[0]>=b[0]&&a[1]>=b[1]&&a[0]<=b[2]&&a[1]<=b[3]}containsPointXY(a,b){const c=this.extent;return a>=c[0]&&b>=c[1]&&a<=c[2]&&b<=c[3]}unrequestLayerData(a,b,c){a=this.layerInfo[b][a];b=a.waitingAgents;c=null!=b.removeUnordered(c);g.weakAssert(c,
"agent has not requested this piece of map data");1>b.length&&(a.abortRequest(),this.setMemoryDirty())}dataArrived(a,b,c){const d=null!=c&&"type"in c&&"vector-tile"===c.type;a=this.layerInfo[b][a];a.data=c;a.dataInvalidated=!1;a.waitingAgents.forAll(e=>e.dataArrived(this,d));a.waitingAgents.clear();this.setMemoryDirty()}dataMissing(a,b,c){c.notInTilemap||console.error(`Tile ${this._lij.toString()} layer ${b}/${a} error ${c}`);a=this.layerInfo[b][a];a.dataMissing=!0;a.waitingAgents.forAll(d=>d.dataMissing());
a.waitingAgents.clear();this.setMemoryDirty()}updateRenderData(a,b,c){c&&this.forEachLoadedNeighbor(d=>d.updateRenderData(a,b));switch(a){case q.LayerClass.MAP:return this._updateTexture(b);case q.LayerClass.ELEVATION:return this._updateGeometry()}}_updateTexture(a){this.renderData&&(this.resetPendingUpdate(a===y.TextureUpdate.FADING?k.TileUpdate.TEXTURE_NOFADING:k.TileUpdate.TEXTURE_FADING),this.setPendingUpdate(a===y.TextureUpdate.FADING?k.TileUpdate.TEXTURE_FADING:k.TileUpdate.TEXTURE_NOFADING))}_updateGeometry(){this.setPendingUpdate(k.TileUpdate.GEOMETRY);
for(const a of this.layerInfo[q.LayerClass.ELEVATION])a.pendingUpdates|=k.TileUpdate.GEOMETRY}invalidateLayerData(a,b){this.layerInfo[b][a].invalidateSourceData();this.restartAgents(b)}computeElevationBounds(){const a=this._elevationBounds,b=a[0],c=a[1];C.set(a,Infinity,-Infinity);const d=this.layerInfo[q.LayerClass.ELEVATION];let e=!0;for(const f of d)null!=f.elevationBounds&&(a[0]=Math.min(a[0],f.elevationBounds.min),a[1]=Math.max(a[1],f.elevationBounds.max),f.elevationBounds.hasNoDataValues||(e=
!1));e&&(a[0]=Math.min(a[0],0),a[1]=Math.max(a[1],0));if(b!==a[0]||c!==a[1])this.updateRadiusAndCenter(),this._surface.setTileTreeDirty()}_updateCenter(){const a=this._elevationBounds,b=this._center;h.scale(t,this.up,.5*(a[0]+a[1]));h.add(x.getCenter(b[p.CenterPosition.MIDDLE]),this.centerAtSeaLevel,t);h.scale(t,this.up,a[0]);h.add(b[p.CenterPosition.TOP],this.centerAtSeaLevel,t);h.scale(t,this.up,a[1]);h.add(b[p.CenterPosition.BOTTOM],this.centerAtSeaLevel,t)}findElevationBoundsForLayer(a,b){const c=
this.layerInfo[q.LayerClass.ELEVATION][a],d=F.getElevationDesiredResolutionLevel(this.level),e=Math.max(this.elevationLevel-d,0);var f=c.elevationBounds;if(!(null!=f&&f.level>=b&&f.level<=e)&&(b=this._surface.layerViewByIndex(a,q.LayerClass.ELEVATION),b=g.getLayerWithExtentRange(b),H.fallsWithinLayer(this,b,!1))){b=ha;f=!1;var r=c.data;if(r&&r.level<=e)a=c.data,b.min=a.samplerData.data.minValue,b.max=a.samplerData.data.maxValue,b.hasNoDataValues=a.samplerData.data.hasNoDataValues,b.level=this.level,
f=!0;else{r=0;let n,l;for(let v=this._parent;v&&(!l||r<d)&&!(r=this.elevationLevel-v.level,n=l||n,l=v.layerInfo[q.LayerClass.ELEVATION][a].data,!l&&n&&v.level<=e);v=v.parent);if(l=l||n)l.computeMinMaxValue(this._lij[0],this._lij[1],this._lij[2],b),Infinity!==b.min&&(b.level=l.level,f=!0)}f&&(null==c.elevationBounds&&(c.elevationBounds=new P.ElevationBounds),c.elevationBounds.copyFrom(b))}}modifyLayers(a,b,c){c=this.layerInfo[c];for(var d of c)d.loadingAgent&&d.loadingAgent!==u.tileAgentDone&&(A(d.loadingAgent),
d.loadingAgent=null),d.waitingAgents.clear();for(d=0;d<c.length;++d)void 0===a[d]&&c[d].release();a=Array(...c);d=b.length;c.length=d;for(let e=0;e<d;e++){const f=b[e];c[e]=-1<f?a[f]:G.TilePerLayerInfo.acquire(this._surface.upsampleInfoPool)}this.setMemoryDirty()}restartAgents(a){this.renderData&&(this._createOrUpdateAgents(0,a),this.updateRenderData(a,y.TextureUpdate.FADING))}updateAgents(a){if(this.renderData){const b=this.layerInfo[a];for(const c of b)c.loadingAgent===u.tileAgentDone&&(c.loadingAgent=
null);this._createOrUpdateAgents(0,a)}}updateAgentSuspension(){for(const a of q.LayerClasses){const b=this._isSuspended(a);for(const c of this.layerInfo[a])c.loadingAgent&&c.loadingAgent!==u.tileAgentDone&&(c.loadingAgent.setSuspension(b),c.loadingAgent===u.tileAgentDone&&this.updateRenderData(a,y.TextureUpdate.FADING))}}removeLayerAgent(a,b){a=this.layerInfo[b][a];a.loadingAgent&&a.loadingAgent!==u.tileAgentDone&&a.loadingAgent.dispose();a.loadingAgent=null}agentDone(a,b){const c=this.layerInfo[b][a];
c.loadingAgent=u.tileAgentDone;c.data||null!=c.upsampleInfo||this._createOrUpdateAgents(a+1,b)}_hasBlendableAncestor(a){return"normal"!==a.blendMode||O.isGroupLayer(a.parent)&&this._hasBlendableAncestor(a.parent)}_hasBlendModes(a,b,c){for(;a<b;++a){const d=this._surface.layerViewByIndex(a,c);if(g.isBlendableLayerView(d)&&"normal"!==d?.layer?.blendMode||O.isGroupLayer(d?.layer?.parent)&&this._hasBlendableAncestor(d?.layer?.parent))return!0}return!1}_createOrUpdateAgents(a,b){const c=this.layerInfo[b];
if(0!==c.length){var d=this._isSuspended(b);for(let n=a;n<c.length;++n){const l=c[n];var e=!1;const v=this._surface.layerViewByIndex(n,b);var f=g.getLayerWithExtentRange(v);if(l.loadingAgent)H.fallsWithinLayer(this,f,!1)?(l.loadingAgent!==u.tileAgentDone&&l.loadingAgent.setSuspension(d),l.loadingAgent!==u.tileAgentDone&&(e=l.loadingAgent.update())):l.dispose();else if(H.fallsWithinLayer(this,f,!1)){e=n;f=b;var r=d;const z=f===q.LayerClass.ELEVATION?I.acquire():J.acquire();z.init(this,e,f,r);l.loadingAgent=
z;(e=l.loadingAgent.startLoading())?l.loadingAgent===u.tileAgentDone&&this.setPendingUpdate(k.TileUpdate.GEOMETRY):(A(l.loadingAgent),l.loadingAgent=u.tileAgentDone)}l.loadingAgent===u.tileAgentDone&&this.updateRenderData(b,y.TextureUpdate.FADING);if(!this._hasBlendModes(a,c.length,b)&&e&&v.isOpaque)break}}}_isWithinExtent(a){const b=this.extent;return b[0]>=a[0]&&a[2]>=b[2]&&b[1]>=a[1]&&a[3]>=b[3]}intersectsExtent(a){const b=this.extent;return b[2]>=a[0]&&a[2]>=b[0]&&b[3]>=a[1]&&a[3]>=b[1]}getElevationVerticesPerSide(a){var b=
this.elevationLevel-this.level;a=Math.max(this.level-a,F.getElevationDesiredResolutionLevel(this.level)-b);a=X.clamp((this.maxTesselation>>a)+1,2,this.maxTesselation+1);b=this.getDefaultVerticesPerSide();return Math.max(a,b)}get test(){return{cachedMemory:this._cachedMemory}}_findLIJ(a,b){if(!a)return null;var c=this.surface.rootTiles;if(null!=c)for(var d of c){{c=d.lij;const e=a[0]-c[0];c=0>e?!1:a[1]>>e===c[1]&&a[2]>>e===c[2]}if(c){for(c=a[0]-d.level-1;0<=c&&!d.isLeaf&&!b(d);)d=d.children[2*(a[1]>>
c&1)+(a[2]>>c&1)],c--;return b(d)?d:null}}return null}findNeighborTile(a,b){const c=this._lij;return(a=this.getNeighborLIJ(c,a))?S(c,a)?b(this)?this:null:this._findLIJ(a,b):null}findCorner(a,b){a=a===m.NeighborIndex.NORTH_EAST?1:a===m.NeighborIndex.NORTH_WEST?0:a===m.NeighborIndex.SOUTH_WEST?2:3;let c=this;for(;c.children[0]&&(!b||!b(c));)c=c.children[a];return c}findNeighborCornerTileExact(a,b){return this.findNeighborTile(a,c=>b(c)||c.level===this.level)?.findCorner(g.oppositeCorner(a),b)||null}forAllSubtreeOnSide(a,
b){const c=a===m.NeighborIndex.NORTH?[0,1]:a===m.NeighborIndex.NORTH_EAST?[1]:a===m.NeighborIndex.EAST?[1,3]:a===m.NeighborIndex.SOUTH_EAST?[3]:a===m.NeighborIndex.SOUTH?[2,3]:a===m.NeighborIndex.SOUTH_WEST?[2]:a===m.NeighborIndex.WEST?[0,2]:[0],d=e=>{const f=e.children;!b(e)&&f[0]&&c.forEach(r=>d(f[r]))};d(this)}getNeighborEdgeStartVertexIndex(a,b){if(!b)return 0;var c=this.level-b.level;g.internalAssert(!g.enableTerrainInternalChecks||0<=c);if(0===c)return 0;c=2**c;var d=(a=1===(a&1))?0:1;b=b.lij[d+
1]*c;d=this._lij[d+1];const e=d-b;a=a?c-1-e:e;g.enableTerrainInternalChecks&&(g.internalAssert(b<=d&&d<b+c),g.internalAssert(0<=a&&a<c));return a}forEachLoadedNeighbor(a){const b=this.level,c=d=>d.level===b||d.isLoaded;g.neighborEdgeIndices.forEach(d=>{const e=this.findNeighborTile(d,c);null!=e&&e!==this&&e.forAllSubtreeOnSide(g.oppositeEdge(d),f=>f.isLoaded?(a(f,d),!0):!1)});g.neighborCornerIndices.forEach(d=>{const e=this.findNeighborTile(d,c)?.findCorner(g.oppositeCorner(d),f=>f.isLoaded);g.internalAssert(!e||
T(this,e,d));e?.isLoaded&&a(e,d)})}getNeighborLIJ(a,b){const c=g.isNorth(b)?-1:g.isSouth(b)?1:0;b=g.isWest(b)?-1:g.isEast(b)?1:0;a=[a[0],a[1]+c,a[2]+b];return 0>a[1]?null:this.surface.isGlobal?this.wrapLIJ(a):0>a[2]?null:a}wrapLIJ(a){return!a||0>a[1]||a[1]>=2**a[0]?null:this.surface.wrapEastWest(a)}get westNeighborWestExtent(){return this.extent[0]*(this.isWestEnd?-1:1)}get eastNeighborEastExtent(){return this.extent[2]*(this.isEastEnd?-1:1)}get isEastEnd(){return this._lij[2]===this.surface.lijEastEnd(this.level)-
1}get isWestEnd(){return 0===this._lij[2]}get isNorthEnd(){return 0===this._lij[1]}get isSouthEnd(){const a=this.surface.extent?.[1]??null;return null!=a&&this.extent[1]+aa.getEpsilon()>=a}checkGeometryWaterproofness(){g.enableWaterproofnessTests&&(g.internalAssert(this.isLoaded),this.renderData?.checkGeometryWaterproofness())}shouldHaveNeighbor(a){const b=this.extent,c=this.surface.rootTilesExtent,d=.25*(b[2]-b[0]);if(g.isNorth(a)&&b[3]+d>=c[3]||g.isSouth(a)&&b[1]-d<=c[1])return!1;const e=this.surface.isGlobal;
return!e&&g.isWest(a)&&b[0]-d<=c[0]||!e&&g.isEast(a)&&b[2]+d>=c[2]?!1:!0}updateDistanceToPOI(a){var b=this._lastPOI;if(!(0<=this.distanceToPOI&&b[0]===a[0]&&b[1]===a[1]&&b[2]===a[2])){h.copy(this._lastPOI,a);var c=this._center[p.CenterPosition.MIDDLE];b=a[0]-c[0];var d=a[1]-c[1];a=a[2]-c[2];this.distanceToPOI=b*b+d*d+a*a}}}const J=new N(R.MapTileAgent),I=new N(Q.ElevationTileAgent),ha=new P.ElevationBounds;p.CenterPosition=void 0;(function(a){a[a.TOP=0]="TOP";a[a.MIDDLE=1]="MIDDLE";a[a.BOTTOM=2]=
"BOTTOM"})(p.CenterPosition||(p.CenterPosition={}));const B=w.create(),K=w.create(),L=w.create(),t=w.create();p.Tile=fa;p.isCornerNeighbor=T;p.isEdgeNeighbor=function(a,b,c){if(null==a||null==b)return!1;if(0===a.level&&0===b.level&&(a.isEastEnd&&b.isWestEnd&&c===m.NeighborIndex.EAST||a.isWestEnd&&b.isEastEnd&&c===m.NeighborIndex.WEST))return!0;const d=Math.max(1E-6*(a.extent[2]-a.extent[0]),1);switch(c){case m.NeighborIndex.NORTH:return g.almostEquals(a.extent[3],b.extent[1],d);case m.NeighborIndex.SOUTH:return g.almostEquals(a.extent[1],
b.extent[3],d);case m.NeighborIndex.EAST:return g.almostEquals(a.extent[2],b.extent[0],d)||g.almostEquals(a.extent[2],-b.extent[0],d);case m.NeighborIndex.WEST:return g.almostEquals(a.extent[0],b.extent[2],d)||g.almostEquals(a.extent[0],-b.extent[2],d)}};p.lijEquals=S;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});