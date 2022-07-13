import { B as e, C as d, dS as g, D as n, s, ar as j, Z as s$1, aP as l$2, w } from './_virtual_index-4b72c57d.js';
import { t } from './BitmapContainer-bf37ea3c.js';
import { f, u as u$1 } from './LayerView-a579da68.js';
import { S } from './ExportStrategy-953a358e.js';
import { i } from './RefreshableLayerView-f638c9df.js';
import { l as l$1 } from './ExportWMSImageParameters-43abc3d4.js';
import './WGLContainer-e9b25fc8.js';
import './enums-fb707d37.js';
import './utils-1dcda7d1.js';
import './EffectView-0ee93c44.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-1f2484bf.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './VertexArrayObject-47c5aa7a.js';
import './ProgramTemplate-cee70b37.js';
import './StyleDefinition-c3b89df1.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './Bitmap-b90cd0ba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new l$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const c=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(c?[c]:[])}};return e([d()],i.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],i.prototype,"exportImageVersion",null),e([d()],i.prototype,"layer",void 0),e([d(g)],i.prototype,"timeExtent",void 0),i=e([n("esri.layers.mixins.WMSLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let u=class extends(a(i(f(u$1)))){constructor(){super(...arguments),this.container=new t;}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{j(e)||s$1.getLogger(this.declaredClass).error(e);}));}attach(){const{layer:e,container:t}=this,{imageMaxHeight:r,imageMaxWidth:i}=e;this.strategy=new S({container:t,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(l$2((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion");}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t,container:r}=this,{x:s,y:i}=e,{spatialReference:o}=t;let n=null,p=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,u=c+h*t,l=d-h*r;return s>=c&&s<=u&&i<=d&&i>=l&&(n=new w({xmin:c,ymin:l,xmax:u,ymax:d,spatialReference:o}),p=t,m=r,!0)})),!n)return null;const h=n.width/p,c=Math.round((s-n.xmin)/h),d=Math.round((n.ymax-i)/h);return {extent:n,width:p,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,s){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...s})}};e([d()],u.prototype,"strategy",void 0),e([d()],u.prototype,"updating",void 0),u=e([n("esri.views.2d.layers.WMSLayerView2D")],u);const l=u;

export { l as default };
