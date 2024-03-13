/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import"../core/lang.js";import{debounce as i,throwIfAborted as o,throwIfAbortError as s,eachAlways as r}from"../core/promiseUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{c as p,t as m}from"./aaBoundingRect.js";import{j as h}from"./unitUtils.js";import c from"../layers/support/TileInfo.js";import{B as l}from"./Bitmap.js";import{T as d}from"./TileStrategy.js";import{T as u}from"./TileKey2.js";const g=Math.PI/180,f=p(),y=[0,0],x=new u(0,0,0,0);let S=class extends e{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=!1,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=!1,this.imageNormalizationSupported=!1,this.update=i((async(t,e)=>{if(o(e),!t.stationary||this.destroyed)return;const i=t.state,r=h(i.spatialReference),a=this.hidpi?t.pixelRatio:1,n=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0],p=this.imageMaxWidth??0,m=this.imageMaxHeight??0;n?(y[0]=i.worldScreenWidth,y[1]=i.size[1]):this.imageRotationSupported?(y[0]=i.size[0],y[1]=i.size[1]):function(t,e){const i=e.rotation*g,o=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i)),[r,a]=e.size;t[0]=Math.round(a*s+r*o),t[1]=Math.round(a*o+r*s)}(y,i);const c=Math.floor(y[0]*a)>p||Math.floor(y[1]*a)>m,l=r&&(i.extent.xmin<r.valid[0]||i.extent.xmax>r.valid[1]),d=!this.imageNormalizationSupported&&l,u=!c&&!d,f=this.imageRotationSupported?i.rotation:0,x=this.container.children.slice();if(u){const t=n?i.paddedViewState.center:i.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(i,y,t,i.resolution,f,a,e)}else{let t=Math.min(p,m);d&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,a,e)}try{const t=await this._imagePromise??[];o(e);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=t;for(const e of x)t.includes(e)||i.push(e.fadeOut().then((()=>{e.remove(),e.destroy()})));for(const e of t)i.push(e.fadeIn());await Promise.all(i)}catch(t){this._imagePromise=null,s(t)}}),5e3),this.updateExports=i((async t=>{const e=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;e.push(t(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=r(e).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((t=>t.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(t,e,i,s,r,a){const n=await this.fetchSource(t,Math.floor(e*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:a});o(a);const p=new l(null,!0);return p.x=t.xmin,p.y=t.ymax,p.resolution=t.width/e,p.rotation=s,p.pixelRatio=r,p.opacity=0,this.container.addChild(p),await p.setSourceAsync(n,a),o(a),p}async _singleExport(t,e,i,o,s,r,a){!function(t,e,i,o){const[s,r]=e,[a,n]=o,p=.5*i;t[0]=s-p*a,t[1]=r-p*n,t[2]=s+p*a,t[3]=r+p*n}(f,i,o,e);const n=m(f,t.spatialReference);return[await this._export(n,e[0],e[1],s,r,a)]}_tiledExport(t,e,i,o){const s=c.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),r=new d(s),a=r.getTileCoverage(t);if(!a)return null;const n=[];return a.forEach(((s,a,p,h)=>{x.set(s,a,p,0),r.getTileBounds(f,x);const c=m(f,t.spatialReference);n.push(this._export(c,e,e,0,i,o).then((t=>(0!==h&&(x.set(s,a,p,h),r.getTileBounds(f,x),t.x=f[0],t.y=f[3]),t))))})),Promise.all(n)}};t([a()],S.prototype,"_imagePromise",void 0),t([a()],S.prototype,"bitmaps",void 0),t([a()],S.prototype,"container",void 0),t([a()],S.prototype,"fetchSource",void 0),t([a()],S.prototype,"hidpi",void 0),t([a()],S.prototype,"imageMaxWidth",void 0),t([a()],S.prototype,"imageMaxHeight",void 0),t([a()],S.prototype,"imageRotationSupported",void 0),t([a()],S.prototype,"imageNormalizationSupported",void 0),t([a()],S.prototype,"requestUpdate",void 0),t([a()],S.prototype,"updating",null),S=t([n("esri.views.2d.layers.support.ExportStrategy")],S);const _=S;export{_ as E};