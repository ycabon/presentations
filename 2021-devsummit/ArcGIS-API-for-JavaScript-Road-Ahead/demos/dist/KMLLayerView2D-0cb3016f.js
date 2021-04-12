import { af as u, dN as a, b$ as L, U, bz as M$1, dO as x, dK as g, r, t as t$1, dI as D, dJ as H, aP as k, dP as t$2, cY as b, cc as r$1, cm as C$1, j as e, y, k as i$1 } from './_virtual_index-2683c931.js';
import { b as b$1, g as g$1, d } from './kmlUtils-ecac885c.js';
import { l, d as d$1 } from './LayerView2D-e9137e52.js';
import { e as et } from './BaseGraphicContainer-d9ecea3a.js';
import { i } from './GraphicContainer-e41c0016.js';
import { m } from './Bitmap-c19e22e5.js';
import { t } from './BitmapContainer-c805daa0.js';
import './aaBoundingBox-359badc3.js';
import './Container-c9657d6c.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './definitions-12783a0f.js';
import './schemaUtils-62f0bc7d.js';
import './MD5-a554c7d9.js';
import './Utils-0b584b8b.js';
import './FramebufferObject-c19fef9d.js';
import './MaterialKey-2936dc4b.js';
import './visualVariablesUtils-ba6f60d7.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-4b43760e.js';
import './ComputedAttributeStorage-bb926dc8.js';
import './quickselect-eae177f3.js';
import './FeatureSetReader-c8b784f1.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-52efe4a8.js';
import './tileUtils-a3c95651.js';
import './TurboLine-b4d64355.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-46b123b8.js';
import './FeatureContainer-3f732927.js';
import './TileContainer-f32af6bf.js';
import './WGLContainer-0b2e4b10.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let C=class extends(l(d$1)){constructor(){super(...arguments),this._handles=new u,this._bitmapIndex=new Map,this._mapImageContainer=new t,this._kmlVisualData=new j,this.allVisiblePoints=new a,this.allVisiblePolylines=new a,this.allVisiblePolygons=new a,this.allVisibleMapImages=new L;}hitTest(e,i){if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return Promise.resolve(null);const t=[this._pointsView.hitTest(e,i),this._polylinesView.hitTest(e,i),this._polygonsView.hitTest(e,i)];return Promise.all(t).then((e=>e.filter((e=>(e&&(e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new et({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new et({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new et({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating");}));}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&U(e.href,{responseType:"image"}).then((({data:i})=>{let t=M$1.fromJSON(e.extent);x(t,this.view.spatialReference)&&(t=g(t,this.view.spatialReference));const s=new m(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s);}));}async _getViewDependentUrl(e,s){const{viewFormat:a,viewBoundScale:n,httpQuery:h}=e;if(r(a)){if(t$1(s))throw new Error("Loading this network link requires a view state.");let m;if(await D(),r(n)&&1!==n){const e=new M$1(s.extent);e.expand(n),m=e;}else m=s.extent;m=H(m,k.WGS84);const d=H(m,k.WebMercator),y=m.xmin,_=m.xmax,V=m.ymin,b$1=m.ymax,f=s.size[0]*s.pixelRatio,v=s.size[1]*s.pixelRatio,S=Math.max(d.width,d.height),I={"[bboxWest]":y.toString(),"[bboxEast]":_.toString(),"[bboxSouth]":V.toString(),"[bboxNorth]":b$1.toString(),"[lookatLon]":m.center.x.toString(),"[lookatLat]":m.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":s.rotation.toString(),"[lookatTerrainLon]":m.center.x.toString(),"[lookatTerrainLat]":m.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":m.center.x.toString(),"[cameraLat]":m.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":t$2,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},x=e=>{for(const i in e)for(const t in I)e[i]=e[i].replace(t,I[t]);},P=b(a);x(P);let k$1={};r(h)&&(k$1=b(h),x(k$1));const j=r$1(e.href);j.query={...j.query,...P,...k$1};return `${j.path}?${C$1(P)}`}return e.href}async _fetchService(){const e=new j;await this._loadVisualData(this.layer.url,e),this._kmlVisualData=e,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i){return this._fetchParsedKML(e).then((async e=>{for(const t of e.sublayers){i.allSublayers.set(t.id,t);const e=t.points?await b$1(t.points):[],s=t.polylines?await b$1(t.polylines):[],a=t.polygons?await b$1(t.polygons):[],o=t.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:t.id})))),i.allPolylines.push(...s.map((e=>({item:e,sublayerId:t.id})))),i.allPolygons.push(...a.map((e=>({item:e,sublayerId:t.id})))),i.allMapImages.push(...o.map((e=>({item:e,sublayerId:t.id})))),t.networkLink){const e=await this._getViewDependentUrl(t.networkLink,this.view.state);await this._loadVisualData(e,i);}}}))}_fetchParsedKML(e){return g$1(e,this.view.spatialReference,this.layer.refreshInterval).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e([y()],C.prototype,"_pointsView",void 0),e([y()],C.prototype,"_polylinesView",void 0),e([y()],C.prototype,"_polygonsView",void 0),e([y()],C.prototype,"_fetchingPromise",void 0),e([y()],C.prototype,"updating",void 0),C=e([i$1("esri.views.2d.layers.KMLLayerView2D")],C);var M=C;

export default M;
