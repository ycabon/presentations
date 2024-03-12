/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{s as e,e as n}from"./screenUtils.js";import{j as r}from"./vec2.js";import{n as t,c as o,p as s,s as i}from"./vec3.js";import{v as c,s as u}from"./plane.js";function a(n,r,o=c()){return l(n,e(r),o),t(o.direction,o.direction),o}function l(e,r,t){return f(e,e.screenToRender(r,n(u.get())),t)}function f(e,t,s){const i=n(r(u.get(),t));if(i[2]=0,!e.unprojectFromRenderScreen(i,s.origin))return null;const c=n(r(u.get(),t));c[2]=1;const a=e.unprojectFromRenderScreen(c,u.get());return null==a?null:(o(s.direction,a,s.origin),s)}function g(e,r,t){return m(e,e.screenToRender(r,n(u.get())),t)}function m(e,n,r){s(r.origin,e.eye);const t=i(u.get(),n[0],n[1],1),c=e.unprojectFromRenderScreen(t,u.get());return null==c?null:(o(r.direction,c,r.origin),r)}export{a,f as b,g as c,m as d,l as f};
