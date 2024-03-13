/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{h as a}from"../core/lang.js";import s from"../Color.js";import{H as o}from"./HighlightOptions.js";const r={selection:a=>new o({color:new s([a.color.r/2,a.color.g/2,a.color.b/2,a.color.a])}),highlight:a=>a,popup:a=>new o({color:new s([a.color.g,a.color.b,a.color.r,a.color.a])})};function t(a){if(!a)return 0;let s=1;for(const o in r){if(o===a)break;s<<=1}return s}const e=Object.keys(r),n=1e-30,l=512,c=128,i=511,D=16777216,f=8,g=29,m=24,p=8,h=0,u=0,w=0,b=1,j=2,F=3,G=4,P=5,k=6,V=12,d=5,x=6,y=5,A=6;var H;!function(a){a[a.FilterFlags=0]="FilterFlags",a[a.Animation=1]="Animation",a[a.GPGPU=2]="GPGPU",a[a.VV=3]="VV",a[a.DD0=4]="DD0",a[a.DD1=5]="DD1",a[a.DD2=6]="DD2"}(H||(H={}));const O=1<<e.length,U=O<<1,v=1.05,C=a("featurelayer-force-marker-text-draw-order")?.5:3,q=5,z=6,B=1.15,E=2,I=124,J=2,K=10,L=1024,M=128,N=4,Q=1,R=1<<20,S=.75,T=10,W=.75,X=256;export{H as A,W as B,X as C,f as D,L as E,I as F,h as G,u as H,J as I,N as J,M as K,d as L,C as M,Q as N,y as O,A as P,K as Q,R,n as S,i as T,c as U,m as a,j as b,V as c,G as d,P as e,b as f,t as g,e as h,k as i,x as j,r as k,D as l,g as m,l as n,q as o,B as p,z as q,O as r,E as s,v as t,p as u,F as v,U as w,w as x,S as y,T as z};