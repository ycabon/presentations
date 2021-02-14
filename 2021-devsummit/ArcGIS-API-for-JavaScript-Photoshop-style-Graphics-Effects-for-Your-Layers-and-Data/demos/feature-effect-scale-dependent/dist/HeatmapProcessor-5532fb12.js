import { e, i, b_ as y, u } from './index.js';
import { o } from './heatmapUtils-18001635.js';
import { p as p$1 } from './BaseProcessor-0e6965cb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let a=class extends p$1{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const r=t.schema.processors[0];if("heatmap"!==r.type)return;y(this._schema,r)&&(e.mesh=!0,this._schema=r);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}async onTileData(e,r,s){this._tileKeyToFeatureSets.has(e.key.id)&&"replace"!==r.type||this._tileKeyToFeatureSets.set(e.key.id,new Map);const i=this._tileKeyToFeatureSets.get(e.key.id);u(r.addOrUpdate)&&i.set(r.addOrUpdate.instance,r);let a=r.end;if(i.forEach((e=>a=a||e.end)),!a)return;const p=[];i.forEach((e=>{u(e.addOrUpdate)&&p.push(e.addOrUpdate);}));const c=o(p,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:c},d=[c.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...s,transferList:d})}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};a=e([i("esri.views.2d.layers.features.processors.HeatmapProcessor")],a);var p=a;

export default p;
