import { ac as e, ae as i, ci as m, h as r, bI as E, bH as o } from './_virtual_index-3ad07138.js';
import { r as r$1 } from './heatmapUtils-e1554829.js';
import { p as p$1 } from './BaseProcessor-3693d127.js';
import { l as l$1 } from './tileUtils-84582c2d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.offset=e,this.extent=t;}}function c(e){const t=e.key,s=new Map,r=256,i=o,o$1=e.tileInfoView.tileInfo.isWrappable;return s.set(l$1(t,-1,-1,o$1).id,new p([-i,-i],[i-r,i-r,i,i])),s.set(l$1(t,0,-1,o$1).id,new p([0,-i],[0,i-r,i,i])),s.set(l$1(t,1,-1,o$1).id,new p([i,-i],[0,i-r,r,i])),s.set(l$1(t,-1,0,o$1).id,new p([-i,0],[i-r,0,i,i])),s.set(l$1(t,1,0,o$1).id,new p([i,0],[0,0,r,i])),s.set(l$1(t,-1,1,o$1).id,new p([-i,i],[i-r,0,i,r])),s.set(l$1(t,0,1,o$1).id,new p([0,i],[0,0,i,r])),s.set(l$1(t,1,1,o$1).id,new p([i,i],[0,0,r,r])),s}let l=class extends p$1{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;m(this._schema,s)&&(e.mesh=!0,this._schema=s);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r$2,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(r(r$2.addOrUpdate)&&r$2.addOrUpdate.hasFeatures&&a.set(r$2.addOrUpdate.instance,r$2),r$2.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o)=>{if(o===e.key.id)i.forEach((e=>E(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[a,n]=e.offset;i.forEach((e=>E(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s);}))));}}));const a=r$1(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=e([i("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l;

export { h as default };
