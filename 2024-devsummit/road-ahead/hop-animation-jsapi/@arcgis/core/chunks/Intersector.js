/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i as t,I as r,G as s}from"./Intersector2.js";function e(s){return t(s)&&s.intersector===r.TERRAIN&&!!s.target}class n extends s{constructor(t,r,s){super(t,r),this.triangleNr=s}}function a(s){return t(s)&&s.intersector===r.OVERLAY&&!!s.target}export{n as O,e as a,a as i};
