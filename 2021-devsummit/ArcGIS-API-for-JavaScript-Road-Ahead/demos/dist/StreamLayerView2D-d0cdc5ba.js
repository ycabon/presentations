import { j as e, y, k as i, s, ca as g, t, r } from './_virtual_index-634cbc09.js';
import { q as e$1 } from './schemaUtils-35ff841b.js';
import Y from './FeatureLayerView2D-f462b31c.js';
import './MD5-a554c7d9.js';
import './Utils-3e0360c1.js';
import './FramebufferObject-553bb493.js';
import './_commonjsHelpers-3f70742c.js';
import './MaterialKey-202e82ff.js';
import './visualVariablesUtils-07a6daab.js';
import './definitions-12783a0f.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './LayerView2D-9976179f.js';
import './Container-87e93059.js';
import './mat4f32-8dd9e37a.js';
import './clickToleranceUtils-0399fce2.js';
import './drapedUtils-302ab53b.js';
import './popupUtils-88c6ff22.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function p(e,o){if(t(e)&&t(o))return null;const i={};return r(o)&&(i.geometry=o.toJSON()),r(e)&&(i.where=e),i}let l=class extends Y{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))]);}destroy(){this.connectionStatus="disconnected";}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),o=this;return {remove(){r.remove(),"data-received"===e&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,t){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=g.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(p(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),o=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,s=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:o,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:p(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:s,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval}}};e([y()],l.prototype,"errorString",void 0),e([y({readOnly:!0})],l.prototype,"connectionError",null),e([y()],l.prototype,"connectionStatus",void 0),l=e([i("esri.views.2d.layers.StreamLayerView2D")],l);var d=l;

export default d;
