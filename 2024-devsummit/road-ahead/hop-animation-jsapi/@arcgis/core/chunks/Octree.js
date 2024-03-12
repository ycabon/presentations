/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{f as e}from"../core/Accessor.js";import{P as t}from"../core/scheduling.js";import{b as o,h as n,k as i,p as s,a as r}from"./vec3.js";import{c as h,f as a}from"./vec3f64.js";import{i as d}from"./frustum.js";import{e as l}from"./plane.js";import{c as u,g as c,a as f,i as m,b as _}from"./sphere.js";import{r as p}from"./Util.js";class b{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new g,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),g.clearPool(),D[0]=null,F.prune(),k.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const o=g.acquire();for(let n=0;n<t;n++){const t=e[n];this._isDegenerate(t)?this._degenerateObjects.add(t):(o.init(this._root),this._add(t,o))}g.release(o)}remove(e,t=null){this._objectCount-=e.length;const o=g.acquire();for(const n of e){const e=t??u(this.objectToBoundingSphere(n),C);T(e[3])?(o.init(this._root),this._remove(n,e,o)):this._degenerateObjects.delete(n)}g.release(o),this._shrink()}update(e,t){if(!T(t[3])&&this._isDegenerate(e))return;const o=function(e){return D[0]=e,D}(e);this.remove(o,t),this.add(o)}forEachAlongRay(e,t,o){const n=l(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(n,e))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(n,e)&&o(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(n,e)&&o(e)})),!0}))}forEachAlongRayWithVerticalOffset(e,t,o,n){const i=l(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(i,e,n))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e)})),!0}))}forEach(e){this._forEachNode(this._root,(t=>{const o=t.node;return o.terminals.forAll(e),null!==o.residents&&o.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,i,s=(()=>!0),r=1/0){let h=1/0,a=1/0,l=null;const u=x(e,t),f=o=>{if(--r,!s(o))return;const n=this.objectToBoundingSphere(o);if(!d(i,n))return;const u=N(e,t,c(n)),f=u-n[3],m=u+n[3];f<h&&(h=f,a=m,l=o)};return this._forEachNodeDepthOrdered(this._root,(s=>{if(r<=0||!d(i,s.bounds))return!1;if(o(B,u,s.halfSize),n(B,B,c(s.bounds)),N(e,t,B)>a)return!1;const h=s.node;return h.terminals.forAll((e=>f(e))),null!==h.residents&&h.residents.forAll((e=>f(e))),!0}),e,t),l}forEachInDepthRange(e,t,i,s,r,h,a){let l=-1/0,u=1/0;const f={setRange:e=>{i===b.DepthOrder.FRONT_TO_BACK?(l=Math.max(l,e.near),u=Math.min(u,e.far)):(l=Math.max(l,-e.far),u=Math.min(u,-e.near))}};f.setRange(s);const m=N(t,i,e),_=x(t,i),p=x(t,-i),g=e=>{if(!a(e))return;const o=this.objectToBoundingSphere(e),n=c(o),s=N(t,i,n)-m,_=s-o[3],p=s+o[3];_>u||p<l||!d(h,o)||r(e,f)};this._forEachNodeDepthOrdered(this._root,(e=>{if(!d(h,e.bounds))return!1;if(o(B,_,e.halfSize),n(B,B,c(e.bounds)),N(t,i,B)-m>u)return!1;if(o(B,p,e.halfSize),n(B,B,c(e.bounds)),N(t,i,B)-m<l)return!1;const s=e.node;return s.terminals.forAll((e=>g(e))),null!==s.residents&&s.residents.forAll((e=>g(e))),!0}),t,i)}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize,t.depth)))}forEachNeighbor(e,t){const o=f(t),n=c(t),s=t=>{const s=this.objectToBoundingSphere(t),r=f(s),h=o+r;return!(i(c(s),n)-h*h<=0)||e(t)};let r=!0;const h=e=>{r&&(r=s(e))};this._forEachNode(this._root,(e=>{const t=f(e.bounds),s=o+t;if(i(c(e.bounds),n)-s*s>0)return!1;const a=e.node;return a.terminals.forAll(h),r&&null!==a.residents&&a.residents.forAll(h),r})),r&&this.forEachDegenerateObject(h)}_intersectsNode(e,t){return O(c(t.bounds),2*-t.halfSize,R),O(c(t.bounds),2*t.halfSize,v),p(e.origin,e.direction,R,v)}_intersectsNodeWithOffset(e,t,o){return O(c(t.bounds),2*-t.halfSize,R),O(c(t.bounds),2*t.halfSize,v),o.applyToMinMax(R,v),p(e.origin,e.direction,R,v)}_intersectsObject(e,t){const o=this.objectToBoundingSphere(t);return!(o[3]>0)||m(o,e)}_intersectsObjectWithOffset(e,t,o){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||m(o.applyToBoundingSphere(n),e)}_forEachNode(e,t){let o=g.acquire().init(e);const n=[o];for(;0!==n.length;){if(o=n.pop(),t(o)&&!o.isLeaf())for(let e=0;e<o.node.children.length;e++)o.node.children[e]&&n.push(g.acquire().init(o).advance(e));g.release(o)}}_forEachNodeDepthOrdered(e,t,o,n=b.DepthOrder.FRONT_TO_BACK){let i=g.acquire().init(e);const s=[i];for(function(e,t,o){if(!k.length)for(let e=0;e<8;++e)k.push({index:0,distance:0});for(let o=0;o<8;++o){const n=z[o];k.data[o].index=o,k.data[o].distance=N(e,t,n)}k.sort(((e,t)=>e.distance-t.distance));for(let e=0;e<8;++e)o[e]=k.data[e].index}(o,n,I);0!==s.length;){if(i=s.pop(),t(i)&&!i.isLeaf())for(let e=7;e>=0;--e){const t=I[e];i.node.children[t]&&s.push(g.acquire().init(i).advance(t))}g.release(i)}}_remove(e,t,o){F.clear();const n=o.advanceTo(t,((e,t)=>{F.push(e.node),F.push(t)}))?o.node.terminals:o.node.residents;if(n.removeUnordered(e),0===n.length)for(let e=F.length-2;e>=0;e-=2){const t=F.data[e],o=F.data[e+1];if(!this._purge(t,o))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}_purge(e,o){return o>=0&&(e.children[o]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new t({shrink:!0})),!0)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let o=0;o<t.length;o++){const n=g.acquire().init(e);this._add(t.at(o),n),g.release(n)}}_grow(e,t){if(0!==t&&(j(e,t,(e=>this.objectToBoundingSphere(e)),P),T(P[3])&&!this._fitsInsideTree(P)))if(this._nodeIsEmpty(this._root.node))u(P,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const e=this._rootBoundsForRootAsSubNode(P);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(P,e):this._growRootAsSubNode(e),g.release(e)}}_rebuildTree(e,t){s(c(w),c(t.bounds)),w[3]=t.halfSize,j([e,w],2,(e=>e),q);const o=g.acquire().init(this._root);this._root.initFrom(null,q,q[3]),this._root.increaseHalfSize(1.25),this._forEachNode(o,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),g.release(o)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let o=0;return this._forEachNode(this._root,(e=>(o=Math.max(o,e.depth),o+t<=this._maximumDepth))),o+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],o=e;let n=-1/0;const i=this._root.bounds,s=this._root.halfSize;for(let e=0;e<3;e++){const r=i[e]-s-(o[e]-t),h=o[e]+t-(i[e]+s),a=Math.max(0,Math.ceil(r/(2*s))),d=Math.max(0,Math.ceil(h/(2*s)))+1,l=2**Math.ceil(Math.log(a+d)*Math.LOG2E);n=Math.max(n,l),y[e].min=a,y[e].max=d}for(let e=0;e<3;e++){let t=y[e].min,o=y[e].max;const r=(n-(t+o))/2;t+=Math.ceil(r),o+=Math.floor(r);const h=i[e]-s-t*s*2;A[e]=h+(o+t)*s}const r=n*s;return A[3]=r*M,g.acquire().initFrom(null,A,r,0)}_growRootAsSubNode(e){const t=this._root.node;s(c(P),c(this._root.bounds)),P[3]=this._root.halfSize,this._root.init(e),e.advanceTo(P,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let o=0,n=0;for(;n<t.length&&null==e;)o=n++,e=t[o];for(;n<t.length;)if(t[n++])return-1;return o}_isDegenerate(e){return!T(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,o=this._root.halfSize;return e[3]<=o&&e[0]>=t[0]-o&&e[0]<=t[0]+o&&e[1]>=t[1]-o&&e[1]<=t[1]+o&&e[2]>=t[2]-o&&e[2]<=t[2]+o}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:o}=this,n=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:o,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:n}}}_nodeToJSON(e){const t=e.children.map((e=>e?this._nodeToJSON(e):null)),o=e.residents?.map((e=>this.objectToBoundingSphere(e))),n=e.terminals?.map((e=>this.objectToBoundingSphere(e)));return{children:t,residents:o,terminals:n}}static fromJSON(e){const t=new b((e=>e),{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class g{constructor(){this.bounds=_(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,o,n=this.depth){return this.node=null!=e?e:g.createEmptyNode(),t&&u(t,this.bounds),this.halfSize=o,this.depth=n,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*M}advance(e){let t=this.node.children[e];t||(t=g.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const o=z[e];return this.bounds[0]+=o[0]*this.halfSize,this.bounds[1]+=o[1]*this.halfSize,this.bounds[2]+=o[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,o=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!o)return t&&t(this,-1),!1;this.node.residents=null}const n=this._childIndex(e);t&&t(this,n),this.advance(n)}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new t({shrink:!0}),residents:new t({shrink:!0})}}static acquire(){return g._pool.acquire()}static release(e){g._pool.release(e)}static clearPool(){g._pool.prune()}}function S(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function O(e,t,o){o[0]=e[0]+t,o[1]=e[1]+t,o[2]=e[2]+t}function j(e,t,o,n){if(1===t){const t=o(e[0]);u(t,n)}else{R[0]=1/0,R[1]=1/0,R[2]=1/0,v[0]=-1/0,v[1]=-1/0,v[2]=-1/0;for(let n=0;n<t;n++){const t=o(e[n]);T(t[3])&&(s=t,(i=R)[0]=Math.min(i[0],s[0]-s[3]),i[1]=Math.min(i[1],s[1]-s[3]),i[2]=Math.min(i[2],s[2]-s[3]),S(v,t))}r(c(n),R,v,.5),n[3]=Math.max(v[0]-R[0],v[1]-R[1],v[2]-R[2])/2}var i,s}function x(e,t){let o,n=1/0;for(let i=0;i<8;++i){const s=N(e,t,E[i]);s<n&&(n=s,o=E[i])}return o}function N(e,t,o){return t*(e[0]*o[0]+e[1]*o[1]+e[2]*o[2])}function T(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}g._pool=new e(g),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(b||(b={}));const z=[a(-1,-1,-1),a(1,-1,-1),a(-1,1,-1),a(1,1,-1),a(-1,-1,1),a(1,-1,1),a(-1,1,1),a(1,1,1)],E=[a(-1,-1,-1),a(-1,-1,1),a(-1,1,-1),a(-1,1,1),a(1,-1,-1),a(1,-1,1),a(1,1,-1),a(1,1,1)],M=Math.sqrt(3),D=[null],A=_(),B=h(),R=h(),v=h(),F=new t,C=_(),P=_(),w=_(),q=_(),y=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],k=new t,I=[0,0,0,0,0,0,0,0],L=b;export{L as O};
