import { xf as n, xi as j } from './_virtual_index-1ea2035a.js';
import { s } from './PointSnappingHint-71b3a4f1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o extends n{constructor(n){super({...n,constraint:new j(n.coordinateHelper,n.targetPoint)});}get hints(){return [new s(this.targetPoint,this.elevationInfo,this.domain)]}}

export { o };
