import { g_ as h, f1 as v, O as k, kJ as d$1, kK as u, aB as f, t, kL as a$1, kM as d$2, kN as j, m as r, kO as i } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function m(t$1,n,i,f$1,m){const{elevationProvider:j,renderCoordsHelper:u$1,spatialReference:y}=t$1,{elevationInfo:v}=n,I=d$1(v,!0),g=await u(I,y,m);f(m);const x=[],h=new Set,w=new Set;for(const{objectId:o,points:a}of f$1){const p=i(o);if(t(p)){for(const e of a)x.push(e[2]);h.add(o);continue}p.isDraped&&w.add(o);const f=p.graphic.geometry;c.setFromElevationInfo(a$1(f,v)),c.updateFeatureExpressionInfoContext(g,p.graphic,n),l.spatialReference=t$1.spatialReference;for(const{x:e,y:o,z:t}of a)l.x=e,l.y=o,l.z=t??0,d$2(l,j,c,u$1,d),x.push(d.z);}return {elevations:x,drapedObjectIds:w,failedObjectIds:h}}const c=new h,l=v(0,0,0,k.WGS84),d=new j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function a(a,o,i$1){if(t(a)||0===o.candidates.length)return s;const c=a.graphics3DGraphicsByObjectID??a.graphics3DGraphics,p=[],d=[],{renderer:u}=a,g=r(u)&&"arcadeRequired"in u&&u.arcadeRequired?i():null,l=async(n,{graphic:r,graphics3DSymbol:t$1})=>{const s=await g,o=await a.getRenderingInfoAsync(r,u,s,{signal:i$1});return t(o)?[]:t$1.queryForSnapping(n,f$1,o,i$1)},{candidates:h,spatialReference:f$1}=o;for(let n=0;n<h.length;++n){const r=h[n],{objectId:t$1}=r,a="number"==typeof t$1?c.get(t$1):void 0;if(t(a))continue;const{graphics3DSymbol:s}=a;s.symbologySnappingSupported&&(p.push(l(r,a)),d.push(n));}if(0===p.length)return s;const m=await Promise.all(p);f(i$1);const y=[],b=[];for(let e=0;e<m.length;++e){const n=m[e],r=d[e];for(const e of n)y.push(e),b.push(r);}return {candidates:y,sourceCandidateIndices:b}}const s={candidates:[],sourceCandidateIndices:[]};

export { a, m };
