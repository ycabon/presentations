/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i as t,I as s,G as r,L as e}from"./Intersector2.js";class n extends r{constructor(t,s,r,e){super(s,r),this.point=t,this.createGraphic=e}}function a(r){return t(r)&&r.intersector===s.PCL&&!!r.target}class i extends e{constructor(t,s,r,e,n){super(t),this.layerUid=t,this.sublayerUid=s,this.nodeIndex=r,this.componentIndex=e,this.triangleNr=n}}class c extends r{constructor(t,s,r){super(s,null),this.point=t,this.createVoxelGraphic=r}}class o extends r{constructor(t,s){super(t,null),this.createTiles3DGraphic=s}}function u(r){return t(r)&&r.intersector===s.I3S&&!!r.target}function h(r){return t(r)&&r.intersector===s.VOXEL&&!!r.target}function l(r){return t(r)&&r.intersector===s.TILES3D&&!!r.target}export{i as I,n as P,o as T,c as V,h as a,l as b,u as c,a as i};
