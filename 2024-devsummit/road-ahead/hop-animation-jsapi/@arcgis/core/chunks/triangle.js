/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{O as n}from"./plane.js";import{b as s,h as r,c as t,l as o,e as a}from"./vec3.js";import{a as e,c as i}from"./vec3f64.js";import{c}from"./lineSegment.js";function p(n,t,o){const a=1e-5,{direction:e,origin:i}=t,{p0:c,p1:p,p2:f}=n,m=p[0]-c[0],u=p[1]-c[1],j=p[2]-c[2],b=f[0]-c[0],l=f[1]-c[1],g=f[2]-c[2],h=e[1]*g-l*e[2],v=e[2]*b-g*e[0],w=e[0]*l-b*e[1],d=m*h+u*v+j*w;if(d>-a&&d<a)return!1;const x=1/d,M=i[0]-c[0],O=i[1]-c[1],S=i[2]-c[2],k=x*(M*h+O*v+S*w);if(k<0||k>1)return!1;const q=O*j-u*S,y=S*m-j*M,z=M*u-m*O,A=x*(e[0]*q+e[1]*y+e[2]*z);return!(A<0||k+A>1||(o&&(s(o,e,x*(b*q+l*y+g*z)),r(o,i,o)),0))}function f(n,s,r){const t=s[0]-n[0],o=s[1]-n[1],a=r[0]-n[0],e=r[1]-n[1];return.5*Math.abs(t*e-o*a)}function m(n,s,r){return t(u,s,n),t(j,r,n),.5*o(a(u,u,j))}new n(c),new n((()=>({p0:i(),p1:i(),p2:i()})));const u=i(),j=i();export{f as a,m as b,p as i};