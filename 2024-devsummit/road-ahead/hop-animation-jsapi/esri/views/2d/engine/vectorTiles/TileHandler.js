// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/workers/workers ./GlyphMosaic ./GlyphSource ./SpriteMosaic ../../tiling/TileKey".split(" "),function(m,u,l,n,v,p,q,r,t){function w(a){return()=>a.abort()}class x{constructor(a,b,c,d){this._layer=a;this._styleRepository=b;this.devicePixelRatio=c;this._sourceDataMaxLOD=d;this._inputSignalEventListener=this._startOptionsInputSignal=this._spriteSourceAbortController=this._connection=this._glyphMosaic=
this._spriteMosaic=null}destroy(){this._connection?.close();this._layer=this._styleRepository=this._connection=null;this._spriteMosaic?.destroy();this._glyphMosaic=this._spriteMosaic=null;this._spriteSourceAbortController=u.abortMaybe(this._spriteSourceAbortController);this._spriteSourcePromise=null;this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener);this._inputSignalEventListener=this._startOptionsInputSignal=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>
this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(a){this._requestSprite(a);var b=this._layer.currentStyleInfo.glyphsUrl;b=new q(b?n.addQueryParameters(b,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new p(1024,1024,b);this._broadcastPromise=v.open("WorkerTileHandler",{client:this,schedule:a.schedule,signal:a.signal}).then(c=>{this._layer&&(this._connection?.close(),this._connection=c,this._layer&&!this._connection.closed&&(c=c.broadcast("setStyle",
{style:this._layer.currentStyleInfo.style,sourceDataMaxLOD:this._sourceDataMaxLOD},a),Promise.all(c).catch(d=>l.throwIfNotAbortError(d))))})}_requestSprite(a){this._spriteSourceAbortController?.abort();const b=new AbortController;this._spriteSourceAbortController=b;const c=a?.signal;this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener);this._startOptionsInputSignal=null;c&&(this._inputSignalEventListener=w(b),c.addEventListener("abort",
this._inputSignalEventListener,{once:!0}));const {signal:d}=b;this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,{...a,signal:d});this._spriteSourcePromise.then(e=>{l.throwIfAbortError(d);this._spriteMosaic=new r(1024,1024,250);this._spriteMosaic.setSpriteSource(e)})}async updateStyle(a){await this._broadcastPromise;return this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",a))}setSpriteSource(a){const b=new r(1024,1024,250);b.setSpriteSource(a);this._spriteMosaic=
b;this._spriteSourcePromise=Promise.resolve(a);this._spriteSourceAbortController=null;return b}async setStyle(a,b,c){await this._broadcastPromise;this._styleRepository=a;this._sourceDataMaxLOD=c;this._requestSprite();a=new q(this._layer.currentStyleInfo.glyphsUrl?n.addQueryParameters(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new p(1024,1024,a);return this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",
{style:b,sourceDataMaxLOD:this._sourceDataMaxLOD}))}async fetchTileData(a,b){a=await this._getRefKeys(a,b);return this._getSourcesData(Object.keys(this._layer.sourceNameToSource),a,b)}async fetchTilePBFs(a){const b=Object.keys(this._layer.sourceNameToSource),c={};a=await this._getRefKeys(a,c);const d=[],e=[];for(let f=0;f<a.length;f++)if(null==a[f].value||null==b[f])e.push(null);else{const k=a[f].value,g=this._getTilePayload(k,b[f],c);g.then(h=>{d.push({...h,key:k})});e.push(g)}return Promise.all(e).then(()=>
d)}async parseTileData(a,b){const c=a&&a.data;if(!c)return null;const {sourceName2DataAndRefKey:d,transferList:e}=c;return 0===Object.keys(d).length?null:this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:a.key.id,sourceName2DataAndRefKey:d,styleLayerUIDs:a.styleLayerUIDs},{...b,transferList:e}))}async getSprites(a){await this._spriteSourcePromise;return this._spriteMosaic.getSpriteItems(a)}getGlyphs(a){return this._glyphMosaic.getGlyphItems(a.font,a.codePoints)}async _getTilePayload(a,
b,c){a=t.pool.acquire(a.id);const d=this._layer.sourceNameToSource[b],{level:e,row:f,col:k}=a;t.pool.release(a);try{return{protobuff:await d.requestTile(e,f,k,c),sourceName:b}}catch(g){if(l.isAbortError(g))throw g;return{protobuff:null,sourceName:b}}}async _getRefKeys(a,b){const c=this._layer.sourceNameToSource,d=[];for(const e in c){const f=c[e].getRefKey(a,b);d.push(f)}return l.eachAlways(d)}_getSourcesData(a,b,c){const d=[];for(let e=0;e<b.length;e++)if(null==b[e].value||null==a[e])d.push(null);
else{const f=this._getTilePayload(b[e].value,a[e],c);d.push(f)}return l.eachAlways(d).then(e=>{const f={},k=[];for(let g=0;g<e.length;g++){const h=e[g].value;h&&h.protobuff&&0<h.protobuff.byteLength&&(f[h.sourceName]={refKey:b[g].value.id,protobuff:h.protobuff},k.push(h.protobuff))}return{sourceName2DataAndRefKey:f,transferList:k}})}}m.TileHandler=x;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});