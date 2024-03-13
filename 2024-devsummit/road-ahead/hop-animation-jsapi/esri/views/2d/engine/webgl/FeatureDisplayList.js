// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/has","./enums","./cpuMapped/FreeList"],function(n,v,m,k){class h{constructor(a,e,g,d,f){this.instance=a;this.materialKey=e;this.target=g;this.start=d;this.count=f}get textureKey(){return this.materialKey&255}get indexEnd(){return this.start+this.count}extend(a){this.count+=a}render(a){this.instance.techniqueRef.render(a,this)}}class q{constructor(){this._minOrderedLength=this._length=0;this._materialKeys=new Set}static fromDisplayEntities(a,e,g,d){const f=new q;
for(const b of a.values())for(const c of b.records)a=g.getInstance(c.instanceId),f.addRecord(a,a.instanceId<<16|c.textureKey&255,c.indexStart,c.indexCount,c.vertexStart,c.vertexCount,e,d);return f}get length(){return this._length}get minOrderedLength(){return this._minOrderedLength}get minUnorderedLength(){return this._materialKeys.size}render(a){const {drawPhase:e}=a;for(const g of this.infos())g.instance.techniqueRef.drawPhase&e&&g.render(a)}addRecord(a,e,g,d,f,b,c,l){d||(g=f,d=b);if(d)if(null==
this._head)a=new h(a,e,c,g,d),this._tail=this._head=new k.List(a),this._length++,this._minOrderedLength++;else{if(l===m.FeatureBatchingStrategy.STRICT_ORDER)return this._insert(a,e,c,g,d,this._tail,null);f=null;b=this._head;var r=a.instanceId,p=a.techniqueRef.symbologyPlane;if(l===m.FeatureBatchingStrategy.STRICT_MARKERS_AND_TEXT&&(p===m.FeatureSymbologyDrawOrder.MARKER||p===m.FeatureSymbologyDrawOrder.TEXT))return this._insert(a,e,c,g,d,this._tail,null);for(;b;){l=b.data.instance;const t=l.instanceId,
u=f?.data.instance.instanceId;if(p<l.techniqueRef.symbologyPlane||r===u&&r!==t)return this._insert(a,e,c,g,d,f,b);f=b;b=b.next}this._insert(a,e,c,g,d,f,null)}}*infos(){if(null!=this._head)for(const a of this._head.values())yield a}_insert(a,e,g,d,f,b,c){if(null==b&&null==c)a=new h(a,e,g,d,f),this._tail=this._head=new k.List(a),this._length++,this._minOrderedLength++;else{e!==this._tail.data.materialKey&&this._minOrderedLength++;this._materialKeys.add(e);if(null==b&&null!=c)return this._insertAtHead(a,
e,g,d,f,c);if(null!=b&&null==c)return this._insertAtEnd(a,e,g,d,f,b);if(null!=b&&null!=c)return this._insertAtMiddle(a,e,g,d,f,b,c)}}_insertAtHead(a,e,g,d,f,b){e===b.data.materialKey&&g===b.data.target&&d+f===b.data.start?(b.data.start=d,b.data.count+=f):(a=new h(a,e,g,d,f),this._head=new k.List(a),this._head.next=b,this._length++)}_insertAtEnd(a,e,g,d,f,b){b.data.materialKey===e&&b.data.indexEnd===d?b.data.count+=f:(a=new h(a,e,g,d,f),this._tail=new k.List(a),b.next=this._tail,this._length++)}_insertAtMiddle(a,
e,g,d,f,b,c){b.data.materialKey===e&&b.data.target===g&&b.data.indexEnd===d?(b.data.count+=f,b.data.materialKey===c.data.materialKey&&b.data.target===c.data.target&&b.data.indexEnd===c.data.start&&(b.data.count+=c.data.count,b.next=c.next,this._length--)):e===c.data.materialKey&&g===c.data.target&&d+f===c.data.start?(c.data.start=d,c.data.count+=f):(a=new h(a,e,g,d,f),a=new k.List(a),b.next=a,a.next=c,this._length++)}}n.DisplayList=q;n.DisplayListInfo=h;Object.defineProperty(n,Symbol.toStringTag,
{value:"Module"})});