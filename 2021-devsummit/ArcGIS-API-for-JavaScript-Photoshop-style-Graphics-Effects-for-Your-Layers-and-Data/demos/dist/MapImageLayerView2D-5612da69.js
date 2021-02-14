import { y as e, z as y$1, A as i, bS as O, p as s, E as f, C as u, cV as k, ec as s$1, k as i$2, dX as i$3, T, a9 as d$1 } from './_virtual:index-3cfe80ed.js';
import { y as y$2 } from './ExportImageParameters-711c796b.js';
import { l as l$1, p } from './LayerView2D-57e1d9b0.js';
import { a } from './drapedUtils-7e9039ba.js';
import { n as n$1 } from './clickToleranceUtils-0f752c5c.js';
import { i as i$1, d } from './popupUtils-a6cbf315.js';
import { t } from './BitmapContainer-d2a5788f.js';
import { w } from './ExportStrategy-93e2b4bd.js';
import './Container-77c0b40a.js';
import './mat4f32-a4d1c0af.js';
import './Utils-7b430d1d.js';
import './WGLContainer-1770bca0.js';
import './ShaderCompiler-0e5c709a.js';
import './Program-57fde19e.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-493fae21.js';
import './Bitmap-ce9d1e89.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=n=>{let d$1=class extends n{async fetchPopupFeatures(e,t){const{layer:s$1}=this;if(!e)return O(new s("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s$1}));const u$1=this.get("view.scale"),n=[],d$1=async e=>{const s=0===e.minScale||u$1<=e.minScale,o=0===e.maxScale||u$1>=e.maxScale;if(e.visible&&s&&o)if(e.sublayers)e.sublayers.forEach(d$1);else if(e.popupEnabled){const s=d(e,{...t,defaultPopupTemplateEnabled:!1});u(s)&&n.push({sublayer:e,popupTemplate:s});}},y=s$1.sublayers.toArray().map(d$1);await f(y);const f$1=n.map((async({sublayer:s,popupTemplate:o})=>{await s.load().catch((()=>{}));const a=s.createQuery(),p=u(t)?t.event:null,i=n$1({renderer:s.renderer,event:p}),u$1=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=u$1,a.outFields=await i$1(s,o);const m=await this._loadArcadeModules(o);m&&m.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=u$1.width/i);return (await s.queryFeatures(a)).features}));return (await k(f$1)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e,r;return !!super.canResume()&&(null==(e=this.imageParameters)||null==(r=e.timeExtent)||!r.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return s$1()}};return e([y$1()],d$1.prototype,"imageParameters",void 0),e([y$1()],d$1.prototype,"layer",void 0),e([y$1({dependsOn:["imageParameters.timeExtent"]})],d$1.prototype,"suspended",void 0),d$1=e([i("esri.views.layers.MapImageLayerView")],d$1),d$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=i$2.getLogger("esri.views.2d.layers.MapImageLayerView2D");let l=class extends(n(i$3(l$1(p)))){constructor(){super(...arguments),this._exportImageVersion=-1;}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{T(e)||c.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t$1,version:r}=this.layer,i=r>=10.3,s=r>=10;this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new w({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t$1,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.imageParameters=new y$2({view:this.view,layer:this.layer}),this.handles.add(d$1(this.imageParameters,"version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),"mapimagelayerview-update");}detach(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([y$1()],l.prototype,"strategy",void 0),e([y$1({dependsOn:["strategy.updating"]})],l.prototype,"updating",void 0),l=e([i("esri.views.2d.layers.MapImageLayerView2D")],l);var y=l;

export default y;
