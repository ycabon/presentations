import { B as e, C as d$1, D as n, aP as l$1, s, q as x, t, r } from './_virtual_index-fc1e0009.js';
import A from './FeatureLayerView2D-c300d379.js';
import { e as e$1 } from './util-1b5d3cc6.js';
import './EffectView-1b384502.js';
import './definitions-20a531fc.js';
import './LayerView2D-915c0186.js';
import './utils-9d4b373e.js';
import './Utils-073d76fd.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './enums-fb707d37.js';
import './Texture-4621aa9a.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-833d16dd.js';
import './alignmentUtils-d4b065e2.js';
import './schemaUtils-001ae18f.js';
import './visualVariablesUtils-cff6b693.js';
import './createSymbolSchema-6c79a99e.js';
import './CIMSymbolHelper-d0b50b9c.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-3ce2e497.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-8dbd5635.js';
import './callExpressionWithFeature-1f700441.js';
import './ExpandedCIM-1216aadf.js';
import './MD5-efff06bc.js';
import './floorFilterUtils-776aae8e.js';
import './popupUtils-42893d47.js';
import './LayerView-9aad410e.js';
import './RefreshableLayerView-894e8344.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const i={};return r(t$1)&&(i.geometry=t$1.toJSON()),r(e)&&(i.where=e),i}let d=class extends A{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([l$1((()=>this.layer?.purgeOptions),(()=>this._update())),l$1((()=>this.suspended),(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream();}))]);}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),s=this;return {remove(){r.remove(),"data-received"===e&&(s._proxy.closed||s.hasEventListener("data-received")||s._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=x.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}detach(){super.detach(),this.connectionStatus="disconnected";}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([d$1()],d.prototype,"errorString",void 0),e([d$1({readOnly:!0})],d.prototype,"connectionError",null),e([d$1()],d.prototype,"connectionStatus",void 0),d=e([n("esri.views.2d.layers.StreamLayerView2D")],d);const u=d;

export { u as default };
