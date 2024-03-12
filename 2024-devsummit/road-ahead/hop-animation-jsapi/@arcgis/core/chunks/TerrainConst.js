/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as a,h as s}from"./mathUtils.js";import{c as t}from"./aaBoundingRect.js";import{T as e}from"./TilingScheme.js";const o=64,r=512,n=2.5,i=a(s/10),l=2,c=t();e.WebMercatorAuxiliarySphere.getExtent(0,0,0,c);const m=t([-180,-90,180,90]),u="Cannot extend surface to encompass all layers because it would result in too many root tiles.",f="Surface extent is too large for tile resolution at level 0.";function p(a){return 3}const g=4;export{r as a,p as b,g as c,f as d,i as e,n as f,m as g,o as m,l as p,u as t,c as w};
