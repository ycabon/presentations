/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{P as t}from"./snappingUtils.js";import{F as n}from"./SnappingManager.js";import{P as s}from"./PointSnappingHint.js";class i extends n{constructor(n){super({...n,constraint:new t(n.targetPoint)})}get hints(){return[new s(this.targetPoint,this.isDraped,this.domain)]}}export{i as V};
