import { E as s, w, u as e, z as n$1 } from './_virtual_index-1ea2035a.js';
import { F } from './DynamicLayerView3D-43f7d65f.js';
import { a as a$1 } from './WMSLayerView-f4bb9eea.js';
import './LayerView3D-c60482d9.js';
import './projectExtentUtils-572728ae.js';
import './ImageMaterial-26ca33d0.js';
import './LayerView-04d8537b.js';
import './RefreshableLayerView-f32b8d34.js';
import './ExportWMSImageParameters-aeff78dd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends(a$1(F)){constructor(){super(...arguments),this.type="wms-3d";}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add((()=>this.exportImageParameters?.version),(()=>{this.updatingHandles.addPromise(this.refreshDebounced());}));}createFetchPopupFeaturesQuery(e){const t=this.findExtentInfoAt(e),r=t.extent,i=new w(r[0],r[1],r[2],r[3],this._spatialReference),o=t.imageSize,a=o.width,n=o.height,p=i.width/a;return {extent:i,width:a,height:n,x:Math.round((e.x-i.xmin)/p),y:Math.round((i.ymax-e.y)/p)}}getFetchOptions(){return {timeExtent:this.timeExtent}}};a=e([n$1("esri.views.3d.layers.WMSLayerView3D")],a);const n=a;

export { n as default };
