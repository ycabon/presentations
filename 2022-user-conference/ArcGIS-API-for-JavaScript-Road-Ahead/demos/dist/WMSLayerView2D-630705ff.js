import { aC as j, $ as s, b7 as l$1, w, u as e, y as y$1, z as n } from './_virtual_index-1ea2035a.js';
import { a as a$1 } from './BitmapContainer-6c702079.js';
import { y } from './LayerView2D-0acb5666.js';
import { v } from './ExportStrategy-610b458a.js';
import { u as u$1 } from './LayerView-04d8537b.js';
import { i } from './RefreshableLayerView-f32b8d34.js';
import { a } from './WMSLayerView-f4bb9eea.js';
import './WGLContainer-be6ebd59.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './definitions-a784b44f.js';
import './enums-4e1a5b11.js';
import './number-7d0da80b.js';
import './StyleDefinition-98114241.js';
import './enums-3e26cf0d.js';
import './GeometryUtils-07c7843a.js';
import './Utils-7b2ac961.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './utils-94e6680e.js';
import './EffectView-de5a8347.js';
import './heatmapTextureUtils-076ceaf2.js';
import './Bitmap-c8e15fa6.js';
import './ExportWMSImageParameters-aeff78dd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let u=class extends(a(i(y(u$1)))){constructor(){super(...arguments),this.bitmapContainer=new a$1;}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{j(e)||s.getLogger(this.declaredClass).error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new a$1,this.container.addChild(this.bitmapContainer),this.strategy=new v({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(l$1((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion");}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:i,y:s}=e,{spatialReference:a}=t;let n=null,p=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,u=c+h*t,l=d-h*r;return i>=c&&i<=u&&s<=d&&s>=l&&(n=new w({xmin:c,ymin:l,xmax:u,ymax:d,spatialReference:a}),p=t,m=r,!0)})),!n)return null;const h=n.width/p,c=Math.round((i-n.xmin)/h),d=Math.round((n.ymax-s)/h);return {extent:n,width:p,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...i})}};e([y$1()],u.prototype,"strategy",void 0),e([y$1()],u.prototype,"updating",void 0),u=e([n("esri.views.2d.layers.WMSLayerView2D")],u);const l=u;

export { l as default };
