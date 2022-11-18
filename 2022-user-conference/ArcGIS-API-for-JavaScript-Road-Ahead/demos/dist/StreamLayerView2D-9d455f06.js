import { u as e, y, z as n, b7 as l$1, E as s, k as x, t, m as r } from './_virtual_index-1ea2035a.js';
import B from './FeatureLayerView2D-aef9f032.js';
import { e as e$1 } from './util-b1c4d8f0.js';
import './EffectView-de5a8347.js';
import './definitions-a784b44f.js';
import './LayerView2D-0acb5666.js';
import './utils-94e6680e.js';
import './enums-4e1a5b11.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './Utils-7b2ac961.js';
import './number-7d0da80b.js';
import './enums-3e26cf0d.js';
import './schemaUtils-15a39169.js';
import './visualVariablesUtils-933d57c8.js';
import './createSymbolSchema-49eb4f50.js';
import './cimAnalyzer-32e4ad07.js';
import './fontUtils-49a60944.js';
import './BidiEngine-25d35bf3.js';
import './Rect-1c5846da.js';
import './GeometryUtils-10c98655.js';
import './ExpandedCIM-a44ee24d.js';
import './FeatureLayerView-30945c9f.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-4fcb9e6d.js';
import './LayerView-04d8537b.js';
import './RefreshableLayerView-f32b8d34.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const i={};return r(t$1)&&(i.geometry=t$1.toJSON()),r(e)&&(i.where=e),i}let d=class extends B{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([l$1((()=>this.layer?.purgeOptions),(()=>this._update())),l$1((()=>this.suspended),(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream();}))]);}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),s=this;return {remove(){r.remove(),"data-received"===e&&(s._proxy.closed||s.hasEventListener("data-received")||s._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=x.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}detach(){super.detach(),this.connectionStatus="disconnected";}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([y()],d.prototype,"errorString",void 0),e([y({readOnly:!0})],d.prototype,"connectionError",null),e([y()],d.prototype,"connectionStatus",void 0),d=e([n("esri.views.2d.layers.StreamLayerView2D")],d);const u=d;

export { u as default };
