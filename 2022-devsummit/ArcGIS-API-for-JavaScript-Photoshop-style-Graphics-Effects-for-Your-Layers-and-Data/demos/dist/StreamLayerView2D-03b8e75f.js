import { ac as e, ad as d$1, ae as i, s, da as g, g as t, h as r } from './_virtual_index-49b2bc11.js';
import D from './FeatureLayerView2D-7d3f68d7.js';
import { e as e$1 } from './util-2e9ee3aa.js';
import './Container-905526e1.js';
import './drapedUtils-548aa09d.js';
import './LayerView-9194fd82.js';
import './schemaUtils-54c0b4c1.js';
import './Utils-8759b086.js';
import './Texture-7f200883.js';
import './MaterialKey-67bb5654.js';
import './visualVariablesUtils-9beed5ec.js';
import './CIMSymbolHelper-bfef80ee.js';
import './BidiEngine-1d3a0a6d.js';
import './cimSymbolUtils-634dbb78.js';
import './quantizationUtils-65d5f437.js';
import './devEnvironmentUtils-a78265ea.js';
import './MD5-a16a7511.js';
import './popupUtils-91783a27.js';
import './RefreshableLayerView-a108c313.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const s={};return r(t$1)&&(s.geometry=t$1.toJSON()),r(e)&&(s.where=e),s}let p=class extends D{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=g.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=e$1(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([d$1()],p.prototype,"errorString",void 0),e([d$1({readOnly:!0})],p.prototype,"connectionError",null),e([d$1()],p.prototype,"connectionStatus",void 0),p=e([i("esri.views.2d.layers.StreamLayerView2D")],p);const d=p;

export { d as default };
