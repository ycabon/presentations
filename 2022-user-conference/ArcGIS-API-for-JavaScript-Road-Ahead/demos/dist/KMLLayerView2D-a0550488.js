import { kr as i, j as j$1, aP as l, h as L, w, kF as g, jj as M$1, r, t as t$1, kG as tn, er as rn, R as k, kH as r$1, jP as v$1, c as n, jR as I, B as e, C as d$1, D as n$1 } from './_virtual_index-a68dd1ed.js';
import { b, g as g$1, d } from './kmlUtils-2d398db8.js';
import { v } from './Bitmap-192f4ac0.js';
import { t } from './BitmapContainer-58ae455b.js';
import { f } from './LayerView2D-5e78fc62.js';
import { i as i$1 } from './GraphicContainer-72267ffa.js';
import { o as oe } from './BaseGraphicContainer-7910f35d.js';
import { u } from './LayerView-c3f47c16.js';
import './utils-65fe22dc.js';
import './EffectView-f0c56014.js';
import './Utils-13ecd570.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-6d086a89.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-c720612c.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './WGLContainer-f0084bc3.js';
import './VertexArrayObject-8465ed50.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-0f5b7acb.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './CIMSymbolHelper-207e14e1.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-86b5337e.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-bfa84563.js';
import './TileContainer-fc4bdcaf.js';
import './visualVariablesUtils-9ffa569b.js';
import './visualVariablesUtils-2b7ff03c.js';
import './Matcher-74eec27a.js';
import './tileUtils-dcde4a9f.js';
import './TileClipper-b97993cf.js';
import './Geometry-bc69b0c8.js';
import './cimAnalyzer-cdc9ead8.js';
import './callExpressionWithFeature-61b951a0.js';
import './ExpandedCIM-ab130668.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-b5b76e05.js';
import './createSymbolSchema-b0736342.js';
import './MD5-efff06bc.js';
import './util-d93141bf.js';
import './ComputedAttributeStorage-85ce72ec.js';
import './centroid-6ca6c7bb.js';
import './vec3f32-3c06790e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class P{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(f(u)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new t,this._kmlVisualData=new P,this.allVisiblePoints=new i,this.allVisiblePolylines=new i,this.allVisiblePolygons=new i,this.allVisibleMapImages=new j$1;}async hitTest(e,i){const t=this.layer;return [this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((i=>(i.layer=t,i.sourceLayer=t,{type:"graphic",graphic:i,layer:t,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new oe({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new oe({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new oe({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));})),l((()=>this.layer.visibleSublayers),(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal));}detach(){this._fetchController.abort(),this._fetchController=null,this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&L(e.href,{responseType:"image"}).then((({data:i})=>{let t=w.fromJSON(e.extent);g(t,this.view.spatialReference)&&(t=M$1(t,this.view.spatialReference));const s=new v(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s);}));}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:l,httpQuery:h}=e;if(r(s)){if(t$1(t))throw new Error("Loading this network link requires a view state.");let p;if(await tn(),r(l)&&1!==l){const e=new w(t.extent);e.expand(l),p=e;}else p=t.extent;p=rn(p,k.WGS84);const w$1=rn(p,k.WebMercator),g=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,S=Math.max(w$1.width,w$1.height),I$1={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":r$1,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},C=e=>{for(const i in e)for(const t in I$1)e[i]=e[i].replace(t,I$1[t]);},x=v$1(s);C(x);let k$1={};r(h)&&(k$1=v$1(h),C(k$1));const P=n(e.href);P.query={...P.query,...x,...k$1};return `${P.path}?${I(x)}`}return e.href}async _fetchService(e){const i=new P;await this._loadVisualData(this.layer.url,i,e),this._kmlVisualData=i,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i,t){return this._fetchParsedKML(e,t).then((async e=>{for(const s of e.sublayers){i.allSublayers.set(s.id,s);const e=s.points?await b(s.points):[],a=s.polylines?await b(s.polylines):[],o=s.polygons?await b(s.polygons):[],l=s.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),i.allPolylines.push(...a.map((e=>({item:e,sublayerId:s.id})))),i.allPolygons.push(...o.map((e=>({item:e,sublayerId:s.id})))),i.allMapImages.push(...l.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,i,t);}}}))}_fetchParsedKML(e,i){return g$1(e,this.view.spatialReference,this.layer.refreshInterval,i).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e([d$1()],j.prototype,"_pointsView",void 0),e([d$1()],j.prototype,"_polylinesView",void 0),e([d$1()],j.prototype,"_polygonsView",void 0),e([d$1()],j.prototype,"updating",void 0),j=e([n$1("esri.views.2d.layers.KMLLayerView2D")],j);const M=j;

export { M as default };
