import { q as e, y, r as i, h as s, d8 as g, t, a as u } from './index.js';
import { k as e$1 } from './shapingUtils-dcbb2c5b.js';
import $ from './FeatureLayerView2D-0ea6e473.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-ea321f1e.js';
import './RenderingContext-d31ba1e0.js';
import './_commonjsHelpers-34398bae.js';
import './MaterialKey-54202b75.js';
import './visualVariablesUtils-f62b50fc.js';
import './Rect-49fd2d8c.js';
import './LayerView2D-a323da6b.js';
import './Container-afb7bc3e.js';
import './mat4f32-a4d1c0af.js';
import './clickToleranceUtils-0f752c5c.js';
import './drapedUtils-ae82545f.js';
import './popupUtils-9fe0c48a.js';
import './graphicsUtils-9af6492a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function p(e,o){if(t(e)&&t(o))return null;const i={};return u(o)&&(i.geometry=o.toJSON()),u(e)&&(i.where=e),i}let l=class extends ${constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,t){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=g.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(p(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,s=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:p(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:s,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval}}};e([y()],l.prototype,"errorString",void 0),e([y({dependsOn:["errorString"],readOnly:!0})],l.prototype,"connectionError",null),e([y()],l.prototype,"connectionStatus",void 0),l=e([i("esri.views.2d.layers.StreamLayerView2D")],l);var d=l;

export default d;
