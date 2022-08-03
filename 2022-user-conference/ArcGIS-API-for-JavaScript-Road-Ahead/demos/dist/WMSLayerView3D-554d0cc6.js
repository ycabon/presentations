import { s, w, B as e, D as n$1 } from './_virtual_index-9b831d4a.js';
import { F } from './DynamicLayerView3D-924fb521.js';
import { a as a$1 } from './WMSLayerView-c29ba37a.js';
import './LayerView3D-b7813df6.js';
import './projectExtentUtils-f9a0a9e9.js';
import './ImageMaterial-a06d60b6.js';
import './LayerView-e26ca8f9.js';
import './RefreshableLayerView-18d98912.js';
import './ExportWMSImageParameters-658e0e82.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends(a$1(F)){constructor(){super(...arguments),this.type="wms-3d";}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add((()=>this.exportImageParameters?.version),(()=>{this.updatingHandles.addPromise(this.refreshDebounced());}));}createFetchPopupFeaturesQuery(e){const t=this.findExtentInfoAt(e),r=t.extent,i=new w(r[0],r[1],r[2],r[3],this._spatialReference),o=t.imageSize,a=o.width,n=o.height,p=i.width/a;return {extent:i,width:a,height:n,x:Math.round((e.x-i.xmin)/p),y:Math.round((i.ymax-e.y)/p)}}getFetchOptions(){return {timeExtent:this.timeExtent}}};a=e([n$1("esri.views.3d.layers.WMSLayerView3D")],a);const n=a;

export { n as default };
