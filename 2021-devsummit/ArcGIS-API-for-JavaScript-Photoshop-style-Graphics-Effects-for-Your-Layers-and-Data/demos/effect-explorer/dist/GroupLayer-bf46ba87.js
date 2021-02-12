import { ef as t, ej as l, ek as d, gR as l$1, gS as p, el as l$2, gT as d$1, a as u, U, gM as i, gU as e, q as e$1, y, bn as o, r as i$1, eS as b$1 } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let b=class extends(t(l(d(l$1(p(l$2(b$1))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this);}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0);}_writeLayers(i,t,s,r){const o=[];if(!i)return o;i.forEach((i=>{const t=d$1(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);u(t)&&t.layerType&&o.push(t);})),t.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),U(this)}loadAll(){return i(this,(i=>{i(this.layers);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e$1){if(!e(this).initialized)return;const s=this.layers;let r=s.find((i=>i.visible));switch(i){case"exclusive":s.length&&!r&&(r=s.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":s.forEach((i=>{i.visible=e$1;}));}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};e$1([y()],b.prototype,"fullExtent",void 0),e$1([y({json:{read:!1,write:{ignoreOrigin:!0}}})],b.prototype,"layers",void 0),e$1([o("layers")],b.prototype,"_writeLayers",null),e$1([y({type:["GroupLayer"]})],b.prototype,"operationalLayerType",void 0),e$1([y({json:{origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"portalItem",null),e$1([y()],b.prototype,"spatialReference",void 0),e$1([y({json:{read:!1},readOnly:!0,value:"group"})],b.prototype,"type",void 0),e$1([y({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],b.prototype,"visibilityMode",null),b=e$1([i$1("esri.layers.GroupLayer")],b);var v=b;

export default v;
