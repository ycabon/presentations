import { ax as u$1, ir as c, S, C as C$1, c_ as M$1, bB as g, f4 as M$2, h as r, g as t$1, hF as O, f5 as Q, b3 as k, ey as a, eW as b, d9 as o, dq as C$2, ac as e, ad as d$1, ae as i$1 } from './_virtual_index-3ad07138.js';
import { b as b$1, g as g$2, d } from './kmlUtils-9757f35c.js';
import { g as g$1 } from './Bitmap-6fb4c9a4.js';
import { t } from './BitmapContainer-b9d43000.js';
import { l, u } from './LayerView-ccf9971d.js';
import { i } from './GraphicContainer-f108ffc8.js';
import { i as it } from './BaseGraphicContainer-e75c5940.js';
import './Container-0ea8b7c2.js';
import './Texture-970325f3.js';
import './WGLContainer-bec6b82e.js';
import './VertexArrayObject-3beb5624.js';
import './Utils-ba2d87f4.js';
import './ShaderCompiler-9e67e52b.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-8a7bcdbb.js';
import './earcut-211aa720.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f3b66f92.js';
import './json-2bf9d675.js';
import './FeatureContainer-c3691c35.js';
import './TileContainer-d98cb7c6.js';
import './visualVariablesUtils-c0918cfa.js';
import './visualVariablesUtils-b2bf8e17.js';
import './Matcher-f07858c6.js';
import './tileUtils-84582c2d.js';
import './TileClipper-f06c223a.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-05c05689.js';
import './MD5-a16a7511.js';
import './util-af29771e.js';
import './ComputedAttributeStorage-64438d2c.js';
import './FeatureSetReader-25593c0a.js';
import './centroid-3bf097a6.js';
import './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class C{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(l(u)){constructor(){super(...arguments),this._handles=new u$1,this._bitmapIndex=new Map,this._mapImageContainer=new t,this._kmlVisualData=new C,this.allVisiblePoints=new c,this.allVisiblePolylines=new c,this.allVisiblePolygons=new c,this.allVisibleMapImages=new S;}async hitTest(e,i){var t,s,a;return (await Promise.all([null==(t=this._pointsView)?void 0:t.hitTest(e),null==(s=this._polylinesView)?void 0:s.hitTest(e),null==(a=this._polygonsView)?void 0:a.hitTest(e)])).flat().filter((e=>!!e&&(e.layer=this.layer,e.sourceLayer=this.layer,!0)))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));}))]),this.container.addChild(this._mapImageContainer),this._polygonsView=new it({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new it({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new it({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.watch("layer.visibleSublayers",(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();})),this._fetchingPromise=this._fetchService().then((()=>{this._fetchingPromise=null,this.notifyChange("updating");}));}detach(){this._handles.removeAll(),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&C$1(e.href,{responseType:"image"}).then((({data:i})=>{let t=M$1.fromJSON(e.extent);g(t,this.view.spatialReference)&&(t=M$2(t,this.view.spatialReference));const s=new g$1(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:a$1,httpQuery:h}=e;if(r(s)){if(t$1(t))throw new Error("Loading this network link requires a view state.");let p;if(await O(),r(a$1)&&1!==a$1){const e=new M$1(t.extent);e.expand(a$1),p=e;}else p=t.extent;p=Q(p,k.WGS84);const w=Q(p,k.WebMercator),g=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,S=Math.max(w.width,w.height),I={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":a,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},x=e=>{for(const i in e)for(const t in I)e[i]=e[i].replace(t,I[t]);},P=b(s);x(P);let k$1={};r(h)&&(k$1=b(h),x(k$1));const C=o(e.href);C.query={...C.query,...P,...k$1};return `${C.path}?${C$2(P)}`}return e.href}async _fetchService(){const e=new C;await this._loadVisualData(this.layer.url,e),this._kmlVisualData=e,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i){return this._fetchParsedKML(e).then((async e=>{for(const t of e.sublayers){i.allSublayers.set(t.id,t);const e=t.points?await b$1(t.points):[],s=t.polylines?await b$1(t.polylines):[],a=t.polygons?await b$1(t.polygons):[],o=t.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:t.id})))),i.allPolylines.push(...s.map((e=>({item:e,sublayerId:t.id})))),i.allPolygons.push(...a.map((e=>({item:e,sublayerId:t.id})))),i.allMapImages.push(...o.map((e=>({item:e,sublayerId:t.id})))),t.networkLink){const e=await this._getViewDependentUrl(t.networkLink,this.view.state);await this._loadVisualData(e,i);}}}))}_fetchParsedKML(e){return g$2(e,this.view.spatialReference,this.layer.refreshInterval).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e([d$1()],j.prototype,"_pointsView",void 0),e([d$1()],j.prototype,"_polylinesView",void 0),e([d$1()],j.prototype,"_polygonsView",void 0),e([d$1()],j.prototype,"_fetchingPromise",void 0),e([d$1()],j.prototype,"updating",void 0),j=e([i$1("esri.views.2d.layers.KMLLayerView2D")],j);const M=j;

export { M as default };
