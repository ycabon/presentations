import { aA as u, eJ as p, cE as E, U, E as f, L, c6 as z, bk as f$1, dK as c, eK as x, I as h, eL as k, y as e, z as y, A as i } from './_virtual:index-325c676c.js';
import { g, d, h as h$1 } from './kmlUtils-07614a25.js';
import { l, p as p$1 } from './LayerView2D-163643b1.js';
import { Q } from './GraphicsView2D-0d92cd71.js';
import { c as c$1 } from './Bitmap-e58ca29a.js';
import { t } from './BitmapContainer-d9665cf0.js';
import './aaBoundingBox-c7eff59a.js';
import './Container-a3da1052.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-521d4bba.js';
import './json-dc26b8a4.js';
import './quickselect-da3bccc8.js';
import './shapingUtils-979c101c.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-18a166ec.js';
import './MaterialKey-1f691632.js';
import './visualVariablesUtils-b16ad397.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-aca64697.js';
import './VertexBuffer-7e4dc683.js';
import './CircularArray-5e553ebf.js';
import './TurboLine-3d061ef1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-eb99525b.js';
import './TileContainer-5e3a44d3.js';
import './WGLContainer-a4103f3d.js';
import './ShaderCompiler-b7ec7313.js';
import './Program-9517ac59.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-0da62ba9.js';
import './FeatureSetReader-48a5eb37.js';
import './centroid-6105d00e.js';
import './graphicsUtils-ea233ef6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let C=class extends(l(p$1)){constructor(){super(...arguments),this._handles=new u,this._bitmapIndex=new Map,this._mapImageContainer=new t,this._featuresMap=new Map,this.allVisiblePoints=new p,this.allVisiblePolylines=new p,this.allVisiblePolygons=new p,this.allVisibleMapImages=new E;}hitTest(e,i){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return U(null);const s=[this._pointsView.hitTest(e,i),this._polylinesView.hitTest(e,i),this._polygonsView.hitTest(e,i)];return f(s).then((e=>e.filter((e=>(e&&(e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new Q({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate()}),this.container.addChild(this._polygonsView.container),this._polylinesView=new Q({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate()}),this.container.addChild(this._polylinesView.container),this._pointsView=new Q({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate()}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(()=>this._refreshCollections())),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating");}));}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&L(e.href,{responseType:"image"}).then((({data:i})=>{let s=z.fromJSON(e.extent);f$1(s,this.view.spatialReference)&&(s=c(s,this.view.spatialReference));const t=new c$1(i);t.x=s.xmin,t.y=s.ymax,t.resolution=s.width/i.naturalWidth,t.rotation=e.rotation,this._mapImageContainer.addChild(t),this._bitmapIndex.set(e,t);}));}_fetchService(){return this._handles.remove("refresh-collections"),this._getParsedKML().then((e=>this._fetchSublayerService(this.layer,e)))}_fetchSublayerService(e,i){const s=e.sublayers;if(!s||0===s.length)return U();const a=[];return s.forEach((e=>{const s=x(e,"visible").then((()=>e.load())).then((()=>this._getGraphicsForSublayer(e,i))).then((i=>h((s=>{e.networkLink?s():(this._featuresMap.set(e,i),this._handles.add(k((()=>{this._refreshCollections(),s();})),"refresh-collections"));})))).then((()=>this._fetchSublayerService(e,e.sourceJSON||i)));e.visible&&a.push(s);})),f(a).then((()=>{}))}_getParsedKML(){return g(this.layer.url,this.view.spatialReference,this.layer.refreshInterval).then((e=>d(e.data)))}async _getGraphicsForSublayer(e,i){let s=null;return i.sublayers.some((i=>(s=i,i.id===e.id)))?{points:s.points&&await h$1(s.points),polylines:s.polylines&&await h$1(s.polylines),polygons:s.polygons&&await h$1(s.polygons),mapImages:s.mapImages}:null}_refreshCollections(){const e=this.get("layer.visibleSublayers");this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),e&&e.length&&e.forEach((e=>{const i=this._featuresMap.get(e);i&&(this.allVisiblePoints.addMany(i.points),this.allVisiblePolylines.addMany(i.polylines),this.allVisiblePolygons.addMany(i.polygons),this.allVisibleMapImages.addMany(i.mapImages));}));}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e([y()],C.prototype,"_pointsView",void 0),e([y()],C.prototype,"_polylinesView",void 0),e([y()],C.prototype,"_polygonsView",void 0),e([y()],C.prototype,"_fetchingPromise",void 0),e([y({dependsOn:["_fetchingPromise","_pointsView.updating","_polygonsView.updating","_polylinesView.updating"]})],C.prototype,"updating",void 0),C=e([i("esri.views.2d.layers.KMLLayerView2D")],C);var j=C;

export default j;
