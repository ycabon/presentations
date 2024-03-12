/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{t as s,m as t,a as r,s as o}from"./mat3.js";import{c as a}from"./mat3f64.js";import{g as m}from"./vec2.js";import{s as n,w as c}from"./vec3.js";import{c as f}from"./vec3f64.js";const i=f(),e=a(),p=a(),u=a();function j(t,r,o){return n(i,r[0],r[1],1),c(i,i,s(e,o)),0===i[2]?m(t,i[0],i[1]):m(t,i[0]/i[2],i[1]/i[2])}function v(s,o,a){return g(p,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),g(u,a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]),t(s,r(p,p),u),0!==s[8]&&(s[0]/=s[8],s[1]/=s[8],s[2]/=s[8],s[3]/=s[8],s[4]/=s[8],s[5]/=s[8],s[6]/=s[8],s[7]/=s[8],s[8]/=s[8]),s}function g(a,m,f,p,u,j,v,g,w){o(a,m,p,j,f,u,v,1,1,1),n(i,g,w,1),r(e,a);const[x,b,d]=c(i,i,s(e,e));return o(e,x,0,0,0,b,0,0,0,d),t(a,e,a)}export{v as g,j as t};
