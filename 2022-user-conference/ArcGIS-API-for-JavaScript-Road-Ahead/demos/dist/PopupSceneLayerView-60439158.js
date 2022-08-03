import { B as e, D as n, s, r, lM as I, nf as me } from './_virtual_index-9b831d4a.js';
import { s as s$1, d } from './popupUtils-c1e7b664.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const c=c=>{let u=class extends c{_validateFetchPopupFeatures(e){const{layer:t}=this,{popupEnabled:s$2}=t;if(!s$2)return new s("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t});return s$1(t,e)?void 0:new s("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,r$1){const s=this._validateFetchPopupFeatures(r$1);if(s)throw s;const c=r(r$1)?r$1.clientGraphics:null;if(!c||0===c.length)return [];const u="scene"===this.layer.type&&r(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,n=I(this.layer.fieldsIndex,await d(u,s$1(this.layer,r$1)));await this.prepareFetchPopupFeatures(n);const l=new Set,h=[],y=[];for(const t of c)me(n,t,l)?y.push(t):h.push(t);return 0===y.length?h:this.whenGraphicAttributes(y,[...l]).catch((()=>y)).then((e=>h.concat(e)))}};return u=e([n("esri.views.3d.layers.support.PopupSceneLayerView")],u),u};

export { c };
