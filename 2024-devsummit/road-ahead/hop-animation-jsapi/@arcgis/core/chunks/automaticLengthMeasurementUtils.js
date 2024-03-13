/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{d as n}from"./quantityUtils.js";import{f as t,ac as r,ad as e}from"./unitUtils.js";import{i,s as o}from"./vec3.js";import{c as a}from"./vec3f64.js";import{p as l}from"./projectVectorToVector.js";import{c as s}from"./measurementUtils2.js";import{g as c,b as u,c as f}from"./SnappingManager.js";var p;function m(n,r){const{spatialReference:e}=n;return t(e,r.spatialReference)?(x[0]=n.x,x[1]=n.y,x[2]=n.hasZ?n.z:0,y[0]=r.x,y[1]=r.y,y[2]=r.hasZ?r.z:0,d(x,y,e)):null}function h(n,r){const{spatialReference:e}=n;return t(e,r.spatialReference)?(x[0]=n.x,x[1]=n.y,x[2]=n.hasZ?n.z:0,y[0]=r.x,y[1]=r.y,y[2]=r.hasZ?r.z:0,j(x,y,e)):null}function z(t){return x[0]=t.x,x[1]=t.y,x[2]=t.hasZ?t.z:0,function(t,e){const i=r(e);return null!=i?n(t[2],i):null}(x,t.spatialReference)}function d(t,r,e){const i=v(t,r,e,p.Direct);return null!=i?n(i.direct,i.unit):null}function g(t,r,e){const i=v(t,r,e,p.Horizontal);return null!=i?n(i.horizontal,i.unit):null}function j(t,r,e){const i=v(t,r,e,p.Vertical);return null!=i?n(i.verticalSigned,i.unit):null}function v(n,t,r,a){const c=s(r),u=e(c);if(null==u)return null;const f=t[2]-n[2];if(a===p.Vertical)return{verticalSigned:f,unit:u};if(!l(n,r,R,c)||!l(t,r,Z,c))return null;if(a===p.Direct)return{direct:i(Z,R),unit:u};if(o(V,n[0],n[1],t[2]),!l(V,r,V,c))return null;const m=i(V,Z);return a===p.Horizontal?{horizontal:m,unit:u}:{direct:i(Z,R),horizontal:m,vertical:Math.abs(f),unit:u}}!function(n){n[n.Direct=0]="Direct",n[n.Horizontal=1]="Horizontal",n[n.Vertical=2]="Vertical"}(p||(p={}));const x=a(),y=a(),R=a(),Z=a(),V=a();function D(t){return c(t)??function(t){return function(t,r){const{hasZ:i,spatialReference:o}=t,a=s(o);let l=0;const c=e(a);if(null==c)return null;const u=r===p.Direct?d:g;for(const n of t.paths){if(n.length<2)continue;const t=n.length-1;for(let r=0;r<t;++r){const t=n[r];x[0]=t[0],x[1]=t[1],x[2]=i?t[2]:0;const e=n[r+1];y[0]=e[0],y[1]=e[1],y[2]=i?e[2]:0;const a=u(x,y,o);if(null==a)return null;l+=a.value}}return n(l,c)}(t,p.Horizontal)}(t)}function H(n,r){return u(n,r)??function(n,r){const{spatialReference:e}=n;return t(e,r.spatialReference)?(x[0]=n.x,x[1]=n.y,x[2]=n.hasZ?n.z:0,y[0]=r.x,y[1]=r.y,y[2]=r.hasZ?r.z:0,g(x,y,e)):null}(n,r)}function b(n,t,r){return f(n,t,r)??g(n,t,r)}export{H as a,D as b,b as c,m as d,d as e,z as f,j as g,h as v};