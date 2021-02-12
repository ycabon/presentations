import { j as o, i as i$1, q as e, r as i$2, c8 as y, dG as p$1, z as t, ar as p$2, aS as y$1, bE as d, bI as f, t as t$1, a as u, T, hQ as g } from './index.js';
import { n } from './shapingUtils-dcbb2c5b.js';
import { s, m, t as t$2, L } from './WGLMeshFactory-d3a1727d.js';
import { C } from './ComputedAttributeStorage-c1444bb2.js';
import { p } from './BaseProcessor-e4f71dfa.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-ea321f1e.js';
import './RenderingContext-d31ba1e0.js';
import './_commonjsHelpers-34398bae.js';
import './MaterialKey-54202b75.js';
import './visualVariablesUtils-f62b50fc.js';
import './Rect-49fd2d8c.js';
import './VertexBuffer-4c2c0271.js';
import './CircularArray-99513797.js';
import './TurboLine-21fa90f1.js';
import './GeometryUtils-83dd86c8.js';
import './quantizationUtils-c0611e45.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './FeatureSetReader-4c248b92.js';
import './centroid-6105d00e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i{constructor(i,s=2){this._bucketSize=i,this._rowsLength=o/i,this._colsLength=o/i,this._elementsPerBucket=s,this._grid=this._initGrid();}checkOverlap(t,i){const s=Math.floor(t/this._bucketSize),e=Math.floor(i/this._bucketSize);return s<0||s>=this._rowsLength||e<0||e>=this._colsLength||this._grid[e*this._colsLength+s]>=this._elementsPerBucket}markUsed(t,i){const s=Math.floor(t/this._bucketSize),e=Math.floor(i/this._bucketSize);this._grid[e*this._colsLength+s]+=1;}reset(){this._grid=this._initGrid();}_initGrid(){return new Uint8Array(this._rowsLength*this._colsLength)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
i$1.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let S=class extends p{constructor(){super(...arguments),this.type="symbol";}destroy(){}get supportsTileUpdates(){return !0}async update(e,r){const s=r.schema.processors[0];if("symbol"!==s.type)return;const o=y(this._schema,s);p$1(o,"mesh")&&(t("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",o),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=s,this._factory=this._createFactory(s),this._factory.update(s,this.tileStore.tileScheme.tileInfo));}onTileData(e,t,r){return p$2(r),this._onTileData(e,t,r)}onTileError(e,t,r){const s=r.signal,o={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",o,{signal:s})}_createFactory(e){const{geometryType:t,objectIdField:r,fields:s$1}=this.service,o={geometryType:t,fields:s$1,spatialReference:y$1.fromJSON(this.spatialReference)},i=new L(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),!1);return this._store=i,this._matcher=s(e.mesh.matcher,i,o),new m(t,r,i)}async _onTileData(e,t,o){const{type:i,addOrUpdate:a,remove:n,end:l}=t;if(!a){const t={type:i,addOrUpdate:null,remove:n,clear:!1,end:l};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},o)}const m=this._processFeatures(e,a,o),p=o.signal;try{const t=await m,o=d(t,(e=>e.message)),a=d(t,(e=>e.transferList))||[],d$1={type:i,addOrUpdate:o,remove:n,clear:!1,end:l},u={transferList:f(a)||[],signal:p};return p$2(u),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:d$1},u)}catch(t){this._handleError(e,t,o);}}async _processFeatures(e,t,r){if(t$1(t)||!t.hasFeatures)return null;const s={transform:e.transform,hasZ:!1,hasM:!1},i=this._factory,a={viewingMode:"",scale:e.scale},n=await this._matcher;p$2(r);const l=this._getLabelInfos(e,t);return await i.analyze(t.getCursor(),n,s,a),p$2(r),this._writeFeatureSet(e,t,s,l,i)}_writeFeatureSet(e,t,r,s,o){const a=o.createMeshData(t.getApproximateSize()),n={viewingMode:"",scale:e.scale},c=t.getCursor();for(;c.next();)try{const t=c.getDisplayId(),l=u(s)?s.get(t):null;o.writeCursor(a,c,r,n,e.level,l);}catch(e){}return this._encodeDisplayData(a)}_encodeDisplayData(e){const t={},r=new Array;return e.encode(t,r),{message:t,transferList:r}}_handleError(e,t,r){if(!T(t)){const s={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}}_shouldDiscard(e,t){switch(this.service.geometryType){case"esriGeometryPoint":{const r=t.readLegacyPointGeometry();return !r||e.checkOverlap(r.x,r.y)}case"esriGeometryPolygon":{const r=t.readLegacyCentroid();return !r||e.checkOverlap(r.x,r.y)}default:return !1}}_markUsed(e,t){switch(this.service.geometryType){case"esriGeometryPoint":{const{x:r,y:s}=t.readLegacyPointGeometry();return e.markUsed(r,s)}case"esriGeometryPolygon":{const{x:r,y:s}=t.readLegacyCentroid();return e.markUsed(r,s)}}}_getLabelInfos(e,t){const s=this._schema.mesh.labels,i$1=d(s,(t=>t.filter((t=>function(e,t){return (!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}(t,e.scale)))));if(t$1(i$1)||0===i$1.length)return null;const a=new Map,n$1=new i(g),c=t.getCursor();for(;c.next();){const e=c.getDisplayId();if(this._shouldDiscard(n$1,c)){a.has(e)||a.set(e,null);continue}let t=!1;const r=[],s=C(e),o=s&&1!==c.readAttribute("cluster_count")?"aggregate":"feature";for(const a of i$1){if(a.target!==o)continue;const i=c.getStorage(),n$1=s&&"feature"===o?i.getComputedStringAtIndex(c.readAttribute("referenceId"),a.fieldIndex):i.getComputedStringAtIndex(e,a.fieldIndex);if(!n$1)continue;const l=n(n$1.toString()),m=l[0],p=l[1];this._store.getMosaicItem(a.symbol,t$2(m)).then((e=>{r[a.index]={glyphs:e.glyphMosaicItems,rtl:p,index:a.index};})),t=!0;}a.set(e,r),t&&this._markUsed(n$1,c);}return a}};S=e([i$2("esri.views.2d.layers.features.processors.SymbolProcessor")],S);var x=S;

export default x;
