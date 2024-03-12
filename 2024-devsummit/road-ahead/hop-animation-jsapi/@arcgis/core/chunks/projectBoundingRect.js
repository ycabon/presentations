/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as o}from"./vec3f64.js";import{p as r}from"./projectBuffer.js";import{h as t}from"./aaBoundingRect.js";import{f as s}from"./unitUtils.js";function f(o,f,m,n){return!(null==o||(s(f,n)?(t(m,o),0):(i[0]=o[0],i[1]=o[1],i[2]=0,!r(i,f,0,i,n,0,1)||(m[0]=i[0],m[1]=i[1],i[0]=o[2],i[1]=o[3],i[2]=0,!r(i,f,0,i,n,0,1)||(m[2]=i[0],m[3]=i[1],0)))))}const i=o();export{f as p};
