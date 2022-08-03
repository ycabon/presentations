import { qP as e } from './_virtual_index-9b831d4a.js';
import { r } from './VertexSnappingCandidate-6547b1c5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o(o,n,r$1){switch(o.type){case"edge":return new e({coordinateHelper:n,edgeStart:n.pointToVector(o.start),edgeEnd:n.pointToVector(o.end),targetPoint:n.pointToVector(o.target),objectId:o.objectId,elevationInfo:r$1});case"vertex":return new r({coordinateHelper:n,targetPoint:n.pointToVector(o.target),objectId:o.objectId,elevationInfo:r$1})}}

export { o };
