// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred dojo/has dojo/promise/all ../../request ../../core/LRUCache ../../core/promiseUtils ../../core/requireUtils ../../core/workers ../2d/tiling/TileKey ./GeometryUtils ./GlyphMosaic ./GlyphSource ./SpriteMosaic ./SpriteSource ./TileIndex ./VectorTileDisplayObject module".split(" "),function(u,F,v,G,p,q,w,e,x,y,k,r,z,A,B,C,l,D,E){var m=new w(10),h=new Map;return function(){function c(a,b,f,d,c){void 0===d&&(d=!1);this.devicePixelRatio=f;this.allowUpdates=d;this._tileIndex=
this._connection=this._glyphMosaic=this._spriteMosaic=null;this._updateQueue=new Map;this._ongoingRequests=new Map;this._vectorTileLayer=a;this._styleRepository=a.styleRepository;this._requestUpdate=b}c.prototype.destroy=function(){this.stop();this._vectorTileLayer=this._requestUpdate=this._styleRepository=null;this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null);this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null)};Object.defineProperty(c.prototype,"initialized",
{get:function(){return this._broadcastPromise&&this._broadcastPromise.isFulfilled()},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"spriteMosaic",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"glyphMosaic",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"ongoingRequestCount",{get:function(){return this._ongoingRequests.size},enumerable:!0,configurable:!0});
c.prototype.start=function(){var a=this;this.stop();var b=this._styleRepository,f=new C(b.sprite,this.devicePixelRatio);f.devicePixelRatio=this.devicePixelRatio;var d=f.load().then(function(){a._spriteMosaic=new B(1024,1024,250);a._spriteMosaic.setSpriteSource(f)}),c=new A(b.glyphs);this._glyphMosaic=new z(1024,1024,c);var g=this._fetchTileMap(this._vectorTileLayer.tileIndexUrl),e=y.open(x.getAbsMid("./WorkerTileHandler",u,E),{client:this}).then(function(b){a._connection=b}),t=new v(function(a){d.isFulfilled()||
d.cancel();g.isFulfilled()||g.cancel();e.isFulfilled()||e.cancel()});p([d,g,e]).then(function(d){p(a._connection.broadcast("setLayers",b.styleJSON)).then(function(){t.resolve()})});return this._broadcastPromise=t.promise};c.prototype.stop=function(){this._broadcastPromise&&!this._broadcastPromise.isFulfilled()&&this._broadcastPromise.cancel();this._updateQueue.forEach(function(a){return a.cancel()});this._ongoingRequests.forEach(function(a){return a.cancel()});this._connection&&(this._connection.close(),
this._connection=null)};c.prototype.updateTile=function(a,b){var c=this;if(!this.allowUpdates)return e.resolve(null);if(!this._broadcastPromise.isFulfilled()||!this._connection)return e.reject(Error("no connection"));b=Math.round(r.degToByte(b.state.rotation));if(a.rotation===b)return e.resolve(null);var d,n=a.key;this._updateQueue.has(n.id)&&(d=this._updateQueue.get(n.id),d.cancel());a.rotation=b;d=this._connection.invoke("update",{key:a.id,rotation:b},null,{client:a.client}).then(function(b){a.updateSymbolData(b);
return b}).always(function(){c._updateQueue["delete"](n.id)});this._updateQueue.set(a.id,d);return d};c.prototype.getVectorTileWithLRC=function(a,b,c,d){var f=this;void 0===d&&(d=0);var e=new k(a,b,c,0);return this.getRefKey(e).then(function(a){var b=new D(e,a,f._vectorTileLayer.tileInfo,f._styleRepository,0);if(a)return f.getTileData(b.key,0).then(function(a){b.setData(a.tileData,a.client);return b});b.setData(null,null);return b})};c.prototype.getTileData=function(a,b){var c=this;return this._broadcastPromise.isFulfilled()&&
this._connection?this.getRefKey(a).then(function(d){if(!d)return e.resolve(null);var f=Math.round(r.degToByte(b));return c._getTileData(c._connection,a,d,f).then(function(a){return a&&a.tileData?{tileData:a.tileData,client:a.client}:e.reject("No data")})}):e.reject(Error("no connection"))};c.prototype.getRefKey=function(a){return this._tileIndex?this._tileIndex.dataKey(a):e.resolve(a)};c.prototype.fetchTileData=function(a){a=k.pool.acquire(a);var b=this._vectorTileLayer.getTileUrl(a.level,a.row,a.col);
k.pool.release(a);return q(b,{callbackParamName:"callback",responseType:"array-buffer"}).then(function(a){return{result:a.data,transferList:[a.data]}})};c.prototype.getSprites=function(a){return this._spriteMosaic.getSpriteItems(a)};c.prototype.getGlyphs=function(a){return this._glyphMosaic.getGlyphItems(a.tileID,a.font,a.codePoints)};c.prototype.getStyleRepository=function(){return this._styleRepository};c.prototype.getTileIndex=function(){return this._tileIndex};c.prototype._getTileData=function(a,
b,c,d){var f=this,g={client:null};if(a=this._ongoingRequests.get(b.id))return a;a=this._connection.invoke("getTile",{key:b.id,refKey:c.id,rotation:d,cacheTile:this.allowUpdates},null,g).then(function(a){f._ongoingRequests["delete"](b.id);return{tileData:a,client:g.client}}).catch(function(a){f._ongoingRequests["delete"](b.id);f._connection.invoke("destructTileData",b.id,null,g);return e.reject(a)});this._ongoingRequests.set(b.id,a);return a};c.prototype._fetchTileMap=function(a){var b=this;if(this._vectorTileLayer.capabilities.supportsTileMapIndexing&&
this._vectorTileLayer.tilemapCache)return this._tileIndex=new l(this._vectorTileLayer.tilemapCache),e.resolve();if(!a)return e.resolve();if(m.has(a))return this._tileIndex=m.use(a),e.resolve();if(h.has(a))return h.get(a).then(function(a){b._tileIndex=new l(a.data)});var c=q(a,{callbackParamName:"callback",responseType:"json"});c.then(function(c){b._tileIndex=new l(c.data);h["delete"](a);m.insert(a,b._tileIndex)});h.set(a,c);return c};return c}()});