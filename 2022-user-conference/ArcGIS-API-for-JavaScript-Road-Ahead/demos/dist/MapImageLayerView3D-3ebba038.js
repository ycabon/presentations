import { B as e, D as n } from './_virtual_index-9b831d4a.js';
import { F } from './DynamicLayerView3D-924fb521.js';
import { P } from './MapImageLayerView-328409cd.js';
import { a as a$1 } from './drapedUtils-7abad8d8.js';
import './LayerView3D-b7813df6.js';
import './projectExtentUtils-f9a0a9e9.js';
import './ImageMaterial-a06d60b6.js';
import './LayerView-e26ca8f9.js';
import './RefreshableLayerView-18d98912.js';
import './ExportImageParameters-07df6265.js';
import './floorFilterUtils-776aae8e.js';
import './sublayerUtils-0c1618ac.js';
import './popupUtils-c1e7b664.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i=class extends(P(F)){constructor(){super(...arguments),this.type="map-image-3d";}initialize(){this.updatingHandles.add((()=>this.exportImageVersion),(()=>this.updatingHandles.addPromise(this.refreshDebounced())));}createFetchPopupFeaturesQueryGeometry(e,r){return a$1(e,r,this.view)}getFetchOptions(){return {timeExtent:this.timeExtent}}};i=e([n("esri.views.3d.layers.MapImageLayerView3D")],i);const a=i;

export { a as default };
