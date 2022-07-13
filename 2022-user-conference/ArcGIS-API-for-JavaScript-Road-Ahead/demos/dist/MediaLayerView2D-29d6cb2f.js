import { B as e$1, C as d, D as n, E as f$1, t, eM as c, al as e$2, eN as un, bj as v, r, cV as s, bM as i$1, eO as c$1, aA as o, eP as S, eQ as o$1, ay as n$1, b8 as n$2, aP as l, aQ as h, b2 as f$2, aO as r$2, Z as s$1, s as s$2, ak as i$2, av as r$3, aZ as c$3, az as e$4, bw as z, bL as r$4, aE as M$1, bN as t$1, aC as f$4, aD as h$1, bh as R$1, el as mt, j as j$2, dK as a$2, dF as p$2, dG as r$6, eR as s$3, ar as j$3, w as w$1, eS as r$7, bi as u$1 } from './_virtual_index-4b72c57d.js';
import { p as p$1 } from './normalizeUtilsSync-9f78312b.js';
import { e as e$3 } from './mat3f64-3e7fbf1f.js';
import { r as r$1 } from './utils-1dcda7d1.js';
import { c as c$2, f as f$3 } from './VertexArrayObject-47c5aa7a.js';
import { P, G, L, D, F } from './enums-fb707d37.js';
import { n as n$3, u } from './Texture-e2dd4118.js';
import { r as r$5 } from './vec3f32-90dde670.js';
import { b as a$1, W } from './WGLContainer-e9b25fc8.js';
import { I } from './Utils-af323e30.js';
import { f as f$5, u as u$2 } from './LayerView-a579da68.js';
import './EffectView-0ee93c44.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './enums-1f2484bf.js';
import './VertexElementDescriptor-b07b83f4.js';
import './ProgramTemplate-cee70b37.js';
import './number-7d0da80b.js';
import './StyleDefinition-c3b89df1.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=class extends f$1{constructor(o){super(o);}get bounds(){const o=this.coords;return t(o)?null:c(o.extent)}get coords(){const o=e$2(this.element.georeference)?.coords;return un(o,this.spatialReference).geometry}get normalizedCoords(){return v.fromJSON(p$1(this.coords))}get normalizedBounds(){return r(this.normalizedCoords)?c(this.normalizedCoords.extent):null}};e$1([d()],a.prototype,"spatialReference",void 0),e$1([d()],a.prototype,"element",void 0),e$1([d()],a.prototype,"bounds",null),e$1([d()],a.prototype,"coords",null),e$1([d()],a.prototype,"normalizedCoords",null),e$1([d()],a.prototype,"normalizedBounds",null),a=e$1([n("esri.layers.support.media.MediaElementView")],a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const f=n$1(),i=e$3(),e=e$3(),p=e$3();function j$1(r,n,o){return k(e,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),k(p,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),i$1(r,c$1(e,e),p)}function k(o$2,c,u,e,p,h,j,k,v){s(o$2,c,e,h,u,p,j,1,1,1),o(f,k,v,1),c$1(i,o$2);const[x,b,d]=S(f,f,o$1(i,i));return s(i,x,0,0,0,b,0,0,0,d),i$1(o$2,i,o$2)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const b=e$3();class V extends r$1{constructor(s){super(),this.elementView=s,this.isWrapAround=!1,this.perspectiveTransform=n$2(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push(l((()=>this.elementView.element.opacity),(e=>this.opacity=e),h),l((()=>[this.elementView.coords]),(()=>{this.requestRender();}),h),f$2((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&r(e.content)&&this._handles.push(r$2(e.content,"play",(()=>this.requestRender())));}),h)),s.element.load().catch((t=>{s$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s$2("element-load-error","Element cannot be displayed",{element:s,error:t}));}));}destroy(){this._handles.forEach((e=>e.remove())),this.texture?.dispose(),this.texture=null;}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r$1=this.elementView.element.content;if(r(r$1)){const e=r$1 instanceof HTMLImageElement,i=r$1 instanceof HTMLVideoElement,o=e?r$1.naturalWidth:i?r$1.videoWidth:r$1.width,n=e?r$1.naturalHeight:i?r$1.videoHeight:r$1.height;this._updatePerspectiveTransform(o,n),this.texture?i&&!r$1.paused&&(this.texture.setData(r$1),this.requestRender(),(n$3(t.gl)||i$2(o)&&i$2(n))&&this.texture.generateMipmap()):(this.texture=new u(t,{pixelFormat:P.RGBA,dataType:G.UNSIGNED_BYTE,samplingMode:L.LINEAR,wrapMode:D.CLAMP_TO_EDGE,width:o,height:n},r$1),(n$3(t.gl)||i$2(o)&&i$2(n))&&this.texture.generateMipmap(),i&&!r$1.paused&&this.requestRender());}super.beforeRender(e);}_createTransforms(){return null}updateDrawCoords(e,t$1){const r=this.elementView.coords;if(t(r))return;const[s,i,n,a]=r.rings[0],m=this._vertices,{x:h,y:c}=e,l=0!==t$1;l?m.set([i[0]-h,i[1]-c,s[0]-h,s[1]-c,n[0]-h,n[1]-c,a[0]-h,a[1]-c,a[0]-h,a[1]-c,i[0]+t$1-h,i[1]-c,i[0]+t$1-h,i[1]-c,s[0]+t$1-h,s[1]-c,n[0]+t$1-h,n[1]-c,a[0]+t$1-h,a[1]-c]):m.set([i[0]-h,i[1]-c,s[0]-h,s[1]-c,n[0]-h,n[1]-c,a[0]-h,a[1]-c]),this.isWrapAround=l;}getVAO(e,t$1,r){if(t(this.elementView.coords))return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else {this._geometryVbo=c$2.createVertex(e,F.DYNAMIC_DRAW,s);const i=c$2.createVertex(e,F.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new f$3(e,r,t$1,{geometry:this._geometryVbo,tex:i});}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;j$1(b,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),r$3(this.perspectiveTransform,b[6]/b[8]*e,b[7]/b[8]*t);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class M extends a$1{constructor(){super(...arguments),this._localOrigin=c$3(0,0),this._viewStateId=-1,this._dvsMat3=e$4(),this.requiresDedicatedFBO=!1;}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t);}prepareRenderPasses(t){const e=t.registerRenderPass({name:"overlay",brushes:[W.overlay],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(t),e]}_updateMatrices(t){const{state:e}=t,{id:n,size:l,pixelRatio:m,resolution:h,rotation:f,viewpoint:u,displayMat3:M}=e;if(this._viewStateId===n)return;const v=Math.PI/180*f,_=m*l[0],w=m*l[1],{x:y,y:g}=u.targetGeometry,j=z(y,e.spatialReference);this._localOrigin.x=j,this._localOrigin.y=g;const b=h*_,R=h*w,O=r$4(this._dvsMat3);i$1(O,O,M),M$1(O,O,t$1(_/2,w/2)),f$4(O,O,r$5(_/b,-w/R,1)),h$1(O,O,-v),this._viewStateId=n;}_updateOverlays(e,s){const{state:r}=e,{rotation:o,spatialReference:a,worldScreenWidth:i,size:n,viewpoint:c}=r,p=this._localOrigin;let d=0;if(a.isWrappable){const e=n[0],h=n[1],f=180/Math.PI*o,u=Math.abs(Math.cos(f)),M=Math.abs(Math.sin(f)),v=Math.round(e*u+h*M),[_,w]=R$1(a).valid,y=mt(a),{x:g,y:j}=c.targetGeometry,b=[g,j],R=[0,0];r.toScreen(R,b);const O=[0,0];let P;P=v>i?.5*i:.5*v;const x=Math.floor((g+.5*y)/y),C=_+x*y,D=w+x*y,I=[R[0]+P,0];r.toMap(O,I),O[0]>D&&(d=y),I[0]=R[0]-P,r.toMap(O,I),O[0]<C&&(d=-y);for(const r of s){const e=r.elementView.bounds;if(t(e))continue;const[s,,o]=e;s<_&&o>_?r.updateDrawCoords(p,y):o>w&&s<w?r.updateDrawCoords(p,-y):r.updateDrawCoords(p,d);}}else for(const t of s)t.updateDrawCoords(p,d);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let j=class extends(f$5(u$2)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this.layer=null,this.elements=new j$2;}attach(){this.handles.add(a$2((()=>this.layer.source),"refresh",(()=>{for(const e of this._tileStrategy.tiles)this._updateTile(e);this.requestUpdate();}))),this._overlayContainer=new M,this.container.addChild(this._overlayContainer),this._fetchQueue=new p$2({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new r$6({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate();}detach(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear();}supportsSpatialReference(e){return !0}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}update(e){this._tileStrategy.update(e);}async hitTest(e,t){const s=[],r$1=e.normalize(),o=[r$1.x,r$1.y];for(const l of this.elements){const t=this._elementReferences.get(l.uid).projectedElement.normalizedCoords;r(t)&&s$3(t.rings,o)&&s.push({type:"media",element:l,layer:this.layer,mapPoint:e});}return s.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){}_acquireTile(e){const t=new T(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[s,r]=e.setElements(t);this._acquireElements(e,s),this._releaseElements(e,r),this.requestUpdate();}),(e=>{j$3(e)||s$1.getLogger(this.declaredClass).error(e);})));}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._releaseElements(e,e.elements),this.requestUpdate();}async _queryElements(e,t$1){const s=this.layer.source;if(t(s))return [];this.view.featuresTilingScheme.getTileBounds(w,e,!0);const r=new w$1({xmin:w[0],ymin:w[1],xmax:w[2],ymax:w[3],spatialReference:this.view.spatialReference});return s.queryElements(r,t$1)}_acquireElements(e,t$1){const s=this.layer.source,i=this.view.spatialReference;if(!t(s))for(const o of t$1){r$7(this._elementReferences,o.uid,(()=>{const e=new a({element:o,spatialReference:i}),t=new V(e);return this._overlayContainer.addChild(t),this.elements.add(o),{tiles:new Set,projectedElement:e,overlay:t}})).tiles.add(e);}}_releaseElements(e,t){for(const s of t){const t=this._elementReferences.get(s.uid);t.tiles.delete(e),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s));}}};e$1([d()],j.prototype,"_fetchQueue",void 0),e$1([d()],j.prototype,"layer",void 0),e$1([d({readOnly:!0})],j.prototype,"elements",void 0),j=e$1([n("esri.views.2d.layers.MediaLayerView2D")],j);const w=u$1();class T{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0;}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const r of e)s.has(r)?s.delete(r):t.push(r);return this.isReady=!0,[t,Array.from(s)]}}const R=j;

export { R as default };
