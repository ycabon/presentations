import { u as e, y as y$2, z as n, be as a, kX as m$1, A as m$2, ni as i, b7 as l, m as r$1, P as g, pT as y$3, gJ as i$1, E as s$1, x } from './_virtual_index-1ea2035a.js';
import { h } from './StreamFeatureManager-645035b5.js';
import { createConnection as t } from './createConnection-6cf69246.js';
import { r } from './EventedSet-5b7e524a.js';
import { w } from './FeatureLikeLayerView3D-7a4659f7.js';
import { n as n$1 } from './LayerView3D-c60482d9.js';
import { u as u$2 } from './LayerView-04d8537b.js';
import './CircularArray-61b6424e.js';
import './dehydratedFeatureComparison-73cd17db.js';
import './queryForSymbologySnapping-52a25749.js';
import './hash-da85b7aa.js';
import './Graphics3DScaleVisibility-0e954b85.js';
import './rendererConversion-e2907b4c.js';
import './optimizedFeatureQueryEngineAdapter-fcb7e44b.js';
import './centroid-205dc6cf.js';
import './floorFilterUtils-776aae8e.js';
import './QueryEngine-c226e0c5.js';
import './QueryEngineCapabilities-45006836.js';
import './timeSupport-eac99e81.js';
import './FeatureStore-6d86d70a.js';
import './heatmapTextureUtils-076ceaf2.js';
import './projectExtentUtils-572728ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m=2500;let u$1=class extends g{getObjectId(){return this.objectId}};e([y$2({type:Number,json:{read:!0}})],u$1.prototype,"objectId",void 0),u$1=e([n("esri.layers.graphics.controllers.StreamGraphic")],u$1);class y$1{constructor(e){this.onUpdate=e,this._idToGraphic=new Map;}destroy(){this._idToGraphic.clear();}add(e){this._idToGraphic.set(e.objectId,e);}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e);}removeById(e){const t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}update(e,t){this.onUpdate(e,t);}get size(){return this._idToGraphic.size}}let f=class extends(a(m$1(m$2))){constructor(){super(...arguments),this._updateInfo={websocket:0,client:0},this.graphics=new r;}initialize(){this.addResolvingPromise(this.layer.when((()=>this._startup())));}destroy(){this.clear();}_clearInterval(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0);}clear(){this._clearInterval(),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll();}get updating(){return !this.connection||"connected"===this.connection.connectionStatus}_startup(){const{layer:e,layerView:t$1}=this,{parsedUrl:r,spatialReference:o,definitionExpression:s,geometryDefinition:i$1,objectIdField:n,timeInfo:c,purgeOptions:d,maxReconnectionAttempts:m,maxReconnectionInterval:u,customParameters:f}=e,_=i.toJSON(e.geometryType),g=o,I=t$1.view.spatialReference,v={geometry:i$1,where:s};this.clear(),this._set("connection",t(r,g,I,_,v,m,u,f)),this._outSpatialReference=I.toJSON(),this.store=new y$1(this._onUpdate.bind(this)),this.featuresManager=new h(this.store,n,c.toJSON(),d);const j="startup-watches";this.handles.remove(j),this.handles.add([this.connection.on("data-received",(e=>this._onFeature(e))),l((()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions]),(()=>this._startup()))],j),this._initUpdateInterval();}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{r$1(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);const t=u$1.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t);}catch{}}_onUpdate(e,t){r$1(t)&&this.graphics.removeMany(t),r$1(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e));}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval((()=>{const e=performance.now(),r=e-t;if(r>m){t=e;const o=Math.round(this._updateInfo.client/(r/1e3)),s=Math.round(this._updateInfo.websocket/(r/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:o,websocket:s});}this.featuresManager.checkForUpdates();}),e);}pauseStream(){this._clearInterval();}resumeStream(){this._initUpdateInterval();}};e([y$2()],f.prototype,"connection",void 0),e([y$2()],f.prototype,"layer",void 0),e([y$2()],f.prototype,"layerView",void 0),e([y$2({readOnly:!0})],f.prototype,"updating",null),f=e([n("esri.layers.graphics.controllers.StreamController")],f);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s=s=>{let n$1=class extends s{constructor(...r){super(...r),this.connectionError=null,this.filter=null;}get connectionStatus(){return this.controller?.connection?.connectionStatus??"disconnected"}};return e([y$2({readOnly:!0})],n$1.prototype,"connectionError",void 0),e([y$2({readOnly:!0})],n$1.prototype,"connectionStatus",null),e([y$2({type:y$3})],n$1.prototype,"filter",void 0),n$1=e([n("esri.layers.mixins.StreamLayerView")],n$1),n$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let y=class extends(s(w(n$1(u$2)))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=i$1.ASYNC,this.hasZ=!0,this.hasM=!1;}initialize(){this.handles.add(l((()=>this.suspended),(r=>{this.controller&&(r?this.controller.pauseStream():this.controller.resumeStream());})));}get connectionError(){const r=this.get("controller.connection.errorString");if(r)return new s$1("stream-controller",r)}createQuery(){return new x({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(r,e){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(r),e?.signal)}createController(){return new f({layer:this.layer,layerView:this})}beforeSetController(){}};e([y$2({readOnly:!0})],y.prototype,"updatePolicy",void 0),e([y$2({readOnly:!0})],y.prototype,"connectionError",null),e([y$2()],y.prototype,"controller",void 0),e([y$2({readOnly:!0})],y.prototype,"hasZ",void 0),e([y$2({readOnly:!0})],y.prototype,"hasM",void 0),y=e([n("esri.views.3d.layers.StreamLayerView3D")],y);const u=y;

export { u as default };
