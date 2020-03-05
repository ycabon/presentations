// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./TileAgent","./tileUtils"],function(c,e,f,g){Object.defineProperty(e,"__esModule",{value:!0});c=function(){function a(a,b){this._pool=b;this.waitingAgents=[];this.requestAbort=this.requestPromise=this.loadingAgent=this._upsampleInfo=this.tilemapRequestAbort=this.tilemapRequestPromise=this.tilemap=this.data=null;this.pendingUpdates=0;this.elevationBounds=void 0;this.init(a)}a.prototype.init=function(a){this.waitingAgents.length=0;this.data=null;this.dataInvalidated=this.dataMissing=
!1;this.tilemapRequestAbort=this.tilemapRequestPromise=this.tilemap=null;this._unsetUpsampleInfo();this.requestAbort=this.requestPromise=this.loadingAgent=null;this.pendingUpdates=0;0===a&&(this.elevationBounds=null)};a.prototype.invalidateSourceData=function(){this.tilemap=null;this.dataInvalidated=!0;this.dataMissing=!1;this._unsetUpsampleInfo()};a.prototype.abortRequest=function(){this.requestPromise&&(this.requestAbort.abort(),this.requestAbort=this.requestPromise=null)};a.prototype.abortTilemapRequest=
function(){this.tilemapRequestPromise&&(this.tilemapRequestAbort.abort(),this.tilemapRequestAbort=this.tilemapRequestPromise=null)};a.prototype.dispose=function(){this.loadingAgent&&this.loadingAgent!==f.TILE_AGENT_DONE&&this.loadingAgent.dispose();this.loadingAgent=null;this.abortRequest();this.abortTilemapRequest();this.tilemap=null;this._unsetUpsampleInfo();this.pendingUpdates=0;this.disposeData()};a.prototype.disposeData=function(){!this.data||this.data instanceof HTMLImageElement||this.data instanceof
HTMLCanvasElement||this.data.release();this.data=null};Object.defineProperty(a.prototype,"upsampleInfo",{get:function(){return this._upsampleInfo},enumerable:!0,configurable:!0});a.prototype._unsetUpsampleInfo=function(){this._upsampleInfo&&(this._upsampleInfo.tile.unrefMapData(),this._pool.release(this._upsampleInfo),this._upsampleInfo=null)};a.prototype.setUpsampleInfo=function(a,b){if(a===b||null==b)this._unsetUpsampleInfo();else{if(null==this._upsampleInfo)this._upsampleInfo=this._pool.acquire();
else{if(this._upsampleInfo.tile===b)return;this._upsampleInfo.tile.unrefMapData()}b.refMapData();g.computeUpsampleInfo(a,b,this._upsampleInfo)}};a.makeEmptyLayerInfo=function(c,b,d){return d?(d.init(c),d):new a(c,b)};return a}();e.TilePerLayerInfo=c});