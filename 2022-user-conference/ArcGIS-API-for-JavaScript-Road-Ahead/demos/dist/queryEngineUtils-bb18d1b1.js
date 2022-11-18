import { xf as n, xg as N, f5 as s, ih as l, xh as e, m as r$2 } from './_virtual_index-1ea2035a.js';
import { o } from './VertexSnappingCandidate-92ca86f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r$1 extends n{constructor(n){super({...n,constraint:new N(n.coordinateHelper,n.edgeStart,n.edgeEnd,n.getGroundElevation)});}get hints(){return [new s(l.REFERENCE,this.constraint.start,this.constraint.end,this.elevationInfo,this.domain)]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r(e$1,r,a,d){switch(e$1.type){case"edge":return e$1.draped?new r$1({coordinateHelper:r,edgeStart:r.pointToVector(e$1.start),edgeEnd:r.pointToVector(e$1.end),targetPoint:r.pointToVector(e$1.target),objectId:e$1.objectId,getGroundElevation:d,elevationInfo:a}):new e({coordinateHelper:r,edgeStart:r.pointToVector(e$1.start),edgeEnd:r.pointToVector(e$1.end),targetPoint:r.pointToVector(e$1.target),objectId:e$1.objectId,elevationInfo:a});case"vertex":return new o({coordinateHelper:r,targetPoint:r.pointToVector(e$1.target),objectId:e$1.objectId,elevationInfo:a})}}function a(t){return r$2(t)&&"3d"===t.type?(e,o,n)=>t.elevationProvider.getElevation(e,o,n,t.spatialReference,"ground"):()=>null}

export { a, r };
