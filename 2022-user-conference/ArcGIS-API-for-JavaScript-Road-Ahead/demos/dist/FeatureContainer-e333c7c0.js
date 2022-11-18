import { aL as e, dZ as r$1, d_ as s, ce as i$1, d$ as s$1, cu as n, cw as o$2, m as r$2, t, $ as s$2, dx as A, d3 as o$3, B as has, L as e$1, E as s$3, aH as D, dy as E$1, e0 as b, ay as D$2, aq as P$1, ar as G$2, ax as L$1, ai as E$2, aV as M$1, d8 as i$2, aZ as Y, a_ as V$1, ae as x, b_ as l$1, aF as u, e1 as $, bd as m$1, e2 as e$3 } from './_virtual_index-1ea2035a.js';
import { o as o$1, c as ct, P, B as B$1, C, F as D$1, G as E, H as F, K as G$1, Q as H, R as M, O, N, W as R } from './definitions-a784b44f.js';
import { n as n$1, l, f } from './visualVariablesUtils-e0de182e.js';
import { m as me, l as le, J, Q } from './Utils-7b2ac961.js';
import { i as i$3 } from './TileContainer-18a96df2.js';
import { e as e$2, c as c$1 } from './utils-94e6680e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class h$1{acquire(s){return {refCount:1,version:-1,labelMat2d:e(),tileMat3:e(),dvs:e()}}release(s){}}class m extends r$1{constructor(s,t,r,e){super(s,t,r,e,o$1,o$1);}destroy(){super.destroy(),this._transforms&&m.TransformCache.release(this.key.hash);}setTransform(i){const o=this.resolution/i.resolution,n$1=this.transforms.tileMat3,[h,m]=i.toScreenNoRotation([0,0],[this.x,this.y]),c=this.width/this.rangeX*o,f=this.height/this.rangeY*o;s(n$1,c,0,0,0,f,0,h,m,1),i$1(this.transforms.dvs,i.displayViewMat3,n$1);const d=this.transforms.labelMat2d,l=window.devicePixelRatio,u=s$1(n(),c*l,0,0,f*l,h*l,m*l);o$2(d,i.viewMat2d,u);}_createTransforms(){return m.TransformCache.acquire(this.key.hash)}}m.TransformCache=new h$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const r=2147483647;class i{constructor(t){this._head=t,this._cursor=t;}static from(t,e=0,s=t.byteLength/_.BYTES_PER_RECORD-e){const r=new _(new Int32Array(t,e*_.BYTES_PER_RECORD,s*_.ELEMENTS_PER_RECORD));return new i(r)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t;}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t;}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t;}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t;}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t;}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t;}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t;}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const t=this._cursor.size();if(e<t)return this._cursor._index=e,!0;e-=t,this._cursor=this._cursor._link;}return !1}forEach(t){const e=this.getCursor();for(;e.next();)t(e);}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size();}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return !1;this._cursor=this._cursor._link;}return !!this._cursor}copy(){const t=new i(this._head?.copy());if(!t._head)return t;let e=t._head,s=t._head._link;for(;s;)e._link=s.copy(),e=s,s=e._link;return t}next(){return !!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(e){let s=this._head,r=null;for(;s;){if(s.delete(e))return s.isEmpty()&&(r$2(r)&&(r._link=s._link),s===this._head&&(this._head=s._link),s===this._cursor&&(this._cursor=s._link)),!0;r=s,s=s._link;}return !1}}i.ELEMENTS_PER_RECORD=ct,i.BYTES_PER_RECORD=i.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class _{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t;}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new _(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t);if(s)for(this.id=r,++this._deletedCount;this.next()&&this.id===t;)this.id=r,++this._deletedCount;return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t;}lookup(t$1){if(t(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._index=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id);}if(!this._offsets.instance.has(t$1))return !1;const s=this._index;return this._index=this._offsets.instance.get(t$1),this.id!==r||(this._index=s,!1)}get id(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD]=t;}get materialKey(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+1]=t;}get insertAfter(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+3]=t;}get indexCount(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+4]=t;}get vertexFrom(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+5]=t;}get vertexCount(){return this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*_.ELEMENTS_PER_RECORD+6]=t;}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*_.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*_.ELEMENTS_PER_RECORD+7]=t;}get index(){return this._index}size(){return this._packedRecords.length/_.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===r;);return this._index<this.size()}peekId(){const t=(this._index+1)*_.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new _(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}_.ELEMENTS_PER_RECORD=ct,_.BYTES_PER_RECORD=_.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const B=s$2.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),V=n$1(l,B);class L{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:a}=t,h=me(r);this.shared=i,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new h(e$1(s))),this._resetRange();}destroy(){o$3(this._texture,(t=>t.dispose()));for(const t in this._fbos)o$3(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose();})),this._fbos[t]=null;this._texture=null;}get _textureDesc(){return {target:M$1.TEXTURE_2D,wrapMode:D$2.CLAMP_TO_EDGE,pixelFormat:P$1.RGBA,dataType:this.pixelType,samplingMode:L$1.NEAREST,width:this.size,height:this.size}}setData(t,e,i){const s=f(t),r=e$1(this.data),a=s*this.texelSize+e;!r||a>=r.length||(r[a]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s));}getData(t$1,e){if(t(this.data))return null;const s=f(t$1)*this.texelSize+e;return !this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return i$2(this._texture,(()=>this._initTexture(t)))}getFBO(t$1,e=0){if(t(this._fbos[e])){const i={colorTarget:Y.TEXTURE,depthStencilTarget:V$1.NONE},s=0===e?this.getTexture(t$1):this._textureDesc;this._fbos[e]=new x(t$1,i,s);}return this._fbos[e]}get locked(){return !(this.pixelType!==G$2.UNSIGNED_BYTE||!this.shared||this.textureOnly||!has("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(e,i){if(!this.locked){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const r=e$1(this.data).buffer,a=this.getTexture(e),h=4,n=(i-i%this.size)/this.size,o=(s-s%this.size)/this.size,u=n,l=this.size,p=o,x=n*this.size*h,_=(l+p*this.size)*h-x,g=me(this.pixelType),c=new g(r,x*g.BYTES_PER_ELEMENT,_),T=this.size,f=p-u+1;if(f>this.size)return void B.error(new s$3("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,u,T,f,c);}catch(s){}i();}}update(t){const{data:e,start:i,end:s}=t;if(r$2(e)){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const a=1<<i%this.texelSize;t.layout&a&&(s[r+i]=e[i]);}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s);}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=me(this.pixelType);this.destroy(),this.data=new s(e$1(t.buffer));}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0;}_initTexture(t){const e=new E$2(t,this._textureDesc,i$2(this.data,void 0));if(r$2(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,d=this.getFBO(t),h=le(r),n=new(me(r))(new ArrayBuffer(i*s*h*this.texelSize)),o=t.getBoundFramebufferObject(),{x:u,y:l,width:p,height:x}=t.getViewport();t.bindFramebuffer(d),d.readPixels(0,0,i,s,a,r,n),e.updateData(0,0,0,2*i,s/2,n),t.setViewport(u,l,p,x),t.bindFramebuffer(o);}return this.destroy(),this._texture=e,this._texture}}class G{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1;}initialize(t$1){const{blocks:e,shared:a,size:d}=t$1;if(this.shared=a,this.size=d,V("Initializing AttributeStoreView",t$1),t(this._data))this._data=A(e,(t=>new L(t,d,a)));else for(let s=0;s<this._data.length;s++){const t$1=this._data[s],h=e[s];r$2(h)&&(t(t$1)?this._data[s]=new L(h,d,a):t$1.resize(h,d));}this._initialized=!0;}destroy(){o$3(this._data,(t=>A(t,(t=>t.destroy())))),o$3(this._defaultTexture,(t=>t.dispose()));}isEmpty(){const t$1=this._data;return t(t$1)}isUpdating(){const t=r$2(this._pendingAttributeUpdate),e=t;return has("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}\n  -> hasPendingUpdate ${t}`),e}getBlock(t$1){if(t(this._data))return null;return this._data[t$1]}setLabelMinZoom(t,e){this.setData(t,0,1,e);}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,P,0,0)}getData(t$1,e,s,a){if(!this._data)return 0;const h=e$1(this._data)[e];if(t(h))return 0;const n=h.getData(t$1,s);return r$2(n)?n:a}setData(t,e,i,s){const r=e$1(this._data)[e];e$1(r).setData(t,i,s);}lockTextureUpload(){this._locked=!0;}unlockTextureUpload(){this._locked=!1;}forceTextureUpload(){this._forceNextUpload=!0;}async requestUpdate(e){if(this._pendingAttributeUpdate)return void B.error(new s$3("mapview-webgl","Tried to update attribute data with a pending update"));const i=D();return V("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:i},this._onUpdate(),i.promise}update(){if(this._initialized&&r$2(this._pendingAttributeUpdate)){has("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:t,resolver:e}=this._pendingAttributeUpdate,i=e$1(this._data);for(let s=0;s<t.blocks.length;s++){const e=t.blocks[s],r=i[s];o$3(r,(t=>o$3(e,(e=>{V(`Updating block ${s}`,e),t.update(e);}))));}this._pendingAttributeUpdate=null,e(),this._onUpdate();}}bindTextures(t,e=!0){const i=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(i,B$1),void(e&&(t.bindTexture(i,C),t.bindTexture(i,D$1),t.bindTexture(i,E),t.bindTexture(i,F),t.bindTexture(i,G$1),t.bindTexture(i,H)));const s=e$1(this._data);this._locked&&!this._forceNextUpload||(E$1(s,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(b(s[M],i,(e=>e.getTexture(t))),B$1),e&&(t.bindTexture(b(s[O],i,(e=>e.getTexture(t))),H),t.bindTexture(b(s[N],i,(e=>e.getTexture(t))),C),t.bindTexture(b(s[P],i,(e=>e.getTexture(t))),D$1),t.bindTexture(b(s[R],i,(e=>e.getTexture(t))),E),t.bindTexture(b(s[F],i,(e=>e.getTexture(t))),F),t.bindTexture(b(s[G$1],i,(e=>e.getTexture(t))),G$1));}_getDefaultTexture(t$1){if(t(this._defaultTexture)){const e={wrapMode:D$2.CLAMP_TO_EDGE,pixelFormat:P$1.RGBA,dataType:G$2.UNSIGNED_BYTE,samplingMode:L$1.NEAREST,width:1,height:1};this._defaultTexture=new E$2(t$1,e,new Uint8Array(4));}return this._defaultTexture}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}class h{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=e$2;}getSizeVVFieldStops(i){const s=this._vvSizeFieldStops;switch(s.type){case"static":return s;case"level-dependent":return i$2(s.levels[i],(()=>{let e=1/0,a=0;for(const t in s.levels){const s=parseFloat(t),r=Math.abs(i-s);r<e&&(e=r,a=s);}if(e===1/0)return {sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((i-a)/2),o=e$1(s.levels[a]),l=new Float32Array(o.values);return l[2]*=r,l[3]*=r,{sizes:e$1(o.sizes),values:l}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){r$2(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e);}setInfo(e,t,i){this._updateEffects(i),this._vvInfo=t,this._technique=c$1(e),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,e);}getVariation(){return {...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:l$1("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(e){r$2(e)?this.outsideLabelsVisible=e.excludedLabelsVisible:this.outsideLabelsVisible=!1;}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const n=e.size;if(n){if(i.vvSizeEnabled=!0,n.minMaxValue){const e=n.minMaxValue;let i,a;if(J(e.minSize)&&J(e.maxSize))if(Q(e.minSize)&&Q(e.maxSize))i=u(e.minSize),a=u(e.maxSize);else {const r=t.scale;i=u(c(r,e.minSize.stops)),a=u(c(r,e.maxSize.stops));}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,a]);}if(n.scaleStops&&(this.vvSizeScaleStopsValue=u(c(t.scale,n.scaleStops.stops))),n.unitValue){const e=$(t.spatialReference)/m$1[n.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution;}n.fieldStops&&(this._vvSizeFieldStops=n.fieldStops);}const v=e.color;v&&(i.vvColorEnabled=!0,this.vvColorValues.set(v.values),this.vvColors.set(v.colors));const u$1=e.opacity;u$1&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(u$1.values),this.vvOpacities.set(u$1.opacities));const h=e.rotation;h&&(i.vvRotationEnabled=!0,i.vvRotationType=h.type);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o extends i$3{constructor(e){super(e),this._rendererInfo=new h,this._materialItemsRequestQueue=new e$3,this.attributeView=new G((()=>this.onAttributeStoreUpdate()));}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear();}setRendererInfo(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender();}async getMaterialItems(t,r){if(!t||0===t.length)return null;const s=D();return this._materialItemsRequestQueue.push({items:t,abortOptions:r,resolver:s}),this.requestRender(),s.promise}doRender(e){if(e.context.capabilities.enable("textureFloat"),e.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop();}super.doRender(e);}renderChildren(e){for(const t of this.children)t.commit(e);this._rendererInfo.update(e.state),super.renderChildren(e);}updateTransforms(e){if(this.children.some((e=>e.hasData)))for(const t of this.children)t.setTransform(e);}createRenderParams(e){const t=super.createRenderParams(e);return t.rendererInfo=this._rendererInfo,t.attributeView=this.attributeView,t}onAttributeStoreUpdate(){}_processMaterialItemRequest(e,{items:t,abortOptions:r,resolver:s}){const{painter:i,pixelRatio:o}=e,n=t.map((e=>i.textureManager.rasterizeItem(e.symbol,o,e.glyphIds,r)));Promise.all(n).then((e=>{if(!this.stage)return void s.reject();const r=e.map(((e,r)=>({id:t[r].id,mosaicItem:e})));s.resolve(r);}),s.reject);}}

export { i, m, o };
