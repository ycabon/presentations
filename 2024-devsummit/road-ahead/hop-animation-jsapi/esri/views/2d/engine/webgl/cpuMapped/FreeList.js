// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){class f{constructor(a){this.next=null;if(Array.isArray(a)){this.data=a[0];var b=this;for(let c=1;c<a.length;c++)b.next=new f([a[c]]),b=b.next}else this.data=a}*values(){let a=this;for(;a;)yield a.data,a=a.next}forEach(a){let b=this;for(;b;)a(b.data),b=b.next}find(a){return a(this.data)?this:this.next?.find(a)}max(a,b=this){b=a(this.data)>a(b.data)?this:b;return this.next?this.next.max(a,b):b}remove(a,b=null){return this===a?b?(b.next=this.next,b):this.next:this.next?.remove(a,
this)??null}get last(){return this.next?this.next.last:this}}class h{constructor(a){this._head=null;null!=a&&(this._head=new f(a))}get head(){return this._head}maxAvailableSpace(){if(null==this._head)return 0;const a=this._head.max(b=>b.end-b.start);return a.data.end-a.data.start}firstFit(a){if(null==this._head)return null;var b=null;let c=this._head;for(;c;){const d=c.data.end-c.data.start;if(d===a)return b?b.next=c.next:this._head=c.next,c.data.start;if(d>a)return b=c.data.start,c.data.start+=a,
b;b=c;c=c.next}return null}free(a,b){const c=a+b;if(null==this._head)this._head=new f({start:a,end:c});else if(c<=this._head.data.start)if(c===this._head.data.start)this._head.data.start-=b;else{var d=new f({start:a,end:c});d.next=this._head;this._head=d}else{d=this._head;for(var e=d.next;e;){if(e.data.start>=c){if(d.data.end===a){d.data.end+=b;d.data.end===e.data.start&&(d.data.end+=e.data.end-e.data.start,d.next=e.next);return}if(e.data.start===c){e.data.start-=b;return}a=new f({start:a,end:c});
a.next=d.next;d.next=a;return}d=e;e=e.next}a===d.data.end?d.data.end+=b:(a=new f({start:a,end:c}),d.next=a)}}clear(){this._head=null}}g.FreeList=h;g.List=f;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});