import { cD as e, wt as t, xq as G, aF as u$1, wn as h$1 } from './_virtual_index-1ea2035a.js';
import { i as ie, b as oe } from './cimAnalyzer-32e4ad07.js';
import { CIMSymbolRasterizer as z, GeometryStyle as M } from './CIMSymbolRasterizer-fe1dc279.js';
import './fontUtils-49a60944.js';
import './BidiEngine-25d35bf3.js';
import './enums-3e26cf0d.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-a784b44f.js';
import './number-7d0da80b.js';
import './Rect-1c5846da.js';
import './GeometryUtils-10c98655.js';
import './Rasterizer-c3cfa17d.js';
import './_commonjsHelpers-fea55a41.js';
import './imageutils-619c4949.js';
import './rasterizingUtils-8c5ae8bb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const h=new z(null,!0),m=e(t.size),c=e(t.maxSize),u=e(t.lineWidth),f=1;function y(e){const t=e?.size;if("number"==typeof t)return {width:t,height:t};return {width:null!=t&&"object"==typeof t&&"width"in t?t.width:null,height:null!=t&&"object"==typeof t&&"height"in t?t.height:null}}async function d(e,n={}){const{node:s,opacity:d,symbolConfig:p}=n,g="object"==typeof p&&"isSquareFill"in p&&p.isSquareFill,w=n.cimOptions||n,b=w.geometryType||G(e?.data?.symbol),M$1=y(n),{feature:j,fieldMap:v}=w;if(null==M$1.width||null==M$1.height){const t=await ie.resolveSymbolOverrides(e.data,j,null,v,b);if(!t)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:t},e.data.primitiveOverrides=null;const n=[];oe.fetchResources(t,h.resourceManager,n),n.length>0&&await Promise.all(n);const{width:o,height:r}=oe.getEnvelope(t,null,h.resourceManager);M$1.width="esriGeometryPolygon"===b?m:"esriGeometryPolyline"===b?u:null!=o&&isFinite(o)?Math.min(o,c):m,M$1.height="esriGeometryPolygon"===b?m:null!=r&&isFinite(r)?Math.max(Math.min(r,c),f):m;}const S=await h.rasterizeCIMSymbolAsync(e,j,M$1,g||"esriGeometryPolygon"!==b?M.Preview:M.Legend,v,b);if(!S)return null;const{width:C,height:I}=S,P=document.createElement("canvas");P.width=C,P.height=I;P.getContext("2d").putImageData(S,0,0);const x=u$1(M$1.width),z=u$1(M$1.height),F=new Image(x,z);F.src=P.toDataURL(),null!=d&&(F.style.opacity=`${d}`);let G$1=F;if(null!=n.effectView){const e={shape:{type:"image",x:0,y:0,width:x,height:z,src:F.src},fill:null,stroke:null,offset:[0,0]};G$1=h$1([[e]],[x,z],{effectView:n.effectView});}return s&&G$1&&s.appendChild(G$1),G$1}

export { d as previewCIMSymbol };
