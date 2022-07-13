import { B as e, C as d, k5 as g, D as n, s, ar as j, Z as s$1, aP as l$2, w } from './_virtual_index-a68dd1ed.js';
import { t } from './BitmapContainer-58ae455b.js';
import { f } from './LayerView2D-5e78fc62.js';
import { S } from './ExportStrategy-2abdeb60.js';
import { u as u$1 } from './LayerView-c3f47c16.js';
import { i } from './RefreshableLayerView-7acfc04f.js';
import { l as l$1 } from './ExportWMSImageParameters-cf3dd5ee.js';
import './WGLContainer-f0084bc3.js';
import './enums-fb707d37.js';
import './utils-65fe22dc.js';
import './EffectView-f0c56014.js';
import './Utils-13ecd570.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './Texture-6d086a89.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-c720612c.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './VertexArrayObject-8465ed50.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-0f5b7acb.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';
import './Bitmap-192f4ac0.js';

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
