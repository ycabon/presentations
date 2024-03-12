/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{r as s,d as r}from"./mathUtils.js";import{s as t,m as a,g as n}from"./quat.js";import{c as o}from"./quatf64.js";import{p as u,e as f,n as c,q as i}from"./vec3.js";import{U as e,b as m,d as p}from"./vec3f64.js";import{c as j}from"./vec4f64.js";function v(s=x){return[s[0],s[1],s[2],s[3]]}function d(s,r,t=v()){return u(t,s),t[3]=r,t}function q(s,r,t=j()){return f(t,s,r),c(t,t),t[3]=-i(s,r),t}function b(r,o,u=v()){return t(k,r,l(r)),t(w,o,l(o)),a(k,w,k),f=u,c=s(n(u,k)),f[3]=c,f;var f,c}function g(s,r,t,a=v()){return d(e,s,y),d(m,r,z),d(p,t,A),b(y,z,y),b(y,A,a),a}function h(s){return s}function U(s){return s[3]}function l(s){return r(s[3])}const x=[0,0,1,0],k=o(),w=o();v();const y=v(),z=v(),A=v();export{h as a,U as b,l as c,v as d,b as e,d as f,g,q as h,x as u};
