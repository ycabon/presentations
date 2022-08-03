import { u7 as t, uZ as i, u_ as c, u1 as h, cp as e } from './_virtual_index-9b831d4a.js';
import { CIMSymbolRasterizer as z } from './CIMSymbolRasterizer-b24d43e9.js';
import './cimAnalyzer-320e051b.js';
import './CIMSymbolHelper-6ee7aec0.js';
import './BidiEngine-d3dd902c.js';
import './enums-11126df6.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-94cbc2bf.js';
import './number-7d0da80b.js';
import './GeometryUtils-10c98655.js';
import './Rasterizer-817bd074.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s=new z(null,!0),n=t.maxSize;async function r(t,a={}){const{size:r,maxSize:c$1,node:m,opacity:f}=a,p=a.cimOptions||a,{feature:y,fieldMap:h$1,geometryType:u,style:d}=p,g=i(t),w="number"==typeof r?r:null,b=Math.min(null!=w?w:g,null!=c$1?c$1:e(n));b!==g&&(t=t.clone(),c(t,b,{preserveOutlineWidth:!0}));let M=3;t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(M=1);const S=await s.rasterizeCIMSymbolAsync(t,y,h$1,u,{scaleFactor:M,style:d}),j=document.createElement("canvas");j.width=S.imageData.width,j.height=S.imageData.height;j.getContext("2d").putImageData(S.imageData,0,0);let x=j.width/M,z=j.height/M;if(null!=r&&(null==a?.scale||a?.scale)){const e=x/z;x=e<=1?Math.ceil(b*e):b,z=e<=1?b:Math.ceil(b/e);}const C=new Image(x,z);C.src=j.toDataURL(),null!=f&&(C.style.opacity=`${f}`);let D=C;if(null!=a.effectView){const e={shape:{type:"image",x:0,y:0,width:x,height:z,src:C.src},fill:null,stroke:null,offset:[0,0]};D=h([[e]],[x,z],{effectView:a.effectView});}return m&&m.appendChild(D),D}

export { r as previewCIMSymbol };
