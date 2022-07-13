import { aA as o, eL as n, B as e$1, C as d$1, D as n$1, E as f$1, r, ji as c$1, t, mY as t$1, aP as l$1, gx as U, ey as d$2, aQ as h, jE as S, g as g$1, c6 as l$2, i5 as h$1, oO as j, j6 as m$2, hj as s$1, be as t$2, de as n$2, bj as v$1, mW as f$2, I as y, nM as i, b$ as o$1, ki as S$1, b1 as b$1, oP as p$1, aW as a$2, fJ as t$3, oQ as p$2 } from './_virtual_index-a68dd1ed.js';
import { G, Q, e as es } from './boundedPlane-93d1e9f2.js';
import { o as o$2 } from './queryEngineUtils-0df2164c.js';
import { h as h$2 } from './WorkerHandle-3a857e5e.js';
import './vectorStacks-5f70b87b.js';
import './mat4f64-2ebd3575.js';
import './quatf64-808fd6fd.js';
import './sphere-a826bb8b.js';
import './lineSegment-0f1ab256.js';
import './plane-999ac6bd.js';
import './PointSnappingHint-44c7a14d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c(n,o$1){return Q(o$1.extent,e),es(e,o(a$1,n.x,n.y,0))}const e=G(),a$1=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let u$1=class extends f$1{constructor(e){super(e),this.pointOfInterest=null;}get tiles(){const e=this.tilesCoveringView,t=r(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort(((e,r)=>c(t,e)-c(t,r))),e}_scaleEnabled(){return c$1(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||t(this.tileInfo))return [];if(!this._scaleEnabled)return [];const{spans:e,lodInfo:t$2}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:r}=t$2,o=[];for(const{row:i,colFrom:s,colTo:l}of e)for(let e=s;e<=l;e++){const s=t$2.normalizeCol(e),l=new t$1(null,r,i,s);this.tileInfo.updateTileInfo(l),o.push(l);}return o}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return r(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.addHandles(l$1((()=>this.view?.state?.viewpoint),(()=>this.notifyChange("tilesCoveringView")),U));}};e$1([d$1({readOnly:!0})],u$1.prototype,"tiles",null),e$1([d$1({readOnly:!0})],u$1.prototype,"_scaleEnabled",null),e$1([d$1({readOnly:!0})],u$1.prototype,"tilesCoveringView",null),e$1([d$1({readOnly:!0})],u$1.prototype,"tileInfo",null),e$1([d$1({readOnly:!0})],u$1.prototype,"tileSize",null),e$1([d$1({constructOnly:!0})],u$1.prototype,"view",void 0),e$1([d$1({constructOnly:!0})],u$1.prototype,"layer",void 0),e$1([d$1()],u$1.prototype,"pointOfInterest",void 0),u$1=e$1([n$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],u$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var s;!function(i){i[i.INVISIBLE=0]="INVISIBLE",i[i.VISIBLE_WHEN_EXTENDED=1]="VISIBLE_WHEN_EXTENDED",i[i.VISIBLE_ON_SURFACE=2]="VISIBLE_ON_SURFACE";}(s||(s={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let u=class extends d$2{constructor(e){super(e),this.pointOfInterest=null;}get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(r(t)){const r=e.map((e=>c(t,e)));for(let i=1;i<r.length;i++)if(r[i-1]>r[i])return e.sort(((e,r)=>c(t,e)-c(t,r))),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(f)}get tileInfo(){return this.view.featureTiles?.tilingScheme.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return r(e)?e:this.view.pointsOfInterest?.focus.location}initialize(){this.handles.add(l$1((()=>this.view.featureTiles),(e=>{this.handles.remove(v),e&&this.handles.add(e.addClient(),v);}),h));}_filterTiles(e){if(t(e))return [];return e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>m$1&&e.measures.visibility===s.VISIBLE_ON_SURFACE))}};function f({lij:[e,t,r],extent:i}){return new t$1(`${e}/${t}/${r}`,e,t,r,i)}e$1([d$1({readOnly:!0})],u.prototype,"tiles",null),e$1([d$1({readOnly:!0})],u.prototype,"tilesCoveringView",null),e$1([d$1({readOnly:!0})],u.prototype,"tileInfo",null),e$1([d$1({readOnly:!0})],u.prototype,"tileSize",null),e$1([d$1({constructOnly:!0})],u.prototype,"view",void 0),e$1([d$1()],u.prototype,"pointOfInterest",void 0),e$1([d$1()],u.prototype,"_effectivePointOfInterest",null),u=e$1([n$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],u);const m$1=50,v="feature-tiles";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let b=class extends f$1{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0;}initialize(){this._symbols=m.map((e=>new S({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update();}destroy(){this._enabled=!1,this.clear();}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update());}update(){if(!this._enabled)return void this.clear();const e=e=>{if(r(e.label))return e.label;let s=e.lij.toString();return r(e.loadPriority)&&(s+=` (${e.loadPriority})`),s},t$1=this.getTiles(),a=new Array,n=new Set((this._labels.size,this._labels.keys()));t$1.forEach(((p,m)=>{const b=p.lij.toString();n.delete(b);const d=p.lij[0],g=p.geometry;if(this.enablePolygons&&!this._polygons.has(b)){const e=new g$1({geometry:g,symbol:this._symbols[d%this._symbols.length]});this._polygons.set(b,e),a.push(e);}if(this.enableLabels){const n=e(p),d=m/(t$1.length-1),u=s$1(0,200,d),_=s$1(20,6,d)/.75,f=r(p.loadPriority)&&p.loadPriority>=t$1.length,w=new l$2([u,f?0:u,f?0:u]),j$1="3d"===this.view.type?()=>new h$1({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new j({text:n,halo:{color:"white",size:1/.75},material:{color:w},size:_})]}):()=>new m$2({text:n,haloColor:"white",haloSize:1/.75,color:w,size:_});if(this._labels.has(b)){const e=this._labels.get(b),s=j$1();(t(e.symbol)||JSON.stringify(s)!==JSON.stringify(e.symbol))&&(e.symbol=s);}else {const e=new g$1({geometry:g.extent.center,symbol:j$1()});this._labels.set(b,e),a.push(e);}}}));const p=new Array;n.forEach((e=>{this._polygons.has(e)&&(p.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(p.push(this._labels.get(e)),this._labels.delete(e));})),this.view.graphics.removeMany(p),this.view.graphics.addMany(a);}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear();}};e$1([d$1({constructOnly:!0})],b.prototype,"view",void 0),e$1([d$1({readOnly:!0})],b.prototype,"updating",void 0),e$1([d$1()],b.prototype,"enabled",null),b=e$1([n$1("esri.views.support.TileTreeDebugger")],b);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let d=class extends b{constructor(e){super(e),this.handles=new t$2;}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.handles.add(n$2((()=>clearInterval(e))));}destroy(){this.handles.destroy();}getTiles(){if(!this.debugInfo)return [];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount);})),this.debugInfo.pendingTiles.forEach((r=>{e.set(r.data.id,r.featureCount),t.set(r.data.id,r.state);}));const r=r=>{const o=t.get(r),s=e.get(r)??"?";return o?`${o}:${s}\n${r}`:`store:${s}\n${r}`},o=new Map;return this.debugInfo.storedTiles.forEach((e=>{o.set(e.data.id,e.data);})),this.debugInfo.pendingTiles.forEach((e=>{o.set(e.data.id,e.data);})),Array.from(o.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:v$1.fromExtent(f$2(e.extent,this.view.spatialReference)),label:r(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this.debugInfo=e,this.update();}));}};e$1([d$1({constructOnly:!0})],d.prototype,"handle",void 0),d=e$1([n$1("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],d);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends d$2{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0;}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy();}initialize(){this.workerHandle=new p(this.schedule),this.handles.add([this.workerHandle.on("notify-updating",(({updating:e})=>this.workerHandleUpdating=e)),this.workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))]);}async setup(e,t$1){const r=this._serviceInfoFromLayer(e.layer);if(t(r))return;const o={configuration:this._convertConfiguration(e.configuration),serviceInfo:r,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",o,t$1)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t$1));}async configure(e,t){const i=this._convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e));}async fetchCandidates(e,t){const i={distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,filter:r(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(i,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:r(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("updateTiles",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}async applyEdits(e,t){const i=this.editId++,r={id:i};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("beginApplyEdits",r,t));const a=await this.updatingHandles.addPromise(y(e.result,t)),s={id:i,edits:{addedFeatures:a.addedFeatures?.map((({objectId:e})=>e))??[],deletedFeatures:a.deletedFeatures?.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t})))??[],updatedFeatures:a.updatedFeatures?.map((({objectId:e})=>e))??[]}};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("endApplyEdits",s,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}_convertConfiguration(e){return {filter:r(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}_serviceInfoFromLayer(e){return "multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl.path,fields:e.fields.map((e=>e.toJSON())),geometryType:i.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}};e$1([d$1({constructOnly:!0})],l.prototype,"schedule",void 0),e$1([d$1({readOnly:!0})],l.prototype,"updating",null),e$1([d$1({readOnly:!0})],l.prototype,"availability",void 0),e$1([d$1()],l.prototype,"workerHandleUpdating",void 0),l=e$1([n$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],l);class p extends h$2{constructor(e){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated"});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends f$1{constructor(e){super(e),this.pointOfInterest=null;}get tiles(){return [new t$1("0/0/0",0,0,0,o$1(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new S$1({origin:new b$1({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new p$1({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};e$1([d$1({readOnly:!0})],a.prototype,"tiles",null),e$1([d$1({readOnly:!0})],a.prototype,"tileInfo",null),e$1([d$1({readOnly:!0})],a.prototype,"tileSize",null),e$1([d$1({constructOnly:!0})],a.prototype,"layer",void 0),e$1([d$1()],a.prototype,"pointOfInterest",void 0),a=e$1([n$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let g=class extends(a$2(f$1)){constructor(e){super(e);}get _updateTilesParameters(){return {tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return {filter:this._layer.createQuery(),customParameters:this._layer.customParameters}}get availability(){return this.workerHandle.availability}get _layer(){return this.layerSource.layer}initialize(){const e=this.view;if(r(e))switch(e.type){case"2d":this._tilesOfInterest=new u$1({view:e,layer:this._layer}),this.workerHandle=new l;break;case"3d":{const r=e.resourceController;this._tilesOfInterest=new u({view:e}),this.workerHandle=new l({schedule:e=>r.schedule(e)});break}}else this._tilesOfInterest=new a({layer:this._layer}),this.workerHandle=new l;this.handles.add([t$3(this.workerHandle)]),this.workerHandle.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add((()=>this._updateTilesParameters),(()=>this.workerHandle.updateTiles(this._updateTilesParameters,null)),h),this.handles.add([l$1((()=>this.configuration),(e=>this.workerHandle.configure(e,null)),U)]),r(e)&&this.handles.add(l$1((()=>p$2.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(r=>{r&&!this.debug?(this.debug=new d({view:e,handle:this.workerHandle}),this.handles.add(t$3(this.debug),"debug")):!r&&this.debug&&this.handles.remove("debug");}),h)),this.handles.add(this.layerSource.layer.on("apply-edits",(e=>{this.workerHandle.applyEdits(e,null);})));}refresh(){this.workerHandle.refresh(null);}async fetchCandidates(e,r){return this._tilesOfInterest.pointOfInterest=e.coordinateHelper.vectorToPoint(e.point),(await this.workerHandle.fetchCandidates({...e,filter:null},r)).candidates.map((r=>o$2(r,e.coordinateHelper,e.elevationInfo)))}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};e$1([d$1({constructOnly:!0})],g.prototype,"spatialReference",void 0),e$1([d$1({constructOnly:!0})],g.prototype,"layerSource",void 0),e$1([d$1({constructOnly:!0})],g.prototype,"view",void 0),e$1([d$1()],g.prototype,"_tilesOfInterest",void 0),e$1([d$1({readOnly:!0})],g.prototype,"_updateTilesParameters",null),e$1([d$1({readOnly:!0})],g.prototype,"updating",null),e$1([d$1({readOnly:!0})],g.prototype,"configuration",null),e$1([d$1({readOnly:!0})],g.prototype,"availability",null),g=e$1([n$1("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],g);

export { g as FeatureServiceSnappingSource };