import { B as e, C as d, D as n, ba as a, k6 as m$1, E as f$1, pC as i, b3 as l, r as r$1, g, lI as y$2, gc as i$1, s as s$1, d as b } from './_virtual_index-9b831d4a.js';
import { t, h } from './createConnection-2f78aff8.js';
import { r } from './EventedSet-4ccd5299.js';
import { E } from './FeatureLikeLayerView3D-74367ab7.js';
import { n as n$1 } from './LayerView3D-b7813df6.js';
import { u as u$2 } from './LayerView-e26ca8f9.js';
import './CircularArray-56e394eb.js';
import './dehydratedFeatureComparison-dbb61b6e.js';
import './Graphics3DFeatureProcessor-54aa608f.js';
import './Graphics3DScaleVisibility-2c856a9f.js';
import './rendererConversion-c619220f.js';
import './optimizedFeatureQueryEngineAdapter-66a8e5a3.js';
import './centroid-3313e4f0.js';
import './Graphics3DObjectStates-f844df23.js';
import './attributeUtils-cf3c0bd5.js';
import './floorFilterUtils-776aae8e.js';
import './QueryEngine-12d30a72.js';
import './QueryEngineCapabilities-140b3c8f.js';
import './timeSupport-a77eca3d.js';
import './FeatureStore-9335c4fa.js';
import './heatmapTextureUtils-0da3eb14.js';
import './projectExtentUtils-f9a0a9e9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m=2500;let u$1=class extends g{getObjectId(){return this.objectId}};e([d({type:Number,json:{read:!0}})],u$1.prototype,"objectId",void 0),u$1=e([n("esri.layers.graphics.controllers.StreamGraphic")],u$1);class y$1{constructor(e){this.onUpdate=e,this._idToGraphic=new Map;}destroy(){this._idToGraphic.clear();}add(e){this._idToGraphic.set(e.objectId,e);}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e);}removeById(e){const t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}update(e,t){this.onUpdate(e,t);}get size(){return this._idToGraphic.size}}let f=class extends(a(m$1(f$1))){constructor(){super(...arguments),this._updateInfo={websocket:0,client:0},this.graphics=new r;}initialize(){this.addResolvingPromise(this.layer.when((()=>this._startup())));}destroy(){this.clear();}_clearInterval(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0);}clear(){this._clearInterval(),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll();}get updating(){return !this.connection||"connected"===this.connection.connectionStatus}_startup(){const{layer:e,layerView:t$1}=this,{parsedUrl:r,spatialReference:o,definitionExpression:s,geometryDefinition:i$1,objectIdField:n,timeInfo:c,purgeOptions:l$1,maxReconnectionAttempts:m,maxReconnectionInterval:u,customParameters:f}=e,_=i.toJSON(e.geometryType),g=o,I=t$1.view.spatialReference,v={geometry:i$1,where:s};this.clear(),this._set("connection",t(r,g,I,_,v,m,u,f)),this._outSpatialReference=I.toJSON(),this.store=new y$1(this._onUpdate.bind(this)),this.featuresManager=new h(this.store,n,c.toJSON(),l$1);const j="startup-watches";this.handles.remove(j),this.handles.add([this.connection.on("feature",(e=>this._onFeature(e))),l((()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions]),(()=>this._startup()))],j),this._initUpdateInterval();}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{r$1(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);const t=u$1.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t);}catch{}}_onUpdate(e,t){r$1(t)&&this.graphics.removeMany(t),r$1(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e));}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval((()=>{const e=performance.now(),r=e-t;if(r>m){t=e;const o=Math.round(this._updateInfo.client/(r/1e3)),s=Math.round(this._updateInfo.websocket/(r/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:o,websocket:s});}this.featuresManager.checkForUpdates();}),e);}pauseStream(){this._clearInterval();}resumeStream(){this._initUpdateInterval();}};e([d()],f.prototype,"connection",void 0),e([d()],f.prototype,"layer",void 0),e([d()],f.prototype,"layerView",void 0),e([d({readOnly:!0})],f.prototype,"updating",null),f=e([n("esri.layers.graphics.controllers.StreamController")],f);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s=s=>{let c=class extends s{constructor(...r){super(...r),this.connectionError=null,this.connectionStatus="disconnected",this.filter=null;}};return e([d({readOnly:!0})],c.prototype,"connectionError",void 0),e([d({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],c.prototype,"connectionStatus",void 0),e([d({type:y$2})],c.prototype,"filter",void 0),c=e([n("esri.layers.mixins.StreamLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let y=class extends(s(E(n$1(u$2)))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=i$1.ASYNC,this.hasZ=!0,this.hasM=!1;}initialize(){this.handles.add(l((()=>this.suspended),(r=>{this.controller&&(r?this.controller.pauseStream():this.controller.resumeStream());})));}get connectionError(){const r=this.get("controller.connection.errorString");if(r)return new s$1("stream-controller",r)}createQuery(){return new b({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(r,e){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(r),e?.signal)}createController(){return new f({layer:this.layer,layerView:this})}beforeSetController(){}};e([d({readOnly:!0})],y.prototype,"updatePolicy",void 0),e([d({readOnly:!0})],y.prototype,"connectionError",null),e([d()],y.prototype,"controller",void 0),e([d({readOnly:!0})],y.prototype,"hasZ",void 0),e([d({readOnly:!0})],y.prototype,"hasM",void 0),y=e([n("esri.views.3d.layers.StreamLayerView3D")],y);const u=y;

export { u as default };
