import { cF as j$1, cG as p, s5 as p$1, z as j$2, s6 as Ot, cD as c, s, r, $ as B, cH as i, cI as d$1, cJ as c$1, cK as a, s7 as c$2, s8 as p$2, s9 as a$1, cE as U } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function j(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?d(t,e,l):c(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(f,b,j,h,d){const U=f.data,N=j&&r(j.portal)?j.portal:B.getDefault(),w={portal:N,url:j$2(f.baseUrl),origin:"portal-item"},D=U.items.find((t=>t.name===b));if(!D){const t=`The symbol name '${b}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:b}))}let P=i(d$1(D,h),w),S=D.thumbnail&&D.thumbnail.href;const E=D.thumbnail&&D.thumbnail.imageData;c$1()&&(P=a(P),S=a(S));const O={portal:N,url:j$2(Ot(P)),origin:"portal-item"};return j$1(P,d).then((e=>{const r="cimRef"===h?p(e.data):e.data,o=p$1(r,O);if(o&&c$2(o)){if(S){const t=i(S,w);o.thumbnail=new p$2({url:t});}else E&&(o.thumbnail=new p$2({url:`data:image/png;base64,${E}`}));f.styleUrl?o.styleOrigin=new a$1({portal:j.portal,styleUrl:f.styleUrl,name:b}):f.styleName&&(o.styleOrigin=new a$1({portal:j.portal,styleName:f.styleName,name:b}));}return o}))}function d(t,e,r$1){const o=U.replace(/\{SymbolName\}/gi,t.name),i=r(e.portal)?e.portal:B.getDefault();return j$1(o,r$1).then((t=>{const e=p(t.data);return p$1(e,{portal:i,url:j$2(Ot(o)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, j as resolveWebStyleSymbol };
