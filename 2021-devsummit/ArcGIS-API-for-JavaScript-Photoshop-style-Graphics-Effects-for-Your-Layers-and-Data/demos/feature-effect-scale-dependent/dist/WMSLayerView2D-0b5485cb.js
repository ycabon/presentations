import { e, y as y$1, i as i$1, O, s, U, x as i$2, dp as i$3, W as T, z } from './index.js';
import { y as y$2 } from './ExportWMSImageParameters-42f3570f.js';
import { l, p } from './LayerView2D-fa5e2461.js';
import { t } from './BitmapContainer-a50d9f80.js';
import { w } from './ExportStrategy-16c4dbf3.js';
import './Container-1ce5b0ce.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './Utils-143cd224.js';
import './RenderingContext-e00790fa.js';
import './WGLContainer-18c8f52a.js';
import './definitions-6994070a.js';
import './VertexArrayObject-182c4e34.js';
import './ShaderCompiler-d2d3a74a.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-948fb909.js';
import './Bitmap-d9b3706c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e){const{layer:r}=this;if(!e)return O(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const{popupEnabled:t}=r;if(!t)return O(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}));const i=this.createFetchPopupFeaturesQuery(e),{extent:c,width:u,height:a,x:n,y:h}=i;if(!(c&&u&&a))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:c,width:u,height:a});const m=r.fetchFeatureInfo(c,u,a,n,h);return m?m.then((e=>[e])):U([])}};return e([y$1()],c.prototype,"layer",void 0),c=e([i$1("esri.layers.mixins.WMSLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const y=i$2.getLogger("esri.views.2d.layers.WMSLayerView2D");let g=class extends(i(i$3(l(p)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(O(new s("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})));}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{T(e)||y.error(e);}));}attach(){const{layer:e,view:t$1}=this,{imageMaxHeight:r,imageMaxWidth:i}=e;this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new w({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new y$2({layer:e,view:t$1}),this.handles.add(this._exportWMSImageParameters.watch("version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),"wms");}detach(){this.handles.remove("wms"),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:s}=e,{spatialReference:a}=t;let o=null,m=0,n=0;r.children.some((e=>{const{width:t,height:r,resolution:h,x:d,y:l}=e,c=d+h*t,u=l-h*r;return i>=d&&i<=c&&s<=l&&s>=u&&(o=new z({xmin:d,ymin:u,xmax:c,ymax:l,spatialReference:a}),m=t,n=r,!0)}));const h=o.width/m,d=Math.round((i-o.xmin)/h),l=Math.round((o.ymax-s)/h);return {extent:o,width:m,height:n,x:d,y:l}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this._exportWMSImageParameters.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([y$1()],g.prototype,"strategy",void 0),e([y$1({dependsOn:["strategy.updating"]})],g.prototype,"updating",void 0),g=e([i$1("esri.views.2d.layers.WMSLayerView2D")],g);var f=g;

export default f;
