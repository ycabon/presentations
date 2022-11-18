import { I as x, bl as f, t, u as e, z as n$1 } from './_virtual_index-1ea2035a.js';
import { F } from './DynamicLayerView3D-43f7d65f.js';
import { m } from './ImageryLayerView-5d49c55d.js';
import './LayerView3D-c60482d9.js';
import './projectExtentUtils-572728ae.js';
import './ImageMaterial-26ca33d0.js';
import './LayerView-04d8537b.js';
import './RefreshableLayerView-f32b8d34.js';
import './popupUtils-4fcb9e6d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n=class extends(m(F)){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=x((async e=>{this.redraw(((e,a)=>this._redrawImage(e,a)),e);}),2e3);}initialize(){this.handles.add([f((()=>this.view.basemapTerrain.ready),(()=>this._initializeMaximumDataResolution()),{once:!0,initial:!0}),this.layer.on("redraw",(()=>this.updatingHandles.addPromise(this.redrawDebounced())))]),this.updatingHandles.add((()=>this.layer?.exportImageServiceParameters?.version),(()=>{this.updatingHandles.addPromise(this.refreshDebounced());})),this.updatingHandles.add((()=>this.layer?.renderer),(()=>{this.updatingHandles.addPromise(this.refreshDebounced());})),this.updatingHandles.add((()=>this.timeExtent),(()=>this.updatingHandles.addPromise(this.refreshDebounced())));}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null;}getFetchOptions(){return {timeExtent:this.timeExtent}}async processResult(e,a,t){a.imageOrCanvasElement?e.image=a.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=a.pixelData,await this._redrawImage(e,t));}async _redrawImage(e,t$1){if(!(e.image instanceof HTMLCanvasElement)||t(e.pixelData))throw new Error;const i=e.image,r=i.getContext("2d"),s=await this.layer.applyRenderer(e.pixelData,{signal:t$1}),o=this.layer.applyFilter(s).pixelBlock;if(t(o))throw new Error;i.width=o.width,i.height=o.height;const n=r.createImageData(o.width,o.height);n.data.set(o.getAsRGBA()),r.putImageData(n,0,0);}};n=e([n$1("esri.views.3d.layers.ImageryLayerView3D")],n);const d=n;

export { d as default };
