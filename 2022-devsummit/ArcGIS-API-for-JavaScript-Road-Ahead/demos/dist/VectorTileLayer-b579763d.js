import { n, c5 as U$1, cm as C, U as U$2, s as s$1, b3 as y$1, gH as Q, cK as D$1, bz as M, A as t$1, hv as gt, hw as M$1, h7 as et, z as h$2, cH as z, hx as ht, hy as w$1, h6 as i, cq as x$1, fK as t$2, fL as s$2, ci as p$1, cj as l$1, ck as u, cl as l$2, cp as b, cO as e, aM as r$2, x as b$1, aU as a$1, q as j$2, j as e$1, y as y$2, aP as k, bi as o$3, c6 as e$2, k as i$1 } from './_virtual_index-2683c931.js';
import { j as j$1 } from './TilemapCache-e4b3a64f.js';
import { a } from './ArcGISCachedService-fe17399e.js';
import { n as n$1 } from './serviceTileInfoProperty-cc0860df.js';
import { r as r$1 } from './TileIndex-799b0926.js';
import { o as o$2 } from './jsonContext-03684a49.js';
import { a as a$2 } from './StyleRepository-c2de741a.js';
import './vec4f32-1b47f233.js';
import './colorUtils-9f723871.js';
import './definitions-12783a0f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function A(A){const o={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((l=>{const Q=new Image;Q.onload=()=>{Q.onload=Q.onerror=null,l(Q.width>0&&Q.height>0);},Q.onerror=()=>{Q.onload=Q.onerror=null,l(!1);},Q.src="data:image/webp;base64,"+o[A];}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r=n.getLogger("esri.layers.support.SpriteSource"),h$1=1.15;class o$1{constructor(t,e,i,s){this.baseURL=t,this.devicePixelRatio=e,this.maxTextureSize=i,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded";}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded";}catch{this.loadStatus="failed";}}else this.loadStatus="failed";}_loadSprites(t){this._isRetina=this.devicePixelRatio>h$1;const o=U$1(this.baseURL),l=o.query?"?"+C(o.query):"",n=this._isRetina?"@2x":"",d=`${o.path}${n}.${this._spriteImageFormat}${l}`,g=`${o.path}${n}.json${l}`;return Promise.all([U$2(g,t),U$2(d,{responseType:"image",...t})]).then((([t,i])=>{const s=Object.keys(t.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=t.data;const a=i.data,h=Math.max(this.maxTextureSize,4096);if(a.width>h||a.height>h){const t=`Sprite resource for style ${o.path} is bigger than the maximum allowed of ${h} pixels}`;throw r.error(t),new s$1("SpriteSource",t)}this.width=a.width,this.height=a.height;const l=document.createElement("canvas"),n=l.getContext("2d");l.width=a.width,l.height=a.height,n.drawImage(a,0,0,a.width,a.height);const d=n.getImageData(0,0,a.width,a.height),g=new Uint8Array(d.data);let m;for(let e=0;e<g.length;e+=4)m=g[e+3]/255,g[e]=g[e]*m,g[e+1]=g[e+1]*m,g[e+2]=g[e+2]*m;this.image=g;}))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class p{constructor(p,h,u){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=p,this.sourceUrl=h,h&&(this.parsedUrl=U$1(this.sourceUrl));const c=this.parsedUrl.path,m=this.parsedUrl.query?"?"+C(this.parsedUrl.query):"",f=y$1(u),d=f.tiles;h&&d.forEach(((e,t)=>{Q(e)||(d[t]=D$1(c,e)+m);})),this.tileServers=d,u.tileMap&&(this.tileMapURL=D$1(h,u.tileMap));const x=u.capabilities&&u.capabilities.split(",").map((e=>e.toLowerCase().trim())),g=!!u.exportTilesAllowed,y=!!x&&-1!==x.indexOf("tilemap"),M$1=g&&u.hasOwnProperty("maxExportTilesCount")?u.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:g,supportsTileMap:y},exportTiles:g?{maxExportTilesCount:+M$1}:null},this.tileInfo=n$1(f.tileInfo,f,null,{ignoreMinMaxLOD:!0}),y&&(this.type="vector-tile",this.tilemapCache=new j$1({layer:this}),this.tilemapCache&&(this.tileIndex=new r$1(this.tilemapCache))),this.fullExtent=M.fromJSON(u.fullExtent);}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}getSourceTileUrl(e,t,i){let l=this.tileServers[t%this.tileServers.length];return l=l.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),l}isCompatibleWith(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return !1;if(!t.origin.equals(i.origin))return !1;if(Math.round(t.dpi)!==Math.round(i.dpi))return !1;const l=t.lods,r=i.lods,s=Math.min(l.length,r.length);for(let o=0;o<s;o++){const e=l[o],t=r[o];if(e.level!==t.level||Math.round(e.scale)!==Math.round(t.scale))return !1}return !0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const m=t$1.defaults&&t$1.defaults.io.corsEnabledServers;async function y(e,s){const t={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[o,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],n=o?U$1(o):null;await h(t,"esri",e,l,s);const i={layerDefinition:t.validatedSource,url:o,parsedUrl:n,serviceUrl:t.sourceUrl,style:t.style,styleUrl:t.styleUrl,spriteUrl:t.style.sprite&&S(t.styleBase,t.style.sprite),spriteFormat:t.spriteFormat,glyphsUrl:t.style.glyphs&&S(t.styleBase,t.style.glyphs),sourceNameToSource:t.sourceNameToSource,primarySourceName:t.primarySourceName};return d(i.spriteUrl),d(i.glyphsUrl),i}function d(e){if(!e)return;const r=M$1(e);m&&-1===m.indexOf(r)&&m.push(r);}function S(...e){let r;for(let s=0;s<e.length;++s)if(et(e[s])){if(r){const t=r.split("://")[0];r=t+":"+e[s].trim();}}else r=Q(e[s])?e[s]:D$1(r,e[s]);return gt(r)}async function h(e,s,t,o,l){let n,u,c;if(h$2(l),"string"==typeof t){const e=z(t);d(e);const s=U$1(e);c=await U$2(s.path,{query:{f:"json"},responseType:"json",...l}),n=e,u=e;}else c={data:t},n=t.jsonUrl||null,u=o;const p=c.data;return c.ssl&&(n&&(n=n.replace(/^http:/i,"https:")),u&&(u=u.replace(/^http:/i,"https:"))),U(p)?(e.styleUrl=n||null,w(e,p,u,l)):x(p)?e.sourceUrl?g(e,p,u,!1,s,l):(e.sourceUrl=n||null,g(e,p,u,!0,s,l)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function U(e){return !!e.sources}function x(e){return !U(e)}async function w(e,r,s,t){const o=s?ht(s):w$1;e.styleBase=o,e.style=r,e.styleUrl&&d(e.styleUrl),r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(r.sources&&r.sources.esri){const s=r.sources.esri;s.url?await h(e,"esri",S(o,s.url),void 0,t):l.push(h(e,"esri",s,o,t));}for(const n of Object.keys(r.sources))"esri"!==n&&"vector"===r.sources[n].type&&(r.sources[n].url?l.push(h(e,n,S(o,r.sources[n].url),void 0,t)):r.sources[n].tiles&&l.push(h(e,n,r.sources[n],o,t)));await Promise.all(l);}async function g(e,r,t,o,l,n){const i=t?gt(t)+"/":w$1,u=j(r,i),a=new p(l,i,u);if(!o&&e.primarySourceName in e.sourceNameToSource){const r=e.sourceNameToSource[e.primarySourceName];if(!r.isCompatibleWith(a))return Promise.resolve();null!=a.fullExtent&&(null!=r.fullExtent?r.fullExtent.union(a.fullExtent):r.fullExtent=a.fullExtent.clone()),r.tileInfo.lods.length<a.tileInfo.lods.length&&(r.tileInfo=a.tileInfo);}if(o?(e.sourceBase=i,e.source=r,e.validatedSource=u,e.primarySourceName=l,e.sourceUrl&&d(e.sourceUrl)):d(i),e.sourceNameToSource[l]=a,!e.style)return null==r.defaultStyles?Promise.reject():"string"==typeof r.defaultStyles?h(e,"",S(i,r.defaultStyles,"root.json"),void 0,n):h(e,"",r.defaultStyles,S(i,"root.json"),n)}function j(e,r){if(e.hasOwnProperty("tileInfo"))return e;const s={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},t=512;let o=78271.51696400007,l=295828763.7957775;const n=[],i=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,u=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let c=0;c<=u;c++)c>=i&&n.push({level:c,scale:l,resolution:o}),o/=2,l/=2;for(const c of e.tiles)d(S(r,c));return {capabilities:"TilesOnly",initialExtent:s,fullExtent:s,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:t,cols:t,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:n,spatialReference:{wkid:102100}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i;}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let t=0,s=0;return (256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(s=i)),[t,s]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]&&256===t.size[1])return t;const s=256,l=t.spatialReference.isGeographic,r=[],o=t.lods.length;for(let i$1=0;i$1<o;i$1++){const s=t.lods[i$1],o=l?s.resolution:2*s.resolution;r.push(new i({level:s.level,scale:s.scale,resolution:o}));}return new x$1({size:[s,s],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:r})}static create512x512CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]||256===t.size[1])return null;const s=512,l=[],r=t.lods.length;for(let i$1=0;i$1<r;i$1++){const s=t.lods[i$1],r=.5*s.resolution;l.push(new i({level:s.level,scale:s.scale,resolution:r}));}return new x$1({size:[s,s],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:l})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=1e-6;function s(e,s){if(e===s)return !0;if(!e&&null!=s)return !1;if(null!=e&&!s)return !1;if(!e.spatialReference.equals(s.spatialReference)||e.dpi!==s.dpi)return !1;const o=e.origin,r=s.origin;if(Math.abs(o.x-r.x)>=l||Math.abs(o.y-r.y)>=l)return !1;let n,t;e.lods[0].scale>s.lods[0].scale?(n=e,t=s):(t=e,n=s);for(let i=n.lods[0].scale;i>=t.lods[t.lods.length-1].scale-l;i/=2)if(Math.abs(i-t.lods[0].scale)<l)return !0;return !1}function o(l,s){if(l===s)return l;if(!l&&null!=s)return s;if(null!=l&&!s)return l;const o=l.size[0],r=l.format,n=l.dpi,t={x:l.origin.x,y:l.origin.y},i=l.spatialReference.toJSON(),a=l.lods[0].scale>s.lods[0].scale?l.lods[0]:s.lods[0],d=l.lods[l.lods.length-1].scale<=s.lods[s.lods.length-1].scale?l.lods[l.lods.length-1]:s.lods[s.lods.length-1],f=a.scale,u=a.resolution,c=d.scale,p=[];let g=f,h=u,x=0;for(;g>c;)p.push({level:x,resolution:h,scale:g}),x++,g/=2,h/=2;return new x$1({size:[o,o],dpi:n,format:r||"pbf",origin:t,lods:p,spatialReference:i})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let D=class extends(t$2(s$2(a(p$1(l$1(u(l$2(b)))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null;}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear();}async prefetchResources(e$1){await this.loadSpriteSource(e.devicePixelRatio||1,e$1);}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await U$2(t,{...e,query:{f:"json"}})).data&&this.read({url:t},o$2(this.portalItem));})).then((()=>this._loadStyle(e)),(()=>this._loadStyle(e)));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&U$1(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?U$1(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&et(e)&&(e=`https:${e}`),t.styleUrl=e;}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const o in this.sourceNameToSource)t.push(this.sourceNameToSource[o]);let r=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new x$1;if(t.length>1)for(let o$1=0;o$1<t.length;o$1++)s(r,t[o$1].tileInfo)&&(r=o(r,t[o$1].tileInfo));return r}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return t.create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return t.create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=r$2(),o=new o$1(this.styleRepository.sprite,e,r.maxTextureSize,this.currentStyleInfo.spriteFormat);await o.load(t),this._spriteSourceMap.set(e,o);}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){const r=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof r&&this.url===r&&!b$1(this._abortController))return this._loadingPromise;const o=this._abortController;o&&o.abort();const i=a$1();return this._loadingPromise=new Promise(((e,o)=>{const s={signal:i.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(r,s).then(e,o),j$2(t,(()=>{i.abort();}));})),this._abortController=i,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return y$1(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const o=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layerName:e,paint:t,isDataDriven:r||o});}getStyleLayer(e){return y$1(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t});}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layerName:e});}getLayoutProperties(e){return y$1(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t});}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t});}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,r){let o=this.tileServers[t%this.tileServers.length];return o=o.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),o}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new s$1("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await y(e,t);if("webp"===r.spriteFormat){await A("lossy")||(r.spriteFormat="png");}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySourceName",r.primarySourceName),this._set("styleRepository",new a$2(r.style,r)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style",{});}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const o=t[2]&&t[2].toLowerCase();if(!o)return;const i=t[1]||"";for(const s of r)if(s.toLowerCase().indexOf(o)>-1)return z(`//static.arcgis.com/attribution/Vector${i}/${s}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};e$1([y$2({readOnly:!0})],D.prototype,"attributionDataUrl",null),e$1([y$2({type:["show","hide"]})],D.prototype,"listMode",void 0),e$1([y$2({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],D.prototype,"capabilities",null),e$1([y$2({readOnly:!0})],D.prototype,"currentStyleInfo",void 0),e$1([y$2({json:{read:!1},readOnly:!0,type:M})],D.prototype,"fullExtent",null),e$1([y$2()],D.prototype,"style",void 0),e$1([y$2({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],D.prototype,"isReference",void 0),e$1([y$2({type:["VectorTileLayer"]})],D.prototype,"operationalLayerType",void 0),e$1([y$2({readOnly:!0})],D.prototype,"parsedUrl",null),e$1([y$2({readOnly:!0})],D.prototype,"serviceUrl",null),e$1([y$2({type:k,readOnly:!0})],D.prototype,"spatialReference",null),e$1([y$2({readOnly:!0})],D.prototype,"styleRepository",void 0),e$1([y$2({readOnly:!0})],D.prototype,"sourceNameToSource",void 0),e$1([y$2({readOnly:!0})],D.prototype,"primarySourceName",void 0),e$1([y$2({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],D.prototype,"styleUrl",null),e$1([o$3(["portal-item","web-document"],"styleUrl")],D.prototype,"writeStyleUrl",null),e$1([y$2({json:{read:!1},readOnly:!0})],D.prototype,"tileIndexType",null),e$1([y$2({json:{read:!1},readOnly:!0})],D.prototype,"tileIndexUrl",null),e$1([y$2({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:x$1})],D.prototype,"tileInfo",null),e$1([y$2({json:{read:!1},readOnly:!0,type:j$1})],D.prototype,"tilemapCache",null),e$1([y$2({json:{read:!1},readOnly:!0})],D.prototype,"tileServers",null),e$1([y$2({json:{read:!1},readOnly:!0,value:"vector-tile"})],D.prototype,"type",void 0),e$1([y$2({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],D.prototype,"url",void 0),e$1([y$2({readOnly:!0})],D.prototype,"version",void 0),e$1([e$2("version",["version","currentVersion"])],D.prototype,"readVersion",null),e$1([y$2({readOnly:!0})],D.prototype,"compatibleTileInfo256",null),e$1([y$2({readOnly:!0})],D.prototype,"compatibleTileInfo512",null),D=e$1([i$1("esri.layers.VectorTileLayer")],D);var E=D;

export default E;
