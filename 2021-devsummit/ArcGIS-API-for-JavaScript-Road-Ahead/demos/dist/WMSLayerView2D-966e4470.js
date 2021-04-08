import { j as e, y as y$1, dd as w, k as i$1, s, n, d0 as i$2, w as g, bz as M } from './_virtual_index-634cbc09.js';
import { l as l$2, d } from './LayerView2D-9976179f.js';
import { l as l$1 } from './ExportWMSImageParameters-41722b01.js';
import { t } from './BitmapContainer-aeb67527.js';
import { S } from './ExportStrategy-0e214a21.js';
import './Container-87e93059.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './Utils-3e0360c1.js';
import './FramebufferObject-553bb493.js';
import './WGLContainer-9f4143c6.js';
import './definitions-12783a0f.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-5b134693.js';
import './Program-83739cf0.js';
import './earcut-cd592b7a.js';
import './GeometryUtils-58fe63b9.js';
import './MaterialKey-202e82ff.js';
import './Bitmap-0d3f5308.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=i=>{let a=class extends i{initialize(){this.exportImageParameters=new l$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:r}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));const{popupEnabled:t}=r;if(!t)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:i,height:a,x:m,y:n}=s$1;if(!(p&&i&&a))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:i,height:a});const u=r.fetchFeatureInfo(p,i,a,m,n);return Promise.resolve(u?[u]:[])}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1(w)],a.prototype,"timeExtent",void 0),a=e([i$1("esri.layers.mixins.WMSLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l=n.getLogger("esri.views.2d.layers.WMSLayerView2D");let u=class extends(i(i$2(l$2(d)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})));}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{g(e)||l.error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t$1,imageMaxWidth:r}=e;this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t$1,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",(()=>this.requestUpdate())),"exportImageVersion");}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t}=this,r=this._bitmapContainer,{x:i,y:s}=e,{spatialReference:a}=t;let n=null,p=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,l=c+h*t,u=d-h*r;return i>=c&&i<=l&&s<=d&&s>=u&&(n=new M({xmin:c,ymin:u,xmax:l,ymax:d,spatialReference:a}),p=t,m=r,!0)})),!n)return null;const h=n.width/p,c=Math.round((i-n.xmin)/h),d=Math.round((n.ymax-s)/h);return {extent:n,width:p,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp,...i})}};e([y$1()],u.prototype,"strategy",void 0),e([y$1()],u.prototype,"updating",void 0),u=e([i$1("esri.views.2d.layers.WMSLayerView2D")],u);var y=u;

export default y;
