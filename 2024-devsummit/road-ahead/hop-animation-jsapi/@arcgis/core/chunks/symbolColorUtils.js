/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";var n;function e(t){switch(t){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function r(e,r,l){if(null==e||r===n.Ignore)return l[0]=255,l[1]=255,l[2]=255,void(l[3]=255);const c=t(Math.round(e[3]*i),0,i),s=0===c||r===n.Tint?0:r===n.Replace?o:u;l[0]=t(Math.round(e[0]*a),0,a),l[1]=t(Math.round(e[1]*a),0,a),l[2]=t(Math.round(e[2]*a),0,a),l[3]=c+s}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(n||(n={}));const a=255,i=85,o=i,u=2*i;export{n as C,r as e,e as p};
