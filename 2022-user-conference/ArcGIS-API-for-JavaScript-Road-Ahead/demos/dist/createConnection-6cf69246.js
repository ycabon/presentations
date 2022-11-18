import { b1 as n$1, E as s, u as e, y, z as n$2, o, m as r, t as t$1, mn as Bt, $ as s$1, tH as U, aH as D, U as U$1, Q as v, x, d8 as i, lv as q, O as k, sY as c$1 } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let c=class extends n$1.EventedAccessor{get connectionError(){return this.errorString?new s("stream-connection",this.errorString):null}onFeature(r){this.emit("data-received",r);}};e([y({readOnly:!0})],c.prototype,"connectionError",null),c=e([n$2("esri.layers.support.StreamConnection")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var p$1;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED";}(p$1||(p$1={}));let u=class extends n{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:o$1,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=o(t,s,o$1),this._open();}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake();}destroy(){r(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null;}get connectionStatus(){if(t$1(this._websocket))return "disconnected";switch(this._websocket.readyState){case p$1.CONNECTING:case p$1.OPEN:return "connected";case p$1.CLOSING:case p$1.CLOSED:return "disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,s$2=1e3,r=0){try{if(this.destroyed)return;const t=Bt(e,this._config.customParameters);this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus");}catch(c){const i=s$2/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(s$1.getLogger(this.declaredClass).error(new s("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(s$1.getLogger(this.declaredClass).error(new s("websocket-connection",`Failed to connect. Attempting to reconnect in ${i}s`,c)),await U(s$2),this._tryCreateWebSocket(e,Math.min(1.5*s$2,1e3*this._config.maxReconnectionInterval),r+1))}}_createWebSocket(e){return new Promise(((t,o)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),s.onmessage=e=>this._onMessage(e),t(s);},s.onclose=e=>{s.onopen=s.onclose=null,o(e);};}))}async _handshake(e=1e4){const s$2=this._websocket;if(t$1(s$2))return;const n=D(),i=s$2.onmessage,{filter:a,outFields:l,spatialReference:d}=this._config;return n.timeout(e),s$2.onmessage=e=>{let r=null;try{r=JSON.parse(e.data);}catch(c){}r&&"object"==typeof r||(s$1.getLogger(this.declaredClass).error(new s("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),n.reject(),this.destroy()),r.spatialReference?.wkid!==d?.wkid&&(s$1.getLogger(this.declaredClass).error(new s("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${d.wkid}`,e.data)),n.reject(),this.destroy()),"json"!==r.format&&(s$1.getLogger(this.declaredClass).error(new s("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),n.reject(),this.destroy()),a&&r.filter!==a&&s$1.getLogger(this.declaredClass).error(new s("websocket-connection","Tried to set filter, but server doesn't support it")),l&&r.outFields!==l&&s$1.getLogger(this.declaredClass).error(new s("websocket-connection","Tried to set outFields, but server doesn't support it")),s$2.onmessage=i,n.resolve();},s$2.send(JSON.stringify({filter:a,outFields:l,format:"json",spatialReference:{wkid:d.wkid}})),n.promise}_onMessage(e){try{const o=JSON.parse(e.data);if("featureResult"!==o.type)throw new s("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",o);for(const e of o.features)r(this._featureZScaler)&&this._featureZScaler(e.geometry),this.onFeature(e);}catch(r){return s$1.getLogger(this.declaredClass).error(new s("websocket-connection","Failed to parse message",r)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),s$1.getLogger(this.declaredClass).error("websocket-connection",t);}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&s$1.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open();}};e([y()],u.prototype,"connectionStatus",null),e([y()],u.prototype,"errorString",void 0),u=e([n$2("esri.layers.graphics.sources.connections.WebSocketConnection")],u);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m=1e4,p={maxQueryDepth:5,maxRecordCountFactor:3};let _=class extends u{constructor(e){super({...p,...e});}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||s$1.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o);}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),r(this._featureZScaler)&&this._featureZScaler(t.geometry);}catch(i){return void s$1.getLogger(this.declaredClass).error(new s("geoevent-connection","Failed to parse message",i))}this.onFeature(t);}async _fetchServiceDefinition(e){const r={f:"json",...this._config.customParameters},s=U$1(e.path,{query:r,responseType:"json"}),o=(await s).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,i=this._inferWebSocketBaseUrl(s);return Bt(`${i}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return s$1.getLogger(this.declaredClass).error(new s("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const o=this._websocket;if(t$1(o)||t$1(e)&&t$1(t))return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let a=!1;const u=D(),d=()=>{a||(this.destroyed||this._websocket!==o||s$1.getLogger(this.declaredClass).error(new s("geoevent-connection","Server timed out when setting filter")),u.reject());},l=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(s$1.getLogger(this.declaredClass).error(new s("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),u.reject(t.error)),o.onmessage=this._onMessage.bind(this),a=!0,u.resolve());};return o.onmessage=l,o.send(n),setTimeout(d,m),u.promise}_serializeFilter(e,t){const n={};if(t$1(e)&&t$1(t))return n;if(r(e)&&e.geometry)try{const t=v(e.geometry);if("extent"!==t.type)throw new s(`Expected extent but found type ${t.type}`);n.geometry=JSON.stringify(t.shiftCentralMeridian());}catch(a){s$1.getLogger(this.declaredClass).error(new s("geoevent-connection","Encountered an error when setting connection geometryDefinition",a));}return r(e)&&e.where&&"1 = 1"!==e.where&&(n.where=e.where),r(t)&&(n.outFields=t.join(",")),n}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,o=e.attributes[t];if(!this._relatedFeatures.has(o))return s$1.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:i,geometry:n}=this._relatedFeatures.get(o);for(const r in i)e.attributes[r]=i[r];return n&&(e.geometry=n),e.geometry||e.centroid||s$1.getLogger(this.declaredClass).error(new s("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const i of o.features)this.onFeature(this._enrich(i));}catch(e){s$1.getLogger(this.declaredClass).error(new s("geoevent-connection","Encountered an error when querying buddy services",{error:e}));}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t);}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await import('./_virtual_index-1ea2035a.js').then(function (n) { return n.zh; })).default)({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,i$1=r.query.supportsCentroid,c=this._config.maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,d=s?u*c:u,l=new x;if(l.outFields=i(this._config.outFields,["*"]),l.where=i(q(this._config.filter,"where"),"1=1"),l.returnGeometry=!0,l.returnExceededLimitFeatures=!0,l.outSpatialReference=k.fromJSON(this._config.spatialReference),i$1&&(l.returnCentroid=!0),s&&(l.maxRecordCountFactor=c),o)return l.num=d,t.destroy(),this._queryPages(e,l);const g=await c$1(e,l,this._config.sourceSpatialReference);return t.destroy(),g.data}async _queryPages(e,t,r$1=[],s=0){t.start=r(t.num)?s*t.num:null;const{data:i}=await c$1(e,t,this._config.sourceSpatialReference);return i.exceededTransferLimit&&s<this._config.maxQueryDepth?(i.features.forEach((e=>r$1.push(e))),this._queryPages(e,t,r$1,s+1)):(r$1.forEach((e=>i.features.push(e))),i)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[s];t.set(e,o);}this._relatedFeatures=t;}};_=e([n$2("esri.layers.graphics.sources.connections.GeoEventConnection")],_);const w=_;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(t,o,r,c,i,s,a,m){const p=0===t.path.indexOf("wss://")||0===t.path.indexOf("ws://"),f={source:t,sourceSpatialReference:o,spatialReference:r,geometryType:c,filter:i,maxReconnectionAttempts:s,maxReconnectionInterval:a,customParameters:m};return p?new u(f):new w(f)}

export { t as createConnection };
