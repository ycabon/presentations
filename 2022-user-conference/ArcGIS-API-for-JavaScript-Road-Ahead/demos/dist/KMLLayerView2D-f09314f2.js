import { eg as i, j as j$1, aP as l, h as L, w, ce as g, ev as M$1, r, t as t$1, ew as tn, ex as rn, R as k, ey as r$1, ds as v$1, c as n, du as I, B as e, C as d$1, D as n$1 } from './_virtual_index-4b72c57d.js';
import { b, g as g$1, d } from './kmlUtils-5526cde2.js';
import { v } from './Bitmap-b90cd0ba.js';
import { t } from './BitmapContainer-bf37ea3c.js';
import { f, u } from './LayerView-a579da68.js';
import { i as i$1 } from './GraphicContainer-8e44c386.js';
import { o as oe } from './BaseGraphicContainer-8cdbc58e.js';
import './utils-1dcda7d1.js';
import './EffectView-0ee93c44.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-1f2484bf.js';
import './enums-fb707d37.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './WGLContainer-e9b25fc8.js';
import './VertexArrayObject-47c5aa7a.js';
import './ProgramTemplate-cee70b37.js';
import './StyleDefinition-c3b89df1.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './CIMSymbolHelper-50c786a1.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './normalizeUtilsSync-9f78312b.js';
import './projectionSupport-8e09cd0f.js';
import './json-523694e0.js';
import './FeatureContainer-5186b646.js';
import './TileContainer-b4229202.js';
import './visualVariablesUtils-6896dbe6.js';
import './visualVariablesUtils-a3d3fab4.js';
import './Matcher-08aa0565.js';
import './tileUtils-6b4a5161.js';
import './TileClipper-ce64f0f6.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-ee2b7de5.js';
import './quantizationUtils-994cbb23.js';
import './ExpandedCIM-72783fee.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-9aaf6a24.js';
import './createSymbolSchema-35c250f9.js';
import './MD5-efff06bc.js';
import './util-04e40aaf.js';
import './ComputedAttributeStorage-59add305.js';
import './centroid-824ff9a8.js';
import './vec3f32-90dde670.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class P{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(f(u)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new t,this._kmlVisualData=new P,this.allVisiblePoints=new i,this.allVisiblePolylines=new i,this.allVisiblePolygons=new i,this.allVisibleMapImages=new j$1;}async hitTest(e,i){const t=this.layer;return [this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((i=>(i.layer=t,i.sourceLayer=t,{type:"graphic",graphic:i,layer:t,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new oe({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new oe({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new oe({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));})),l((()=>this.layer.visibleSublayers),(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal));}detach(){this._fetchController.abort(),this._fetchController=null,this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&L(e.href,{responseType:"image"}).then((({data:i})=>{let t=w.fromJSON(e.extent);g(t,this.view.spatialReference)&&(t=M$1(t,this.view.spatialReference));const s=new v(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:l,httpQuery:h}=e;if(r(s)){if(t$1(t))throw new Error("Loading this network link requires a view state.");let p;if(await tn(),r(l)&&1!==l){const e=new w(t.extent);e.expand(l),p=e;}else p=t.extent;p=rn(p,k.WGS84);const w$1=rn(p,k.WebMercator),g=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,S=Math.max(w$1.width,w$1.height),I$1={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":r$1,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},C=e=>{for(const i in e)for(const t in I$1)e[i]=e[i].replace(t,I$1[t]);},x=v$1(s);C(x);let k$1={};r(h)&&(k$1=v$1(h),C(k$1));const P=n(e.href);P.query={...P.query,...x,...k$1};return `${P.path}?${I(x)}`}return e.href}async _fetchService(e){const i=new P;await this._loadVisualData(this.layer.url,i,e),this._kmlVisualData=i,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i,t){return this._fetchParsedKML(e,t).then((async e=>{for(const s of e.sublayers){i.allSublayers.set(s.id,s);const e=s.points?await b(s.points):[],a=s.polylines?await b(s.polylines):[],o=s.polygons?await b(s.polygons):[],l=s.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),i.allPolylines.push(...a.map((e=>({item:e,sublayerId:s.id})))),i.allPolygons.push(...o.map((e=>({item:e,sublayerId:s.id})))),i.allMapImages.push(...l.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,i,t);}}}))}_fetchParsedKML(e,i){return g$1(e,this.view.spatialReference,this.layer.refreshInterval,i).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e([d$1()],j.prototype,"_pointsView",void 0),e([d$1()],j.prototype,"_polylinesView",void 0),e([d$1()],j.prototype,"_polygonsView",void 0),e([d$1()],j.prototype,"updating",void 0),j=e([n$1("esri.views.2d.layers.KMLLayerView2D")],j);const M=j;

export { M as default };
