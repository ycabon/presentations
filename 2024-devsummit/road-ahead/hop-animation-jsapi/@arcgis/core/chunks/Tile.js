/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{q as t}from"./quickselect.js";import{A as i}from"../core/Accessor.js";import n from"../geometry/Extent.js";import{c as e}from"./aaBoundingRect.js";import{Q as r}from"../rest/support/Query.js";import{T as a}from"./TileKey2.js";function h(t,i){if(!(this instanceof h))return new h(t,i);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}function s(t,i,n){if(!n)return i.indexOf(t);for(var e=0;e<i.length;e++)if(n(t,i[e]))return e;return-1}function o(t,i){l(t,0,t.children.length,i,t)}function l(t,i,n,e,r){r||(r=g(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a,h=i;h<n;h++)a=t.children[h],u(r,t.leaf?e(a):a);return r}function u(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function c(t,i){return t.minX-i.minX}function m(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function p(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function g(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function B(i,n,e,r,a){for(var h,s=[n,e];s.length;)(e=s.pop())-(n=s.pop())<=r||(h=n+Math.ceil((e-n)/r/2)*r,t(i,h,n,e,a),s.push(n,h,h,e))}h.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],e=this.toBBox;if(!p(t,i))return n;for(var r,a,h,s,o=[];i;){for(r=0,a=i.children.length;r<a;r++)h=i.children[r],p(t,s=i.leaf?e(h):h)&&(i.leaf?n.push(h):x(t,s)?this._all(h,n):o.push(h));i=o.pop()}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!p(t,i))return!1;for(var e,r,a,h,s=[];i;){for(e=0,r=i.children.length;e<r;e++)if(a=i.children[e],p(t,h=i.leaf?n(a):a)){if(i.leaf||x(t,h))return!0;s.push(a)}i=s.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var e=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){var r=this.data;this.data=e,e=r}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this},insert:function(t){return null!=t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=g([]),this},remove:function(t,i){if(null==t)return this;for(var n,e,r,a,h=this.data,o=this.toBBox(t),l=[],u=[];h||l.length;){if(h||(h=l.pop(),e=l[l.length-1],n=u.pop(),a=!0),h.leaf&&-1!==(r=s(t,h.children,i)))return h.children.splice(r,1),l.push(h),this._condense(l),this;a||h.leaf||!x(h,o)?e?(n++,h=e.children[n],a=!1):h=null:(l.push(h),u.push(n),n=0,e=h,h=h.children[0])}return this},toBBox:function(t){return t},compareMinX:c,compareMinY:m,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,e){var r,a=n-i+1,h=this._maxEntries;if(a<=h)return o(r=g(t.slice(i,n+1)),this.toBBox),r;e||(e=Math.ceil(Math.log(a)/Math.log(h)),h=Math.ceil(a/Math.pow(h,e-1))),(r=g([])).leaf=!1,r.height=e;var s,l,u,c,m=Math.ceil(a/h),f=m*Math.ceil(Math.sqrt(h));for(B(t,i,n,f,this.compareMinX),s=i;s<=n;s+=f)for(B(t,s,u=Math.min(s+f-1,n),m,this.compareMinY),l=s;l<=u;l+=m)c=Math.min(l+m-1,u),r.children.push(this._build(t,l,c,e-1));return o(r,this.toBBox),r},_chooseSubtree:function(t,i,n,e){for(var r,a,h,s,o,l,u,c,m,d;e.push(i),!i.leaf&&e.length-1!==n;){for(u=c=1/0,r=0,a=i.children.length;r<a;r++)o=f(h=i.children[r]),m=t,d=h,(l=(Math.max(d.maxX,m.maxX)-Math.min(d.minX,m.minX))*(Math.max(d.maxY,m.maxY)-Math.min(d.minY,m.minY))-o)<c?(c=l,u=o<u?o:u,s=h):l===c&&o<u&&(u=o,s=h);i=s||i.children[0]}return i},_insert:function(t,i,n){var e=this.toBBox,r=n?t:e(t),a=[],h=this._chooseSubtree(r,this.data,i,a);for(h.children.push(t),u(h,r);i>=0&&a[i].children.length>this._maxEntries;)this._split(a,i),i--;this._adjustParentBBoxes(r,a,i)},_split:function(t,i){var n=t[i],e=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,e);var a=this._chooseSplitIndex(n,r,e),h=g(n.children.splice(a,n.children.length-a));h.height=n.height,h.leaf=n.leaf,o(n,this.toBBox),o(h,this.toBBox),i?t[i-1].children.push(h):this._splitRoot(n,h)},_splitRoot:function(t,i){this.data=g([t,i]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,n){var e,r,a,h,s,o,u,c,m,d,x,p,g,B;for(o=u=1/0,e=i;e<=n-i;e++)m=r=l(t,0,e,this.toBBox),d=a=l(t,e,n,this.toBBox),x=Math.max(m.minX,d.minX),p=Math.max(m.minY,d.minY),g=Math.min(m.maxX,d.maxX),B=Math.min(m.maxY,d.maxY),h=Math.max(0,g-x)*Math.max(0,B-p),s=f(r)+f(a),h<o?(o=h,c=e,u=s<u?s:u):h===o&&s<u&&(u=s,c=e);return c},_chooseSplitAxis:function(t,i,n){var e=t.leaf?this.compareMinX:c,r=t.leaf?this.compareMinY:m;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,r)&&t.children.sort(e)},_allDistMargin:function(t,i,n,e){t.children.sort(e);var r,a,h=this.toBBox,s=l(t,0,i,h),o=l(t,n-i,n,h),c=d(s)+d(o);for(r=i;r<n-i;r++)a=t.children[r],u(s,t.leaf?h(a):a),c+=d(s);for(r=n-i-1;r>=i;r--)a=t.children[r],u(o,t.leaf?h(a):a),c+=d(o);return c},_adjustParentBBoxes:function(t,i,n){for(var e=n;e>=0;e--)u(i[e],t)},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(i=t[n-1].children).splice(i.indexOf(t[n]),1):this.clear():o(t[n],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};class M{constructor(t,i){this.key=new a(0,0,0,0),this.bounds=e(),this.objectIds=new Set,this.key.set(i);const n=t.getLODInfoAt(this.key);this.tileInfoView=t,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=n.resolution,this.scale=n.scale,this.level=n.level}get lod(){return this.tileInfoView.getLODInfoAt(this.key)}get id(){return this.key.id}get extent(){return n.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}get arcadeEvaluationOptions(){return{$view:{scale:this.scale}}}createChildTiles(){const t=this.key.getChildKeys(),n=i.acquire();for(let i=0;i<t.length;i++)n[i]=new M(this.tileInfoView,t[i]);return n}getQuantizationParameters(){return r.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}export{M as T,h as r};