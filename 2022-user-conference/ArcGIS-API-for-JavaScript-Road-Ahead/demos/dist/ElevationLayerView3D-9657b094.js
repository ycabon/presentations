import { s, B as e, C as d, D as n$1 } from './_virtual_index-9b831d4a.js';
import { n } from './LayerView3D-b7813df6.js';
import { c } from './TiledLayerView3D-3780d78b.js';
import { u } from './LayerView-e26ca8f9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends(c(n(u))){constructor(){super(...arguments),this.type="elevation-3d";}initialize(){const e=this.view?.map?.allLayers,o=e&&e.includes(this.layer),s$1=this.view?.map?.ground?.layers,i=s$1&&s$1.includes(this.layer);if(o&&!i){const e=new s("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(e));}this._addTilingSchemeMatchPromise();}};e([d()],l.prototype,"layer",void 0),e([d({readOnly:!0,aliasOf:"layer.tileInfo"})],l.prototype,"tileInfo",void 0),l=e([n$1("esri.views.3d.layers.ElevationLayerView3D")],l);const p=l;

export { p as default };
