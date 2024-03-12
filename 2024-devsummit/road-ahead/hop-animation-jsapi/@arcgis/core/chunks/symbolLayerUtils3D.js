/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../core/lang.js";import{f as e}from"./vec3f64.js";import{f as n}from"./aaBoundingBox.js";function r(n,{isPrimitive:r,width:t,depth:o,height:s}){const a=r?10:1;if(null==t&&null==s&&null==o)return[a*n[0],a*n[1],a*n[2]];const c=e(t,o,s);let u;for(let e=0;e<3;e++){const r=c[e];if(null!=r){u=r/n[e];break}}for(let e=0;e<3;e++)null==c[e]&&(c[e]=n[e]*u);return c}const t=n(-.5,-.5,-.5,.5,.5,.5),o=n(-.5,-.5,0,.5,.5,1),s=n(-.5,-.5,0,.5,.5,.5);function a(e){switch(e){case"sphere":case"cube":case"diamond":return t;case"cylinder":case"cone":case"inverted-cone":return o;case"tetrahedron":return s;default:return}}const c=["butt","square","round"],u=[...c,"none"],i=["miter","bevel","round"];export{c as a,r as b,i as l,a as o,u as p};
