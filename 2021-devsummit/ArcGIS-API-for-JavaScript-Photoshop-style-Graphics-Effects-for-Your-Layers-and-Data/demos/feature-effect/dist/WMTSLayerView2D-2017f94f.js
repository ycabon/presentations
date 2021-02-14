import { dp as i, aw as u, ef as x, dq as o, dr as l$1, ds as n, W as T, e, y, i as i$2 } from './index.js';
import { l, p } from './LayerView2D-73734b75.js';
import { i as i$1 } from './BitmapTileLayerView2D-f64150c4.js';
import './Container-ab4b8a7d.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './BitmapTileContainer-93038d0f.js';
import './Utils-b26a7a24.js';
import './RenderingContext-93d2cda4.js';
import './WGLContainer-0cfd8bf2.js';
import './definitions-6994070a.js';
import './VertexArrayObject-66ff8833.js';
import './ShaderCompiler-cf832d12.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-e2f7d356.js';
import './TileContainer-009d35cb.js';
import './Bitmap-a8f8414b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const f=[102113,102100,3857,3785,900913];let d=class extends(i(i$1(l(p)))){constructor(){super(...arguments),this._handles=new u,this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){const e=this.layer.activeLayer,t=this.tileMatrixSet;if(!t)return;const i=t.tileInfo.spatialReference;let s=e.fullExtent&&e.fullExtent.clone();i.isWebMercator?s=x(s):i.isWGS84||(s=t.fullExtent),this._tileInfoView=new o(t.tileInfo,s),this._fetchQueue=new l$1({tileInfoView:this._tileInfoView,process:e=>this.fetchTile(e)}),this._tileStrategy=new n({cachePolicy:"keep",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh()))),super.attach();}detach(){super.detach(),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}async doRefresh(){this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue.length>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;[i.x,i.y]=this._tileInfoView.getTileCoords([0,0],t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._tileInfoView.getTileCoords(i,t.key);const r={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(t.key).then((e=>{t.bitmap.source=e,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t);})).catch((e=>{T(e)||(t.bitmap.source=null,t.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(t));}))};return r.promise.finally((()=>r.fulfilled=!0)),this._tileRequests.set(t,r),this.requestUpdate(),t}releaseTile(e){const t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e){return this.layer.fetchTile(e.level,e.row,e.col)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;e.bitmap.source=null;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t,e.requestRender(),this.notifyChange("updating");}))};t.promise.then((()=>t.fulfilled=!0),(()=>t.fulfilled=!0)),this._tileRequests.set(e,t);})),this.notifyChange("updating");}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>f.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};e([y({dependsOn:["tileMatrixSet"]})],d.prototype,"suspended",void 0),e([y({readOnly:!0,dependsOn:["view.spatialReference","layer.activeLayer"]})],d.prototype,"tileMatrixSet",null),d=e([i$2("esri.views.2d.layers.WMTSLayerView2D")],d);var m=d;

export default m;
