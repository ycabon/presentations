import { qX as e, qY as m } from './_virtual_index-9b831d4a.js';
import { s } from './PointSnappingHint-f4370fcd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r extends e{constructor(n){super({...n,constraint:new m(n.coordinateHelper,n.targetPoint)});}get hints(){return [new s(this.targetPoint,this.elevationInfo)]}}

export { r };
