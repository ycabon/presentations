import { E as s, u as e, y, z as n$2 } from './_virtual_index-1ea2035a.js';
import { n as n$1 } from './LayerView3D-c60482d9.js';
import { c } from './TiledLayerView3D-30bc8b2b.js';
import { u } from './LayerView-04d8537b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends(c(n$1(u))){constructor(){super(...arguments),this.type="elevation-3d";}get tileInfo(){return this.layer.tileInfo}initialize(){const e=this.view?.map?.allLayers,o=e&&e.includes(this.layer),s$1=this.view?.map?.ground?.layers,i=s$1&&s$1.includes(this.layer);if(o&&!i){const e=new s("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(e));}this._addTilingSchemeMatchPromise();}};e([y()],l.prototype,"layer",void 0),e([y()],l.prototype,"tileInfo",null),l=e([n$2("esri.views.3d.layers.ElevationLayerView3D")],l);const n=l;

export { n as default };
