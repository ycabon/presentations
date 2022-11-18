import { u as e, z as n } from './_virtual_index-1ea2035a.js';
import { F as F$1 } from './DynamicLayerView3D-43f7d65f.js';
import { F } from './MapImageLayerView-842d49f0.js';
import { a as a$1 } from './drapedUtils-fff0739e.js';
import './LayerView3D-c60482d9.js';
import './projectExtentUtils-572728ae.js';
import './ImageMaterial-26ca33d0.js';
import './LayerView-04d8537b.js';
import './RefreshableLayerView-f32b8d34.js';
import './ExportImageParameters-4d04def3.js';
import './floorFilterUtils-776aae8e.js';
import './sublayerUtils-23d5ec90.js';
import './popupUtils-4fcb9e6d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let o=class extends(F(F$1)){constructor(){super(...arguments),this.type="map-image-3d";}initialize(){this.updatingHandles.add((()=>this.exportImageVersion),(()=>this.updatingHandles.addPromise(this.refreshDebounced())));}createFetchPopupFeaturesQueryGeometry(e,r){return a$1(e,r,this.view)}highlight(e){return {remove:()=>{}}}highlightGraphicUpdated(e,r){}getFetchOptions(){return {timeExtent:this.timeExtent}}};o=e([n("esri.views.3d.layers.MapImageLayerView3D")],o);const a=o;

export { a as default };
