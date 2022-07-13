import { oR as e, oS as m, oT as e$1 } from './_virtual_index-fc1e0009.js';
import { s } from './PointSnappingHint-5e892430.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r extends e{constructor(n){super({...n,constraint:new m(n.coordinateHelper,n.targetPoint)});}get hints(){return [new s(this.targetPoint,this.elevationInfo)]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o(o,n,r$1){switch(o.type){case"edge":return new e$1({coordinateHelper:n,edgeStart:n.pointToVector(o.start),edgeEnd:n.pointToVector(o.end),targetPoint:n.pointToVector(o.target),objectId:o.objectId,elevationInfo:r$1});case"vertex":return new r({coordinateHelper:n,targetPoint:n.pointToVector(o.target),objectId:o.objectId,elevationInfo:r$1})}}

export { o };
