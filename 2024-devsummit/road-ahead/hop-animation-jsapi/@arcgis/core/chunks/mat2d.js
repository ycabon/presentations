/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n(n){return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n[4]=0,n[5]=0,n}function t(n,t,r,s,u,c,o){return n[0]=t,n[1]=r,n[2]=s,n[3]=u,n[4]=c,n[5]=o,n}function r(n,t){const r=t[0],s=t[1],u=t[2],c=t[3],o=t[4],a=t[5];let i=r*c-s*u;return i?(i=1/i,n[0]=c*i,n[1]=-s*i,n[2]=-u*i,n[3]=r*i,n[4]=(u*a-c*o)*i,n[5]=(s*o-r*a)*i,n):null}function s(n,t,r){const s=t[0],u=t[1],c=t[2],o=t[3],a=t[4],i=t[5],e=r[0],f=r[1],h=r[2],M=r[3],l=r[4],b=r[5];return n[0]=s*e+c*f,n[1]=u*e+o*f,n[2]=s*h+c*M,n[3]=u*h+o*M,n[4]=s*l+c*b+a,n[5]=u*l+o*b+i,n}function u(n,t,r){const s=t[0],u=t[1],c=t[2],o=t[3],a=t[4],i=t[5],e=Math.sin(r),f=Math.cos(r);return n[0]=s*f+c*e,n[1]=u*f+o*e,n[2]=s*-e+c*f,n[3]=u*-e+o*f,n[4]=a,n[5]=i,n}function c(n,t,r){const s=t[0],u=t[1],c=t[2],o=t[3],a=t[4],i=t[5],e=r[0],f=r[1];return n[0]=s*e,n[1]=u*e,n[2]=c*f,n[3]=o*f,n[4]=a,n[5]=i,n}function o(n,t,r){const s=t[0],u=t[1],c=t[2],o=t[3],a=t[4],i=t[5],e=r[0],f=r[1];return n[0]=s,n[1]=u,n[2]=c,n[3]=o,n[4]=s*e+c*f+a,n[5]=u*e+o*f+i,n}function a(n,t){const r=Math.sin(t),s=Math.cos(t);return n[0]=s,n[1]=r,n[2]=-r,n[3]=s,n[4]=0,n[5]=0,n}function i(n,t){return n[0]=t[0],n[1]=0,n[2]=0,n[3]=t[1],n[4]=0,n[5]=0,n}function e(n,t){return n[0]=1,n[1]=0,n[2]=0,n[3]=1,n[4]=t[0],n[5]=t[1],n}export{e as a,i as b,n as c,t as d,a as f,r as i,s as m,u as r,c as s,o as t};
