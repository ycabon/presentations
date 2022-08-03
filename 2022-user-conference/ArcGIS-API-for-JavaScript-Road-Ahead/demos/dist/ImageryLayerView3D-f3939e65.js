import { N as x, bh as f, r, t, B as e, D as n } from './_virtual_index-9b831d4a.js';
import { F } from './DynamicLayerView3D-924fb521.js';
import { m as m$1 } from './ImageryLayerView-0e7432d9.js';
import './LayerView3D-b7813df6.js';
import './projectExtentUtils-f9a0a9e9.js';
import './ImageMaterial-a06d60b6.js';
import './LayerView-e26ca8f9.js';
import './RefreshableLayerView-18d98912.js';
import './popupUtils-c1e7b664.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends(m$1(F)){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=x((async e=>{this.redraw(((e,t)=>this._redrawImage(e,t)),e);}),2e3);}initialize(){this.handles.add([f((()=>this.view.basemapTerrain.ready),(()=>this._initializeMaximumDataResolution()),{once:!0,initial:!0}),this.layer.on("redraw",(()=>this.updatingHandles.addPromise(this.redrawDebounced())))]),this.updatingHandles.add((()=>this.layer?.exportImageServiceParameters?.version),(()=>{this.updatingHandles.addPromise(this.refreshDebounced());})),this.updatingHandles.add((()=>this.timeExtent),(()=>this.updatingHandles.addPromise(this.refreshDebounced())));}_initializeMaximumDataResolution(){this.maximumDataResolution=r(this.layer.serviceRasterInfo)?this.layer.serviceRasterInfo.pixelSize:null;}getFetchOptions(){return {timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageElement?e.image=t.imageElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a));}async _redrawImage(e,t$1){if(!(e.image instanceof HTMLCanvasElement)||t(e.pixelData))throw new Error;const i=e.image,r=i.getContext("2d"),s=await this.layer.applyRenderer(e.pixelData,{signal:t$1}),o=this.layer.applyFilter(s).pixelBlock;if(t(o))throw new Error;i.width=o.width,i.height=o.height;const n=r.createImageData(o.width,o.height);n.data.set(o.getAsRGBA()),r.putImageData(n,0,0);}};m=e([n("esri.views.3d.layers.ImageryLayerView3D")],m);const d=m;

export { d as default };
