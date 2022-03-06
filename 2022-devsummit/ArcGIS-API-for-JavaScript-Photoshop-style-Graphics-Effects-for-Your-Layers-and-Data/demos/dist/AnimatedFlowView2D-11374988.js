import { e as s$1, h as r$2, g as t$2, fV as M, b9 as r$3, bb as M$1, bd as f$1, be as h$1, X as n$2, ac as e, ad as d, ae as i, aa as p$1, q as g$1, am as j, c_ as M$2, F as u$1, y as h$2, iD as p$2 } from './_virtual_index-49b2bc11.js';
import { a, c as r$1 } from './WGLContainer-0a7b434f.js';
import { I } from './Utils-8759b086.js';
import { a as a$1 } from './Container-905526e1.js';
import { o, f as f$2 } from './VertexArrayObject-fabb4101.js';
import './Texture-7f200883.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t$1 extends a{constructor(){super(...arguments),this.flowStyle=null;}get requiresDedicatedFBO(){return !1}doRender(e){super.doRender(e);}prepareRenderPasses(s){const t=s.registerRenderPass({name:"flow",brushes:[r$1],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=s$1.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class s{constructor(e,t,s,a){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=s,this.pixelRatio=a;}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t=await this.flowStyle.loadResources({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e.signal);this.state={name:"loaded",resources:t};}prepareForRendering(e,s,a){if("loaded"!==this.state.name)return void t.error("Only loaded resources can be attached.");const i=this.state.resources;i.prepareForRendering(e,s,a),this.state={name:"attached",resources:i};}destroy(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"});}update(e){if(!this.flowStyle.areResourcesCompatible(e.flowStyle))return !1;return !(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio)&&(this.flowStyle=e.flowStyle,!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m extends a$1{constructor(){super(...arguments),this._displayData=null;}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender();}clear(){r$2(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender());}setTransform(s){const{displayData:n}=this;if(t$2(n))return;const l=n.extent.xmin,m=n.extent.ymax,p=[0,0];s.toScreen(p,[l,m]);const c=(n.extent.xmax-n.extent.xmin)/n.size[0]/s.resolution,d=M(s.rotation),{dvs:x}=this.transforms;r$3(x),M$1(x,x,[-1,1,0]),f$1(x,x,[2/(s.size[0]*s.pixelRatio),-2/(s.size[1]*s.pixelRatio),1]),M$1(x,x,[p[0],p[1],0]),h$1(x,x,d),f$1(x,x,[c*s.pixelRatio,c*s.pixelRatio,1]);}_createTransforms(){return {dvs:n$2()}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=1.15,h=s$1.getLogger("esri.views.2d.engine.flow.FlowStrategy");let f=class extends p$1{constructor(t){super(t),this._flowDisplayObject=new m,this._loading=null;}initialize(){this.flowContainer.addChild(this._flowDisplayObject);}destroy(){this._clear(),this.flowContainer.removeAllChildren();}get updating(){return null!=this._loading}update(t){const{flowStyle:o}=this.flowContainer;if(t$2(o))return void this._clear();const{extent:e,rotation:i,resolution:l,pixelRatio:n}=t.state,p=g(e,i);p.expand(y);const m=[Math.round((p.xmax-p.xmin)/l),Math.round((p.ymax-p.ymin)/l)],d=new s(o,p,m,n);if(r$2(this._loading)){if(this._loading.update(d))return;this._loading.destroy(),this._loading=null;}!t$2(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(d)||(d.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null;}),(t=>{g$1(t)||(h.error("A resource failed to load.",t),this._loading=null);})),this._loading=d);}_clear(){this._flowDisplayObject.clear(),r$2(this._loading)&&(this._loading.destroy(),this._loading=null);}};e([d()],f.prototype,"_loading",void 0),e([d()],f.prototype,"flowContainer",void 0),e([d()],f.prototype,"updating",null),f=e([i("esri.views.2d.engine.flow.FlowStrategy")],f);const u=f;function g(t,o){const e=new j({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),r=t.xmax-t.xmin,s=t.ymax-t.ymin,a=Math.abs(Math.cos(M(o))),l=Math.abs(Math.sin(M(o))),n=a*r+l*s,c=l*r+a*s,m=new M$2({xmin:e.x-n/2,ymin:e.y-c/2,xmax:e.x+n/2,ymax:e.y+c/2,spatialReference:t.spatialReference});return m.centerAt(e),m}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n$1(n){const i=u$1(n.lineWidth),o=2*i,t=Math.round(u$1(n.lineLength)/o)+1,l=i,r=10,d=n.lineColor.toRgba(),s=[d[0]/255,d[1]/255,d[2]/255,d[3]],{lineSpeed:h,fadeDuration:a,density:g}=n;return {lineRenderWidth:i,segmentLength:o,verticesPerLine:t,lineCollisionWidth:l,lineSpacing:r,lineColor:s,lineSpeed:h,fadeDuration:a,density:g,smoothing:u$1(n.smoothing),velocityScale:1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,t){this._vertexData=e,this._indexData=t;}prepareForRendering(r,s,i){const a=o.createVertex(r,35044,this._vertexData),o$1=o.createIndex(r,35044,this._indexData),x=new f$2(r,s,i,{geometry:a},o$1);this.vertexBuffer=a,this.indexBuffer=o$1,this.vertexArray=x,this._vertexData=null,this._indexData=null;}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(e,t,n){this._loadImagery=e,this._createStreamlinesMesh=t,this._rendererSettings=n$1(n);}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(e){let r=!0;return r=r&&e._loadImagery===this._loadImagery,r=r&&e._createStreamlinesMesh===this._createStreamlinesMesh,r=r&&e._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,r=r&&e._rendererSettings.segmentLength===this._rendererSettings.segmentLength,r=r&&e._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,r=r&&e._rendererSettings.density===this._rendererSettings.density,r=r&&e._rendererSettings.smoothing===this._rendererSettings.smoothing,r=r&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,r=r&&e._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,r=r&&e._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,r=r&&e._rendererSettings.mergeLines===this._rendererSettings.mergeLines,r=r&&e._rendererSettings.interpolate===this._rendererSettings.interpolate,r&&this._rendererSettings.mergeLines&&(r=e._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),!!r}async loadResources(r$1,n){const{extent:i,size:s}=r$1;h$2(n);const d=await this._loadImagery(i,s[0],s[1],n),{vertexData:g,indexData:h}=await this._createStreamlinesMesh(this._rendererSettings,d,n);return new r(g,h)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends p$1{constructor(){super(...arguments),this._loadImagery=(e,t,r,s)=>p$2(this.layer,e,t,r,s),this._createStreamlinesMesh=(e,t,r)=>this.layer.createStreamlinesMesh({flowData:t,rendererSettings:e},{signal:r}),this.container=null,this.layer=null,this.type="rasterAnimatedFlow",this.redrawOrRefetch=async()=>{this._rendererChanged();};}get updating(){return !this._strategy||this._strategy.updating}update(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate();}install(e){this.container=new t$1,e.addChild(this.container),this._strategy=new u({flowContainer:this.container}),this._rendererChanged();}uninstall(){this._strategy.destroy(),this.container.removeAllChildren(),this.container.remove();}moveEnd(){}async doRefresh(){}attach(){}_rendererChanged(){if("animated-flow"!==this.layer.renderer.type)return;const e=new n(this._loadImagery,this._createStreamlinesMesh,this.layer.renderer);this.container.flowStyle=e,this.layerView.requestUpdate();}};e([d()],l.prototype,"_strategy",void 0),e([d()],l.prototype,"container",void 0),e([d()],l.prototype,"layer",void 0),e([d()],l.prototype,"layerView",void 0),e([d()],l.prototype,"type",void 0),e([d()],l.prototype,"updating",null),l=e([i("esri.views.2d.engine.flow.AnimatedFlowView2D")],l);const p=l;

export { p };
