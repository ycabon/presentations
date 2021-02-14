import { bc as h$1, bd as m$2, be as d$1, h as h$2, bf as f$3, bg as u$2, bh as Q, bi as s$2, bj as rn, b0 as l$3, aE as f$4, aC as y$2, bk as s$3, aX as u$3 } from './index.js';
import { t } from './json-dc26b8a4.js';
import { r as r$1 } from './quickselect-1f1691b9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=[0,0];function c(s,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return [n.x,n.y]=s(t.x,t.y,u),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return [n.xmin,n.ymin]=s(t.xmin,t.ymin,u),[n.xmax,n.ymax]=s(t.xmax,t.ymax,u),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return "rings"in t?{rings:p(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:p(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:l(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:void 0}function p(s,t){const n=[];for(const e of s)n.push(l(e,t));return n}function l(s,t){const n=[];for(const e of s){const s=t(e[0],e[1],[0,0]);n.push(s),e.length>2&&s.push(e[2]),e.length>3&&s.push(e[3]);}return n}async function f(s,t){if(!t)return;const n=Array.isArray(s)?s.map((s=>{var t;return null==(t=s.geometry)?void 0:t.spatialReference})):[s];await rn(n.map((s=>({source:s,dest:t}))));}const x=c.bind(null,h$1),y=c.bind(null,m$2);function g(s,r,i){return s?(i||(i=r,r=s.spatialReference),s$2(r)&&s$2(i)&&!d$1(r,i)?f$3(r,i)?u$2(i)?x(s):y(s):Q(t,[s],r,i,null)[0]:s):s}const _=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this);}async push(t,e,r){!t||!t.length||!e||!r||d$1(e,r);const i={geometries:t,inSpatialReference:e,outSpatialReference:r,resolve:null};return this._jobs.push(i),h$2((s=>{i.resolve=s,null===this._timer&&(this._timer=setTimeout(this._process,10));}))}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t$1,inSpatialReference:n,outSpatialReference:r,resolve:i}=s;f$3(n,r)?u$2(r)?i(t$1.map(x)):i(t$1.map(y)):i(Q(t,t$1,n,r,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10));}};async function j(s,t,n){return _.push(s,t,n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(t,n){if(!(this instanceof i))return new i(t,n);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear();}function n(t,i,n){if(!n)return i.indexOf(t);for(var h=0;h<i.length;h++)if(n(t,i[h]))return h;return -1}function h(t,i){a(t,0,t.children.length,i,t);}function a(t,i,n,h,a){a||(a=u$1(null)),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var e,o=i;o<n;o++)e=t.children[o],r(a,t.leaf?h(e):e);return a}function r(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function e(t,i){return t.minX-i.minX}function o(t,i){return t.minY-i.minY}function s(t){return (t.maxX-t.minX)*(t.maxY-t.minY)}function l$1(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function c$1(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function u$1(t){return {children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function f$1(i,n,h,a,r){for(var e,o=[n,h];o.length;)(h=o.pop())-(n=o.pop())<=a||(e=n+Math.ceil((h-n)/a/2)*a,r$1(i,e,n,h,r),o.push(n,e,e,h));}i.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],h=this.toBBox;if(!c$1(t,i))return n;for(var a,r,e,o,s=[];i;){for(a=0,r=i.children.length;a<r;a++)e=i.children[a],c$1(t,o=i.leaf?h(e):e)&&(i.leaf?n.push(e):m(t,o)?this._all(e,n):s.push(e));i=s.pop();}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!c$1(t,i))return !1;for(var h,a,r,e,o=[];i;){for(h=0,a=i.children.length;h<a;h++)if(r=i.children[h],c$1(t,e=i.leaf?n(r):r)){if(i.leaf||m(t,e))return !0;o.push(r);}i=o.pop();}return !1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var h=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===h.height)this._splitRoot(this.data,h);else {if(this.data.height<h.height){var a=this.data;this.data=h,h=a;}this._insert(h,this.data.height-h.height-1,!0);}else this.data=h;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=u$1([]),this},remove:function(t,i){if(!t)return this;for(var h,a,r,e,o=this.data,s=this.toBBox(t),l=[],c=[];o||l.length;){if(o||(o=l.pop(),a=l[l.length-1],h=c.pop(),e=!0),o.leaf&&-1!==(r=n(t,o.children,i)))return o.children.splice(r,1),l.push(o),this._condense(l),this;e||o.leaf||!m(o,s)?a?(h++,o=a.children[h],e=!1):o=null:(l.push(o),c.push(h),h=0,a=o,o=o.children[0]);}return this},toBBox:function(t){return t},compareMinX:e,compareMinY:o,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,a){var r,e=n-i+1,o=this._maxEntries;if(e<=o)return h(r=u$1(t.slice(i,n+1)),this.toBBox),r;a||(a=Math.ceil(Math.log(e)/Math.log(o)),o=Math.ceil(e/Math.pow(o,a-1))),(r=u$1([])).leaf=!1,r.height=a;var s,l,m,c,x=Math.ceil(e/o),d=x*Math.ceil(Math.sqrt(o));for(f$1(t,i,n,d,this.compareMinX),s=i;s<=n;s+=d)for(f$1(t,s,m=Math.min(s+d-1,n),x,this.compareMinY),l=s;l<=m;l+=x)c=Math.min(l+x-1,m),r.children.push(this._build(t,l,c,a-1));return h(r,this.toBBox),r},_chooseSubtree:function(t,i,n,h){for(var a,r,e,o,l,m,c,u,f,x;h.push(i),!i.leaf&&h.length-1!==n;){for(c=u=1/0,a=0,r=i.children.length;a<r;a++)l=s(e=i.children[a]),f=t,x=e,(m=(Math.max(x.maxX,f.maxX)-Math.min(x.minX,f.minX))*(Math.max(x.maxY,f.maxY)-Math.min(x.minY,f.minY))-l)<u?(u=m,c=l<c?l:c,o=e):m===u&&l<c&&(c=l,o=e);i=o||i.children[0];}return i},_insert:function(t,i,n){var h=this.toBBox,a=n?t:h(t),e=[],o=this._chooseSubtree(a,this.data,i,e);for(o.children.push(t),r(o,a);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(a,e,i);},_split:function(t,i){var n=t[i],a=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,a);var e=this._chooseSplitIndex(n,r,a),o=u$1(n.children.splice(e,n.children.length-e));o.height=n.height,o.leaf=n.leaf,h(n,this.toBBox),h(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o);},_splitRoot:function(t,i){this.data=u$1([t,i]),this.data.height=t.height+1,this.data.leaf=!1,h(this.data,this.toBBox);},_chooseSplitIndex:function(t,i,n){var h,r,e,o,l,m,c,u,f,x,d,p,M,X;for(m=c=1/0,h=i;h<=n-i;h++)r=a(t,0,h,this.toBBox),e=a(t,h,n,this.toBBox),f=r,x=e,d=void 0,p=void 0,M=void 0,X=void 0,d=Math.max(f.minX,x.minX),p=Math.max(f.minY,x.minY),M=Math.min(f.maxX,x.maxX),X=Math.min(f.maxY,x.maxY),o=Math.max(0,M-d)*Math.max(0,X-p),l=s(r)+s(e),o<m?(m=o,u=h,c=l<c?l:c):o===m&&l<c&&(c=l,u=h);return u},_chooseSplitAxis:function(t,i,n){var h=t.leaf?this.compareMinX:e,a=t.leaf?this.compareMinY:o;this._allDistMargin(t,i,n,h)<this._allDistMargin(t,i,n,a)&&t.children.sort(h);},_allDistMargin:function(t,i,n,h){t.children.sort(h);var e,o,s=this.toBBox,m=a(t,0,i,s),c=a(t,n-i,n,s),u=l$1(m)+l$1(c);for(e=i;e<n-i;e++)o=t.children[e],r(m,t.leaf?s(o):o),u+=l$1(m);for(e=n-i-1;e>=i;e--)o=t.children[e],r(c,t.leaf?s(o):o),u+=l$1(c);return u},_adjustParentBBoxes:function(t,i,n){for(var h=n;h>=0;h--)r(i[h],t);},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(i=t[n-1].children).splice(i.indexOf(t[n]),1):this.clear():h(t[n],this.toBBox);},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};");}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o$1=(n,t,r)=>[t,r],l$2=(n,t,r)=>[t,r,n[2]],a$1=(n,t,r)=>[t,r,n[2],n[3]];function m$1(n){if(!n)return null;return {originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:[n.tolerance,n.tolerance],translate:[n.extent.xmin,n.extent.ymax]}}function s$1({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function f$2({scale:n,translate:t},r){return Math.round((t[1]-r)/n[1])}function x$1(n,t,r){const e=[];let u,i,o,l;for(let a=0;a<r.length;a++){const m=r[a];a>0?(o=s$1(n,m[0]),l=f$2(n,m[1]),o===u&&l===i||(e.push(t(m,o-u,l-i)),u=o,i=l)):(u=s$1(n,m[0]),i=f$2(n,m[1]),e.push(t(m,u,i)));}return e.length>0?e:null}function I(n,t,r,e){return x$1(n,r?e?a$1:l$2:e?l$2:o$1,t)}function g$1(n,t,r,e){const u=[],i=r?e?a$1:l$2:e?l$2:o$1;for(let r=0;r<t.length;r++){const e=x$1(n,i,t[r]);e&&e.length>=3&&u.push(e);}return u.length?u:null}function N(n,t,r,e){const u=[],i=r?e?a$1:l$2:e?l$2:o$1;for(let r=0;r<t.length;r++){const e=x$1(n,i,t[r]);e&&e.length>=2&&u.push(e);}return u.length?u:null}function p$1({scale:n,translate:t},r){return r*n[0]+t[0]}function y$1({scale:n,translate:t},r){return t[1]-r*n[1]}function z(n,t,r){const e=new Array(r.length);if(!r.length)return e;const[u,i]=n.scale;let o=p$1(n,r[0][0]),l=y$1(n,r[0][1]);e[0]=t(r[0],o,l);for(let n=1;n<r.length;n++){const a=r[n];o+=a[0]*u,l-=a[1]*i,e[n]=t(a,o,l);}return e}function T(n,t,r){const e=new Array(r.length);for(let u=0;u<r.length;u++)e[u]=z(n,t,r[u]);return e}function E(n,t,r,e){return z(n,r?e?a$1:l$2:e?l$2:o$1,t)}function P(n,t,r,e){return T(n,r?e?a$1:l$2:e?l$2:o$1,t)}function b(n,t,r,e){return T(n,r?e?a$1:l$2:e?l$2:o$1,t)}function w(n,t,r,e,u){return t.xmin=s$1(n,r.xmin),t.ymin=f$2(n,r.ymin),t.xmax=s$1(n,r.xmax),t.ymax=f$2(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function G(n,t,r,e,u){return t.points=I(n,r.points,e,u),t}function L(n,t,r,e,u){return t.x=s$1(n,r.x),t.y=f$2(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function O(n,t,r,e,u){const i=g$1(n,r.rings,e,u);return i?(t.rings=i,t):null}function S(n,t,r,e,u){const i=N(n,r.paths,e,u);return i?(t.paths=i,t):null}function d(i,o){return i&&o?l$3(o)?L(i,{},o,!1,!1):f$4(o)?S(i,{},o,!1,!1):y$2(o)?O(i,{},o,!1,!1):s$3(o)?G(i,{},o,!1,!1):u$3(o)?w(i,{},o,!1,!1):null:null}function U(n,t,r,e,u){return t.points=E(n,r.points,e,u),t}function k(n,t,r,e,u){return t.x=p$1(n,r.x),t.y=y$1(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function q(n,t,r,e,u){return t.rings=b(n,r.rings,e,u),t}function v(n,t,r,e,u){return t.paths=P(n,r.paths,e,u),t}

export { L, U, d, f, g, i, j, k, m$1 as m, q, v };
