import { bE as n, aF as t, a_ as y, D as D$1, O as r, V as n$1, bQ as f, cl as o, cm as l, cn as _$1, n as t$1, aa as n$2, ab as h, ac as c, co as e, b2 as S, b4 as l$1, bq as c$1, aP as U$1, bp as s, a$ as u, aG as y$2, aI as f$1, cp as y$3 } from './_virtual:index-325c676c.js';
import { y as y$1, n as n$3, T as T$1, b as n$4, c as r$1 } from './shapingUtils-979c101c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const P=Math.PI/180,W=n(),U=n$1(),A=t();function X(t,n,s,o,a,m,c){if(!o||!s.symbol)return t[0]=t[1]=t[2]=t[3]=0,n[0]=n[1]=n[2]=n[3]=0,t;const l=o;if(!l$1(l)){c$1(t,l);let e=n[0];0===e&&(e=Q(s),n[0]=e);const r=a*e/2;return t[0]-=r,t[1]-=r,t[2]+=r,t[3]+=r,t}{const i=l.x,r=l.y;"esriTS"===s.symbol.type&&0===n[2]&&0===n[3]&&V(n,s.symbol,s.mosaicItem),function(t,n,s,i,r,o,a,m){let c;switch(i.type){case"esriSMS":case"esriPMS":c=F(n,s,i,o,a,0);break;case"esriTS":c=D(n,s,i,r,o,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":c=G(n,s,i,o,a,0);}let l,f,u=0;for(let t=0;t<c.rings[0].length-1;t++)f=c.rings[0][t],l=(n-f[0])*(n-f[0])+(s-f[1])*(s-f[1]),u=Math.max(u,l);u=Math.sqrt(u);let h=U$1(n-u,m),p=U$1(n+u,m);if(h>p){const t=S(m);if(t){const[e,n]=t.valid;h=e,p=n;}}t[0]=h,t[1]=s-u,t[2]=p,t[3]=s+u;}(t,i,r,s.symbol,n,a,m,c);}return t}function z(t){return "simple-marker"===t||"picture-marker"===t||"text"===t}function O(e){switch(f(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}const H=n$1(),T=n$1(),q=n$1(),C=n$1(),J=n$1(),N=n$1(),B=n$1();function E(t,e,n,s){r(q,e,n);const i=t.paths;let r$1,o$1,a,m,c,l$1,f,x,g,d=1/0;for(let t=0;t<i.length;t++){const b=i[t];if(!(b.length<2))for(let t=1;t<b.length;t++)r$1=b[t-1][0],a=b[t-1][1],o$1=b[t][0],m=b[t][1],c=Math.min(r$1,o$1)-s,l$1=Math.min(a,m)-s,f=Math.max(r$1,o$1)+s,x=Math.max(a,m)+s,e<c||e>f||n<l$1||n>x||(r(H,r$1,a),r(T,o$1,m),o(C,T,H),o(J,H,q),l(N,C,_$1(C,J)/_$1(C,C)),o(B,J,N),g=_$1(B,B),d>g&&(d=g));}return Math.sqrt(d)<=s}function F(t,e$1,n,s,i,r$1){let o,a;const m=t$1(n.xoffset),c$1=t$1(n.yoffset),f=P*n.angle,x=P*r$1;switch(n.type){case"esriSMS":o=a=t$1(n.size);break;case"esriPMS":o=t$1(n.width),a=t$1(n.height);}i<.04&&(s=.04*s/i);const h$1=n$2(W);h(h$1,h$1,r(U,t,e$1)),c(h$1,h$1,x-f),e(h$1,h$1,r(U,s,-s)),h(h$1,h$1,r(U,m,-c$1));const p=[0,0];D$1(p,r(U,-.5*o,-.5*a),h$1);const y=[0,0];D$1(y,r(U,-.5*o,.5*a),h$1);const j=[0,0];D$1(j,r(U,.5*o,-.5*a),h$1);const I=[0,0];return D$1(I,r(U,.5*o,.5*a),h$1),{rings:[[p,j,I,y,p]]}}function G(t,e$1,n,s,i,r$1){const o=y$1.getEnvelope(n.data);if(!o)return null;i<.04&&(s=.04*s/i);const a=t$1(o.width),m=t$1(o.height),c$1=t$1(o.x),f=t$1(o.y),x=0*P,h$1=P*r$1,p=n$2(W);h(p,p,r(U,t,e$1)),c(p,p,h$1-x),e(p,p,r(U,s,s));const y=[0,0];D$1(y,r(U,c$1,f+m),p);const j=[0,0];D$1(j,r(U,c$1,f),p);const I=[0,0];D$1(I,r(U,c$1+a,f+m),p);const w=[0,0];return D$1(w,r(U,c$1+a,f),p),{rings:[[y,I,w,j,y]]}}function D(t,e$1,n,s,i,r$1){const o=t$1(n.xoffset),a=t$1(n.yoffset),m=P*n.angle,c$1=P*r$1,f=n$2(W);h(f,f,r(U,t,e$1)),c(f,f,c$1),e(f,f,r(U,i,-i));const x=s[0]+s[2]/2,h$1=s[1]+s[3]/2;h(f,f,r(U,o,-a)),h(f,f,r(U,x,h$1)),c(f,f,m),h(f,f,r(U,-x,-h$1));const p=[0,0];D$1(p,r(U,s[0],s[1]),f);const y=[0,0];D$1(y,r(U,s[0],s[1]+s[3]),f);const j=[0,0];D$1(j,r(U,s[0]+s[2],s[1]),f);const I=[0,0];return D$1(I,r(U,s[0]+s[2],s[1]+s[3]),f),{rings:[[p,j,I,y,p]]}}function K(t){let n,l,f,x,u$1,h,p,y,g,d=null;if(!t)return null;if("mesh"===t.type)return t.toJSON();if(n=t.spatialReference,l=S(n),!l)return t.toJSON();f=n.isWebMercator,h=f?102100:4326,x=Y[h].maxX,u$1=Y[h].minX,p=Y[h].plus180Line,y=Y[h].minus180Line;const b=t.toJSON();if(l$1(b))g=et(b,x,u$1);else if(s(b))b.points=b.points.map((t=>et(t,x,u$1))),g=b;else if(u(b))g=function(t,e){if(!e)return t;const n=function(t,e){const n=[],{ymin:s,ymax:i}=t,r=t.xmax-t.xmin,o=t.xmin,a=t.xmax;let m;const[c,l]=e.valid;m=$(t.xmin,e);const f=m.x,x=m.frameId;m=$(t.xmax,e);const u=m.x,h=m.frameId,p=f===u&&r>0;if(r>2*l){const t={xmin:o<a?f:u,ymin:s,xmax:l,ymax:i},e={xmin:c,ymin:s,xmax:o<a?u:f,ymax:i},r={xmin:0,ymin:s,xmax:l,ymax:i},m={xmin:c,ymin:s,xmax:0,ymax:i},p=[],y=[];_(t,r)&&p.push(x),_(t,m)&&y.push(x),_(e,r)&&p.push(h),_(e,m)&&y.push(h);for(let t=x+1;t<h;t++)p.push(t),y.push(t);n.push({extent:t,frameIds:[x]},{extent:e,frameIds:[h]},{extent:r,frameIds:p},{extent:m,frameIds:y});}else f>u||p?n.push({extent:{xmin:f,ymin:s,xmax:l,ymax:i},frameIds:[x]},{extent:{xmin:c,ymin:s,xmax:u,ymax:i},frameIds:[h]}):n.push({extent:{xmin:f,ymin:s,xmax:u,ymax:i},frameIds:[x]});return n}(t,e).map((t=>t.extent));if(n.length<2)return n[0]||t;if(n.length>2)return t.xmin=e.valid[0],t.xmax=e.valid[1],t;return {rings:n.map((t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]))}}(b,l);else if(y$2(b)||f$1(b)){const t=A;c$1(t,b);const e={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},n=Z(e.xmin,u$1)*(2*x),r=0===n?b:function(t,e){const n=function(t){if(y$2(t))return t.rings;return t.paths}(t);for(const t of n)for(const n of t)n[0]+=e;return t}(b,n);e.xmin+=n,e.xmax+=n,y$3(e,p)&&e.xmax!==x||y$3(e,y)&&e.xmin!==u$1?d=r:g=r;}else g=t.clone();if(null!==d){return (new nt).cut(d,x)}return g}function Q(t){switch(t.symbol.type){case"esriSFS":case"esriPFS":{const e=t.symbol.outline;return e?e.width:0}case"esriSLS":return t$1(t.symbol.width);case"esriSMS":return t$1(t.symbol.size);case"esriPMS":return t$1(Math.max(t.symbol.width,t.symbol.height));case"esriTS":{const e=[0,0,0,0];V(e,t.symbol,t.mosaicItem);const n=Math.max(Math.abs(e[0]),Math.abs(e[1]));return Math.max(e[2],e[3])+n}case"expanded-cim":{const e=y$1.getEnvelope(t.symbol.data);return t$1(Math.sqrt(e.width*e.width+e.height*e.height))}case"composite-symbol":{if(!t.symbol.layers.length)return 0;const e=t.symbol.layers.length-1;return Q({symbol:t.symbol.layers[e],mosaicItem:null})}case"label":default:return 0}}function V(t,e,n){if(!n||0===n.glyphMosaicItems.length)return t;const s=n$3(e.text)[1],i=n.glyphMosaicItems,r=T$1(i,s,{scale:t$1(e.font.size)/24,angle:e.angle,xOffset:e.xoffset,yOffset:e.yoffset,hAlign:n$4(e.horizontalAlignment||"center"),vAlign:r$1(e.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(e.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(e.lineHeight||1,4)),decoration:e.font.decoration||"none",isCIM:!1}).bounds;return t[0]=t$1(r.x-r.halfWidth),t[1]=t$1(r.y-r.halfHeight),t[2]=t$1(r.width),t[3]=t$1(r.height),t}const Y={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:{paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:y.WebMercator},minus180Line:{paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:y.WebMercator}},4326:{maxX:180,minX:-180,plus180Line:{paths:[[[180,-180],[180,180]]],spatialReference:y.WGS84},minus180Line:{paths:[[[-180,-180],[-180,180]]],spatialReference:y.WGS84}}};function Z(t,e){return Math.ceil((t-e)/(2*e))}function $(t,e){const[n,s]=e.valid,i=2*s;let r,o=0;return t>s?(r=Math.ceil(Math.abs(t-s)/i),t-=r*i,o=r):t<n&&(r=Math.ceil(Math.abs(t-n)/i),t+=r*i,o=-r),{x:t,frameId:o}}function _(t,e){const{xmin:n,ymin:s,xmax:i,ymax:r}=e;return tt(t,n,s)&&tt(t,n,r)&&tt(t,i,r)&&tt(t,i,s)}function tt(t,e,n){return e>=t.xmin&&e<=t.xmax&&n>=t.ymin&&n<=t.ymax}function et(t,e,n){if(Array.isArray(t)){const s=t[0];if(s>e){const n=Z(s,e);t[0]=s+n*(-2*e);}else if(s<n){const e=Z(s,n);t[0]=s+e*(-2*n);}}else {const s=t.x;if(s>e){const n=Z(s,e);t.x+=n*(-2*e);}else if(s<n){const e=Z(s,n);t.x+=e*(-2*n);}}return t}class nt{cut(t,e){let n;if(t.rings)this.closed=!0,n=t.rings,this.minPts=4;else {if(!t.paths)return null;this.closed=!1,n=t.paths,this.minPts=2;}const s=n.length,i=-2*e;for(let t=0;t<s;t++){const e=n[t];if(e&&e.length>=this.minPts){const t=[];for(const n of e)t.push([n[0]+i,n[1]]);n.push(t);}}return this.closed?t.rings=n:t.paths=n,t}}

export { D, E, F, G, K, O, V, X, z };