import { ch as j$1, ci as p, m2 as p$1, z as j$2, m3 as Ot, cf as c, s, r, $ as B, cj as i, ck as d$1, m4 as c$2, m5 as p$2, m6 as a$1, cg as U } from './_virtual_index-a68dd1ed.js';
import { c as c$1, a } from './devEnvironmentUtils-0f97b5c2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function j(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?d(t,e,l):c(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(f,b,j,h,d){const U=f.data,N=j&&r(j.portal)?j.portal:B.getDefault(),w={portal:N,url:j$2(f.baseUrl),origin:"portal-item"},D=U.items.find((t=>t.name===b));if(!D){const t=`The symbol name '${b}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:b}))}let P=i(d$1(D,h),w),S=D.thumbnail&&D.thumbnail.href;const E=D.thumbnail&&D.thumbnail.imageData;c$1()&&(P=a(P),S=a(S));const O={portal:N,url:j$2(Ot(P)),origin:"portal-item"};return j$1(P,d).then((e=>{const r="cimRef"===h?p(e.data):e.data,o=p$1(r,O);if(o&&c$2(o)){if(S){const t=i(S,w);o.thumbnail=new p$2({url:t});}else E&&(o.thumbnail=new p$2({url:`data:image/png;base64,${E}`}));f.styleUrl?o.styleOrigin=new a$1({portal:j.portal,styleUrl:f.styleUrl,name:b}):f.styleName&&(o.styleOrigin=new a$1({portal:j.portal,styleName:f.styleName,name:b}));}return o}))}function d(t,e,r$1){const o=U.replace(/\{SymbolName\}/gi,t.name),i=r(e.portal)?e.portal:B.getDefault();return j$1(o,r$1).then((t=>{const e=p(t.data);return p$1(e,{portal:i,url:j$2(Ot(o)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, j as resolveWebStyleSymbol };
