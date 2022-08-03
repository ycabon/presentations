import { B as e, C as d$1, D as n, b3 as l$1, s, q as x, t, r } from './_virtual_index-9b831d4a.js';
import A from './FeatureLayerView2D-97112dd7.js';
import { e as e$1 } from './util-301a8acd.js';
import './EffectView-280fbeb4.js';
import './definitions-94cbc2bf.js';
import './LayerView2D-bd5847a4.js';
import './Container-38939417.js';
import './schemaUtils-c67b468a.js';
import './Utils-0ee32720.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './utils-bc8fd4f8.js';
import './MaterialKey-7b48d630.js';
import './alignmentUtils-d4b065e2.js';
import './visualVariablesUtils-3a3b1834.js';
import './createSymbolSchema-aa6ae1a4.js';
import './CIMSymbolHelper-6ee7aec0.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-320e051b.js';
import './ExpandedCIM-aa105730.js';
import './MD5-efff06bc.js';
import './FeatureLayerView-473ed4b0.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-c1e7b664.js';
import './LayerView-e26ca8f9.js';
import './RefreshableLayerView-18d98912.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const i={};return r(t$1)&&(i.geometry=t$1.toJSON()),r(e)&&(i.where=e),i}let d=class extends A{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([l$1((()=>this.layer?.purgeOptions),(()=>this._update())),l$1((()=>this.suspended),(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream();}))]);}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),s=this;return {remove(){r.remove(),"data-received"===e&&(s._proxy.closed||s.hasEventListener("data-received")||s._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=x.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}detach(){super.detach(),this.connectionStatus="disconnected";}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([d$1()],d.prototype,"errorString",void 0),e([d$1({readOnly:!0})],d.prototype,"connectionError",null),e([d$1()],d.prototype,"connectionStatus",void 0),d=e([n("esri.views.2d.layers.StreamLayerView2D")],d);const u=d;

export { u as default };
