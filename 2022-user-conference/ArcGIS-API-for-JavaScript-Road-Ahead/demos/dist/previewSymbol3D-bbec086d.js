import { wt as t, wM as g, wN as h, wO as h$1, e3 as a, aF as u, E as s, t as t$1, wP as d, a6 as E$1, $ as s$1, wn as h$2, hx as d$1, wQ as m, f, wR as c, m as r, wS as d$2, wT as g$1, ij as y, ik as p, wU as d$3, wV as u$1, wW as s$2, wX as L, wY as p$1, wZ as o, w_ as l, w$ as j, x0 as e, x1 as n } from './_virtual_index-1ea2035a.js';
import { resolveWebStyleSymbol as h$3 } from './webStyleSymbolUtils-070c2341.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const C=t.size,I=t.maxSize,R=t.maxOutlineSize,E=t.lineWidth,Z=t.tallSymbolWidth;function q(e){const t=e.outline,s=r(e.material)?e.material.color:null,r$1=r(s)?s.toHex():null;if(t$1(t)||"pattern"in t&&r(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return "fill"===e.type&&"#ffffff"===r$1?{color:"#bdc3c7",width:.75}:null;const a=u(t.size)||0;return {color:"rgba("+(r(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(a,R),style:"pattern"in t&&r(t.pattern)&&"style"===t.pattern.type?d$2(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function A(t,s){const r=s&&s.resource,a$1=r&&r.href;if(t.thumbnail&&t.thumbnail.url)return Promise.resolve(t.thumbnail.url);if(a$1&&"object"!==s.type)return Promise.resolve(g$1(t,s));const o=a("esri/images/Legend/legend3dsymboldefault.png");return t.styleOrigin&&(t.styleOrigin.styleName||t.styleOrigin.styleUrl)?h$3(t.styleOrigin,{portal:t.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>e?.thumbnail?.url||o)):Promise.resolve(o)}function H(e,r=1){const a=e.a,o=y(e),n=o.h,l=o.s/r,i=100-(100-o.v)/r,{r:c,g:p$1,b:u}=p({h:n,s:l,v:i});return [c,p$1,u,a]}function N(e){return "water"===e.type?t$1(e.color)?null:e.color:t$1(e.material)||t$1(e.material.color)?null:e.material.color}function T(e,t=0){const s=N(e);if(!s){if("fill"===e.type)return null;const s=g.r,r=h(s,t);return [r,r,r,100]}const r=s.toRgba();for(let a=0;a<3;a++)r[a]=h(r[a],t);return r}async function W(t,s){const r=t.style;if("none"===r)return null;return {type:"pattern",x:0,y:0,src:await h$1(a(`esri/symbols/patterns/${r}.png`),s.toCss(!0)),width:5,height:5}}function $(e){return e.outline?q(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function B(e,t){const s=N(e);if(!s)return null;let r="rgba(";return r+=h(s.r,t)+",",r+=h(s.g,t)+",",r+=h(s.b,t)+",",r+s.a+");"}function F(e,t){const s=B(e,t);if(!s)return {};if("pattern"in e&&r(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style)return null;return {color:s,width:Math.min(e.size?u(e.size):.75,R),style:"pattern"in e&&r(e.pattern)&&"style"===e.pattern.type?d$2(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?u(2):e.join:null}}function G(e,t,s){const r=null!=s?.75*s:0;return {type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function J(e){const t=e.depth,s=e.height,r=e.width;return 0!==r&&0!==t&&0!==s&&r===t&&null!=r&&null!=s&&r<s}function K(e,t,s){const r=[];if(!e)return r;switch(e.type){case"icon":{const s=0,a=0,o=t,n=t;switch(e.resource&&e.resource.primitive||j){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:T(e,0),stroke:q(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[s,a]},{command:"L",values:[o,a]},{command:"L",values:[o,n]},{command:"Z",values:[]}]},fill:T(e,0),stroke:q(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[.5*o,a]},{command:"L",values:[o,n]},{command:"Z",values:[]}]},fill:T(e,0),stroke:q(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*o,a]},{command:"L",values:[.5*o,n]},{command:"M",values:[s,.5*n]},{command:"L",values:[o,.5*n]}]},stroke:$(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[s,a]},{command:"L",values:[o,n]},{command:"M",values:[o,a]},{command:"L",values:[s,n]}]},stroke:$(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[s,.5*n]},{command:"L",values:[.5*o,a]},{command:"L",values:[o,.5*n]},{command:"L",values:[.5*o,n]},{command:"Z",values:[]}]},fill:T(e,0),stroke:q(e)});}break}case"object":switch(e.resource&&e.resource.primitive||d$3){case"cone":{const a=G(T(e,0),T(e,-.6),s?Z:t),o=l(t,s);r.push({shape:o[0],fill:a}),r.push({shape:o[1],fill:a});break}case"inverted-cone":{const s=T(e,0),a=G(s,T(e,-.6),t),o$1=o(t);r.push({shape:o$1[0],fill:a}),r.push({shape:o$1[1],fill:s});break}case"cube":{const a=p$1(t,s);r.push({shape:a[0],fill:T(e,0)}),r.push({shape:a[1],fill:T(e,-.3)}),r.push({shape:a[2],fill:T(e,-.5)});break}case"cylinder":{const a=G(T(e,0),T(e,-.6),s?Z:t),o=L(t,s);r.push({shape:o[0],fill:a}),r.push({shape:o[1],fill:a}),r.push({shape:o[2],fill:T(e,0)});break}case"diamond":{const s=s$2(t);r.push({shape:s[0],fill:T(e,-.3)}),r.push({shape:s[1],fill:T(e,0)}),r.push({shape:s[2],fill:T(e,-.3)}),r.push({shape:s[3],fill:T(e,-.7)});break}case"sphere":{const s=G(T(e,0),T(e,-.6));s.x1=0,s.y1=0,s.x2=.25*t,s.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:s});break}case"tetrahedron":{const s=u$1(t);r.push({shape:s[0],fill:T(e,-.3)}),r.push({shape:s[1],fill:T(e,0)}),r.push({shape:s[2],fill:T(e,-.6)});break}}break}return r}function Q(e){const t="number"==typeof e?.size?e?.size:null;return t?u(t):null}function V(e){return "icon"===e.type?"multiply":"tint"}function X(e,t){const s=Q(t),r=t?.maxSize?u(t.maxSize):null,o=t?.disableUpsampling??!1,n=e.symbolLayers,l=[];let p=0,u$1=0;const h=n.getItemAt(n.length-1);let m;return h&&"icon"===h.type&&(m=h.size&&u(h.size)),n.forEach((a=>{if("icon"!==a.type&&"object"!==a.type)return;const n="icon"===a.type?a.size&&u(a.size):0,i=s||n?Math.ceil(Math.min(s||n,r||I)):C;if(a&&a.resource&&a.resource.href){const t=A(e,a).then((e=>{const t=a.get("material.color"),s=V(a);return d(e,i,t,s,o)})).then((e=>{const t=e.width,s=e.height;return p=Math.max(p,t),u$1=Math.max(u$1,s),[{shape:{type:"image",x:0,y:0,width:t,height:s,src:e.url},fill:null,stroke:null}]}));l.push(t);}else {let e=i;"icon"===a.type&&m&&s&&(e=i*(n/m));const r="tall"===t?.symbolConfig||t?.symbolConfig?.isTall||"object"===a.type&&J(a);p=Math.max(p,r?Z:e),u$1=Math.max(u$1,e),l.push(Promise.resolve(K(a,e,r)));}})),E$1(l).then((e=>{const s=[];return e.forEach((e=>{e.value?s.push(e.value):e.error&&s$1.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!",e.error);})),h$2(s,[p,u$1],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function Y(e$1,t){const s=e$1.symbolLayers,r=[],a=d$1(e$1),n=Q(t),l=(t&&t.maxSize?u(t.maxSize):null)||R;let i,p=0,u$1=0;return s.forEach(((e$1,t)=>{if(!e$1)return;if("line"!==e$1.type&&"path"!==e$1.type)return;const s=[];switch(e$1.type){case"line":{const r=F(e$1,0);if(t$1(r))break;const a=r&&r.width||0;0===t&&(i=a);const c=Math.min(n||a,l),h=0===t?c:n?c*(a/i):c,m=h>E/2?2*h:E;u$1=Math.max(u$1,h),p=Math.max(p,m),r.width=h,s.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u$1]},{command:"L",values:[p,.5*u$1]}]},stroke:r});break}case"path":{const t=Math.min(n||C,l),r=T(e$1,0),a=T(e$1,-.2),o=B(e$1,-.4),i=o?{color:o,width:1}:{};if("quad"===e$1.profile){const t=e$1.width,o=e$1.height,n=m(t&&o?t/o:1,0===o,0===t),l={...i,join:"bevel"};s.push({shape:n[0],fill:a,stroke:l}),s.push({shape:n[1],fill:a,stroke:l}),s.push({shape:n[2],fill:r,stroke:l});}else s.push({shape:e.pathSymbol3DLayer[0],fill:a,stroke:i}),s.push({shape:e.pathSymbol3DLayer[1],fill:r,stroke:i});u$1=Math.max(u$1,t),p=u$1;}}r.push(s);})),Promise.resolve(h$2(r,[p,u$1],{node:t&&t.node,scale:a,opacity:t&&t.opacity}))}async function _(e$1,t){const s="mesh-3d"===e$1.type,r$1=e$1.symbolLayers,a=Q(t),i=t&&t.maxSize?u(t.maxSize):null,p=a||C,u$1=[];let h=0,m=0,f$1=!1;for(let c$1=0;c$1<r$1.length;c$1++){const e$1=r$1.getItemAt(c$1),t=[];if(s&&"fill"!==e$1.type)continue;const a=e.fill[0];switch(e$1.type){case"fill":{const r$1=q(e$1),o=Math.min(p,i||I);h=Math.max(h,o),m=Math.max(m,o),f$1=!0;let n=T(e$1,0);const c="pattern"in e$1?e$1.pattern:null,u=N(e$1);!s&&r(c)&&"style"===c.type&&"solid"!==c.style&&u&&(n=await W(c,u)),t.push({shape:a,fill:n,stroke:r$1});break}case"line":{const s=F(e$1,0);if(t$1(s))break;const r={stroke:s,shape:a};h=Math.max(h,C),m=Math.max(m,C),t.push(r);break}case"extrude":{const s={join:"round",width:1,...F(e$1,-.4)},r=T(e$1,0),a=T(e$1,-.2),o=Math.min(p,i||I),n=c(o);s.width=1,t.push({shape:n[0],fill:a,stroke:s}),t.push({shape:n[1],fill:a,stroke:s}),t.push({shape:n[2],fill:r,stroke:s});const l=C,c$1=.7*C+.5*o;h=Math.max(h,l),m=Math.max(m,c$1);break}case"water":{const s=f(N(e$1)),r=H(s),a=H(s,2),o=H(s,3),l=n();f$1=!0,t.push({shape:l[0],fill:r}),t.push({shape:l[1],fill:a}),t.push({shape:l[2],fill:o});const c=Math.min(p,i||I);h=Math.max(h,c),m=Math.max(m,c);break}}u$1.push(t);}return h$2(u$1,[h,m],{node:t&&t.node,scale:f$1,opacity:t&&t.opacity})}function ee(e,t){if(0===e.symbolLayers.length)return Promise.reject(new s("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return X(e,t);case"line-3d":return Y(e,t);case"polygon-3d":case"mesh-3d":return _(e,t)}return Promise.reject(new s("symbolPreview: swatchInfo3D","symbol not supported."))}

export { W as getPatternDescriptor, Q as getSizeFromOptions, T as getSymbolLayerFill, ee as previewSymbol3D };
