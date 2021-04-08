import { cs as n, eD as m$1, eE as b$1, eF as w$1 } from './_virtual_index-634cbc09.js';
import { r as r$1 } from './quickselect-eae177f3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class h{constructor(t=9,i){this.compareMinX=l,this.compareMinY=c,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear();}destroy(){this.clear(),M.prune(),X.prune(),Y.prune(),B.prune();}all(t){this._all(this.data,t);}search(t,i){let n=this.data;const e=this.toBBox;if(p(t,n))for(M.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;p(t,a)&&(n.leaf?i(h):x(t,a)?this._all(h,i):M.push(h));}n=M.pop();}}collides(t){let i=this.data;const n=this.toBBox;if(!p(t,i))return !1;for(M.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(p(t,h)){if(i.leaf||x(t,h))return !0;M.push(s);}}i=M.pop();}return !1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else {if(this.data.height<i.height){const t=this.data;this.data=i,i=t;}this._insert(i,this.data.height-i.height-1,!0);}else this.data=i;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new b([]),this}remove(n){if(!n)return this;let e,s=this.data,h=null,a=0,r=!1;const o=this.toBBox(n);for(Y.clear(),B.clear();s||Y.length>0;){var l;if(!s)s=m$1(Y.pop()),h=Y.data[Y.length-1],a=null!=(l=B.pop())?l:0,r=!0;if(s.leaf&&(e=b$1(s.children,n,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),Y.push(s),this._condense(Y),this;r||s.leaf||!x(s,o)?h?(a++,s=h.children[a],r=!1):s=null:(Y.push(s),B.push(a),a=0,h=s,s=s.children[0]);}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let n=t;for(X.clear();n;){var e;if(!0===n.leaf)for(const t of n.children)i(t);else X.pushArray(n.children);n=null!=(e=X.pop())?e:null;}}_build(t,i,n,e){const s=n-i+1;let h=this._maxEntries;if(s<=h){const e=new b(t.slice(i,n+1));return a(e,this.toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/h**(e-1)));const r=new j([]);r.height=e;const o=Math.ceil(s/h),l=o*Math.ceil(Math.sqrt(h));g(t,i,n,l,this.compareMinX);for(let a=i;a<=n;a+=l){const i=Math.min(a+l-1,n);g(t,a,i,o,this.compareMinY);for(let n=a;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1));}}return a(r,this.toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,s=1/0;for(let h=0,a=i.children.length;h<a;h++){const a=i.children[h],r=m(a),o=d(t,a)-r;o<s?(s=o,e=r<e?r:e,n=a):o===s&&r<e&&(e=r,n=a);}i=n||i.children[0];}return i}_insert(t,i,n){const e=this.toBBox,s=n?t:e(t);Y.clear();const h=this._chooseSubtree(s,this.data,i,Y);for(h.children.push(t),o(h,s);i>=0&&Y.data[i].children.length>this._maxEntries;)this._split(Y,i),i--;this._adjustParentBBoxes(s,Y,i);}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const h=this._chooseSplitIndex(n,s,e);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(h,n.children.length-h),o=n.leaf?new b(r):new j(r);o.height=n.height,a(n,this.toBBox),a(o,this.toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o);}_splitRoot(t,i){this.data=new j([t,i]),this.data.height=t.height+1,a(this.data,this.toBBox);}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this.toBBox),o=r(t,a,n,this.toBBox),l=f(i,o),c=m(i)+m(o);l<e?(e=l,h=a,s=c<s?c:s):l===e&&c<s&&(s=c,h=a);}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this.compareMinX:l,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e);}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this.toBBox,h=r(t,0,i,s),a=r(t,n-i,n,s);let l=u(h)+u(a);for(let r=i;r<n-i;r++){const i=t.children[r];o(h,t.leaf?s(i):i),l+=u(h);}for(let r=n-i-1;r>=i;r--){const i=t.children[r];o(a,t.leaf?s(i):i),l+=u(a);}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t);}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const s=t.data[n-1],h=s.children;h.splice(b$1(h,e,h.length,s.indexHint),1);}else this.clear();else a(e,this.toBBox);}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};");}}function a(t,i){r(t,0,t.children.length,i,t);}function r(t,i,n,e,s){s||(s=new b([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],o(s,t.leaf?e(h):h);return s}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY);}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return (t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,i){return (Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function f(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function p(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function g(i,n,e,h,a){const r=[n,e];for(;r.length;){const n=m$1(r.pop()),e=m$1(r.pop());if(n-e<=h)continue;const o=e+Math.ceil((n-e)/h/2)*h;r$1(i,o,e,n,a),r.push(e,o,o,n);}}const M=new n,X=new n,Y=new n,B=new n({deallocator:void 0});class _{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0;}}class w extends _{constructor(){super(...arguments),this.height=1,this.indexHint=new w$1;}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!0;}}class j extends w{constructor(t){super(),this.children=t,this.leaf=!1;}}

export { h };
