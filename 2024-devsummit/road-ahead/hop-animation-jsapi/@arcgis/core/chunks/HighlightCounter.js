/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{h as t}from"./definitions.js";class e{constructor(){this._idToCounters=new Map}get empty(){return 0===this._idToCounters.size}addReason(t,e){for(const s of t){let t=this._idToCounters.get(s);t||(t=new Map,this._idToCounters.set(s,t)),t.set(e,(t.get(e)||0)+1)}}deleteReason(t,e){for(const s of t){const t=this._idToCounters.get(s);if(!t)continue;let o=t.get(e);if(null==o)return;o--,o>0?t.set(e,o):t.delete(e),0===t.size&&this._idToCounters.delete(s)}}getHighestReason(e){const s=this._idToCounters.get(e);if(!s)return null;let o=null;for(const e of t)s.get(e)&&(o=e);return o||null}ids(){return this._idToCounters.keys()}}export{e as H};
