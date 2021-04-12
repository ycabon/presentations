import { bN as r, aE as k, d7 as r$1, bW as i, d8 as M, b7 as t, dS as f$1, d9 as h, aK as a$1, dM as pt, aU as a$3, i as i$1, aH as u, b$ as L, dT as u$1, aQ as x, c8 as n, t as t$2, a3 as j, j as e, y, k as i$3 } from './_virtual_index-2683c931.js';
import { l, d } from './LayerView2D-e9137e52.js';
import { e as et, l as l$1 } from './BaseGraphicContainer-d9ecea3a.js';
import { i as i$2 } from './GraphicContainer-e41c0016.js';
import { t as t$1 } from './vec3f32-0b2c4f69.js';
import { I } from './Utils-0b584b8b.js';
import { o, G } from './WGLContainer-0b2e4b10.js';
import { r as r$2, h as h$1, o as o$1 } from './FramebufferObject-c19fef9d.js';
import { a as a$2 } from './Container-c9657d6c.js';
import './definitions-12783a0f.js';
import './schemaUtils-62f0bc7d.js';
import './MD5-a554c7d9.js';
import './MaterialKey-2936dc4b.js';
import './visualVariablesUtils-ba6f60d7.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-4b43760e.js';
import './ComputedAttributeStorage-bb926dc8.js';
import './quickselect-eae177f3.js';
import './_commonjsHelpers-3f70742c.js';
import './FeatureSetReader-c8b784f1.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-52efe4a8.js';
import './tileUtils-a3c95651.js';
import './TurboLine-b4d64355.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-46b123b8.js';
import './FeatureContainer-3f732927.js';
import './TileContainer-f32af6bf.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-8b82754c.js';
import './Program-9cec60fc.js';
import './earcut-cd592b7a.js';
import './mat4f32-8dd9e37a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class f extends o{constructor(){super(...arguments),this._localOrigin={x:0,y:0},this._viewStateId=-1,this._dvsMat3=r(),this.requiresDedicatedFBO=!1;}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t);}prepareRenderPasses(t){const e=t.registerRenderPass({name:"overlay",brushes:[G.overlay],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(t),e]}_updateMatrices(i$1){const{state:p}=i$1,{id:c,size:h$1,pixelRatio:l,resolution:m,rotation:f,viewpoint:u,displayMat3:M$1}=p;if(this._viewStateId===c)return;const v=Math.PI/180*f,_=l*h$1[0],y=l*h$1[1],{x:w,y:g}=u.targetGeometry,j=k(w,p.spatialReference);this._localOrigin.x=j,this._localOrigin.y=g;const b=m*h$1[0],R=m*h$1[1],x=r$1(this._dvsMat3);i(x,x,M$1),M(x,x,t(_/2,y/2)),f$1(x,x,t$1(h$1[0]/b,-y/R,1)),h(x,x,-v),this._viewStateId=c;}_updateOverlays(t,e){const{state:s}=t,{rotation:r,spatialReference:o,worldScreenWidth:a,size:n,viewpoint:c}=s,d=this._localOrigin;let h=0;if(o.isWrappable){const t=n[0],l=n[1],m=180/Math.PI*r,f=Math.abs(Math.cos(m)),u=Math.abs(Math.sin(m)),M=Math.round(t*f+l*u),[v,_]=a$1(o),y=pt(o),{x:w,y:g}=c.targetGeometry,j=[w,g],b=[0,0];s.toScreen(b,j);const R=[0,0];let x;x=M>a?.5*a:.5*M;const O=Math.floor((w+.5*y)/y),P=v+O*y,C=_+O*y,D=[b[0]+x,0];s.toMap(R,D),R[0]>C&&(h=y),D[0]=b[0]-x,s.toMap(R,D),R[0]<P&&(h=-y);for(const s of e){const{bounds:t}=s;t[0]<v&&t[2]>v?s.updateDrawCoords(d,y):t[2]>_&&t[0]<_?s.updateDrawCoords(d,-y):s.updateDrawCoords(d,h);}}else for(const i of e)i.updateDrawCoords(d,h);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class a extends a$2{constructor(e){super(),this.overlay=e,this._image=null,this._vertices=new Float32Array(20),this.isWrapAround=!1;const r=a$3(),{coords:o,opacity:s}=this.overlay;this.opacity=s,this.bounds=this._computeBounds(o),this.overlay.watch("source",(()=>{this.overlay.loadImage().then((t=>{this._image=t,this.ready(),this.requestRender();})).catch((()=>{}));})),this.overlay.loadImage().then((t=>{this._image=t,this.ready(),this.requestRender();})).catch((()=>{})),this.overlay.watch("coords",(t=>{this.bounds=this._computeBounds(t),this.requestRender();})),this.overlay.watch("opacity",(t=>{this.opacity=t,this.requestRender();})),this._abortController=r;}destroy(){this._abortController&&this._abortController.abort(),this._image=null,this._texture&&(this._texture.dispose(),this._texture=null);}get dvsMat3(){return this.parent.dvsMat3}get image(){return this._image}get texture(){return this._texture}beforeRender(t){const{context:r}=t;if(!this._texture&&null!==this._image){const t=this._image;this._texture=new r$2(r,{pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:t.width,height:t.height},t),i$1(t.width)&&i$1(t.height)&&this._texture.generateMipmap();}super.beforeRender(t);}updateDrawCoords(t,e){if(!this.overlay.coords)return;const{topLeft:r,topRight:o,bottomLeft:s,bottomRight:i}=this.overlay.coords,h=this._vertices,{x:a,y:n}=t,m=0!==e;m?h.set([r.x-a,r.y-n,s.x-a,s.y-n,o.x-a,o.y-n,i.x-a,i.y-n,i.x-a,i.y-n,r.x+e-a,r.y-n,r.x+e-a,r.y-n,s.x+e-a,s.y-n,o.x+e-a,o.y-n,i.x+e-a,i.y-n]):h.set([r.x-a,r.y-n,s.x-a,s.y-n,o.x-a,o.y-n,i.x-a,i.y-n]),this.isWrapAround=m;}getVAO(t,e,r){if(!this.overlay.coords)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else {this._geometryVbo=h$1.createVertex(t,35048,s);const h=h$1.createVertex(t,35044,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new o$1(t,r,e,{geometry:this._geometryVbo,tex:h});}return this._vao}_computeBounds(t){const{topLeft:e,topRight:o,bottomLeft:s,bottomRight:i}=t,h=Math.min(e.x,o.x,s.x,i.x),a=Math.min(e.y,o.y,s.y,i.y),n=Math.max(e.x,o.x,s.x,i.x),m=Math.max(e.y,o.y,s.y,i.y);return u(h,a,n,m)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let v=class extends(l(d)){constructor(){super(...arguments),this._overlayToOverlayObject=new Map,this._overlayToGraphic=new Map,this._overlayToHandle=new Map,this._graphics=new L,this._symbol=new u$1({style:"none",outline:{color:[50,50,50],width:1.5}});}initialize(){this.graphicsView=new et({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphics,container:new i$2(this.view.featuresTilingScheme)});}attach(){this._overlayContainer=new f,this.container.addChild(this._overlayContainer),this.container.addChild(this.graphicsView.container);const e=this.layer.overlays;this.handles.add(e.on("change",(e=>this._overlayChangeHandler(e))),"overlays"),e.items.length>0&&this._overlayChangeHandler({target:e,added:e.items,removed:[],moved:[]});}detach(){this._overlayToHandle.forEach((e=>e.remove())),this._overlayToOverlayObject.clear(),this._overlayToGraphic.clear(),this.container.removeAllChildren(),this._overlayContainer.removeAllChildren(),this.graphicsView.destroy(),this._graphics.destroy();}hitTest(e,o){return null}update(e){this.graphicsView.processUpdate(e);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return this.updateRequested||!this.graphicsView||this.graphicsView.updating}_overlayChangeHandler(e){const{added:o,removed:t}=e,r=this._overlayToOverlayObject,i=this._overlayContainer;for(const s of o){s.watch("editable",(e=>this._editableChangeHandler(e,s)));const e=new a(s);r.set(s,e),i.addChild(e);}for(const s of t){const e=r.get(s);e&&(r.delete(s),e.destroy(),i.removeChild(e));}}_editableChangeHandler(e,o){if(e){const{topLeft:e,topRight:t,bottomLeft:r,bottomRight:i}=o.coords,a=[[[e.x,e.y],[t.x,t.y],[i.x,i.y],[r.x,r.y],[e.x,e.y]]],n$1=new x({rings:a,spatialReference:this.view.spatialReference}),l=new n({geometry:n$1,symbol:this._symbol}),c=l.watch("geometry",(e=>{const t={graphic:l,property:"geometry"};this.graphicsView.graphicUpdateHandler(t),this._updateOverlayCoords(e,o);}));this._overlayToHandle.set(o,c),this._graphics.add(l),this._overlayToGraphic.set(o,l);}else {const e=this._overlayToGraphic.get(o);e&&this._graphics.remove(e);const t=this._overlayToHandle.get(o);t&&(t.remove(),this._overlayToHandle.delete(o)),this._overlayToGraphic.delete(o);}}_updateOverlayCoords(e,t){t$2(e)&&(t.coords=null);const r=l$1(e);if(!r)return void(t.coords=null);const s=r.rings[0];t.coords||(t.coords={topLeft:new j,topRight:new j,bottomLeft:new j,bottomRight:new j});const a=t.coords,{topLeft:n,topRight:h,bottomLeft:l,bottomRight:p}=a;n.x=s[0][0],n.y=s[0][1],h.x=s[1][0],h.y=s[1][1],p.x=s[2][0],p.y=s[2][1],l.x=s[3][0],l.y=s[3][1],t.coords={...a};}};e([y()],v.prototype,"graphicsView",void 0),e([y()],v.prototype,"updating",void 0),v=e([i$3("esri.views.2d.layers.GraphicsLayerView2D")],v);var w=v;

export default w;
