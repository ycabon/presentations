import { ac as e, ad as d$1, ae as i, s, d8 as g, g as t, h as r } from './_virtual_index-3ad07138.js';
import D from './FeatureLayerView2D-96f788fe.js';
import { e as e$1 } from './util-af29771e.js';
import './Container-0ea8b7c2.js';
import './drapedUtils-4e6cbba2.js';
import './LayerView-ccf9971d.js';
import './schemaUtils-05c05689.js';
import './Utils-ba2d87f4.js';
import './Texture-970325f3.js';
import './MaterialKey-8a7bcdbb.js';
import './visualVariablesUtils-b2bf8e17.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './MD5-a16a7511.js';
import './popupUtils-9bd5eacf.js';
import './RefreshableLayerView-cd718d73.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const s={};return r(t$1)&&(s.geometry=t$1.toJSON()),r(e)&&(s.where=e),s}let p=class extends D{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=g.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=e$1(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([d$1()],p.prototype,"errorString",void 0),e([d$1({readOnly:!0})],p.prototype,"connectionError",null),e([d$1()],p.prototype,"connectionStatus",void 0),p=e([i("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;

export { d as default };
