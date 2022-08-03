import { B as e, C as d, D as n, s, a5 as E, r } from './_virtual_index-9b831d4a.js';
import { s as s$1 } from './drapedUtils-7abad8d8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)throw new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});if("tile"!==a.type)throw new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type});const i=this.get("view.scale"),c=a.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return E(c.map((async r$1=>{const o=r$1.createQuery(),a=r(s$2)?s$2.event:null,i=s$1({renderer:r$1.renderer,event:a});o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o.outFields=await r$1.popupTemplate.getRequiredFields();return (await r$1.queryFeatures(o)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([d()],c.prototype,"layer",void 0),c=e([n("esri.layers.mixins.TileLayerView")],c),c};

export { i };
